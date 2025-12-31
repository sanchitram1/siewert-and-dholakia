import { motion } from 'motion/react';

export function AwardBanner() {
  return (
    <section className="bg-[#4A5D23] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10" />
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center max-w-5xl mx-auto"
        >
          {/* Main Text Content - Center Aligned */}
          <div className="text-center">
            <div className="flex flex-col gap-1">
              <span className="text-[#F9F8F4]/70 font-bold tracking-widest text-[10px] md:text-xs uppercase">
                Recognized Twice by Indian Chamber of Commerce
              </span>
              <h3 className="text-[#F9F8F4] font-heading text-2xl md:text-3xl leading-tight">
                Achievement Award for Tea Exports
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
