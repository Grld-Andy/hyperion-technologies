export interface TeamMember {
  name: string;
  title: string;
  /** randomuser.me portrait path fragment, e.g. `women/44`. */
  portrait: string;
}

const teamSource: TeamMember[] = [
  { name: 'Tricia Nabulele', title: 'Business Development Executive/ IT Customer Service', portrait: '/images/Tricia Nabulele.jpeg' },
  { name: 'Bashira Lamptey', title: 'Business Development Executive/ IT Customer Service', portrait: '/images/Bashira Lamptey.jpeg' },
  { name: 'Benedict Nkrumah', title: 'Operating System Support', portrait: '/images/Benedict Nkrumah.jpeg' },
  { name: 'Zachariah Lincoln', title: 'Network Engineer & Cybersecurity, Bug Bounty, Wireless Penetration, Phishing', portrait: '/images/Zachariah Lincoln.jpeg' },
];

export interface TeamMemberWithImage extends TeamMember {
  imgSrc: string;
}

export const team: TeamMemberWithImage[] = teamSource.map((member) => ({
  ...member,
  imgSrc: member.portrait,
}));
