export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/" },
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
    title: "Experience",
    links: [
      { label: "PS5 Lounge Experience", href: "/gaming" },
      { label: "Ultra High-Definition Displays", href: "/gaming#display" },
      { label: "DualSense Edge Gear", href: "/gaming#controllers" },
      { label: "3D Audio Lounge", href: "/gaming#audio" },
      { label: "VIP Private Rooms", href: "/membership" },
    ],
  },
  {
    title: "Plans & Pass",
    links: [
      { label: "Hourly Passes", href: "/pricing" },
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
    title: "Nearby Locations",
    links: [
      { label: "Gaming Lounge Attingal", href: "/location/gaming-lounge-attingal" },
      { label: "Gaming Lounge Kazhakkoottam", href: "/location/gaming-lounge-kazhakkoottam" },
      { label: "Gaming Lounge Technopark", href: "/location/gaming-lounge-technopark" },
      { label: "Gaming Lounge Trivandrum", href: "/location/gaming-lounge-trivandrum" },
      { label: "Gaming Lounge Kerala", href: "/location/gaming-lounge-kerala" },
    ],
  },
];
