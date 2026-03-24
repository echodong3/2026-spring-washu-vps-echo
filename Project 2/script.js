  const NAV_ITEMS = [
      { id: "home", label: "Home" },
      { id: "zodiac", label: "Zodiac Map" },
      { id: "constellations", label: "Constellations" },
      { id: "about", label: "About" },
      { id: "glossary", label: "Glossary" }
    ];

    const ZODIAC_SIGNS = [
      { name: "Aries", symbol: "♈", month: "Apr" },
      { name: "Taurus", symbol: "♉", month: "May" },
      { name: "Gemini", symbol: "♊", month: "Jun" },
      { name: "Cancer", symbol: "♋", month: "Jul" },
      { name: "Leo", symbol: "♌", month: "Aug" },
      { name: "Virgo", symbol: "♍", month: "Sep" },
      { name: "Libra", symbol: "♎", month: "Oct" },
      { name: "Scorpius", symbol: "♏", month: "Nov" },
      { name: "Ophiuchus", symbol: "⛎", month: "Late Nov" },
      { name: "Sagittarius", symbol: "♐", month: "Dec" },
      { name: "Capricornus", symbol: "♑", month: "Jan" },
      { name: "Aquarius", symbol: "♒", month: "Feb" },
      { name: "Pisces", symbol: "♓", month: "Mar" }
    ];

    const CONSTELLATIONS = [
      {
        id: "aries",
        name: "Aries",
        latin: "Aries",
        symbol: "♈",
        season: "Spring",
        month: "April evenings",
        position: "Northern sky · Between Pisces and Taurus",
        brightest: "Hamal",
        majorStars: ["Hamal", "Sheratan", "Mesarthim"],
        summary: "A compact zodiac constellation usually recognized as a short, curved chain of stars.",
        loreTitle: "The Ram and the Threshold of Seasons",
        lore: "Aries can be presented as a constellation of beginnings: force, emergence, and the turning of the year. In your final version, this is where you should add your own paraphrased notes from the book, emphasizing how the image of the ram carries symbolic transition rather than only astronomical placement.",
        finding: "Look in the spring sky for a small arc west of Taurus. Hamal is the brightest anchor point.",
        loreTheme: "Beginnings · transition · movement",
        points: [
          { x: 70, y: 72, label: "Hamal" },
          { x: 52, y: 58, label: "Sheratan" },
          { x: 34, y: 49, label: "Mesarthim" }
        ]
      },
      {
        id: "taurus",
        name: "Taurus",
        latin: "Taurus",
        symbol: "♉",
        season: "Winter",
        month: "January evenings",
        position: "Northern sky · Near Orion and Gemini",
        brightest: "Aldebaran",
        majorStars: ["Aldebaran", "Elnath", "Alcyone", "Hyades"],
        summary: "One of the most recognizable zodiac constellations, with the Hyades and the nearby Pleiades.",
        loreTitle: "The Celestial Bull",
        lore: "Taurus carries a long symbolic history of force, sacred presence, and fertility. Its page should feel powerful and grounded: let the lore dominate visually with larger text and calm spacing, then support it with the diagram and star labels.",
        finding: "Follow Orion’s Belt upward toward reddish Aldebaran and the V-shape of the Hyades.",
        loreTheme: "Power · fertility · sacred force",
        points: [
          { x: 24, y: 28, label: "Elnath" },
          { x: 43, y: 42, label: "Alcyone" },
          { x: 62, y: 60, label: "Aldebaran" },
          { x: 82, y: 79, label: "Hyades" }
        ]
      },
      {
        id: "gemini",
        name: "Gemini",
        latin: "Gemini",
        symbol: "♊",
        season: "Winter",
        month: "February evenings",
        position: "Northern sky · East of Taurus",
        brightest: "Pollux",
        majorStars: ["Castor", "Pollux", "Alhena"],
        summary: "A twin-form constellation structured around Castor and Pollux.",
        loreTitle: "Twins in the Night Sky",
        lore: "Gemini is especially effective when framed around doubleness: kinship, mirroring, rivalry, and shared identity. This lore section should read like a relationship, not just a label set.",
        finding: "Move east from Taurus to the bright pair Castor and Pollux, then trace the stars descending below them.",
        loreTheme: "Twinship · relation · mortality",
        points: [
          { x: 35, y: 22, label: "Castor" },
          { x: 58, y: 25, label: "Pollux" },
          { x: 50, y: 56, label: "Alhena" },
          { x: 36, y: 80, label: "Wasat" },
          { x: 68, y: 76, label: "Mebsuta" }
        ]
      },
      {
        id: "cancer",
        name: "Cancer",
        latin: "Cancer",
        symbol: "♋",
        season: "Spring",
        month: "March evenings",
        position: "Northern sky · Between Gemini and Leo",
        brightest: "Altarf",
        majorStars: ["Altarf", "Asellus Borealis", "Asellus Australis", "Beehive Cluster"],
        summary: "A faint zodiac constellation often located with the help of the Beehive Cluster.",
        loreTitle: "A Quiet Figure Remembered in Story",
        lore: "Because Cancer is visually subtle, the lore can carry much of the page’s emotional weight. Use this section as a calm, atmospheric reading space that makes the constellation memorable even when the star pattern is faint.",
        finding: "Look between Gemini and Leo for a dim region; binoculars can help reveal the Beehive Cluster.",
        loreTheme: "Subtle signs · memory · hidden form",
        points: [
          { x: 28, y: 35, label: "Asellus Borealis" },
          { x: 48, y: 49, label: "Beehive" },
          { x: 61, y: 60, label: "Asellus Australis" },
          { x: 83, y: 76, label: "Altarf" }
        ]
      },
      {
        id: "leo",
        name: "Leo",
        latin: "Leo",
        symbol: "♌",
        season: "Spring",
        month: "May evenings",
        position: "Northern sky · East of Cancer",
        brightest: "Regulus",
        majorStars: ["Regulus", "Denebola", "Algieba"],
        summary: "A bold constellation shaped by the Sickle and a triangular hindquarter.",
        loreTitle: "The Lion as Solar Presence",
        lore: "Leo works best as a dramatic page. Present it as majesty, radiance, and force. The lore section should feel ceremonial, with elegant spacing and visual emphasis that makes the text feel almost like an illuminated manuscript.",
        finding: "Use the arc from the Big Dipper’s handle toward Regulus, then follow the Sickle shape for the lion’s head.",
        loreTheme: "Majesty · radiance · force",
        points: [
          { x: 18, y: 60, label: "Regulus" },
          { x: 33, y: 36, label: "Algieba" },
          { x: 48, y: 24, label: "Adhafera" },
          { x: 74, y: 46, label: "Zosma" },
          { x: 88, y: 68, label: "Denebola" }
        ]
      },
      {
        id: "virgo",
        name: "Virgo",
        latin: "Virgo",
        symbol: "♍",
        season: "Spring",
        month: "May–June evenings",
        position: "Northern sky · East of Leo",
        brightest: "Spica",
        majorStars: ["Spica", "Porrima", "Vindemiatrix"],
        summary: "A large zodiac constellation stretching along the ecliptic.",
        loreTitle: "The Figure of the Maiden",
        lore: "Virgo can be staged as an image of order, harvest, and idealized form. Use the page to balance large empty space with a long lore column so the constellation feels expansive and composed.",
        finding: "Arc to Arcturus, then spike to Spica. That classic skywatching phrase leads you into Virgo.",
        loreTheme: "Harvest · order · symbolic femininity",
        points: [
          { x: 22, y: 24, label: "Vindemiatrix" },
          { x: 40, y: 44, label: "Porrima" },
          { x: 68, y: 78, label: "Spica" }
        ]
      },
      {
        id: "libra",
        name: "Libra",
        latin: "Libra",
        symbol: "♎",
        season: "Summer",
        month: "June evenings",
        position: "Southern sky · Between Virgo and Scorpius",
        brightest: "Zubeneschamali",
        majorStars: ["Zubeneschamali", "Zubenelgenubi"],
        summary: "A relatively simple zodiac figure recognized as the Scales.",
        loreTitle: "Balance and Measure",
        lore: "Libra is ideal for a clean, restrained page treatment. Let the starlore focus on themes of balance, weighing, judgment, and measurement rather than sheer visual complexity.",
        finding: "Look east of Virgo and west of Scorpius for a simple quadrilateral shape.",
        loreTheme: "Balance · justice · measurement",
        points: [
          { x: 28, y: 44, label: "Zubeneschamali" },
          { x: 60, y: 56, label: "Zubenelgenubi" },
          { x: 78, y: 34, label: "Brachium" }
        ]
      },
      {
        id: "scorpius",
        name: "Scorpius",
        latin: "Scorpius",
        symbol: "♏",
        season: "Summer",
        month: "July evenings",
        position: "Southern sky · Near Sagittarius",
        brightest: "Antares",
        majorStars: ["Antares", "Shaula", "Sargas"],
        summary: "A striking southern constellation with a curved body and tail.",
        loreTitle: "The Scorpion and the Heat of Summer",
        lore: "Scorpius invites intensity: danger, heat, and dramatic mythic confrontation. Its lore section should feel vivid and charged, with a stronger visual glow than some of the quieter constellations.",
        finding: "Look low in the southern summer sky for bright Antares and the long curving tail trailing away from it.",
        loreTheme: "Danger · heat · confrontation",
        points: [
          { x: 18, y: 36, label: "Antares" },
          { x: 46, y: 50, label: "Sargas" },
          { x: 66, y: 72, label: "Shaula" },
          { x: 82, y: 86, label: "Lesath" }
        ]
      },
      {
        id: "ophiuchus",
        name: "Ophiuchus",
        latin: "Ophiuchus",
        symbol: "⛎",
        season: "Summer",
        month: "July evenings",
        position: "Sky region above Scorpius and near Sagittarius",
        brightest: "Rasalhague",
        majorStars: ["Rasalhague", "Sabik", "Yed Prior"],
        summary: "A large constellation crossing the ecliptic, often noted in discussions of the 13 zodiac constellations.",
        loreTitle: "The Serpent Holder",
        lore: "Ophiuchus is compelling because it sits between astronomy and popular zodiac conversation. In your site, this page can become a key moment where myth, image, and the idea of the '13th zodiac' intersect.",
        finding: "Look above Scorpius for a broad figure split around the Serpens stars, with Rasalhague at the upper part of the form.",
        loreTheme: "Healing · holding power · celestial anomaly",
        points: [
          { x: 52, y: 18, label: "Rasalhague" },
          { x: 44, y: 42, label: "Yed Prior" },
          { x: 58, y: 62, label: "Sabik" },
          { x: 72, y: 78, label: "Cebalrai" }
        ]
      },
      {
        id: "sagittarius",
        name: "Sagittarius",
        latin: "Sagittarius",
        symbol: "♐",
        season: "Summer",
        month: "August evenings",
        position: "Southern sky · Toward the Milky Way center",
        brightest: "Kaus Australis",
        majorStars: ["Kaus Australis", "Nunki", "Ascella"],
        summary: "A zodiac constellation often recognized through the 'teapot' asterism.",
        loreTitle: "The Archer at the Galactic Heart",
        lore: "Sagittarius can be presented as aim, direction, and projection into the unknown. Because it lies in a rich part of the Milky Way, the page can feel dense and luminous while still keeping the lore front and center.",
        finding: "Find the teapot shape low in the southern sky; the Milky Way appears to rise like steam from it.",
        loreTheme: "Aim · journey · vision",
        points: [
          { x: 20, y: 58, label: "Ascella" },
          { x: 42, y: 42, label: "Nunki" },
          { x: 66, y: 62, label: "Kaus Australis" },
          { x: 82, y: 48, label: "Kaus Borealis" }
        ]
      },
      {
        id: "capricornus",
        name: "Capricornus",
        latin: "Capricornus",
        symbol: "♑",
        season: "Autumn",
        month: "September evenings",
        position: "Southern sky · West of Aquarius",
        brightest: "Deneb Algedi",
        majorStars: ["Deneb Algedi", "Dabih", "Nashira"],
        summary: "A faint zodiac constellation with a broad wedge-like outline.",
        loreTitle: "The Sea-Goat and the Edge of Seasons",
        lore: "Capricornus is visually modest, so the mythology gives the page much of its force. Use the lore to foreground hybridity, liminality, and the meeting of realms.",
        finding: "Look for a faint, wide wedge south of Aquarius in autumn skies.",
        loreTheme: "Threshold · hybridity · winter turning",
        points: [
          { x: 22, y: 48, label: "Dabih" },
          { x: 46, y: 30, label: "Nashira" },
          { x: 76, y: 56, label: "Deneb Algedi" }
        ]
      },
      {
        id: "aquarius",
        name: "Aquarius",
        latin: "Aquarius",
        symbol: "♒",
        season: "Autumn",
        month: "October evenings",
        position: "Southern sky · Near Pegasus and Pisces",
        brightest: "Sadalsuud",
        majorStars: ["Sadalsuud", "Sadalmelik", "Skat"],
        summary: "A large but subtle zodiac constellation spread across a wide area of sky.",
        loreTitle: "The Water-Carrier",
        lore: "Aquarius is effective as a page about flow, descent, pouring, and unseen continuity. Its visual faintness makes it another constellation where the narrative section can hold special weight.",
        finding: "Find it below Pegasus and near Pisces as a broad, faint group of stars.",
        loreTheme: "Flow · descent · hidden continuity",
        points: [
          { x: 24, y: 32, label: "Sadalmelik" },
          { x: 46, y: 46, label: "Sadalsuud" },
          { x: 72, y: 72, label: "Skat" }
        ]
      },
      {
        id: "pisces",
        name: "Pisces",
        latin: "Pisces",
        symbol: "♓",
        season: "Autumn",
        month: "November evenings",
        position: "Sky region between Aquarius and Aries",
        brightest: "Alrescha",
        majorStars: ["Alrescha", "Eta Piscium"],
        summary: "A faint zodiac constellation usually understood as two fishes connected by cords.",
        loreTitle: "The Fishes and the Celestial Thread",
        lore: "Pisces is best presented through connection and symbolic linkage. The page should feel delicate and spacious, using the lore to make the faint pattern meaningful and memorable.",
        finding: "Look between Aquarius and Aries for a wide, faint form; dark skies help considerably.",
        loreTheme: "Connection · fluidity · celestial bond",
        points: [
          { x: 30, y: 34, label: "Eta Piscium" },
          { x: 56, y: 58, label: "Alrescha" },
          { x: 82, y: 32, label: "Gamma Piscium" }
        ]
      }
    ];

    const GLOSSARY = [
      {
        term: "Celestial Sphere",
        def: "An imaginary sphere surrounding Earth onto which stars and constellations appear projected."
      },
      {
        term: "Ecliptic",
        def: "The apparent yearly path of the Sun across the sky; the zodiac constellations lie along or near this path."
      },
      {
        term: "Zodiac",
        def: "The belt of sky centered on the ecliptic, traditionally divided into signs and associated with a group of constellations."
      },
      {
        term: "Precession",
        def: "The slow shift of Earth’s rotational axis over long periods, changing the background star alignment of the equinoxes."
      },
      {
        term: "Magnitude",
        def: "A measure of a star’s brightness as seen from Earth. Lower numbers indicate brighter stars."
      },
      {
        term: "Right Ascension",
        def: "A coordinate measuring east-west position on the celestial sphere, similar to longitude on Earth."
      },
      {
        term: "Declination",
        def: "A coordinate measuring north-south position on the celestial sphere, similar to latitude on Earth."
      },
      {
        term: "Circumpolar",
        def: "Describes stars or constellations that never set below the horizon from a given latitude."
      },
      {
        term: "Asterism",
        def: "A recognizable pattern of stars that is not officially classified as a constellation."
      },
      {
        term: "Deep-Sky Object",
        def: "An object beyond the solar system, such as a nebula, cluster, or galaxy, visible in the night sky."
      },
      {
        term: "Planisphere",
        def: "A rotating sky chart used to show which constellations are visible at a given date and time."
      },
      {
        term: "Starlore",
        def: "Stories, myths, symbols, and cultural meanings associated with stars and constellations."
      }
    ];

    const SKY_CONSTELLATIONS = [
      {
        id: "aries",
        name: "Aries",
        offsetX: 320,
        offsetY: 350,
        points: [[0,0],[90,-44],[188,-102]]
      },
      {
        id: "taurus",
        name: "Taurus",
        offsetX: 760,
        offsetY: 240,
        points: [[0,0],[72,38],[132,110],[208,22]]
      },
      {
        id: "gemini",
        name: "Gemini",
        offsetX: 1080,
        offsetY: 250,
        points: [[0,0],[70,12],[55,120],[10,240],[126,246]]
      },
      {
        id: "cancer",
        name: "Cancer",
        offsetX: 1230,
        offsetY: 520,
        points: [[0,0],[58,38],[112,92],[166,120]]
      },
      {
        id: "leo",
        name: "Leo",
        offsetX: 760,
        offsetY: 560,
        points: [[0,0],[48,-82],[116,-118],[184,-32],[246,24]]
      },
      {
        id: "virgo",
        name: "Virgo",
        offsetX: 1050,
        offsetY: 610,
        points: [[0,0],[92,54],[168,122]]
      },
      {
        id: "libra",
        name: "Libra",
        offsetX: 1280,
        offsetY: 620,
        points: [[0,0],[66,18],[120,-24]]
      },
      {
        id: "scorpius",
        name: "Scorpius",
        offsetX: 1400,
        offsetY: 720,
        points: [[0,0],[90,40],[150,110],[200,160]]
      },
      {
        id: "ophiuchus",
        name: "Ophiuchus",
        offsetX: 1320,
        offsetY: 430,
        points: [[0,0],[-32,110],[44,188],[122,250]]
      },
      {
        id: "sagittarius",
        name: "Sagittarius",
        offsetX: 1520,
        offsetY: 620,
        points: [[0,0],[70,-24],[142,18],[206,-10]]
      },
      {
        id: "capricornus",
        name: "Capricornus",
        offsetX: 1250,
        offsetY: 250,
        points: [[0,0],[84,-38],[170,12]]
      },
      {
        id: "aquarius",
        name: "Aquarius",
        offsetX: 980,
        offsetY: 110,
        points: [[0,0],[84,50],[170,128]]
      },
      {
        id: "pisces",
        name: "Pisces",
        offsetX: 520,
        offsetY: 120,
        points: [[0,0],[110,54],[220,0]]
      }
    ];

    const state = {
      page: "home",
      selectedConstellation: "aries",
      selectedZodiac: "Aries",
      glossaryQuery: "",
      sky: {
        offsetX: 0,
        offsetY: 0,
        zoom: 1,
        showLabels: true
      }
    };

    const STAR_FIELD = Array.from({ length: 260 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      r: Math.random() * 1.8 + 0.45,
      a: Math.random() * 0.72 + 0.26
    }));

    function getConstellation(id) {
      return CONSTELLATIONS.find(c => c.id === id) || CONSTELLATIONS[0];
    }

    function createEl(tag, className, html) {
      const el = document.createElement(tag);
      if (className) el.className = className;
      if (html !== undefined) el.innerHTML = html;
      return el;
    }

    function renderNav() {
      const nav = document.getElementById("nav");
      nav.innerHTML = "";
      NAV_ITEMS.forEach(item => {
        const btn = document.createElement("button");
        btn.textContent = item.label;
        if (item.id === state.page) btn.classList.add("active");
        btn.addEventListener("click", () => setPage(item.id));
        nav.appendChild(btn);
      });
    }

    function setPage(pageId) {
      state.page = pageId;
      document.querySelectorAll(".page").forEach(page => {
        page.classList.toggle("active", page.id === pageId);
      });
      renderNav();
      if (pageId === "home") renderHome();
      if (pageId === "zodiac") renderZodiac();
      if (pageId === "constellations") renderConstellations();
      if (pageId === "about") renderAbout();
      if (pageId === "glossary") renderGlossary();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderHome() {
      const selected = getConstellation(state.selectedConstellation);
      const page = document.getElementById("home");
      page.innerHTML = `
        <div class="hero">
          <div class="hero-copy card">
            <div class="eyebrow">Interactive night-sky project</div>
            <h2 class="hero-title">Enter the night sky.</h2>
            <p>
              Explore constellations through a pannable dark-sky simulation, a circular zodiac map,
              and constellation pages where astronomy supports story rather than replacing it.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" id="toConstellations">Explore Constellations</button>
              <button class="btn btn-secondary" id="toZodiac">Open Zodiac Map</button>
            </div>
            <div class="hero-meta">
              <div class="mini-stat"><span>UI</span>Modern dark mode</div>
              <div class="mini-stat"><span>Focus</span>Sky + lore</div>
              <div class="mini-stat"><span>Source model</span>Constellation atlas</div>
            </div>
          </div>

          <div class="sky-panel card">
            <div class="sky-toolbar">
              <div class="toolbar-group">
                <button id="zoomIn">Zoom +</button>
                <button id="zoomOut">Zoom −</button>
                <button id="resetSky">Reset View</button>
                <button id="toggleLabels">Labels</button>
              </div>
              <div class="toolbar-group">
                <span class="chip">Drag to pan</span>
                <span class="chip">Click a constellation</span>
              </div>
            </div>

            <div class="sky-frame" id="skyFrame">
              <canvas id="skyCanvas"></canvas>
            </div>

            <div class="sky-caption">
              <p>Interactive homepage star field with constellation overlays.</p>
              <p id="skyHint">Highlighted: ${selected.name}</p>
            </div>
          </div>
        </div>

        <div class="grid-3">
          <div class="small-card card">
            <div class="eyebrow">01</div>
            <h3>Real-sky feeling</h3>
            <p>A draggable star environment makes the homepage feel like stepping into a night sky rather than opening a static webpage.</p>
          </div>
          <div class="small-card card">
            <div class="eyebrow">02</div>
            <h3>Circular zodiac map</h3>
            <p>A radial interface organizes the 13 zodiac constellations around the year and helps users move between time, sky, and symbol.</p>
          </div>
          <div class="small-card card">
            <div class="eyebrow">03</div>
            <h3>Story-led entries</h3>
            <p>Each constellation page gives the starlore the strongest visual emphasis so the site feels interpretive, not purely technical.</p>
          </div>
        </div>
      `;

      document.getElementById("toConstellations").onclick = () => setPage("constellations");
      document.getElementById("toZodiac").onclick = () => setPage("zodiac");
      document.getElementById("zoomIn").onclick = () => {
        state.sky.zoom = Math.min(2.4, state.sky.zoom + 0.15);
        drawSky();
      };
      document.getElementById("zoomOut").onclick = () => {
        state.sky.zoom = Math.max(0.7, state.sky.zoom - 0.15);
        drawSky();
      };
      document.getElementById("resetSky").onclick = () => {
        state.sky.offsetX = 0;
        state.sky.offsetY = 0;
        state.sky.zoom = 1;
        drawSky();
      };
      document.getElementById("toggleLabels").onclick = () => {
        state.sky.showLabels = !state.sky.showLabels;
        drawSky();
      };

      setupSkyInteractions();
      drawSky();
    }

    function buildWheelSVG() {
      const count = ZODIAC_SIGNS.length;
      const cx = 400;
      const cy = 400;
      const outerR = 338;
      const innerR = 220;
      const labelR = 282;
      const monthR = 366;
      const slices = [];
      const labels = [];
      const monthLabels = [];

      ZODIAC_SIGNS.forEach((sign, i) => {
        const start = (-90 + (360 / count) * i) * Math.PI / 180;
        const end = (-90 + (360 / count) * (i + 1)) * Math.PI / 180;
        const largeArc = end - start > Math.PI ? 1 : 0;

        const x1 = cx + outerR * Math.cos(start);
        const y1 = cy + outerR * Math.sin(start);
        const x2 = cx + outerR * Math.cos(end);
        const y2 = cy + outerR * Math.sin(end);
        const x3 = cx + innerR * Math.cos(end);
        const y3 = cy + innerR * Math.sin(end);
        const x4 = cx + innerR * Math.cos(start);
        const y4 = cy + innerR * Math.sin(start);

        const path = `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;

        const mid = (start + end) / 2;
        const tx = cx + labelR * Math.cos(mid);
        const ty = cy + labelR * Math.sin(mid);
        const mx = cx + monthR * Math.cos(mid);
        const my = cy + monthR * Math.sin(mid);

        const active = state.selectedZodiac === sign.name;

        slices.push(`
          <path
            data-name="${sign.name}"
            d="${path}"
            fill="${active ? "rgba(140,183,255,0.2)" : "rgba(255,255,255,0.03)"}"
            stroke="rgba(171,194,255,0.15)"
            stroke-width="2"
          ></path>
        `);

        labels.push(`
          <g data-name="${sign.name}">
            <text x="${tx}" y="${ty - 8}" text-anchor="middle" fill="#edf2ff" font-size="28" font-weight="700">${sign.symbol}</text>
            <text x="${tx}" y="${ty + 18}" text-anchor="middle" fill="#a7b4cf" font-size="14">${sign.name}</text>
          </g>
        `);

        monthLabels.push(`
          <text x="${mx}" y="${my}" text-anchor="middle" fill="#e4c46b" font-size="12" letter-spacing="2">${sign.month.toUpperCase()}</text>
        `);
      });

      return `
        <svg class="zodiac-svg" viewBox="0 0 800 800" aria-label="Zodiac wheel">
          <circle cx="400" cy="400" r="390" fill="rgba(255,255,255,0.01)"></circle>
          <circle cx="400" cy="400" r="338" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"></circle>
          <circle cx="400" cy="400" r="220" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"></circle>
          ${slices.join("")}
          ${monthLabels.join("")}
          ${labels.join("")}
        </svg>
      `;
    }

    function renderZodiac() {
      const selected = ZODIAC_SIGNS.find(z => z.name === state.selectedZodiac) || ZODIAC_SIGNS[0];
      const page = document.getElementById("zodiac");
      page.innerHTML = `
        <div class="section-card card">
          <div class="eyebrow">Circular map of the year</div>
          <div class="zodiac-layout">
            <div class="wheel-card card">
              <div class="wheel-wrap">
                ${buildWheelSVG()}
                <div class="wheel-center">SUN</div>
              </div>
            </div>

            <div class="detail-card card">
              <div class="eyebrow">Selected constellation</div>
              <h2 style="margin-bottom:6px;">${selected.symbol} ${selected.name}</h2>
              <p>
                This zodiac wheel treats the constellations as a circular time-based interface.
                You can use it to show users how the year, the ecliptic path, and the constellation sequence relate to one another.
              </p>
              <div class="quote-line"></div>
              <div class="tag-row">
                <div class="tag">13 zodiac constellations</div>
                <div class="tag">Radial interaction</div>
                <div class="tag">Time marker: ${selected.month}</div>
              </div>
              <div style="margin-top:24px;">
                <h3>Design note</h3>
                <p>
                  You can later connect each wheel segment to a specific constellation page,
                  a month-based sky state, or even an animated transition in the homepage sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      page.querySelectorAll("[data-name]").forEach(node => {
        node.style.cursor = "pointer";
        node.addEventListener("click", () => {
          state.selectedZodiac = node.getAttribute("data-name");
          renderZodiac();
        });
      });
    }

    function diagramSVG(points) {
      const viewWidth = 600;
      const viewHeight = 420;

      const pointToXY = point => ({
        x: point.x / 100 * viewWidth,
        y: point.y / 100 * viewHeight
      });

      const lines = points.slice(0, -1).map((p, i) => {
        const a = pointToXY(p);
        const b = pointToXY(points[i + 1]);
        return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="rgba(140,183,255,0.5)" stroke-width="2.2" />`;
      }).join("");

      const stars = points.map(p => {
        const { x, y } = pointToXY(p);
        return `
          <circle cx="${x}" cy="${y}" r="16" fill="rgba(140,183,255,0.14)"></circle>
          <circle cx="${x}" cy="${y}" r="5.5" fill="#edf2ff"></circle>
          <text x="${x + 12}" y="${y - 10}" fill="#a7b4cf" font-size="14">${p.label}</text>
        `;
      }).join("");

      return `
        <svg viewBox="0 0 ${viewWidth} ${viewHeight}" aria-label="Constellation diagram">
          <rect x="0" y="0" width="${viewWidth}" height="${viewHeight}" rx="20" fill="rgba(6,10,20,0.92)"></rect>
          ${lines}
          ${stars}
        </svg>
      `;
    }

    function renderConstellations() {
      const selected = getConstellation(state.selectedConstellation);
      const page = document.getElementById("constellations");

      page.innerHTML = `
        <div class="constellation-grid">
          <div class="card section-card">
            <div class="eyebrow">Constellation entries</div>
            <h3 style="margin-bottom:16px;">Index</h3>
            <div class="constellation-list">
              ${CONSTELLATIONS.map(c => `
                <button class="constellation-item ${c.id === selected.id ? "active" : ""}" data-id="${c.id}">
                  ${c.symbol} ${c.name}
                  <small>${c.season} · ${c.month}</small>
                </button>
              `).join("")}
            </div>
          </div>

          <div class="constellation-page card">
            <div class="constellation-top">
              <div>
                <div class="eyebrow">Constellation overview</div>
                <h2>${selected.name}</h2>
                <p><em>${selected.latin}</em> · ${selected.position}</p>
              </div>
              <div class="symbol-badge">${selected.symbol}</div>
            </div>

            <p>${selected.summary}</p>

            <div class="fact-grid">
              <div class="fact"><span>Best time</span>${selected.month}</div>
              <div class="fact"><span>Season</span>${selected.season}</div>
              <div class="fact"><span>Brightest star</span>${selected.brightest}</div>
              <div class="fact"><span>Major stars</span>${selected.majorStars.join(", ")}</div>
            </div>

            <div class="constellation-content">
              <div>
                <div class="diagram">
                  <h3>Star diagram</h3>
                  <p style="margin-bottom:14px;">Major stars labeled for quick recognition.</p>
                  ${diagramSVG(selected.points)}
                </div>

                <div class="finder" style="margin-top:18px;">
                  <h3>Location in sky</h3>
                  <p>${selected.finding}</p>
                </div>
              </div>

              <div class="lore-panel">
                <div class="eyebrow">Starlore emphasis</div>
                <h3>${selected.loreTitle}</h3>
                <div class="quote-line"></div>
                <p>${selected.lore}</p>
                <div class="tag-row">
                  <div class="tag">${selected.loreTheme}</div>
                  <div class="tag">Story-first layout</div>
                  <div class="tag">Book-based paraphrase zone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      page.querySelectorAll(".constellation-item").forEach(button => {
        button.addEventListener("click", () => {
          state.selectedConstellation = button.dataset.id;
          renderConstellations();
          if (state.page === "home") drawSky();
        });
      });
    }

    function renderAbout() {
      const page = document.getElementById("about");
      page.innerHTML = `
        <div class="section-card card">
          <div class="eyebrow">Project context</div>
          <div class="about-layout">
            <div class="about-block">
              <h3>About this website</h3>
              <p>
                This website reimagines a constellation reference book as an interactive digital atlas.
                It combines sky navigation, zodiac structure, constellation diagrams, and starlore so users can
                encounter constellations both as visible star patterns and as cultural stories.
              </p>
              <div style="margin-top:20px;">
                <h3>Constellations and zodiac signs</h3>
                <p>
                  Constellations are star groupings or sky regions. Zodiac signs are a traditional symbolic division of the ecliptic.
                  This project uses both ideas, but visually prioritizes the constellations themselves and the stories attached to them.
                </p>
              </div>
            </div>

            <div class="about-block">
              <h3>How to use the site</h3>
              <div class="steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div>
                    <strong>Start on Home</strong>
                    <p>Drag the interactive sky and click constellations to move into the project.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div>
                    <strong>Open the Zodiac Map</strong>
                    <p>Use the circular wheel to understand how the 13 zodiac constellations relate to the year.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div>
                    <strong>Read constellation entries</strong>
                    <p>View the star diagram first, then spend time with the starlore section as the main reading experience.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">4</div>
                  <div>
                    <strong>Use the Glossary</strong>
                    <p>Search astronomical and interpretive terms used throughout the site.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderGlossary() {
      const page = document.getElementById("glossary");
      const q = state.glossaryQuery.trim().toLowerCase();
      const filtered = GLOSSARY.filter(item =>
        item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q)
      );

      page.innerHTML = `
        <div class="section-card card">
          <div class="glossary-search-card">
            <div class="eyebrow">Reference section</div>
            <h2>Glossary</h2>
            <p>Search technical terms connected to sky observation, zodiac structure, and starlore.</p>
            <input
              id="glossarySearch"
              class="glossary-search"
              placeholder="Search terms like ecliptic, precession, magnitude..."
              value="${state.glossaryQuery.replace(/"/g, "&quot;")}"
            />
            <div class="glossary-list">
              ${
                filtered.length
                  ? filtered.map(item => `
                    <div class="glossary-item">
                      <h3 style="margin-bottom:8px;">${item.term}</h3>
                      <p>${item.def}</p>
                    </div>
                  `).join("")
                  : `<div class="glossary-item"><p>No terms match your search.</p></div>`
              }
            </div>
          </div>
        </div>
      `;

      document.getElementById("glossarySearch").addEventListener("input", e => {
        state.glossaryQuery = e.target.value;
        renderGlossary();
      });
    }

    function setupSkyInteractions() {
      const frame = document.getElementById("skyFrame");
      const canvas = document.getElementById("skyCanvas");
      if (!frame || !canvas) return;

      let dragging = false;
      let startX = 0;
      let startY = 0;
      let baseX = 0;
      let baseY = 0;

      frame.onmousedown = event => {
        dragging = true;
        frame.classList.add("dragging");
        startX = event.clientX;
        startY = event.clientY;
        baseX = state.sky.offsetX;
        baseY = state.sky.offsetY;
      };

      window.onmouseup = () => {
        dragging = false;
        frame.classList.remove("dragging");
      };

      window.onmousemove = event => {
        if (!dragging) return;
        state.sky.offsetX = baseX + (event.clientX - startX) / state.sky.zoom;
        state.sky.offsetY = baseY + (event.clientY - startY) / state.sky.zoom;
        drawSky();
      };

      canvas.onclick = event => {
        const rect = canvas.getBoundingClientRect();
        const mx = event.clientX - rect.left;
        const my = event.clientY - rect.top;
        let found = null;

        SKY_CONSTELLATIONS.forEach(item => {
          item.points.forEach(pt => {
            const x = (item.offsetX + pt[0] + state.sky.offsetX) * state.sky.zoom;
            const y = (item.offsetY + pt[1] + state.sky.offsetY) * state.sky.zoom;
            if (Math.hypot(mx - x, my - y) < 18 && !found) found = item.id;
          });
        });

        if (found) {
          state.selectedConstellation = found;
          drawSky();
        }
      };

      window.addEventListener("resize", drawSky);
    }

    function drawSky() {
      const canvas = document.getElementById("skyCanvas");
      const frame = document.getElementById("skyFrame");
      if (!canvas || !frame) return;

      const rect = frame.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      const ctx = canvas.getContext("2d");
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const { offsetX, offsetY, zoom, showLabels } = state.sky;

      const toScreen = (x, y) => ({
        x: (x + offsetX) * zoom,
        y: (y + offsetY) * zoom
      });

      STAR_FIELD.forEach(star => {
        const p = toScreen(star.x, star.y);
        if (p.x < -20 || p.x > rect.width + 20 || p.y < -20 || p.y > rect.height + 20) return;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${star.a})`;
        ctx.arc(p.x, p.y, star.r * zoom, 0, Math.PI * 2);
        ctx.fill();
      });

      SKY_CONSTELLATIONS.forEach(item => {
        const isSelected = item.id === state.selectedConstellation;
        ctx.strokeStyle = isSelected ? "rgba(228,196,107,0.94)" : "rgba(140,183,255,0.64)";
        ctx.lineWidth = isSelected ? 2.9 : 2;

        ctx.beginPath();
        item.points.forEach((pt, i) => {
          const p = toScreen(item.offsetX + pt[0], item.offsetY + pt[1]);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        item.points.forEach(pt => {
          const p = toScreen(item.offsetX + pt[0], item.offsetY + pt[1]);
          ctx.beginPath();
          ctx.fillStyle = isSelected ? "#fff1c2" : "#edf2ff";
          ctx.arc(p.x, p.y, isSelected ? 4.3 : 3.4, 0, Math.PI * 2);
          ctx.fill();
        });

        if (showLabels) {
          const labelPoint = toScreen(item.offsetX + item.points[0][0], item.offsetY + item.points[0][1] - 24);
          ctx.fillStyle = isSelected ? "#fff1c2" : "#cad7f2";
          ctx.font = "600 14px Inter, sans-serif";
          ctx.fillText(item.name, labelPoint.x, labelPoint.y);
        }
      });

      const hint = document.getElementById("skyHint");
      if (hint) {
        hint.textContent = `Highlighted: ${getConstellation(state.selectedConstellation).name}`;
      }
    }

    function init() {
      renderNav();
      renderHome();
      renderZodiac();
      renderConstellations();
      renderAbout();
      renderGlossary();
      setPage("home");
    }

    init();