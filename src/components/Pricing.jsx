export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 relative overflow-hidden">
      {/* Big soft blobs */}
      <div
        className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
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
        className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(146, 64, 14, 0.1) 0%, transparent 70%)',
        }}
      ></div>

      {/* Dot pattern panels */}
      <div
        className="absolute top-12 left-8 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at top left, black 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute bottom-12 right-8 w-64 h-64 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(circle at bottom right, black 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at bottom right, black 0%, transparent 70%)',
        }}
      ></div>

      {/* Decorative SVG marks */}
      <svg
        className="absolute top-20 right-[10%] w-32 h-16 opacity-50 pointer-events-none"
        viewBox="0 0 200 80"
        fill="none"
      >
        <path
          d="M5 50 Q 50 5, 100 40 T 195 30"
          stroke="#D97706"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <svg
        className="absolute top-1/3 left-4 w-20 h-20 opacity-25 pointer-events-none"
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
        className="absolute bottom-32 left-[10%] w-12 h-12 opacity-40 pointer-events-none"
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
        className="absolute top-[40%] right-4 w-10 h-10 opacity-50 pointer-events-none"
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
        className="absolute bottom-24 right-[42%] w-8 h-8 opacity-50 pointer-events-none"
        viewBox="0 0 32 32"
        fill="none"
      >
        <polygon points="16,4 28,28 4,28" fill="#D97706" opacity="0.6" />
      </svg>
      <svg
        className="absolute top-[60%] left-[8%] w-14 h-14 opacity-30 pointer-events-none"
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
            className="absolute -top-4 left-[280px] w-7 h-7 opacity-60 pointer-events-none hidden sm:block"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M14 2 L16 12 L26 14 L16 16 L14 26 L12 16 L2 14 L12 12 Z"
              fill="#D97706"
            />
          </svg>
          <p className="text-xs uppercase tracking-widest accent-text font-bold mb-3">
            Pricing
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-deep leading-tight font-medium">
            Simple, <em className="accent-text italic">honest</em> pricing.
          </h2>
          <p className="mt-4 text-lg text-mid">
            All features included. Pay monthly or once. 14-day free trial on every plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto md:items-stretch">
          {/* Basic */}
          <article className="rounded-3xl p-8 bg-cream border border-cream flex flex-col">
            <h3 className="font-fraunces text-2xl text-deep">Basic</h3>
            <p className="text-sm text-soft mb-6">1 device</p>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-fraunces text-5xl text-deep">₱49</span>
                <span className="text-sm text-mid">/month</span>
              </div>
              <div className="text-sm text-soft mt-2">
                or <span className="accent-text font-semibold">₱499 one-time</span>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-mid flex-1">
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Full POS system
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Inventory & products
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Sales & expense tracking
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> EOD reports & dashboard
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Refund management
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Receipt printing
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Works offline
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 block text-center bg-deep text-white px-6 py-3 rounded-full font-semibold hover:bg-mid"
              style={{ background: '#3f1d04' }}
            >
              Start free trial
            </a>
          </article>

          {/* Pro (featured) */}
          <article
            className="rounded-3xl p-8 text-white flex flex-col relative md:-my-4 md:py-12 shadow-2xl"
            style={{
              background: '#3f1d04',
              boxShadow: '0 25px 50px -12px rgba(63, 29, 4, 0.4)',
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="accent-bg text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most popular
              </span>
            </div>
            <h3 className="font-fraunces text-2xl">Pro</h3>
            <p className="text-sm text-white/60 mb-6">Up to 3 devices</p>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-fraunces text-5xl">₱99</span>
                <span className="text-sm text-white/60">/month</span>
              </div>
              <div className="text-sm text-white/50 mt-2">
                or{' '}
                <span style={{ color: '#fba94c' }} className="font-semibold">
                  ₱999 one-time
                </span>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80 flex-1">
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Everything in Basic
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Multi-device LAN sync
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Multiple cashier stations
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Employee management & PIN
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Role-based access
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Tax settings · Promo codes
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#fba94c' }}>✓</span> Priority support
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 block text-center accent-bg text-white px-6 py-3 rounded-full font-semibold"
            >
              Start free trial
            </a>
          </article>

          {/* Custom */}
          <article className="rounded-3xl p-8 bg-cream border border-cream flex flex-col">
            <h3 className="font-fraunces text-2xl text-deep">Custom</h3>
            <p className="text-sm text-soft mb-6">Unlimited devices</p>
            <div>
              <div className="font-fraunces text-4xl text-deep">Let's talk</div>
              <div className="text-sm text-soft mt-2">
                Tailored for chains & enterprise
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-mid flex-1">
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Everything in Pro
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Unlimited devices
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Custom branding
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Dedicated support
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> Custom feature requests
              </li>
              <li className="flex gap-2">
                <span className="accent-text">✓</span> On-site setup assistance
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 block text-center accent-soft accent-text px-6 py-3 rounded-full font-semibold border border-cream"
            >
              Contact sales
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
