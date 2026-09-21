import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Microbe } from '../../shared/types';
import { CATEGORY_LABELS } from '../../shared/types';

interface MicrobeCardProps {
  microbe: Microbe;
  index?: number;
}

export function MicrobeCard({ microbe, index = 0 }: MicrobeCardProps) {
  const badgeClass = `category-badge-${microbe.category}`;
  const stagger = `stagger-${(index % 8) + 1}`;

  return (
    <Link
      to={`/microbe/${microbe.id}`}
      className={`group animate-fade-in-up ${stagger} opacity-0`}
    >
      <div className="glass-card overflow-hidden h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-lg group-hover:border-glow-primary/40">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={microbe.imageUrl}
            alt={microbe.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`category-badge ${badgeClass} backdrop-blur-sm`}>
              {CATEGORY_LABELS[microbe.category]}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="font-mono text-[10px] text-text-muted/70 tracking-wider">
              #{String(microbe.id).padStart(3, '0')}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-2xl font-semibold text-text-light mb-1 group-hover:text-glow-primary transition-colors">
            {microbe.name}
          </h3>
          <p className="font-mono text-xs text-text-muted italic mb-4">
            {microbe.scientificName}
          </p>
          <p className="font-mono text-sm text-text-muted/90 line-clamp-2 leading-relaxed mb-4">
            {microbe.description.slice(0, 80)}...
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {microbe.characteristics.slice(0, 3).map((char) => (
              <span
                key={char}
                className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-background-muted/50 text-text-muted border border-white/5"
              >
                {char}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="text-[10px] font-mono text-text-muted">
              <span className="opacity-60">发现于 </span>
              <span className="text-text-light">{microbe.discoveredYear}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-glow-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0 duration-300">
              <span>查看标本</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
