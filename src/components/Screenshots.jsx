import { useState } from 'react';

const screens = [
  {
    title: 'Point of Sale',
    desc: 'Fast checkout with barcode scanning',
    image: '/POS.JPG',
  },
  {
    title: 'Dashboard',
    desc: 'Sales analytics at a glance',
    image: '/Dashboard.jpg',
  },
  {
    title: 'Products',
    desc: 'Manage your entire catalog',
    image: '/Products.jpg',
  },
  {
    title: 'Sales History',
    desc: 'Complete transaction records',
    image: '/Sales.jpg',
  },
  {
    title: 'EOD Reports',
    desc: 'Daily closing summaries',
    image: '/EOD.jpg',
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? screens.length - 1 : i - 1));
  const next = () => setActive((i) => (i === screens.length - 1 ? 0 : i + 1));

  const getOffset = (i) => {
    let diff = i - active;
    // Wrap around for circular feel
    if (diff > Math.floor(screens.length / 2)) diff -= screens.length;
    if (diff < -Math.floor(screens.length / 2)) diff += screens.length;
    return diff;
  };

  return (
    <section id="screenshots" className="py-20 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A clean, intuitive interface designed for speed and ease of use.
          </p>
        </div>
      </div>

      <div className="relative h-[580px] sm:h-[640px]">
        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Slides */}
        <div className="relative w-full h-full flex items-start justify-center">
          {screens.map((s, i) => {
            const offset = getOffset(i);
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            const width = isCenter ? 280 : absOffset === 1 ? 200 : 150;
            const spacing = isCenter ? 0 : offset * 240;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="absolute cursor-pointer"
                style={{
                  width,
                  transform: `translateX(${spacing}px) scale(${isCenter ? 1 : absOffset === 1 ? 0.92 : 0.8})`,
                  opacity: absOffset > 2 ? 0 : isCenter ? 1 : absOffset === 1 ? 0.55 : 0.25,
                  zIndex: 10 - absOffset,
                  filter: isCenter ? 'none' : 'brightness(0.6)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: absOffset > 2 ? 'none' : 'auto',
                }}
              >
                <div
                  className="rounded-[2rem] border-4 overflow-hidden shadow-2xl"
                  style={{
                    aspectRatio: '9/19',
                    borderColor: isCenter ? '#1E88E5' : '#374151',
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                </div>
                <div
                  className="text-center mt-4"
                  style={{
                    opacity: isCenter ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <h4 className="font-semibold text-white text-base">{s.title}</h4>
                  <p className="text-sm text-white/50 mt-1">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Next"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
