export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Location & Access" | "Hardware & Displays" | "Bookings & Rates" | "Tournaments & Events" | "TV Rental";
}

export const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-247-prebooking",
    question: "What are your operating hours?",
    answer:
      "DPS Gaming Hub is available 24/7 for pre-booking! Whether you want to play during the day or book an exclusive late-night or early-morning session, you can reserve your PS5 station in advance via our website or WhatsApp.",
    category: "Bookings & Rates",
  },
  {
    id: "faq-location",
    question: "Where is DPS Gaming Hub located?",
    answer:
      "DPS Gaming Hub is located at Korani Junction along the main highway, situated precisely between Attingal and Kazhakkoottam in Thiruvananthapuram (Trivandrum), Kerala. It is just a 5-minute drive from Attingal and 10 minutes from Technopark Kazhakkoottam.",
    category: "Location & Access",
  },
  {
    id: "faq-near-attingal",
    question: "Is there a PS5 Gaming Lounge near Attingal?",
    answer:
      "Yes! DPS Gaming Hub in Korani is the premier 24/7 PS5 gaming lounge serving Attingal, Kazhakkoottam, Kaniyapuram, and Mangalapuram. We feature Apple-inspired luxury interiors, Ultra High-Definition Displays, and DualSense Edge controllers.",
    category: "Location & Access",
  },
  {
    id: "faq-near-technopark",
    question: "Is DPS Gaming Hub accessible from Technopark Kazhakkoottam?",
    answer:
      "Absolutely. Technopark IT professionals can reach our lounge in approximately 10 to 12 minutes via the NH66 highway. With 24/7 pre-booking availability, techies can reserve night passes or off-peak sessions anytime after work.",
    category: "Location & Access",
  },
  {
    id: "faq-displays",
    question: "What display technology and controllers do you provide?",
    answer:
      "Every gaming station features high-grade Ultra High-Definition HDR displays supporting Variable Refresh Rate (VRR). Gamers play on PlayStation 5 consoles using DualSense and DualSense Edge wireless controllers.",
    category: "Hardware & Displays",
  },
  {
    id: "faq-games",
    question: "What games are available to play?",
    answer:
      "Our PS5 library includes 50+ flagship titles updated regularly: EA SPORTS FC 24, Tekken 8, Mortal Kombat 1, God of War Ragnarök, Marvel's Spider-Man 2, Gran Turismo 7, Call of Duty MW3, It Takes Two, and GTA V.",
    category: "Hardware & Displays",
  },
  {
    id: "faq-booking",
    question: "How does pre-booking work?",
    answer:
      "Select your preferred date, time slot (available 24/7), and game on our website. Your request instantly generates a pre-filled ticket sent directly to our WhatsApp lounge desk for instant confirmation.",
    category: "Bookings & Rates",
  },
  {
    id: "faq-parking",
    question: "Is free parking available at the lounge?",
    answer:
      "Yes, DPS Gaming Hub offers complimentary dedicated car and two-wheeler parking directly in front of the venue for all guests.",
    category: "Location & Access",
  },
  {
    id: "faq-tournaments",
    question: "Do you host esports gaming tournaments in Kerala?",
    answer:
      "We host weekly and monthly competitive esports tournaments for EA FC 24, Tekken 8, and Call of Duty with cash prize pools, trophies, and regional leaderboard rankings.",
    category: "Tournaments & Events",
  },
  {
    id: "faq-parties",
    question: "Do you offer birthday party and squad packages?",
    answer:
      "Yes! We offer Squad Lounge Reservations for birthday parties, college group hangouts, and corporate team events with exclusive room access and refreshments.",
    category: "Bookings & Rates",
  },
  {
    id: "faq-tv-rental-trivandrum",
    question: "Do you offer TV rental service in Trivandrum?",
    answer:
      "Yes! DPS Gaming Hub provides 43-inch Smart TV rental across Trivandrum (Thiruvananthapuram) starting from ₹499/day. We deliver to Attingal, Chirayinkeezhu, Kazhakkoottam, Varkala, Vamanapuram, Kallambalam, Kilimanoor, and surrounding areas with full setup included.",
    category: "TV Rental",
  },
  {
    id: "faq-tv-rental-price",
    question: "What is the cost of TV rental in Trivandrum?",
    answer:
      "TV rental in Trivandrum starts at ₹499/day (1 day). Multi-day plans: ₹399/day (2–3 days), ₹349/day (4–7 days), ₹299/day (7–18 days). Delivery, setup, and pickup are included.",
    category: "TV Rental",
  },
  {
    id: "faq-tv-rental-attingal",
    question: "Is TV rental available in Attingal?",
    answer:
      "Yes! We provide fast TV rental delivery to Attingal from our Korani Junction hub, just 5 minutes away. We deliver 43-inch Smart TVs for birthday parties, wedding functions, and events in Attingal.",
    category: "TV Rental",
  },
  {
    id: "faq-tv-rental-events",
    question: "Can I rent a TV for a wedding or function in Trivandrum?",
    answer:
      "Absolutely. Our 43-inch Smart TV with heavy-duty adjustable tripod stand is ideal for wedding halls, community halls, and event venues in Trivandrum. We handle delivery, setup, and pickup.",
    category: "TV Rental",
  },
  {
    id: "faq-ps5-tv-combo",
    question: "Can I rent both a PS5 and a TV together?",
    answer:
      "Yes! We offer a PS5 + 43\" Smart TV combo rental package perfect for gaming events and birthday parties. WhatsApp us for combo pricing and availability in your Trivandrum area.",
    category: "TV Rental",
  },
];
