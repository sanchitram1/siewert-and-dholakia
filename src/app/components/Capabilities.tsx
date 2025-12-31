import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import capabilitiesImg from '../../assets/commercial-teacups.jpg';

export function Capabilities() {
  const capabilities = [
    'Sight Letter of Credit & CAD payment terms',
    'High-volume bulk order fulfillment',
    'Duplex carton, pouch, and jar packaging',
    'Custom blending services',
    'Private labeling options',
    'Global logistics handling',
  ];

  return (
    <section id="capabilities" className="py-0 bg-[#F0EFE9] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image Side - Full Bleed */}
        <div className="relative h-[50vh] lg:h-auto">
          <img
            src={capabilitiesImg}
            alt="Tea Tasting and Processing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Text Side */}
        <div className="flex items-center justify-center p-12 lg:p-24">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C05621] font-bold tracking-widest text-xs uppercase mb-4 block">
              Commercial & Operational
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4A5D23] mb-8 leading-tight">
              Built for global trade.
            </h2>
            <p className="text-[#4A5D23]/80 text-lg mb-10 leading-relaxed font-light">
              We understand the complexities of international trade. Our infrastructure, financial
              flexibility, and packaging versatility allow us to serve large-scale distributors with
              ease.
            </p>

            <ul className="space-y-6">
              {capabilities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 border-b border-[#4A5D23]/10 pb-4 last:border-0"
                >
                  <div className="mt-1 text-[#C05621]">
                    <Check size={20} />
                  </div>
                  <span className="text-[#4A5D23] font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
