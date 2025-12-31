import { motion } from 'motion/react';
import { Award, ShieldCheck, Leaf, CheckSquare } from 'lucide-react';

export function Certifications() {
  const certs = [
    {
      name: 'ISO 22000',
      icon: <ShieldCheck className="w-8 h-8 text-[#C05621]" />,
      desc: 'Food Safety Management System',
    },
    {
      name: 'GMP Certified',
      icon: <CheckSquare className="w-8 h-8 text-[#C05621]" />,
      desc: 'Good Manufacturing Practices',
    },
    {
      name: 'Rainforest Alliance',
      icon: <Leaf className="w-8 h-8 text-[#C05621]" />,
      desc: 'Sustainable Agriculture Standard',
    },
    {
      name: 'HACCP',
      icon: <Award className="w-8 h-8 text-[#C05621]" />,
      desc: 'Hazard Analysis Critical Control Point',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Context & Award (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-12"
          >
            <div>
              <span className="text-[#C05621] font-bold tracking-widest text-xs uppercase mb-4 block">
                Quality Assurance
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4A5D23] mb-8 leading-tight">
                Certified excellence.
              </h2>
              <p className="text-[#4A5D23]/70 text-lg font-light leading-relaxed">
                Our commitment to quality is validated by international standards. We ensure every
                shipment meets the stringent safety, quality, and sustainability requirements of
                global markets.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Certification Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#4A5D23]/10">
              {certs.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ backgroundColor: '#F9F8F4' }}
                  className="p-10 border-r border-b border-[#4A5D23]/10 flex flex-col gap-6 group transition-colors"
                >
                  <div className="bg-[#F9F8F4] w-fit p-3 rounded-full group-hover:bg-white transition-colors">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A5D23] text-lg mb-2">{cert.name}</h3>
                    <p className="text-[#4A5D23]/60 text-sm font-light leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
