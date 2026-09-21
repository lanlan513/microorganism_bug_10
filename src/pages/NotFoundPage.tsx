import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up stagger-1 opacity-0 mb-8">
          <div className="text-[180px] md:text-[240px] font-display font-bold leading-none text-gradient-primary">
            404
          </div>
        </div>

        <h1 className="animate-fade-in-up stagger-2 opacity-0 font-display text-4xl md:text-5xl font-semibold text-text-light mb-4">
          误入未知微生物领域
        </h1>

        <p className="animate-fade-in-up stagger-3 opacity-0 font-mono text-base text-text-muted/70 max-w-md mx-auto mb-12 leading-relaxed">
          这片微观区域尚未被探索。
          <br />
          让我们回到已知的微生物文明区域继续参观。
        </p>

        <div className="animate-fade-in-up stagger-4 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            回到首页大厅
          </Link>
          <Link to="/category/bacteria" className="btn-primary-ghost">
            <ArrowLeft className="w-4 h-4" />
            进入细菌展厅
          </Link>
        </div>
      </div>
    </div>
  );
}
