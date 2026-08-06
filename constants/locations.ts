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
    heroHeading: "The Ultimate PS5 Gaming Lounge near Attingal",
    subheading: "Located just 5 minutes away at Korani Junction. Experience Ultra High-Definition console gaming, FIFA & eFootball multiplayer, and luxury lounge comfort.",
    distanceInfo: "5 mins from Attingal KSRTC Bus Stand via NH66",
    metaTitle: "PS5 Gaming Lounge in Attingal | DPS Gaming Hub Korani",
    metaDescription: "Looking for the best PS5 Gaming Lounge in Attingal? DPS Gaming Hub in Korani offers Ultra High-Definition gaming setups, tournaments, and luxury seating.",
    keywords: ["Gaming Lounge Attingal", "PS5 Near Attingal", "Gaming Hub Attingal", "Attingal Console Gaming", "Best Gaming Centre Attingal"],
    landmarks: ["Attingal Palace", "Attingal KSRTC Stand", "Attingal Mamom Bridge", "Korani Junction"],
    highlights: [
      "5-minute drive from central Attingal",
      "Dedicated Ultra High-Definition Gaming Stations",
      "Weekly EA FC 24 & Tekken 8 Local League Matches",
      "Spacious free vehicle parking on highway front",
    ],
    contentStory:
      "Gamers in Attingal no longer have to settle for basic gaming cafés. DPS Gaming Hub brings Apple-grade luxury technology right to your doorstep at Korani Junction. Whether you are challenging friends to EA FC 24 after college or taking on God of War Ragnarök in high frame rates, our lounge sets the gold standard for gaming in Trivandrum district.",
  },
  kazhakkoottam: {
    slug: "gaming-lounge-kazhakkoottam",
    cityName: "Kazhakkoottam",
    heroHeading: "Luxury PS5 Console Gaming Hub near Kazhakkoottam",
    subheading: "Step into Kerala's cleanest technology gaming lounge. Located 10 minutes north of Kazhakkoottam at Korani Junction.",
    distanceInfo: "10 mins north from Kazhakkoottam Junction along NH66 Highway",
    metaTitle: "PS5 Gaming Lounge near Kazhakkoottam | DPS Gaming Hub",
    metaDescription: "Premier PS5 Gaming Lounge near Kazhakkoottam. High-resolution displays, DualSense Edge gear, late night sessions, and multiplayer tournaments.",
    keywords: ["Gaming Lounge Kazhakkoottam", "PS5 Gaming Kazhakkoottam", "Gaming Hub Kazhakkoottam", "Kazhakkoottam Gaming Centre"],
    landmarks: ["Kazhakkoottam Flyover", "Technopark Campus", "Sainik School Kazhakkoottam", "Mangalapuram"],
    highlights: [
      "Quick 10-minute highway drive from Kazhakkoottam",
      "Late night weekend gaming open until 1:00 AM",
      "High speed ultra-low latency fiber connection",
      "Complimentary premium beverages & lounge service",
    ],
    contentStory:
      "Engineered for gamers in Kazhakkoottam who value precision, luxury, and high-performance hardware. DPS Gaming Hub offers private dual-player booths, high-resolution VRR displays, and acoustic dampening for the ultimate immersive session.",
  },
  technopark: {
    slug: "gaming-lounge-technopark",
    cityName: "Technopark Trivandrum",
    heroHeading: "Premium Tech & Gaming Retreat for Technopark Engineers",
    subheading: "Unwind after long tech sprints. Premium PS5 setups, ergonomic seating, and late-night weekend lounge passes just 12 minutes from Phase 1, 2 & 3.",
    distanceInfo: "12 mins drive from Technopark Main Gate Phase 1",
    metaTitle: "PS5 Gaming Lounge near Technopark Trivandrum | DPS Gaming Hub",
    metaDescription: "Best PS5 Gaming Lounge near Technopark Kazhakkoottam. De-stress with Ultra High-Definition gaming, night passes, and corporate squad tournaments.",
    keywords: ["Gaming Lounge Technopark", "Gaming Near Technopark", "Technopark Gaming Club", "Console Lounge Kazhakkoottam", "Trivandrum Tech Gaming"],
    landmarks: ["Technopark Phase 1 Gate", "UST Global Campus", "Infosys Trivandrum", "Technopark Phase 3"],
    highlights: [
      "Tailored for IT professionals and engineering teams",
      "Corporate weekend squad bookings & tournament hostings",
      "Ergonomic executive reclining chairs with lumbar support",
      "Night Owl passes running until 1:00 AM on Fridays & Saturdays",
    ],
    contentStory:
      "Created by Digital Product Solutions, a parent company deeply rooted in software design and technology. DPS Gaming Hub brings a refined Apple Store aesthetic to gaming culture near Technopark.",
  },
  trivandrum: {
    slug: "gaming-lounge-trivandrum",
    cityName: "Thiruvananthapuram (Trivandrum)",
    heroHeading: "Kerala's Top Rated Luxury PS5 Gaming Lounge in Trivandrum",
    subheading: "Elevating Trivandrum's gaming ecosystem with cutting-edge console technology, sleek dark interior design, and esports events.",
    distanceInfo: "Located at Korani, on the main NH66 corridor connecting Trivandrum city to Attingal",
    metaTitle: "DPS Gaming Hub | Best PS5 Gaming Lounge in Trivandrum, Kerala",
    metaDescription: "Trivandrum's premier PS5 gaming lounge. Experience Ultra High-Definition displays, DualSense controllers, community tournaments, and luxury memberships.",
    keywords: ["Gaming Lounge Trivandrum", "PS5 Gaming Hub Trivandrum", "Best Gaming Lounge Trivandrum", "Console Gaming Trivandrum", "Trivandrum Esports"],
    landmarks: ["Lulu Mall Trivandrum", "Technopark Trivandrum", "Attingal KSRTC", "Trivandrum Central"],
    highlights: [
      "Ranked #1 for display quality and input lag reduction in Trivandrum",
      "Official esports arena for EA FC 24 and Tekken 8 statewide qualifiers",
      "VIP Membership programs with exclusive booking privileges",
      "Apple meets PlayStation aesthetic with zero visual clutter",
    ],
    contentStory:
      "Trivandrum has a vibrant community of gamers, esports competitors, and console enthusiasts. DPS Gaming Hub provides a sanctuary where technology meets refined luxury, setting a new benchmark across South India.",
  },
  kerala: {
    slug: "gaming-lounge-kerala",
    cityName: "Kerala State",
    heroHeading: "Kerala's Benchmark for Next-Gen Console Gaming Lounges",
    subheading: "The gold standard of console gaming experience in God's Own Country. Designed by Digital Product Solutions.",
    distanceInfo: "Korani Highway Node, Thiruvananthapuram, Kerala",
    metaTitle: "Kerala's Premium PS5 Gaming Lounge | DPS Gaming Hub",
    metaDescription: "Discover Kerala's most luxurious PS5 gaming lounge. Ultra High-Definition displays, high-speed fiber internet, esports tournaments, and Apple-grade design.",
    keywords: ["Gaming Lounge Kerala", "PS5 Gaming Lounge Kerala", "Console Gaming Kerala", "Best Gaming Hub Kerala", "Esports Kerala"],
    landmarks: ["NH66 Highway Corridor", "Trivandrum International Airport", "Technopark Campus", "Kowdiar"],
    highlights: [
      "Award-worthy minimal dark design language",
      "State-of-the-art display technology",
      "Comprehensive local SEO and digital reservation platform",
      "Powered by Digital Product Solutions",
    ],
    contentStory:
      "From Kasaragod to Thiruvananthapuram, gaming spaces are evolving. DPS Gaming Hub leads this revolution by replacing noisy, cramped rooms with an Apple-inspired luxury retreat where design, comfort, and performance unite.",
  },
};
