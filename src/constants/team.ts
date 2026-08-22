export interface TeamMember {
  name: string;
  title: string;
  /** randomuser.me portrait path fragment, e.g. `women/44`. */
  portrait: string;
}

const teamSource: TeamMember[] = [
  { name: 'Ama Boateng', title: 'Lead Networking Instructor', portrait: 'women/44' },
  { name: 'Kwame Asante', title: 'Systems Administrator', portrait: 'men/32' },
  { name: 'Efua Mensah', title: 'Graphics Design Lead', portrait: 'women/68' },
  { name: 'Yaw Owusu', title: 'CompTIA Instructor', portrait: 'men/54' },
  { name: 'Abena Darko', title: 'Enrollment Coordinator', portrait: 'women/22' },
  { name: 'Kojo Appiah', title: 'Application Developer', portrait: 'men/76' },
  { name: 'Adjoa Sarpong', title: 'Customer Support Lead', portrait: 'women/51' },
];

export interface TeamMemberWithImage extends TeamMember {
  imgSrc: string;
}

export const team: TeamMemberWithImage[] = teamSource.map((member) => ({
  ...member,
  imgSrc: `https://randomuser.me/api/portraits/${member.portrait}.jpg`,
}));
