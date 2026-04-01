const posSubItems = [
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
        />
      </>
    ),
    title: "Barcode Scanner",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Sales & Expenses",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    ),
    title: "Inventory",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    ),
    title: "Products",
  },
];

const items = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    ),
    title: "Full POS System",
    desc: "Fast checkout with cart management and instant payments. Everything you need to ring up sales quickly.",
    size: "pos",
    span: "lg:col-span-2 lg:row-span-2",
    gradient: "from-primary/5 to-primary/10",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
      />
    ),
    title: "Receipt Printing",
    desc: "PDF receipts and direct thermal printer support.",
    size: "small",
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6z"
        />
      </>
    ),
    title: "Promo Codes",
    desc: "Create and apply discount codes at checkout.",
    size: "small",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
      />
    ),
    title: "Works 100% Offline",
    desc: "No internet needed. Your POS works everywhere — even without WiFi or mobile data.",
    size: "large",
    span: "lg:row-span-2",
    gradient: "from-green-50 to-green-100/50",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
    title: "Dashboard & Analytics",
    desc: "Real-time sales charts, revenue tracking, and performance reports at a glance.",
    size: "large",
    span: "lg:row-span-2",
    gradient: "from-accent/5 to-accent/10",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    ),
    title: "End-of-Day Reports",
    desc: "Automatic daily closing with cash reconciliation.",
    size: "small",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    ),
    title: "Refund Management",
    desc: "Process refunds with full tracking and status reports.",
    size: "small",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    ),
    title: "Multi-Device LAN Sync",
    desc: "Sync data across devices over your local network. No cloud or internet required — perfect for multiple cashier stations.",
    size: "large",
    span: "lg:col-span-2 lg:row-span-2",
    gradient: "from-violet-50 to-violet-100/50",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
    title: "Employee Management",
    desc: "PIN-based login with role-based access control.",
    size: "small",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
    title: "Role-Based Access",
    desc: "Admin, Manager, and Cashier permission levels.",
    size: "small",
  },
];

function MiniCard({ item }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-border hover:border-primary/20 hover:shadow-md transition-all group/mini flex flex-col items-center justify-center text-center">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2 group-hover/mini:bg-primary group-hover/mini:text-white transition-colors duration-300">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          {item.icon}
        </svg>
      </div>
      <h4 className="font-semibold text-dark text-xs">{item.title}</h4>
    </div>
  );
}

function PosCard({ item }) {
  return (
    <div
      className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group ${item.span}`}
    >
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* Left — title & desc */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
        {/* Right — 2x2 mini cards */}
        <div className="grid grid-cols-2 gap-2 lg:w-[45%] shrink-0">
          {posSubItems.map((sub, i) => (
            <MiniCard key={i} item={sub} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LargeCard({ item }) {
  return (
    <div
      className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between ${item.span}`}
    >
      <div>
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {item.icon}
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function SmallCard({ item }) {
  return (
    <div className="flex-1 bg-white rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          {item.icon}
        </svg>
      </div>
      <h3 className="font-semibold text-dark mb-1 text-sm">{item.title}</h3>
    </div>
  );
}

function SmallCardPair({ items }) {
  return (
    <div className="flex gap-4">
      {items.map((item, i) => (
        <SmallCard key={i} item={item} />
      ))}
      {items.length === 1 && <div className="flex-1" />}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Everything You Need to Run Your Store
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A complete point-of-sale system packed with powerful features
            designed for Filipino retail businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {(() => {
            const elements = [];
            let i = 0;
            while (i < items.length) {
              if (items[i].size === "pos") {
                elements.push(<PosCard key={i} item={items[i]} />);
                i++;
              } else if (items[i].size === "large") {
                elements.push(<LargeCard key={i} item={items[i]} />);
                i++;
              } else {
                const pair = [items[i]];
                if (i + 1 < items.length && items[i + 1].size === "small") {
                  pair.push(items[i + 1]);
                  i += 2;
                } else {
                  i++;
                }
                elements.push(<SmallCardPair key={`pair-${i}`} items={pair} />);
              }
            }
            return elements;
          })()}
        </div>
      </div>
    </section>
  );
}
