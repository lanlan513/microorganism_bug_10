import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, Filter, SlidersHorizontal, X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { MicrobeCard } from '../components/MicrobeCard';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../../shared/types';
import type { MicrobeCategory } from '../../shared/types';

const categoryHeroContent: Record<MicrobeCategory, { title: string; subtitle: string; description: string; icon: string }> = {
  bacteria: {
    title: '细菌展厅',
    subtitle: 'Bacteria Hall',
    description:
      '原核生物的代表，地球上最成功的生命形式。它们在35亿年前就已出现，至今仍是生物圈中最活跃的力量。从肠道中的益生菌到深海的化能自养者，细菌无处不在。',
    icon: '◉',
  },
  fungi: {
    title: '真菌展厅',
    subtitle: 'Fungi Hall',
    description:
      '异养真核生物，分解者之王。真菌与植物形成的菌根共生关系塑造了地球上的森林。从酿造啤酒的酵母到产生青霉素的青霉，真菌深刻改变了人类文明的走向。',
    icon: '❋',
  },
  virus: {
    title: '病毒展厅',
    subtitle: 'Virus Hall',
    description:
      '介于生命与非生命之间的神秘存在。病毒没有细胞结构，必须依赖宿主细胞复制。它们是进化的重要驱动力，也是人类健康面临的最古老挑战之一。',
    icon: '✦',
  },
  archaea: {
    title: '古菌展厅',
    subtitle: 'Archaea Hall',
    description:
      '第三域生命，曾被误认为是细菌。古菌在极端环境中演化出独特的生存策略——沸泉、盐湖、深海热泉都是它们的家园。它们的存在揭示了生命惊人的适应能力。',
    icon: '◎',
  },
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const cat = category as MicrobeCategory;
  const { microbes, loading, error, fetchMicrobes, searchQuery, setSearchQuery } = useAppStore();
  const [localSearch, setLocalSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    if (['bacteria', 'fungi', 'virus', 'archaea'].includes(cat)) {
      fetchMicrobes({ category: cat });
    }
  }, [cat, fetchMicrobes]);

  useEffect(() => {
    setSearchQuery(localSearch);
  }, [localSearch, setSearchQuery]);

  if (!['bacteria', 'fungi', 'virus', 'archaea'].includes(cat)) {
    return (
      <div className="container mx-auto px-6 pt-32 text-center">
        <h1 className="font-display text-4xl text-glow-red mb-4">分类不存在</h1>
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>
      </div>
    );
  }

  const hero = categoryHeroContent[cat];
  const color = CATEGORY_COLORS[cat];

  const filtered = microbes.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.scientificName.toLowerCase().includes(q) ||
      m.habitat.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse 60% 80% at 80% 20%, ${color}22, transparent), radial-gradient(ellipse 40% 60% at 10% 80%, ${color}15, transparent)`,
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="animate-fade-in-up stagger-1 opacity-0 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-glow-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页大厅
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-in-up stagger-2 opacity-0 flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl border"
                  style={{ borderColor: `${color}40`, background: `${color}10`, color }}
                >
                  {hero.icon}
                </div>
                <div>
                  <span
                    className="font-mono text-xs tracking-[0.3em] uppercase block"
                    style={{ color }}
                  >
                    {hero.subtitle}
                  </span>
                </div>
              </div>

              <h1 className="animate-fade-in-up stagger-3 opacity-0 font-display text-6xl md:text-7xl font-bold text-text-light mb-8 leading-tight">
                {hero.title}
              </h1>

              <p className="animate-fade-in-up stagger-4 opacity-0 font-mono text-base text-text-muted/80 leading-relaxed max-w-xl">
                {hero.description}
              </p>

              <div className="animate-fade-in-up stagger-5 opacity-0 mt-10 flex items-center gap-8">
                <div>
                  <div className="font-display text-5xl font-bold" style={{ color }}>
                    {microbes.length}
                  </div>
                  <div className="font-mono text-xs text-text-muted/60 mt-1 tracking-widest uppercase">
                    馆藏标本
                  </div>
                </div>
                <div className="h-16 w-px bg-white/10" />
                <div>
                  <div className="font-display text-5xl font-bold" style={{ color }}>
                    Prokaryota
                  </div>
                  <div className="font-mono text-xs text-text-muted/60 mt-1 tracking-widest uppercase">
                    {cat === 'fungi' ? 'Eukaryota' : cat === 'virus' ? 'Acellular' : cat === 'archaea' ? 'Prokaryota' : 'Prokaryota'}
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-3 opacity-0 relative">
              <div
                className="aspect-square rounded-full flex items-center justify-center relative"
                style={{
                  background: `radial-gradient(circle, ${color}15, transparent 70%)`,
                }}
              >
                <div
                  className="absolute inset-8 rounded-full border"
                  style={{ borderColor: `${color}20` }}
                />
                <div
                  className="absolute inset-16 rounded-full border border-dashed"
                  style={{ borderColor: `${color}30` }}
                />
                <div
                  className="absolute inset-24 rounded-full border"
                  style={{ borderColor: `${color}20` }}
                />
                <div
                  className="text-[180px] md:text-[220px] animate-pulse"
                  style={{ color, textShadow: `0 0 60px ${color}60` }}
                >
                  {hero.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-text-light">
                标本陈列
              </h2>
              <p className="font-mono text-sm text-text-muted/60 mt-1">
                {filtered.length} 个标本 · {CATEGORY_LABELS[cat]}分类
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  placeholder="搜索标本名称、环境..."
                  className="w-full md:w-80 pl-11 pr-10 py-3 rounded-full bg-background-card/60 border border-white/10 text-text-light font-mono text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-glow-primary/40 transition-colors"
                />
                {localSearch && (
                  <button
                    onClick={() => setLocalSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/5 text-text-muted hover:text-text-light transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-colors font-mono text-sm ${
                  filterOpen
                    ? 'bg-glow-primary/10 border-glow-primary/40 text-glow-primary'
                    : 'bg-background-card/60 border-white/10 text-text-muted hover:text-text-light hover:border-white/20'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="glass-card h-[380px] animate-pulse" />
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-20 glass-card">
              <p className="font-mono text-glow-red mb-4">加载失败：{error}</p>
              <button onClick={() => fetchMicrobes({ category: cat })} className="btn-primary-ghost">
                重新加载
              </button>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20 glass-card">
              <div className="text-6xl mb-4 text-text-muted/40">{hero.icon}</div>
              <p className="font-mono text-text-muted mb-4">没有找到匹配的标本</p>
              <button onClick={() => setLocalSearch('')} className="btn-primary-ghost">
                清除搜索
              </button>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((m, idx) => (
                <MicrobeCard key={m.id} microbe={m} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
