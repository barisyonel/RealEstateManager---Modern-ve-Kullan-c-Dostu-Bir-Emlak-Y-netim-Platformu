import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { ListingContext } from '../ListingContext';

const ListingCard = ({ listing }) => {
    const navigate = useNavigate();
    const { addFavorite, removeFavorite, favorites } = useContext(ListingContext);

    const handleDetailsClick = () => {
        navigate(`/listing/${listing.id}`);
    };

    const handleFavoriteClick = () => {
        if (favorites.some(fav => fav.id === listing.id)) {
            removeFavorite(listing.id); // Favorilerden çıkar
        } else {
            addFavorite(listing); // Favorilere ekle
        }
    };

    return (
        <Box className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <Typography variant="h6">{listing.title}</Typography>
            <Typography variant="body2" color="textSecondary">
                {listing.location} - {listing.price} TL
            </Typography>
            <Typography variant="body2">{listing.category}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Button variant="contained" color="primary" onClick={handleDetailsClick}>
                    Detay
                </Button>
                <Button
                    variant="contained"
                    color={favorites.some(fav => fav.id === listing.id) ? "error" : "secondary"}
                    onClick={handleFavoriteClick}
                    sx={{ marginLeft: '8px' }} 
                >
                    {favorites.some(fav => fav.id === listing.id) ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                </Button>
            </Box>
        </Box>
    );
};

export default ListingCard;
