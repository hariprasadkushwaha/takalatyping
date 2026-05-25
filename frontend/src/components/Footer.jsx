import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaWhatsapp } from 'react-icons/fa6';

const logoUrl = 'https://res.cloudinary.com/dzc5rnskc/image/upload/v1779631722/tt-removebg-preview_ukx0bz.png';

const quickLinks = [
  ['/', 'nav.home'],
  ['/about', 'nav.about'],
  ['/services', 'nav.services'],
  ['/kcc-services', 'nav.kcc'],
  ['/banking-services', 'nav.legal'],
  ['/contact', 'nav.contact'],
];

const serviceLinks = ['services.mpOnline', 'services.kccLoan', 'services.affidavit', 'services.typing', 'services.printing'];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-wine to-royal p-2 shadow-glow">
              <img src={logoUrl} alt="Takala Typing logo" className="h-full w-full object-contain" />
            </span>
            <div>
              <p className="text-2xl font-black italic leading-6">
                <span className="text-red-300">Takala</span>
                <span className="text-white"> Typing</span>
              </p>
              <p className="text-sm font-black uppercase tracking-[0.13em] text-red-300">M.P. Online Service Center</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/70">{t('tagline')}</p>
          <div className="mt-5 flex gap-3">
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-wine" href="https://wa.me/916266383257" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-wine" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-wine" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-wine" href="mailto:shivk81680@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {quickLinks.map(([path, key]) => (
              <Link key={path} to={path} className="text-sm font-semibold text-white/70 transition hover:text-white">
                {t(key)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">Services</h3>
          <div className="mt-4 grid gap-3">
            {serviceLinks.map((key) => (
              <Link key={key} to="/services" className="text-sm font-semibold text-white/70 transition hover:text-white">
                {t(key)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black">{t('sections.contact')}</h3>
          <div className="mt-4 space-y-4 text-sm font-semibold text-white/72">
            <p className="flex gap-3"><FaLocationDot className="mt-1 shrink-0 text-saffron" /> {t('contact.address')}</p>
            <a className="flex gap-3 transition hover:text-white" href="tel:+916266383257"><FaPhone className="mt-1 text-saffron" /> {t('contact.phone')}</a>
            <a className="flex gap-3 transition hover:text-white" href="mailto:shivk81680@gmail.com"><FaEnvelope className="mt-1 text-saffron" /> {t('contact.email')}</a>
            <p>{t('contact.hours')}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm font-semibold text-white/60">
        &copy; 2026 {t('siteTitle')}. All rights reserved.
      </div>
    </footer>
  );
}
