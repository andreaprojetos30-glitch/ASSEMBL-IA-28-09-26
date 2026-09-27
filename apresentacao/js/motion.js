window.PDSMotion = (function () {
  function format(stat, value) {
    if (stat.format === "currency") {
      return "R$ " + Math.round(value).toLocaleString("pt-BR");
    }
    const digits = stat.decimals || 0;
    const text = value.toFixed(digits).replace(".", ",");
    return "+" + text + "%";
  }

  function count(element, stat) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = stat.value;
    if (reduced) {
      element.textContent = format(stat, target);
      return;
    }
    const start = performance.now();
    const duration = 900;
    function frame(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = format(stat, target * eased);
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  return { format, count };
})();
