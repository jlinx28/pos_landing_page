const plans = [
  {
    name: 'Basic',
    devices: '1 Device',
    monthly: '199',
    lifetime: '1,999',
    featured: false,
    features: [
      'Full POS System',
      'Product Management',
      'Sales & Expense Tracking',
      'Dashboard & Reports',
      'End-of-Day Reports',
      'Refund Management',
      'Barcode Scanner',
      'Receipt Printing',
      'Works Offline',
    ],
  },
  {
    name: 'Pro',
    devices: 'Up to 3 Devices',
    monthly: '349',
    lifetime: '3,499',
    featured: true,
    features: [
      'Everything in Basic',
      'Multi-Device Support',
      'LAN Sync (no internet needed)',
      'Multiple Cashier Stations',
      'Employee Management',
      'Role-Based Access',
      'Tax Settings',
      'Promo Codes',
      'Priority Support',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            All features included. Choose by how many devices you need. Start with a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-dark text-white shadow-2xl shadow-dark/25 scale-[1.02]'
                  : 'bg-white border border-border shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-white/60' : 'text-text-secondary'}`}>
                  {plan.devices}
                </p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-extrabold ${plan.featured ? 'text-white' : 'text-dark'}`}>
                    ₱{plan.monthly}
                  </span>
                  <span className={`text-base ${plan.featured ? 'text-white/50' : 'text-text-secondary'}`}>
                    /month
                  </span>
                </div>

                <div className={`my-3 text-sm ${plan.featured ? 'text-white/40' : 'text-text-secondary'}`}>
                  or
                </div>

                <div className={`text-lg font-semibold ${plan.featured ? 'text-accent' : 'text-primary'}`}>
                  ₱{plan.lifetime}{' '}
                  <span className={`text-sm font-normal ${plan.featured ? 'text-white/50' : 'text-text-secondary'}`}>
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 shrink-0 mt-0.5 ${plan.featured ? 'text-accent' : 'text-success'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.featured ? 'text-white/80' : 'text-text-secondary'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all ${
                  plan.featured
                    ? 'bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/25'
                    : 'bg-dark hover:bg-dark-light text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
