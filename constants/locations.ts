export interface LocalPageData {
  slug: string;
  cityName: string;
  heroHeading: string;
  subheading: string;
  distanceInfo: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  landmarks: string[];
  highlights: string[];
  contentStory: string;
}

export const LOCAL_PAGES: Record<string, LocalPageData> = {
  attingal: {
    slug: "gaming-lounge-attingal",
    cityName: "Attingal",
    heroHeading: "Fast PS5 Console & 43\" QLED TV Rentals in Attingal",
    subheading: "Fast doorstep delivery in Attingal & 5 mins to our Korani Junction Gaming Lounge. Experience 4K console gaming, FIFA multiplayer, and event TV setups.",
    distanceInfo: "5 mins from Attingal KSRTC Bus Stand & Mamom Bridge via NH66",
    metaTitle: "PS5 & TV Rentals in Attingal | Fast Doorstep Delivery | DPS Gaming Hub",
    metaDescription: "Rent PS5 Console (₹949/day) and 43\" Smart TV (₹1,499/day, multi-day from ₹799/day) in Attingal. Superfast doorstep delivery, setup, and 24/7 gaming lounge at Korani.",
    keywords: ["PS5 Rental Attingal", "TV Rental Attingal", "Gaming Lounge Attingal", "Attingal PS5 Rental 1 Day", "Rent 43 QLED TV Attingal"],
    landmarks: ["Attingal Palace", "Attingal KSRTC Stand", "Attingal Mamom Bridge", "Korani Junction"],
    highlights: [
      "⚡ Express 30-Minute Doorstep Delivery in Attingal",
      "5-minute drive to Korani Gaming Lounge",
      "PS5 Console (₹949/day) with pre-installed games",
      "43\" Smart TV + Tripod Stand (₹1,499/day, from ₹799/day multi-day) for events & parties",
    ],
    contentStory:
      "Need a PS5 console or a 43\" QLED TV with stand delivered fast in Attingal? DPS Gaming Hub provides express delivery across Attingal town, Mamom, and Korani. Whether hosting a wedding at an Attingal auditorium, a birthday party, or a weekend gaming marathon at home, we deliver and handle full installation.",
  },
  varkala: {
    slug: "gaming-lounge-varkala",
    cityName: "Varkala",
    heroHeading: "Fast PS5 & 43\" QLED TV Rentals in Varkala Beach & Town",
    subheading: "Express doorstep delivery to resorts, homestays, events & homes in Varkala. PS5 rentals for ₹949/day & 43\" Smart TV with tripod stand from ₹1,499/day (from ₹799/day multi-day).",
    distanceInfo: "Direct fast delivery corridor connecting Korani - Kallambalam - Varkala Beach",
    metaTitle: "PS5 & TV Rental Varkala | Fast Delivery to Resorts & Events | DPS",
    metaDescription: "Rent PS5 (₹949/day) & 43\" Smart TV (from ₹1,499/day) in Varkala. Express delivery to Varkala Cliff, resorts, homestays, and birthday parties with full setup.",
    keywords: ["PS5 Rental Varkala", "TV Rental Varkala", "Rent TV Varkala Cliff", "Varkala Gaming Rental", "Resort TV Rental Varkala"],
    landmarks: ["Varkala Cliff", "Varkala Railway Station", "Janardhanaswamy Temple", "Helipad Varkala"],
    highlights: [
      "⚡ Fast Doorstep Delivery to Varkala Cliff & Resorts",
      "Perfect for beach house parties, events & homestays",
      "Heavy duty tripod stand included for 43\" QLED TV setup",
      "PS5 consoles pre-loaded with top multiplayer & 4K games",
    ],
    contentStory:
      "Organizing an event, resort party, or weekend gaming session in Varkala? DPS Gaming Hub brings fast doorstep delivery of PlayStation 5 consoles and 43\" QLED displays on heavy-duty tripod stands directly to Varkala Cliff, North/South Cliff, and surrounding areas. We handle transport, wiring, and pickup.",
  },
  venjaramoodu: {
    slug: "gaming-lounge-venjaramoodu",
    cityName: "Venjaramoodu",
    heroHeading: "Express PS5 Console & QLED TV Rental Service in Venjaramoodu",
    subheading: "Same-day doorstep rental delivery in Venjaramoodu, Pirappancode & Gokulam Medical College region. PS5 from ₹949/day and 43\" Smart TV from ₹1,499/day (multi-day from ₹799/day).",
    distanceInfo: "Fast 12-minute highway connection from Korani Junction to Venjaramoodu",
    metaTitle: "PS5 & TV Rentals Venjaramoodu | Express Delivery | DPS Gaming Hub",
    metaDescription: "Looking for fast PS5 console or 43\" QLED TV rentals in Venjaramoodu? DPS Gaming Hub offers fast doorstep delivery, installation, and 24/7 support.",
    keywords: ["PS5 Rental Venjaramoodu", "TV Rental Venjaramoodu", "Venjaramoodu Event Display", "Gaming Lounge Venjaramoodu"],
    landmarks: ["Venjaramoodu Junction", "Gokulam Medical College", "Pirappancode", "Kowdiar Highway Corridor"],
    highlights: [
      "⚡ Express Delivery across Venjaramoodu & Pirappancode",
      "Ideal for weddings, college events & home gaming",
      "Includes controllers, games, tripod stand & cables",
      "12-minute drive to our 24/7 Korani PS5 Lounge",
    ],
    contentStory:
      "DPS Gaming Hub brings fast delivery of PS5 consoles and event QLED displays to Venjaramoodu. Whether you are hosting a wedding function at a Venjaramoodu convention center or chilling with friends on the weekend, we deliver fast and handle complete installation.",
  },
  chirayinkeezhu: {
    slug: "gaming-lounge-chirayinkeezhu",
    cityName: "Chirayinkeezhu",
    heroHeading: "Fast Doorstep PS5 & 43\" QLED TV Rentals in Chirayinkeezhu",
    subheading: "Quick 8-minute delivery corridor from Korani to Chirayinkeezhu, Sharkara & Kadakkavoor. Rent PS5 for ₹949/day & Smart TV from ₹1,499/day (multi-day from ₹799/day).",
    distanceInfo: "8 mins from Chirayinkeezhu Railway Station via Korani Road",
    metaTitle: "PS5 & TV Rentals Chirayinkeezhu | Fast Doorstep Delivery",
    metaDescription: "Rent PS5 Console & 43\" QLED TV with Tripod Stand in Chirayinkeezhu. Fast delivery, transport, setup, and 24/7 support from DPS Gaming Hub.",
    keywords: ["PS5 Rental Chirayinkeezhu", "TV Rental Chirayinkeezhu", "Chirayinkeezhu Console Gaming", "Sharkara Event Rental"],
    landmarks: ["Chirayinkeezhu Railway Station", "Sharkara Temple", "Kadakkavoor", "Perunguzhi"],
    highlights: [
      "⚡ 8-Minute Express Delivery from Korani Hub",
      "Full installation of 43\" QLED TV with tripod stand",
      "Pre-loaded PS5 consoles with 2 DualSense controllers",
      "Perfect for local wedding halls & birthday parties",
    ],
    contentStory:
      "Chirayinkeezhu residents can now get next-gen PS5 gaming consoles and 43\" QLED event displays delivered to their doorstep in under 30 minutes! Located just down the road from our Korani hub, we ensure fast setup and prompt pickup.",
  },
  kattakada: {
    slug: "gaming-lounge-kattakada",
    cityName: "Kattakada",
    heroHeading: "Fast PS5 Console & 43\" QLED TV Rental Delivery in Kattakada",
    subheading: "Express delivery of PS5 consoles and 43\" QLED TVs with tripod stands across Kattakada, Malayinkeezhu & Neyyar region.",
    distanceInfo: "Direct delivery service across Kattakada town & surrounding Panchayaths",
    metaTitle: "PS5 & TV Rental Kattakada | Fast Delivery | DPS Gaming Hub",
    metaDescription: "Rent PS5 Console (₹949/day) & 43\" Smart TV with Stand (from ₹1,499/day, multi-day from ₹799/day) in Kattakada. Doorstep delivery, full installation, and 24/7 technical assistance.",
    keywords: ["PS5 Rental Kattakada", "TV Rental Kattakada", "Kattakada Event Display", "Console Rental Kattakada"],
    landmarks: ["Kattakada Bus Stand", "Malayinkeezhu", "Neyyar Dam Road", "Killi"],
    highlights: [
      "⚡ Fast Doorstep Delivery to Kattakada & Malayinkeezhu",
      "Heavy duty tripod stand & transport for 43\" QLED TV included",
      "PS5 console pre-loaded with top 4K multiplayer games",
      "Ideal for family celebrations, birthdays & corporate functions",
    ],
    contentStory:
      "DPS Gaming Hub extends fast doorstep console and display rental delivery to Kattakada. Enjoy hassle-free delivery of PlayStation 5 consoles (₹949/day) and 43\" Smart TVs (from ₹1,499/day) complete with heavy-duty tripod stands for any occasion.",
  },
  kazhakkoottam: {
    slug: "gaming-lounge-kazhakkoottam",
    cityName: "Kazhakkoottam",
    heroHeading: "Fast PS5 & TV Rentals near Kazhakkoottam & Technopark",
    subheading: "Express delivery across Kazhakkoottam, Kariavattom, Menamkulam & 10 mins to our Korani Lounge. PS5 from ₹949/day, Smart TV from ₹1,499/day (multi-day from ₹799/day).",
    distanceInfo: "10 mins north from Kazhakkoottam Junction along NH66 Highway",
    metaTitle: "PS5 & TV Rentals Kazhakkoottam | Express Delivery | DPS",
    metaDescription: "Premier PS5 Console & 43\" QLED TV Rentals near Kazhakkoottam. High-resolution displays, DualSense Edge gear, late night sessions, and multiplayer tournaments.",
    keywords: ["PS5 Rental Kazhakkoottam", "TV Rental Kazhakkoottam", "Gaming Lounge Kazhakkoottam", "Kazhakkoottam Console Gaming"],
    landmarks: ["Kazhakkoottam Flyover", "Technopark Campus", "Sainik School Kazhakkoottam", "Mangalapuram"],
    highlights: [
      "⚡ Fast 15-Minute Highway Delivery to Kazhakkoottam",
      "Late night weekend lounge sessions open 24/7",
      "High speed ultra-low latency fiber connection",
      "Complimentary transport & installation for event displays",
    ],
    contentStory:
      "Engineered for techies and gamers in Kazhakkoottam who value precision, luxury, and high-performance hardware. DPS Gaming Hub offers fast doorstep rentals and private lounge station bookings at Korani.",
  },
  technopark: {
    slug: "gaming-lounge-technopark",
    cityName: "Technopark Trivandrum",
    heroHeading: "Premium Tech & Gaming Rentals for Technopark Engineers",
    subheading: "Unwind after long tech sprints. Fast doorstep PS5 & 43\" QLED TV rentals for IT team events, phase 1, 2 & 3 campuses, and apartments.",
    distanceInfo: "12 mins drive from Technopark Main Gate Phase 1",
    metaTitle: "PS5 & TV Rentals near Technopark Trivandrum | DPS Gaming Hub",
    metaDescription: "Best PS5 & 43\" QLED TV Rentals near Technopark Kazhakkoottam. De-stress with 4K gaming, night passes, and corporate squad tournaments.",
    keywords: ["PS5 Rental Technopark", "TV Rental Technopark", "Technopark Event TV", "Technopark Gaming Club"],
    landmarks: ["Technopark Phase 1 Gate", "UST Global Campus", "Infosys Trivandrum", "Technopark Phase 3"],
    highlights: [
      "⚡ Fast delivery to Technopark Phase 1, 2, 3 & Technocity",
      "Corporate event & expo 43\" QLED TV setup with tripod stands",
      "Ergonomic executive reclining chairs in our Korani Lounge",
      "Night Owl passes running 24/7 for IT professionals",
    ],
    contentStory:
      "Created by Digital Product Solutions, a parent company deeply rooted in software design and technology. DPS Gaming Hub brings fast console and display rentals to Technopark software engineers.",
  },
  trivandrum: {
    slug: "gaming-lounge-trivandrum",
    cityName: "Thiruvananthapuram (Trivandrum)",
    heroHeading: "Fast PS5 & 43\" QLED TV Rental Delivery in Trivandrum",
    subheading: "District-wide fast doorstep delivery across Attingal, Kazhakkoottam, Venjaramoodu, Varkala, Chirayinkeezhu, Kattakada & Trivandrum City.",
    distanceInfo: "Hub located at Korani Junction on NH66 with district-wide fast delivery",
    metaTitle: "PS5 & 43\" QLED TV Rentals Trivandrum | DPS Gaming Hub",
    metaDescription: "Trivandrum's premier PS5 & TV rental service. Experience fast doorstep delivery, 4K displays, DualSense controllers, and 24/7 gaming lounge.",
    keywords: ["PS5 Rental Trivandrum", "TV Rental Trivandrum", "Gaming Lounge Trivandrum", "Rent QLED TV Trivandrum"],
    landmarks: ["Lulu Mall Trivandrum", "Technopark Trivandrum", "Attingal KSRTC", "Trivandrum Central"],
    highlights: [
      "⚡ Fast Same-Day Doorstep Delivery across all Trivandrum hubs",
      "PS5 Console Rental for ₹949/day (Latest Games included)",
      "43\" Smart TV + Tripod Stand from ₹1,499/day (Transport & Setup included; >7 days from ₹499/day)",
      "Powered by Digital Product Solutions (digitalproductsolutions.in)",
    ],
    contentStory:
      "Trivandrum has a vibrant community of gamers, event planners, and families. DPS Gaming Hub provides fast doorstep delivery of PS5 consoles and 43\" QLED TVs across Attingal, Venjaramoodu, Varkala, Chirayinkeezhu, Kattakada, Kazhakkoottam, and Trivandrum City.",
  },
  pothencode: {
    slug: "gaming-lounge-pothencode",
    cityName: "Pothencode",
    heroHeading: "Fast PS5 Console & 43\" Smart TV Rentals in Pothencode",
    subheading: "Express doorstep delivery in Pothencode, Santhigiri, Kattayikonam & Vembayam corridor. Rent PS5 for ₹949/day & 43\" Smart TV from ₹1,499/day (longer rentals from ₹499/day).",
    distanceInfo: "10 mins from Pothencode Junction to our Korani Lounge via NH66 link",
    metaTitle: "PS5 & TV Rental in Pothencode | Doorstep Delivery | DPS Gaming Hub",
    metaDescription: "Rent PS5 (₹949/day) & 43\" Smart TV (₹1,499/day, long term from ₹499/day) in Pothencode. Fast doorstep delivery, full setup for events, birthdays & gaming marathons.",
    keywords: ["PS5 Rental Pothencode", "TV Rental Pothencode", "Smart TV for rent Pothencode", "Pothencode Gaming Rental", "Playstation rent Pothencode"],
    landmarks: ["Pothencode Junction", "Santhigiri Ashram", "Kattayikonam", "Vembayam Road"],
    highlights: [
      "⚡ Express Doorstep Delivery to Pothencode & Santhigiri",
      "PS5 Console (₹949/day) with pre-installed top 4K games",
      "43\" Smart TV + Tripod Stand (from ₹499/day long term, 1-day ₹1,499)",
      "Full transportation, cable wiring & on-site setup included",
    ],
    contentStory:
      "Hosting a family function, birthday party, or weekend gaming tournament in Pothencode? DPS Gaming Hub provides fast delivery of PlayStation 5 consoles and 43\" Smart TVs with heavy-duty tripod stands across Pothencode, Santhigiri, and Kattayikonam. Our delivery technicians handle everything from setup to pickup.",
  },
  mangalapuram: {
    slug: "gaming-lounge-mangalapuram",
    cityName: "Mangalapuram",
    heroHeading: "PS5 Console & 43\" Smart TV Rentals in Mangalapuram",
    subheading: "Ultra-fast 5-minute delivery to Mangalapuram, Life Science Park, Technocity & Thonnakkal. PS5 from ₹949/day & 43\" Smart TV from ₹1,499/day (long term from ₹499/day).",
    distanceInfo: "Just 5 minutes from Korani Junction on NH66 — fastest delivery zone",
    metaTitle: "PS5 & TV Rental Mangalapuram | 5-Min Delivery | DPS Gaming Hub",
    metaDescription: "Rent PS5 Console (₹949/day) & 43\" Smart TV (from ₹1,499/day, >7 days ₹499/day) in Mangalapuram. Ultra-fast doorstep delivery to Technocity & Life Science Park.",
    keywords: ["PS5 Rental Mangalapuram", "TV Rental Mangalapuram", "Smart TV rent Mangalapuram", "Gaming Hub Mangalapuram", "Technocity TV rental"],
    landmarks: ["Mangalapuram Junction", "Bio 360 Life Sciences Park", "Technocity Campus", "Thonnakkal"],
    highlights: [
      "⚡ 5-Minute Highway Delivery from Korani Hub",
      "PS5 Console (₹949/day) with 2 DualSense controllers",
      "43\" Smart TV on tripod stand for Technocity corporate events & expos",
      "Zero hassle transport, installation & support",
    ],
    contentStory:
      "Mangalapuram is right next door to our Korani Junction hub along NH66. Whether you are working at Technocity or Bio 360 Life Sciences Park needing a display for a presentation, or an apartment resident setting up a weekend gaming party, DPS Gaming Hub delivers within minutes.",
  },
  alamcode: {
    slug: "gaming-lounge-alamcode",
    cityName: "Alamcode",
    heroHeading: "Fast PS5 & 43\" Smart TV Rental Delivery in Alamcode",
    subheading: "Express doorstep rental delivery across Alamcode, Attingal Bypass, Mamom & Kadakkavoor. Rent PS5 for ₹949/day & Smart TV from ₹1,499/day (longer rentals from ₹499/day).",
    distanceInfo: "5 mins from Alamcode Junction & Attingal bypass to Korani Hub",
    metaTitle: "PS5 & TV Rental in Alamcode | Fast Doorstep Delivery | DPS",
    metaDescription: "Rent PS5 (₹949/day) & 43\" Smart TV with Stand (from ₹1,499/day, multi-day from ₹499/day) in Alamcode Attingal. Free setup & delivery for weddings, birthdays & events.",
    keywords: ["PS5 Rental Alamcode", "TV Rental Alamcode", "Smart TV rent Alamcode", "Alamcode Attingal TV hire", "Playstation rent Alamcode"],
    landmarks: ["Alamcode Junction", "Attingal Bypass", "Mamom Bridge", "Moonnumukku"],
    highlights: [
      "⚡ 5-Minute Delivery across Alamcode & Attingal Bypass",
      "PS5 console pre-loaded with top multiplayer & 4K games",
      "43\" Smart TV with sturdy tripod stand for weddings & family events",
      "Full doorstep installation, cable kit & collection included",
    ],
    contentStory:
      "Residents and event venues in Alamcode can now rent 43\" Smart TVs and PS5 consoles with ultra-fast doorstep service. Located right beside Attingal along NH66, we ensure deliveries arrive within 30 minutes with complete stand assembly and cable configuration.",
  },
  pallippuram: {
    slug: "gaming-lounge-pallippuram",
    cityName: "Pallippuram",
    heroHeading: "Fast PS5 Console & 43\" Smart TV Rentals in Pallippuram",
    subheading: "Rapid delivery across Pallippuram, CRPF Camp, Technocity, Kaniyapuram & NH66. PS5 rentals for ₹949/day & 43\" Smart TV from ₹1,499/day (long term from ₹499/day).",
    distanceInfo: "8 minutes from Korani Junction heading south towards Technopark",
    metaTitle: "PS5 & TV Rental Pallippuram | Fast Doorstep Delivery | DPS",
    metaDescription: "Rent PS5 (₹949/day) & 43\" Smart TV (₹1,499/day, long term from ₹499/day) in Pallippuram. Doorstep delivery with full stand setup for events, CRPF quarters & homes.",
    keywords: ["PS5 Rental Pallippuram", "TV Rental Pallippuram", "Smart TV rent Pallippuram", "Pallippuram Console Gaming", "TV hire Pallippuram Trivandrum"],
    landmarks: ["Pallippuram CRPF Camp", "Technocity Main Entrance", "Kaniyapuram Junction", "Pallippuram High School"],
    highlights: [
      "⚡ 8-Minute Highway Delivery to Pallippuram & CRPF Camp",
      "PS5 Console (₹949/day) with 2 DualSense controllers & FIFA / EA Sports",
      "43\" Smart TV on tripod stand for community & family celebrations",
      "Professional setup, wiring, testing & convenient pickup",
    ],
    contentStory:
      "DPS Gaming Hub brings quick-turnaround PS5 and 43\" Smart TV rental delivery to Pallippuram, CRPF residential quarters, and Kaniyapuram. Enjoy crystal-clear 4K gaming and high-definition event displays without the cost of owning.",
  },
  kilimanoor: {
    slug: "gaming-lounge-kilimanoor",
    cityName: "Kilimanoor",
    heroHeading: "PS5 Console & 43\" Smart TV Rentals in Kilimanoor",
    subheading: "Doorstep rental delivery across Kilimanoor Palace, KSRTC Stand, Vamanapuram & MC Road. Rent PS5 for ₹949/day & Smart TV from ₹1,499/day (longer rentals from ₹499/day).",
    distanceInfo: "15 mins direct highway corridor to Kilimanoor via MC Road",
    metaTitle: "PS5 & TV Rentals Kilimanoor | Doorstep Delivery | DPS Gaming Hub",
    metaDescription: "Rent PS5 (₹949/day) & 43\" Smart TV (from ₹1,499/day, long term from ₹499/day) in Kilimanoor. Free installation for weddings, birthdays & local events.",
    keywords: ["PS5 Rental Kilimanoor", "TV Rental Kilimanoor", "Smart TV rent Kilimanoor", "Kilimanoor Console Gaming", "TV for party Kilimanoor"],
    landmarks: ["Kilimanoor Palace", "Kilimanoor KSRTC Bus Stand", "Raja Ravi Varma Art Village", "Kilimanoor Junction"],
    highlights: [
      "⚡ Fast Doorstep Delivery to Kilimanoor Town & Surroundings",
      "Heavy duty tripod stand & cables included for 43\" Smart TV",
      "PS5 console pre-loaded with top 4K action & multiplayer titles",
      "Ideal for auditorium weddings, birthday parties & house functions",
    ],
    contentStory:
      "Kilimanoor has a thriving community with numerous cultural halls, auditoriums, and private homes. DPS Gaming Hub brings fast doorstep delivery of PS5 consoles and 43\" Smart TVs with stands to Kilimanoor for weddings, family celebrations, and gaming tournaments.",
  },
};
