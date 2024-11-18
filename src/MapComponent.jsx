import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    // Sabit koordinatları burada tanımlıyoruz
    const centerCoordinates = [40.3139, 36.5544]; // Tokat, Türkiye koordinatları
    console.log("centerCoordinates:", centerCoordinates); // Konsolda kontrol edin

    return (
        <MapContainer
            center={centerCoordinates} // Koordinatlar burada kullanılıyor
            zoom={13}
            style={{ height: '300px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default MapComponent;
