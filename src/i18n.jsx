import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Home: "Home",
                Search: "Search",
                Login: "Login",
                Logout: "Logout",
                // Diğer çeviriler buraya eklenebilir
            }
        },
        tr: {
            translation: {
                Home: "Anasayfa",
                Search: "Ara",
                Login: "Giriş Yap",
                Logout: "Çıkış Yap",
                // Diğer çeviriler buraya eklenebilir
            }
        }
    },
    lng: "tr", // Varsayılan dili ayarlayın (örneğin: Türkçe)
    fallbackLng: "en", // Dil bulunamazsa kullanılacak dil
    interpolation: {
        escapeValue: false // React zaten escape ediyor
    }
});

export default i18n;
