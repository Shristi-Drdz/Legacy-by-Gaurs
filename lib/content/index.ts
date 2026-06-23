export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Project" },
  { href: "/amenities", label: "Amenities" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/price-configurations", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about-developer", label: "Developer" },
  { href: "/contact", label: "Enquire" },
] as const;

export const WHY_LEGACY = [
  {
    title: "Sky-High Majesty",
    description:
      "Four iconic towers, each rising to 36 storeys, with uninterrupted Greg Norman golf course and Pari Chowk views.",
  },
  {
    title: "Inspired by the Fleur",
    description:
      "French-inspired architectural detailing, classical pillars, arches and grand entrances that echo Roman and Renaissance heritage.",
  },
  {
    title: "Club Imperial",
    description:
      "A House of Royals clubhouse with café, restaurant, theatre, spa, indoor heated pool and 18+ curated indulgences.",
  },
  {
    title: "Helix Sky Bridge",
    description:
      "Sky-high luxuries floating above the city — yoga decks, herbal gardens, trellis walks, tree court and pavilion.",
  },
  {
    title: "Inside Jaypee Greens",
    description:
      "Built within the delivered 452-acre Jaypee Greens township with golf course, spa resort, sports complex, schools and Town Centre.",
  },
  {
    title: "Pari Chowk Address",
    description:
      "Direct access to Pari Chowk Metro, Noida–Greater Noida Expressway and the upcoming Noida International Airport.",
  },
] as const;

export const PROJECT_SNAPSHOT = [
  { label: "Configurations", value: "Magnificent 4 BHK Condominiums & Lavish Villas" },
  { label: "Towers", value: "4 Iconic Towers, 36 Storeys each" },
  { label: "Address", value: "Plot B-10, Jaypee Greens, Sector 19 & 25" },
  { label: "Location", value: "Pari Chowk, Greater Noida" },
  { label: "Theme", value: "Inspired by the French Fleur-de-lis" },
  { label: "Launch Date", value: "13 October 2024" },
] as const;

export const CLUB_IMPERIAL_AMENITIES = [
  "Café",
  "Restaurant",
  "Library",
  "Meeting Room",
  "Conference Room",
  "Lobby Lounge",
  "Theatre",
  "Party Hall",
  "Billiards Lounge",
  "Cards Room",
  "Gym and Yoga Studio",
  "Game Zone",
  "Multipurpose Hall",
  "Music / Hobby Room",
  "Healthcare",
  "Spa, Sauna, Wellness and Treatment Zone",
  "Swimming Pool, Kids Pool & Jacuzzi",
  "Pool-side Outdoor Seating Deck",
  "Indoor Heated Pool",
] as const;

export const HELIX_AMENITIES = [
  "Yoga Decks",
  "Herbal Gardens",
  "Indoor Games",
  "Trellis Walks",
  "Tree Court",
  "Pavilion",
  "Water Body",
  "Landscaped Sitting Areas",
  "Social Gathering Zones",
] as const;

export const TOWNSHIP_AMENITIES = [
  "18-Hole Greg Norman Championship Golf Course (7,347 yards, 88 bunkers, 14 water bodies)",
  "9-Hole Graham Cooke Chip-and-Putt Golf Course",
  "Golf Academy with Pro Shop",
  "170-Room Six Senses Golf & Spa Resort",
  "Atlantis the Club (International Standard Sports Complex)",
  "Boomerang Club",
  "60-Acre Nature Reserve Park with 7.5-Acre Lake",
  "NBA-Affiliated Basketball Court",
  "Town Centre — Boutique, Café & Restaurant Hub",
  "Temple",
  "Schools & Hospitals within township",
  "Public School",
  "Gated Community Living",
] as const;

export const SPECIFICATIONS = [
  "Imported marble flooring in living and dining",
  "Wooden flooring in master bedrooms",
  "Modular kitchen with premium chimney, hob and built-in appliance provisions",
  "Premium imported sanitaryware (Kohler / Grohe-grade or equivalent)",
  "VRV / VRF central air-conditioning provisions",
  "Video door phone and 3-tier security",
  "Provision for home automation",
  "Earthquake-resistant RCC frame structure",
] as const;

export const CONFIGURATION_TABLE = [
  { type: "4 BHK Condominium", format: "Tower 1", floors: "36-Storey", pricing: "On Request" },
  { type: "4 BHK Condominium", format: "Tower 2", floors: "36-Storey", pricing: "On Request" },
  { type: "4 BHK Condominium", format: "Tower 3", floors: "36-Storey", pricing: "On Request" },
  { type: "4 BHK Condominium", format: "Tower 4", floors: "36-Storey", pricing: "On Request" },
  { type: "Lavish Villa", format: "Standalone", floors: "G + 2 / G + 3", pricing: "On Request" },
  { type: "Penthouse / Sky Villa", format: "Top Floor (Select Towers)", floors: "35–36", pricing: "On Request" },
] as const;

export const PAYMENT_PLANS = [
  "Down Payment Plan (with best discount)",
  "Construction-Linked Payment Plan",
  "Possession-Linked / Subvention Plan",
  "Pre-approved home loan tie-ups with leading banks (HDFC, SBI, ICICI, Axis, LIC Housing)",
] as const;

export const INCLUDED_FEATURES = [
  "Golf course view on one side, Pari Chowk skyline on the other",
  "Double-height drop-off lobby & grand tower entrance",
  "Limited units per floor for privacy",
  "Premium imported sanitaryware and fittings",
  "Modular kitchen with premium appliance provisions",
  "VRV / VRF central air-conditioning provisions",
  "3-tier security with video door phone",
  "Lifetime access to Club Imperial and Helix Sky Bridge",
] as const;

export const LOCATION_CONNECTIVITY = {
  connectivity: [
    "Pari Chowk Metro Station — 3 minutes",
    "Alpha 1 Metro Station — 5 minutes",
    "Noida–Greater Noida Expressway — at the doorstep",
    "DND Flyway / Delhi border — 35 minutes",
    "Yamuna Expressway entry — 8 minutes",
    "Noida International Airport (Jewar) — 30 minutes (upcoming, India's largest)",
    "Indira Gandhi International Airport — 60 minutes",
    "Proposed Film City (Sector 21, YEIDA) — 20 minutes",
  ],
  education: [
    "Galgotias University — 5 minutes",
    "Sharda University — 10 minutes",
    "Bennett University — 15 minutes",
    "Gaur International School — within township access",
    "JP International School — 5 minutes",
    "Delhi Public School Greater Noida — 10 minutes",
  ],
  healthcare: [
    "Yatharth Super-Specialty Hospital — 7 minutes",
    "Sharda Hospital — 10 minutes",
    "Kailash Hospital — 12 minutes",
    "Fortis (Noida) — 25 minutes",
    "Jaypee Hospital (Noida) — 20 minutes",
  ],
  workspaces: [
    "Adobe Systems, MetLife, HCL, TCS, Wipro, Samsung",
    "Advant Navis Business Park",
    "Knowledge Park I, II, III — Greater Noida's tech & education corridor",
    "Tech Zone IV — IT corridor",
  ],
  lifestyle: [
    "The Grand Venice Mall — 10 minutes",
    "Ansal Plaza — 8 minutes",
    "Jaypee Greens Town Centre — within the township",
    "Radisson Blu Hotel — 5 minutes",
    "Six Senses Golf & Spa Resort — within the township",
  ],
} as const;

export const DEVELOPER_MILESTONES = [
  "35+ Delivered Residential Projects",
  "30+ Delivered Commercial Projects",
  "3 Delivered Township Projects",
  "2 Delivered Retail Projects (Malls)",
  "4 Gaurs International Schools",
  "24 Ongoing RERA-Registered Projects",
  "65,000+ Delivered Units",
  "40,000+ Possessions Given (2014–2021)",
  "1 Lakh+ Happy Customers",
  "6 Million+ Sq.m. (60 Million+ Sq.ft.) Area Developed",
] as const;

export const DEVELOPER_AWARDS = [
  "Smart City Empowering India Awards 2020 — Best Smart City Developer of the Year (Gaursons India)",
  "Times Business Awards 2019 — Best Real Estate Developer of the Year (Gaursons India)",
  "PMAY Empowering India Awards 2019 — Most Well-Planned Upcoming Project in EWS Category (Gaur Siddhartham)",
  "CNBC Awaaz Real Estate Awards 2018–19 — Best Residential Project, Affordable Segment, North Zone (Gaur City 2)",
  "CNBC Awaaz Real Estate Awards 2017–18 — Best Residential Project, Affordable Segment, National (Gaur Cascades)",
  "CNBC Awaaz Real Estate Awards 2016–17 — Best Township Project (Gaur City)",
  "NDTV Property Awards 2016–17 — Best Township Project (Gaur City)",
  "NDTV Property Awards 2016–17 — Budget Apartment Project of the Year, Tier 1 Cities (Gaur Cascades)",
] as const;

export const SIGNATURE_PROJECTS = [
  "The Islands by Gaurs (Jaypee Greens — 9 towers, 4/5/6 BHK)",
  "Gaurs Platinum Towers (Gaur Sportswood, Sector 79, Noida)",
  "Mulberry Mansions",
  "Krishn Villas (Divine Luxury Villas)",
  "Gaur Saundaryam (Greater Noida West)",
] as const;

export const INTEREST_OPTIONS = [
  "4 BHK Condominium",
  "Lavish Villa",
  "Penthouse / Sky Villa",
  "Just Exploring",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 3 months",
  "3–6 months",
  "Just exploring",
] as const;

export const TOWER_OPTIONS = [
  "Tower 1",
  "Tower 2",
  "Tower 3",
  "Tower 4",
] as const;

export const HOME_FAQS = [
  {
    question: "What configurations are available at Legacy by Gaurs?",
    answer:
      "Legacy by Gaurs offers magnificent 4 BHK condominiums across four 36-storey towers and lavish villas within a gated enclave at Plot B-10, Jaypee Greens.",
  },
  {
    question: "Is Legacy by Gaurs RERA approved?",
    answer:
      "Yes. Legacy by Gaurs is RERA-approved under registration number UPRERAPRJ688396. Full project details are available at up-rera.in/projects.",
  },
  {
    question: "Where is Legacy by Gaurs located?",
    answer:
      "The project is located at Plot B-10, Jaypee Greens, Sector 19 & 25, Pari Chowk, Greater Noida — within the 452-acre Jaypee Greens golf township.",
  },
] as const;
