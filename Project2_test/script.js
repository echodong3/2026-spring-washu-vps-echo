
    const pages = [
      { id: "home", label: "Home" },
      { id: "zodiac", label: "Zodiac Map" },
      { id: "constellations", label: "Constellations" },
      { id: "mockups", label: "Mockups" },
      { id: "about", label: "About" },
      { id: "glossary", label: "Glossary" }
    ];

const constellationData = [
  {
    id: "aries",
    name: "Aries",
    latin: "Aries — The Ram",
    season: "Best seen around November",
    location: "Along the ecliptic, between Pisces and Taurus; high beneath Perseus in autumn northern skies",
    stars: [
      { x: 20, y: 66, label: "Mesarthim" },
      { x: 42, y: 48, label: "Sheratan" },
      { x: 66, y: 26, label: "Hamal" }
    ],
    overview: "Aries is a relatively compact zodiac constellation on the ecliptic between Pisces and Taurus. In the northern hemisphere it stands out in autumn, with Hamal and Sheratan as its best-known marker stars.",
    lore:"Aries occupies a special place in the structure of the zodiac, not because of its visual brilliance, but because it marks the beginning of celestial measurement. In older astronomical frameworks, the spring equinox occurred within Aries, making it the symbolic starting point of the Sun’s yearly journey. Cornelius emphasizes that this ‘beginning’ is not fixed: due to precession, the equinox has shifted into Pisces, reminding us that the zodiac is both a physical sky and a cultural system layered over it. The ram itself carries echoes of sacrificial animals, renewal, and initiation—an image of emergence rather than dominance, quietly marking the moment when light returns.",
    quote: "A small constellation, but one with enormous symbolic importance in the history of the zodiac."
  },
  {
    id: "taurus",
    name: "Taurus",
    latin: "Taurus — The Bull",
    season: "Best seen in late November and early December",
    location: "Northwest of Orion and southwest of Auriga",
    stars: [
      { x: 24, y: 72, label: "Aldebaran" },
      { x: 34, y: 52, label: "Elnath" },
      { x: 45, y: 43, label: "Hyades" },
      { x: 58, y: 24, label: "Pleiades" }
    ],
    overview: "Taurus is one of the grandest figures of the northern sky, immediately recognizable by Aldebaran, the V-shaped Hyades in the bull’s face, and the nearby Pleiades. The visible figure shows the front half of the bull, head lowered toward Orion.",
    lore: "Taurus is among the most ancient and symbolically dense constellations in the sky. Cornelius connects it with early agricultural cultures, where the bull represented fertility, seasonal renewal, and divine strength. The Hyades and Pleiades clusters embedded within Taurus were used as seasonal markers long before formal astronomy, signaling planting and harvest cycles. Across myth, the bull appears repeatedly: as Zeus carrying Europa, as sacred cattle in Near Eastern traditions, and in the Roman Mithraic cult where the bull’s sacrifice generates life. Taurus thus holds a deep memory of humanity’s dependence on cycles of growth, linking sky observation with survival and ritual.",
    quote: "A constellation of power, fertility, and very old seasonal memory."
  },
  {
    id: "gemini",
    name: "Gemini",
    latin: "Gemini — The Twins",
    season: "Best seen in January",
    location: "Northeast of Orion, with Castor and Pollux marking the heads of the twins",
    stars: [
      { x: 22, y: 56, label: "Castor" },
      { x: 38, y: 39, label: "Pollux" },
      { x: 48, y: 26, label: "Alhena" }
    ],
    overview: "Gemini is the third zodiac constellation and appears as a slanting rectangle across the ecliptic. Castor and Pollux form its unmistakable twin heads, while Alhena marks the feet.",
    lore: "Gemini expresses one of the most persistent archetypes in mythology: the divine twins. In Greek tradition, Castor and Pollux embody a paradox—one mortal, one immortal—bound together beyond death. Cornelius highlights how this duality reflects a broader symbolic structure: the tension between opposites that nonetheless belong together. The constellation’s two bright stars reinforce this idea visually, appearing equal yet subtly different. Across cultures, twin figures often represent companionship, rivalry, and the crossing between worlds. Gemini is therefore not just about partnership, but about the fragile balance between unity and division.",
    quote: "Gemini is a constellation of duality, companionship, and shared fate."
  },
  {
    id: "cancer",
    name: "Cancer",
    latin: "Cancer — The Crab",
    season: "Best seen at midnight in late January and early February",
    location: "Between Gemini and Leo",
    stars: [
      { x: 10, y: 42, label: "Acubens" },
      { x: 28, y: 40, label: "Asellus Borealis" },
      { x: 44, y: 55, label: "Asellus Australis" },
      { x: 58, y: 42, label: "M44 Beehive" }
    ],
    overview: "Cancer is the faintest of the zodiac constellations, with no star brighter than fourth magnitude. Its most memorable feature is M44, the Beehive Cluster, visible to the naked eye as a soft cloudy patch.",
    lore: "Cancer is easily overlooked in the sky, yet it carries deep symbolic weight. It marks the point of the June solstice, when the Sun reaches its highest declination and begins to turn back. Cornelius emphasizes this as a threshold moment—an invisible turning point rather than a visible spectacle. In myth, Cancer is the crab sent by Hera to disrupt Heracles during his battle with the Hydra, a minor but persistent creature whose role is easily forgotten. This smallness is part of its meaning: Cancer represents hidden transitions, quiet resistance, and the unseen forces that shift cycles from growth into decline.",
    quote: "A quiet constellation whose importance comes more from symbolism than brightness."
  },
  {
    id: "leo",
    name: "Leo",
    latin: "Leo — The Lion",
    season: "Prominent in spring northern skies",
    location: "West of Virgo and east of Cancer along the ecliptic",
    stars: [
      { x: 20, y: 66, label: "Regulus" },
      { x: 34, y: 38, label: "Algieba" },
      { x: 50, y: 22, label: "Denebola" }
    ],
    overview: "Leo is one of the clearest zodiac constellations, with the sickle-shaped head and the body trailing eastward. Regulus is its great marker star and one of the important bright stars on the ecliptic.",
    lore: "The book associates Leo with very old solar symbolism. Mesopotamian imagery already connected the lion with the Sun, and in Greek myth Leo is the Nemean lion, the fearsome beast defeated by Heracles in the first of his labours.",
    quote: "Leo combines royal visibility in the sky with heroic and solar myth."
  },
  {
    id: "virgo",
    name: "Virgo",
    latin: "Virgo — The Virgin",
    season: "Best seen in spring and early summer evenings",
    location: "East of Leo, straddling the celestial equator",
    stars: [
      { x: 16, y: 64, label: "Spica" },
      { x: 30, y: 48, label: "Zavijava" },
      { x: 43, y: 40, label: "Porrima" },
      { x: 57, y: 28, label: "Vindemiatrix" }
    ],
    overview: "Virgo is a vast but visually diffuse constellation, made memorable by the brilliance of Spica. In sky-watching it is often found by following the curve of the Plough’s handle through Arcturus and onward to Spica.",
    lore: "Virgo stretches across a vast area of sky, yet its identity centers on themes of fertility, harvest, and divine femininity. Cornelius traces its origins to ancient goddesses such as Ishtar or Astarte, figures associated with both love and war, abundance and loss. In later traditions, Virgo becomes linked with agricultural cycles, symbolized by Spica, the ear of grain. This duality—nurturing yet demanding—reflects the uncertainty of harvest itself. Virgo is not simply a passive maiden, but a complex figure embodying the risks of cultivation, the labor of growth, and the delicate balance between nature and human effort.",
    quote: "Virgo is less a sharply drawn figure than a great symbolic field anchored by Spica."
  },
  {
    id: "libra",
    name: "Libra",
    latin: "Libra — The Scales",
    season: "Best seen at midnight in early May",
    location: "Between Virgo and Scorpius",
    stars: [
      { x: 28, y: 46, label: "Zuben Elgenubi" },
      { x: 42, y: 50, label: "Zuben Eschamali" },
      { x: 50, y: 60, label: "Fulcrum region" }
    ],
    overview: "Libra is visually modest, but it can be found by extending the claws of Scorpius into a much larger balancing figure. Its central region lies near the ecliptic between Spica and Antares.",
    lore: "Libra is unusual among zodiac constellations in that it represents an object rather than a living being. Its stars were once considered part of the claws of Scorpius, but over time they became associated with scales—symbols of balance and judgment. Cornelius connects Libra with the equinox, when day and night are equal, reinforcing its role as a cosmic measure. In Roman tradition, the scales belong to Astraea, goddess of justice, who withdrew from Earth during humanity’s decline. Libra thus carries a sense of lost harmony: an ideal of balance that exists in the heavens even when it fails on Earth.",
    quote: "Libra is small in visual drama but large in symbolic balance."
  },
  {
    id: "scorpio",
    name: "Scorpius",
    latin: "Scorpius — The Scorpion",
    season: "Prominent in southern skies and summer evenings",
    location: "East of Libra, with Antares marking the heart",
    stars: [
      { x: 15, y: 58, label: "Antares" },
      { x: 34, y: 44, label: "Shaula" },
      { x: 58, y: 48, label: "Sargas" }
    ],
    overview: "Scorpius is among the most striking zodiac constellations, famous for Antares and the curving body and tail of the scorpion. It dominates the southern Milky Way region when in season.",
    lore: "Cornelius treats Scorpius as an ancient and powerful figure, bound up with danger, intensity, and underworld imagery. Its relationship with Libra also preserves the older idea that Libra’s stars once belonged to the scorpion’s claws.",
    quote: "Scorpius is one of the sky’s most dramatic embodiments of menace and splendor."
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    latin: "Sagittarius — The Archer",
    season: "Best seen at midnight in June and July",
    location: "On the eastern side of the Milky Way, east of Scorpius",
    stars: [
      { x: 18, y: 56, label: "Rukbat" },
      { x: 34, y: 50, label: "Kaus Australis" },
      { x: 50, y: 44, label: "Nunki" },
      { x: 64, y: 46, label: "Ascella" }
    ],
    overview: "Sagittarius is the zodiac centaur-archer, placed on the rich star-fields of the Milky Way. The figure aims toward Scorpius, and if the arrow were lifted slightly it would point toward the Galactic Centre.",
    lore: "Cornelius notes that Sagittarius was linked by Greeks both to Crotus and to Chiron, though it differs from Centaurus by being explicitly a hunter. He also traces it back to the Mesopotamian archer-god Nergal, associating the figure with fire, war, and force.",
    quote: "Sagittarius joins rich star-fields with one of the most charged mythic identities in the zodiac."
  },
  {
    id: "capricorn",
    name: "Capricorn",
    latin: "Capricornus — The Sea-Goat",
    season: "Visible in late summer and autumn; traditionally tied to the December solstice",
    location: "West of Aquarius in the zodiac band",
    stars: [
      { x: 20, y: 42, label: "Deneb Algedi" },
      { x: 34, y: 50, label: "Nashira" },
      { x: 48, y: 58, label: "Algedi" }
    ],
    overview: "Capricornus is a comparatively faint zodiac constellation with a hybrid identity: part goat, part fish. It is more subtle than many of the surrounding zodiac figures but still important in the yearly structure of the zodiac.",
    lore: "In the book’s zodiac discussion, Capricorn marks the solstitial station of the Sun at the start of winter in the northern seasonal cycle. Its sea-goat form preserves the old zodiac habit of blending earthly and watery symbolism in one figure.",
    quote: "Capricornus is quiet in appearance, but structurally important in the zodiac and rich in symbolic hybridity."
  },
  {
    id: "aquarius",
    name: "Aquarius",
    latin: "Aquarius — The Water-Carrier",
    season: "Autumn evenings in the northern hemisphere; especially clear from lower latitudes",
    location: "West of Pisces, pouring toward Piscis Austrinus",
    stars: [
      { x: 22, y: 56, label: "Sadalmelik" },
      { x: 34, y: 48, label: "Sadalsuud" },
      { x: 50, y: 36, label: "Skat" }
    ],
    overview: "Aquarius is a broad, relatively faint constellation whose identity depends on the image of the water-carrier and the flowing stream descending from the jar. Its waters visually and symbolically connect to the Southern Fish below.",
    lore: "Cornelius places Aquarius within the great symbolic fabric of the zodiac and also connects it indirectly with the larger idea of precession and the coming Age of Aquarius. Its mythology centers on pouring, flow, and celestial waters rather than on a sharply outlined star pattern.",
    quote: "Aquarius is more atmospheric than pictorial: a constellation of pouring, passage, and change."
  },
  {
    id: "pisces",
    name: "Pisces",
    latin: "Pisces — The Fishes",
    season: "Best seen around late September and early October",
    location: "South of Pegasus and between Aquarius and Aries",
    stars: [
      { x: 22, y: 75, label: "Alrischa" },
      { x: 38, y: 58, label: "η Piscium" },
      { x: 55, y: 38, label: "Circlet" },
      { x: 65, y: 73, label: "ω Piscium" },
      { x: 82, y: 72, label: "β Piscium" }
    ],
    overview: "Pisces is a faint zodiac constellation made of two fishes tied together by a cord. One fish rises northward toward Andromeda, while the other stretches westward near the celestial equator; the Circlet helps identify one side of the figure.",
    lore: "Pisces is formed by two fishes bound together by a cord, a subtle but powerful image of connection and tension. Cornelius highlights the importance of the knot marked by Alrischa, emphasizing linkage rather than separation. The constellation has gained additional symbolic weight through precession: the spring equinox now falls within Pisces, defining what is often called the ‘Age of Pisces’. This association with transition, dissolution, and spiritual return reflects the constellation’s diffuse appearance in the sky. Pisces is less about clarity than about continuity—two paths tied together in an ongoing cycle. :contentReference[oaicite:1]{index=1}",
    quote: "Pisces is a constellation of linkage, duality, and historical change in zodiac symbolism."
  }
];

const zodiacData = [
  {
    name: "Aries",
    image: "zodiac_symbols/aries.png",
    desc: "Aries marks the beginning of the zodiac, associated with initiative, courage, and the energy of spring."
  },
  {
    name: "Taurus",
    image: "zodiac_symbols/taurus.png",
    desc: "Taurus represents stability, patience, and connection to the physical world, often linked to growth and abundance."
  },
  {
    name: "Gemini",
    image: "zodiac_symbols/gemini.png",
    desc: "Gemini symbolizes duality, communication, and curiosity, reflecting the exchange of ideas and relationships."
  },
  {
    name: "Cancer",
    image: "zodiac_symbols/cancer.png",
    desc: "Cancer is tied to emotion, home, and memory, marking a turning point in the solar year at the summer solstice."
  },
  {
    name: "Leo",
    image: "zodiac_symbols/leo.png",
    desc: "Leo represents vitality, confidence, and expression, often associated with the height of summer and the power of the Sun."
  },
  {
    name: "Virgo",
    image: "zodiac_symbols/virgo.png",
    desc: "Virgo reflects detail, care, and harvest, symbolizing preparation and the balance between effort and reward."
  },
  {
    name: "Libra",
    image: "zodiac_symbols/libra.png",
    desc: "Libra stands for balance and harmony, aligned with the autumn equinox where day and night are equal."
  },
  {
    name: "Scorpio",
    image: "zodiac_symbols/scorpio.png",
    desc: "Scorpio represents intensity, transformation, and depth, often linked to cycles of endings and renewal."
  },
  {
    name: "Sagittarius",
    image: "zodiac_symbols/sagittarius.png",
    desc: "Sagittarius symbolizes exploration, direction, and knowledge, pointing toward distant horizons."
  },
  {
    name: "Capricorn",
    image: "zodiac_symbols/capricorn.png",
    desc: "Capricorn reflects discipline, endurance, and structure, marking the return of light at the winter solstice."
  },
  {
    name: "Aquarius",
    image: "zodiac_symbols/aquarius.png",
    desc: "Aquarius is associated with change, innovation, and flow, symbolizing ideas that reshape the world."
  },
  {
    name: "Pisces",
    image: "zodiac_symbols/pisces.png",
    desc: "Pisces represents intuition, connection, and cycles, often seen as a return to origins and continuity."
  }
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
      if (id === "mockups") renderMockups();
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
             Interactive constellation website to explore zodiac signs, symbol, and story.
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

    function getCurrentZodiac() {
      return zodiacData.find(z => z.name === state.currentZodiac) || zodiacData[0];
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

  const slices = zodiacData.map((zodiac, i) => {
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
    return `
      <g data-zodiac="${zodiac.name}" data-index="${i}" style="cursor:pointer;">
        <path
          d="${path}"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.16)"
          stroke-width="1.2">
        </path>

        <image
          href="${zodiac.image}"
          x="${tx - 24}"
          y="${ty - 24}"
          width="48"
          height="48"
          transform="rotate(${(mid * 180 / Math.PI) + 90}, ${tx}, ${ty})"
          preserveAspectRatio="xMidYMid meet"
          pointer-events="none"
        />
      </g>
    `;
  }).join("");

  return `
    <div class="zodiac-wheel-shell">
      <div class="zodiac-pointer" aria-hidden="true"></div>

      <div class="zodiac-wheel-rotator" id="zodiacRotator">
        <svg viewBox="0 0 700 700" aria-label="zodiac wheel" id="zodiacSvg">
          <circle cx="350" cy="350" r="280" fill="none" stroke="rgba(255,255,255,0.12)" />
          <circle cx="350" cy="350" r="200" fill="none" stroke="rgba(255,255,255,0.08)" />
          <circle cx="350" cy="350" r="120" fill="none" stroke="rgba(255,255,255,0.12)" />
          <circle cx="350" cy="350" r="28" fill="rgba(255,255,255,0.14)" />
          ${slices}
        </svg>
      </div>
    </div>
  `;
}

function renderZodiac() {
  const currentZodiac = getCurrentZodiac();
  const page = document.getElementById("zodiac");

  page.innerHTML = `
    <div class="section-kicker">Interactive circular map</div>
    <h2 class="section-title">Zodiac Signs</h2>
    <p class="section-copy">
      Drag the wheel to rotate through the zodiac. The pointer at the top marks the selected sign.
    </p>

    <div class="wheel-wrap">
      <div class="wheel-box">
        ${createZodiacWheel()}
      </div>

      <div class="zodiac-detail">
        <div class="mini-heading">Selected</div>
        <div class="zodiac-selected-head" id="zodiacHead">
          <img src="${currentZodiac.image}" alt="${currentZodiac.name} symbol" class="zodiac-selected-icon" />
          <h3 style="font-size:2rem; margin-bottom:0;" id="zodiacName">${currentZodiac.name}</h3>
        </div>
        <p id="zodiacDesc">${currentZodiac.desc}</p>
      </div>
    </div>
  `;

  setupZodiacWheel();
}

function setupZodiacWheel() {
  const rotator = document.getElementById("zodiacRotator");
  const shell = rotator?.closest(".zodiac-wheel-shell");
  if (!rotator || !shell) return;

  const count = zodiacData.length;
  const step = 360 / count;

  let rotation = -(zodiacData.findIndex(z => z.name === state.currentZodiac) * step);
  let isDragging = false;
  let startAngle = 0;
  let startRotation = rotation;

  rotator.style.transform = `rotate(${rotation}deg)`;

  function updateSelectedFromRotation(snap = false) {
    let normalized = ((-rotation % 360) + 360) % 360;
    let index = Math.round(normalized / step) % count;

    if (snap) {
      rotation = -(index * step);
      rotator.style.transform = `rotate(${rotation}deg)`;
    }

    state.currentZodiac = zodiacData[index].name;
    const current = zodiacData[index];

    const title = document.getElementById("zodiacName");
    const desc = document.getElementById("zodiacDesc");
    if (title) title.textContent = current.name;

    const head = document.getElementById("zodiacHead");
    if (head) {
      head.innerHTML = `
        <img src="${current.image}" alt="${current.name} symbol" class="zodiac-selected-icon" />
        <h3 style="font-size:2rem; margin-bottom:0;" id="zodiacName">${current.name}</h3>
      `;
    }
    if (desc) desc.textContent = current.desc;
  }

  function getAngleFromCenter(clientX, clientY) {
    const rect = shell.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.atan2(clientY - cy, clientX - cx) * 180 / Math.PI;
  }

  function onPointerDown(e) {
    isDragging = true;
    rotator.classList.add("dragging");
    startAngle = getAngleFromCenter(e.clientX, e.clientY);
    startRotation = rotation;
    if (rotator.setPointerCapture) rotator.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const currentAngle = getAngleFromCenter(e.clientX, e.clientY);
    const delta = currentAngle - startAngle;
    rotation = startRotation + delta;
    rotator.style.transform = `rotate(${rotation}deg)`;
    updateSelectedFromRotation(false);
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    rotator.classList.remove("dragging");
    if (rotator.releasePointerCapture) {
      try { rotator.releasePointerCapture(e.pointerId); } catch {}
    }
    rotator.style.transition = "transform 0.35s ease";
    updateSelectedFromRotation(true);
    setTimeout(() => {
      if (rotator) rotator.style.transition = "";
    }, 350);
  }

  rotator.addEventListener("pointerdown", onPointerDown);
  rotator.addEventListener("pointermove", onPointerMove);
  rotator.addEventListener("pointerup", onPointerUp);
  rotator.addEventListener("pointercancel", onPointerUp);
  rotator.addEventListener("pointerleave", onPointerUp);

  rotator.querySelectorAll("[data-zodiac]").forEach(item => {
    item.addEventListener("click", () => {
      const index = Number(item.dataset.index);
      rotation = -(index * step);
      rotator.style.transition = "transform 0.35s ease";
      rotator.style.transform = `rotate(${rotation}deg)`;
      updateSelectedFromRotation(true);
      setTimeout(() => {
        if (rotator) rotator.style.transition = "";
      }, 350);
    });
  });

  updateSelectedFromRotation(true);
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