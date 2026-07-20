// Central place for company/brand facts used across the site.
// Update phone, email, address, and social links here — everything else references this file.

export const SITE = {
  name: "Hyperion Technologies",
  shortName: "Hyperion",
  domain: "https://www.hyperiontechnologies.com", // TODO: replace with your live domain once purchased/connected
  tagline: "Empowering People. Advancing Technology.",
  description:
    "Hyperion Technologies delivers professional Cisco and CompTIA certification training and full-spectrum IT services in Accra, Ghana — networking, systems administration, graphics design, and application development.",
  founded: 2014, // TODO: replace with actual founding year if different
};

export const CONTACT = {
  phone: "0551465014",
  phoneIntl: "+233551465014", // used for tel: and WhatsApp links
  email: "info@hyperiontechnologies.com", // TODO: replace with real email address
  whatsapp: "233551465014",
  address: {
    line1: "Wiaboman, Pambros Station",
    line2: "Weija District",
    city: "Accra",
    country: "Ghana, West Africa",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Weija,+Accra,+Ghana&output=embed", // TODO: swap for exact pinned location once available
  mapLink: "https://www.google.com/maps/search/?api=1&query=Weija+Accra+Ghana",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const SOCIAL = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "YouTube", href: "#" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "The Founder", href: "/about/founder" },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Certifications",
    href: "/certifications",
    children: [
      { label: "All Certifications", href: "/certifications" },
      { label: "Cisco Training", href: "/cisco-training" },
      { label: "CompTIA Training", href: "/comptia-training" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "The Founder", href: "/about/founder" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  training: [
    { label: "Cisco CCNA", href: "/certifications/ccna" },
    { label: "Cisco CCNP", href: "/certifications/ccnp" },
    { label: "Cisco CCIE", href: "/certifications/ccie" },
    { label: "CompTIA A+", href: "/certifications/comptia-a-plus" },
    { label: "CompTIA Network+", href: "/certifications/comptia-network-plus" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "Student Gallery", href: "/gallery" },
    { label: "Training Videos", href: "/videos" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

// Trademark attributions — required whenever Cisco/CompTIA names or logos appear.
export const TRADEMARK_NOTICE =
  "Cisco, the Cisco logo, Cisco Networking Academy, CCNA, CCNP, and CCIE are trademarks or registered trademarks of Cisco Systems, Inc. CompTIA, CompTIA A+, and CompTIA Network+ are trademarks or registered trademarks of CompTIA, Inc. Hyperion Technologies is an independent training provider and is not endorsed by or affiliated with Cisco Systems, Inc. or CompTIA, Inc. unless otherwise stated.";
