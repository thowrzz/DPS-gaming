export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "Rentals", href: "/rentals", badge: "Hot" },
  { label: "Gaming Setups", href: "/gaming" },
  { label: "Pricing", href: "/pricing" },
  { label: "Membership", href: "/membership" },
  { label: "Tournaments", href: "/tournaments", badge: "Live" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SECTIONS = [
  {
    title: "TV & Console Rentals",
    links: [
      { label: "PS5 Console Rental (₹949/day)", href: "/rentals#ps5-rental" },
      { label: "43\" QLED TV Rental (₹3000/day)", href: "/rentals#tv-rental" },
      { label: "PS5 + TV Combo Setup", href: "/rentals#combo-rental" },
      { label: "Wedding & Event Displays", href: "/rentals#events" },
      { label: "Corporate Expo Rentals", href: "/rentals#events" },
    ],
  },
  {
    title: "Plans & Lounge Pass",
    links: [
      { label: "Hourly Passes (from ₹89/hr)", href: "/pricing" },
      { label: "Night Gaming Session", href: "/pricing#night-pass" },
      { label: "Membership Clubs", href: "/membership" },
      { label: "Student Discount", href: "/pricing#student" },
      { label: "Birthday Party Package", href: "/pricing#parties" },
    ],
  },
  {
    title: "Esports & Community",
    links: [
      { label: "EA FC 24 Tournaments", href: "/tournaments" },
      { label: "Tekken 8 Championship", href: "/tournaments#tekken" },
      { label: "Community Leaderboard", href: "/tournaments#leaderboard" },
      { label: "Weekend Gaming Events", href: "/tournaments#weekend" },
    ],
  },
  {
    title: "Fast Delivery Locations",
    links: [
      { label: "Rentals Attingal", href: "/location/gaming-lounge-attingal" },
      { label: "Rentals Varkala & Resorts", href: "/location/gaming-lounge-varkala" },
      { label: "Rentals Venjaramoodu", href: "/location/gaming-lounge-venjaramoodu" },
      { label: "Rentals Chirayinkeezhu", href: "/location/gaming-lounge-chirayinkeezhu" },
      { label: "Rentals Kattakada", href: "/location/gaming-lounge-kattakada" },
      { label: "Rentals Kazhakkoottam & Technopark", href: "/location/gaming-lounge-kazhakkoottam" },
    ],
  },
];


