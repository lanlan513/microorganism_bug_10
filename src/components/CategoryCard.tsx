import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { MicrobeCategory } from '../../shared/types';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../../shared/types';

interface CategoryCardProps {
  category: MicrobeCategory;
  count: number;
  description: string;
  index: number;
}

const categoryIcons: Record<MicrobeCategory, string> = {
  bacteria: '◉',
  fungi: '❋',
  virus: '✦',
  archaea: '◎',
};

const categoryGradients: Record<MicrobeCategory, string> = {
  bacteria: 'from-glow-primary/20 via-glow-primary/5 to-transparent',
  fungi: 'from-glow-purple/20 via-glow-purple/5 to-transparent',
  virus: 'from-glow-red/20 via-glow-red/5 to-transparent',
  archaea: 'from-glow-gold/20 via-glow-gold/5 to-transparent',
};

const categoryBorders: Record<MicrobeCategory, string> = {
  bacteria: 'hover:border-glow-primary/40 hover:shadow-glow',
  fungi: 'hover:border-glow-purple/40 hover:shadow-glow-purple',
  virus: 'hover:border-glow-red/40 hover:shadow-glow-red',
  archaea: 'hover:border-glow-gold/40 hover:shadow-glow-gold',
};

export function CategoryCard({ category, count, description, index }: CategoryCardProps) {
  const color = CATEGORY_COLORS[category];
  const stagger = `stagger-${index + 2}`;

  return (
    <Link
      to={`/category/${category}`}
      className={`group relative animate-fade-in-up ${stagger} opacity-0`}
    >
      <div
        className={`glass-card p-8 h-full border border-white/5 transition-all duration-500 hover:-translate-y-3 ${categoryBorders[category]}`}
      >
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryGradients[category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div
            className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-110"
            style={{ color }}
          >
            {categoryIcons[category]}
          </div>

          <div className="flex items-baseline gap-3 mb-3">
            <h3 className="font-display text-3xl font-semibold text-text-light group-hover:text-glow-primary transition-colors">
              {CATEGORY_LABELS[category]}
            </h3>
            <span
              className="font-mono text-xs tracking-widest uppercase opacity-60"
              style={{ color }}
            >
              {category}
            </span>
          </div>

          <p className="font-mono text-sm text-text-muted/80 leading-relaxed mb-6 min-h-[60px]">
            {description}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div>
              <span className="font-display text-4xl font-bold" style={{ color }}>
                {count}
              </span>
              <span className="font-mono text-xs text-text-muted/60 ml-2">种标本</span>
            </div>
            <div
              className="flex items-center gap-2 font-mono text-sm transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
              style={{ color }}
            >
              <span>进入展厅</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
