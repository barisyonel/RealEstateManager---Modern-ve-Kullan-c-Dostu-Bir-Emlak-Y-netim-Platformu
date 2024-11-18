import React, { useContext } from 'react';
import { ListingContext } from '../ListingContext';
import { Typography } from '@mui/material';
import ListingCard from '../components/ListingCard';
import '../styles/HomePage.css'; // HomePage'deki CSS'leri kullan

const FavoritesPage = () => {
    const { favorites } = useContext(ListingContext);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Favorilerim
            </Typography>
            <div className="listing-grid">
                {favorites.length > 0 ? (
                    favorites.map((listing) => (
                        <div className="listing-card" key={listing.id}>
                            <ListingCard listing={listing} />
                        </div>
                    ))
                ) : (
                    <Typography>Favori ilanınız bulunmamaktadır.</Typography>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
