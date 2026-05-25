import { useTranslation } from 'react-i18next';
import { FaBuildingColumns, FaCircleCheck, FaMoneyBillTransfer } from 'react-icons/fa6';
import ServiceCard from '../components/ServiceCard';
import { legalServices } from '../servicesData';

export default function LegalServices() {
  const { t } = useTranslation();

  return (
    <main className="bg-slate-50 pt-32">
      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.legal')}</p>
          <h1 className="mt-4 text-4xl font-black text-navy sm:text-5xl">{t('serviceGroups.legal')}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t('banking.intro')}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {t('banking.highlights', { returnObjects: true }).map((item) => (
              <div key={item} className="glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-black text-navy shadow-sm">
                <FaCircleCheck className="text-wine" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-8 shadow-glass">
          <FaBuildingColumns className="text-5xl text-wine" />
          <p className="mt-5 text-2xl font-black text-navy">{t('banking.cardTitle')}</p>
          <p className="mt-3 leading-7 text-slate-600">{t('banking.cardText')}</p>
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-wine to-royal p-5 text-white">
            <FaMoneyBillTransfer className="text-3xl" />
            <p className="mt-3 text-xl font-black">{t('services.loanConsultation')}</p>
          </div>
        </div>
      </section>
      <section className="section-shell pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {legalServices.map(([key, Icon], index) => (
            <ServiceCard key={key} icon={Icon} title={t(key)} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
