
    const pages = [
      { id: "home", label: "Home" },
      { id: "zodiac", label: "Zodiac Map" },
      { id: "constellations", label: "Constellations" },
      { id: "about", label: "About" },
      { id: "glossary", label: "Glossary" }
    ];

    const constellationData = [
      {
        id: "pisces",
        name: "Pisces",
        latin: "Pisces — Piscum / The Fishes",
        season: "February · March",
        location: "Northern sky · Between Aquarius and Aries",
        stars: [
          { x: 22, y: 75, label: "α — Alrescha" },
          { x: 38, y: 58, label: "η — 3.62" },
          { x: 55, y: 38, label: "" },
          { x: 51, y: 19, label: "" },
          { x: 65, y: 73, label: "ω — 4.01" },
          { x: 82, y: 72, label: "β — 4.53" }
        ],
        overview:
          "Pisces is a faint zodiac constellation best understood through the relationship between its stars rather than through one single bright marker. Its identity often emerges through line, connection, and quiet structure in the sky.",
        lore:
          "In this project, the starlore section should feel like the heart of the page. Instead of presenting only astronomy facts, use this area to discuss the symbolic meaning, mythic associations, and narrative interpretations of Pisces based on your own paraphrased reading notes from the book.",
        quote:
          "A constellation can be more than a pattern of stars; it can become an image carried by memory, story, and seasonal return."
      },
      {
        id: "aries",
        name: "Aries",
        latin: "Aries — The Ram",
        season: "March · April",
        location: "Northern sky · West of Taurus",
        stars: [
          { x: 20, y: 66, label: "Mesarthim" },
          { x: 42, y: 48, label: "Sheratan" },
          { x: 66, y: 26, label: "Hamal" }
        ],
        overview:
          "Aries appears as a compact chain of stars and is often read as a sign of beginnings, emergence, and transition at the edge of seasonal cycles.",
        lore:
          "Use this section to emphasize the symbolic role of the ram and the way constellations can carry meaning beyond observation. Keep the text elegant, spacious, and reflective.",
        quote:
          "The sky does not only show forms; it preserves ways of imagining movement through time."
      },
      {
        id: "leo",
        name: "Leo",
        latin: "Leo — The Lion",
        season: "April · May",
        location: "Northern sky · East of Cancer",
        stars: [
          { x: 18, y: 64, label: "Regulus" },
          { x: 34, y: 38, label: "Algieba" },
          { x: 50, y: 22, label: "" },
          { x: 76, y: 46, label: "Zosma" },
          { x: 88, y: 70, label: "Denebola" }
        ],
        overview:
          "Leo is one of the boldest zodiac constellations, recognizable through the sickle shape of the head and the bright stars that define its body.",
        lore:
          "Leo works well with a more dramatic tone. Use the lore section to discuss majesty, solar imagery, force, and the ceremonial feeling attached to the lion in starlore traditions.",
        quote:
          "Some constellations are remembered not for subtlety, but for the authority of the image they carry."
      }
    ];

    const zodiacData = [
      "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
      "Libra", "Scorpio", "Ophiuchus", "Sagittarius",
      "Capricorn", "Aquarius", "Pisces"
    ];

    const glossaryData = [
      { term: "Constellation", def: "A recognized grouping or region of stars in the sky." },
      { term: "Zodiac", def: "The band of sky along the ecliptic associated with zodiac constellations and signs." },
      { term: "Ecliptic", def: "The apparent path of the Sun across the sky through the year." },
      { term: "Magnitude", def: "A measure of a star’s apparent brightness." },
      { term: "Asterism", def: "A familiar star pattern that is not officially a full constellation." },
      { term: "Celestial Sphere", def: "An imaginary sphere around Earth onto which stars appear projected." },
      { term: "Starlore", def: "Stories, myths, symbolic meanings, and cultural interpretations attached to the stars." }
    ];

    const state = {
      currentPage: "home",
      currentConstellation: "pisces",
      currentZodiac: "Pisces"
    };

    function renderNav() {
      const nav = document.getElementById("nav");
      nav.innerHTML = "";
      pages.forEach(page => {
        const btn = document.createElement("button");
        btn.textContent = page.label;
        if (state.currentPage === page.id) btn.classList.add("active");
        btn.onclick = () => showPage(page.id);
        nav.appendChild(btn);
      });
    }

    function showPage(id) {
      state.currentPage = id;
      document.querySelectorAll(".page").forEach(page => {
        page.classList.toggle("active", page.id === id);
      });
      renderNav();
      if (id === "home") renderHome();
      if (id === "zodiac") renderZodiac();
      if (id === "constellations") renderConstellations();
      if (id === "about") renderAbout();
      if (id === "glossary") renderGlossary();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderHome() {
      const home = document.getElementById("home");
      home.innerHTML = `
        <div class="hero">
          <canvas id="heroSky" class="sky-canvas"></canvas>
          <div class="hero-inner">
            <div class="hero-kicker">Interactive digital atlas</div>
            <h1>Starlore<br>of the<br>Constellations</h1>
            <div class="hero-sub">
              A modern, dark-mode constellation project focused on sky, season, symbol, and story.
            </div>
            <div class="hero-actions">
              <button class="btn primary" id="homeExplore">Explore More</button>
              <button class="btn" id="homeZodiac">Zodiac Map</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById("homeExplore").onclick = () => showPage("constellations");
      document.getElementById("homeZodiac").onclick = () => showPage("zodiac");
      drawHeroSky();
    }

    function drawHeroSky() {
      const canvas = document.getElementById("heroSky");
      if (!canvas) return;
      const hero = canvas.parentElement;
      const rect = hero.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (let i = 0; i < 180; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const r = Math.random() * 1.8 + 0.3;
        const a = Math.random() * 0.7 + 0.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const lines = [
        [120, 240], [180, 190], [220, 120], [300, 210], [370, 150], [430, 90]
      ];

      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      lines.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p[0], p[1]);
        else ctx.lineTo(p[0], p[1]);
      });
      ctx.stroke();

      lines.forEach(([x, y], i) => {
        ctx.beginPath();
        ctx.fillStyle = i === 4 ? "rgba(228,112,33,0.95)" : "rgba(255,255,255,0.95)";
        ctx.arc(x, y, i === 4 ? 3.5 : 2.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = i === 4 ? "rgba(228,112,33,0.16)" : "rgba(255,255,255,0.10)";
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function getCurrentConstellation() {
      return constellationData.find(c => c.id === state.currentConstellation) || constellationData[0];
    }

    function createDiagramSVG(stars) {
      const points = stars.map((star, index) => {
        const x = star.x * 5;
        const y = star.y * 3.6;
        return { ...star, px: x, py: y, index };
      });

      const lines = points.slice(0, -1).map((p, i) => {
        const next = points[i + 1];
        return `<line x1="${p.px}" y1="${p.py}" x2="${next.px}" y2="${next.py}" stroke="rgba(255,255,255,0.38)" stroke-width="1.5" />`;
      }).join("");

      const starsMarkup = points.map(p => `
        <circle cx="${p.px}" cy="${p.py}" r="12" fill="rgba(255,255,255,0.08)"></circle>
        <circle cx="${p.px}" cy="${p.py}" r="${p.index === 0 ? 4 : 3}" fill="${p.index === 0 ? "rgba(228,112,33,0.95)" : "rgba(255,255,255,0.96)"}"></circle>
        ${p.label ? `<text x="${p.px + 12}" y="${p.py - 10}" fill="rgba(245,241,234,0.82)" font-size="12">${p.label}</text>` : ""}
      `).join("");

      return `
        <svg viewBox="0 0 520 340" aria-label="constellation diagram">
          ${lines}
          ${starsMarkup}
        </svg>
      `;
    }

    function renderConstellations() {
      const c = getCurrentConstellation();
      const container = document.getElementById("constellations");

      container.innerHTML = `
        <div class="two-col">
          <aside class="sidebar">
            <div class="mini-heading">Constellations</div>
            <div class="constellation-list">
              ${constellationData.map(item => `
                <button class="${item.id === c.id ? "active" : ""}" data-id="${item.id}">
                  ${item.name}
                  <small>${item.latin}</small>
                </button>
              `).join("")}
            </div>
          </aside>

          <section class="content-panel">
            <div class="module-hero">
              <h2>${c.name}</h2>
              <div class="module-subtitle">${c.latin}</div>
            </div>

            <div class="module-body">
              <div>
                <div class="mini-heading">Overview</div>
                <div class="divider"></div>
              </div>

              <div class="overview-grid">
                <div class="overview-text">
                  <p>${c.overview}</p>
                  <div style="height:18px"></div>
                  <p><strong>Location in sky:</strong> ${c.location}</p>
                  <div style="height:8px"></div>
                  <p><strong>Best season:</strong> ${c.season}</p>
                </div>

                <div class="star-diagram">
                  <div class="mini-heading">Major stars</div>
                  ${createDiagramSVG(c.stars)}
                </div>
              </div>

              <div class="lore-block">
                <div class="mini-heading">Starlore</div>
                <h3>Story, Symbol, and Meaning</h3>
                <p>${c.lore}</p>
                <div class="quote">${c.quote}</div>
              </div>
            </div>
          </section>
        </div>
      `;

      container.querySelectorAll("[data-id]").forEach(btn => {
        btn.onclick = () => {
          state.currentConstellation = btn.dataset.id;
          renderConstellations();
        };
      });
    }

    function createZodiacWheel() {
      const cx = 350;
      const cy = 350;
      const outer = 280;
      const inner = 120;
      const count = zodiacData.length;

      const slices = zodiacData.map((name, i) => {
        const start = (-90 + (360 / count) * i) * Math.PI / 180;
        const end = (-90 + (360 / count) * (i + 1)) * Math.PI / 180;
        const largeArc = end - start > Math.PI ? 1 : 0;

        const x1 = cx + outer * Math.cos(start);
        const y1 = cy + outer * Math.sin(start);
        const x2 = cx + outer * Math.cos(end);
        const y2 = cy + outer * Math.sin(end);
        const x3 = cx + inner * Math.cos(end);
        const y3 = cy + inner * Math.sin(end);
        const x4 = cx + inner * Math.cos(start);
        const y4 = cy + inner * Math.sin(start);

        const path = `M ${x1} ${y1} A ${outer} ${outer} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${inner} ${inner} 0 ${largeArc} 0 ${x4} ${y4} Z`;

        const mid = (start + end) / 2;
        const tx = cx + 205 * Math.cos(mid);
        const ty = cy + 205 * Math.sin(mid);

        const active = state.currentZodiac === name;

        return `
          <g data-zodiac="${name}" style="cursor:pointer;">
            <path d="${path}" fill="${active ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.02)"}" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"></path>
            <text x="${tx}" y="${ty}" text-anchor="middle" fill="rgba(245,241,234,0.92)" font-size="15" transform="rotate(${(mid * 180 / Math.PI) + 90}, ${tx}, ${ty})">${name.toUpperCase()}</text>
          </g>
        `;
      }).join("");

      return `
        <svg viewBox="0 0 700 700" aria-label="zodiac wheel">
          <circle cx="350" cy="350" r="280" fill="none" stroke="rgba(255,255,255,0.12)" />
          <circle cx="350" cy="350" r="120" fill="none" stroke="rgba(255,255,255,0.12)" />
          <circle cx="350" cy="350" r="28" fill="rgba(255,255,255,0.16)" />
          ${slices}
        </svg>
      `;
    }

    function renderZodiac() {
      const page = document.getElementById("zodiac");
      page.innerHTML = `
        <div class="section-kicker">Interactive circular map</div>
        <h2 class="section-title">Zodiac Signs</h2>
        <p class="section-copy">
          A simplified circular map of the 13 zodiac constellations based on the passage of the year.
        </p>

        <div class="wheel-wrap">
          <div class="wheel-box">
            ${createZodiacWheel()}
          </div>

          <div class="zodiac-detail">
            <div class="mini-heading">Selected</div>
            <h3 style="font-size:2rem; margin-bottom:12px;">${state.currentZodiac}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      `;

      page.querySelectorAll("[data-zodiac]").forEach(item => {
        item.onclick = () => {
          state.currentZodiac = item.dataset.zodiac;
          renderZodiac();
        };
      });
    }

    function renderAbout() {
      const page = document.getElementById("about");
      page.innerHTML = `
        <div class="section-kicker">About the project</div>
        <h2 class="section-title">About</h2>
        <div class="about-grid">
          <div class="info-card">
            <h3>What are constellations?</h3>
            <p>
              Constellations are recognizable groups or regions of stars in the sky. They help viewers orient themselves
              in the heavens, but they also carry meanings shaped by culture, memory, and storytelling.
            </p>
          </div>
          <div class="info-card">
            <h3>What are zodiac signs?</h3>
            <p>
              The zodiac is the band of sky along the ecliptic. It is associated with a sequence of constellations
              connected to the yearly motion of the Sun.
            </p>
          </div>
          <div class="info-card">
            <h3>How to use this website</h3>
            <p>
              Start on the home page, move into the zodiac wheel, then open constellation unit pages to read the overview,
              locate the main stars, and focus on the starlore section.
            </p>
          </div>
          <div class="info-card">
            <h3>Design goal</h3>
            <p>
              The goal is to keep the interface simple, modern, dark, and clean while giving the story and symbolism of
              each constellation stronger visual emphasis.
            </p>
          </div>
        </div>
      `;
    }

    function renderGlossary() {
      const page = document.getElementById("glossary");
      page.innerHTML = `
        <div class="section-kicker">Reference</div>
        <h2 class="section-title">Glossary</h2>
        <p class="section-copy">Technical and interpretive terms used throughout the project.</p>
        <input id="glossarySearch" class="glossary-search" placeholder="Search glossary..." />
        <div id="glossaryList" class="glossary-list"></div>
      `;

      const input = document.getElementById("glossarySearch");
      const list = document.getElementById("glossaryList");

      function drawGlossary(query = "") {
        const q = query.toLowerCase();
        const filtered = glossaryData.filter(item =>
          item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q)
        );

        list.innerHTML = filtered.map(item => `
          <div class="glossary-card">
            <h4>${item.term}</h4>
            <p>${item.def}</p>
          </div>
        `).join("");
      }

      input.addEventListener("input", e => drawGlossary(e.target.value));
      drawGlossary();
    }

    function init() {
      renderNav();
      renderHome();
      renderZodiac();
      renderConstellations();
      renderAbout();
      renderGlossary();
      showPage("home");
      window.addEventListener("resize", () => {
        if (state.currentPage === "home") drawHeroSky();
      });
    }

    init();