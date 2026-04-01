const testimonials = [
  {
    name: "Maria Santos",
    role: "Owner, Sari-Sari Store",
    location: "Quezon City",
    text: "Dati papel at bolpen lang gamit ko sa pagtrack ng benta. Ngayon sobrang dali na! Kahit walang internet gumagana pa rin. Sulit na sulit ang investment.",
    rating: 5,
    initials: "MS",
    accent: true,
    accentBg: "bg-dark",
  },
  {
    name: "Ricardo Dela Cruz",
    role: "Manager, RC Hardware",
    location: "Cebu City",
    text: "We have 3 cashier stations and the LAN sync is perfect. No need for cloud or internet — everything syncs instantly. End-of-day reports save us hours every night.",
    rating: 5,
    initials: "RD",
  },
  {
    name: "Jenny Lim",
    role: "Owner, JL Mini Mart",
    location: "Davao City",
    text: "The barcode scanner is a game changer! Checkout is so much faster now. My customers don't have to wait in long lines anymore. Very happy with this app.",
    rating: 5,
    initials: "JL",
  },
  {
    name: "Antonio Reyes",
    role: "Owner, Reyes General Merchandise",
    location: "Manila",
    text: "Ang ganda ng dashboard — nakikita ko agad kung anong products ang mabenta. Ang refund system nila napakadali gamitin. Highly recommended sa lahat ng may tindahan!",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Patricia Go",
    role: "Owner, PG Beauty Supply",
    location: "Makati",
    text: "I tried other POS apps before but they all need internet. RetailFlow works offline which is perfect for my store. The inventory tracking helps me know when to restock.",
    rating: 5,
    initials: "PG",
    accent: true,
    accentBg: "bg-primary",
  },
  {
    name: "Mark Villanueva",
    role: "Owner, MV Phone Accessories",
    location: "Iloilo City",
    text: "Super worth it yung lifetime plan. One-time payment lang tapos lifetime na. Yung PIN login system nila perfect para sa mga cashier ko. Walang hassle.",
    rating: 5,
    initials: "MV",
  },
  {
    name: "Camille Tan",
    role: "Owner, CT Bakeshop",
    location: "Bacolod City",
    text: "Napakadali i-setup, less than 5 minutes lang tapos ready na. Yung receipt printing feature sobrang helpful para sa mga customer ko. Hindi na kailangan ng manual resibo.",
    rating: 5,
    initials: "CT",
  },
  {
    name: "Daniel Aquino",
    role: "Owner, DA Electronics",
    location: "Pampanga",
    text: "The held orders feature is a lifesaver for us. Customers can reserve items and we just pull up the order when they come back. Very smooth workflow.",
    rating: 5,
    initials: "DA",
    accent: true,
    accentBg: "bg-accent",
  },
  {
    name: "Grace Mendoza",
    role: "Owner, GM Grocery",
    location: "Taguig",
    text: "Ang linis ng design ng app. Hindi nakakalito gamitin kahit yung mga bagong cashier ko natututo agad. Yung PIN login system solid talaga.",
    rating: 5,
    initials: "GM",
  },
  {
    name: "Bryan Torres",
    role: "Manager, BT Auto Parts",
    location: "Cavite",
    text: "We switched from a paper-based system and the difference is night and day. Inventory tracking alone saved us thousands in lost stock every month.",
    rating: 5,
    initials: "BT",
  },
  {
    name: "Sofia Ramos",
    role: "Owner, Sofia's Boutique",
    location: "Cebu City",
    text: "Yung promo codes feature ang dami kong nagagawa — percentage off, fixed discount, per product. Ang dali mag-setup ng sale events para sa store ko.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "Leo Castillo",
    role: "Owner, LC General Store",
    location: "Zamboanga",
    text: "Offline talaga siya gumagana, na-test ko nung nag-brownout sa area namin. Tuloy-tuloy pa rin ang benta. Tapos automatic sync kapag bumalik na ang internet.",
    rating: 5,
    initials: "LC",
    accent: true,
    accentBg: "bg-dark",
  },
];

function Stars({ count, light }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${light ? "text-yellow-300" : "text-yellow-400"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }) {
  return (
    <div
      className={`rounded-2xl p-6 shrink-0 ${
        t.accent
          ? `${t.accentBg} text-white`
          : "bg-white border border-border"
      }`}
    >
      <Stars count={t.rating} light={t.accent} />
      <p
        className={`mt-4 leading-relaxed ${
          t.accent ? "text-white/85 text-base" : "text-text-secondary text-sm"
        }`}
      >
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
            t.accent ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {t.initials}
        </div>
        <div>
          <div
            className={`font-semibold text-sm ${t.accent ? "text-white" : "text-dark"}`}
          >
            {t.name}
          </div>
          <div
            className={`text-xs ${t.accent ? "text-white/50" : "text-text-secondary"}`}
          >
            {t.role} &middot; {t.location}
          </div>
        </div>
      </div>
    </div>
  );
}

// Distribute into 3 columns
const columns = [[], [], []];
testimonials.forEach((t, i) => columns[i % 3].push(t));

function MarqueeColumn({ items, reverse, speed = 25 }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden h-full [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex flex-col gap-5 ${reverse ? "animate-marquee-up-reverse" : "animate-marquee-up"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Trusted by Filipino Business Owners
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See what our customers have to say about RetailFlow POS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-[80vh]">
          <MarqueeColumn items={columns[0]} speed={30} />
          <MarqueeColumn items={columns[1]} reverse speed={35} />
          <MarqueeColumn items={columns[2]} speed={28} />
        </div>
      </div>
    </section>
  );
}
