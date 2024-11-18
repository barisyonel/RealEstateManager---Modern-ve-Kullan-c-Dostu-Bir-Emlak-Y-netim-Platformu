import React, { useState, useContext } from 'react';
import { ListingContext } from '../ListingContext';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

const AddListingPage = () => {
    const { listings, setListings } = useContext(ListingContext);
    const navigate = useNavigate();

    const [newListing, setNewListing] = useState({
        title: '',
        price: '',
        location: '',
        description: '',
        image: '', // Fotoğraf alanı
        details: {
            m2_brut: '',
            m2_net: '',
            roomCount: '',
            floor: '',
            buildingAge: '',
            heatingType: '',
            balkon: false,
            otopark: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.startsWith('details.')) {
            const key = name.split('.')[1];
            setNewListing((prevState) => ({
                ...prevState,
                details: {
                    ...prevState.details,
                    [key]: type === 'checkbox' ? checked : value,
                },
            }));
        } else {
            setNewListing((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newListing.title || !newListing.price || !newListing.image) {
            alert("Lütfen tüm gerekli alanları doldurun (Başlık, Fiyat, Fotoğraf)");
            return;
        }

        const id = listings.length + 1;
        const listingWithId = { ...newListing, id };

        try {
            await fetch('http://localhost:3005/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(listingWithId),
            });
            setListings([...listings, listingWithId]);
            navigate('/');
        } catch (error) {
            console.error('Ekleme hatası:', error);
        }
    };

    return (
        <Box sx={{ padding: 4, maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom>
                Yeni İlan Ekle
            </Typography>
            <form onSubmit={handleSubmit}>
                {/* Başlık */}
                <TextField
                    label="Başlık"
                    name="title"
                    variant="outlined"
                    fullWidth
                    value={newListing.title}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                {/* Fiyat */}
                <TextField
                    label="Fiyat"
                    name="price"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={newListing.price}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                {/* Konum */}
                <TextField
                    label="Konum"
                    name="location"
                    variant="outlined"
                    fullWidth
                    value={newListing.location}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                {/* Açıklama */}
                <TextField
                    label="Açıklama"
                    name="description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={newListing.description}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                {/* Fotoğraf URL */}
                <TextField
                    label="Fotoğraf URL"
                    name="image"
                    variant="outlined"
                    fullWidth
                    value={newListing.image}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                {/* Detaylar */}
                <TextField
                    label="m² (Brüt)"
                    name="details.m2_brut"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={newListing.details.m2_brut}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="m² (Net)"
                    name="details.m2_net"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={newListing.details.m2_net}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Oda Sayısı"
                    name="details.roomCount"
                    variant="outlined"
                    fullWidth
                    value={newListing.details.roomCount}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Bina Yaşı"
                    name="details.buildingAge"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={newListing.details.buildingAge}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Bulunduğu Kat"
                    name="details.floor"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={newListing.details.floor}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Isıtma Türü"
                    name="details.heatingType"
                    variant="outlined"
                    fullWidth
                    value={newListing.details.heatingType}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                {/* Balkon */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={newListing.details.balkon}
                            name="details.balkon"
                            onChange={handleChange}
                        />
                    }
                    label="Balkon"
                />
                {/* Otopark */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={newListing.details.otopark}
                            name="details.otopark"
                            onChange={handleChange}
                        />
                    }
                    label="Otopark"
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Kaydet
                </Button>
            </form>
        </Box>
    );
};

export default AddListingPage;
