import { useState } from 'react';

const SCREENS = [
  { label: 'Expenses', src: '/Expenses.jpg' },
  { label: 'Sales', src: '/Sales.jpg' },
  { label: 'Point of Sale', src: '/POS.JPG' },
  { label: 'Dashboard', src: '/Dashboard.jpg' },
  { label: 'EOD reports', src: '/EOD.jpg' },
  { label: 'Products', src: '/Products.jpg' },
  { label: 'More', src: '/More.jpg' },
];

export default function Screenshots() {
  const [active, setActive] = useState(2);
  const N = SCREENS.length;
  const current = SCREENS[active];
  const prev = SCREENS[(active - 1 + N) % N];
  const next = SCREENS[(active + 1) % N];

  return (
    <section
      id="screenshots"
      className="dark-section text-white py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest font-bold mb-3"
            style={{ color: '#fba94c' }}
          >
            App preview
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-white leading-tight font-medium">
            Designed for{' '}
            <em className="italic" style={{ color: '#fba94c' }}>
              speed and clarity.
            </em>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Built for the cashier who's been on shift for six hours. Big targets, instant
            feedback, no learning curve.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left annotations */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 lg:translate-x-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-full accent-bg text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h4 className="font-fraunces text-sm text-white">Quick search</h4>
              </div>
              <p className="text-xs text-white/60">
                Type or scan — products show in &lt;200ms.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-full secondary-bg text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h4 className="font-fraunces text-sm text-white">Category chips</h4>
              </div>
              <p className="text-xs text-white/60">Tap to filter. Designed for thumbs.</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 lg:translate-x-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-full tertiary-bg text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h4 className="font-fraunces text-sm text-white">Big touch targets</h4>
              </div>
              <p className="text-xs text-white/60">No accidental taps. 80px+ per card.</p>
            </div>
          </div>

          {/* Center coverflow row */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Left fading phone */}
            <div
              className="hidden md:block opacity-45 brightness-90 cursor-pointer"
              style={{ transform: 'translateX(-30px) translateY(8px) scale(0.78)' }}
              onClick={() => setActive((active - 1 + N) % N)}
            >
              <div style={{ width: '160px' }}>
                <div className="phone-frame relative">
                  <span className="speaker"></span>
                  <span className="camera"></span>
                  <span className="btn-vol-up"></span>
                  <span className="btn-vol-down"></span>
                  <span className="btn-power"></span>
                  <div className="screen">
                    <img src={prev.src} alt={prev.label} />
                  </div>
                </div>
              </div>
            </div>

            {/* Center spotlight phone */}
            <div className="relative z-10 mx-2">
              <div
                className="absolute -inset-10 rounded-full blur-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(217, 119, 6, 0.4) 0%, transparent 65%)',
                }}
              ></div>
              <div style={{ width: '230px' }} className="relative">
                <div className="phone-frame relative">
                  <span className="speaker"></span>
                  <span className="camera"></span>
                  <span className="btn-vol-up"></span>
                  <span className="btn-vol-down"></span>
                  <span className="btn-power"></span>
                  <div className="screen">
                    <img src={current.src} alt={current.label} />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="font-fraunces text-xl text-white">{current.label}</h3>
                <p className="text-xs text-white/50 mt-1">Active screen · tap to switch</p>
              </div>
            </div>

            {/* Right fading phone */}
            <div
              className="hidden md:block opacity-45 brightness-90 cursor-pointer"
              style={{ transform: 'translateX(30px) translateY(8px) scale(0.78)' }}
              onClick={() => setActive((active + 1) % N)}
            >
              <div style={{ width: '160px' }}>
                <div className="phone-frame relative">
                  <span className="speaker"></span>
                  <span className="camera"></span>
                  <span className="btn-vol-up"></span>
                  <span className="btn-vol-down"></span>
                  <span className="btn-power"></span>
                  <div className="screen">
                    <img src={next.src} alt={next.label} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right annotations */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 lg:-translate-x-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-full accent-bg text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h4 className="font-fraunces text-sm text-white">Live cart</h4>
              </div>
              <p className="text-xs text-white/60">Cart updates as you add. Total visible.</p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-full secondary-bg text-white text-xs font-bold flex items-center justify-center">
                  5
                </span>
                <h4 className="font-fraunces text-sm text-white">Tap to checkout</h4>
              </div>
              <p className="text-xs text-white/60">
                One tap to total. One more to mark paid.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 lg:-translate-x-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-7 rounded-full tertiary-bg text-white text-xs font-bold flex items-center justify-center">
                  6
                </span>
                <h4 className="font-fraunces text-sm text-white">Bottom nav</h4>
              </div>
              <p className="text-xs text-white/60">
                POS · Products · Expenses · Dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Pagination + screen quick-jump strip */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {SCREENS.map((s, i) =>
              i === active ? (
                <span
                  key={s.label}
                  className="h-2 w-8 rounded-full"
                  style={{ background: '#fba94c' }}
                ></span>
              ) : (
                <button
                  key={s.label}
                  onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition"
                  aria-label={`Show ${s.label}`}
                ></button>
              )
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            {SCREENS.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={
                  i === active
                    ? 'px-3 py-1.5 rounded-full text-xs accent-bg text-white font-bold'
                    : 'px-3 py-1.5 rounded-full text-xs text-white/60 hover:bg-white/10 transition'
                }
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
