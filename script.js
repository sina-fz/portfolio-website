// =====================================================
// PROJECT DATA — with custom SVG illustrations
// =====================================================
const projects = [
  {
    id: "macbionic",
    title: "MacBionic Arm",
    tagline: "Embedded Lead · IEEE McMaster",
    period: "Sep 2025 — Present",
    summary: "Robotic arm with precise PID-controlled motion and a computer-vision pipeline that detects targets and executes grasp sequences.",
    artBg: "#DBEAFE",
    artFg: "#2563EB",
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
      "Lead a team of 5 across firmware, mechanical, and vision subsystems."
    ],
    impact: [
      "Significantly improved motion precision and repeatability over the Arduino baseline.",
      "Established a clean firmware architecture for future iteration."
    ],
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }]
  },
  {
    id: "hackme",
    title: "HackMe — Cybersecurity Tool",
    tagline: "1st Place · McMaster Engineering Competition",
    period: "Nov 2024",
    summary: "B2B vulnerability scanning tool that won 1st place out of 500+ engineering students and earned a provincial OEC selection.",
    artBg: "#D1FAE5",
    artFg: "#10B981",
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
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }]
  },
  {
    id: "pacemaker",
    title: "Pacemaker Control System",
    tagline: "Safety-Critical Embedded · 3K04",
    period: "Oct 2024 — Dec 2024",
    summary: "Pacing firmware on STM32 with Simulink-modeled state machines and a Python device communicator for live configuration.",
    artBg: "#DBEAFE",
    artFg: "#2563EB",
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
    links: [{ label: "GitHub", url: "https://github.com/sina-fz" }]
  },
  {
    id: "arche",
    title: "Biomedical Monitoring Device",
    tagline: "Electrical Lead · Arche Biotechnologies",
    period: "May 2024 — Dec 2024",
    summary: "Electrical design and prototyping of a biomedical monitoring device with sensor fusion and validated UART data integrity.",
    artBg: "#D1FAE5",
    artFg: "#10B981",
    art: `
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="60" y="60" width="200" height="120" rx="8" fill="white"/>
        <rect x="120" y="100" width="80" height="50" rx="3" fill="currentColor"/>
        <path d="M60 90 H30 M60 110 H30 M60 130 H30 M60 150 H30 M260 90 H290 M260 110 H290 M260 130 H290 M260 150 H290 M90 60 V30 M120 60 V30 M150 60 V30 M180 60 V30 M210 60 V30 M240 60 V30 M90 180 V210 M120 180 V210 M150 180 V210 M180 180 V210 M210 180 V210 M240 180 V210"/>
        <circle cx="160" cy="125" r="6" fill="white"/>
      </svg>`,
    tags: ["KiCad", "Arduino Nano", "AS72651", "UART", "Hardware"],
    problem: "Design the electrical subsystem of a biomedical monitoring device, integrating spectral sensors and a display under data-integrity constraints.",
    approach: [
      "Designed full system schematics in KiCad and built preliminary hardware prototypes.",
      "Interfaced Arduino Nano with AS72651 spectral sensors and a WC1602A LCD for real-time data acquisition and display.",
      "Verified UART communication protocols and validated transmission accuracy using oscilloscope measurements."
    ],
    impact: [
      "Delivered a working prototype that the broader team could iterate on.",
      "Established validated communication and acquisition pipelines for downstream development."
    ],
    links: []
  }
];

// =====================================================
// RENDER PROJECT CARDS (alternating layout)
// =====================================================
const list = document.getElementById("workList");
if (list) {
  list.innerHTML = projects.map((p, i) => `
    <button class="work-card ${i % 2 === 1 ? "flip" : ""} reveal"
            data-id="${p.id}"
            type="button"
            style="--art-bg:${p.artBg}; --art-fg:${p.artFg}"
            aria-label="Open ${p.title} case study">
      <div class="work-art">
        <div class="art-grid"></div>
        <div class="art-illu">${p.art}</div>
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
    </button>
  `).join("");
}

// =====================================================
// MODAL
// =====================================================
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
let lastFocused = null;

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  modalContent.innerHTML = `
    <div class="modal-art" style="--art-bg:${p.artBg}; --art-fg:${p.artFg}">
      <div class="art-grid"></div>
      ${p.art}
    </div>
    <p class="m-tagline">${p.tagline} · ${p.period}</p>
    <h2 id="modalTitle">${p.title}</h2>
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

    ${p.links.length ? `
      <div class="modal-actions">
        ${p.links.map(l => `<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}
      </div>` : ""}
  `;

  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeProject() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.addEventListener("click", (e) => {
  const card = e.target.closest(".work-card");
  if (card) { openProject(card.dataset.id); return; }
  if (e.target.closest("[data-close]")) closeProject();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeProject();
});

// =====================================================
// CUSTOM CURSOR
// =====================================================
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (window.matchMedia("(min-width: 901px)").matches && dot && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)${ring.classList.contains("hover") ? " scale(1.6)" : ""}`;
    requestAnimationFrame(loop);
  }
  loop();

  const hoverables = "a, button, .work-card, .skill-cat, .qcard, [data-close]";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverables)) ring.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverables)) ring.classList.remove("hover");
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
  ".section, .work-card, .qcard, .skill-cat, .xp-item"
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

// =====================================================
// ANIMATED STAT COUNTERS
// =====================================================
const counters = document.querySelectorAll("[data-count]");
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.round(value).toString();
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : target.toString();
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(c => counterIO.observe(c));

// =====================================================
// SENSE — sensor mesh particle network
// =====================================================
(function senseMesh() {
  const canvas = document.getElementById("senseCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let particles = [];
  let width = 0, height = 0, dpr = 1;
  let raf = null, running = false;

  const COLORS = ["#2563EB", "#10B981", "#0d9488"]; // move, sense, respond (mechatronics loop)
  const LINE_COLOR = "11, 18, 32"; // ink rgb
  const LINK_DIST = 130;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    width = rect.width;
    height = rect.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    initParticles();
  }

  function initParticles() {
    const density = Math.max(28, Math.min(64, Math.floor((width * height) / 11000)));
    particles = [];
    for (let i = 0; i < density; i++) {
      const ch = i % 3;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1.6,
        color: COLORS[ch],
        channel: ch,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.02,
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // links
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.22;
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // particles
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;
      if (p.x < -10) p.x = width + 10;
      else if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      else if (p.y > height + 10) p.y = -10;

      const sizeMod = 1 + Math.sin(p.pulse) * 0.35;
      const r = p.r * sizeMod;

      // halo
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5);
      grad.addColorStop(0, p.color + "55");
      grad.addColorStop(1, p.color + "00");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2);
      ctx.fill();

      // core
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(step);
  }

  function start() {
    if (running || reduceMotion) return;
    running = true;
    raf = requestAnimationFrame(step);
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
  }

  // Run only when in viewport
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? start() : stop()));
  }, { threshold: 0.05 });
  sectionObs.observe(canvas);

  window.addEventListener("resize", () => {
    resize();
  });

  resize();
  if (reduceMotion) {
    // draw a single static frame so the section isn't empty
    step();
    cancelAnimationFrame(raf);
  }
})();

// =====================================================
// YEAR
// =====================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
