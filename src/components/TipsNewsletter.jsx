import { Mail, PawPrint } from 'lucide-react';
import { useState } from 'react';

function Tip({ title, desc }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700 ring-1 ring-amber-200">
        <PawPrint className="h-4 w-4" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function TipsNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  }

  return (
    <section id="tips" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Care Tips</h2>
            <p className="mt-2 text-slate-600 max-w-prose">Healthy pups are happy pups. Start with these fundamentals for training, nutrition, and wellness.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Tip title="Daily Exercise" desc="Most breeds thrive with 30–90 minutes of activity. Match intensity to energy level." />
              <Tip title="Balanced Diet" desc="Choose high-quality food appropriate for age and size. Monitor body condition over weight." />
              <Tip title="Positive Training" desc="Short, consistent sessions with rewards build confidence and good manners." />
              <Tip title="Preventive Care" desc="Stay current on vaccines, parasite prevention, and annual vet visits." />
            </div>
          </div>
          <div id="newsletter" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Get the Dogtopia newsletter</h3>
                <p className="mt-1 text-sm text-slate-600">Weekly tips, breed deep-dives, and adoption spotlights. No spam, just wags.</p>
              </div>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-emerald-800 ring-1 ring-emerald-200">
                Thanks! Please check your inbox to confirm your subscription.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@pawmail.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="mt-3 text-xs text-slate-500">By subscribing, you agree to our friendly emails. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TipsNewsletter;
