// Navigation mobile + reveal scroll
// Enable JS-only styles
const confettiLayer = document.getElementById("confetti-layer");

if (confettiLayer) {
  const colors = ["#c00000", "#ff3b3b", "#ffffff", "#2b2b2b"];
  const count = 36;
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const radius = 40 + Math.random() * 220;
    const x1 = Math.cos(angle) * radius;
    const y1 = Math.sin(angle) * radius;
    const size = 8 + Math.random() * 10;
    piece.className = Math.random() > 0.6 ? "confetti circle" : "confetti";
    piece.style.left = "50%";
    piece.style.top = "50%";
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.4}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--x0", "0px");
    piece.style.setProperty("--y0", "0px");
    piece.style.setProperty("--x1", `${x1}px`);
    piece.style.setProperty("--y1", `${y1}px`);
    piece.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);
    piece.style.animationDelay = "1.1s";
    confettiLayer.appendChild(piece);
  }
}

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealTargets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((target) => observer.observe(target));
