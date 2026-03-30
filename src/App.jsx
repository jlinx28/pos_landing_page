import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Testimonials />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}
