// import { changeLanguage } from 'i18next';
import React, { useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English', symbol: 'EN' },
  tc: { nativeName: '繁體中文', symbol: '繁' }
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.resolvedLanguage);
  }, []);

  return (
    <>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].symbol}
        </button>
      ))}
    </>
  );
}

export default LanguageSwitcher