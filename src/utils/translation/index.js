import pl from './locales/pl';
import en from './locales/en';

const I18n = require('i18n').default;

export const translate = content => I18n.t(content);

export const getLanguages = () => [
  { key: 'pl', value: translate('polish') },
  { key: 'en', value: translate('english') },
];

export const setI18nLocale = (language) => {
  I18n.locale = language;
};

export const init = (settingsLocale, setLocale) => {
  I18n.fallbacks = true;
  I18n.translations = {
    pl,
    en,
  };

  if (!settingsLocale) {
    const deviceLocale = I18n.locale;

    const locale = getLanguages().find(l => deviceLocale.includes(l.key)) || {
      key: 'en',
    };

    setLocale(locale.key);
    setI18nLocale(locale.key);
  } else {
    setI18nLocale(settingsLocale);
  }
};
