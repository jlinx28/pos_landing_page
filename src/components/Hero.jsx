export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Works 100% Offline</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animate-delay-100">
            Your Store, Always
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
              In Your Hands
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Offline-first Point of Sale for Filipino businesses. No internet required.
            Multi-device support. Manage sales, inventory, and expenses with ease.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started Free
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-xl text-base font-semibold transition-all"
            >
              View Pricing
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/50 text-sm animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card needed</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
