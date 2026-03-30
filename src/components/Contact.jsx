export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
          Have questions or want to get your license? Message us on Facebook.
        </p>

        <a
          href="https://web.facebook.com/profile.php?id=61576441597444"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#1877F2]/30 hover:scale-[1.02]"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Message Us on Facebook
        </a>
      </div>
    </section>
  );
}
