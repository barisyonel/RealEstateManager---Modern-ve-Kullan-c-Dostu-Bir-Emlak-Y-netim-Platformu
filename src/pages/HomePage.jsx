import React, { useContext, useState, useEffect } from 'react';
import { ListingContext } from '../ListingContext';
import { Box, Typography, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';
import ListingCard from '../components/ListingCard';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = ({ searchTerm }) => {
    const { listings } = useContext(ListingContext);
    const [filteredListings, setFilteredListings] = useState(listings);
    const navigate = useNavigate();

    const handleFilterChange = (filters) => {
        const {
            minPrice,
            maxPrice,
            selectedCity,
            roomCount,
            grossArea,
            netArea,
            floor,
            buildingAge,
            heatingType,
            balcony,
            parking,
        } = filters;

        const filtered = listings.filter((listing) => {
            const details = listing.details || {};
            const isAboveMin = minPrice === '' || listing.price >= parseFloat(minPrice);
            const isBelowMax = maxPrice === '' || listing.price <= parseFloat(maxPrice);
            const matchesCity = selectedCity === '' || listing.location.trim().toLowerCase() === selectedCity.trim().toLowerCase();
            const matchesRoom = roomCount === '' || listing.roomCount === roomCount;
            const matchesGrossArea = grossArea === '' || parseFloat(details.m2_brut) >= parseFloat(grossArea);
            const matchesNetArea = netArea === '' || parseFloat(details.m2_net) >= parseFloat(netArea);
            const matchesFloor = floor === '' || details.floor === floor;
            const matchesBuildingAge = buildingAge === '' || details.buildingAge === buildingAge;
            const matchesHeating = heatingType === '' || details.heatingType === heatingType;
            const matchesBalcony = !balcony || details.balkon === balcony;
            const matchesParking = !parking || details.otopark === parking;

            return (
                isAboveMin &&
                isBelowMax &&
                matchesCity &&
                matchesRoom &&
                matchesGrossArea &&
                matchesNetArea &&
                matchesFloor &&
                matchesBuildingAge &&
                matchesHeating &&
                matchesBalcony &&
                matchesParking
            );
        });

        setFilteredListings(filtered);
    };

    useEffect(() => {
        setFilteredListings(listings);
    }, [listings]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
            <Box sx={{ flex: '0 0 250px', marginRight: '20px' }}>
                <Sidebar onFilterChange={handleFilterChange} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/add-listing')}
                    sx={{ marginBottom: '20px' }}
                >
                    İlan Ekle
                </Button>
                <div className="listing-grid">
                    {filteredListings.length > 0 ? (
                        filteredListings.map((listing) => (
                            <div className="listing-card" key={listing.id}>
                                <ListingCard listing={listing} />
                            </div>
                        ))
                    ) : (
                        <Typography variant="body1">Bu kriterlere uygun ilan bulunamadı.</Typography>
                    )}
                </div>
            </Box>
        </Box>
    );
};

export default HomePage;
