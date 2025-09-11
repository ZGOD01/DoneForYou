import './App.css'
import BeforeAfterMarquee from './components/BeforeAfterMarquee';
import Bonuses from './components/Bonuses';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PainTruthSection from './components/PainTruthSection';
import PerfectForSection from './components/PerfectForSection';
import ProcessFlow from './components/ProcessFlow';
import QASection from './components/QASection';
import Review from './components/Review';
import TestimonialsMarquee from './components/TestimonialsSection';
import VideoSection from './components/VideoSection';

// Import Router
import { Routes, Route } from "react-router-dom";

// Import Pages
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Review />
                <Hero />
                {/* <VideoSection /> */}
                <TestimonialsMarquee />
                <BeforeAfterMarquee />
                <PerfectForSection />
                <PainTruthSection />
                <ProcessFlow />
                <Bonuses />
                <QASection />
              </>
            }
          />

          {/* Static Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
