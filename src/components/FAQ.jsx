import { useEffect, useState } from 'react';

const ADMIN_API = import.meta.env.VITE_ADMIN_API ?? '';

const FALLBACK_FAQS = [
  {
    id: 'fb-1',
    question: 'Does it work without internet?',
    answer:
      "Yes — all data stored locally with SQLite. Brownouts can't stop you. Sync happens when you reconnect.",
  },
  {
    id: 'fb-2',
    question: 'What devices?',
    answer: 'Any Android 8+ phone or tablet. Cheap tablets are fine.',
  },
  {
    id: 'fb-3',
    question: 'Scanner & printer?',
    answer: 'USB & Bluetooth scanners + ESC/POS thermal printers (58mm/80mm).',
  },
  {
    id: 'fb-4',
    question: 'How do I pay?',
    answer: 'GCash, Maya, or bank transfer. Monthly or lifetime.',
  },
  {
    id: 'fb-5',
    question: 'What if I cancel?',
    answer: 'Data stays on your device. Export to CSV anytime. No lock-in.',
  },
  {
    id: 'fb-6',
    question: 'Is my data safe?',
    answer:
      'Lives only on your device. Encrypted backups to USB or LAN. No cloud breach risk.',
  },
  {
    id: 'fb-7',
    question: 'Training & support?',
    answer: 'Email + Messenger on all plans. Pro/Custom get priority support.',
  },
];

const ROTATIONS = [-1.5, 1.5, -2, 2, -1, 1, -2.5];

const dotStyle = {
  background: '#f5e4c2',
  border: '1px solid rgba(217, 119, 6, 0.3)',
  boxShadow: 'inset 0 1px 2px rgba(146, 64, 14, 0.3)',
};

function NotebookDots() {
  return (
    <>
      <div
        className="absolute left-3 top-6 w-3 h-3 rounded-full"
        style={dotStyle}
      ></div>
      <div
        className="absolute left-3 top-20 w-3 h-3 rounded-full"
        style={dotStyle}
      ></div>
      <div
        className="absolute left-3 bottom-6 w-3 h-3 rounded-full"
        style={dotStyle}
      ></div>
    </>
  );
}

const standardShadow =
  '0 1px 1px rgba(0, 0, 0, 0.1), 0 12px 24px -10px rgba(63, 29, 4, 0.2), 0 22px 40px -16px rgba(63, 29, 4, 0.18)';

export default function FAQ() {
  const [items, setItems] = useState(FALLBACK_FAQS);

  useEffect(() => {
    if (!ADMIN_API) return;
    let cancelled = false;
    fetch(`${ADMIN_API}/api/faqs`)
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

  return (
    <section id="faq" className="bg-cream-deep py-24 relative overflow-hidden">
      {/* Big soft blobs */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 119, 6, 0.18) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(47, 93, 80, 0.14) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(146, 64, 14, 0.1) 0%, transparent 70%)',
        }}
      ></div>

      {/* Subtle corkboard dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)',
          backgroundSize: '18px 18px',
        }}
      ></div>

      {/* Decorative SVG marks */}
      <svg
        className="absolute top-20 left-[8%] w-32 h-16 opacity-50 pointer-events-none"
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
        className="absolute top-1/3 right-4 w-20 h-20 opacity-25 pointer-events-none"
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
          transform="rotate(-15 28 28)"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto relative">
          <svg
            className="absolute -top-4 left-[260px] w-7 h-7 opacity-60 pointer-events-none hidden sm:block"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M14 2 L16 12 L26 14 L16 16 L14 26 L12 16 L2 14 L12 12 Z"
              fill="#D97706"
            />
          </svg>
          <p className="text-xs uppercase tracking-widest accent-text font-bold mb-3">
            FAQ
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-deep leading-tight font-medium">
            Owner's <em className="accent-text italic">notebook.</em>
          </h2>
          <p className="mt-4 text-mid">Quick answers to the things owners ask first.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((faq, i) => (
            <article
              key={faq.id ?? `${faq.question}-${i}`}
              className="notebook-page lift-card rounded-sm pl-12 pr-5 py-5 relative"
              style={{
                transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
                boxShadow: standardShadow,
              }}
            >
              <NotebookDots />
              <h3 className="font-caveat text-2xl text-deep leading-tight mb-3">
                Q{i + 1} · {faq.question}
              </h3>
              <p className="text-sm text-mid leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </article>
          ))}

          {/* "Ask another" page (dark) */}
          <article
            className="lift-card rounded-sm pl-12 pr-5 py-5 relative flex flex-col items-center justify-center text-center"
            style={{
              background: '#3f1d04',
              transform: 'rotate(2.5deg)',
              boxShadow:
                '0 1px 1px rgba(0, 0, 0, 0.1), 0 14px 28px -10px rgba(63, 29, 4, 0.4), 0 22px 40px -16px rgba(63, 29, 4, 0.3)',
            }}
          >
            <NotebookDots />
            <div className="font-caveat text-3xl text-white mb-2 leading-tight">
              Got another?
            </div>
            <p className="text-xs text-white/80 mb-3">Add it to our notebook.</p>
            <a
              href="#contact"
              className="accent-bg text-white px-4 py-1.5 rounded-full text-xs font-bold"
            >
              Ask away →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
