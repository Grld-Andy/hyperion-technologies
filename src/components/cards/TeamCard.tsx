import type { TeamMemberWithImage } from '../../constants/team';

export function TeamCard({ member }: { member: TeamMemberWithImage }) {
  return (
    <div className="flex flex-col gap-3.5 overflow-hidden">
      <div className="rounded-2xl overflow-hidden">
      <img
        src={member.imgSrc}
        alt={member.name}
        loading="lazy"
        className="aspect-square w-full bg-alt object-cover hover:scale-110 transition-all"
      />
      </div>
      <div>
        <p className="m-0 font-display text-[15px] font-bold">{member.name}</p>
        <p className="m-0 mt-0.75 text-[13px] text-ink-muted">{member.title}</p>
      </div>
    </div>
  );
}
