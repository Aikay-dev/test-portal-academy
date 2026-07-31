import Image from "next/image";
import type { TeamMember } from "@/lib/team";

/** Initials fallback used until a real photograph is supplied. */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const hasPhoto = Boolean(member.image) && !member.placeholder;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift">
      {/* Fixed aspect ratio so mismatched photo sizes never break the grid */}
      <div className="relative aspect-[4/5] overflow-hidden bg-navy">
        {hasPhoto ? (
          <Image
            src={member.image as string}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-navy to-navy-deep">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 font-display text-2xl font-bold text-gold ring-1 ring-inset ring-gold/30">
              {initials(member.name)}
            </span>
            <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/40">
              Photograph to follow
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug">{member.name}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-burgundy">
          {member.role}
        </p>
        {member.subjects && (
          <p className="mt-2 text-xs font-medium text-gold-deep">{member.subjects}</p>
        )}
        {member.bio && (
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{member.bio}</p>
        )}
      </div>
    </article>
  );
}
