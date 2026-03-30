const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Owner, Sari-Sari Store',
    location: 'Quezon City',
    text: 'Dati papel at bolpen lang gamit ko sa pagtrack ng benta. Ngayon sobrang dali na! Kahit walang internet gumagana pa rin. Sulit na sulit ang investment.',
    rating: 5,
    initials: 'MS',
    color: 'bg-primary',
  },
  {
    name: 'Ricardo Dela Cruz',
    role: 'Manager, RC Hardware',
    location: 'Cebu City',
    text: 'We have 3 cashier stations and the LAN sync is perfect. No need for cloud or internet — everything syncs instantly. End-of-day reports save us hours every night.',
    rating: 5,
    initials: 'RD',
    color: 'bg-accent',
  },
  {
    name: 'Jenny Lim',
    role: 'Owner, JL Mini Mart',
    location: 'Davao City',
    text: 'The barcode scanner is a game changer! Checkout is so much faster now. My customers don\'t have to wait in long lines anymore. Very happy with this app.',
    rating: 5,
    initials: 'JL',
    color: 'bg-primary-dark',
  },
  {
    name: 'Antonio Reyes',
    role: 'Owner, Reyes General Merchandise',
    location: 'Manila',
    text: 'Ang ganda ng dashboard — nakikita ko agad kung anong products ang mabenta. Ang refund system nila napakadali gamitin. Highly recommended sa lahat ng may tindahan!',
    rating: 5,
    initials: 'AR',
    color: 'bg-accent-dark',
  },
  {
    name: 'Patricia Go',
    role: 'Owner, PG Beauty Supply',
    location: 'Makati',
    text: 'I tried other POS apps before but they all need internet. RetailFlow works offline which is perfect for my store. The inventory tracking helps me know when to restock.',
    rating: 5,
    initials: 'PG',
    color: 'bg-dark-light',
  },
  {
    name: 'Mark Villanueva',
    role: 'Owner, MV Phone Accessories',
    location: 'Iloilo City',
    text: 'Super worth it yung lifetime plan. One-time payment lang tapos lifetime na. Yung PIN login system nila perfect para sa mga cashier ko. Walang hassle.',
    rating: 5,
    initials: 'MV',
    color: 'bg-primary',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Trusted by Filipino Business Owners
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See what our customers have to say about RetailFlow POS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-text-secondary text-sm leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">{t.name}</div>
                  <div className="text-xs text-text-secondary">{t.role} &middot; {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
