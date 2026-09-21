export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-glow-primary/10 bg-background-deep/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-semibold text-gradient-primary mb-4">
              微生物文明馆
            </h3>
            <p className="font-mono text-sm text-text-muted/70 leading-relaxed max-w-md">
              在这里，我们用艺术的视角呈现微观世界的壮丽。从最简单的细菌到最神秘的古菌，
              每一种微生物都是地球生命史诗中不可或缺的篇章。探索它们，就是探索生命本身。
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-text-light tracking-[0.2em] uppercase mb-6">
              展厅导览
            </h4>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <a href="/category/bacteria" className="text-text-muted hover:text-glow-primary transition-colors">
                  细菌展厅
                </a>
              </li>
              <li>
                <a href="/category/fungi" className="text-text-muted hover:text-glow-purple transition-colors">
                  真菌展厅
                </a>
              </li>
              <li>
                <a href="/category/virus" className="text-text-muted hover:text-glow-red transition-colors">
                  病毒展厅
                </a>
              </li>
              <li>
                <a href="/category/archaea" className="text-text-muted hover:text-glow-gold transition-colors">
                  古菌展厅
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-text-light tracking-[0.2em] uppercase mb-6">
              关于项目
            </h4>
            <ul className="space-y-3 font-mono text-sm text-text-muted/70">
              <li>前沿生物学研究 × 数字艺术设计</li>
              <li>开放数据 · 科普教育</li>
              <li>© 2026 Microbial Civilization</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted/50">
            In the microscopic world, we find the grandeur of life.
          </p>
          <p className="font-mono text-xs text-text-muted/50">
            Built with React · Express · Passion for Microbiology
          </p>
        </div>
      </div>
    </footer>
  );
}
