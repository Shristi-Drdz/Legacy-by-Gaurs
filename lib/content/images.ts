export const HERO_IMAGES = {
  home: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85",
  about: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
  amenities: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
  floorPlans: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85",
  price: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
  location: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=85",
  gallery: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85",
  developer: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
  contact: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85",
} as const;

export type GalleryCategory =
  | "exterior"
  | "interiors"
  | "club-imperial"
  | "helix"
  | "township";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "ext-1", title: "Day view from the golf course", category: "exterior", src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80" },
  { id: "ext-2", title: "Night view from Pari Chowk", category: "exterior", src: "https://images.unsplash.com/photo-1519501025264-65b15a567598?w=1200&q=80" },
  { id: "ext-3", title: "Four-tower skyline at dusk", category: "exterior", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" },
  { id: "ext-4", title: "Grand drop-off entrance", category: "exterior", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
  { id: "ext-5", title: "Aerial view of Plot B-10", category: "exterior", src: "https://images.unsplash.com/photo-1471929485248-4657bbbf2e48?w=1200&q=80" },
  { id: "int-1", title: "Tower lobby — grand entrance", category: "interiors", src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" },
  { id: "int-2", title: "Living room — pillars of timeless beauty", category: "interiors", src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
  { id: "int-3", title: "Dining room — dine like royalty", category: "interiors", src: "https://images.unsplash.com/photo-1618221195710-dd575b5a350b?w=1200&q=80" },
  { id: "int-4", title: "Master bedroom — regal view", category: "interiors", src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80" },
  { id: "int-5", title: "Kitchen — modular & spacious", category: "interiors", src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80" },
  { id: "int-6", title: "Bathroom — spa-inspired washrooms", category: "interiors", src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80" },
  { id: "int-7", title: "Walk-in closet", category: "interiors", src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80" },
  { id: "ci-1", title: "Club lobby — grandness meets grace", category: "club-imperial", src: "https://images.unsplash.com/photo-1600566753086-00f18fb576b9?w=1200&q=80" },
  { id: "ci-2", title: "Indoor heated pool with pool-view deck", category: "club-imperial", src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80" },
  { id: "ci-3", title: "Gymnasium", category: "club-imperial", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" },
  { id: "ci-4", title: "Billiards lounge", category: "club-imperial", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80" },
  { id: "ci-5", title: "Theatre", category: "club-imperial", src: "https://images.unsplash.com/photo-1598899134739-46c24256136c?w=1200&q=80" },
  { id: "ci-6", title: "Restaurant", category: "club-imperial", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" },
  { id: "ci-7", title: "Party hall", category: "club-imperial", src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80" },
  { id: "ci-8", title: "Café", category: "club-imperial", src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80" },
  { id: "ci-9", title: "Spa & wellness zone", category: "club-imperial", src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80" },
  { id: "ci-10", title: "Library", category: "club-imperial", src: "https://images.unsplash.com/photo-1507842217343-583bb7270b33?w=1200&q=80" },
  { id: "ci-11", title: "Music / hobby room", category: "club-imperial", src: "https://images.unsplash.com/photo-1511379934359-1e69444b3799?w=1200&q=80" },
  { id: "ci-12", title: "Game zone", category: "club-imperial", src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80" },
  { id: "hx-1", title: "Yoga deck", category: "helix", src: "https://images.unsplash.com/photo-1545205597-3d9d02c29553?w=1200&q=80" },
  { id: "hx-2", title: "Herbal garden", category: "helix", src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80" },
  { id: "hx-3", title: "Tree court & pavilion", category: "helix", src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80" },
  { id: "hx-4", title: "Trellis walk", category: "helix", src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80" },
  { id: "hx-5", title: "Sky-high water body", category: "helix", src: "https://images.unsplash.com/photo-1605276374101-ec4d4a8d8468?w=1200&q=80" },
  { id: "hx-6", title: "Landscaped sitting zones", category: "helix", src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2d455?w=1200&q=80" },
  { id: "tw-1", title: "18-hole Greg Norman golf course", category: "township", src: "https://images.unsplash.com/photo-1587174486073-9210e9c3d10f?w=1200&q=80" },
  { id: "tw-2", title: "Boomerang Club", category: "township", src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80" },
  { id: "tw-3", title: "Sports Complex", category: "township", src: "https://images.unsplash.com/photo-1461896836934-ffe607ba7951?w=1200&q=80" },
  { id: "tw-4", title: "Water Body / lake", category: "township", src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80" },
  { id: "tw-5", title: "Temple", category: "township", src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80" },
  { id: "tw-6", title: "Narmada Gate (entrance)", category: "township", src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
  { id: "tw-7", title: "NBA-affiliated basketball court", category: "township", src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80" },
];

export const GALLERY_TABS: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "exterior", label: "Exterior & Towers" },
  { id: "interiors", label: "Interiors" },
  { id: "club-imperial", label: "Club Imperial" },
  { id: "helix", label: "Helix Sky Bridge" },
  { id: "township", label: "Jaypee Greens" },
];
