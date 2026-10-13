// =====================================================
// PROJECT DATA — with custom SVG illustrations
// =====================================================
const PROJECTS_ALL = [
  {
    id: "narcan",
    title: "Narcan (naloxone) dispenser",
    tagline: "Mechanism + control · 3P04",
    period: "2025",
    summary: "Emergency-access dispenser prototype: mechanical dosing path, sensors, and Arduino firmware tuned for reliable timing and safe actuation.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/narcan/01.webp",
    categories: ["embedded", "mechanical"],
    codeFile: "Progects_Imgs/Narcan Decpencer/3P04_Final_code.ino",
    gallery: [
      "media/narcan/01.webp",
      "media/narcan/02.webp",
      "media/narcan/03.webp",
      "media/narcan/04.webp",
      "media/narcan/05.webp",
      "media/narcan/06.webp",
      "media/narcan/07.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="96" y="52" width="128" height="148" rx="14" fill="white"/>
        <path d="M160 88v64M128 120h64" opacity="0.85"/>
        <circle cx="160" cy="178" r="10" fill="currentColor" opacity="0.15"/>
        <path d="M70 190h180" opacity="0.35"/>
      </svg>`,
    tags: ["Arduino", "C/C++", "Sensors", "Actuation", "Biomedical"],
    problem: "Deliver a naloxone dispenser that is fast to access in an emergency, mechanically dependable, and straightforward to verify in lab demos.",
    approach: [
      "Iterated on the dispensing mechanism and fixturing so doses release predictably under load.",
      "Wrote Arduino firmware for sensing, debounced inputs, and coordinated actuator timing.",
      "Logged integration decisions (electrical ↔ mechanical ↔ software) so the team could debug quickly."
    ],
    impact: [
      "End-to-end prototype: sense → decide → actuate, repeatable across trials.",
      "Firmware structure that can extend to richer sensing or locking logic later."
    ],
    links: []
  },
  {
    id: "macbionic",
    title: "MacBionic Arm",
    tagline: "Embedded Lead · IEEE McMaster",
    period: "Sep 2025 — Present",
    summary: "Robotic arm with precise PID-controlled motion and a computer-vision pipeline that detects targets and executes grasp sequences.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/macbionic/01.webp",
    gallery: [
      "media/macbionic/01.webp",
      "media/macbionic/02.webp",
      "media/macbionic/03.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="240" cy="60" r="22" stroke-dasharray="3 6" opacity="0.7"/>
        <circle cx="240" cy="60" r="6" fill="currentColor"/>
        <path d="M40 200 L40 150 L100 100 L160 130 L210 80"/>
        <circle cx="40" cy="200" r="10" fill="white"/>
        <circle cx="40" cy="150" r="7" fill="white"/>
        <circle cx="100" cy="100" r="7" fill="white"/>
        <circle cx="160" cy="130" r="7" fill="white"/>
        <path d="M210 80 L228 70 M210 80 L218 95 M210 80 L228 88" stroke-linecap="round"/>
        <path d="M40 200 L40 215 L25 215 M40 215 L55 215" opacity="0.5"/>
      </svg>`,
    tags: ["STM32", "C++", "PID Control", "OpenCV", "Computer Vision"],
    problem: "Existing prototypes built on Arduino lacked the timing precision and control loop performance needed for reliable robotic-arm motion and target interaction.",
    approach: [
      "Migrated firmware architecture from Arduino to STM32 to access higher-resolution timers and better real-time guarantees.",
      "Designed and tuned PID control loops for joint actuation, eliminating gripper overshoot.",
      "Built a computer-vision pipeline to detect targets, project them into the arm coordinate frame, and trigger detect-and-grasp sequences.",
      "Led a team of 5 across firmware, mechanical, and vision subsystems."
    ],
    impact: [
      "Significantly improved motion precision and repeatability over the Arduino baseline.",
      "Established a clean firmware architecture for future iteration."
    ],
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }],
    categories: ["embedded", "mechanical", "software"]
  },
  {
    id: "hackme",
    title: "HackMe — Cybersecurity Tool",
    tagline: "1st Place · McMaster Engineering Competition",
    period: "Nov 2024",
    summary: "B2B vulnerability scanning tool that won 1st place out of 500+ engineering students and earned a provincial OEC selection.",
    artBg: "#E8E8E8",
    artFg: "#111111",
    coverImage: "media/hackme/01.webp",
    gallery: [
      "media/hackme/01.webp",
      "media/hackme/02.webp",
      "media/hackme/03.webp",
      "media/hackme/04.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M160 30 L70 60 V130 C70 175 105 205 160 218 C215 205 250 175 250 130 V60 Z" fill="white"/>
        <path d="M120 125 L150 155 L210 95"/>
        <path d="M40 80 H30 M40 100 H20 M40 120 H30" opacity="0.5"/>
        <path d="M280 80 H290 M280 100 H300 M280 120 H290" opacity="0.5"/>
        <circle cx="40" cy="80" r="3" fill="currentColor"/>
        <circle cx="40" cy="120" r="3" fill="currentColor"/>
        <circle cx="280" cy="80" r="3" fill="currentColor"/>
        <circle cx="280" cy="120" r="3" fill="currentColor"/>
      </svg>`,
    tags: ["Python", "React", "Network Protocols", "Security"],
    problem: "Small businesses often lack the tooling to identify network and application vulnerabilities before they get exploited.",
    approach: [
      "Built a Python backend that automated discovery and scanning of common vulnerability classes.",
      "Designed a clean React dashboard so non-technical users could understand findings and prioritize fixes.",
      "Modeled the workflow around real B2B use cases under heavy time pressure during the competition."
    ],
    impact: [
      "Won 1st place out of 500+ engineering students.",
      "Selected to represent McMaster University at the Ontario Engineering Competition."
    ],
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }],
    categories: ["software"]
  },
  {
    id: "pacemaker",
    title: "Pacemaker Control System",
    tagline: "Safety-Critical Embedded · 3K04",
    period: "Oct 2024 — Dec 2024",
    summary: "Safety-style pacing firmware on STM32: Simulink state machines, deterministic timing, and a Python device communicator for live parameter changes.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/pacemaker/01.webp",
    gallery: [
      "media/pacemaker/02.webp",
      "media/pacemaker/03.webp",
      "media/pacemaker/04.webp",
      "media/pacemaker/05.webp",
      "media/pacemaker/06.webp",
      "media/pacemaker/01.webp",
      "media/pacemaker/07.webp",
      "media/pacemaker/08.webp",
      "media/pacemaker/09.webp",
      "media/pacemaker/10.webp",
      "media/pacemaker/11.webp",
      "media/pacemaker/12.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M0 130 L70 130 L85 130 L100 90 L115 170 L130 60 L145 180 L160 130 L320 130" />
        <path d="M210 90 C210 75 195 60 180 60 C170 60 162 67 160 78 C158 67 150 60 140 60 C125 60 110 75 110 90 C110 115 160 145 160 145 C160 145 210 115 210 90 Z" opacity="0.18" fill="currentColor"/>
      </svg>`,
    tags: ["STM32", "Simulink", "Python", "UART", "Embedded"],
    problem: "Build a pacemaker control system that satisfies safety, real-time, and reconfigurability requirements typical of regulated medical devices.",
    approach: [
      "Modeled and validated finite state machines for pacing logic in Simulink before generating embedded code.",
      "Implemented firmware on STM32 with attention to deterministic timing and safe failure modes.",
      "Designed a UART communication interface to a Python-based Device Communicator (DCM) for live configuration of pacing parameters."
    ],
    impact: [
      "Delivered an end-to-end system meeting course-defined safety-critical requirements.",
      "Built a workflow that mirrors how regulated medical embedded software is actually designed."
    ],
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }],
    categories: ["embedded", "software"]
  },
  {
    id: "astrocytes",
    title: "Astrocytes Implant Firmware",
    tagline: "Implant firmware contributor",
    period: "2024 — 2025",
    summary: "Embedded firmware work on an astrocytes-related neural implant: sensor read paths, low-power timing, and bench validation against scope traces.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/astrocytes/01.webp",
    gallery: [
      "media/astrocytes/02.webp",
      "media/astrocytes/01.webp",
      "media/astrocytes/03.webp",
      "media/astrocytes/04.webp",
      "media/astrocytes/05.webp",
      "media/astrocytes/06.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="160" cy="120" r="48" fill="white"/>
        <path d="M160 72 V40 M160 168 V200 M112 120 H80 M208 120 H240" />
        <path d="M132 92 L108 70 M188 92 L212 70 M132 148 L108 170 M188 148 L212 170" opacity="0.7"/>
        <circle cx="160" cy="120" r="8" fill="currentColor"/>
      </svg>`,
    tags: ["Embedded C/C++", "Low-Power", "Sensors", "Bench Validation"],
    problem: "Contribute reliable embedded firmware for an implant prototype where timing, signal integrity, and power budget all matter.",
    approach: [
      "Owned the implant-side firmware: sensor sampling, timing, and safe state handling.",
      "Validated behavior on the bench with oscilloscope captures and iterative tuning.",
      "Coordinated with the hardware team so firmware assumptions matched the actual board."
    ],
    impact: [
      "Delivered a working firmware build the team could integrate and demo.",
      "Established a repeatable bench-test loop for future iterations."
    ],
    links: [],
    categories: ["embedded"]
  },
  {
    id: "assistive-device",
    title: "Assistive Device for a Patient",
    tagline: "Design Project · DP4",
    period: "2024",
    summary: "Patient-focused assistive device: mechanism, electronics, and control loop designed around the user's actual daily-use constraints.",
    artBg: "#E8E8E8",
    artFg: "#111111",
    coverImage: "media/assistive-device/01.webp",
    gallery: [
      "media/assistive-device/02.webp",
      "media/assistive-device/01.webp",
      "media/assistive-device/03.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="70" y="70" width="180" height="100" rx="14" fill="white"/>
        <circle cx="160" cy="120" r="22" fill="currentColor" opacity="0.18"/>
        <path d="M100 120 H140 M180 120 H220" />
        <path d="M160 70 V40 M160 170 V200" opacity="0.55"/>
      </svg>`,
    tags: ["Mechanical Design", "Electronics", "User-Centered", "Prototype"],
    problem: "Build an assistive device tailored to a real patient's daily routine, balancing comfort, reliability, and ease of use.",
    approach: [
      "Mapped patient needs into concrete mechanical and electrical requirements.",
      "Prototyped the mechanism and the control electronics in parallel and iterated on fit.",
      "Validated against use-case scenarios with the team."
    ],
    impact: [
      "Delivered a working prototype that addressed the targeted assistive task.",
      "Documented design choices so the next iteration can build on it directly."
    ],
    links: [],
    categories: ["mechanical", "embedded"]
  },
  {
    id: "automation",
    title: "Gear Shifter & Fridge Automation",
    tagline: "Design Project · DP3",
    period: "2024",
    summary: "Two automation builds in one project — a motorized gear-shift assist and a fridge automation rig, both driven by sensors and embedded control.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/automation/01.webp",
    gallery: [
      "media/automation/02.webp",
      "media/automation/01.webp",
      "media/automation/03.webp",
      "media/automation/04.webp",
      "media/automation/05.webp",
      "media/automation/06.webp",
      "media/automation/07.webp",
      "media/automation/08.webp",
      "media/automation/09.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="120" cy="120" r="44" fill="white"/>
        <circle cx="120" cy="120" r="14" fill="currentColor" opacity="0.2"/>
        <path d="M120 76 V60 M120 180 V164 M76 120 H60 M180 120 H164 M88 88 L76 76 M152 88 L164 76 M88 152 L76 164 M152 152 L164 164" />
        <rect x="200" y="70" width="80" height="110" rx="8" fill="white"/>
        <path d="M200 120 H280" opacity="0.6"/>
        <circle cx="270" cy="100" r="3" fill="currentColor"/>
        <circle cx="270" cy="150" r="3" fill="currentColor"/>
      </svg>`,
    tags: ["Mechanical", "Sensors", "Embedded Control", "Automation"],
    problem: "Design two automation systems — a gear-shifter assist and a fridge automation setup — that are reliable enough for everyday use.",
    approach: [
      "Specified the motion and sensing requirements for each subsystem.",
      "Built the mechanisms and wired the embedded control electronics.",
      "Tested both rigs end-to-end and tuned thresholds for repeatable behavior."
    ],
    impact: [
      "Both rigs operated reliably during demos.",
      "Validated a workflow that combines mechanical design with embedded control."
    ],
    links: [],
    categories: ["mechanical", "embedded"]
  },
  {
    id: "sumo",
    title: "Autonomous Sumo Robot",
    tagline: "Competition Robotics",
    period: "2024",
    summary: "Sumo-style autonomous robot: edge sensing, opponent detection, and drive logic tuned through test matches — 3rd in bracket.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/sumo/01.webp",
    gallery: [
      "media/sumo/01.webp",
      "media/sumo/02.webp",
      "media/sumo/03.webp",
      "media/sumo/04.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="160" cy="130" r="72" fill="white"/>
        <circle cx="160" cy="130" r="52" opacity="0.15" fill="currentColor"/>
        <path d="M118 130h84M160 88v84"/>
        <circle cx="130" cy="110" r="8" fill="currentColor"/>
        <circle cx="190" cy="110" r="8" fill="currentColor"/>
      </svg>`,
    tags: ["Embedded C/C++", "Sensors", "Motor Control", "Competition"],
    problem: "Design a small autonomous robot that could detect the opponent, stay in bounds, and win sumo-style matches under tight size and weight rules.",
    approach: [
      "Iterated on chassis, drive, and sensor placement with the team for stability and traction.",
      "Implemented control and state logic for search, attack, and edge-avoidance behavior.",
      "Tuned timing and thresholds through test matches before competition day."
    ],
    impact: [
      "Earned 3rd place in the bracket against strong teams.",
      "Delivered a reliable platform we could debug quickly between rounds."
    ],
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }],
    categories: ["embedded", "mechanical"]
  },
  {
    id: "signal-processing",
    title: "EEG Signal Processing Workshop",
    tagline: "Workshop Design · IEEE McMaster",
    period: "2025",
    summary: "Python workshop built around real EEG brain data: filtering into frequency bands, plotting raw versus filtered signals, and rendering topographic brain maps with MNE-Python.",
    artBg: "#ECECEC",
    artFg: "#111111",
    coverImage: "media/signal-processing/01.webp",
    gallery: [
      "media/signal-processing/02.webp",
      "media/signal-processing/03.webp",
      "media/signal-processing/04.webp",
      "media/signal-processing/05.webp",
      "media/signal-processing/06.webp",
      "media/signal-processing/07.webp",
      "media/signal-processing/08.webp",
      "media/signal-processing/01.webp",
      "media/signal-processing/09.webp",
      "media/signal-processing/10.webp",
      "media/signal-processing/11.webp",
      "media/signal-processing/12.webp",
      "media/signal-processing/13.webp",
      "media/signal-processing/14.webp",
      "media/signal-processing/15.webp",
      "media/signal-processing/16.webp",
      "media/signal-processing/17.webp",
      "media/signal-processing/18.webp",
      "media/signal-processing/19.webp",
      "media/signal-processing/20.webp",
      "media/signal-processing/21.webp",
      "media/signal-processing/22.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 55 H70 L78 38 L84 72 L90 25 L96 82 L102 55 H160" />
        <path d="M20 95 H68 L75 80 L81 110 L87 68 L93 118 L99 95 H160" opacity="0.65"/>
        <path d="M20 135 H66 L72 122 L78 148 L84 112 L90 155 L96 135 H160" opacity="0.4"/>
        <ellipse cx="240" cy="115" rx="52" ry="58" fill="white"/>
        <ellipse cx="240" cy="110" rx="32" ry="35" opacity="0.12" fill="currentColor" stroke="none"/>
        <ellipse cx="240" cy="110" rx="18" ry="20" opacity="0.2" fill="currentColor" stroke="none"/>
        <circle cx="240" cy="110" r="7" fill="currentColor" opacity="0.3" stroke="none"/>
      </svg>`,
    tags: ["Python", "MNE-Python", "NumPy", "SciPy", "Signal Processing", "EEG"],
    problem: "Signal processing theory is abstract when taught with textbook examples. Using real EEG data makes the filtering decisions tangible — students can see exactly how their choices change actual brain signals.",
    approach: [
      "Sourced a real EEG dataset and built Python notebooks guiding students through preprocessing, filtering, and frequency-band extraction.",
      "Covered each canonical band — delta, theta, alpha, beta, gamma — with bandpass filters, plotting raw versus filtered traces side by side.",
      "Used MNE-Python to render topographic brain maps, connecting frequency-domain output to physical brain regions.",
      "Ran the workshop for 30+ IEEE McMaster students."
    ],
    impact: [
      "Students processed real brain data end-to-end: raw EEG traces to labeled topographic brain maps.",
      "Workshop materials are now part of IEEE McMaster's recurring technical curriculum."
    ],
    links: [],
    categories: ["software"]
  },
  {
    id: "tetris",
    title: "Tetris on LED Matrix",
    tagline: "Arduino · Game Logic",
    period: "2023",
    summary: "Playable Tetris on Arduino + LED matrix: game loop, collisions, line clears, and tight redraw timing without an OS.",
    artBg: "#E8E8E8",
    artFg: "#111111",
    coverImage: "media/tetris/01.webp",
    gallery: [
      "media/tetris/01.webp",
      "media/tetris/02.webp",
      "media/tetris/03.webp"
    ],
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="90" y="40" width="140" height="170" rx="4" fill="white"/>
        <path d="M110 60h40v40h-40z M150 60h40v40h-40z M110 100h40v40h-40z" opacity="0.35" fill="currentColor"/>
        <circle cx="250" cy="200" r="6" fill="currentColor"/>
      </svg>`,
    tags: ["Arduino", "C/C++", "LED Matrix", "Embedded"],
    problem: "Implement a playable Tetris clone on minimal hardware with responsive controls and stable frame timing.",
    approach: [
      "Structured game state (grid, active piece, next piece) for predictable updates each tick.",
      "Handled button debouncing and rotation collision checks without blocking the render loop.",
      "Optimized redraws for the matrix so gameplay stayed smooth."
    ],
    impact: [
      "Shipped a fully playable game demo on real hardware.",
      "Practice in timing-critical firmware without an OS."
    ],
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }],
    categories: ["embedded"],
    codeFile: "Progects_Imgs/Tetris/400529762_Final_project_2TA4.ino"
  }
];

function getWorkFilter() {
  const wrap = document.getElementById("workFilters");
  if (!wrap) return "all";
  const active = wrap.querySelector(".work-filter.is-active");
  return (active && active.dataset.filter) || "all";
}

function projectMatchesFilter(p, filter) {
  if (!filter || filter === "all") return true;
  const cats = p.categories || [];
  return cats.includes(filter);
}

function projectsToRender() {
  const mode = document.body.dataset.projectsPage || "home";
  if (mode === "all") {
    const f = getWorkFilter();
    return PROJECTS_ALL.filter(p => projectMatchesFilter(p, f));
  }
  const ids = (document.body.dataset.homeProjectIds || "narcan,pacemaker,macbionic,sumo")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);
  const picked = ids.map(id => PROJECTS_ALL.find(p => p.id === id)).filter(Boolean);
  return picked.length ? picked : PROJECTS_ALL.slice(0, 4);
}

function escAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Local asset paths may include spaces — encode each segment for valid URLs.
 *  Still needed for the .ino source files, whose names were left as they are. */
function assetUrl(storagePath) {
  return String(storagePath)
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

/** Every image under media/ is generated in three tiers:
 *    NN-sm.webp    longest side 1000  — gallery grid cells
 *    NN.webp       longest side 1600  — card covers / larger viewports
 *    NN-full.webp  original pixels    — lightbox, where detail is the point
 *  The stored path is the middle tier; the others are derived from it. */
function mediaTier(basePath, tier) {
  return tier ? String(basePath).replace(/\.webp$/, `-${tier}.webp`) : String(basePath);
}

function workCardArt(p) {
  if (p.coverImage) {
    const alt = escAttr(`${p.title} preview`);
    const sm = mediaTier(p.coverImage, "sm");
    // No width/height here: .work-art already reserves the box with aspect-ratio,
    // and the image is positioned absolutely, so the attributes bought nothing
    // and the old hardcoded 800x500 was wrong for portrait covers anyway.
    return `<img class="work-cover-img" src="${p.coverImage}"
      srcset="${sm} 1000w, ${p.coverImage} 1600w"
      sizes="(max-width: 900px) 92vw, 52vw"
      alt="${alt}" loading="lazy" decoding="async" />`;
  }
  return `<div class="art-illu">${p.art}</div>`;
}

function renderWorkList() {
  const list = document.getElementById("workList");
  if (!list) return;
  const projects = projectsToRender();
  if (!projects.length) {
    list.innerHTML = `<p class="work-empty">No projects match this filter yet.</p>`;
    return;
  }
  list.innerHTML = projects.map((p, i) => `
    <a class="work-card ${i % 2 === 1 ? "flip" : ""} reveal"
       href="project.html?id=${encodeURIComponent(p.id)}"
       style="--art-bg:${p.artBg}; --art-fg:${p.artFg}"
       aria-label="Open ${p.title} case study">
      <div class="work-art">
        <div class="art-grid"></div>
        ${workCardArt(p)}
      </div>
      <div class="work-body">
        <p class="work-tag"><span>●</span> ${p.tagline}</p>
        <h3>${p.title}</h3>
        <p class="work-summary">${p.summary}</p>
        <div class="work-tags">
          ${p.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
        <span class="work-cta">
          View case study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </span>
      </div>
    </a>
  `).join("");
}

renderWorkList();

// =====================================================
// PROJECT DETAIL PAGE
// =====================================================
function linkTargetAttrs(url) {
  if (/^https?:\/\//i.test(url)) return ' target="_blank" rel="noopener noreferrer"';
  return "";
}

/** Hero: full photo grid for the project (click any shot to enlarge). */
function projectGalleryHtml(p) {
  const shots = Array.isArray(p.gallery) && p.gallery.length
    ? p.gallery
    : (p.coverImage ? [p.coverImage] : []);
  if (!shots.length) {
    return `
    <div class="modal-art modal-art--static" style="--art-bg:${p.artBg}; --art-fg:${p.artFg}">
      <div class="art-grid"></div>
      ${p.art}
    </div>`;
  }
  // Grid cells are ~250px wide, so the small tier is what almost everyone loads.
  // data-full carries the original-resolution file for the lightbox only.
  const imgs = shots.map((src) =>
    `<img src="${mediaTier(src, "sm")}"
      srcset="${mediaTier(src, "sm")} 1000w, ${src} 1600w"
      sizes="(max-width: 900px) 45vw, 250px"
      data-full="${mediaTier(src, "full")}"
      alt="" class="project-gallery-img" loading="lazy" decoding="async"
      title="Click to enlarge" />`
  ).join("");
  return `
    <div class="project-gallery-wrap">
      <div class="project-gallery-grid" aria-label="${escAttr(p.title)} project photos">${imgs}</div>
    </div>`;
}

function projectDetailHtml(p) {
  return `
    ${projectGalleryHtml(p)}
    <p class="m-tagline">${p.tagline} · ${p.period}</p>
    <h1 id="modalTitle">${p.title}</h1>
    <p class="m-summary">${p.summary}</p>

    <div class="modal-section">
      <h4>The Problem</h4>
      <p>${p.problem}</p>
    </div>

    <div class="modal-section">
      <h4>My Approach</h4>
      <ul>${p.approach.map(a => `<li>${a}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4>Impact</h4>
      <ul>${p.impact.map(a => `<li>${a}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4>Tech Stack</h4>
      <div class="modal-tags">
        ${p.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>

    ${p.codeFile ? `
    <div class="modal-section">
      <h4>Code</h4>
      <p><a class="btn ghost" href="${assetUrl(p.codeFile)}">Open project sketch (.ino)</a></p>
    </div>` : ""}

    ${p.links.length ? `
      <div class="modal-actions">
        ${p.links.map(l => {
          const href = /^https?:\/\//i.test(l.url) ? l.url : assetUrl(l.url);
          return `<a class="btn ghost" href="${href}"${linkTargetAttrs(l.url)}>${l.label} ↗</a>`;
        }).join("")}
      </div>` : ""}
  `;
}

function renderProjectDetailPage() {
  const container = document.getElementById("projectDetailContent");
  if (!container) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS_ALL.find(x => x.id === id);

  if (!p) {
    document.title = "Project not found — Sina Forouzanfar";
    container.innerHTML = `
      <h1>Project not found</h1>
      <p class="m-summary">That project doesn't exist or may have moved.</p>
      <p><a class="btn ghost" href="work.html">← Back to all projects</a></p>
    `;
    return;
  }

  document.title = `${p.title} — Sina Forouzanfar`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", p.summary);

  container.innerHTML = projectDetailHtml(p);
}

renderProjectDetailPage();

function ensureGalleryLightbox() {
  if (document.getElementById("galleryLightbox")) return;
  const lb = document.createElement("div");
  lb.id = "galleryLightbox";
  lb.className = "gallery-lightbox";
  lb.hidden = true;
  lb.innerHTML = `
    <button type="button" class="gallery-lightbox-backdrop" data-gallery-zoom-close aria-label="Close enlarged image"></button>
    <figure class="gallery-lightbox-inner">
      <button type="button" class="gallery-lightbox-close" data-gallery-zoom-close aria-label="Close">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <img src="" alt="" class="gallery-lightbox-img" decoding="async" />
    </figure>`;
  document.body.appendChild(lb);
}

function openGalleryLightbox(imgEl) {
  ensureGalleryLightbox();
  const lb = document.getElementById("galleryLightbox");
  if (!lb || !imgEl) return;
  const big = lb.querySelector(".gallery-lightbox-img");
  // Prefer the full-resolution tier; currentSrc would hand back whichever
  // small srcset candidate the browser picked for the grid cell.
  big.src = imgEl.dataset.full || imgEl.currentSrc || imgEl.src;
  big.alt = imgEl.alt || "Project photo";
  lb.hidden = false;
  document.body.classList.add("gallery-lightbox-open");
  lb.querySelector(".gallery-lightbox-close")?.focus({ preventScroll: true });
}

function closeGalleryLightbox() {
  const lb = document.getElementById("galleryLightbox");
  if (lb) lb.hidden = true;
  document.body.classList.remove("gallery-lightbox-open");
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-gallery-zoom-close]")) {
    closeGalleryLightbox();
    return;
  }
  const img = e.target.closest("#projectDetailContent .project-gallery-img");
  if (img) {
    e.preventDefault();
    openGalleryLightbox(img);
  }
});

document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("galleryLightbox");
  if (lb && !lb.hidden && e.key === "Escape") {
    e.preventDefault();
    closeGalleryLightbox();
  }
});

// =====================================================
// MOBILE NAV
// =====================================================
(function () {
  const hamburger = document.getElementById("navHamburger");
  if (!hamburger) return;

  // Inject overlay once
  const overlay = document.createElement("div");
  overlay.id = "mobileNavOverlay";
  overlay.className = "mobile-nav";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <ul class="mobile-nav-links">
      <li><a href="work.html">Projects</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="index.html#skills">Skills</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
    <a class="mobile-nav-resume-link" href="Sina_Forouzanfar_Resume.pdf" target="_blank" rel="noopener">Resume ↗</a>
  `;
  document.body.appendChild(overlay);

  function openMenu() {
    hamburger.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    overlay.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  // Close on nav link click (for same-page anchors)
  overlay.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeMenu();
  });
})();

// =====================================================
// CUSTOM CURSOR
// =====================================================
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (dot && ring) {
  // The ring's circle lives on a child so its hover scale can transition in CSS
  // without colliding with the transform this loop writes every frame.
  const ringShape = document.createElement("span");
  ringShape.className = "cursor-ring-shape";
  ring.appendChild(ringShape);

  const cursorMq = window.matchMedia("(min-width: 901px)");
  let cursorActive = cursorMq.matches;

  let mx = 0, my = 0;   // where the pointer actually is
  let rx = 0, ry = 0;   // where the ring has eased to
  let placed = false;   // snap the ring to the pointer the first time we see it
  let frame = null;

  function schedule() {
    if (frame === null) frame = requestAnimationFrame(render);
  }

  function render() {
    frame = null;
    if (!cursorActive) return;

    // The dot is the cursor, so it tracks the pointer exactly — no easing.
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;

    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

    // Keep animating only while the ring still has ground to make up; once it
    // catches the pointer the loop stops until the next move.
    if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) schedule();
  }

  // mousemove only records coordinates. A high-polling-rate mouse can fire far
  // more often than the display refreshes, so all writing happens in the frame.
  document.addEventListener("mousemove", (e) => {
    if (!cursorActive) return;
    mx = e.clientX; my = e.clientY;
    if (!placed) { rx = mx; ry = my; placed = true; }
    schedule();
  }, { passive: true });

  cursorMq.addEventListener("change", (e) => {
    cursorActive = e.matches;
    if (cursorActive) schedule();
  });

  const hoverables = "a, button, .work-card, .work-filter, .project-gallery-img, .gallery-lightbox-close, .gallery-lightbox-backdrop, .skill-cat, [data-close]";
  document.addEventListener("mouseover", (e) => {
    if (cursorActive && e.target.closest(hoverables)) ring.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (cursorActive && e.target.closest(hoverables)) ring.classList.remove("hover");
  });
}

// =====================================================
// HEADER ON SCROLL
// =====================================================
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// =====================================================
// REVEAL ON SCROLL
// =====================================================
const revealTargets = document.querySelectorAll(
  ".section, .skill-cat, .xp-item"
);
revealTargets.forEach(el => el.classList.add("reveal"));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

revealTargets.forEach(el => io.observe(el));

let workCardIo = null;
function observeWorkCards() {
  if (!workCardIo) {
    workCardIo = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          workCardIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  document.querySelectorAll("#workList .work-card.reveal").forEach(el => {
    workCardIo.observe(el);
  });
}

observeWorkCards();

const workFilters = document.getElementById("workFilters");
if (workFilters) {
  workFilters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn || btn.tagName !== "BUTTON") return;
    const val = btn.dataset.filter;
    workFilters.querySelectorAll("[data-filter]").forEach(b => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    renderWorkList();
    observeWorkCards();
  });
}

// =====================================================
// PAGE VISIBILITY — pause infinite animations when tab hidden
// =====================================================
document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("page-hidden", document.hidden);
});
