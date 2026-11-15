const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1920&q=80&auto=format&fit=crop`;

/** Hero photographs for each screen's PageBanner (the home page keeps its own hero). */
export const bannerImages = {
  about: unsplash('1522071820081-009f0129c71c'),
  services: unsplash('1531482615713-2afd69097998'),
  certifications: unsplash('1451187580459-43490279c0fa'),
  certificationDetail: unsplash('1544197150-b99a580bb7a8'),
  contact: unsplash('1423666639041-f56000c27a9a'),
  faq: unsplash('1516321318423-f06f85e504b3'),
  gallery: unsplash('1523240795612-9a054b0db644'),
  videos: unsplash('1492619375914-88005aa9e8fb'),
  blog: unsplash('1499750310107-5fef28a66643'),
} as const;
