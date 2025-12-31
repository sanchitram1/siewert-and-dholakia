import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Global Reach', to: 'global-reach' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Capabilities', to: 'capabilities' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <a
            href="/"
            className={`text-medium font-heading font-bold transition-colors duration-300 ${
              scrolled ? 'text-[#4A5D23]' : 'text-white'
            }`}
          >
            Siewert & Dholakia Overseas Pvt Ltd
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className={`cursor-pointer font-medium text-sm tracking-wide transition-colors ${
                scrolled ? 'text-[#4A5D23] hover:text-[#C05621]' : 'text-white hover:text-white/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled || isOpen ? 'text-[#4A5D23]' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#F9F8F4] border-t border-[#4A5D23]/10 shadow-lg p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-[#4A5D23] hover:text-[#C05621] font-medium text-lg"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
