export interface EducationEntry {
  credential: string;
  school: string;
}

export interface FounderCertificate {
  label: string;
}

export const founder = {
  name: 'Michael Quarshie',
  role: 'Founder of Hyperion Technologies, Accredited Cisco Networking Academy (NetAcad) Instructor',
  nationality: 'Ghanaian',
  bio: [
    'Michael Quarshie founded Hyperion Technologies to bring internationally recognized IT certification training to Accra, grounded in over a decade of real classroom experience. As an accredited Cisco Networking Academy (NetAcad) instructor, he has taught networking and systems administration across multiple curricula, giving him a rare fluency in how students from very different educational backgrounds actually learn technical material.',
    'His teaching experience spans the Ghana Education Curriculum, the British Curriculum, IGCSE, AS Level, and A Level, a breadth that now shapes how Hyperion structures its own certification tracks for a diverse student body.',
  ],
  experience: [
    'Accredited Cisco Networking Academy (NetAcad) Instructor',
    'More than 10 years of teaching experience',
    'Extensive experience in networking, systems administration, and professional IT training',
  ],
  curriculaNote:
    'Curricula taught: Ghana Education Curriculum, British Curriculum, IGCSE, AS Level, A Level.',
} as const;

export const founderEducation: EducationEntry[] = [
  { credential: 'MSc Information Technology', school: 'University of Cape Coast' },
  { credential: 'Bachelor of Commerce (Management)', school: 'University of Cape Coast' },
  { credential: 'Accounting', school: 'Accra Technical University' },
];

export const founderCertificates: FounderCertificate[] = [
  { label: 'Cisco Certified Network Associate (CCNA)' },
  { label: 'Cisco Certified Network Professional (CCNP)' },
  { label: 'CompTIA A+' },
  { label: 'Microsoft Certified Solutions Associate (MCSA)' },
  { label: 'Microsoft Certified Professional (MCP)' },
];
