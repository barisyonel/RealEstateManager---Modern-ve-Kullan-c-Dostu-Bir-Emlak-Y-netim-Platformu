import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Select, MenuItem } from '@mui/material';

const UpdateListingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        category: '',
        type: 'satılık'
    });

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await fetch(`http://localhost:3005/products/${id}`);
                const data = await response.json();
                setListing(data);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
            }
        };

        fetchListing();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await fetch(`http://localhost:3005/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(listing),
            });
            navigate(`/listing/${id}`);
        } catch (error) {
            console.error('Güncelleme hatası:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListing((prevListing) => ({
            ...prevListing,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                İlanı Düzenle
            </Typography>
            <TextField
                label="Başlık"
                name="title"
                variant="outlined"
                fullWidth
                value={listing.title}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Açıklama"
                name="description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={listing.description}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Fiyat"
                name="price"
                variant="outlined"
                fullWidth
                type="number"
                value={listing.price}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Konum"
                name="location"
                variant="outlined"
                fullWidth
                value={listing.location}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
            />
            <Select
                label="Kategori"
                name="category"
                variant="outlined"
                fullWidth
                value={listing.category}
                onChange={handleChange}
                displayEmpty
                sx={{ marginBottom: 2 }}
            >
                <MenuItem value="">Kategori Seçin</MenuItem>
                <MenuItem value="Daire">Daire</MenuItem>
                <MenuItem value="Ofis">Ofis</MenuItem>
                <MenuItem value="Arsa">Arsa</MenuItem>
                <MenuItem value="Villa">Villa</MenuItem>
            </Select>
            <Select
                label="Tür"
                name="type"
                variant="outlined"
                fullWidth
                value={listing.type}
                onChange={handleChange}
                displayEmpty
                sx={{ marginBottom: 2 }}
            >
                <MenuItem value="satılık">Satılık</MenuItem>
                <MenuItem value="kiralık">Kiralık</MenuItem>
            </Select>
            <Button variant="contained" color="primary" onClick={handleUpdate} fullWidth>
                Güncelle
            </Button>
        </Box>
    );
};

export default UpdateListingPage;
