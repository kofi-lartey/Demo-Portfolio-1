import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Hero from './Pages/Hero';
import OriginStory from './Pages/OriginStory';
import HallOfFame from './Pages/HallOfFame';
import Testimonials from './Pages/Testimonials';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  const tickerPhrases = [
    "RELIABLE", "SCALABLE", "FRIENDLY", "FAST",
    "PIXEL PERFECT", "COFFEE POWERED", "RELIABLE"
  ];

  // Initialize dark mode on app load
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  // This internal component keeps the Home elements together
  const Home = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <div className="bg-dark-bg border-y-4 border-black py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-10 items-center"
        >
          {[...tickerPhrases, ...tickerPhrases].map((text, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-3xl font-black italic text-white uppercase tracking-tighter">
                {text}
              </span>
              <div className="w-4 h-4 bg-toon-purple rotate-45 border-2 border-black" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen selection:bg-toon-yellow selection:text-black font-sans flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Now the ticker only shows up here */}
            <Route path="/" element={<Hero />} />

            {/* Origin Story is clean and ticker-free */}
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <OriginStory />
                </motion.div>
              }
            />

            <Route
              path="/work"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <HallOfFame />
                </motion.div>
              }
            />
            <Route
              path="/testimonials"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Testimonials />
                </motion.div>
              }
            />
            <Route
              path="/pricing"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Pricing />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
