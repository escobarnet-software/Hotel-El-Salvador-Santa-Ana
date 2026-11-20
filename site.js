// Hotel El Salvador: the ES/EN switch and the availability form that opens WhatsApp.
// The kit (assets/system.js) runs the nav, the phone bar and the form's error lines; this file only
// sets each field's reason (setCustomValidity) before the kit checks it, then builds the message.

const PHONE = '50370367823';
const html = document.documentElement;

const EN = {
  strip: 'Preview · sample photos and prices',
  skip: 'Skip to content',
  navLabel: 'Main',
  navRooms: 'Prices', navWhere: 'Location', navNear: 'Nearby', navHotel: 'The hotel',
  from: 'From',
  roomSingle: 'Single room', roomDouble: 'Double room', roomFamily: 'Family room',
  cta: 'Check availability',
  langShort: 'ES', langLabel: 'Ver esta página en español', langCode: 'es',
  menu: 'Menu',
  altHero: 'Garden patio with hanging plants and paintings, in front of an arched walkway',
  ratingText: 'on Google', badgeNote: 'stars on Google', rbCity: 'Santa Ana, El Salvador', rbRating: '4.9 on Google', rbPause: 'Pause the band', rbPlay: 'Play the band',
  heroLine: 'A quiet, family-friendly hotel in Santa Ana, with a garden and a mural.',
  whereH: 'How to get to the hotel',
  whereLine: 'Open the route in your favourite app, or message us and we will explain how to get here.',
  openMaps: 'Open in Google Maps', openWaze: 'Open in Waze', mapTitle: 'Map: Hotel El Salvador in Santa Ana',
  footWhere: 'Where we are',
  seePrices: 'See prices',
  praiseTitle: 'What guests praise most', praiseGarden: 'The garden', praiseMural: 'The mural', praiseCalm: 'Quiet and family-friendly',
  capSingle: '1 guest', capDouble: '2 guests', capFamily: 'Up to 4 guests',
  bedSingle: 'Single bed', bedDouble: 'Double bed', bedFamily: '3 beds',
  askRoom: 'Ask',
  step1: 'Pick your dates', step2: 'WhatsApp opens', step3: 'The hotel confirms', whereCity: 'City', whereOpen: 'Get the route in',
  rowBook: 'Bookings', rowRating: 'Google', rowRatingVal: '4.9 out of 5 stars',
  altPatio: 'Inner courtyard with a lawn, bougainvillea and a tiled-roof walkway',
  roomsH: 'Rooms and prices',
  roomsLine: 'Rates per night, in US dollars. Message us for the exact price of your dates.',
  roomsNote: 'Sample prices',
  altSingle: 'Room with two single beds and a tiled floor',
  altDouble: 'Room with white beds, woven bedspreads and terracotta walls',
  altFamily: 'Large room with three beds and a wide window',
  factsSingle: '1 guest · single bed', factsDouble: '2 guests · double bed', factsFamily: 'Up to 4 guests · 3 beds',
  perNight: 'a night',
  askSingle: 'Ask about the single', askDouble: 'Ask about the double', askFamily: 'Ask about the family room',
  availH: 'Room availability', navAvail: 'Availability',
  availLine: 'Pick your dates and WhatsApp opens with your request ready to send to the hotel.',
  altGarden: 'Pots of pink flowers and ferns in a courtyard',
  fIn: 'Check-in', fOut: 'Check-out', fGuests: 'Guests', fRoom: 'Room', fName: 'Your name',
  optPick: 'Choose one', optAny: 'Whichever is free',
  formNote: 'Nothing is sent from this page: you check the message in WhatsApp and send it yourself.',
  nearH: 'What is near the hotel',
  nearLine: 'Five places to visit from the hotel. Ask us on WhatsApp how to get to each one.',
  altCathedral: 'White neo-Gothic front of Santa Ana Cathedral',
  altTheatre: 'Pale green Santa Ana Theatre with columns and arches',
  altPark: 'Bandstand in Parque Libertad among trees',
  altVolcano: 'Green lagoon inside the crater of the Santa Ana Volcano',
  altLake: 'Blue Lake Coatepeque surrounded by green hills',
  nearCathedral: 'A white neo-Gothic cathedral facing Parque Libertad.',
  nearTheatre: 'An early 20th-century theatre on the same park.',
  nearPark: 'The city’s main square, with its bandstand.',
  nameVolcano: 'Santa Ana Volcano',
  nearVolcano: 'The country’s highest volcano, with a green lagoon in its crater.',
  nameLake: 'Lake Coatepeque',
  nearLake: 'A blue lake inside a volcanic caldera.',
  hotelH: 'The hotel’s garden and mural',
  hotelBody: 'They are what guests mention most in their Google reviews, along with something you notice on arrival: it is a quiet, family-friendly place.',
  hotelBody2: 'After a day in the town centre or on the volcano, you come back to a courtyard full of plants and a painted wall.',
  hotelLink: 'Read the reviews on Google',
  altMural: 'Colourful mural of cats and sunflowers painted on a wall',
  altFountain: 'Garden with a lawn, ferns, a path and a fountain at the back',
  altCorridor: 'Walkway with a rocking chair facing a courtyard of palms and plants',
  altLogo: 'Hotel El Salvador logo, Santa Ana',
  closeH: 'Bookings on WhatsApp',
  closeLine: 'Message us at +503 7036-7823 with your dates.',
  barCta: 'Book on WhatsApp', barLabel: 'Quick action',
  footNav: 'On this page',
  madeBy: 'Preview prepared by Escobar Net',
  credits: 'Photographs via Wikimedia Commons',
};

const MSG = {
  es: {
    fix: n => `Campos por revisar: ${n}.`,
    inMissing: 'Elige el día de llegada.',
    inPast: 'La llegada no puede ser un día que ya pasó.',
    inBad: 'Escribe una fecha válida, por ejemplo 24/11/2026.',
    outMissing: 'Elige el día de salida.',
    outBefore: 'La salida tiene que ser al menos un día después de la llegada.',
    outLong: 'Para más de 30 noches, escríbenos directo por WhatsApp.',
    guests: 'Escribe cuántas personas, de 1 a 12.',
    room: 'Elige un tipo de habitación.',
    name: 'Escribe tu nombre para la reserva.',
    nights: n => (n === 1 ? '1 noche' : `${n} noches`),
    greet: 'Hola, Hotel El Salvador. Quiero consultar disponibilidad:',
    lIn: 'Llegada', lOut: 'Salida', lGuests: 'Personas', lRoom: 'Habitación', lName: 'Nombre',
    thanks: '¿Tienen disponible? Gracias.',
    bar: 'Hola, Hotel El Salvador. Quiero reservar una habitación.',
    opened: 'Se abrió WhatsApp con tu mensaje. Si no se abrió, escribe al +503 7036-7823.',
    rooms: { sencilla: 'Sencilla', doble: 'Doble', familiar: 'Familiar', cualquiera: 'La que esté libre' },
    locale: 'es-SV',
  },
  en: {
    fix: n => `Fields to check: ${n}.`,
    inMissing: 'Choose your check-in day.',
    inPast: 'Check-in can’t be a day that has already passed.',
    inBad: 'Write a valid date, for example 11/24/2026.',
    outMissing: 'Choose your check-out day.',
    outBefore: 'Check-out must be at least one day after check-in.',
    outLong: 'For more than 30 nights, message us directly on WhatsApp.',
    guests: 'Write how many guests, from 1 to 12.',
    room: 'Choose a room type.',
    name: 'Write your name for the booking.',
    nights: n => (n === 1 ? '1 night' : `${n} nights`),
    greet: 'Hello, Hotel El Salvador. I would like to check availability:',
    lIn: 'Check-in', lOut: 'Check-out', lGuests: 'Guests', lRoom: 'Room', lName: 'Name',
    thanks: 'Do you have a room free? Thank you.',
    bar: 'Hello, Hotel El Salvador. I would like to book a room.',
    opened: 'WhatsApp opened with your message. If it did not, message +503 7036-7823.',
    rooms: { sencilla: 'Single', doble: 'Double', familiar: 'Family', cualquiera: 'Whichever is free' },
    locale: 'en-US',
  },
};

/* ---------------------------------------------------------------- language */
const ES = {};
const textNodes = [...document.querySelectorAll('[data-i18n]')];
const attrNodes = [...document.querySelectorAll('[data-i18n-attr]')];
textNodes.forEach(el => { ES[el.dataset.i18n] = el.textContent; });
attrNodes.forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
  const [attr, key] = pair.split(':');
  if (!(key in ES)) ES[key] = el.getAttribute(attr) || '';
}));
// the toggle's Spanish-page values (it names the other language)
Object.assign(ES, { langShort: 'EN', langLabel: 'Read this page in English', langCode: 'en' });
const langHref = { es: '?lang=en', en: '?lang=es' };

let lang = 'es';
function store(v) { try { localStorage.setItem('hes-lang', v); } catch (e) { /* private mode: fine */ } }
function stored() { try { return localStorage.getItem('hes-lang'); } catch (e) { return null; } }

function setLang(next, save = true) {
  lang = next === 'en' ? 'en' : 'es';
  const dict = lang === 'en' ? { ...ES, ...EN } : ES;
  html.lang = lang;
  textNodes.forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
  attrNodes.forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
    const [attr, key] = pair.split(':');
    if (dict[key] != null) el.setAttribute(attr, dict[key]);
  }));
  document.title = lang === 'en'
    ? 'Hotel El Salvador: family-friendly hotel with a garden in Santa Ana'
    : 'Hotel El Salvador: hotel familiar con jardín en Santa Ana';
  const form = document.getElementById('consulta');
  if (form) form.dataset.fix = MSG[lang].fix('{n}');
  document.querySelectorAll('a[data-wa]').forEach(a => {
    a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG[lang].bar)}`;
  });
  // fields already marked wrong get their reason again in the new language
  if (form) form.querySelectorAll('[aria-invalid="true"]').forEach(el => { validate(); reportOne(el); });
  document.querySelectorAll('.lang-toggle').forEach(a => a.setAttribute('href', langHref[lang]));
  updateNights();
  if (save) store(lang);
}

const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.lang-toggle').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  setLang(lang === 'es' ? 'en' : 'es');
  // the words change in place; a short fade tells the eye the whole page changed language, not one button
  if (!calm() && document.body.animate) {
    document.querySelectorAll('main, .nav__bar, footer').forEach(el => el.animate([{ opacity: 0.55 }, { opacity: 1 }], { duration: 220, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }));
  }
  try { history.replaceState(null, '', location.pathname + location.hash); } catch (err) { /* file: pages */ }
}));

/* ---------------------------------------------------------------- the form */
const form = document.getElementById('consulta');
const $in = document.getElementById('f-in');
const $out = document.getElementById('f-out');
const $guests = document.getElementById('f-guests');
const $room = document.getElementById('f-room');
const $name = document.getElementById('f-name');
const $nights = document.querySelector('[data-nights]');
const $status = form && form.querySelector('[data-form-status]');

const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
// a yyyy-mm-dd value as a local date at noon (no time-zone slip); null when it is not a real day
function parse(v) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v || '');
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3], 12);
  return d.getMonth() === +m[2] - 1 && d.getDate() === +m[3] && +m[1] >= 2000 && +m[1] <= 2100 ? d : null;
}
const nightsBetween = (a, b) => Math.round((b - a) / 86400000);

function validate() {
  if (!form) return;
  const t = MSG[lang];
  const a = parse($in.value);
  const b = parse($out.value);
  // the browser marks a half-typed date as badInput with an empty value
  if ($in.validity.badInput) $in.setCustomValidity(t.inBad);
  else if (!$in.value) $in.setCustomValidity(t.inMissing);
  else if (!a) $in.setCustomValidity(t.inBad);
  else if (a < today()) $in.setCustomValidity(t.inPast);
  else $in.setCustomValidity('');

  if ($out.validity.badInput) $out.setCustomValidity(t.inBad);
  else if (!$out.value) $out.setCustomValidity(t.outMissing);
  else if (!b) $out.setCustomValidity(t.inBad);
  else if (a && nightsBetween(a, b) < 1) $out.setCustomValidity(t.outBefore);
  else if (a && nightsBetween(a, b) > 30) $out.setCustomValidity(t.outLong);
  else $out.setCustomValidity('');

  const g = Number($guests.value);
  $guests.setCustomValidity(Number.isInteger(g) && g >= 1 && g <= 12 ? '' : t.guests);
  $room.setCustomValidity($room.value ? '' : t.room);
  $name.setCustomValidity($name.value.trim().length >= 2 ? '' : t.name);
}

// after a language switch, rewrite the reason under a field already marked wrong
function reportOne(el) {
  const err = document.getElementById(el.getAttribute('aria-describedby'));
  if (err && !el.validity.valid) err.textContent = el.validationMessage;
}

function updateNights() {
  if (!$nights) return;
  const a = parse($in.value), b = parse($out.value);
  const n = a && b ? nightsBetween(a, b) : 0;
  $nights.textContent = n >= 1 && n <= 30 ? MSG[lang].nights(n) : '';
}

if (form) {
  const t0 = today();
  $in.min = iso(t0);
  const t1 = new Date(t0); t1.setDate(t1.getDate() + 1);
  $out.min = iso(t1);

  // runs in the capture phase, so every field carries its reason before the kit checks it
  document.addEventListener('submit', e => { if (e.target === form) validate(); }, true);
  ['input', 'change'].forEach(type => document.addEventListener(type, e => {
    if (!form.contains(e.target)) return;
    if (e.target === $in) {
      const a = parse($in.value);
      if (a) {
        const next = new Date(a); next.setDate(next.getDate() + 1);
        $out.min = iso(next);
        const b = parse($out.value);
        if (b && b <= a) $out.value = '';   // a check-out before the new check-in is cleared, never kept
      }
    }
    validate();
    updateNights();
  }, true));

  // the kit cancels a submit with a field to fix; one that passes opens WhatsApp with the message
  form.addEventListener('submit', e => {
    if (e.defaultPrevented) return;
    e.preventDefault();
    const t = MSG[lang];
    const fmt = new Intl.DateTimeFormat(t.locale, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    const a = parse($in.value), b = parse($out.value);
    const lines = [
      t.greet,
      `• ${t.lIn}: ${fmt.format(a)}`,
      `• ${t.lOut}: ${fmt.format(b)} (${t.nights(nightsBetween(a, b))})`,
      `• ${t.lGuests}: ${Number($guests.value)}`,
      `• ${t.lRoom}: ${t.rooms[$room.value] || $room.value}`,
      `• ${t.lName}: ${$name.value.trim().replace(/\s+/g, ' ')}`,
      '',
      t.thanks,
    ];
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
    const win = window.open(url, '_blank', 'noopener');
    if (!win) window.location.href = url;   // a blocked pop-up (some phones): go there in this tab
    if ($status) $status.textContent = t.opened;
  });
}

// a room's "ask" link chooses that room in the form
document.querySelectorAll('a[data-room]').forEach(a => a.addEventListener('click', () => {
  if (!$room) return;
  $room.value = a.dataset.room;
  $room.dispatchEvent(new Event('change', { bubbles: true }));
  $room.classList.add('is-picked');
  setTimeout(() => $room.classList.remove('is-picked'), 700);
}));

/* ---------------------------------------------------------------- start */
const fromUrl = new URLSearchParams(location.search).get('lang');
// Spanish first (the hotel's own language); English only when the visitor chose it or the link says ?lang=en
const start = fromUrl || stored() || 'es';
setLang(start === 'en' ? 'en' : 'es', Boolean(fromUrl));

/* ---------------------------------------------------------------- reveal on scroll (the client asked for more motion)
   Only with IntersectionObserver and no reduced-motion preference; everything is visible otherwise. Each block
   enters once, and blocks entering together are staggered a little, never a queue. */
(function reveal() {
  const items = [...document.querySelectorAll('.reveal')];
  if (!items.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  html.classList.add('rv-on');
  const io = new IntersectionObserver(entries => {
    const coming = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
    coming.forEach((e, i) => {
      e.target.style.setProperty('--rv-delay', `${Math.min(i, 4) * 70}ms`);
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  items.forEach(el => io.observe(el));
  // printing shows everything
  window.addEventListener('beforeprint', () => items.forEach(el => el.classList.add('is-in')));
})();

/* ---------------------------------------------------------------- v5: motion drawn from the logo's gold and arch */
Object.assign(ES, { rbPlay: 'Reanudar la franja' });
const calmMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// the gold arch behind the hero photograph: a true semicircle on top, redrawn to the frame's size, traced once on load
(function archOutline() {
  const svg = document.querySelector('.hero-v3__outline');
  if (!svg) return;
  const path = svg.querySelector('path');
  const draw = () => {
    const w = svg.clientWidth, h = svg.clientHeight;
    if (!w || !h) return;
    const s = 1, r = Math.min(w / 2, h) - s, c = Math.min(28, h / 6);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    path.setAttribute('d', `M${s},${h - s - c} L${s},${r + s} A${r},${r} 0 0 1 ${w - s},${r + s} L${w - s},${h - s - c} Q${w - s},${h - s} ${w - s - c},${h - s} L${s + c},${h - s} Q${s},${h - s} ${s},${h - s - c} Z`);
  };
  draw();
  new ResizeObserver(draw).observe(svg);
  if (!calmMotion()) svg.classList.add('is-drawing');
})();

// the rating counts up once, as the card arrives
(function counters() {
  const els = [...document.querySelectorAll('[data-count]')];
  if (!els.length || calmMotion()) return;
  els.forEach(el => {
    const to = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0), t0 = performance.now() + 700, dur = 1400;
    el.textContent = (0).toFixed(dec);
    const step = now => {
      const k = Math.min(1, Math.max(0, (now - t0) / dur)), e = 1 - Math.pow(1 - k, 3);
      el.textContent = (to * e).toFixed(dec);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
})();

// the band of praise: pauses on hover (CSS), with its own pause button (it moves longer than 5 s)
(function ribbon() {
  const band = document.querySelector('.ribbon');
  if (!band) return;
  const btn = band.querySelector('.ribbon__pause');
  if (calmMotion()) { btn.hidden = true; return; }
  btn.addEventListener('click', () => {
    const paused = band.classList.toggle('is-paused');
    btn.setAttribute('aria-pressed', String(paused));
    const dict = lang === 'en' ? EN : ES;
    btn.setAttribute('aria-label', paused ? (dict.rbPlay || ES.rbPlay) : (dict.rbPause || ES.rbPause));
    btn.innerHTML = paused
      ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9l7-4.5z"/></svg>'
      : '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="3" width="3" height="10" rx="1"/><rect x="9" y="3" width="3" height="10" rx="1"/></svg>';
  });
})();

// a thin gold line in the header shows how far down the page you are
(function progress() {
  const bar = document.querySelector('.progress');
  if (!bar) return;
  let ticking = false;
  const set = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(set); } }, { passive: true });
  addEventListener('resize', set, { passive: true });
  set();
})();
