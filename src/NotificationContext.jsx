import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    // Bildirim ekleme fonksiyonu
    const addNotification = (message) => {
        setNotifications((prevNotifications) => [...prevNotifications, { id: Date.now(), message }]);
    };

    // Bildirimi silme fonksiyonu
    const removeNotification = (id) => {
        setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};
