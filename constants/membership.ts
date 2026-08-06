export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  highlightColor: string;
  perks: string[];
  recommendedFor: string;
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "bronze-tier",
    name: "Bronze Pass",
    price: "₹799",
    period: "month",
    highlightColor: "#CBD5E1",
    perks: [
      "10 Hours Included Gaming per month",
      "Priority Station Booking",
      "5% Extra Hour Discount",
      "Access to Gaming Community Events",
    ],
    recommendedFor: "Great for casual weekend gamers.",
  },
  {
    id: "silver-tier",
    name: "Silver Pass",
    price: "₹1,499",
    period: "month",
    badge: "Most Popular",
    highlightColor: "#38BDF8",
    perks: [
      "20 Hours Included Gaming per month",
      "10% Extra Hour Discount",
      "Priority Station Access",
      "Tournament Entry Discounts",
      "DualSense Controller Preference",
    ],
    recommendedFor: "Perfect for regular multiplayer players.",
  },
  {
    id: "gold-tier",
    name: "Gold VIP Pass",
    price: "₹2,499",
    period: "month",
    badge: "VIP Choice",
    highlightColor: "#2563EB",
    perks: [
      "40 Hours Included Gaming per month",
      "Priority Station Booking Guarantee",
      "Exclusive Event & Launch Access",
      "Free Tournament Access Passes",
      "Special Member Rewards & Snacks",
    ],
    recommendedFor: "Hardcore competitive gamers & champions.",
  },
];
