import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-cream/85 border-b border-cream">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/icon.png" alt="RetailFlow" className="w-8 h-8 rounded-md" />
          <span className="font-fraunces font-bold text-lg text-deep">RetailFlow</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-mid">
          <a href="#features" className="hover:text-deep">Features</a>
          <a href="#industries" className="hover:text-deep">Industries</a>
          <a href="#screenshots" className="hover:text-deep">App preview</a>
          <a href="#pricing" className="hover:text-deep">Pricing</a>
          <a href="#faq" className="hover:text-deep">FAQ</a>
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold accent-bg text-white px-3.5 sm:px-5 py-2 rounded-full whitespace-nowrap"
          >
            <span className="sm:hidden">Free trial</span>
            <span className="hidden sm:inline">Start free trial</span>
          </a>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-deep hover:bg-cream-deep rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {!open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-cream bg-white/95 backdrop-blur">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {[
              ['#features', 'Features'],
              ['#industries', 'Industries'],
              ['#screenshots', 'App preview'],
              ['#pricing', 'Pricing'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="py-3 px-4 text-sm font-semibold text-deep hover:bg-cream rounded-lg flex items-center justify-between"
              >
                {label}
                <span className="text-soft text-xs">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
