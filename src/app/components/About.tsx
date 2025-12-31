import { motion } from 'motion/react';
import aboutImg from '../../assets/legacy-leaf.png';

export function About() {
  return (
    <section id="about" className="py-0 bg-[#F9F8F4] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Text Side */}
        <div className="flex items-center justify-center p-12 lg:p-24 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-[#C05621] font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4A5D23] mb-8 leading-tight">
              Decades of trust, built on quality.
            </h2>
            <p className="text-[#4A5D23]/80 text-lg leading-relaxed mb-8 font-light">
              {`Since 1948, Siewert and Dholakia Overseas Pvt Ltd has been a pillar in the Indian tea
              export industry. We don't just export tea; we preserve a legacy of consistency,
              reliability, and an unwavering commitment to quality.`}
            </p>
            <p className="text-[#4A5D23]/80 text-lg leading-relaxed mb-12 font-light">
              {`Headquartered in Kochi, we bridge the gap between India's finest tea gardens and the
              global market, blending tradition with modern operational excellence.`}
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              <div>
                <h4 className="font-bold text-[#4A5D23] text-3xl mb-1">1948</h4>
                <p className="text-sm text-[#4A5D23]/60 uppercase tracking-wide">Established</p>
              </div>
              <div>
                <h4 className="font-bold text-[#4A5D23] text-3xl mb-1">40+</h4>
                <p className="text-sm text-[#4A5D23]/60 uppercase tracking-wide">
                  Years Leadership
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Side - Full Bleed */}
        <motion.div
          className="relative h-[50vh] lg:h-auto order-1 lg:order-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutImg} alt="Tea Leaves" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#4A5D23]/10" />
        </motion.div>
      </div>
    </section>
  );
}
