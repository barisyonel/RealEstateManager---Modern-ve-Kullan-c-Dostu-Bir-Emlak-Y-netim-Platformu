import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' kullanarak yeni createRoot API'sini içe aktarın
import App from './App';
import './i18n'; // Dil desteği için i18n dosyasını içe aktarıyoruz

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot kullanarak kök oluşturuyoruz
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
