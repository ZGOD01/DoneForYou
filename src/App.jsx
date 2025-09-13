import './App.css';
import BeforeAfterMarquee from './components/BeforeAfterMarquee';
import Bonuses from './components/Bonuses';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PainTruthSection from './components/PainTruthSection';
import PerfectForSection from './components/PerfectForSection';
import QASection from './components/QASection';
import Review from './components/Review';
import TestimonialsMarquee from './components/TestimonialsSection';
import StickyBar from './components/StickyBar';
import { Routes, Route } from "react-router-dom";
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';
import WhyCoachesChooseUs from './components/WhyCoachesChooseUs';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-20">
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Review />
                <Hero />
                <TestimonialsMarquee />
                <BeforeAfterMarquee />
                <PerfectForSection />
                <PainTruthSection />
                <Bonuses />
                <WhyCoachesChooseUs />
                <QASection />
              </>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Sticky bar is now always visible */}
      <StickyBar />

      <Footer />
    </div>
  );
}

export default App;
