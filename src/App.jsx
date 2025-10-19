import Header from './components/Header';
import Hero from './components/Hero';
import BreedShowcase from './components/BreedShowcase';
import TipsNewsletter from './components/TipsNewsletter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <BreedShowcase />
        <TipsNewsletter />
      </main>
      <footer className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Dogtopia. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#breeds" className="hover:text-slate-900 transition-colors">Breeds</a>
            <a href="#tips" className="hover:text-slate-900 transition-colors">Care Tips</a>
            <a href="#newsletter" className="hover:text-slate-900 transition-colors">Newsletter</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
