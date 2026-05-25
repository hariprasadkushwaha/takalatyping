import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

const whatsappNumber = '916266383257';

export default function ServiceCard({ icon: Icon, title, text, index = 0 }) {
  const handleApply = () => {
    const message = `Takala Typing Enquiry
Service: ${title}
Query: I want to apply for ${title}. Please share required documents, process and service fee.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group glass relative overflow-hidden rounded-2xl p-5 shadow-glass"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-wine via-royal to-saffron" />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-wine to-royal text-xl text-white shadow-glow">
        <Icon />
      </div>
      <h3 className="text-lg font-extrabold text-navy">{title}</h3>
      {text && <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>}
      <button
        type="button"
        onClick={handleApply}
        className="focus-ring mt-5 inline-flex items-center gap-2 rounded-xl bg-wine px-4 py-2.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(123,17,44,0.22)] transition hover:-translate-y-0.5 hover:bg-navy"
      >
        <FaWhatsapp />
        Apply Now
      </button>
    </motion.article>
  );
}
