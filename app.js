// -----------------------------
// Language + i18n (FIXED ORDER)
// -----------------------------

// 1) Define LANGS first
const LANGS = [
  { code: "en", labelKey: "lang_en", hint: "English" },
  { code: "tl", labelKey: "lang_tl", hint: "Tagalog" },
  { code: "cb", labelKey: "lang_cb", hint: "Chavacano" },
  { code: "tsg", labelKey: "lang_tsg", hint: "Tausug" },
  { code: "bs", labelKey: "lang_bs", hint: "Bisaya" },
];

// 2) Define I18N BEFORE any function references it
const I18N = {
  en: {
    brand_name: "JeePS",
    brand_tagline: "Routa de mga vivientes",
    nav_home: "Main Page",
    nav_map: "Main Map",
    nav_about: "About",
    nav_faqs: "FAQs",
    nav_contact: "Contact",
    nav_blog: "Blog",
    current_language: "Language",
    change: "Change",
    footer_note: "Prototype build • Content is replaceable",

    modal_title: "Choose your language",
    modal_body:
      "This website supports multiple languages. You can change it anytime using the Language button in the sidebar.",
    modal_close: "Close",

    // Home - Block 1
    home_welcome_top: "WELCOME TO",
    home_tagline_1: "Cheap,",
    home_tagline_2: "Efficient,",
    home_tagline_3: "Convenient.",
    home_sub: "All within reach in your phone, commute with confidence, wherever you are.",

    // Home - Block 3
    hustle_title_1: "HUSTLE",
    hustle_title_2: "IN THE",
    hustle_title_3: "BUSTLE",
    hustle_desc:
      "With the intricate twists and turns of Zamboanga City, one can find themselves lost in a blink of an eye. Hence, JeePS curates jeepney stops across the city to find the fastest and most efficient routes of travel to your destination.",

    // Home - Block 4
    sofar_title_1: "SO FAR,",
    sofar_title_2: "YET",
    sofar_title_3: "SO CLOSE",
    sofar_desc:
      "Running late and don’t have time to walk to your usual jeepney stop? We’ve got you covered! JeePS keeps track of jeepneys passing the street within your current proximity.",

    // Home - Block 5
    conv_title_1: "CONVENIENCE",
    conv_title_2: "AT",
    conv_title_3: "YOUR",
    conv_title_4: "FINGERTIPS",
    conv_desc:
      "JeePS is the first jeepney navigator website in Zamboanga City. In just one swipe, one hold, and one press, you already have an idea on how you can get to your destination with a fare as low as ₱10.00.",

    about_title: "About the Website",
    about_sub:
      "JeePS helps users discover jeepney routes, paradahan locations, and basic guidance for commuting.",
    about_body:
      "Replace this text with your official description: purpose, target users (students), and what information the map provides.",

    faqs_kicker: "FREQUENTLY ASKED QUESTIONS",

    faq_q1: "How do I go to [place]?",
    faq_a1: "By following the Main Map page, you may locate your jeepney’s paradahan location with the help of directions.",

    faq_q2: "Where can I see routes, schedules, and fares?",
    faq_a2: "All of these can be found in the Main Map page. Please note that schedules may vary depending on arrivals and departures in each location.",

    faq_q3: "How can I see the live locations of the jeepneys?",
    faq_a3: "This feature has yet to be implemented due to limited technology available for the jeepney drivers.",

    faq_q4: "Does this work offline?",
    faq_a4: "WiFi or mobile data is required for the website to work, so it may update the current schedules and fares.",

    faqs_title: "FAQs",
    faqs_sub: "Post common questions, notes, and updates here.",
    faqs_q1: "How do I use the map?",
    faqs_a1: "Go to Main Map, then toggle routes and search for paradahan.",
    faqs_q2: "Is this official data?",
    faqs_a2: "This is a student project. Validate routes with local guidance.",

    aboutus_title: "About Us",
    aboutus_sub: "Static page about your group and roles.",
    aboutus_body:
      "Replace this section with your groupmates’ names, roles (research, dev, design), and acknowledgements.",

    blog_title: "Blog",
    blog_sub: "Static blog sections for announcements and posts.",
    blog_post1: "Sample Post: Project Overview",
    blog_post1_body:
      "Write an overview of your objectives, scope, and upcoming improvements.",
    blog_post2: "Sample Post: Data Collection",
    blog_post2_body:
      "Describe how you gathered routes/paradahan data and how users should interpret it.",

    map_title: "Main Map",
    map_sub: "Interactable map with routes, paradahan locations, and search.",
    map_search_placeholder: "Search paradahan (e.g., Downtown Terminal)",
    map_routes: "Routes",
    map_paradahan: "Paradahan",
    map_results: "Search results",
    map_no_results: "No results found.",
  },

  tl: {
    brand_name: "JeePS",
    brand_tagline: "Routa de mga vivientes",
    nav_home: "Pangunahing Pahina",
    nav_map: "Pangunahing Mapa",
    nav_about: "Tungkol",
    nav_faqs: "FAQs",
    nav_contact: "Kontak",
    nav_blog: "Blog",
    current_language: "Wika",
    change: "Palitan",
    footer_note: "Prototype build • Napapalitan ang laman",

    modal_title: "Pumili ng wika",
    modal_body:
      "May iba’t ibang wika ang website na ito. Maaari mo itong palitan anumang oras gamit ang button sa sidebar.",
    modal_close: "Isara",

    home_welcome_top: "MALIGAYANG PAGDATING SA",
    home_tagline_1: "Mura.",
    home_tagline_2: "Kombenyente.",
    home_tagline_3: "Mahusay.",
    home_sub:
      "Lahat ay maabot mo sa iyong selpon, mag commute na may kumpiyansa, kung saan ka man.",

    hustle_title_1: "HUSTLE",
    hustle_title_2: "IN THE",
    hustle_title_3: "BUSTLE",
    hustle_desc:
      "Sa masalimuot na mga twist at halinhinan ng Zamboanga city, siya ay maaaring hanapin ang kanyang sarili nawawala sa isang pikit ng mata. Ngunit, ang JeePS ang mag curate ng jeepney paradahan sa buong lungsod para hanapin ang mabilis at mas mahusay na ruta ng paglalakbay sa iyong destinasyon.",

    sofar_title_1: "MALAYO,",
    sofar_title_2: "PERO",
    sofar_title_3: "MALAPIT NA",
    sofar_desc:
      "Nahuhuli ka ba at wala ka nang oras para lumakad sa kabalikan mong jeepney paradahan? Kami na ang bahala sayo! Ang JeePS sinusubaybayan nito ang mga rutang dinadaanan ng mga jeepney sa loob ng iyong kasalukuyang kalapitan.",

    conv_title_1: "KOMBENYENTE",
    conv_title_2: "SA",
    conv_title_3: "IYONG",
    conv_title_4: "MGA DALIRI",
    conv_desc:
      "Ang JeePS ay ang unang jeepney nabigador website sa Zamboanga City. Sa isang swipe, Isang hawak, at isang pindot, meron ka ng ideya kung on paano ka makakapunta sa iyong destinasyon na may pamasahe na kasing baba ng ₱10.00.",

    about_title: "Tungkol sa Website",
    about_sub:
      "Tinutulungan ng JeePS ang mga user na makita ang mga ruta ng jeepney at lokasyon ng paradahan.",
    about_body:
      "Palitan ito ng opisyal na paglalarawan: layunin, target na user (estudyante), at kung ano ang ipinapakita ng mapa.",

    faqs_title: "FAQs",
    faqs_sub: "Ilagay dito ang mga karaniwang tanong, notes, at updates.",
    faqs_q1: "Paano gamitin ang mapa?",
    faqs_a1: "Pumunta sa Pangunahing Mapa, i-toggle ang routes, at mag-search ng paradahan.",
    faqs_q2: "Opisyal ba ang datos?",
    faqs_a2: "Ito ay student project. I-validate ang ruta gamit ang lokal na gabay.",

    blog_title: "Blog",
    blog_sub: "Static na blog sections para sa announcements at posts.",
    map_title: "Pangunahing Mapa",
    map_sub: "Interactable map na may routes, paradahan, at search.",
    map_search_placeholder: "Maghanap ng paradahan (hal., Downtown Terminal)",
    map_routes: "Mga Ruta",
    map_paradahan: "Paradahan",
    map_results: "Mga Resulta",
    map_no_results: "Walang nahanap.",
  },

 
  // Chavacano (placeholder-quality; refine with a fluent speaker)
  cb: {
    brand_name: "JeePS",
    brand_tagline: "Routa de mga vivientes",
    nav_home: "Pagina Principal",
    nav_map: "Mapa Principal",
    nav_about: "Sobre",
    nav_faqs: "FAQs",
    nav_contact: "Contact",
    nav_blog: "Blog",
    current_language: "Lenguaje",
    change: "Cambia",
    footer_note: "Prototype build • Pwede cambia el contenido",

    modal_title: "Escoge tu lenguaje",
    modal_body:
      "Este website tiene multi-lenguaje. Pwede tu cambia maskin cuando usando el button na sidebar.",
    modal_close: "Cerra",

    home_title: "Bienvenido na JeePS",
    home_welcome_top: "BIENVENIDO NA",  
    home_sub:
      "Guia para estudiantes para ruta de jeepney y lugar de paradahan na Zamboanga City.",
    home_badge: "Arranca aqui",
    tutorial_title: "Rapido tutorial",
    tutorial_1: "Escoge tu lenguaje na pop-up.",
    tutorial_2: "Abri el Mapa Principal para mira rutas y paradahan.",
    tutorial_3: "Usa Search para encontra rapido el paradahan.",
    tutorial_4: "Mira FAQs para notas y recordatorio.",
    home_cta_map: "Abri Mapa Principal",
    home_cta_about: "Lee Sobre",
home_tagline_1: "Barato.",
home_tagline_2: "Conveniente.",
home_tagline_3: "Eficiente.",
home_sub:
  "Todos cosa puede alcanza adentro na telefono, viaje con compianza, maskin donde.",

hustle_title_1: "HUSTLE",
hustle_title_2: "IN THE",
hustle_title_3: "BUSTLE",
hustle_desc:
  "Con el maga complicao camino y birada na Ciudad de Zamboanga, el un persona ay pronto keda perdido na maga lugar. Por eso, el JeePS ta iskuji maga routa del jeep na ciudad para buska el rapido y eficiente kun todo de maga routa de viaje para na destino con vos otros.",

sofar_title_1: "SO FAR,",
sofar_title_2: "YET",
sofar_title_3: "SO CLOSE",
sofar_desc:
  "Tarda ya llega y nemas hora para camina na de tuyo parada del jeep? Kame ya bahala para contigo! Ta mantener el JeePS maga presente lugar de jeep ta pasa na camino serka na de uste proximidad.",

conv_title_1: "CONVENIENCE",
conv_title_2: "AT",
conv_title_3: "YOUR",
conv_title_4: "FINGERTIPS",
conv_desc:
  "El JeePS ay el primera website para navega maga jeep na Ciudad de Zamboanga. Na un swipe, un agarrada, y un pichi lang, tiene ya uste idea na pakilaya etu liga na destino na el pasaje hasta ₱10.00 lang.",

    about_title: "Sobre el Website",
    about_sub:
      "JeePS ayuda con ustedes para conoce rutas de jeepney y lugar de paradahan.",
    about_body:
      "Cambia este texto con descripcion oficial: proposito, target users (estudiantes), y que cosa ta mostra el mapa.",

    faqs_title: "FAQs",
    faqs_sub: "Pone aqui el comun pregunta, notas, y updates.",
    faqs_q1: "Como usa el mapa?",
    faqs_a1: "Anda na Mapa Principal, toggle rutas, y search paradahan.",
    faqs_q2: "Oficial ba el datos?",
    faqs_a2: "Este student project. Verifica el ruta con local guidance.",

    aboutus_title: "Sobre con Nosotros",
    aboutus_sub: "Pagina estatico sobre su grupo y roles.",
    aboutus_body:
      "Cambia este con nombre de grupo, roles (research, dev, design), y acknowledgements.",

    blog_title: "Blog",
    blog_sub: "Static sections para announcements y posts.",
    blog_post1: "Sample Post: Project Overview",
    blog_post1_body:
      "Escribi el objectives, scope, y improvements.",
    blog_post2: "Sample Post: Data Collection",
    blog_post2_body:
      "Describe como ustedes ta colecta data para ruta/paradahan y como usa el users.",

    map_title: "Mapa Principal",
    map_sub: "Mapa interactivo con rutas, paradahan, y search.",
    map_search_placeholder: "Busca paradahan (ej., Downtown Terminal)",
    map_routes: "Rutas",
    map_paradahan: "Paradahan",
    map_results: "Resulta",
    map_no_results: "Ningun resulta.",
  },

  // Tausug (placeholder-quality; refine with a fluent speaker)
  tsg: {
    brand_name: "JeePS",
    brand_tagline: "Routa de mga vivientes",
    nav_home: "Panguna Pahina",
    nav_map: "Mapa",
    nav_about: "Pasal",
    nav_faqs: "FAQs",
    nav_contact: "Kontak",
    nav_blog: "Blog",
    current_language: "Sinug",
    change: "Ilis",
    footer_note: "Prototype build • Mabaya’ ilis an sulod",

    modal_title: "Pili-a in sinug",
    modal_body:
      "Ini nga website naay daghan sinug. Mahimo nimo ilis-un bisan san-a gamit an button ha sidebar.",
    modal_close: "Sira",
home_tagline_1: "Maluhay,",
home_tagline_2: "Masanyang,",
home_tagline_3: "Masidla.",
home_sub:
  "Katan ini ha laum na sin cellphone mo, byahe makusug in pangatayan, hawnu-hawnu man kaw binaybayan.",

hustle_title_1: "UMUS-US",
hustle_title_2: "HA PAG-",
hustle_title_3: "US-USAN",
hustle_desc:
  "Ha taud sin siklut-siklut sin hula Zamboanga, manjari kaw malawa halaum sin hangkasasaat da. Sa pataptapa kaymu, napipi sin JeePS in paghuhundugan sin mga ka-jeepan ha katilibut hula Zamboanga hasupaya maluhay kaymu in maglawag sin pinaka masapat iban pinaka masidla dan labayan harap mattu pa hulah gawihun mo.",

sofar_title_1: "MALAYUH,",
sofar_title_2: "SAH",
sofar_title_3: "SUMUUK-SUUK DA",
sofar_desc:
  "Nag-uus iban di na kasakapan panawun harap pa paradahan? Kami in bahala kaymu! Namomonitor sin JeePS in paglabay sin mga jeep masuuk pa kyabutangan mo.",

conv_title_1: "KASANYANGAN",
conv_title_2: "HIKA",
conv_title_3: "DIHIL",
conv_title_4: "SIN DUHUL GULAMAY LIMA MO",
conv_desc:
  "In JeePS in pinaka nakauna magsu-susul jeepney ha hulah Zamboanga. Ha pasalan sadja sin hambuuk swipe, gunggung/ulin, iban hambuuk pindut, mahinang na yattu sabab hasupaya awn nakaw panali ma-urul bang biyadiin kaw maka-kattu pa hulah datungan mo, ha sukay dih maba daing ha hangpu pilak ₱10.00.",


    home_title: "Wilujeng datang ha JeePS",
    home_welcome_top: "WILUJENG DATANG HA",
    home_sub:
      "Giya para estudyante para ruta sin jeepney ug lugar sin paradahan ha Zamboanga City.",
    home_badge: "Sugdi diri",
    tutorial_title: "Madali nga tutorial",
    tutorial_1: "Pili-a in sinug ha pop-up.",
    tutorial_2: "Abri-a an Mapa para makit-an an ruta ug paradahan.",
    tutorial_3: "Gamit-a an Search para dayun makit-an an paradahan.",
    tutorial_4: "Tan-awa an FAQs para notes ug pahinumdom.",
    home_cta_map: "Abri-a an Mapa",
    home_cta_about: "Basa-a an Pasal",

    about_title: "Pasal ha Website",
    about_sub:
      "An JeePS makatabang ha paghibalo sin ruta sin jeepney ug paradahan.",
    about_body:
      "Ilis-i ini nga teksto ha opisyal nga pagsaysay: tumong, target (estudyante), ug unsa an ginapakita sin mapa.",

    faqs_title: "FAQs",
    faqs_sub: "Ibutang diri an kasagaran nga pangutana, notes, ug updates.",
    faqs_q1: "Unsaon paggamit sin mapa?",
    faqs_a1: "Adto ha Mapa, i-toggle an ruta, ug i-search an paradahan.",
    faqs_q2: "Opisyal ba ini nga datos?",
    faqs_a2: "Student project ini. I-verify an ruta pinaagi ha local guidance.",

    aboutus_title: "Pasal Sin Kita",
    aboutus_sub: "Static page pasal ha grupo ug roles.",
    aboutus_body:
      "Ilis-i ini ha ngaran sin mga kauban, roles (research, dev, design), ug acknowledgements.",

    blog_title: "Blog",
    blog_sub: "Static sections para announcements ug posts.",
    blog_post1: "Sample Post: Project Overview",
    blog_post1_body: "Isaysay an objectives, scope, ug improvements.",
    blog_post2: "Sample Post: Data Collection",
    blog_post2_body: "Isaysay kun giunsa pagkuha an routes/paradahan data ug pag-interpret.",

    map_title: "Mapa",
    map_sub: "Interactable map nga naay ruta, paradahan, ug search.",
    map_search_placeholder: "Pangitaa an paradahan (pananglitan: Downtown Terminal)",
    map_routes: "Ruta",
    map_paradahan: "Paradahan",
    map_results: "Resulta",
    map_no_results: "Way nakit-an.",
  },

  // Bisaya/Cebuano
  bs: {
    brand_name: "JeePS",
    brand_tagline: "Routa de mga vivientes",
    nav_home: "Pangunang Panid",
    nav_map: "Pangunang Mapa",
    nav_about: "Mahitungod",
    nav_faqs: "FAQs",
    nav_contact: "Kontak",
    nav_blog: "Blog",
    current_language: "Pinulongan",
    change: "Usba",
    footer_note: "Prototype build • Pwede ilisan ang sulod",

    modal_title: "Pili og pinulongan",
    modal_body:
      "Multi-language ang website. Mahimo nimo usbon bisan kanus-a gamit ang Language button sa sidebar.",
    modal_close: "Isira",
home_tagline_1: "Barato.",
home_tagline_2: "Sayon.",
home_tagline_3: "Dali lang.",
home_sub:
  "Tanan anaa ra sa imong selpon, pagbiyahe nga naa’y salig sa kaugalingon, bisan asa ka paingon.",

hustle_title_1: "PAGLAUM",
hustle_title_2: "SA MGA",
hustle_title_3: "HASOL",
hustle_desc:
  "Agi sa mga makalibog nga mga liko-liko sa siyudad sa Zamboanga, dali ra kaayong mawala ang usa ka tawo sa usa ka pagpamilok. Buhat ani, gapili ang JeePS og mga ruta sa jeep sa tibuok siyudad aron makit-an ang pinakapaspas ug pinakaepektibo nga ruta sa pagbiyahe padulong sa imong padulngan.",

sofar_title_1: "LAYO PA,",
sofar_title_2: "PERO",
sofar_title_3: "DUOL NA",
sofar_desc:
  "Naulahi na ba ka ug wala kay oras mulakaw paingon sa imong naandan nga jeepney stop? Anaa mi para nimo! Ginasubay sa JeePS ang mga jeepney nga moagi sa karsada nga duol ra nimo.",

conv_title_1: "PAGKAGAAN,",
conv_title_2: "SA",
conv_title_3: "TUMOY",
conv_title_4: "SA IMONG MGA TUDLO",
conv_desc:
  "Ang JeePS ang unang website nga naa’y jeepney navigator nga feature sa Zamboanga City. Sa usa lang ka swipe, usa ka hold, ug usa ka pindot, kabalo na ka kung unsaon pag-abot sa imong padulngan sa plete nga ubos ra sa ₱10.00.",


    home_title: "Maayong pag-abot sa JeePS",
    home_welcome_top: "MAAYONG PAG-ABOT SA",
    home_sub:
      "Giya para sa mga estudyante sa jeepney routes ug paradahan locations sa Zamboanga City.",
    home_badge: "Sugdi diri",
    tutorial_title: "Dali nga tutorial",
    tutorial_1: "Pili og pinulongan sa pop-up.",
    tutorial_2: "Ablihi ang Pangunang Mapa aron makita ang routes ug paradahan.",
    tutorial_3: "Gamita ang Search aron dali pangitaon ang paradahan.",
    tutorial_4: "Tan-awa ang FAQs para sa mga pahimangno.",
    home_cta_map: "Ablihi ang Mapa",
    home_cta_about: "Basaha ang Mahitungod",

    about_title: "Mahitungod sa Website",
    about_sub:
      "Ang JeePS motabang sa pag-ila sa jeepney routes ug mga lokasyon sa paradahan.",
    about_body:
      "Ilisi kini sa inyong opisyal nga deskripsyon: tumong, target users (estudyante), ug unsay gipakita sa mapa.",

    faqs_title: "FAQs",
    faqs_sub: "Ibutang diri ang common questions, notes, ug updates.",
    faqs_q1: "Unsaon paggamit sa mapa?",
    faqs_a1: "Adto sa Pangunang Mapa, i-toggle ang routes, ug i-search ang paradahan.",
    faqs_q2: "Opisyal ba ang data?",
    faqs_a2: "Student project kini. I-validate ang routes gamit local guidance.",

    aboutus_title: "Mahitungod Namo",
    aboutus_sub: "Static page para sa inyong grupo ug roles.",
    aboutus_body:
      "Ilisi kini sa pangalan sa members, roles (research, dev, design), ug acknowledgements.",

    blog_title: "Blog",
    blog_sub: "Static blog sections para sa announcements ug posts.",
    blog_post1: "Sample Post: Project Overview",
    blog_post1_body:
      "Isulat ang objectives, scope, ug planned improvements.",
    blog_post2: "Sample Post: Data Collection",
    blog_post2_body:
      "I-describe ang pagkuha sa routes/paradahan data ug giunsa pag-interpret.",

    map_title: "Pangunang Mapa",
    map_sub: "Interactable map nga naay routes, paradahan, ug search.",
    map_search_placeholder: "Pangitaa ang paradahan (pananglitan: Downtown Terminal)",
    map_routes: "Mga Ruta",
    map_paradahan: "Paradahan",
    map_results: "Mga Resulta",
    map_no_results: "Walay nakita.",
      cb: I18N?.cb || undefined,
  tsg: I18N?.tsg || undefined,
  bs: I18N?.bs || undefined,
}
  }

// 3) Fill missing language labels (safe, after I18N exists)
for (const lang of LANGS) {
  for (const code of Object.keys(I18N)) {
    if (!I18N[code][lang.labelKey]) {
      I18N[code][lang.labelKey] = lang.hint;
    }
  }
}

// Explicit label strings
I18N.en.lang_en = "English";
I18N.en.lang_tl = "Tagalog";
I18N.en.lang_cb = "Chavacano";
I18N.en.lang_tsg = "Tausug";
I18N.en.lang_bs = "Bisaya";
I18N.tl.lang_en = "Ingles";
I18N.tl.lang_tl = "Tagalog";
I18N.tl.lang_cb = "Chavacano";
I18N.tl.lang_tsg = "Tausug";
I18N.tl.lang_bs = "Bisaya";

// -----------------------------
// Helpers
// -----------------------------
function getLang() {
  return localStorage.getItem("jeeps_lang") || "";
}

function t(code, key) {
  const dict = I18N[code] || I18N.en;
  return dict[key] ?? I18N.en[key] ?? key;
}

function markActiveNav() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    a.classList.toggle("active", href === path);
  });
}

function updateLangPill(code) {
  const lang = code || "en";
  const label = LANGS.find(l => l.code === lang)?.hint || "English";
  const el = document.getElementById("currentLangLabel");
  if (el) el.textContent = label;
}

function applyI18n(code) {
  const lang = code || "en";
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(lang, key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(lang, key));
  });

  markActiveNav();
}

function setLang(code) {
  localStorage.setItem("jeeps_lang", code);
  applyI18n(code);
  updateLangPill(code);
}

// -----------------------------
// Modal
// -----------------------------
function openLangModal(force = false) {
  const modal = document.getElementById("langModal");
  if (!modal) return;
  if (force) modal.dataset.force = "1";
  modal.classList.add("open");
}

function closeLangModal() {
  const modal = document.getElementById("langModal");
  if (!modal) return;
  if (modal.dataset.force === "1") return;
  modal.classList.remove("open");
}

function buildLangOptions() {
  const container = document.getElementById("langOptions");
  if (!container) return;

  container.innerHTML = "";
  const current = getLang() || "en";

  LANGS.forEach(l => {
    const btn = document.createElement("button");
    btn.className = "lang-option";
    btn.type = "button";
    btn.innerHTML = `
      <div>
        <strong>${l.hint}</strong>
        <div><span>${l.code.toUpperCase()}</span></div>
      </div>
      <div class="badge">${current === l.code ? "Selected" : "Select"}</div>
    `;
    btn.addEventListener("click", () => {
      setLang(l.code);
      const modal = document.getElementById("langModal");
      if (modal) {
        modal.dataset.force = "0";
        modal.classList.remove("open");
      }
    });
    container.appendChild(btn);
  });
}

// -----------------------------
// Boot
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const changeBtn = document.getElementById("changeLangBtn");
  if (changeBtn) changeBtn.addEventListener("click", () => openLangModal(false));

  const closeBtn = document.getElementById("closeLangModal");
  if (closeBtn) closeBtn.addEventListener("click", closeLangModal);

  buildLangOptions();

  const saved = getLang();
  if (!saved) {
    setLang("en");
    openLangModal(true);
  } else {
    applyI18n(saved);
    updateLangPill(saved);
  }
});

// Optional: expose for debugging in Console
window.I18N = I18N;
window.applyI18n = applyI18n;
window.setLang = setLang;
window.getLang = getLang;
window.updateLangPill = updateLangPill;
