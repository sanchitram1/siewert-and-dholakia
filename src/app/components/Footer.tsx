import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#3A4A1C] text-white/60 py-3 border-t border-white/10">
      <div className="w-full px-6 md:px-12 lg:px-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm"
        >
          &copy; {new Date().getFullYear()} Siewert & Dholakia Overseas Pvt Ltd. All rights
          reserved.
        </motion.p>
      </div>
    </footer>
  );
}
