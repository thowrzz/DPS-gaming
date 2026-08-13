export interface PricingTier {
  id: string;
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  ctaText: string;
  whatsappMessage?: string;
  category?: "rental" | "lounge";
}

export const RENTAL_TIERS: PricingTier[] = [
  {
    id: "ps5-rental",
    name: "PS5 Console Rental",
    price: "₹949",
    duration: "1 Day",
    popular: true,
    category: "rental",
    tagline: "Play More. Pay Less — Next Level Gaming Now In Your Hands",
    features: [
      "Latest Games Included (Unlimited Fun)",
      "On-Time Doorstep Delivery Across Trivandrum",
      "Well Maintained (100% Quality & Sanitized)",
      "24/7 Customer Support & Instant Help",
      "DualSense Controller & Cable Kit",
      "Rent, Play, Repeat Guarantee",
    ],
    ctaText: "Rent PS5 on WhatsApp",
    whatsappMessage: "Hello DPS Gaming Hub! I want to rent a PS5 Console for ₹949/day. Please share delivery details.",
  },
  {
    id: "tv-rental",
    name: "43\" QLED TV Rental",
    price: "₹3,000",
    duration: "1 Day",
    popular: true,
    category: "rental",
    tagline: "Rent It. Love It — Perfect Display, Perfect Experience",
    features: [
      "43\" Ultra High Definition QLED Display",
      "Heavy Duty Adjustable Tripod Stand Included",
      "We Handle Transport (Doorstep Pickup & Delivery)",
      "We Handle On-Site Setup & Installation",
      "Weddings, Birthdays, Corporate Events & Trade Shows",
      "Rent, Enjoy, Repeat Guarantee",
    ],
    ctaText: "Rent QLED TV on WhatsApp",
    whatsappMessage: "Hello DPS Gaming Hub! I want to rent a 43\" QLED TV with Tripod Stand for ₹3000/day. Please confirm availability.",
  },
  {
    id: "ps5-tv-combo",
    name: "PS5 + QLED TV Combo",
    price: "₹3,699",
    duration: "1 Day",
    category: "rental",
    tagline: "Complete Portable Gaming & Event Suite",
    features: [
      "PS5 Console + 43\" QLED TV + Tripod Stand",
      "2 DualSense Controllers & Top Rated Games",
      "Free Transport & On-Site Setup Included",
      "24/7 Dedicated Event Support",
      "Ideal for Weddings, Parties & Tech Expos",
      "Save Big on Combined Rental",
    ],
    ctaText: "Book Ultimate Combo",
    whatsappMessage: "Hello DPS Gaming Hub! I want to rent the PS5 + 43\" QLED TV Combo for ₹3,699/day for my event.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "student-pass",
    name: "Student Pass",
    price: "₹89",
    duration: "per hour (Mon - Thu)",
    category: "lounge",
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
    category: "lounge",
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
    category: "lounge",
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
    category: "lounge",
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

