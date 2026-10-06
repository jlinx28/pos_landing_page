import { useEffect, useState } from 'react';

const ADMIN_API = import.meta.env.VITE_ADMIN_API ?? '';

const FALLBACK_TESTIMONIALS = [
  {
    id: 'fb-1',
    name: 'Aling Nena',
    role: 'Sari-sari store · Quezon City · 8 years running',
    body: "Brownout for two hours and we kept selling. The next morning everything synced. I don't know how I ran the store before this.",
    rating: 5,
  },
  {
    id: 'fb-2',
    name: 'Mark Reyes',
    role: 'Cebu',
    body: 'Three cashier stations sync over WiFi. Game changer for our kainan.',
    rating: 5,
  },
  {
    id: 'fb-3',
    name: 'Joana Cruz',
    role: 'Davao',
    body: 'Setup took 10 minutes. My cashier learned it in one shift.',
    rating: 5,
  },
  {
    id: 'fb-4',
    name: 'Kuya Erwin',
    role: 'Manila',
    body: 'Stylist commissions tracked auto. Saves 4 hours every Sunday.',
    rating: 5,
  },
];

const AVATAR_COLORS = ['#d97706', '#2f5d50', '#92400e', '#c2410c'];

function initial(name) {
  return (name || '?').trim().charAt(0).toUpperCase();
}

function stars(rating) {
  const n = Math.max(1, Math.min(5, rating || 5));
  return '★'.repeat(n);
}

export default function Testimonials() {
  const [items, setItems] = useState(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    if (!ADMIN_API) return;
    let cancelled = false;
    fetch(`${ADMIN_API}/api/testimonials`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data) => {
        if (cancelled) return;
        if (Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch(() => {
        /* keep fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const [featured, ...secondary] = items;
  const sideItems = secondary.slice(0, 3);

  return (
    <section id="testimonials" className="bg-cream py-24 relative overflow-hidden">
      {/* Big soft blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(47, 93, 80, 0.16) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(146, 64, 14, 0.1) 0%, transparent 70%)',
        }}
      ></div>

      {/* Dot pattern panels */}
      <div
        className="absolute top-12 right-8 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(circle at top right, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at top right, black 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute bottom-12 left-8 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
        }}
      ></div>

      {/* Decorative SVG marks */}
      <svg
        className="absolute top-20 left-[10%] w-32 h-16 opacity-50 pointer-events-none"
        viewBox="0 0 200 80"
        fill="none"
      >
        <path
          d="M5 30 Q 50 75, 100 40 T 195 50"
          stroke="#D97706"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <svg
        className="absolute top-1/2 right-4 w-20 h-20 opacity-25 pointer-events-none"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="34" stroke="#2F5D50" strokeWidth="2" fill="none" />
        <circle
          cx="40"
          cy="40"
          r="22"
          stroke="#2F5D50"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
      </svg>
      <svg
        className="absolute bottom-32 right-[10%] w-12 h-12 opacity-40 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M24 4 L28 19 L43 21 L31 31 L35 46 L24 38 L13 46 L17 31 L5 21 L20 19 Z"
          fill="#92400E"
          opacity="0.7"
        />
      </svg>
      <svg
        className="absolute top-[40%] left-4 w-10 h-10 opacity-50 pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 4 L20 36 M4 20 L36 20"
          stroke="#92400E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute top-24 right-[40%] w-8 h-8 opacity-50 pointer-events-none"
        viewBox="0 0 32 32"
        fill="none"
      >
        <polygon points="16,4 28,28 4,28" fill="#D97706" opacity="0.6" />
      </svg>
      <svg
        className="absolute bottom-24 left-[40%] w-14 h-14 opacity-30 pointer-events-none"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect
          x="8"
          y="8"
          width="40"
          height="40"
          rx="6"
          stroke="#2F5D50"
          strokeWidth="2"
          fill="none"
          transform="rotate(20 28 28)"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto relative">
          <svg
            className="absolute -top-4 left-[230px] w-7 h-7 opacity-60 pointer-events-none hidden sm:block"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M14 2 L16 12 L26 14 L16 16 L14 26 L12 16 L2 14 L12 12 Z"
              fill="#D97706"
            />
          </svg>
          <p className="text-xs uppercase tracking-widest accent-text font-bold mb-3">
            Loved by owners
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-deep leading-tight font-medium">
            Real stores. Real <em className="accent-text italic">peace of mind.</em>
          </h2>
        </div>

        {/* Hero featured testimonial */}
        {featured && (
          <article
            className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 border border-cream mb-6"
            style={{ boxShadow: '0 25px 50px -15px rgba(63, 29, 4, 0.15)' }}
          >
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'rgba(217, 119, 6, 0.2)' }}
            ></div>
            <div className="absolute top-6 left-8 font-fraunces text-8xl accent-text opacity-20 leading-none pointer-events-none">
              "
            </div>

            <div className="relative">
              <div className="accent-text text-2xl mb-4">{stars(featured.rating)}</div>
              <blockquote className="font-fraunces text-2xl sm:text-3xl text-deep leading-snug mb-6">
                "{featured.body}"
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0"
                  style={{ background: AVATAR_COLORS[0] }}
                >
                  {initial(featured.name)}
                </div>
                <div>
                  <div className="font-fraunces font-semibold text-deep">
                    {featured.name}
                  </div>
                  {featured.role && (
                    <div className="text-sm text-soft">{featured.role}</div>
                  )}
                </div>
              </figcaption>
            </div>
          </article>
        )}

        {/* Secondary 3-up strip */}
        {sideItems.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sideItems.map((t, i) => (
              <figure
                key={t.id ?? `${t.name}-${i}`}
                className="bg-white rounded-2xl p-5 border border-cream"
              >
                <div className="accent-text text-base mb-2">{stars(t.rating)}</div>
                <blockquote className="text-mid text-sm leading-snug mb-3">
                  "{t.body}"
                </blockquote>
                <figcaption className="flex items-center gap-2 text-xs">
                  <div
                    className="w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center"
                    style={{ background: AVATAR_COLORS[(i + 1) % AVATAR_COLORS.length] }}
                  >
                    {initial(t.name)}
                  </div>
                  <div>
                    <strong className="text-deep">{t.name}</strong>
                    {t.role && <> · {t.role}</>}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
