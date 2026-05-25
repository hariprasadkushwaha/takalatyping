import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const active = i18n.language?.startsWith('hi') ? 'hi' : 'en';

  return (
    <div className="flex rounded-full border border-white/40 bg-white/20 p-1 text-sm font-bold shadow-sm backdrop-blur">
      {[
        ['hi', 'Hindi'],
        ['en', 'English'],
      ].map(([lng, label]) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          className={`focus-ring rounded-full px-3 py-1.5 transition ${
            active === lng ? 'bg-wine text-white shadow-md' : 'text-navy hover:bg-white/80'
          }`}
          aria-pressed={active === lng}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
