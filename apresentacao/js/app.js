window.PDSApp = (function () {
  const phases = ["map", "points", "stats", "evoluindo", "pergunta", "fecho"];
  const delays = [200, 700, 1900, 3400, 4700, 5900];
  let timers = [];
  let played = false;
  let counted = false;
  let photoIndex = 0;
  let activeId = null;

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function sourceById(id) {
    return window.PDS.sources.find((source) => source.id === id);
  }

  function renderStats() {
    const mount = document.getElementById("stats");
    mount.innerHTML = window.PDS.stats
      .map((stat) => {
        const source = sourceById(stat.sourceId);
        const href = source && source.url ? source.url : "#sources";
        return `
          <article class="stat">
            <strong data-stat="${stat.id}">${window.PDSMotion.format(stat, 0)}</strong>
            <em>${stat.label}</em>
            <small>${stat.note} · <a href="${href}" target="_blank" rel="noopener noreferrer">fonte</a></small>
          </article>`;
      })
      .join("");
  }

  function renderPoints() {
    const mount = document.getElementById("points");
    mount.innerHTML = window.PDS.neighbors
      .map(
        (neighbor, index) => `
        <button class="point" type="button" data-id="${neighbor.id}"
          style="left:${neighbor.x}%; top:${neighbor.y}%; animation-delay:${index * 0.12}s">
          <span class="dot"></span>
          <span>${neighbor.short}</span>
        </button>`
      )
      .join("");
    mount.querySelectorAll(".point").forEach((button) => {
      button.addEventListener("click", () => openNeighbor(button.dataset.id));
      button.addEventListener("mouseenter", () => openNeighbor(button.dataset.id, true));
    });

    const anchor = window.PDS.place.anchor;
    const mark = document.getElementById("anchor");
    mark.style.left = anchor.x + "%";
    mark.style.top = anchor.y + "%";
    mark.textContent = anchor.label;
  }

  function drawLinks() {
    const stage = document.getElementById("stage");
    const svg = document.getElementById("links");
    const rect = stage.getBoundingClientRect();
    if (!rect.width) return;
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    const x1 = rect.width * 0.5;
    const y1 = rect.height * 0.48;
    svg.innerHTML = window.PDS.neighbors
      .map((neighbor) => {
        const x2 = (rect.width * neighbor.x) / 100;
        const y2 = (rect.height * neighbor.y) / 100;
        const ready = ["points", "stats", "evoluindo", "pergunta", "fecho"].some((phase) =>
          document.getElementById("entorno").classList.contains("phase-" + phase)
        );
        const selected = ready && (!activeId || neighbor.id === activeId);
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${selected ? "is-on" : ""}"></line>`;
      })
      .join("");
  }

  function openPlace() {
    activeId = null;
    document.querySelectorAll(".point").forEach((point) => point.classList.remove("is-selected"));
    const place = window.PDS.place;
    fillPanel({
      name: place.name,
      distance: place.here,
      fact: place.detail,
      address: place.line,
      distanceNote: place.anchor.label + " · " + place.anchor.note,
      photos: []
    }, false);
    drawLinks();
  }

  function openNeighbor(id, fromHover) {
    const neighbor = window.PDS.neighbors.find((item) => item.id === id);
    if (!neighbor) return;
    activeId = id;
    photoIndex = 0;
    document.querySelectorAll(".point").forEach((point) => {
      point.classList.toggle("is-selected", point.dataset.id === id);
    });
    fillPanel(neighbor, neighbor.x > 62);
    if (!fromHover) document.getElementById("panel").querySelector("h3").focus();
    drawLinks();
  }

  function fillPanel(item, toLeft) {
    const panel = document.getElementById("panel");
    panel.hidden = false;
    panel.classList.toggle("is-left", Boolean(toLeft));
    const frame = document.getElementById("panel-frame");
    const photos = item.photos || [];
    if (photos.length) {
      frame.hidden = false;
      showPhoto(photos);
    } else {
      frame.hidden = true;
    }
    document.getElementById("panel-title").textContent = item.name;
    const sourceLine = document.getElementById("panel-address");
    sourceLine.replaceChildren();
    if (item.sale) {
      document.getElementById("panel-distance").textContent = item.sale.price;
      document.getElementById("panel-fact").textContent = item.sale.detail;
      if (item.sale.url) {
        sourceLine.hidden = false;
        const label = document.createElement("span");
        label.textContent = "Fonte: ";
        const link = document.createElement("a");
        link.href = item.sale.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = item.sale.publisher;
        sourceLine.append(label, link);
      } else {
        sourceLine.hidden = true;
      }
      document.getElementById("panel-note").textContent = item.sale.note || "";
    } else {
      document.getElementById("panel-distance").textContent = item.distance || "";
      document.getElementById("panel-fact").textContent = item.fact || "";
      sourceLine.hidden = !item.address;
      sourceLine.textContent = item.address || "";
      document.getElementById("panel-note").textContent = item.distanceNote || "";
    }
    document.getElementById("photo-nav").hidden = photos.length < 2;
  }

  function showPhoto(photos) {
    const photo = photos[photoIndex] || photos[0];
    const image = document.getElementById("panel-photo");
    image.src = photo.src;
    image.alt = photo.alt;
    document.getElementById("photo-count").textContent = photoIndex + 1 + " / " + photos.length;
  }

  function shiftPhoto(direction) {
    const neighbor = window.PDS.neighbors.find((item) => item.id === activeId);
    if (!neighbor || neighbor.photos.length < 2) return;
    photoIndex = (photoIndex + direction + neighbor.photos.length) % neighbor.photos.length;
    showPhoto(neighbor.photos);
  }

  function closePanel() {
    document.getElementById("panel").hidden = true;
    activeId = null;
    document.querySelectorAll(".point").forEach((point) => point.classList.remove("is-selected"));
    drawLinks();
  }

  function renderSources() {
    const mount = document.getElementById("source-list");
    mount.innerHTML = window.PDS.sources
      .map((source) => {
        const link = source.url
          ? `<p><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.url}</a></p>`
          : "";
        return `
          <article class="source">
            <h3>${source.title}</h3>
            <p>${source.publisher} · ${source.date}</p>
            <p>Acesso em ${source.accessed}.</p>
            <p>${source.supports}</p>
            ${link}
          </article>`;
      })
      .join("");
  }

  function applyPhase(name) {
    const section = document.getElementById("entorno");
    phases.forEach((phase) => {
      if (phases.indexOf(phase) <= phases.indexOf(name)) section.classList.add("phase-" + phase);
    });
    if (name === "points" || name === "map") drawLinks();
    if (!counted && phases.indexOf(name) >= phases.indexOf("stats")) {
      counted = true;
      window.PDS.stats.forEach((stat) => {
        const element = document.querySelector(`[data-stat="${stat.id}"]`);
        if (element) window.PDSMotion.count(element, stat);
      });
    }
  }

  function playEntorno() {
    if (played) return;
    played = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      applyPhase("fecho");
      return;
    }
    phases.forEach((phase, index) => {
      timers.push(setTimeout(() => applyPhase(phase), delays[index]));
    });
  }

  function replay() {
    clearTimers();
    played = false;
    counted = false;
    const section = document.getElementById("entorno");
    phases.forEach((phase) => section.classList.remove("phase-" + phase));
    window.PDS.stats.forEach((stat) => {
      const element = document.querySelector(`[data-stat="${stat.id}"]`);
      if (element) element.textContent = window.PDSMotion.format(stat, 0);
    });
    playEntorno();
  }

  function openDetail(id) {
    const item = window.PDS.hidrico.details[id];
    if (!item) return;
    document.getElementById("detail-title").textContent = item.title;
    const body = document.getElementById("detail-body");
    body.replaceChildren();
    const list = document.createElement("ul");
    list.className = "detail-list";
    item.lines.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      list.append(li);
    });
    const source = document.createElement("p");
    source.className = "detail-source";
    source.textContent = item.source;
    body.append(list, source);
    document.getElementById("detail").showModal();
  }

  function init() {
    renderStats();
    renderPoints();
    renderSources();
    document.getElementById("here").addEventListener("click", openPlace);
    document.getElementById("panel-close").addEventListener("click", closePanel);
    document.getElementById("photo-prev").addEventListener("click", () => shiftPhoto(-1));
    document.getElementById("photo-next").addEventListener("click", () => shiftPhoto(1));
    document.getElementById("replay").addEventListener("click", replay);
    document.getElementById("sources-btn").addEventListener("click", () => {
      document.getElementById("sources").showModal();
    });
    document.getElementById("sources-close").addEventListener("click", () => {
      document.getElementById("sources").close();
    });
    document.querySelectorAll("[data-detail]").forEach((button) => {
      button.addEventListener("click", () => openDetail(button.dataset.detail));
    });
    document.getElementById("detail-close").addEventListener("click", () => {
      document.getElementById("detail").close();
    });
    window.addEventListener("resize", drawLinks);
    const tela = new URLSearchParams(location.search).get("tela");
    if (tela === "entorno") {
      played = true;
      applyPhase("fecho");
    }
    if (tela && document.getElementById(tela)) {
      document.getElementById(tela).scrollIntoView({ behavior: "instant", block: "start" });
    }
  }

  return { init, playEntorno };
})();

function paintIcons() {
  if (window.lucide && window.lucide.icons) {
    window.lucide.createIcons({ icons: window.lucide.icons });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.PDSApp.init();
  window.PDSNav.init();
  paintIcons();
});
