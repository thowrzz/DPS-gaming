export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "TV Rental", href: "/tv-rental", badge: "New" },
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
      { label: "43\" Smart TV Rental (from ₹499/day)", href: "/tv-rental" },
      { label: "PS5 + TV Combo Setup", href: "/tv-rental" },
      { label: "Wedding & Event Displays", href: "/tv-rental" },
      { label: "Corporate Expo Rentals", href: "/tv-rental" },
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
    title: "TV Rental Locations",
    links: [
      { label: "TV Rental Attingal", href: "/tv-rental/attingal" },
      { label: "TV Rental Chirayinkeezhu", href: "/tv-rental/chirayinkeezhu" },
      { label: "TV Rental Kazhakkoottam", href: "/tv-rental/kazhakkoottam" },
      { label: "TV Rental Varkala", href: "/tv-rental/varkala" },
      { label: "TV Rental Vamanapuram", href: "/tv-rental/vamanapuram" },
      { label: "TV Rental Kilimanoor", href: "/tv-rental/kilimanoor" },
    ],
  },
];


