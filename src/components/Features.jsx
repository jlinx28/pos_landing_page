export default function Features() {
  return (
    <>
      <section id="features" className="bg-cream py-24 relative overflow-hidden">
        {/* Big soft blobs */}
        <div
          className="absolute -top-40 -right-32 w-[550px] h-[550px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(47, 93, 80, 0.15) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute -bottom-40 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(146, 64, 14, 0.1) 0%, transparent 70%)',
          }}
        ></div>

        {/* Dot pattern panels */}
        <div
          className="absolute top-32 right-12 w-72 h-72 opacity-35 pointer-events-none"
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
          className="absolute bottom-32 left-12 w-64 h-64 opacity-30 pointer-events-none"
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
          className="absolute top-12 left-[8%] w-32 h-16 opacity-50 pointer-events-none"
          viewBox="0 0 200 80"
          fill="none"
        >
          <path
            d="M5 30 Q 50 75, 100 40 T 195 50"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>

        <svg
          className="absolute top-1/3 right-4 w-24 h-24 opacity-25 pointer-events-none"
          viewBox="0 0 96 96"
          fill="none"
        >
          <circle cx="48" cy="48" r="42" stroke="#D97706" strokeWidth="2" fill="none" />
          <circle
            cx="48"
            cy="48"
            r="28"
            stroke="#D97706"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          <circle cx="48" cy="48" r="14" stroke="#D97706" strokeWidth="1" fill="none" />
        </svg>

        <svg
          className="absolute top-[28%] right-[12%] w-12 h-12 opacity-40 pointer-events-none float-2"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 4 L28 19 L43 21 L31 31 L35 46 L24 38 L13 46 L17 31 L5 21 L20 19 Z"
            fill="#92400E"
          />
        </svg>

        <svg
          className="absolute bottom-[35%] left-[6%] w-14 h-14 opacity-30 pointer-events-none float-1"
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

        <svg
          className="absolute top-[60%] right-[5%] w-10 h-10 opacity-50 pointer-events-none"
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
          className="absolute bottom-40 left-[40%] w-8 h-8 opacity-50 pointer-events-none"
          viewBox="0 0 32 32"
          fill="none"
        >
          <polygon points="16,4 28,28 4,28" fill="#D97706" opacity="0.6" />
        </svg>

        <svg
          className="absolute top-[15%] left-[35%] w-6 h-6 opacity-40 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
        >
          <polygon
            points="12,3 21,21 3,21"
            fill="#2F5D50"
            opacity="0.6"
            transform="rotate(180 12 12)"
          />
        </svg>

        {/* Wavy line bottom-right */}
        <svg
          className="absolute bottom-[20%] right-[15%] w-28 h-8 opacity-40 pointer-events-none"
          viewBox="0 0 120 30"
          fill="none"
        >
          <path
            d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15 T 115 15"
            stroke="#D97706"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Concentric dot rings mid-left */}
        <svg
          className="absolute top-[48%] left-[15%] w-10 h-10 opacity-40 pointer-events-none"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="3" fill="#92400E" />
          <circle cx="20" cy="20" r="10" stroke="#92400E" strokeWidth="1.5" fill="none" />
          <circle
            cx="20"
            cy="20"
            r="17"
            stroke="#92400E"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 3"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="mb-20 relative">
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
            <svg
              className="absolute top-2 -right-4 w-6 h-6 opacity-50 pointer-events-none hidden lg:block"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2 L13 10 L21 12 L13 14 L12 22 L11 14 L3 12 L11 10 Z"
                fill="#2F5D50"
              />
            </svg>
            <p className="text-xs uppercase tracking-widest accent-text font-bold mb-3">
              — Features
            </p>
            <h2 className="font-fraunces text-4xl sm:text-5xl text-deep leading-tight font-medium max-w-2xl">
              What you get when you choose <em className="accent-text italic">RetailFlow.</em>
            </h2>
          </div>

          {/* Row 1: image right, big "01" */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div
                  className="big-numeral absolute -top-32 -left-2 select-none pointer-events-none"
                  style={{ color: 'rgba(63, 29, 4, 0.05)' }}
                >
                  01
                </div>
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-[0.2em] accent-text font-bold mb-4">
                    Point of Sale
                  </div>
                  <h3 className="font-fraunces text-4xl sm:text-5xl text-deep mb-5 leading-[1.05]">
                    A checkout your<br />
                    <em className="accent-text italic">cashier loves.</em>
                  </h3>
                  <p className="text-mid text-lg mb-6 max-w-lg">
                    Scan a barcode, tap a payment, print the receipt. Under four seconds per
                    transaction and the flow feels obvious on day one.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white rounded-full text-xs font-semibold text-deep border border-cream">
                      Barcode
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-xs font-semibold text-deep border border-cream">
                      GCash · Maya
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-xs font-semibold text-deep border border-cream">
                      Receipts
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-xs font-semibold text-deep border border-cream">
                      Promos
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-full text-xs font-semibold text-deep border border-cream">
                      Hold orders
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div
                  className="absolute -inset-8 dot-pattern opacity-40 pointer-events-none rounded-full"
                  style={{
                    maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                  }}
                ></div>
                <div
                  className="absolute inset-0 blur-3xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.3) 0%, transparent 65%)',
                  }}
                ></div>
                <div className="relative flex justify-center">
                  <div className="relative">
                    <div className="mini-phone" style={{ transform: 'rotate(-5deg)' }}>
                      <div className="screen">
                        <img src="/POS.JPG" alt="POS checkout screen" />
                      </div>
                    </div>
                    <div
                      className="hidden sm:flex absolute -top-3 -left-12 items-center gap-2.5 bg-white rounded-2xl shadow-xl border border-cream px-3 py-2 z-20 float-1"
                      style={{ boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.25)' }}
                    >
                      <div className="w-9 h-9 rounded-xl accent-bg text-white flex items-center justify-center text-base font-bold">
                        ₱
                      </div>
                      <div>
                        <div className="text-[9px] text-soft uppercase tracking-wider font-semibold">
                          Today
                        </div>
                        <div className="font-fraunces font-semibold text-deep text-base leading-none">
                          ₱14,250
                        </div>
                      </div>
                    </div>
                    <div
                      className="hidden sm:flex absolute -bottom-2 -right-10 items-center gap-2 bg-white rounded-full shadow-xl border border-cream pl-1.5 pr-3 py-1.5 z-20 float-2"
                      style={{ boxShadow: '0 12px 28px -8px rgba(63, 29, 4, 0.22)' }}
                    >
                      <div className="w-7 h-7 rounded-full secondary-bg text-white flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-deep leading-tight">
                          Paid · GCash
                        </div>
                        <div className="text-[9px] text-soft leading-none mt-0.5">
                          2 sec ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: image left, big "02" */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div
                  className="absolute -inset-8 dot-pattern opacity-40 pointer-events-none rounded-full"
                  style={{
                    maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                  }}
                ></div>
                <div
                  className="absolute inset-0 blur-3xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(47, 93, 80, 0.3) 0%, transparent 65%)',
                  }}
                ></div>
                <div className="relative flex justify-center">
                  <div className="relative">
                    <div className="mini-phone" style={{ transform: 'rotate(5deg)' }}>
                      <div className="screen">
                        <img src="/Dashboard.jpg" alt="Dashboard analytics screen" />
                      </div>
                    </div>
                    <div
                      className="hidden sm:flex absolute -top-2 -right-8 items-center gap-2 bg-white rounded-full shadow-xl border border-cream pl-1.5 pr-3 py-1.5 z-20 float-1"
                      style={{ boxShadow: '0 12px 28px -8px rgba(47, 93, 80, 0.25)' }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(47, 93, 80, 0.15)' }}
                      >
                        <span className="w-2 h-2 rounded-full secondary-bg"></span>
                      </div>
                      <span className="text-xs font-semibold text-deep">Offline · syncing</span>
                    </div>
                    <div
                      className="hidden sm:flex absolute -bottom-3 -left-12 items-center gap-2.5 bg-white rounded-2xl shadow-xl border border-cream px-3 py-2 z-20 float-2"
                      style={{ boxShadow: '0 15px 35px -10px rgba(47, 93, 80, 0.2)' }}
                    >
                      <div className="w-9 h-9 rounded-xl secondary-bg text-white flex items-center justify-center text-base">
                        ⚡
                      </div>
                      <div>
                        <div className="text-[9px] text-soft uppercase tracking-wider font-semibold">
                          Brownouts
                        </div>
                        <div className="font-fraunces font-semibold text-deep text-base leading-none">
                          0 lost sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 relative z-10 order-1 lg:order-2">
                <div
                  className="big-numeral absolute -top-32 -right-2 select-none pointer-events-none"
                  style={{ color: 'rgba(47, 93, 80, 0.05)' }}
                >
                  02
                </div>
                <div className="relative z-10">
                  <div
                    className="text-xs uppercase tracking-[0.2em] font-bold mb-4"
                    style={{ color: '#2f5d50' }}
                  >
                    Offline-first
                  </div>
                  <h3 className="font-fraunces text-4xl sm:text-5xl text-deep mb-5 leading-[1.05]">
                    When the WiFi drops,<br />
                    <em className="italic" style={{ color: '#2f5d50' }}>
                      you keep selling.
                    </em>
                  </h3>
                  <p className="text-mid text-lg mb-6 max-w-lg">
                    Local SQLite storage. Every sale, every inventory update, every report all
                    working without internet. Reconnect later, everything syncs.
                  </p>
                  <div className="grid grid-cols-3 gap-4 max-w-md pt-4 border-t border-cream">
                    <div>
                      <div className="font-fraunces text-2xl font-semibold text-deep">100%</div>
                      <div className="text-xs text-soft uppercase tracking-wide">Offline</div>
                    </div>
                    <div>
                      <div className="font-fraunces text-2xl font-semibold text-deep">0</div>
                      <div className="text-xs text-soft uppercase tracking-wide">Lost sales</div>
                    </div>
                    <div>
                      <div className="font-fraunces text-2xl font-semibold text-deep">∞</div>
                      <div className="text-xs text-soft uppercase tracking-wide">Brownouts ok</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: multi-phone right, big "03" */}
          <div className="relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div
                  className="big-numeral absolute -top-32 -left-2 select-none pointer-events-none"
                  style={{ color: 'rgba(146, 64, 14, 0.05)' }}
                >
                  03
                </div>
                <div className="relative z-10">
                  <div
                    className="text-xs uppercase tracking-[0.2em] font-bold mb-4"
                    style={{ color: '#92400e' }}
                  >
                    Multi-device sync
                  </div>
                  <h3 className="font-fraunces text-4xl sm:text-5xl text-deep mb-5 leading-[1.05]">
                    Three cashier stations.<br />
                    <em className="italic accent-text">One WiFi. Zero cloud.</em>
                  </h3>
                  <p className="text-mid text-lg mb-6 max-w-lg">
                    Add devices as your shop grows. They sync over your local network, no monthly
                    cloud bill and no data leaving your store.
                  </p>
                  <ul className="space-y-2 text-mid">
                    <li className="flex items-center gap-3">
                      <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">
                        ✓
                      </span>
                      Any Android 8+ device
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">
                        ✓
                      </span>
                      Real-time inventory across stations
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">
                        ✓
                      </span>
                      Per-cashier PIN login & reports
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div
                  className="absolute inset-0 blur-3xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(146, 64, 14, 0.25) 0%, transparent 65%)',
                  }}
                ></div>
                <div className="relative flex justify-center items-end gap-1.5">
                  <div
                    className="mini-phone"
                    style={{ maxWidth: '120px', transform: 'rotate(-8deg)' }}
                  >
                    <div className="screen">
                      <img src="/Sales.jpg" alt="Sales history" />
                    </div>
                  </div>
                  <div className="mini-phone" style={{ maxWidth: '160px' }}>
                    <div className="screen">
                      <img src="/Products.jpg" alt="Products catalog" />
                    </div>
                  </div>
                  <div
                    className="mini-phone"
                    style={{ maxWidth: '120px', transform: 'rotate(8deg)' }}
                  >
                    <div className="screen">
                      <img src="/EOD.jpg" alt="End-of-day report" />
                    </div>
                  </div>
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full shadow-xl border border-cream pl-1.5 pr-3 py-1.5 z-20 float-1"
                    style={{ boxShadow: '0 12px 28px -8px rgba(146, 64, 14, 0.25)' }}
                  >
                    <div className="w-6 h-6 rounded-full accent-bg text-white flex items-center justify-center text-xs">
                      🔄
                    </div>
                    <span className="text-xs font-semibold text-deep">3 devices · synced</span>
                  </div>
                  <div
                    className="hidden sm:flex absolute -bottom-3 -right-4 items-center gap-2 bg-white rounded-2xl shadow-xl border border-cream px-3 py-2 z-20 float-2"
                    style={{ boxShadow: '0 12px 28px -8px rgba(146, 64, 14, 0.2)' }}
                  >
                    <div className="w-7 h-7 rounded-lg tertiary-bg text-white flex items-center justify-center text-sm">
                      📡
                    </div>
                    <div className="text-xs font-semibold text-deep leading-tight">
                      Local WiFi
                      <br />
                      <span className="text-[9px] text-soft font-normal">No cloud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLUS EVERYTHING ELSE */}
      <section className="bg-white border-y border-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 relative">
            <svg
              className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-8 opacity-50 pointer-events-none"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z"
                fill="#D97706"
              />
            </svg>
            <p className="text-xs uppercase tracking-[0.2em] accent-text font-bold mb-2">
              Plus everything else
            </p>
            <h3 className="font-fraunces text-2xl sm:text-3xl text-deep">
              No upsells. It's all included.
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: '📦', title: 'Inventory', sub: 'Stock & alerts', num: '07', tone: 'accent', blob: 'rgba(217, 119, 6, 0.3)', bg: 'accent-bg', shadow: 'rgba(217, 119, 6, 0.4)', textCls: 'accent-text', textColor: null },
              { icon: '↩️', title: 'Refunds', sub: 'Full audit trail', num: '08', tone: 'secondary', blob: 'rgba(47, 93, 80, 0.25)', bg: 'secondary-bg', shadow: 'rgba(47, 93, 80, 0.4)', textCls: 'secondary-text', textColor: null },
              { icon: '🖨️', title: 'Receipts', sub: 'PDF + thermal', num: '09', tone: 'tertiary', blob: 'rgba(146, 64, 14, 0.25)', bg: 'tertiary-bg', shadow: 'rgba(146, 64, 14, 0.4)', textCls: '', textColor: '#92400e' },
              { icon: '👥', title: 'Roles & PIN', sub: 'Per-cashier access', num: '10', tone: 'accent', blob: 'rgba(217, 119, 6, 0.3)', bg: 'accent-bg', shadow: 'rgba(217, 119, 6, 0.4)', textCls: 'accent-text', textColor: null },
              { icon: '🏷️', title: 'Promo codes', sub: 'Discounts & VAT', num: '11', tone: 'secondary', blob: 'rgba(47, 93, 80, 0.25)', bg: 'secondary-bg', shadow: 'rgba(47, 93, 80, 0.4)', textCls: 'secondary-text', textColor: null },
              { icon: '🧾', title: 'EOD reports', sub: 'Auto cash count', num: '12', tone: 'tertiary', blob: 'rgba(146, 64, 14, 0.25)', bg: 'tertiary-bg', shadow: 'rgba(146, 64, 14, 0.4)', textCls: '', textColor: '#92400e' },
            ].map((card) => (
              <article
                key={card.num}
                className="group relative rounded-2xl p-5 border bg-cream/40 hover:bg-cream transition border-cream overflow-hidden"
              >
                <div
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-full blur-2xl pointer-events-none opacity-70"
                  style={{ background: card.blob }}
                ></div>
                <div className="relative flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${card.bg} text-white flex items-center justify-center text-lg shadow-md`}
                    style={{ boxShadow: `0 6px 14px -4px ${card.shadow}` }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono ${card.textCls} font-bold opacity-60`}
                    style={card.textColor ? { color: card.textColor } : undefined}
                  >
                    {card.num}
                  </span>
                </div>
                <h4 className="font-fraunces text-base text-deep leading-tight">
                  {card.title}
                </h4>
                <p className="text-[11px] text-soft mt-0.5">{card.sub}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
