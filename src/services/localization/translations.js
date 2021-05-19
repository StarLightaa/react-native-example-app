import LocalizedStrings from 'react-native-localization';

export const DEFAULT_LANGUAGE = 'ru';

const translations = {
  en: {
    WELCOME: 'Welcome to React',
    STEP1: 'Step One',
    SEE_CHANGES: 'See Your Changes',
    CHANGE_LANGUAGE: 'Change Language',
    LANGUAGE_SETTINGS: 'Change Language',
    BACK: 'Back',
    HOME_SCREEN: 'Home Screen'
  },
  ru: {
    WELCOME: 'Willkommen bei React',
    STEP1: '1. Schritt',
    SEE_CHANGES: 'Änderungen ansehen',
    CHANGE_LANGUAGE: 'Сменить язык',
    LANGUAGE_SETTINGS: 'Сменить язык',
    BACK: 'Zurück',
    HOME_SCREEN: 'Главный экран'
  },
};

export default new LocalizedStrings(translations);