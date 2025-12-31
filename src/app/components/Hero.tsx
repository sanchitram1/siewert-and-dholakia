import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { Button } from './ui/button';
import heroImg from '../../assets/hero-bg.png';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#F9F8F4] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Increased overlay opacity for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={heroImg} alt="Tea Plantation" className="w-full h-full object-cover" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="max-w-3xl"
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-white/90 font-bold tracking-widest text-xs md:text-sm mb-4 uppercase drop-shadow-sm"
          >
            Est. 1948
          </motion.h2>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-white leading-tight mb-6 font-bold drop-shadow-md"
          >
            Pure Indian Tea. <br />
            Global Scale.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl text-white/95 mb-8 max-w-lg leading-relaxed font-light drop-shadow-sm"
          >
            75+ years of heritage. Exporting the finest blends from India to the world with
            unmatched consistency.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="contact" smooth={true} duration={500}>
              <Button
                size="lg"
                className="bg-[#C05621] hover:bg-[#A0451A] text-white text-base px-8 py-6 rounded-none w-full sm:w-auto transition-all shadow-lg"
              >
                Get in Touch
              </Button>
            </Link>
            <Link to="capabilities" smooth={true} duration={500}>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#4A5D23] text-base px-8 py-6 rounded-none w-full sm:w-auto transition-all backdrop-blur-sm"
              >
                Our Capabilities
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
