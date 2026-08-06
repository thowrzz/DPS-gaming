export interface PricingTier {
  id: string;
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  ctaText: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "student-pass",
    name: "Student Pass",
    price: "₹89",
    duration: "per hour (Mon - Thu)",
    tagline: "Student friendly pricing for after-college gaming.",
    features: [
      "Premium PS5 Console Access",
      "High Refresh Rate Display",
      "Multiplayer Gaming Access",
      "Student ID Required at Entry",
      "Valid Monday to Thursday",
    ],
    ctaText: "Claim Offer",
  },
  {
    id: "standard-pass",
    name: "Standard Pass",
    price: "₹99",
    duration: "per hour",
    popular: true,
    tagline: "Full access to high-refresh displays & multiplayer lounge.",
    features: [
      "Premium PS5 Console Access",
      "High Refresh Rate Display",
      "Multiplayer Gaming Access",
      "Air-conditioned Comfort Lounge",
      "Fast Stable Fiber Internet",
    ],
    ctaText: "Book Now",
  },
  {
    id: "weekend-pass",
    name: "Weekend Pass",
    price: "₹149",
    duration: "per hour",
    tagline: "Peak hour gaming pass with priority station booking.",
    features: [
      "Peak Hour Gaming Access",
      "Priority Station Booking",
      "Multiplayer 2v2 & 4v4 Access",
      "Weekend Event Entry",
      "Complimentary Refreshment",
    ],
    ctaText: "Reserve",
  },
  {
    id: "birthday-package",
    name: "Birthday Package",
    price: "₹1,999",
    duration: "Starting from",
    tagline: "Celebrate birthdays and special occasions with your squad.",
    features: [
      "Private Gaming Session Zone",
      "Reserved Lounge for Squad",
      "Multiplayer Gaming Access",
      "Birthday Decorations (Optional)",
      "Dedicated Staff Concierge",
    ],
    ctaText: "Enquire Now",
  },
];
