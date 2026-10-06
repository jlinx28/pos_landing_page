export default function Hero() {
  return (
    <>
      <section className="hero-mesh relative overflow-hidden">
        {/* Big soft blobs */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(217, 119, 6, 0.3) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(47, 93, 80, 0.2) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(146, 64, 14, 0.1) 0%, transparent 70%)',
          }}
        ></div>

        {/* Dot pattern overlay */}
        <div
          className="absolute top-8 right-8 w-64 h-64 dot-pattern opacity-40 pointer-events-none"
          style={{
            maskImage:
              'radial-gradient(circle at top right, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(circle at top right, black 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute bottom-8 left-8 w-56 h-56 dot-pattern opacity-30 pointer-events-none"
          style={{
            maskImage:
              'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(circle at bottom left, black 0%, transparent 70%)',
          }}
        ></div>

        {/* Decorative SVG shapes */}
        <svg
          className="absolute top-20 left-[40%] w-32 h-16 opacity-50 pointer-events-none"
          viewBox="0 0 200 80"
          fill="none"
        >
          <path
            d="M5 60 Q 50 5, 100 40 T 195 30"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
        <svg
          className="absolute bottom-32 left-[20%] w-20 h-20 opacity-30 pointer-events-none float-3"
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
          className="absolute top-32 right-[8%] w-10 h-10 opacity-60 pointer-events-none float-1"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 5 L20 35 M5 20 L35 20"
            stroke="#92400E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-24 right-[6%] w-14 h-14 opacity-40 pointer-events-none float-2"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M28 4 L34 22 L52 22 L37 33 L43 51 L28 40 L13 51 L19 33 L4 22 L22 22 Z"
            fill="#D97706"
          />
        </svg>
        <svg
          className="absolute top-1/2 left-8 w-12 h-12 opacity-40 pointer-events-none"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="6"
            stroke="#92400E"
            strokeWidth="2"
            fill="none"
            transform="rotate(15 24 24)"
          />
        </svg>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-4rem)]">
          <div className="lg:col-span-7 min-w-0">
            <div
              className="inline-flex items-center gap-2 bg-white border rounded-full px-3.5 py-1 text-xs font-semibold mb-5 shadow-sm border-cream"
              style={{ color: '#92400e' }}
            >
              <span className="relative w-1.5 h-1.5 rounded-full secondary-bg pulse-dot"></span>
              Made for Philippine retail
            </div>

            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl text-deep leading-[1.05] font-medium">
              The POS that <em className="accent-text italic">never quits</em> on you.
            </h1>

            <p className="mt-5 text-base lg:text-lg text-mid max-w-lg">
              The offline-first Android POS for Filipino retail. Install on any tablet, set
              up your products, and start ringing up sales. No setup fees. No hardware
              required. No IT person needed.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="accent-bg text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                style={{ boxShadow: '0 10px 25px -5px rgba(217, 119, 6, 0.35)' }}
              >
                Start 14-day free trial
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-soft">
              <div className="flex -space-x-2">
                <div
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ background: '#d97706' }}
                ></div>
                <div
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ background: '#92400e' }}
                ></div>
                <div
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ background: '#2f5d50' }}
                ></div>
                <div
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ background: '#7c2d12' }}
                ></div>
              </div>
              <span>
                <strong className="text-deep">99+</strong> Filipino businesses · 4.9★
              </span>
            </div>
          </div>

          {/* Two phones tilted toward each other */}
          <div className="lg:col-span-5 min-w-0 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-[480px] sm:h-[600px] flex items-center justify-center">
              {/* Backdrop circles */}
              <div
                className="absolute left-[2%] top-[15%] w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(217, 119, 6, 0.28) 0%, rgba(217, 119, 6, 0.08) 60%, transparent 100%)',
                }}
              ></div>
              <div
                className="absolute right-[2%] bottom-[10%] w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(47, 93, 80, 0.22) 0%, rgba(47, 93, 80, 0.06) 60%, transparent 100%)',
                }}
              ></div>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(146, 64, 14, 0.1) 0%, transparent 65%)',
                }}
              ></div>

              {/* Phones */}
              <div className="relative flex items-center justify-center scale-[0.78] sm:scale-90 md:scale-100">
                {/* Front phone (LEFT) */}
                <div
                  className="relative z-20"
                  style={{
                    width: '215px',
                    transform: 'rotate(-8deg) translateY(20px)',
                    marginRight: '-55px',
                  }}
                >
                  <div className="phone-frame">
                    <span className="speaker"></span>
                    <span className="camera"></span>
                    <span className="btn-vol-up"></span>
                    <span className="btn-vol-down"></span>
                    <span className="btn-power"></span>
                    <div className="screen">
                      <img
                        src="/POS.JPG"
                        alt="RetailFlow POS checkout screen on a smartphone"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Back phone (RIGHT) */}
                <div
                  className="relative z-10"
                  style={{
                    width: '215px',
                    transform: 'rotate(8deg) translateY(-20px)',
                    marginLeft: '-55px',
                  }}
                >
                  <div className="phone-frame">
                    <span className="speaker"></span>
                    <span className="camera"></span>
                    <span className="btn-vol-up"></span>
                    <span className="btn-vol-down"></span>
                    <span className="btn-power"></span>
                    <div className="screen">
                      <img
                        src="/Sales.jpg"
                        alt="Sales analytics screen on a smartphone"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ₱49/month sticker */}
              <div
                className="absolute top-2 right-4 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg secondary-bg z-30"
                style={{ transform: 'rotate(10deg)' }}
              >
                ₱49/month
              </div>

              {/* Floating card 1: Sale total (top-left) */}
              <div
                className="absolute top-2 left-0 sm:-left-4 bg-white rounded-2xl shadow-xl border border-cream px-4 py-3 z-30 float-1"
                style={{ boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.25)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl accent-bg text-white flex items-center justify-center text-base font-bold">
                    ₱
                  </div>
                  <div>
                    <div className="text-[10px] text-soft uppercase tracking-wider font-semibold">
                      Today's sales
                    </div>
                    <div className="font-fraunces font-semibold text-deep text-lg leading-none">
                      ₱14,250
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 2: Sale completed (bottom-right) */}
              <div
                className="absolute bottom-4 right-0 sm:-right-4 bg-white rounded-2xl shadow-xl border border-cream px-4 py-3 z-30 float-2"
                style={{ boxShadow: '0 15px 35px -10px rgba(63, 29, 4, 0.25)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full secondary-bg text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-deep leading-tight">
                      Order #1284 paid
                    </div>
                    <div className="text-[10px] text-soft mt-0.5">2 sec ago · GCash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #fbefd9, transparent)' }}
        ></div>
      </section>

      {/* LOGO CLOUD */}
      <section className="bg-white py-12 border-y border-cream">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-soft mb-6">
            Trusted by businesses across the Philippines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70 text-sm font-semibold text-mid">
            <span className="font-fraunces">SARI · STORE</span>
            <span className="font-fraunces">KAFE MNL</span>
            <span className="font-fraunces">BARBERIA PH</span>
            <span className="font-fraunces">ROSE BAKERY</span>
            <span className="font-fraunces">LECHON KING</span>
            <span className="font-fraunces">BOTICA NENA</span>
          </div>
        </div>
      </section>
    </>
  );
}
