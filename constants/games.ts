export interface GameItem {
  id: string;
  title: string;
  category: "Sports" | "Action" | "Fighting" | "Racing" | "Co-op" | "FPS";
  players: string;
  fps: string;
  resolution: string;
  badge?: string;
  description: string;
  image: string;
}

export const GAMES_LIBRARY: GameItem[] = [
  {
    id: "ea-fc-24",
    title: "EA SPORTS FC 24",
    category: "Sports",
    players: "1 - 4 Local Co-op",
    fps: "120 FPS",
    resolution: "4K HDR",
    badge: "Most Popular",
    description: "HyperMotionV technology with authentic player motion. The ultimate 4K competitive football experience on PS5.",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tekken-8",
    title: "Tekken 8",
    category: "Fighting",
    players: "1 - 2 Players",
    fps: "60 FPS Locked",
    resolution: "4K HDR",
    badge: "Tournament Special",
    description: "Next-gen fighting graphics powered by Unreal Engine 5 with ultra-low latency DualSense input.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    category: "Action",
    players: "Single Player",
    fps: "120 FPS HFR Mode",
    resolution: "Dynamic 4K",
    badge: "Masterpiece",
    description: "Immerse in Nine Realms with haptic feedback vibrations and Tempest 3D Audio Tech.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "spiderman-2",
    title: "Marvel's Spider-Man 2",
    category: "Action",
    players: "Single Player",
    fps: "120 FPS VRR",
    resolution: "4K Ray Tracing",
    badge: "PS5 Exclusive",
    description: "Instant web-swinging load times with high-frame-rate performance modes and DualSense trigger tension.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gt-7",
    title: "Gran Turismo 7",
    category: "Racing",
    players: "1 - 2 Split Screen",
    fps: "120 FPS VRR",
    resolution: "4K Ray Tracing",
    badge: "Pro Sim",
    description: "Real Driving Simulator with DualSense adaptive triggers mimicking brake pressure and road friction.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mortal-kombat-1",
    title: "Mortal Kombat 1",
    category: "Fighting",
    players: "1 - 2 Players",
    fps: "60 FPS Locked",
    resolution: "4K HDR",
    badge: "1v1 Arena",
    description: "Reborn Mortal Kombat universe featuring Kameo fighters, visceral bone-crushing haptics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "call-of-duty-mw3",
    title: "Call of Duty: Modern Warfare III",
    category: "FPS",
    players: "Online & Split Screen",
    fps: "120 FPS High Speed",
    resolution: "4K Ultra",
    badge: "120Hz E-Sports",
    description: "Competitive low-latency 120Hz multiplayer shooting with zero input delay on OLED panels.",
    image: "https://images.unsplash.com/photo-1552824724-3670a2491a67?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "it-takes-two",
    title: "It Takes Two",
    category: "Co-op",
    players: "2 Players Co-op",
    fps: "60 FPS",
    resolution: "4K HDR",
    badge: "Co-op Favorite",
    description: "The GOTY co-op adventure built purely for 2 players sharing the couch and screen.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
  },
];
