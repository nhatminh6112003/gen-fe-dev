import Cookies from 'js-cookie';

const DEFAULT_LANGUAGE = 'en';
export const language = Cookies.get('language') || DEFAULT_LANGUAGE;

export const useLanguage = () => {
  const currentLang = Cookies.get('language') || DEFAULT_LANGUAGE;

  const setLanguage = (lang: string) => {
    Cookies.set('language', lang, { expires: 30 });
  };

  return { language: currentLang, setLanguage };
};
