// menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// formulaire
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fname").value.trim();
  const email = document.getElementById("femail").value.trim();
  const msg = document.getElementById("fmessage").value.trim();
  if (!name || !email || !msg) return;
  const s = encodeURIComponent(`Contact portfolio — ${name}`);
  const b = encodeURIComponent(`De : ${name} <${email}>\n\n${msg}`);
  window.location.href = `mailto:leon.zhou@epitech.eu?subject=${s}&body=${b}`;
  document.getElementById("form-note").textContent = "Ouverture du client mail...";
  e.target.reset();
});

// effet scroll
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.style.opacity = "1";
        el.target.style.transform = "translateY(0)";
        obs.unobserve(el.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".card").forEach((el) => {
  el.style.cssText += "opacity:0; transform:translateY(16px); transition: opacity 0.4s ease, transform 0.4s ease";
  obs.observe(el);
});