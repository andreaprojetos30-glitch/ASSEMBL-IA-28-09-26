window.PDSNav = (function () {
  const order = () => window.PDS.screens.map((screen) => screen.id);
  let current = order()[0];

  function setCurrent(id) {
    current = id;
    document.querySelectorAll(".dots button").forEach((button) => {
      button.setAttribute("aria-current", button.dataset.go === id ? "true" : "false");
    });
  }

  function go(id) {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrent(id);
  }

  function step(direction) {
    const ids = order();
    const index = ids.indexOf(current);
    const next = ids[index + direction];
    if (next) go(next);
  }

  async function toggleAssembly() {
    const nextOn = !document.body.classList.contains("is-assembly");
    document.body.classList.toggle("is-assembly", nextOn);
    const button = document.getElementById("assembly-btn");
    button.setAttribute("aria-pressed", nextOn ? "true" : "false");
    try {
      if (nextOn && !document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else if (!nextOn && document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (error) {
      /* O modo de foco continua mesmo se o navegador recusar a tela cheia. */
    }
  }

  function onKey(event) {
    const dialog = document.getElementById("sources");
    if (dialog && dialog.open) return;
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    if (["ArrowDown", "ArrowRight", "PageDown"].includes(event.key)) {
      event.preventDefault();
      step(1);
    } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      step(-1);
    } else if (event.key === " " && tag !== "BUTTON" && tag !== "A") {
      event.preventDefault();
      step(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(order()[0]);
    } else if (event.key === "End") {
      event.preventDefault();
      go(order()[order().length - 1]);
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      toggleAssembly();
    }
  }

  function init() {
    document.querySelectorAll("[data-go]").forEach((button) => {
      button.addEventListener("click", () => go(button.dataset.go));
    });
    document.getElementById("prev-btn").addEventListener("click", () => step(-1));
    document.getElementById("next-btn").addEventListener("click", () => step(1));
    document.getElementById("assembly-btn").addEventListener("click", toggleAssembly);
    document.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        document.body.classList.remove("is-assembly");
        document.getElementById("assembly-btn").setAttribute("aria-pressed", "false");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          setCurrent(entry.target.id);
          if (entry.target.id === "entorno" && window.PDSApp) window.PDSApp.playEntorno();
        });
      },
      { threshold: 0.62 }
    );
    order().forEach((id) => observer.observe(document.getElementById(id)));
    setCurrent(current);
  }

  return { init, go, setCurrent };
})();
