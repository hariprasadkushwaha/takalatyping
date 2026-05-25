import { useTranslation } from 'react-i18next';

export default function useLanguage() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith('hi') ? 'hi' : 'en';

  return {
    language,
    isHindi: language === 'hi',
    changeLanguage: (lng) => i18n.changeLanguage(lng),
  };
}
