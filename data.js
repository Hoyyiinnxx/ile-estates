/* Ilé Residences: demo listings (fictional agency, portfolio project).
   Photos: Unsplash (free to use). Prices in Naira; rent is per year. */

/* Put your WhatsApp number here in international format, digits only, e.g. "2348012345678".
   The placeholder below is intentionally invalid so demo enquiries go nowhere. */
window.ILE_WHATSAPP = "2340000000000";

window.ILE_AREAS = [
  { id: "banana-island", name: "Banana Island", img: "1613977257363-707ba9348227", blurb: "Private, gated and waterfront." },
  { id: "ikoyi", name: "Ikoyi", img: "1613490493576-7fde63acd811", blurb: "Leafy streets, old money, new builds." },
  { id: "lekki-phase-1", name: "Lekki Phase 1", img: "1600596542815-ffad4c1539a9", blurb: "Family homes close to everything." },
  { id: "victoria-island", name: "Victoria Island", img: "1545324418-cc1a3fa10c00", blurb: "City living by the Atlantic." },
  { id: "eko-atlantic", name: "Eko Atlantic", img: "1600607687939-ce8a6c25118c", blurb: "Lagos's newest skyline." },
  { id: "ikeja-gra", name: "Ikeja GRA", img: "1599809275671-b5942cabc7a2", blurb: "Quiet, mainland and spacious." }
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
  }
];
