import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import { generalServices, mpOnlineServices } from '../servicesData';

export default function Services() {
  const { t } = useTranslation();

  return (
    <main className="bg-slate-50 pt-32">
      <section className="section-shell py-14">
        <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.allServices')}</p>
        <h1 className="mt-4 text-4xl font-black text-navy sm:text-5xl">{t('serviceGroups.general')}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{t('tagline')}</p>
      </section>

      <section className="section-shell pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {generalServices.map(([key, Icon], index) => (
            <ServiceCard key={key} icon={Icon} title={t(key)} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <h2 className="text-3xl font-black text-navy">{t('serviceGroups.mp')}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {mpOnlineServices.map(([key, Icon], index) => (
              <ServiceCard key={key} icon={Icon} title={t(key)} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
