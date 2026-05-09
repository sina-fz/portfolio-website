#include <Wire.h>
#include "Adafruit_SGP30.h"
#include <Servo.h>


Adafruit_SGP30 sgp;

//  sensor readings
uint16_t eCO2 = 0;

uint16_t TVOC = 0;

// variable definition 
const int NUM_SAMPLES = 7;
int eco2Samples[NUM_SAMPLES];
int sampleIndex = 0;
bool bufferFull = false;
float baseline = 0;
float delta = 0;
int breath_limit = 7;


int breathThreshold = 50; // this is the threshold for having a peak
unsigned long lastBreathTime = 0;
float currentBPM = 0;

// delta is used for storing the differnce of new eco2 data from the baseline 
const int WINDOW_SIZE= 7;
int deltaHistory[WINDOW_SIZE] =  {0, 0, 0, 0, 0, 0 ,0};
int peakCooldown = 0; // we use this to avoid double counting a same breath

// Timing
unsigned long lastRead = 0;
const unsigned long readInterval = 1000;   // 1 second

unsigned long dangerStartTime= 0;
bool inDangerZone = false;
bool overdoseTriggered =  false; 


Servo myServo; 

// this function gives the average of the last 7 data ( after there is 7 data) which will be used as baseline
    float getBaseline() {
    int count;
    if (bufferFull) {
        count = NUM_SAMPLES;
    } else {
        count = sampleIndex;
    }
    if (count == 0) return 0;
    long sum = 0;

    // Add all samples together
    for (int i = 0; i < count; i++) {
        sum += eco2Samples[i];
    }
    return (float)sum / count;
}

// making a circular buffer: when we get to the end of the array we loop back to first index
void addSample(int value) {
  eco2Samples[sampleIndex++] = value;
  if (sampleIndex >=  NUM_SAMPLES) {
    sampleIndex= 0;
    bufferFull = true;
  }
}


void setup() {
  Serial.begin(115200);

  if (!sgp.begin()) {
    Serial.println("SGP30 not detected. Check wiring (SDA->A4, SCL->A5).");
    while (1);
  }

  Serial.println("SGP30 detected. Sensor booting up...");
  Serial.println("Waiting 60 seconds for sensor stabilization.");

  // 60-second stabilization countdown
  for(int i = 60; i > 0; i--) {
    Serial.print("Stabilizing... ");
    Serial.print(i);
    Serial.println(" seconds remaining.");
    delay(1000); 
  }

  Serial.println("\n--- STABILIZATION COMPLETE. SYSTEM ACTIVE. ---");
  lastBreathTime = millis(); 


}


void loop() {
  if (millis() - lastRead >= readInterval) { // this runs the loop every 1 second
    lastRead = millis();

    if (!sgp.IAQmeasure()) {
      Serial.println("Measurement failed");
      return;
    }

    eCO2 = sgp.eCO2;
    TVOC = sgp.TVOC;
    baseline = getBaseline();
    delta = eCO2 - baseline;

  
    // shifiting the 7 sample array : Move everything one spot to the left to make room for the new reading 
    for (int i =  0; i < WINDOW_SIZE - 1; i++) {
      deltaHistory[i] =  deltaHistory[i + 1];
    }
    deltaHistory[WINDOW_SIZE - 1] = delta; // Add newest reading at the end(index 6)


    // peak detection : We looking at the middle of the window (index 3) to see if it's a peak.
    bool isPeak = true;
    int centerIndex = 3;

    for (int i = 0; i < WINDOW_SIZE; i++) {
      if (i !=  centerIndex && deltaHistory[i] >= deltaHistory[centerIndex]) {
        isPeak = false; // It's not the highest point, so it's not a peak
       }
    }

    // Check if the peak is actually high by comparing it to our threshold
    if (deltaHistory[centerIndex] < breathThreshold) {
      isPeak = false;
    }

    // time down for after detection
    if (peakCooldown > 0) {
      peakCooldown--;
    }

    bool breathDetectedNow = false;

    // counting Breath : if there is a peak and we are not in the cool down
    if (isPeak && peakCooldown == 0) {
      breathDetectedNow = true;
      peakCooldown = 2; //we lock the system for 2 seconds so we don't count the tail end of the same breath

      // Calculate BPM
      unsigned long breathInterval = millis() - lastBreathTime;
      if (breathInterval > 0) {
        currentBPM = 60000.0 / (float)breathInterval;
      }
      lastBreathTime = millis(); 
    }
  
    // Calculating the live BPM based on the current stopwatch. if the user doesnt breath 
    unsigned long timeSinceLastBreath = millis() - lastBreathTime;
    if (timeSinceLastBreath > 0 && lastBreathTime > 0) {
        float liveBPM = 60000.0 / (float)timeSinceLastBreath;
        if (liveBPM < currentBPM) {
            currentBPM = liveBPM; 
        }
    }

    // making sure the lastBreathTime > 0 so it doesn't trigger immediately on startup
    if (currentBPM < breath_limit && lastBreathTime > 0) {
        if (!inDangerZone) {
            inDangerZone = true;
            dangerStartTime = millis();
        } else {
            // They are currently in the danger zone. Check if 8571.42857143 have passed.
            if ((millis() - dangerStartTime > 8571.42857143) && !overdoseTriggered) {
                Serial.println("!!! danger of overdoes!!!  relase!! !!!");
                overdoseTriggered = true; // Locks it so it only prints once per emergency
            }
        }
    } else {
        // Their BPM is 7 or higher and we reset all danger variables.
        inDangerZone = false;
        overdoseTriggered =  false;
    }

    
    // the output:
    Serial.print("eCO2: "); Serial.print(eCO2); Serial.print(" ppm | ");
    Serial.print("Delta: "); Serial.print(delta); Serial.print(" | ");
    Serial.print("Est. BPM: "); Serial.print(currentBPM); Serial.print(" | ");
    
    if (breathDetectedNow) {
      Serial.println(" --- BREATH COUNTED! ---");
    } else {
      Serial.println(""); 
    }

    addSample(eCO2);

    // plotting the  breath

    
    Serial.println(breathDetectedNow);
    Serial.println(eCO2);

  }
}