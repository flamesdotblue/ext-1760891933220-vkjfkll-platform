import { PawPrint, Star } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
              <PawPrint className="h-4 w-4" /> Woofs, wags, and wisdom
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Everything dogs. From breeds to care and adoption.
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-prose">
              Discover popular breeds, learn expert care tips, and connect with resources to adopt your next best friend. Built with love for dog people.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#breeds" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2">
                Explore Breeds
              </a>
              <a href="#tips" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">
                Care Tips
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500" />
                Trusted by dog lovers
              </div>
              <div className="flex items-center gap-1">
                <PawPrint className="h-4 w-4 text-amber-500" />
                Friendly and vet-informed
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-100 to-orange-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=80"
                alt="Golden Retriever smiling in a field"
                className="h-full w-full object-cover mix-blend-multiply"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
