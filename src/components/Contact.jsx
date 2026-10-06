import { useState } from 'react';

const ADMIN_API = import.meta.env.VITE_ADMIN_API ?? '';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    setError('');

    try {
      const res = await fetch(`${ADMIN_API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'landing-cta' }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="dark-section text-white py-20 relative overflow-hidden"
    >
      {/* abstracts */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217, 119, 6, 0.3) 0%, transparent 70%)',
        }}
      ></div>
      <div
        className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(47, 93, 80, 0.2) 0%, transparent 70%)',
        }}
      ></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-fraunces text-4xl sm:text-5xl leading-tight font-medium">
          Ready to{' '}
          <em className="italic" style={{ color: '#fba94c' }}>
            run your store
          </em>{' '}
          the easy way?
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          14-day free trial. Full features. No credit card.
        </p>

        {status === 'success' ? (
          <div
            className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-6 py-8"
            role="status"
          >
            <div className="text-3xl mb-2">✉️</div>
            <h3 className="font-fraunces text-xl mb-2">Check your inbox.</h3>
            <p className="text-sm text-white/70">
              We sent your Google Play link to <strong>{email}</strong>. If you don't see it
              in a few minutes, check your spam folder.
            </p>
          </div>
        ) : (
          <form className="mt-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-white/10 backdrop-blur border border-white/15 rounded-full p-1.5">
              <div className="flex-1 flex items-center pl-4">
                <span className="text-white/40 mr-2">✉️</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'submitting'}
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm py-2.5 focus:outline-none disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="accent-bg text-white px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap disabled:opacity-60"
                style={{ boxShadow: '0 10px 25px -5px rgba(217, 119, 6, 0.4)' }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send my trial link →'}
              </button>
            </div>
            {status === 'error' && error && (
              <p className="mt-3 text-xs text-red-300">{error}</p>
            )}
            {status !== 'error' && (
              <p className="mt-3 text-xs text-white/40">
                We'll send your Google Play link within 1 hour. No spam, ever.
              </p>
            )}
          </form>
        )}

        <div className="mt-8 inline-flex items-center gap-3 text-xs text-white/50 flex-wrap justify-center">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> No credit card
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> 14-day free
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
