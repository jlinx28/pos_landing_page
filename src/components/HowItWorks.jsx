import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const journeyRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = journeyRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" className="bg-white py-24 relative overflow-hidden">
      {/* Big soft blobs */}
      <div
        className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 119, 6, 0.18) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(47, 93, 80, 0.12) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(146, 64, 14, 0.08) 0%, transparent 70%)',
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
        className="absolute bottom-24 left-[42%] w-8 h-8 opacity-50 pointer-events-none"
        viewBox="0 0 32 32"
        fill="none"
      >
        <polygon points="16,4 28,28 4,28" fill="#D97706" opacity="0.6" />
      </svg>
      <svg
        className="absolute top-[60%] right-[8%] w-14 h-14 opacity-30 pointer-events-none"
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
          transform="rotate(15 28 28)"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto relative">
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
            How it works
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-deep leading-tight font-medium">
            Your <em className="accent-text italic">first day</em> with RetailFlow.
          </h2>
          <p className="mt-4 text-mid">
            From the first message to your first sale — usually under 24 hours.
          </p>
        </div>

        {/* Desktop journey */}
        <div
          ref={journeyRef}
          className={`journey hidden lg:block relative max-w-6xl mx-auto h-[600px] ${
            visible ? 'is-visible' : ''
          }`}
        >
          <svg
            viewBox="0 0 1100 600"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="journey-reveal">
                <rect className="journey-reveal-rect" x="0" y="0" height="600" />
              </clipPath>
            </defs>
            <path
              d="M 90 90 C 90 280, 260 380, 330 320 C 410 270, 380 100, 560 220 C 740 340, 620 100, 790 320 C 940 480, 1080 360, 1010 510"
              stroke="#D97706"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
              clipPath="url(#journey-reveal)"
            />
            <circle
              className="journey-dot dot-12"
              cx="225"
              cy="365"
              r="3.5"
              fill="#D97706"
            />
            <circle
              className="journey-dot dot-23"
              cx="445"
              cy="225"
              r="3.5"
              fill="#D97706"
            />
            <circle
              className="journey-dot dot-34"
              cx="675"
              cy="225"
              r="3.5"
              fill="#D97706"
            />
            <circle
              className="journey-dot dot-45"
              cx="900"
              cy="450"
              r="3.5"
              fill="#D97706"
            />
          </svg>

          {/* Step 1 */}
          <article
            className="journey-step step-1 absolute text-center"
            style={{ left: '0%', top: '8%', width: '200px' }}
          >
            <div
              className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-white shadow-xl mb-3"
              style={{
                background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)',
                boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.2)',
              }}
            >
              <span className="text-3xl">💬</span>
              <span className="absolute -top-2 -right-2 w-8 h-8 accent-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces shadow-md">
                1
              </span>
            </div>
            <div className="text-[10px] font-mono accent-text font-bold uppercase tracking-wider mb-1">
              Day 0 · ~2 min
            </div>
            <h3 className="font-fraunces text-base text-deep mb-1">Get in touch</h3>
            <p className="text-xs text-mid leading-snug">
              Message us via Messenger, email, or phone.
            </p>
          </article>

          {/* Step 2 */}
          <article
            className="journey-step step-2 absolute text-center"
            style={{ left: '21%', top: '47%', width: '200px' }}
          >
            <div
              className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-white shadow-xl mb-3"
              style={{
                background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)',
                boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.2)',
              }}
            >
              <span className="text-3xl">📩</span>
              <span className="absolute -top-2 -right-2 w-8 h-8 secondary-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces shadow-md">
                2
              </span>
            </div>
            <div className="text-[10px] font-mono secondary-text font-bold uppercase tracking-wider mb-1">
              Day 0 · &lt;1 hour
            </div>
            <h3 className="font-fraunces text-base text-deep mb-1">We send your link</h3>
            <p className="text-xs text-mid leading-snug">
              Google Play link + setup guide arrives.
            </p>
          </article>

          {/* Step 3 */}
          <article
            className="journey-step step-3 absolute text-center"
            style={{ left: '42%', top: '30%', width: '200px' }}
          >
            <div
              className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-white shadow-xl mb-3"
              style={{
                background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)',
                boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.2)',
              }}
            >
              <span className="text-3xl">🎁</span>
              <span className="absolute -top-2 -right-2 w-8 h-8 tertiary-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces shadow-md">
                3
              </span>
            </div>
            <div
              className="text-[10px] font-mono font-bold uppercase tracking-wider mb-1"
              style={{ color: '#92400e' }}
            >
              Day 0–14 · Free
            </div>
            <h3 className="font-fraunces text-base text-deep mb-1">Try free for 14 days</h3>
            <p className="text-xs text-mid leading-snug">
              Install, set up products, run real sales.
            </p>
          </article>

          {/* Step 4 */}
          <article
            className="journey-step step-4 absolute text-center"
            style={{ left: '63%', top: '47%', width: '200px' }}
          >
            <div
              className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-white shadow-xl mb-3"
              style={{
                background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)',
                boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.2)',
              }}
            >
              <span className="text-3xl">💸</span>
              <span className="absolute -top-2 -right-2 w-8 h-8 accent-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces shadow-md">
                4
              </span>
            </div>
            <div className="text-[10px] font-mono accent-text font-bold uppercase tracking-wider mb-1">
              Day 14 · ~3 min
            </div>
            <h3 className="font-fraunces text-base text-deep mb-1">Pay your way</h3>
            <p className="text-xs text-mid leading-snug mb-2">
              Send payment when you're ready.
            </p>
            <div className="flex flex-wrap justify-center gap-1">
              <span className="px-2 py-0.5 bg-cream rounded text-[10px] font-bold text-deep border border-cream">
                GCash
              </span>
              <span className="px-2 py-0.5 bg-cream rounded text-[10px] font-bold text-deep border border-cream">
                Maya
              </span>
              <span className="px-2 py-0.5 bg-cream rounded text-[10px] font-bold text-deep border border-cream">
                Bank
              </span>
            </div>
          </article>

          {/* Step 5 */}
          <article
            className="journey-step step-5 absolute text-center"
            style={{ right: '0%', top: '78%', width: '220px' }}
          >
            <div
              className="relative inline-flex items-center justify-center w-24 h-24 rounded-full text-white border-4 border-white shadow-xl mb-3"
              style={{
                background: 'linear-gradient(135deg, #d97706, #92400e)',
                boxShadow: '0 20px 40px -10px rgba(217, 119, 6, 0.4)',
              }}
            >
              <span className="text-4xl">🚀</span>
              <span
                className="absolute -top-2 -right-2 w-8 h-8 bg-white text-deep text-xs font-bold rounded-full flex items-center justify-center font-fraunces shadow-md border-2"
                style={{ borderColor: '#d97706' }}
              >
                5
              </span>
              <div
                className="absolute -top-3 -left-3 accent-bg text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-lg"
                style={{ transform: 'rotate(-15deg)' }}
              >
                Finish
              </div>
            </div>
            <div className="text-[10px] font-mono accent-text font-bold uppercase tracking-wider mb-1">
              Day 14 · ~1 min
            </div>
            <h3 className="font-fraunces text-base text-deep mb-1">Activate & sell</h3>
            <p className="text-xs text-mid leading-snug">
              Enter your license key. Next sale rings up on RetailFlow.
            </p>
          </article>
        </div>

        {/* Mobile vertical fallback */}
        <div className="lg:hidden max-w-md mx-auto space-y-6 mb-8">
          <article className="flex gap-4 items-start">
            <div
              className="relative shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-md"
              style={{ background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)' }}
            >
              <span className="text-2xl">💬</span>
              <span className="absolute -top-1 -right-1 w-7 h-7 accent-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces">
                1
              </span>
            </div>
            <div className="flex-1 -mt-1">
              <div className="text-[10px] font-mono accent-text font-bold uppercase tracking-wider mb-0.5">
                Day 0 · ~2 min
              </div>
              <h3 className="font-fraunces text-lg text-deep mb-1">Get in touch</h3>
              <p className="text-sm text-mid">
                Send us a message via Messenger, email, or phone.
              </p>
            </div>
          </article>
          <article className="flex gap-4 items-start">
            <div
              className="relative shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-md"
              style={{ background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)' }}
            >
              <span className="text-2xl">📩</span>
              <span className="absolute -top-1 -right-1 w-7 h-7 secondary-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces">
                2
              </span>
            </div>
            <div className="flex-1 -mt-1">
              <div className="text-[10px] font-mono secondary-text font-bold uppercase tracking-wider mb-0.5">
                Day 0 · &lt;1 hour
              </div>
              <h3 className="font-fraunces text-lg text-deep mb-1">We send your link</h3>
              <p className="text-sm text-mid">Google Play download link + setup guide.</p>
            </div>
          </article>
          <article className="flex gap-4 items-start">
            <div
              className="relative shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-md"
              style={{ background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)' }}
            >
              <span className="text-2xl">🎁</span>
              <span className="absolute -top-1 -right-1 w-7 h-7 tertiary-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces">
                3
              </span>
            </div>
            <div className="flex-1 -mt-1">
              <div
                className="text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5"
                style={{ color: '#92400e' }}
              >
                Day 0–14 · Free
              </div>
              <h3 className="font-fraunces text-lg text-deep mb-1">Try free for 14 days</h3>
              <p className="text-sm text-mid">
                Install, set up products, run real sales. No card.
              </p>
            </div>
          </article>
          <article className="flex gap-4 items-start">
            <div
              className="relative shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-md"
              style={{ background: 'radial-gradient(circle, #fbefd9 0%, #f5e4c2 100%)' }}
            >
              <span className="text-2xl">💸</span>
              <span className="absolute -top-1 -right-1 w-7 h-7 accent-bg text-white text-xs font-bold rounded-full flex items-center justify-center font-fraunces">
                4
              </span>
            </div>
            <div className="flex-1 -mt-1">
              <div className="text-[10px] font-mono accent-text font-bold uppercase tracking-wider mb-0.5">
                Day 14 · ~3 min
              </div>
              <h3 className="font-fraunces text-lg text-deep mb-1">Pay your way</h3>
              <p className="text-sm text-mid mb-2">Send payment. Monthly or lifetime.</p>
              <div className="flex gap-1">
                <span className="px-2 py-0.5 bg-white rounded text-[10px] font-bold text-deep border border-cream">
                  GCash
                </span>
                <span className="px-2 py-0.5 bg-white rounded text-[10px] font-bold text-deep border border-cream">
                  Maya
                </span>
                <span className="px-2 py-0.5 bg-white rounded text-[10px] font-bold text-deep border border-cream">
                  Bank
                </span>
              </div>
            </div>
          </article>
          <article className="flex gap-4 items-start">
            <div
              className="relative shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-md text-white"
              style={{ background: 'linear-gradient(135deg, #d97706, #92400e)' }}
            >
              <span className="text-2xl">🚀</span>
              <span
                className="absolute -top-1 -right-1 w-7 h-7 bg-white text-deep text-xs font-bold rounded-full flex items-center justify-center font-fraunces border-2"
                style={{ borderColor: '#d97706' }}
              >
                5
              </span>
            </div>
            <div className="flex-1 -mt-1">
              <div className="text-[10px] font-mono accent-text font-bold uppercase tracking-wider mb-0.5">
                Day 14 · ~1 min · 🚀 Finish
              </div>
              <h3 className="font-fraunces text-lg text-deep mb-1">Activate & sell</h3>
              <p className="text-sm text-mid">
                Enter your license key. The next sale you ring up runs on RetailFlow.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
