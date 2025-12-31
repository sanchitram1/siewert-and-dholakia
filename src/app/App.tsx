import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AwardBanner } from './components/AwardBanner';
import { About } from './components/About';
import { GlobalReach } from './components/GlobalReach';
import { Certifications } from './components/Certifications';
import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen font-body bg-[#F9F8F4] text-[#4A5D23] selection:bg-[#C05621] selection:text-white">
      <Header />
      <main>
        <Hero />
        <AwardBanner />
        <About />
        <GlobalReach />
        <Certifications />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
