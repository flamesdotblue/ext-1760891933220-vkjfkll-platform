const breeds = [
  {
    name: 'Golden Retriever',
    img: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=80',
    desc: 'Friendly, intelligent, and devoted family companions who love to play.',
    tags: ['Family', 'Active', 'Trainable'],
  },
  {
    name: 'German Shepherd',
    img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=1200&q=80',
    desc: 'Confident and courageous working dogs known for loyalty and versatility.',
    tags: ['Loyal', 'Protective', 'Working'],
  },
  {
    name: 'French Bulldog',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80',
    desc: 'Playful, smart, and adaptable companions perfect for city living.',
    tags: ['Apartment', 'Affectionate', 'Chill'],
  },
  {
    name: 'Poodle',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Highly intelligent and hypoallergenic with a flair for style.',
    tags: ['Smart', 'Hypoallergenic', 'Agile'],
  },
];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      {label}
    </span>
  );
}

function BreedCard({ breed }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={breed.img} alt={breed.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold tracking-tight">{breed.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{breed.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {breed.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BreedShowcase() {
  return (
    <section id="breeds" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Breeds</h2>
            <p className="mt-2 text-slate-600 max-w-prose">Get to know temperaments, energy levels, and care needs to find your perfect match.</p>
          </div>
          <a href="#newsletter" className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">Get personalized picks</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {breeds.map((b) => (
            <BreedCard key={b.name} breed={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BreedShowcase;
