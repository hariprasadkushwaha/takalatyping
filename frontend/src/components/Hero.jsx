import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFileSignature, FaLandmark, FaWhatsapp } from 'react-icons/fa6';

export default function Hero() {
  const { t } = useTranslation();
  const floating = t('hero.floating', { returnObjects: true });
  const stats = t('hero.stats', { returnObjects: true });

  return (
    <section className="relative isolate overflow-hidden bg-navy pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,17,44,0.75),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(83,43,136,0.65),transparent_30%),linear-gradient(135deg,#0B1F3A_0%,#30164F_48%,#7B112C_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="section-shell relative grid min-h-[calc(100vh-40px)] items-center gap-10 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            {t('hero.badge')}
          </span>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-extrabold text-wine shadow-glow transition hover:-translate-y-1"
            >
              {t('actions.explore')} <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/916266383257"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
            >
              <FaWhatsapp /> {t('actions.whatsapp')}
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-bold text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[430px]">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-4 w-[82%] rounded-3xl border border-white/20 bg-white/12 p-6 shadow-glow backdrop-blur-xl sm:left-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-wine">
                <FaLandmark />
              </div>
              <div>
                <p className="text-sm text-white/70">Digital Center</p>
                <p className="text-xl font-black">{t('brand')}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {floating.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-white/12 p-4">
                  <span className="font-bold">{item}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-wine">0{index + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 right-0 w-64 rounded-3xl border border-white/20 bg-white p-5 text-navy shadow-glow"
          >
            <FaFileSignature className="text-3xl text-wine" />
            <p className="mt-3 text-2xl font-black">9:00 AM - 8:00 PM</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">Monday to Saturday</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
