export default function Footer() {
  return (
    <>
      {/* Decorative gradient hairline separates CTA from Footer */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(217,119,6,0.50) 30%, rgba(47,93,80,0.50) 70%, transparent 100%)',
        }}
      ></div>

      <footer className="text-white py-16 relative" style={{ background: '#0a0500' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/icon.png" alt="RetailFlow" className="w-8 h-8 rounded-md" />
                <span className="font-fraunces font-bold text-lg">RetailFlow</span>
              </div>
              <p className="text-sm text-white/60 max-w-xs">
                The offline-first POS built for Filipino retail. Sell anywhere — even off the
                grid.
              </p>
              <div className="mt-6 flex gap-3">
                <a className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm">
                  f
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#screenshots">App preview</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Privacy</a>
                </li>
                <li>
                  <a>Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <div>&copy; 2026 RetailFlow POS. All rights reserved.</div>
            <div>Made in the Philippines 🇵🇭</div>
          </div>
        </div>
      </footer>
    </>
  );
}
