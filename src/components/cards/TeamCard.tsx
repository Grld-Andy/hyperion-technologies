import type { TeamMemberWithImage } from '../../constants/team';
import { fonts, t } from '../../constants/theme';

export function TeamCard({ member }: { member: TeamMemberWithImage }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <img
        src={member.imgSrc}
        alt={member.name}
        loading="lazy"
        style={{
          width: '100%',
          aspectRatio: '1',
          objectFit: 'cover',
          borderRadius: 16,
          background: t.altBg,
        }}
      />
      <div>
        <p style={{ margin: 0, fontFamily: fonts.display, fontWeight: 700, fontSize: 15 }}>
          {member.name}
        </p>
        <p style={{ margin: '3px 0 0', fontSize: 13, color: t.textMuted }}>{member.title}</p>
      </div>
    </div>
  );
}
