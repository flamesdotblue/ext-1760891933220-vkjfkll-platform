import { PawPrint, Heart } from 'lucide-react';

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 ring-1 ring-amber-200 group-hover:ring-amber-300 transition">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-lg">Dogtopia</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#breeds" className="text-slate-600 hover:text-slate-900 transition-colors">Breeds</a>
          <a href="#tips" className="text-slate-600 hover:text-slate-900 transition-colors">Care</a>
          <a href="#newsletter" className="text-slate-600 hover:text-slate-900 transition-colors">Newsletter</a>
        </nav>
        <a href="#newsletter" className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
          <Heart className="h-4 w-4" /> Adopt a Friend
        </a>
      </div>
    </header>
  );
}

export default Header;
