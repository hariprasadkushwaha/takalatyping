import { motion } from 'framer-motion';
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCreditCard,
  FiEdit3,
  FiFilePlus,
  FiFileText,
  FiHeart,
  FiHome,
  FiMapPin,
  FiPhone,
  FiShield,
  FiSmartphone,
  FiUserCheck,
  FiUsers,
} from 'react-icons/fi';
import useLanguage from '../hooks/useLanguage.js';

const phoneNumber = '6266383257';
const whatsappNumber = '916266383257';

const kccDocuments = [
  'ऋण पुस्तिका',
  'खसरा नं. प्रमाण',
  'B1 / खतौनी प्रमाण',
  'खाता नंबर प्रमाण',
  'बैंक प्रमाण पत्र / पटवारी द्वारा प्रमाण',
  'मोबाइल प्रमाण पत्र / पटवारी द्वारा प्रमाण',
];

const noticeInfo = ['पार्टी का नाम', 'पिता का नाम', 'पता', 'मोबाइल नंबर', 'जमानतदार / गारंटर'];
const dairyLoanInfo = ['मवेशी का मृत्यु प्रमाण पत्र', 'पासबुक', 'आधार कार्ड', 'समग्र खाता नंबर'];
const witnesses = ['बैंक पासबुक', 'खसरा नंबर', 'मोबाइल नंबर', '2-2 फोटो'];
const loanEntryItems = ['कस्टमर आधार कार्ड + मोबाइल', 'OTP मिलान / बायोमेट्रिक'];
const bankCorrectionItems = ['खाते में आधार + मोबाइल नंबर', 'OTP / बायो / आधार'];
const pricing = ['Rs. 50', 'Rs. 100', 'Rs. 200', 'Rs. 500', 'Rs. 1000'];

const documentServices = [
  ['शपथ पत्र', 'Legal', 'शपथ पत्र तैयार करने, प्रिंट और दस्तावेज प्रक्रिया में सहायता।', FiShield],
  ['हलफनामा', 'Legal', 'हलफनामा ड्राफ्टिंग, फॉर्मेटिंग और ऑनलाइन कार्य के लिए सेवा।', FiFileText],
  ['एफिडेविट', 'Legal', 'Affidavit typing, document format और जरूरी जानकारी की सहायता।', FiEdit3],
  ['विवाह पंजीयन', 'Registration', 'Marriage registration form, documents और online application support।', FiHeart],
  ['अनुबंध (Agreement)', 'Document', 'Agreement drafting, typing और print-ready document service।', FiBriefcase],
  ['किरायानामा', 'Document', 'Rent agreement / किरायानामा बनाने और दस्तावेज तैयार करने की सुविधा।', FiHome],
  ['विक्रयनामा', 'Document', 'Sale document / विक्रयनामा typing और legal format support।', FiBookOpen],
  ['आय प्रमाण पत्र', 'Certificate', 'Income certificate आवेदन, document check और form filling service।', FiAward],
  ['निवास प्रमाण पत्र', 'Certificate', 'Domicile certificate आवेदन और स्थानीय निवास दस्तावेज सहायता।', FiMapPin],
  ['जाति प्रमाण पत्र', 'Certificate', 'Caste certificate application, जरूरी कागज और portal help।', FiUserCheck],
  ['जन्म प्रमाण पत्र', 'Certificate', 'Birth certificate form, record correction और online आवेदन सहायता।', FiUsers],
  ['मृत्यु प्रमाण पत्र', 'Certificate', 'Death certificate application और संबंधित दस्तावेज प्रक्रिया।', FiFilePlus],
  ['वसीयतनामा', 'Legal', 'Will document / वसीयतनामा typing और साफ document formatting।', FiCheckCircle],
  ['अन्य ऑनलाइन सेवाएं', 'Online', 'सभी प्रकार के online forms, government portal और document service।', FiFilePlus],
].map(([title, category, description, icon]) => ({ title, category, description, icon }));

const englishDocumentServices = [
  ['Affidavit', 'Legal', 'Support for affidavit drafting, printing and document process.', FiShield],
  ['Declaration', 'Legal', 'Declaration drafting, formatting and online work support.', FiFileText],
  ['Affidavit Typing', 'Legal', 'Affidavit typing, document format and required detail support.', FiEdit3],
  ['Marriage Registration', 'Registration', 'Marriage registration form, documents and online application support.', FiHeart],
  ['Agreement', 'Document', 'Agreement drafting, typing and print-ready document service.', FiBriefcase],
  ['Rent Agreement', 'Document', 'Rent agreement creation and document preparation service.', FiHome],
  ['Sale Deed', 'Document', 'Sale document typing and legal format support.', FiBookOpen],
  ['Income Certificate', 'Certificate', 'Income certificate application, document check and form filling service.', FiAward],
  ['Domicile Certificate', 'Certificate', 'Domicile certificate application and residence document support.', FiMapPin],
  ['Caste Certificate', 'Certificate', 'Caste certificate application, required papers and portal help.', FiUserCheck],
  ['Birth Certificate', 'Certificate', 'Birth certificate form, record correction and online application help.', FiUsers],
  ['Death Certificate', 'Certificate', 'Death certificate application and related document process.', FiFilePlus],
  ['Will Document', 'Legal', 'Will document typing and clean document formatting.', FiCheckCircle],
  ['Other Online Services', 'Online', 'All types of online forms, government portal and document services.', FiFilePlus],
].map(([title, category, description, icon]) => ({ title, category, description, icon }));

const english = {
  subtitle: 'Kisan Credit Card and bank services',
  intro:
    'KCC loan, farmer documents, dairy loan support, e-KYC, bank correction and application guidance in one organized service counter.',
  docsTitle: 'KCC Loan / Kisan Credit Card',
  docs: [
    'Loan booklet',
    'Khasra number proof',
    'B1 / Khatauni proof',
    'Account number proof',
    'Bank certificate / Patwari certified proof',
    'Mobile certificate / Patwari certified proof',
  ],
  noticeTitle: 'Notice Information',
  notice: ['Party name', "Father's name", 'Address', 'Mobile number', 'Guarantor'],
  dairyTitle: 'Dairy Loan / Business',
  dairyDescription: 'Cattle amount is withdrawn through the bank account',
  dairy: ['Cattle death certificate', 'Passbook', 'Aadhaar card', 'Samagra account number'],
  note: 'Head of family name should be present in the Samagra account number.',
  witnessTitle: 'Two Witnesses',
  witnesses: ['Bank passbook', 'Khasra number', 'Mobile number', '2-2 photos'],
  ekycTitle: 'E-KYC',
  loanEntryTitle: 'Loan Entry',
  loanEntry: ['Customer Aadhaar card + mobile', 'OTP matching / biometric'],
  bankCorrectionTitle: 'Bank Correction',
  bankCorrection: ['Aadhaar + mobile number in account', 'OTP / bio / Aadhaar'],
  feeTitle: 'Service Fee',
  contactTitle: 'Contact for KCC loan or farmer services',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function InfoCard({ children, icon: Icon = FiCheckCircle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_60px_rgba(11,31,58,0.10)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-wine/30 hover:shadow-[0_26px_80px_rgba(123,17,44,0.18)]"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-wine/10 text-wine transition group-hover:bg-wine group-hover:text-white">
          <Icon size={22} />
        </span>
        <p className="font-bold leading-7 text-slate-700">{children}</p>
      </div>
    </motion.div>
  );
}

function SectionHeader({ title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`font-black uppercase tracking-[0.22em] ${light ? 'text-white/70' : 'text-wine'}`}>
        Takala Typing
      </p>
      <h2 className={`mt-3 text-3xl font-black md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {description && <p className={`mt-4 leading-8 ${light ? 'text-white/70' : 'text-slate-600'}`}>{description}</p>}
    </div>
  );
}

function CardGrid({ items, icon, columns = 'lg:grid-cols-3' }) {
  return (
    <motion.div
      className={`mt-8 grid gap-4 sm:grid-cols-2 ${columns}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.08 }}
    >
      {items.map((item) => (
        <InfoCard key={item} icon={icon}>
          {item}
        </InfoCard>
      ))}
    </motion.div>
  );
}

function DocumentServiceCard({ service, isHindi }) {
  const Icon = service.icon;
  const message = `Namaste Takala Typing, mujhe ${service.title} service ke liye apply karna hai.`;

  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_60px_rgba(11,31,58,0.10)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-wine/30 hover:shadow-[0_26px_80px_rgba(123,17,44,0.18)]"
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-wine to-navy transition group-hover:scale-x-100" />
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-wine/10 text-wine transition group-hover:bg-wine group-hover:text-white">
        <Icon size={24} />
      </div>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-wine">{service.category}</p>
      <h3 className="mt-2 text-xl font-black text-navy">{service.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{service.description}</p>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-wine to-[#a5173c] px-4 py-2.5 text-sm font-black text-white shadow-[0_16px_42px_rgba(123,17,44,0.24)] transition hover:-translate-y-0.5 hover:scale-[1.02] hover:from-navy hover:to-[#111111]"
      >
        <FiSmartphone />
        {isHindi ? 'Apply करें' : 'Apply'}
      </a>
    </motion.article>
  );
}

export default function KCCServices() {
  const { isHindi } = useLanguage();
  const extraServices = isHindi ? documentServices : englishDocumentServices;
  const text = isHindi
    ? {
        subtitle: 'किसान क्रेडिट कार्ड एवं बैंक सेवाएं',
        intro:
          'KCC loan, farmer documents, dairy loan support, e-KYC, bank correction और application guidance एक organized service counter पर।',
        docsTitle: 'KCC लोन / किसान क्रेडिट कार्ड',
        docs: kccDocuments,
        noticeTitle: 'नोटिस जानकारी',
        notice: noticeInfo,
        dairyTitle: 'डेयरी लोन / बिजनेस',
        dairyDescription: 'मवेशी का पैसा बैंक खाते के जरिए निकाला जाता है।',
        dairy: dairyLoanInfo,
        note: 'समग्र खाता नंबर में मुखिया का नाम होना चाहिए।',
        witnessTitle: 'दो गवाह',
        witnesses,
        ekycTitle: 'ई-केवाईसी',
        loanEntryTitle: 'लोन एंट्री',
        loanEntry: loanEntryItems,
        bankCorrectionTitle: 'बैंक सुधार',
        bankCorrection: bankCorrectionItems,
        feeTitle: 'सेवा शुल्क',
        contactTitle: 'KCC Loan या farmer service के लिए contact करें',
      }
    : english;

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f7f4_0%,#ffffff_42%,#f2e2e7_100%)] pt-28">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(123,17,44,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.08)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-wine/20 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-8rem] h-96 w-96 rounded-full bg-navy/20 blur-3xl" />

      <section className="relative">
        <div className="section-shell grid min-h-[540px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex rounded-full border border-wine/15 bg-white/75 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-wine shadow-sm backdrop-blur">
              M.P. Online Farmer Help Desk
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
              Takala Typing - <span className="text-wine">KCC Loan Services</span>
            </h1>
            <p className="mt-5 text-2xl font-black text-slate-700">{text.subtitle}</p>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">{text.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+91${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-wine to-[#a5173c] px-6 py-3 font-black text-white shadow-[0_18px_44px_rgba(123,17,44,0.28)] transition hover:-translate-y-0.5 hover:scale-[1.02] hover:from-navy hover:to-[#111111]"
              >
                <FiPhone /> {isHindi ? 'संपर्क करें' : 'Contact Now'}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 font-black text-white shadow-[0_18px_44px_rgba(11,31,58,0.22)] transition hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-wine"
              >
                <FiSmartphone /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_28px_90px_rgba(11,31,58,0.14)] backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-wine/10 text-wine">
                <FiCreditCard size={28} />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-wine">Farmer Service</p>
                <h2 className="text-2xl font-black text-navy">KCC Loan Desk</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {['Document checklist', 'Bank support', 'E-KYC assistance', 'Notice details'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm">
                  <FiCheckCircle className="text-wine" />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="section-shell">
          <SectionHeader
            title={text.docsTitle}
            description={isHindi ? 'Farmer credit card और loan processing के लिए जरूरी documents.' : 'Required documents for farmer credit card and loan processing.'}
          />
          <CardGrid items={text.docs} icon={FiFileText} />
        </div>
      </section>

      <section className="relative py-16">
        <div className="section-shell">
          <SectionHeader
            title={text.noticeTitle}
            description={isHindi ? 'Notice entry के लिए customer और guarantor details ready रखें.' : 'Keep customer and guarantor details ready for notice entry.'}
          />
          <CardGrid items={text.notice} icon={FiUsers} columns="lg:grid-cols-5" />
        </div>
      </section>

      <section className="relative py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader title={text.dairyTitle} description={text.dairyDescription} />
            <div className="mt-8 rounded-2xl border-l-4 border-wine bg-white/80 p-5 shadow-sm">
              <p className="font-black text-wine">{text.note}</p>
            </div>
          </div>
          <CardGrid items={text.dairy} icon={FiHeart} columns="lg:grid-cols-2" />
        </div>
      </section>

      <section className="relative py-16">
        <div className="section-shell">
          <SectionHeader
            title={text.witnessTitle}
            description={isHindi ? 'Witness verification के लिए दोनों गवाह की information ready रखें.' : 'Keep information of both witnesses ready for verification.'}
          />
          <CardGrid items={text.witnesses} icon={FiShield} columns="lg:grid-cols-4" />
        </div>
      </section>

      <section className="relative py-16">
        <div className="section-shell">
          <SectionHeader
            title={text.ekycTitle}
            description={isHindi ? 'Loan entry और bank correction दोनों के लिए Aadhaar-mobile verification support.' : 'Aadhaar-mobile verification support for loan entry and bank correction.'}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              [text.loanEntryTitle, FiBookOpen, text.loanEntry],
              [text.bankCorrectionTitle, FiCreditCard, text.bankCorrection],
            ].map(([title, Icon, items]) => (
              <motion.div
                key={title}
                className="rounded-2xl border border-white/70 bg-white/75 p-6 shadow-[0_18px_60px_rgba(11,31,58,0.10)] backdrop-blur-xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-wine" size={26} />
                  <h3 className="text-2xl font-black text-navy">{title}</h3>
                </div>
                <div className="mt-5 grid gap-3">
                  {items.map((item) => (
                    <div key={item} className="rounded-xl bg-white p-4 font-bold text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="section-shell rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_28px_90px_rgba(11,31,58,0.12)] backdrop-blur-xl md:p-8">
          <SectionHeader
            title={isHindi ? 'ऑनलाइन एवं दस्तावेज सेवाएं' : 'Online & Document Services'}
            description={
              isHindi
                ? 'KCC सेवाओं के साथ शपथ पत्र, प्रमाण पत्र, पंजीयन और सभी online forms की सुविधा भी उपलब्ध है।'
                : 'Along with KCC services, affidavit, certificates, registrations and all online form services are also available.'
            }
          />
          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ staggerChildren: 0.06 }}
          >
            {extraServices.map((service) => (
              <DocumentServiceCard key={service.title} service={service} isHindi={isHindi} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-navy via-[#111111] to-wine py-16 text-white">
        <div className="section-shell">
          <SectionHeader
            title={text.feeTitle}
            description={isHindi ? 'Service charge work type, document count और process के हिसाब से final होता है.' : 'Service charge depends on work type, document count and process.'}
            light
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pricing.map((price) => (
              <motion.div
                key={price}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-black">{price}</p>
                <p className="mt-2 text-sm font-bold text-white/70">{isHindi ? 'सेवा शुल्क' : 'Service Fee'}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(11,31,58,0.10)] backdrop-blur-xl md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-black text-navy">{text.contactTitle}</h2>
              <p className="mt-2 flex items-center gap-2 text-slate-600">
                <FiMapPin className="text-wine" /> Takala Typing - M.P. Online Service Center
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+91${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-wine px-5 py-3 font-black text-white transition hover:bg-navy"
              >
                <FiPhone /> {isHindi ? 'संपर्क करें' : 'Contact Now'}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-black text-white transition hover:bg-[#20bd5a]"
              >
                <FiSmartphone /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
