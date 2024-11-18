import React, { createContext, useState, useEffect } from 'react';

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
    const [listings, setListings] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('http://localhost:3005/products');
                const data = await response.json();
                setListings(data);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
            }
        };

        fetchListings();
    }, []);

    const addFavorite = (listing) => {
        if (!favorites.some(fav => fav.id === listing.id)) {
            setFavorites([...favorites, listing]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(fav => fav.id !== id));
    };

    return (
        <ListingContext.Provider value={{ listings, setListings, favorites, addFavorite, removeFavorite }}>
            {children}
        </ListingContext.Provider>
    );
};
