const particles = Array.from({ length: 60 }, () => ({
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2.5 + 1,
  opacity: Math.random() * 0.15 + 0.05,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 20,
}));

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pb-0 overflow-hidden min-h-screen flex items-center">
      {/* Background — dark base */}
      <div className="absolute inset-0 bg-[#1D2530]" />

      {/* Subtle accent glow so it's not pure black */}
      <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-[#1E88E5] opacity-[0.06] blur-[150px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#26A69A] opacity-[0.04] blur-[130px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: p.left,
              bottom: "-5%",
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `drift-up ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Bottom fade to surface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              Run Your Store,
              <span className="block text-transparent bg-clip-text bg-cyan-700">
                Even Without Internet
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-200">
              The offline-first POS built for Filipino businesses. Manage sales,
              inventory, and expenses — no internet required.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-300">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
              >
                Start 14-Day Free Trial
              </a>
              <a
                href="#screenshots"
                className="w-full sm:w-auto bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-xl text-base font-semibold transition-all group"
              >
                <span className="flex items-center justify-center gap-2">
                  See It In Action
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-white/40 text-sm animate-fade-in-up animate-delay-400">
              {[
                "No credit card needed",
                "Cancel anytime",
                "Full features included",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-4 animate-fade-in-up animate-delay-400">
              {[
                { value: "100%", label: "Offline Ready" },
                { value: "3+", label: "Devices Synced" },
                { value: "<5 min", label: "Setup Time" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/30 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone mockups (overlapping fan) */}
          <div className="relative h-[500px] sm:h-[560px] lg:h-[620px] flex items-center justify-center animate-fade-in-up animate-delay-300">
            {/* Left phone — Dashboard */}
            <div className="absolute w-[180px] sm:w-[210px] z-10 -rotate-6 -translate-x-[40%] sm:-translate-x-[55%] translate-y-2 hover:-rotate-3 hover:-translate-y-1 transition-all duration-500">
              <div className="rounded-[1.8rem] border-[3px] border-white/10 overflow-hidden shadow-2xl shadow-black/60 bg-[#0a1628]">
                <img
                  src="/Dashboard.jpg"
                  alt="Dashboard view"
                  className="w-full aspect-[9/19] object-cover object-top"
                  draggable={false}
                />
              </div>
              <div className="mt-3 text-center opacity-60">
                <span className="text-xs text-white/30 font-medium">
                  Dashboard
                </span>
              </div>
            </div>

            {/* Center phone — POS */}
            <div className="relative z-30 w-[220px] sm:w-[260px] hover:scale-[1.03] transition-transform duration-500">
              <div className="absolute -inset-12 bg-primary/15 rounded-full blur-[80px]" />
              <div className="relative rounded-[2.2rem] border-4 border-primary/40 overflow-hidden shadow-2xl shadow-primary/20 bg-[#0a1628] ring-1 ring-white/10">
                <img
                  src="/POS.JPG"
                  alt="POS checkout screen"
                  className="w-full aspect-[9/19] object-cover object-top"
                  draggable={false}
                />
              </div>
              <div className="relative mt-3 text-center">
                <span className="text-xs text-white/50 font-semibold bg-white/[0.08] px-3 py-1 rounded-full">
                  Point of Sale
                </span>
              </div>
            </div>

            {/* Right phone — Sales */}
            <div className="absolute w-[180px] sm:w-[210px] z-10 rotate-6 translate-x-[40%] sm:translate-x-[55%] translate-y-2 hover:rotate-3 hover:-translate-y-1 transition-all duration-500">
              <div className="rounded-[1.8rem] border-[3px] border-white/10 overflow-hidden shadow-2xl shadow-black/60 bg-[#0a1628]">
                <img
                  src="/Sales.jpg"
                  alt="Sales history view"
                  className="w-full aspect-[9/19] object-cover object-top"
                  draggable={false}
                />
              </div>
              <div className="mt-3 text-center opacity-60">
                <span className="text-xs text-white/30 font-medium">
                  Sales History
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
