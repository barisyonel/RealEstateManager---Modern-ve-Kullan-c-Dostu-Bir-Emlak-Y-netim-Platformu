import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, Typography, Checkbox, FormControlLabel } from '@mui/material';

const Sidebar = ({ onFilterChange }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [roomCount, setRoomCount] = useState('');
    const [grossArea, setGrossArea] = useState('');
    const [netArea, setNetArea] = useState('');
    const [floor, setFloor] = useState('');
    const [buildingAge, setBuildingAge] = useState('');
    const [heatingType, setHeatingType] = useState('');
    const [balcony, setBalcony] = useState(false);
    const [parking, setParking] = useState(false);

    const handleFilterApply = () => {
        const filters = {
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
        };
        onFilterChange(filters);
    };

    return (
        <Box sx={{ padding: 2, width: '250px' }}>
            <Typography variant="h6">Filtreleme</Typography>

            <TextField
                label="Min Fiyat"
                variant="outlined"
                fullWidth
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Max Fiyat"
                variant="outlined"
                fullWidth
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <Select
    label="Şehir"
    variant="outlined"
    fullWidth
    value={selectedCity}
    onChange={(e) => setSelectedCity(e.target.value)}
    displayEmpty
    sx={{
        marginBottom: 2,}}
>
    <MenuItem value="">Şehir Seçin</MenuItem>
    <MenuItem value="İstanbul">İstanbul</MenuItem>
    <MenuItem value="Ankara">Ankara</MenuItem>
    <MenuItem value="İzmir">İzmir</MenuItem>
    <MenuItem value="Adana">Adana</MenuItem>
    <MenuItem value="Adıyaman">Adıyaman</MenuItem>
    <MenuItem value="Afyonkarahisar">Afyonkarahisar</MenuItem>
    <MenuItem value="Ağrı">Ağrı</MenuItem>
    <MenuItem value="Aksaray">Aksaray</MenuItem>
    <MenuItem value="Amasya">Amasya</MenuItem>
    <MenuItem value="Ankara">Ankara</MenuItem>
    <MenuItem value="Antalya">Antalya</MenuItem>
    <MenuItem value="Ardahan">Ardahan</MenuItem>
    <MenuItem value="Artvin">Artvin</MenuItem>
    <MenuItem value="Aydın">Aydın</MenuItem>
    <MenuItem value="Balıkesir">Balıkesir</MenuItem>
    <MenuItem value="Bartın">Bartın</MenuItem>
    <MenuItem value="Batman">Batman</MenuItem>
    <MenuItem value="Bayburt">Bayburt</MenuItem>
    <MenuItem value="Bilecik">Bilecik</MenuItem>
    <MenuItem value="Bingöl">Bingöl</MenuItem>
    <MenuItem value="Bitlis">Bitlis</MenuItem>
    <MenuItem value="Bolu">Bolu</MenuItem>
    <MenuItem value="Burdur">Burdur</MenuItem>
    <MenuItem value="Bursa">Bursa</MenuItem>
    <MenuItem value="Çanakkale">Çanakkale</MenuItem>
    <MenuItem value="Çankırı">Çankırı</MenuItem>
    <MenuItem value="Çorum">Çorum</MenuItem>
    <MenuItem value="Denizli">Denizli</MenuItem>
    <MenuItem value="Diyarbakır">Diyarbakır</MenuItem>
    <MenuItem value="Düzce">Düzce</MenuItem>
    <MenuItem value="Edirne">Edirne</MenuItem>
    <MenuItem value="Elazığ">Elazığ</MenuItem>
    <MenuItem value="Erzincan">Erzincan</MenuItem>
    <MenuItem value="Erzurum">Erzurum</MenuItem>
    <MenuItem value="Eskişehir">Eskişehir</MenuItem>
    <MenuItem value="Gaziantep">Gaziantep</MenuItem>
    <MenuItem value="Giresun">Giresun</MenuItem>
    <MenuItem value="Gümüşhane">Gümüşhane</MenuItem>
    <MenuItem value="Hakkari">Hakkari</MenuItem>
    <MenuItem value="Hatay">Hatay</MenuItem>
    <MenuItem value="Iğdır">Iğdır</MenuItem>
    <MenuItem value="Isparta">Isparta</MenuItem>
    <MenuItem value="İstanbul">İstanbul</MenuItem>
    <MenuItem value="İzmir">İzmir</MenuItem>
    <MenuItem value="Kahramanmaraş">Kahramanmaraş</MenuItem>
    <MenuItem value="Karabük">Karabük</MenuItem>
    <MenuItem value="Karaman">Karaman</MenuItem>
    <MenuItem value="Kars">Kars</MenuItem>
    <MenuItem value="Kastamonu">Kastamonu</MenuItem>
    <MenuItem value="Kayseri">Kayseri</MenuItem>
    <MenuItem value="Kırıkkale">Kırıkkale</MenuItem>
    <MenuItem value="Kırklareli">Kırklareli</MenuItem>
    <MenuItem value="Kırşehir">Kırşehir</MenuItem>
    <MenuItem value="Kilis">Kilis</MenuItem>
    <MenuItem value="Kocaeli">Kocaeli</MenuItem>
    <MenuItem value="Konya">Konya</MenuItem>
    <MenuItem value="Kütahya">Kütahya</MenuItem>
    <MenuItem value="Malatya">Malatya</MenuItem>
    <MenuItem value="Manisa">Manisa</MenuItem>
    <MenuItem value="Mardin">Mardin</MenuItem>
    <MenuItem value="Mersin">Mersin</MenuItem>
    <MenuItem value="Muğla">Muğla</MenuItem>
    <MenuItem value="Muş">Muş</MenuItem>
    <MenuItem value="Nevşehir">Nevşehir</MenuItem>
    <MenuItem value="Niğde">Niğde</MenuItem>
    <MenuItem value="Ordu">Ordu</MenuItem>
    <MenuItem value="Osmaniye">Osmaniye</MenuItem>
    <MenuItem value="Rize">Rize</MenuItem>
    <MenuItem value="Sakarya">Sakarya</MenuItem>
    <MenuItem value="Samsun">Samsun</MenuItem>
    <MenuItem value="Siirt">Siirt</MenuItem>
    <MenuItem value="Sinop">Sinop</MenuItem>
    <MenuItem value="Sivas">Sivas</MenuItem>
    <MenuItem value="Şanlıurfa">Şanlıurfa</MenuItem>
    <MenuItem value="Şırnak">Şırnak</MenuItem>
    <MenuItem value="Tekirdağ">Tekirdağ</MenuItem>
    <MenuItem value="Tokat">Tokat</MenuItem>
    <MenuItem value="Trabzon">Trabzon</MenuItem>
    <MenuItem value="Tunceli">Tunceli</MenuItem>
    <MenuItem value="Uşak">Uşak</MenuItem>
    <MenuItem value="Van">Van</MenuItem>
    <MenuItem value="Yalova">Yalova</MenuItem>
    <MenuItem value="Yozgat">Yozgat</MenuItem>
    <MenuItem value="Zonguldak">Zonguldak</MenuItem>
</Select>

            {/* Oda Sayısı için Select */}
            <Select
                label="Oda Sayısı"
                variant="outlined"
                fullWidth
                value={roomCount}
                onChange={(e) => setRoomCount(e.target.value)}
                displayEmpty
                sx={{ marginBottom: 2 ,
                }}
            >
                <MenuItem value="">Oda Sayısı Seçin</MenuItem>
                <MenuItem value="1+1">1+1</MenuItem>
                <MenuItem value="2+1">2+1</MenuItem>
                <MenuItem value="3+1">3+1</MenuItem>
                <MenuItem value="4+1">4+1</MenuItem>
                <MenuItem value="5+1">5+1</MenuItem>
                <MenuItem value="6+1">6+1</MenuItem>
            </Select>

            <TextField
                label="m² (Brüt)"
                variant="outlined"
                fullWidth
                value={grossArea}
                onChange={(e) => setGrossArea(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="m² (Net)"
                variant="outlined"
                fullWidth
                value={netArea}
                onChange={(e) => setNetArea(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Bulunduğu Kat"
                variant="outlined"
                fullWidth
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Bina Yaşı"
                variant="outlined"
                fullWidth
                value={buildingAge}
                onChange={(e) => setBuildingAge(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <Select
                label="Isıtma Türü"
                variant="outlined"
                fullWidth
                value={heatingType}
                onChange={(e) => setHeatingType(e.target.value)}
                displayEmpty
                sx={{ marginBottom: 2 ,}}
            >
                <MenuItem value="">Isıtma Türü Seçin</MenuItem>
                <MenuItem value="Merkezi">Merkezi</MenuItem>
                <MenuItem value="Doğalgaz">Doğalgaz</MenuItem>
                <MenuItem value="Klima">Klima</MenuItem>
                <MenuItem value="Soba">Soba</MenuItem>
            </Select>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={balcony}
                        onChange={(e) => setBalcony(e.target.checked)}
                    />
                }
                label="Balkon"
                sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={parking}
                        onChange={(e) => setParking(e.target.checked)}
                    />
                }
                label="Otopark"
                sx={{ marginBottom: 2 }}
            />

            <Button variant="contained" color="primary" onClick={handleFilterApply} fullWidth>
                Filtreleri Uygula
            </Button>
        </Box>
    );
};

export default Sidebar;
