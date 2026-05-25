import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa6';

const serviceOptions = [
  'M.P. Online',
  'KCC Loan',
  'Banking Services',
  'Typing Work',
  'Printing',
  'Government Form',
  'Photoshop Work',
  'Farmer Services',
];

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  });

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const message = `Takala Typing Enquiry
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}`;

    window.open(`https://wa.me/916266383257?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <form onSubmit={submit} className="glass rounded-2xl p-5 shadow-glass sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-navy">{t('contact.name')}</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={update}
            className="focus-ring w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-navy"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-navy">{t('contact.phoneField')}</span>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={update}
            className="focus-ring w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-navy"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-navy">{t('contact.service')}</span>
        <select
          name="service"
          value={form.service}
          onChange={update}
          className="focus-ring w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-navy"
        >
          {serviceOptions.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-navy">{t('contact.message')}</span>
        <textarea
          required
          rows="5"
          name="message"
          value={form.message}
          onChange={update}
          placeholder={t('contact.placeholder')}
          className="focus-ring w-full resize-none rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-navy"
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-wine to-royal px-5 py-3 font-extrabold text-white shadow-glow transition hover:-translate-y-0.5 sm:w-auto"
      >
        <FaWhatsapp />
        {t('actions.submit')}
      </button>
    </form>
  );
}
