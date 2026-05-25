import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="bg-slate-50 pt-32">
      <section className="section-shell grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.contact')}</p>
          <h1 className="mt-4 text-4xl font-black text-navy sm:text-5xl">{t('contact.business')}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t('tagline')}</p>

          <div className="mt-8 space-y-4">
            <a href="tel:+916266383257" className="glass flex gap-4 rounded-2xl p-5 shadow-glass transition hover:-translate-y-1">
              <FaPhone className="mt-1 text-2xl text-wine" />
              <span><strong className="block text-navy">{t('actions.call')}</strong>{t('contact.phone')}</span>
            </a>
            <a href="https://wa.me/916266383257" target="_blank" rel="noreferrer" className="glass flex gap-4 rounded-2xl p-5 shadow-glass transition hover:-translate-y-1">
              <FaWhatsapp className="mt-1 text-2xl text-wine" />
              <span><strong className="block text-navy">WhatsApp</strong>{t('contact.whatsapp')}</span>
            </a>
            <a href="mailto:shivk81680@gmail.com" className="glass flex gap-4 rounded-2xl p-5 shadow-glass transition hover:-translate-y-1">
              <FaEnvelope className="mt-1 text-2xl text-wine" />
              <span><strong className="block text-navy">Email</strong>{t('contact.email')}</span>
            </a>
            <div className="glass flex gap-4 rounded-2xl p-5 shadow-glass">
              <FaLocationDot className="mt-1 text-2xl text-wine" />
              <span><strong className="block text-navy">Address</strong>{t('contact.address')}</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
          <div className="mt-5 rounded-2xl bg-navy p-5 font-bold text-white shadow-glass">
            {t('contact.hours')}
          </div>
        </div>
      </section>
    </main>
  );
}
