export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-cream relative overflow-hidden py-24"
    >
      {/* Big soft blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 119, 6, 0.22) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47, 93, 80, 0.18) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(146, 64, 14, 0.12) 0%, transparent 70%)",
        }}
      ></div>

      {/* Dot pattern panels */}
      <div
        className="absolute top-12 left-8 w-72 h-72 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(circle at top left, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at top left, black 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-12 right-8 w-64 h-64 opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(146, 64, 14, 0.2) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(circle at bottom right, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at bottom right, black 0%, transparent 70%)",
        }}
      ></div>

      {/* Decorative SVG marks */}
      <svg
        className="absolute top-16 right-[15%] w-32 h-16 opacity-50 pointer-events-none"
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
        className="absolute top-1/2 left-4 w-20 h-20 opacity-30 pointer-events-none"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle
          cx="40"
          cy="40"
          r="34"
          stroke="#2F5D50"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="22"
          stroke="#2F5D50"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
        <circle
          cx="40"
          cy="40"
          r="10"
          stroke="#2F5D50"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <svg
        className="absolute bottom-32 left-12 w-12 h-12 opacity-50 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M24 6 L24 42 M6 24 L42 24"
          stroke="#92400E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute top-32 left-[42%] w-16 h-16 opacity-40 pointer-events-none"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 4 L38 25 L60 25 L42 37 L48 60 L32 46 L16 60 L22 37 L4 25 L26 25 Z"
          fill="#D97706"
          opacity="0.7"
        />
      </svg>
      <svg
        className="absolute bottom-20 right-[20%] w-14 h-14 opacity-35 pointer-events-none"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect
          x="8"
          y="8"
          width="40"
          height="40"
          rx="8"
          stroke="#92400E"
          strokeWidth="2"
          fill="none"
          transform="rotate(15 28 28)"
        />
      </svg>
      <svg
        className="absolute top-[55%] right-6 w-10 h-10 opacity-40 pointer-events-none"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="3" fill="#2F5D50" />
        <circle
          cx="20"
          cy="20"
          r="10"
          stroke="#2F5D50"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="#2F5D50"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
      </svg>
      <svg
        className="absolute top-24 left-[28%] w-8 h-8 opacity-50 pointer-events-none"
        viewBox="0 0 32 32"
        fill="none"
      >
        <polygon points="16,4 28,28 4,28" fill="#92400E" opacity="0.6" />
      </svg>
      <svg
        className="absolute bottom-40 right-[35%] w-6 h-6 opacity-40 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
      >
        <polygon
          points="12,3 21,21 3,21"
          fill="#2F5D50"
          opacity="0.5"
          transform="rotate(180 12 12)"
        />
      </svg>
      <svg
        className="absolute top-[40%] left-[10%] w-24 h-8 opacity-40 pointer-events-none"
        viewBox="0 0 100 30"
        fill="none"
      >
        <path
          d="M5 15 Q 15 5, 25 15 T 45 15 T 65 15 T 85 15 T 95 15"
          stroke="#92400E"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto relative">
          <svg
            className="absolute -top-6 -left-8 w-8 h-8 opacity-60 pointer-events-none"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z"
              fill="#D97706"
            />
          </svg>
          <svg
            className="absolute -bottom-4 -right-6 w-6 h-6 opacity-50 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2 L13 10 L21 12 L13 14 L12 22 L11 14 L3 12 L11 10 Z"
              fill="#2F5D50"
            />
          </svg>
          <p className="text-xs uppercase tracking-widest accent-text font-bold mb-3">
            Industries
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-deep leading-tight font-medium">
            See how RetailFlow works for{" "}
            <em className="accent-text italic">your kind of business.</em>
          </h2>
        </div>

        {/* Tab chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 relative">
          <button className="bg-white border border-cream px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-mid hover:border-orange-300">
            <span>🏪</span> Sari-sari
          </button>
          <button className="bg-white border border-cream px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-mid hover:border-orange-300">
            <span>🍜</span> Restaurants
          </button>
          <button className="bg-white border border-cream px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-mid hover:border-orange-300">
            <span>☕</span> Cafés & bakeries
          </button>
          <button className="bg-white border border-cream px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-mid hover:border-orange-300">
            <span>💊</span> Pharmacies
          </button>
          <button className="bg-white border border-cream px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-mid hover:border-orange-300">
            <span>👗</span> Boutiques
          </button>
        </div>

        {/* Preview pane */}
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] border-2 border-dashed pointer-events-none opacity-25"
            style={{ borderColor: "#d97706" }}
          ></div>
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full accent-bg shadow-lg z-10"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full secondary-bg shadow-lg z-10"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full tertiary-bg shadow-lg z-10"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full accent-bg shadow-lg z-10"></div>

          <div
            className="bg-white rounded-3xl border border-cream p-8 lg:p-12 relative overflow-hidden"
            style={{ boxShadow: "0 25px 50px -15px rgba(63, 29, 4, 0.15)" }}
          >
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(217, 119, 6, 0.2)" }}
            ></div>
            <div
              className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(47, 93, 80, 0.12)" }}
            ></div>
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-25 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(146, 64, 14, 0.3) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                maskImage:
                  "radial-gradient(circle at top right, black 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle at top right, black 0%, transparent 70%)",
              }}
            ></div>

            <svg
              className="absolute top-6 left-6 w-10 h-10 opacity-40 pointer-events-none"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="14"
                stroke="#D97706"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3 3"
              />
              <circle cx="20" cy="20" r="3" fill="#D97706" />
            </svg>
            <svg
              className="absolute bottom-6 right-6 w-12 h-12 opacity-35 pointer-events-none"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M24 4 L28 19 L43 21 L31 31 L35 46 L24 38 L13 46 L17 31 L5 21 L20 19 Z"
                fill="#2F5D50"
              />
            </svg>

            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="font-fraunces text-3xl text-deep mb-4 leading-tight">
                  Replace the <em className="accent-text italic">notebook</em>{" "}
                  for good.
                </h3>
                <p className="text-mid mb-6">
                  Quick checkout for high-volume foot traffic. Track inventory
                  and tubo without spreadsheets. Brownout-proof so the store
                  keeps running.
                </p>
                <ul className="space-y-2.5 text-sm text-mid mb-6">
                  <li className="flex items-start gap-3">
                    <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    Quick-scan checkout (under 4 sec per sale)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    Low-stock alerts so you never run out of bestsellers
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    Daily cash count + EOD report (no more counting at midnight)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="accent-bg text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    Multi-cashier on one WiFi (busy nights covered)
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 relative flex justify-center">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 300 400"
                  fill="none"
                >
                  <circle
                    cx="150"
                    cy="200"
                    r="140"
                    stroke="#D97706"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    opacity="0.30"
                  />
                  <circle
                    cx="150"
                    cy="200"
                    r="100"
                    stroke="#D97706"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    opacity="0.40"
                  />
                </svg>
                <div
                  className="absolute inset-4 rounded-full blur-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(217, 119, 6, 0.3) 0%, transparent 65%)",
                  }}
                ></div>

                <div className="relative">
                  <div
                    className="mini-phone"
                    style={{ transform: "rotate(-4deg)" }}
                  >
                    <div className="screen">
                      <img src="/POS.JPG" alt="POS" />
                    </div>
                  </div>
                  <div className="absolute -top-3 -left-10 bg-white rounded-2xl shadow-xl border border-cream px-3 py-2 flex items-center gap-2 z-20">
                    <div className="w-8 h-8 rounded-lg accent-bg text-white flex items-center justify-center text-sm font-bold">
                      ₱
                    </div>
                    <div>
                      <div className="text-[9px] text-soft uppercase tracking-wider font-semibold">
                        Today
                      </div>
                      <div className="font-fraunces font-semibold text-deep text-sm leading-none">
                        ₱14,250
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
