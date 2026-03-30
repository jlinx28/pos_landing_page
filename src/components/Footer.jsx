export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/icon.png" alt="RetailFlow POS" className="w-6 h-6 rounded-md" />
            <span className="text-white/80 text-sm font-medium">RetailFlow POS</span>
          </div>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} RetailFlow POS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
