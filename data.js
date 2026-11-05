/* Ilé Estates: demo listings (fictional agency, portfolio project).
   Photos: Unsplash (free to use). Prices in Naira; rent is per year. */

/* Contact details used across the site. WhatsApp is international format, digits only. */
window.ILE_WHATSAPP = "2347053762938";
window.ILE_WHATSAPP_LABEL = "0705 376 2938";
window.ILE_PHONE = "+2349131472786";
window.ILE_PHONE_LABEL = "0913 147 2786";
window.ILE_EMAIL = "oyeniyioluwadamilola3@gmail.com";

window.ILE_AREAS = [
  { id: "banana-island", name: "Banana Island", img: "1613977257363-707ba9348227", blurb: "Private, gated and waterfront." },
  { id: "ikoyi", name: "Ikoyi", img: "1613490493576-7fde63acd811", blurb: "Leafy streets, old money, new builds." },
  { id: "lekki-phase-1", name: "Lekki Phase 1", img: "1600596542815-ffad4c1539a9", blurb: "Family homes close to everything." },
  { id: "victoria-island", name: "Victoria Island", img: "1545324418-cc1a3fa10c00", blurb: "City living by the Atlantic." },
  { id: "eko-atlantic", name: "Eko Atlantic", img: "1600607687939-ce8a6c25118c", blurb: "Lagos's newest skyline." },
  { id: "ikeja-gra", name: "Ikeja GRA", img: "1599809275671-b5942cabc7a2", blurb: "Quiet, mainland and spacious." },
  { id: "oniru", name: "Oniru", img: "1602343168117-bb8ffe3e2e9f", blurb: "Beachside calm next to VI." },
  { id: "ikate", name: "Ikate", img: "1600563438938-a9a27216b4f5", blurb: "Modern builds off the Lekki strip." },
  { id: "osapa-london", name: "Osapa London", img: "1613553507747-5f8d62ad5904", blurb: "Quiet closes, quick to the coast." },
  { id: "chevron", name: "Chevron, Lekki", img: "1600566753376-12c8ab7fb75b", blurb: "Gated estates and new homes." },
  { id: "ajah", name: "Ajah", img: "1567496898669-ee935f5f647a", blurb: "Space and value further east." },
  { id: "magodo-gra", name: "Magodo GRA", img: "1564013799919-ab600027ffc6", blurb: "Leafy, secure mainland living." }
];

window.ILE_LISTINGS = [
  {
    id: "waterfront-villa-banana-island", ref: "ILE-1041", featured: true, added: "2026-10-28",
    title: "Waterfront villa with private jetty", area: "banana-island", deal: "sale", price: 2800000000,
    type: "Detached house", beds: 6, baths: 7, size: 1250, year: 2023, lat: 6.4596, lng: 3.4441,
    imgs: ["1613977257363-707ba9348227", "1600607687939-ce8a6c25118c", "1616594039964-ae9021a400a0", "1617806118233-18e1de247200", "1600566752355-35792bedcfea"],
    tags: ["Waterfront", "Pool", "Smart home"],
    amenities: ["Private jetty", "Infinity pool", "Home cinema", "Elevator", "Staff quarters", "Smart lighting", "24/7 security", "Backup power and solar"],
    desc: "A light-filled six-bedroom villa on the lagoon edge of Banana Island. Floor-to-ceiling glass opens the living spaces onto the pool deck and a private jetty, while the upper floor holds four en-suite bedrooms and a principal suite with its own terrace."
  },
  {
    id: "contemporary-mansion-ikoyi", ref: "ILE-1038", featured: true, added: "2026-10-21",
    title: "Contemporary five-bedroom mansion", area: "ikoyi", deal: "sale", price: 1650000000,
    type: "Detached house", beds: 5, baths: 6, size: 980, year: 2022, lat: 6.4521, lng: 3.4352,
    imgs: ["1613490493576-7fde63acd811", "1600210492486-724fe5c67fb0", "1618221195710-dd6b41faaea6", "1631049307264-da0ec9d70304", "1584622650111-993a426fbf0a"],
    tags: ["Pool", "New build"],
    amenities: ["Lap pool", "Roof terrace", "Gym", "Boys' quarters", "Fitted kitchen", "Walk-in wardrobes", "Backup power", "Parking for 4"],
    desc: "Clean lines, warm timber and a long lap pool define this Ikoyi mansion. The ground floor flows from a double-height lounge to a chef's kitchen, and every bedroom is en suite. Minutes from Awolowo Road and the Ikoyi Club."
  },
  {
    id: "pool-duplex-lekki-phase-1", ref: "ILE-1035", featured: true, added: "2026-10-18",
    title: "Four-bedroom duplex with pool", area: "lekki-phase-1", deal: "sale", price: 650000000,
    type: "Duplex", beds: 4, baths: 5, size: 520, year: 2021, lat: 6.4474, lng: 3.4729,
    imgs: ["1600596542815-ffad4c1539a9", "1600566753086-00f18fb6b3ea", "1600607687644-c7171b42498f", "1556912173-3bb406ef7e77"],
    tags: ["Pool", "Family home"],
    amenities: ["Swimming pool", "Family lounge", "Study", "Fitted kitchen", "Boys' quarters", "Serviced estate", "Backup power"],
    desc: "A bright family duplex in a serviced Lekki Phase 1 estate. Open-plan living spills out to the pool, with a separate family lounge and study upstairs. Schools, shops and the Admiralty Way strip are close by."
  },
  {
    id: "sky-penthouse-eko-atlantic", ref: "ILE-1033", featured: false, added: "2026-10-15",
    title: "Sky penthouse with ocean views", area: "eko-atlantic", deal: "rent", price: 85000000,
    type: "Penthouse", beds: 3, baths: 4, size: 340, year: 2024, lat: 6.4108, lng: 3.4063,
    imgs: ["1600607687939-ce8a6c25118c", "1613545325278-f24b0cae1224", "1631049307264-da0ec9d70304", "1484154218962-a197022b5858"],
    tags: ["Ocean view", "Serviced"],
    amenities: ["Wraparound terrace", "Concierge", "Residents' pool", "Gym", "Fully furnished", "Smart access", "Uninterrupted power"],
    desc: "A furnished three-bedroom penthouse high above Eko Atlantic, with a wraparound terrace facing the ocean. The building offers a concierge, residents' pool and gym, and uninterrupted power and water."
  },
  {
    id: "serviced-apartment-victoria-island", ref: "ILE-1031", featured: false, added: "2026-10-12",
    title: "Serviced two-bedroom apartment", area: "victoria-island", deal: "rent", price: 28000000,
    type: "Apartment", beds: 2, baths: 2, size: 140, year: 2020, lat: 6.4295, lng: 3.4215,
    imgs: ["1545324418-cc1a3fa10c00", "1560448204-e02f11c3d0e2", "1540518614846-7eded433c457", "1493809842364-78817add7ffb"],
    tags: ["Serviced", "Furnished"],
    amenities: ["Housekeeping", "Gym", "Rooftop lounge", "Furnished", "24/7 security", "Backup power", "Parking"],
    desc: "A calm, fully serviced apartment in the heart of Victoria Island, a short walk from Adeola Odeku. Weekly housekeeping, a rooftop lounge and secure parking make it an easy city base."
  },
  {
    id: "townhouse-ikoyi-parkview", ref: "ILE-1029", featured: false, added: "2026-10-09",
    title: "Four-bedroom townhouse, Parkview", area: "ikoyi", deal: "rent", price: 45000000,
    type: "Terrace", beds: 4, baths: 5, size: 410, year: 2021, lat: 6.4483, lng: 3.4462,
    imgs: ["1600047509807-ba8f99d2cdde", "1522708323590-d24dbb6b0267", "1616594039964-ae9021a400a0", "1584622650111-993a426fbf0a"],
    tags: ["Gated", "Family home"],
    amenities: ["Gated mews", "Private garden", "Boys' quarters", "Fitted kitchen", "Backup power", "Parking for 2"],
    desc: "A modern townhouse in a quiet gated mews in Parkview Estate. Four en-suite bedrooms, a private garden and a separate boys' quarters, with the green streets of Ikoyi on your doorstep."
  },
  {
    id: "smart-home-lekki", ref: "ILE-1026", featured: true, added: "2026-10-04",
    title: "Five-bedroom smart home", area: "lekki-phase-1", deal: "sale", price: 980000000,
    type: "Detached house", beds: 5, baths: 6, size: 760, year: 2024, lat: 6.4431, lng: 3.4802,
    imgs: ["1600585154340-be6161a56a0c", "1618221195710-dd6b41faaea6", "1600607687939-ce8a6c25118c", "1600566752355-35792bedcfea"],
    tags: ["Smart home", "New build"],
    amenities: ["Smart home system", "Solar and inverter", "Cinema room", "Garden", "Staff quarters", "EV charging", "CCTV"],
    desc: "A new five-bedroom detached home built around a mature tree, with automated lighting, climate and security. Solar and inverter power keep it running quietly through outages."
  },
  {
    id: "detached-home-ikeja-gra", ref: "ILE-1022", featured: false, added: "2026-09-28",
    title: "Detached home with garden and pool", area: "ikeja-gra", deal: "sale", price: 520000000,
    type: "Detached house", beds: 5, baths: 5, size: 690, year: 2018, lat: 6.5797, lng: 3.3548,
    imgs: ["1599809275671-b5942cabc7a2", "1560448204-e02f11c3d0e2", "1540518614846-7eded433c457", "1484154218962-a197022b5858"],
    tags: ["Pool", "Garden"],
    amenities: ["Swimming pool", "Large garden", "Boys' quarters", "Study", "Backup power", "Parking for 5"],
    desc: "A generous five-bedroom home on a wide, quiet street in Ikeja GRA, with a pool terrace and a large garden. Ten minutes from the airport and close to the best mainland schools."
  },
  {
    id: "maisonette-banana-island", ref: "ILE-1019", featured: false, added: "2026-09-22",
    title: "Four-bedroom maisonette", area: "banana-island", deal: "rent", price: 120000000,
    type: "Maisonette", beds: 4, baths: 5, size: 450, year: 2022, lat: 6.4571, lng: 3.4405,
    imgs: ["1512917774080-9991f1c4c750", "1600566753086-00f18fb6b3ea", "1617806118233-18e1de247200", "1584622650111-993a426fbf0a"],
    tags: ["Pool", "Furnished"],
    amenities: ["Private pool", "Furnished", "Gym", "Concierge", "24/7 security", "Uninterrupted power"],
    desc: "A furnished maisonette inside one of Banana Island's best-run estates, with its own plunge pool, concierge service and round-the-clock power and security."
  },
  {
    id: "garden-apartment-lekki", ref: "ILE-1016", featured: false, added: "2026-09-15",
    title: "Three-bedroom garden apartment", area: "lekki-phase-1", deal: "sale", price: 210000000,
    type: "Apartment", beds: 3, baths: 3, size: 190, year: 2019, lat: 6.4389, lng: 3.4931,
    imgs: ["1574362848149-11496d93a7c7", "1493809842364-78817add7ffb", "1522708323590-d24dbb6b0267", "1556912173-3bb406ef7e77"],
    tags: ["Garden", "Family home"],
    amenities: ["Shared garden", "Children's play area", "Fitted kitchen", "Backup power", "Parking"],
    desc: "A well-kept three-bedroom apartment with a shared garden and play area, in a small, friendly block off Admiralty Road."
  },
  {
    id: "villa-ikoyi-old", ref: "ILE-1012", featured: false, added: "2026-09-08",
    title: "Modern villa on a quiet close", area: "ikoyi", deal: "sale", price: 1350000000,
    type: "Detached house", beds: 5, baths: 6, size: 870, year: 2020, lat: 6.4559, lng: 3.4298,
    imgs: ["1600047509358-9dc75507daeb", "1600210492486-724fe5c67fb0", "1631049307264-da0ec9d70304", "1600566752355-35792bedcfea"],
    tags: ["Gated", "Garden"],
    amenities: ["Landscaped garden", "Home office", "Gym", "Boys' quarters", "Backup power", "CCTV"],
    desc: "Set back on a quiet close in Old Ikoyi, this modern villa pairs a landscaped garden with bright, generous rooms and a self-contained home office."
  },
  {
    id: "penthouse-victoria-island", ref: "ILE-1008", featured: false, added: "2026-09-01",
    title: "Four-bedroom villa with pool deck", area: "victoria-island", deal: "sale", price: 1200000000,
    type: "Detached house", beds: 4, baths: 5, size: 480, year: 2023, lat: 6.4268, lng: 3.4289,
    imgs: ["1580587771525-78b9dba3b914", "1613545325278-f24b0cae1224", "1618221195710-dd6b41faaea6", "1616594039964-ae9021a400a0"],
    tags: ["Pool", "Ocean view"],
    amenities: ["Private pool deck", "Ocean views", "Roof terrace", "Gated close", "Smart home", "Uninterrupted power"],
    desc: "A rare detached villa on a gated close in Victoria Island, with a private pool deck, a roof terrace that catches the ocean breeze, and smart lighting throughout."
  },
  {
    id: "beach-villa-oniru", ref: "ILE-1047", featured: true, added: "2026-11-03",
    title: "Beach-facing five-bedroom villa", area: "oniru", deal: "sale", price: 1100000000,
    type: "Detached house", beds: 5, baths: 6, size: 820, year: 2024, lat: 6.4326, lng: 3.4496,
    imgs: ["1602343168117-bb8ffe3e2e9f", "1600210491892-03d54c0aaf87", "1505693416388-ac5ce068fe85", "1600566752229-250ed79470f8"],
    tags: ["Pool", "New build"],
    amenities: ["Swimming pool", "Sea breeze terrace", "Chef's kitchen", "Staff quarters", "Smart lighting", "Backup power and solar"],
    desc: "A crisp new villa a short walk from Oniru beach, with a wide pool terrace, arched windows that fill the lounge with light, and five en-suite bedrooms."
  },
  {
    id: "pool-terrace-osapa", ref: "ILE-1046", featured: false, added: "2026-11-02",
    title: "Four-bedroom terrace with plunge pool", area: "osapa-london", deal: "sale", price: 380000000,
    type: "Terrace", beds: 4, baths: 5, size: 360, year: 2023, lat: 6.4366, lng: 3.5207,
    imgs: ["1613553507747-5f8d62ad5904", "1600121848594-d8644e57abab", "1615874959474-d609969a20ed", "1600585152220-90363fe7e115"],
    tags: ["Pool", "Gated"],
    amenities: ["Plunge pool", "Roof terrace", "Fitted kitchen", "Boys' quarters", "Gated close", "Backup power"],
    desc: "A sleek terrace in a quiet Osapa London close, with a private plunge pool, a roof terrace and an open kitchen made for hosting."
  },
  {
    id: "modern-detached-chevron", ref: "ILE-1045", featured: true, added: "2026-11-01",
    title: "Five-bedroom detached house", area: "chevron", deal: "sale", price: 720000000,
    type: "Detached house", beds: 5, baths: 6, size: 640, year: 2023, lat: 6.4398, lng: 3.5373,
    imgs: ["1600566753376-12c8ab7fb75b", "1600585154084-4e5fe7c39198", "1617104678098-de229db51175", "1600607686527-6fb886090705"],
    tags: ["New build", "Gated"],
    amenities: ["Gated estate", "Cinema room", "Fitted kitchen", "Walk-in wardrobes", "Staff quarters", "Solar and inverter"],
    desc: "Timber, glass and warm lighting give this Chevron home real evening presence. Inside are a cinema room, a sleek kitchen and five en-suite bedrooms."
  },
  {
    id: "garden-pool-magodo", ref: "ILE-1044", featured: false, added: "2026-10-31",
    title: "Five-bedroom home with pool and garden", area: "magodo-gra", deal: "sale", price: 450000000,
    type: "Detached house", beds: 5, baths: 5, size: 610, year: 2019, lat: 6.6206, lng: 3.3846,
    imgs: ["1564013799919-ab600027ffc6", "1600210492493-0946911123ea", "1595526114035-0d45ed16cfbf", "1502005097973-6a7082348e28"],
    tags: ["Pool", "Garden"],
    amenities: ["Swimming pool", "Large garden", "Balcony", "Boys' quarters", "Backup power", "Parking for 4"],
    desc: "A sunny family home in secure Magodo GRA Phase 2, with a pool, mature palms, wraparound balconies and plenty of room to grow."
  },
  {
    id: "townhouse-ajah", ref: "ILE-1043", featured: false, added: "2026-10-30",
    title: "Three-bedroom townhouse", area: "ajah", deal: "rent", price: 9500000,
    type: "Terrace", beds: 3, baths: 3, size: 210, year: 2021, lat: 6.4672, lng: 3.5714,
    imgs: ["1567496898669-ee935f5f647a", "1631679706909-1844bbd07221", "1616137466211-f939a420be84", "1502005097973-6a7082348e28"],
    tags: ["Family home", "Gated"],
    amenities: ["Gated estate", "Fitted kitchen", "Children's play area", "Backup power", "Parking"],
    desc: "A bright, easy-care townhouse in a well-run Ajah estate, close to schools and the Lekki-Epe expressway."
  },
  {
    id: "semi-detached-ikate", ref: "ILE-1042", featured: false, added: "2026-10-29",
    title: "Four-bedroom semi-detached duplex", area: "ikate", deal: "rent", price: 18000000,
    type: "Duplex", beds: 4, baths: 5, size: 300, year: 2022, lat: 6.4429, lng: 3.4925,
    imgs: ["1600563438938-a9a27216b4f5", "1622866306950-81d17097d458", "1595526114035-0d45ed16cfbf", "1600585152220-90363fe7e115"],
    tags: ["New build"],
    amenities: ["Family lounge", "Fitted kitchen", "Boys' quarters", "Backup power", "Parking for 2"],
    desc: "A modern semi-detached duplex in Ikate with clean lines, a family lounge upstairs and a short drive to the Lekki strip."
  },
  {
    id: "oceanfront-eko-atlantic", ref: "ILE-1040", featured: true, added: "2026-10-27",
    title: "Oceanfront five-bedroom residence", area: "eko-atlantic", deal: "sale", price: 3200000000,
    type: "Detached house", beds: 5, baths: 6, size: 1100, year: 2025, lat: 6.4060, lng: 3.4110,
    imgs: ["1615571022219-eb45cf7faa9d", "1600573472550-8090b5e0745e", "1600047508788-786f3865b4b9", "1617104678098-de229db51175"],
    tags: ["Ocean view", "Waterfront", "Smart home"],
    amenities: ["Direct ocean views", "Glass staircase", "Infinity terrace", "Elevator", "Smart home", "Uninterrupted power"],
    desc: "One of very few private homes on the Eko Atlantic waterfront. Glass from floor to ceiling frames the ocean from almost every room."
  },
  {
    id: "modern-home-lekki-rent", ref: "ILE-1039", featured: false, added: "2026-10-25",
    title: "Four-bedroom home with pool", area: "lekki-phase-1", deal: "rent", price: 35000000,
    type: "Detached house", beds: 4, baths: 5, size: 420, year: 2022, lat: 6.4496, lng: 3.4701,
    imgs: ["1582268611958-ebfd161ef9cf", "1600210492493-0946911123ea", "1615874959474-d609969a20ed", "1600566752229-250ed79470f8"],
    tags: ["Pool", "Furnished"],
    amenities: ["Swimming pool", "Furnished", "Outdoor lounge", "Staff quarters", "Backup power"],
    desc: "A furnished, single-level home wrapped around a sparkling pool, tucked into a quiet Lekki Phase 1 street."
  },
  {
    id: "night-mansion-ikoyi", ref: "ILE-1037", featured: false, added: "2026-10-20",
    title: "Six-bedroom mansion on Bourdillon", area: "ikoyi", deal: "sale", price: 2100000000,
    type: "Detached house", beds: 6, baths: 7, size: 1150, year: 2024, lat: 6.4541, lng: 3.4321,
    imgs: ["1600585153490-76fb20a32601", "1600121848594-d8644e57abab", "1505693416388-ac5ce068fe85", "1600566752229-250ed79470f8"],
    tags: ["New build", "Smart home"],
    amenities: ["Home cinema", "Wine room", "Elevator", "Gym", "Staff quarters", "Smart home", "Solar and inverter"],
    desc: "A dramatic new mansion off Bourdillon Road, finished in dark brick and timber, with a wine room, cinema and lift to every floor."
  },
  {
    id: "mediterranean-villa-banana-island", ref: "ILE-1036", featured: true, added: "2026-10-19",
    title: "Mediterranean villa with resort pool", area: "banana-island", deal: "sale", price: 3500000000,
    type: "Detached house", beds: 7, baths: 8, size: 1600, year: 2021, lat: 6.4611, lng: 3.4461,
    imgs: ["1416331108676-a22ccb276e35", "1600210491892-03d54c0aaf87", "1617104678098-de229db51175", "1584622650111-993a426fbf0a"],
    tags: ["Pool", "Waterfront"],
    amenities: ["Resort pool", "Guest wing", "Courtyard garden", "Elevator", "Staff quarters", "24/7 security", "Uninterrupted power"],
    desc: "A seven-bedroom villa built around a lit courtyard and resort-style pool, with a separate guest wing, on one of Banana Island's largest plots."
  },
  {
    id: "apartment-victoria-island", ref: "ILE-1034", featured: false, added: "2026-10-16",
    title: "Three-bedroom apartment with balcony", area: "victoria-island", deal: "rent", price: 22000000,
    type: "Apartment", beds: 3, baths: 3, size: 170, year: 2020, lat: 6.4311, lng: 3.4181,
    imgs: ["1460317442991-0ec209397118", "1622866306950-81d17097d458", "1615874959474-d609969a20ed", "1502005097973-6a7082348e28"],
    tags: ["Serviced"],
    amenities: ["Balcony", "Gym", "Lift", "24/7 security", "Backup power", "Parking"],
    desc: "A modern three-bedroom apartment with a private balcony, in a managed block close to Ozumba Mbadiwe and the Civic Centre."
  },
  {
    id: "smart-terrace-oniru", ref: "ILE-1032", featured: false, added: "2026-10-14",
    title: "Four-bedroom smart terrace", area: "oniru", deal: "rent", price: 30000000,
    type: "Terrace", beds: 4, baths: 5, size: 340, year: 2023, lat: 6.4339, lng: 3.4513,
    imgs: ["1600607688969-a5bfcd646154", "1600585152220-90363fe7e115", "1631679706909-1844bbd07221", "1595526114035-0d45ed16cfbf"],
    tags: ["Smart home", "Garden"],
    amenities: ["Smart home system", "Private garden", "Fitted kitchen", "Boys' quarters", "Solar and inverter"],
    desc: "A contemporary terrace shaded by a great old tree, with smart controls throughout and a private garden. Minutes from VI."
  },
  {
    id: "white-villa-ajah", ref: "ILE-1030", featured: false, added: "2026-10-10",
    title: "Four-bedroom contemporary villa", area: "ajah", deal: "sale", price: 160000000,
    type: "Detached house", beds: 4, baths: 4, size: 330, year: 2021, lat: 6.4655, lng: 3.5681,
    imgs: ["1523217582562-09d0def993a6", "1554995207-c18c203602cb", "1616137466211-f939a420be84", "1600607686527-6fb886090705"],
    tags: ["Garden", "Family home"],
    amenities: ["Garden", "Study", "Fitted kitchen", "Boys' quarters", "Backup power", "Parking for 3"],
    desc: "Bold white geometry and a leafy garden make this Ajah villa stand out. Great value for a detached home this close to the coast."
  }
];
