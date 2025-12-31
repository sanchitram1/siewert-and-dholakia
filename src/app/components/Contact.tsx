import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useForm as useFormSpree } from '@formspree/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function Contact() {
  const [_state, formspreeHandleSubmit] = useFormSpree('xrebzqlo');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    await formspreeHandleSubmit(formData);
    toast.success('Message sent successfully! We will get back to you shortly.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#4A5D23] text-white">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              Get in touch
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Contact our directors directly for enquiries. We are ready to discuss your
              requirements.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Directors</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-white/60" size={20} />
                  <div>
                    <p className="font-bold">Rajeev Dholakia</p>
                    <p className="text-white/70">+91 99958 68904</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-white/60" size={20} />
                  <div>
                    <p className="font-bold">Sachin Dholakia</p>
                    <p className="text-white/70">+91 98470 44719</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-white/20" />

            <div>
              <h3 className="text-xl font-bold mb-6">Office Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-white/60 mt-1 flex-shrink-0" size={20} />
                  <p className="text-white/80 leading-relaxed">
                    Willingdon Island, Cochin-682003, Kerala, India
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-white/60" size={20} />
                  <a
                    href="mailto:teasiewert@gmail.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    teasiewert@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-white/60" size={20} />
                  <p className="text-white/80">+91 484 2669553 / 2666112</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-sm"
          >
            <h3 className="text-2xl font-bold text-[#4A5D23] mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4A5D23]">Name</label>
                  <Input
                    {...register('name', { required: true })}
                    placeholder="Your Name"
                    className="bg-[#F9F8F4] border-[#4A5D23]/20 text-[#4A5D23]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4A5D23]">Company</label>
                  <Input
                    {...register('company')}
                    placeholder="Company Name"
                    className="bg-[#F9F8F4] border-[#4A5D23]/20 text-[#4A5D23]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4A5D23]">Email</label>
                <Input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  placeholder="your@email.com"
                  className="bg-[#F9F8F4] border-[#4A5D23]/20 text-[#4A5D23]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#4A5D23]">Message</label>
                <Textarea
                  {...register('message', { required: true })}
                  placeholder="Tell us about your requirements..."
                  className="bg-[#F9F8F4] border-[#4A5D23]/20 text-[#4A5D23] min-h-[120px]"
                />
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#C05621] hover:bg-[#A0451A] text-white py-6 text-lg rounded-none"
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
