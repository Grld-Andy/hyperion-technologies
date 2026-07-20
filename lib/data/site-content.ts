// Placeholder content clearly marked for easy replacement with real data.

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  program: string;
};

// PLACEHOLDER TESTIMONIALS — replace with real student quotes (with permission) when available.
export const testimonials: Testimonial[] = [
  {
    name: "Sample Student A",
    role: "CCNA Graduate",
    quote:
      "Placeholder testimonial — the hands-on labs made routing and switching finally click for me. Replace with a real student quote.",
    program: "Cisco CCNA",
  },
  {
    name: "Sample Student B",
    role: "CompTIA A+ Graduate",
    quote:
      "Placeholder testimonial — I went from no IT background to my first help desk role within months. Replace with a real student quote.",
    program: "CompTIA A+",
  },
  {
    name: "Sample Student C",
    role: "CCNP Candidate",
    quote:
      "Placeholder testimonial — the instructors explain enterprise concepts in a way that actually sticks. Replace with a real student quote.",
    program: "Cisco CCNP",
  },
];

export type StatItem = { label: string; value: string };

// PLACEHOLDER STATS — replace with verified figures before launch.
export const stats: StatItem[] = [
  { label: "Students Trained", value: "500+" },
  { label: "Years Teaching Experience", value: "10+" },
  { label: "Certification Tracks", value: "5" },
  { label: "Curricula Taught", value: "4" },
];

export type GalleryCategory =
  | "Cisco Training"
  | "CompTIA Training"
  | "Networking Labs"
  | "Graduation"
  | "Practical Sessions"
  | "Events";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  title: string;
  folder: string; // maps to /public/images/gallery/{folder}
};

// PLACEHOLDER GALLERY ENTRIES — each renders as a labeled placeholder tile.
// Replace by dropping a real photo into the matching /public/images/gallery/{folder} path
// and updating the `src` wiring in components/gallery/GalleryGrid.tsx.
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Networking Labs", title: "Structured cabling lab session", folder: "students" },
  { id: "g2", category: "Cisco Training", title: "Students configuring Cisco routers", folder: "courses" },
  { id: "g3", category: "CompTIA Training", title: "Hardware troubleshooting workshop", folder: "courses" },
  { id: "g4", category: "Networking Labs", title: "Server room walkthrough", folder: "students" },
  { id: "g5", category: "Graduation", title: "Certification cohort graduation", folder: "students" },
  { id: "g6", category: "Practical Sessions", title: "Instructor-led switching lab", folder: "students" },
  { id: "g7", category: "Events", title: "Open day at Hyperion Technologies", folder: "students" },
  { id: "g8", category: "Cisco Training", title: "Packet Tracer simulation class", folder: "courses" },
  { id: "g9", category: "Networking Labs", title: "Team troubleshooting exercise", folder: "students" },
  { id: "g10", category: "CompTIA Training", title: "PC hardware build session", folder: "courses" },
  { id: "g11", category: "Practical Sessions", title: "VLAN configuration practicum", folder: "students" },
  { id: "g12", category: "Graduation", title: "Certificate presentation ceremony", folder: "students" },
];

export type VideoCategory =
  | "Cisco Networking"
  | "Routing & Switching"
  | "Network Cabling"
  | "IP Addressing"
  | "VLAN Configuration"
  | "Packet Tracer"
  | "Network Security"
  | "Data Center"
  | "Wireless Networking"
  | "Troubleshooting"
  | "CompTIA Network+"
  | "Computer Hardware"
  | "Systems Administration";

export type VideoItem = {
  id: string;
  title: string;
  category: VideoCategory;
  duration: string;
  description: string;
  featured?: boolean;
};

// PLACEHOLDER VIDEO ENTRIES — each renders as a labeled placeholder player.
// Replace by wiring a real embeddable video URL (e.g. your own YouTube upload)
// into components/videos/VideoPlayer.tsx.
export const videos: VideoItem[] = [
  { id: "v1", title: "Introduction to Cisco Networking", category: "Cisco Networking", duration: "12:30", description: "A beginner-friendly walkthrough of core Cisco networking concepts.", featured: true },
  { id: "v2", title: "Routing & Switching Fundamentals", category: "Routing & Switching", duration: "18:45", description: "How routers and switches move traffic across a network." },
  { id: "v3", title: "Structured Network Cabling Basics", category: "Network Cabling", duration: "9:15", description: "Cable types, termination standards, and best practices." },
  { id: "v4", title: "IP Addressing & Subnetting Explained", category: "IP Addressing", duration: "22:10", description: "A practical approach to subnetting without the guesswork." },
  { id: "v5", title: "VLAN Configuration Walkthrough", category: "VLAN Configuration", duration: "15:00", description: "Segmenting a network with VLANs, step by step." },
  { id: "v6", title: "Cisco Packet Tracer for Beginners", category: "Packet Tracer", duration: "20:05", description: "Getting comfortable simulating networks before touching real gear." },
  { id: "v7", title: "Network Security Essentials", category: "Network Security", duration: "16:40", description: "Core principles for protecting network infrastructure." },
  { id: "v8", title: "Data Center Technologies Overview", category: "Data Center", duration: "14:20", description: "How modern data centers are structured and operated." },
  { id: "v9", title: "Wireless Networking Fundamentals", category: "Wireless Networking", duration: "13:55", description: "Wireless standards, design, and common pitfalls." },
  { id: "v10", title: "Systematic Network Troubleshooting", category: "Troubleshooting", duration: "19:30", description: "A repeatable method for diagnosing network issues." },
  { id: "v11", title: "CompTIA Network+ Study Roadmap", category: "CompTIA Network+", duration: "11:05", description: "How to structure your Network+ preparation." },
  { id: "v12", title: "Computer Hardware Fundamentals", category: "Computer Hardware", duration: "17:15", description: "Core components every technician should know cold." },
];

export type FAQItem = { question: string; answer: string; category: "General" | "Enrollment" | "Certification" | "Services" };

export const generalFaqs: FAQItem[] = [
  { category: "General", question: "Where is Hyperion Technologies located?", answer: "We're based in Wiaboman, Pambros Station, Weija District, Accra, Ghana." },
  { category: "General", question: "Do you offer both in-person and remote training?", answer: "Yes — we offer instructor-led in-person sessions and flexible remote/self-paced options depending on the program." },
  { category: "Enrollment", question: "How do I enroll in a certification program?", answer: "Reach out through our contact page, WhatsApp, or by calling us directly, and our team will walk you through available intakes and pricing." },
  { category: "Enrollment", question: "Do you offer payment plans?", answer: "Payment options vary by program — contact us directly to discuss what's available for your chosen course." },
  { category: "Certification", question: "Do you administer the official certification exams?", answer: "No. Official Cisco and CompTIA exams are delivered through Pearson VUE testing centers. We prepare you for the exam; booking happens directly with Pearson VUE or the relevant official provider." },
  { category: "Certification", question: "Which certification should I start with?", answer: "It depends on your background and goals. CompTIA A+ or Network+ suit complete beginners; CCNA is a strong direct entry point if you're focused on networking specifically. Our instructors can advise based on a short conversation." },
  { category: "Services", question: "Do you offer IT services beyond training?", answer: "Yes — networking, systems administration, graphics design, website and application development, printing, internet cafe, and mobile money services are all available." },
];
