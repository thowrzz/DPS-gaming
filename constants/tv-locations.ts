export interface TvLocationPage {
  slug: string;
  cityName: string;
  district: string;
  heroHeading: string;
  subheading: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  useCases: { title: string; desc: string }[];
  landmarks: string[];
  nearbyAreas: string[];
  contentStory: string;
  deliveryNote: string;
  faqs: { q: string; a: string }[];
}

export const TV_LOCATION_PAGES: Record<string, TvLocationPage> = {
  attingal: {
    slug: "attingal",
    cityName: "Attingal",
    district: "Thiruvananthapuram",
    heroHeading: "43 Inch TV Rental in Attingal",
    subheading:
      "Rent a 43-inch Smart TV in Attingal for gaming sessions, birthday parties, wedding functions, and any event. Doorstep delivery with full setup included.",
    metaTitle: "43 Inch TV Rental in Attingal | TV for Events, Gaming & Functions",
    metaDescription:
      "Rent 43-inch Smart TV in Attingal starting ₹499/day. Perfect for birthday parties, weddings, gaming events & corporate functions. Doorstep delivery with setup. Call or WhatsApp now.",
    keywords: [
      "TV rental Attingal",
      "43 inch TV rental Attingal",
      "Smart TV for rent Attingal",
      "TV rent Attingal Kerala",
      "television rental Attingal",
      "TV for party Attingal",
      "TV for function Attingal",
      "43 inch TV rent near Attingal",
      "TV rental near me Attingal",
      "Smart TV hire Attingal",
    ],
    useCases: [
      {
        title: "Wedding Functions",
        desc: "Display photo slideshows, live streams, and video greetings at Attingal wedding halls and auditoriums with a 43\" Smart TV on a premium stand.",
      },
      {
        title: "Birthday Parties",
        desc: "Set up a dedicated gaming corner or movie screening for birthday parties in Attingal homes, community halls, and resorts.",
      },
      {
        title: "Gaming Tournaments",
        desc: "Host PS5 FIFA tournaments and multiplayer gaming events in Attingal with our TV + PS5 combo rental package.",
      },
      {
        title: "Temporary Home Use",
        desc: "Moving to Attingal, waiting for your TV to arrive, or just need a display for a few days? Rent a Smart TV without any commitment.",
      },
    ],
    landmarks: [
      "Attingal KSRTC Bus Stand",
      "Attingal Palace",
      "Mamom Bridge",
      "Attingal Town Junction",
      "Chirayinkeezhu Road",
      "Korani Junction (Hub)",
    ],
    nearbyAreas: [
      "Attingal Town",
      "Mamom",
      "Korani",
      "Chirayinkeezhu",
      "Kadakkavoor",
      "Vamanapuram",
    ],
    contentStory:
      "DPS Gaming Hub delivers 43-inch Smart TVs directly to Attingal homes, venues, and event spaces. Whether you need a display for a two-day wedding function at an Attingal auditorium or a weekend FIFA gaming setup, we handle everything from transport to installation. Our hub is located at Korani Junction, just minutes from Attingal on NH66, making us the closest TV rental service in the area.",
    deliveryNote:
      "Free delivery within Attingal town and nearby areas including Mamom, Korani, and Chirayinkeezhu. Additional delivery charges may apply for locations beyond our standard range.",
    faqs: [
      {
        q: "Can I rent a TV for just one day in Attingal?",
        a: "Yes! Our 1-day TV rental in Attingal starts at ₹499 + delivery charges. We deliver, set up, and pick up the TV at your convenience.",
      },
      {
        q: "Do you deliver TV rental to Attingal for events?",
        a: "Absolutely. We deliver 43-inch Smart TVs on heavy-duty tripod stands to wedding halls, birthday venues, and event spaces across Attingal. Setup and installation is included.",
      },
      {
        q: "Can I combine a PS5 with the TV rental in Attingal?",
        a: "Yes! We offer a PS5 + 43\" TV combo package. Contact us on WhatsApp for combo pricing and availability for your Attingal event.",
      },
      {
        q: "How quickly can you deliver a TV in Attingal?",
        a: "Our hub is at Korani Junction, 5 minutes from Attingal on NH66. We typically deliver within 30–60 minutes of booking confirmation.",
      },
    ],
  },

  chirayinkeezhu: {
    slug: "chirayinkeezhu",
    cityName: "Chirayinkeezhu",
    district: "Thiruvananthapuram",
    heroHeading: "TV Rental in Chirayinkeezhu | Smart TV for Rent",
    subheading:
      "Affordable 43-inch Smart TV on rent in Chirayinkeezhu. Daily, weekly & monthly rental available for parties, functions, and gaming. We deliver and install at your doorstep.",
    metaTitle: "TV Rental in Chirayinkeezhu | Smart TV for Rent | DPS Gaming Hub",
    metaDescription:
      "Rent Smart TV in Chirayinkeezhu from ₹499/day. We deliver 43-inch TVs with stand for events, birthday parties & home use across Chirayinkeezhu, Sharkara & Kadakkavoor.",
    keywords: [
      "TV rental Chirayinkeezhu",
      "Smart TV rent Chirayinkeezhu",
      "43 inch TV rental Chirayinkeezhu",
      "television rent Chirayinkeezhu",
      "TV for birthday party Chirayinkeezhu",
      "TV hire Sharkara",
      "TV rental Kadakkavoor",
      "TV rent near Chirayinkeezhu",
      "television rental near me Chirayinkeezhu",
    ],
    useCases: [
      {
        title: "Family Celebrations",
        desc: "Rent a Smart TV for house warming ceremonies, family get-togethers, and local festivals in Chirayinkeezhu with hassle-free delivery.",
      },
      {
        title: "Birthday Parties",
        desc: "Create a gaming zone or movie corner for birthday parties in Chirayinkeezhu homes and party halls with our 43\" TV rental.",
      },
      {
        title: "Local Events & Functions",
        desc: "Display presentations, video greetings, and media content at community halls and event venues across Chirayinkeezhu.",
      },
      {
        title: "Temporary Home Setup",
        desc: "Need a TV for a few days in Chirayinkeezhu? Our flexible multi-day plans starting ₹299/day save you from buying.",
      },
    ],
    landmarks: [
      "Chirayinkeezhu Railway Station",
      "Sharkara Temple",
      "Kadakkavoor Junction",
      "Perunguzhi",
      "Korani Junction (Hub)",
    ],
    nearbyAreas: [
      "Chirayinkeezhu Town",
      "Sharkara",
      "Kadakkavoor",
      "Perunguzhi",
      "Attingal",
      "Korani",
    ],
    contentStory:
      "Chirayinkeezhu residents can now rent 43-inch Smart TVs on flexible daily or weekly plans without any long-term commitment. DPS Gaming Hub's delivery team operates from Korani Junction, just 8 minutes from Chirayinkeezhu Railway Station. From small birthday parties to large local functions at Sharkara, we handle full delivery and installation.",
    deliveryNote:
      "We cover Chirayinkeezhu, Sharkara, Kadakkavoor, and Perunguzhi within our standard delivery range. Contact us to confirm delivery charges for your specific location.",
    faqs: [
      {
        q: "Do you rent TVs in Chirayinkeezhu?",
        a: "Yes! We deliver 43-inch Smart TVs to Chirayinkeezhu and nearby areas like Sharkara, Kadakkavoor, and Perunguzhi. Booking starts at ₹499/day.",
      },
      {
        q: "What is included in the TV rental in Chirayinkeezhu?",
        a: "Every rental includes the 43-inch Smart TV, all necessary cables (HDMI, power), and optional tripod stand. We also handle delivery, setup, and pickup.",
      },
      {
        q: "Is a PS5 available with the TV in Chirayinkeezhu?",
        a: "Yes! You can book a PS5 + TV combo for parties and gaming events in Chirayinkeezhu. WhatsApp us for the combo price and availability.",
      },
    ],
  },

  kazhakkoottam: {
    slug: "kazhakkoottam",
    cityName: "Kazhakkoottam",
    district: "Thiruvananthapuram",
    heroHeading: "43 Inch Smart TV Rental in Kazhakkoottam | Gaming & Event TV Rent",
    subheading:
      "Premium 43-inch Smart TV on rent in Kazhakkoottam and Technopark area. Ideal for IT team events, gaming tournaments, corporate expos, and home entertainment.",
    metaTitle: "43 Inch Smart TV Rental in Kazhakkoottam | Gaming & Event TV Rent",
    metaDescription:
      "Rent 43-inch Smart TV in Kazhakkoottam from ₹499/day. Best TV rental for Technopark events, corporate meets, gaming setups & birthday parties. Fast doorstep delivery.",
    keywords: [
      "TV rental Kazhakkoottam",
      "43 inch TV rental Kazhakkoottam",
      "Smart TV rent Kazhakkoottam",
      "TV for rent Technopark",
      "television rental Kazhakkoottam",
      "TV hire Kazhakkoottam",
      "event TV rental Kazhakkoottam",
      "gaming TV rental Kazhakkoottam",
      "TV rent near Kazhakkoottam",
      "corporate TV rental Technopark Trivandrum",
    ],
    useCases: [
      {
        title: "Technopark Corporate Events",
        desc: "Set up 43-inch Smart TVs for corporate presentations, team building events, and product demos at Technopark Phase 1, 2 & 3 offices.",
      },
      {
        title: "Gaming Tournaments",
        desc: "Host PS5 FIFA and multiplayer tournaments for IT teams and gaming communities near Kazhakkoottam and Kariavattom.",
      },
      {
        title: "Apartment Parties",
        desc: "Rent a TV for birthday parties, cricket screening events, and movie nights in Technopark apartments and gated communities.",
      },
      {
        title: "Trade Fairs & Exhibitions",
        desc: "Display product demos and promotional videos at trade exhibitions near Technopark with our event-ready TV + stand package.",
      },
    ],
    landmarks: [
      "Kazhakkoottam Flyover",
      "Technopark Phase 1 Gate",
      "Kariavattom Campus",
      "Sainik School Kazhakkoottam",
      "Menamkulam Junction",
    ],
    nearbyAreas: [
      "Kazhakkoottam Town",
      "Technopark Phase 1, 2 & 3",
      "Kariavattom",
      "Menamkulam",
      "Mangalapuram",
      "Korani",
    ],
    contentStory:
      "Kazhakkoottam is the tech hub of Thiruvananthapuram, home to Technopark — India's largest IT park. DPS Gaming Hub provides fast TV rental delivery to Kazhakkoottam, Technopark campuses, and Kariavattom. Whether you're an IT team planning a gaming event or organizing a corporate presentation, our 43\" Smart TV rental with full stand setup is the perfect solution.",
    deliveryNote:
      "We cover Kazhakkoottam, Technopark (all phases), Kariavattom, and Menamkulam. Delivery is available on short notice. Call or WhatsApp to confirm availability and charges.",
    faqs: [
      {
        q: "Do you deliver TV rental to Technopark offices in Kazhakkoottam?",
        a: "Yes! We deliver 43-inch Smart TVs to Technopark Phase 1, 2, and 3 office premises for corporate events, team days, and presentations.",
      },
      {
        q: "What is the rental rate for a TV in Kazhakkoottam?",
        a: "TV rental starts at ₹499/day (1 day). Multi-day plans are available: ₹399/day (2-3 days), ₹349/day (4-7 days), ₹299/day (7-18 days).",
      },
      {
        q: "Can I rent a PS5 with the TV near Kazhakkoottam?",
        a: "Yes! We offer a PS5 + Smart TV combo package ideal for gaming tournaments and tech events in Kazhakkoottam.",
      },
      {
        q: "How long does delivery take to Kazhakkoottam?",
        a: "Our hub is 15 minutes from Kazhakkoottam via NH66. We deliver within 1-2 hours of booking confirmation.",
      },
    ],
  },

  vamanapuram: {
    slug: "vamanapuram",
    cityName: "Vamanapuram",
    district: "Thiruvananthapuram",
    heroHeading: "Smart TV Rental in Vamanapuram | 43 Inch TV for Rent",
    subheading:
      "Get a 43-inch Smart TV delivered to your home or event venue in Vamanapuram. Flexible daily and weekly rental plans starting ₹499. Setup included.",
    metaTitle: "Smart TV Rental in Vamanapuram | 43 Inch TV for Rent | DPS Gaming Hub",
    metaDescription:
      "Rent 43-inch Smart TV in Vamanapuram from ₹499/day. We deliver to homes, event halls, and venues across Vamanapuram with full setup. WhatsApp to book now.",
    keywords: [
      "TV rental Vamanapuram",
      "Smart TV rent Vamanapuram",
      "43 inch TV rental Vamanapuram",
      "television rental Vamanapuram",
      "TV for party Vamanapuram",
      "TV hire Vamanapuram",
      "TV rent near me Vamanapuram",
      "television for events Vamanapuram",
    ],
    useCases: [
      {
        title: "Home Entertainment",
        desc: "Rent a 43-inch Smart TV for your home in Vamanapuram while waiting for your own TV, or just for a special occasion.",
      },
      {
        title: "Local Festivals & Functions",
        desc: "Display cultural content, devotional videos, and event media at community functions and temple festivals near Vamanapuram.",
      },
      {
        title: "Birthday & Anniversary Events",
        desc: "Add a big-screen experience to birthday parties and anniversary celebrations in Vamanapuram with our TV rental service.",
      },
      {
        title: "Gaming Events",
        desc: "Combine a PS5 with our TV rental for exciting FIFA and gaming tournaments with family and friends in Vamanapuram.",
      },
    ],
    landmarks: [
      "Vamanapuram River",
      "Vamanapuram Junction",
      "Attingal Junction (nearby)",
      "Kilimanoor Road",
    ],
    nearbyAreas: [
      "Vamanapuram Town",
      "Attingal",
      "Kallambalam",
      "Kilimanoor",
      "Korani",
    ],
    contentStory:
      "Vamanapuram and its surrounding areas now have access to affordable Smart TV rental through DPS Gaming Hub. We deliver from our Korani Junction hub and serve Vamanapuram, Kallambalam, Attingal, and nearby panchayaths. Our team sets up the TV with a stand at your venue and picks it up when done.",
    deliveryNote:
      "We deliver to Vamanapuram town and surrounding areas including Kallambalam and Kilimanoor. Contact us to confirm delivery charges for your location.",
    faqs: [
      {
        q: "Do you offer TV rental in Vamanapuram?",
        a: "Yes! We deliver 43-inch Smart TVs to Vamanapuram and nearby areas. Rental starts at ₹499/day with full setup included.",
      },
      {
        q: "What sizes of TV are available for rent near Vamanapuram?",
        a: "We currently offer a 43-inch Smart TV on our rental plan. It includes a heavy-duty adjustable tripod stand, all cables, and on-site installation.",
      },
      {
        q: "Can I rent a TV for a week in Vamanapuram?",
        a: "Yes! Our 4-7 day plan is ₹349/day and the 7-18 day plan is ₹299/day. Great for extended family visits or longer events.",
      },
    ],
  },

  kallambalam: {
    slug: "kallambalam",
    cityName: "Kallambalam",
    district: "Thiruvananthapuram",
    heroHeading: "43 Inch TV Rental in Kallambalam | Smart TV for Events & Home",
    subheading:
      "Rent a 43-inch Smart TV in Kallambalam for parties, wedding functions, gaming events, and temporary home use. We deliver, setup, and pickup at your convenience.",
    metaTitle: "TV Rental Kallambalam | 43 Inch Smart TV for Rent | DPS Gaming Hub",
    metaDescription:
      "43-inch Smart TV on rent in Kallambalam starting ₹499/day. Doorstep delivery for events, parties, gaming setups and temporary home use. Full setup included. WhatsApp to book.",
    keywords: [
      "TV rental Kallambalam",
      "43 inch TV rental Kallambalam",
      "Smart TV rent Kallambalam",
      "television rental Kallambalam",
      "TV for rent near Kallambalam",
      "TV for party Kallambalam",
      "TV hire Kallambalam",
      "television on rent Kallambalam",
    ],
    useCases: [
      {
        title: "Wedding & Family Functions",
        desc: "Display wedding videos, family slideshows, and event content at Kallambalam community halls and homes.",
      },
      {
        title: "Cricket Screening Events",
        desc: "Set up a 43-inch Smart TV for group cricket match screenings and sporting events in Kallambalam.",
      },
      {
        title: "Gaming Setups",
        desc: "Combine with a PS5 for birthday gaming parties and tournament setups in Kallambalam.",
      },
      {
        title: "Temporary Home Use",
        desc: "Need a TV at home in Kallambalam for a short period? Our flexible plans let you rent without long-term commitments.",
      },
    ],
    landmarks: [
      "Kallambalam Junction",
      "NH66 Highway Corridor",
      "Varkala Road",
      "Vamanapuram Road",
    ],
    nearbyAreas: [
      "Kallambalam Town",
      "Vamanapuram",
      "Varkala",
      "Attingal",
      "Kilimanoor",
    ],
    contentStory:
      "Kallambalam is located along the NH66 highway corridor, making it easy for our team to deliver from the Korani hub. We provide 43-inch Smart TV rental to Kallambalam homes, event halls, and local venues. Our rental service includes full setup, delivery, and pickup — no hassle for you.",
    deliveryNote:
      "Standard delivery covers Kallambalam, Vamanapuram, and nearby areas. Additional charges may apply for longer distances. WhatsApp us with your exact location.",
    faqs: [
      {
        q: "Is TV rental available in Kallambalam?",
        a: "Yes! We deliver 43-inch Smart TVs to Kallambalam and surrounding areas starting ₹499/day with full setup included.",
      },
      {
        q: "How do I book a TV rental in Kallambalam?",
        a: "Simply WhatsApp us with your rental dates, location in Kallambalam, and preferred TV setup. We confirm within 30 minutes.",
      },
      {
        q: "Do you also provide PS5 rental in Kallambalam?",
        a: "Yes! We offer PS5 + TV combo rentals for gaming parties and events in Kallambalam.",
      },
    ],
  },

  varkala: {
    slug: "varkala",
    cityName: "Varkala",
    district: "Thiruvananthapuram",
    heroHeading: "TV Rental in Varkala | 43 Inch Smart TV for Rent",
    subheading:
      "Rent 43-inch Smart TV in Varkala for beach resorts, homestays, party events, and gaming sessions. We deliver to Varkala Cliff, North Cliff, South Cliff, and Varkala town.",
    metaTitle: "TV Rental in Varkala | 43 Inch Smart TV for Rent | DPS Gaming Hub",
    metaDescription:
      "43-inch Smart TV rental in Varkala starting ₹499/day. Delivered to resorts, homestays, party venues across Varkala Cliff & town. Full setup included. WhatsApp to book.",
    keywords: [
      "TV rental Varkala",
      "Smart TV rent Varkala",
      "43 inch TV rental Varkala",
      "TV hire Varkala Cliff",
      "television rental Varkala",
      "TV for resort Varkala",
      "TV rental Varkala beach",
      "TV rent near Varkala",
      "television on rent Varkala Kerala",
      "TV for party Varkala",
    ],
    useCases: [
      {
        title: "Resort & Homestay Events",
        desc: "Add a 43-inch Smart TV to your resort or homestay in Varkala for guest entertainment, movie nights, and sporting events.",
      },
      {
        title: "Beach House Parties",
        desc: "Enhance beach house parties at Varkala Cliff or North Cliff with a big-screen TV for gaming, movies, and sports.",
      },
      {
        title: "Yoga & Wellness Retreats",
        desc: "Use a display for guided video sessions, presentations, and event content at Varkala's wellness retreats.",
      },
      {
        title: "Birthday Celebrations",
        desc: "Host memorable birthday parties at Varkala venues with a PS5 + TV combo for an unforgettable gaming experience.",
      },
    ],
    landmarks: [
      "Varkala Cliff",
      "Janardhanaswamy Temple",
      "Varkala Railway Station",
      "Papanasam Beach",
      "Varkala Helipad",
    ],
    nearbyAreas: [
      "Varkala Cliff",
      "North Cliff",
      "South Cliff",
      "Varkala Town",
      "Kallambalam",
      "Kilimanoor",
    ],
    contentStory:
      "Varkala is one of Kerala's most popular beach destinations, attracting both tourists and locals. DPS Gaming Hub extends its TV rental service to Varkala Cliff, North Cliff, South Cliff, and Varkala town. Whether you're a resort owner looking to enhance guest experience or planning a beach house party, we deliver and set up 43-inch Smart TVs with stands directly at your venue.",
    deliveryNote:
      "We deliver to Varkala Cliff, North Cliff, South Cliff, Varkala town, and surrounding areas. Delivery charges depend on your exact location in Varkala. Contact us for a quick quote.",
    faqs: [
      {
        q: "Do you deliver TV rental to Varkala Cliff and resorts?",
        a: "Yes! We deliver 43-inch Smart TVs to Varkala Cliff, North Cliff, South Cliff, and Varkala town for resorts, homestays, and events.",
      },
      {
        q: "What is the TV rental rate in Varkala?",
        a: "TV rental in Varkala starts at ₹499/day (1 day) with multi-day rates: ₹399/day (2-3 days), ₹349/day (4-7 days), ₹299/day (7-18 days).",
      },
      {
        q: "Can you set up the TV at a beach resort in Varkala?",
        a: "Yes! Our team handles full delivery and on-site setup including the tripod stand at your Varkala resort or venue.",
      },
      {
        q: "Is PS5 rental also available in Varkala?",
        a: "Absolutely! We offer PS5 + TV combo packages perfect for beach house gaming parties and resort events in Varkala.",
      },
    ],
  },

  kilimanoor: {
    slug: "kilimanoor",
    cityName: "Kilimanoor",
    district: "Thiruvananthapuram",
    heroHeading: "TV Rental in Kilimanoor | Smart TV on Rent for Events & Home",
    subheading:
      "Rent a 43-inch Smart TV in Kilimanoor for home use, wedding functions, birthday parties, and gaming events. Doorstep delivery with setup across Kilimanoor and nearby areas.",
    metaTitle: "TV Rental in Kilimanoor | Smart TV for Rent | DPS Gaming Hub",
    metaDescription:
      "43-inch Smart TV rental in Kilimanoor from ₹499/day. We deliver to homes and events across Kilimanoor, Vamanapuram & nearby areas with full installation. WhatsApp to book.",
    keywords: [
      "TV rental Kilimanoor",
      "Smart TV rent Kilimanoor",
      "43 inch TV rental Kilimanoor",
      "television rental Kilimanoor",
      "TV for rent near Kilimanoor",
      "TV for party Kilimanoor",
      "TV hire Kilimanoor",
      "TV on rent Kilimanoor Kerala",
    ],
    useCases: [
      {
        title: "Wedding & Event Displays",
        desc: "Use a 43-inch Smart TV for photo slideshows, video greetings, and media content at wedding halls and event venues in Kilimanoor.",
      },
      {
        title: "Home Entertainment",
        desc: "Short-term Smart TV rental for home use in Kilimanoor — ideal for family occasions, guest visits, or waiting for your TV.",
      },
      {
        title: "Community Events",
        desc: "Set up a display for local community meetings, cultural programs, and public screenings in Kilimanoor.",
      },
      {
        title: "Gaming Parties",
        desc: "Rent a PS5 + TV combo for exciting gaming parties in Kilimanoor homes and party venues.",
      },
    ],
    landmarks: [
      "Kilimanoor Palace",
      "Kilimanoor Junction",
      "Kilimanoor Agricultural Farm",
      "Vamanapuram Road",
      "Kallambalam Junction",
    ],
    nearbyAreas: [
      "Kilimanoor Town",
      "Vamanapuram",
      "Kallambalam",
      "Attingal",
      "Varkala",
    ],
    contentStory:
      "Kilimanoor and surrounding areas can now access affordable 43-inch Smart TV rental through DPS Gaming Hub. We deliver from our Korani Junction hub and cover Kilimanoor, Vamanapuram, Kallambalam, and nearby panchayaths. Whether you need a TV for a wedding function at the local community hall or a weekend gaming session at home, we deliver and set up everything.",
    deliveryNote:
      "We deliver to Kilimanoor town and nearby areas including Vamanapuram and Kallambalam. Contact us to confirm delivery availability and charges for your exact location.",
    faqs: [
      {
        q: "Do you provide TV rental service in Kilimanoor?",
        a: "Yes! We deliver 43-inch Smart TVs to Kilimanoor and nearby areas including Vamanapuram and Kallambalam. Starts at ₹499/day.",
      },
      {
        q: "What is included in the TV rental in Kilimanoor?",
        a: "Every rental includes the 43-inch Smart TV, HDMI & power cables, adjustable tripod stand (on request), and complete on-site setup and pickup.",
      },
      {
        q: "How do I book a TV rental in Kilimanoor?",
        a: "WhatsApp us with your date, location in Kilimanoor, and rental duration. We confirm availability and delivery time within 30 minutes.",
      },
      {
        q: "Can I add a PS5 to my TV rental in Kilimanoor?",
        a: "Yes! A PS5 + TV combo rental is available for gaming parties and events in Kilimanoor.",
      },
    ],
  },
};

export const TV_RENTAL_LOCATIONS = [
  "Attingal",
  "Chirayinkeezhu",
  "Kazhakkoottam",
  "Vamanapuram",
  "Kallambalam",
  "Varkala",
  "Kilimanoor",
];
