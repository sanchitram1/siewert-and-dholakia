import { motion } from 'motion/react';
import { MapPin, Warehouse } from 'lucide-react';

export function GlobalReach() {
  return (
    <section id="global-reach" className="py-24 bg-[#4A5D23] text-white">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              From India to the world.
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-md">
              We cater to high-volume demands from Europe, Africa, Asia, and Russia. Our strategic
              presence across India allows us to source the finest Nilgiri, Assam, and Darjeeling
              teas.
            </p>
          </motion.div>

          {/* Stats / Locations */}
          <div className="grid gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-[#C05621] hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-6">
                <MapPin className="w-8 h-8 text-[#C05621] mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Network Headquarters</h3>
                  <p className="text-white/90">Kochi, Kerala</p>
                  <p className="text-white/60 text-sm mt-1">
                    Strategic export hub with branches in Tamil Nadu & West Bengal
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm p-8 border-l-4 border-[#C05621] hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-6">
                <Warehouse className="w-8 h-8 text-[#C05621] mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">65,000 sq ft Warehousing</h3>
                  <p className="text-white/90">State-of-the-art facilities</p>
                  <p className="text-white/60 text-sm mt-1">
                    Ensuring stock freshness and rapid dispatch capabilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
