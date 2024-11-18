import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Divider,
  CardMedia,
  Chip,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ListingDetailPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [tempListing, setTempListing] = useState(null); // Geçici düzenleme verisi
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

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


  const handleEditToggle = () => {
    if (!isEditing) {
      setTempListing({ ...listing }); // Düzenleme iptalinde eski veriye dön
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTempListing((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        [name]: type === "checkbox" ? checked : value,
      },
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:3005/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tempListing),
      });
      setListing(tempListing);
      setIsEditing(false);
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Bu ilanı silmek istediğinizden emin misiniz?")) {
      try {
        await fetch(`http://localhost:3005/products/${id}`, {
          method: "DELETE",
        });
        navigate("/");
      } catch (error) {
        console.error("Silme hatası:", error);
      }
    }
  };

  if (!listing) return <Typography>İlan bulunamadı</Typography>;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            height="400"
            image={listing.image}
            alt={listing.title}
          />
        </Grid>

        <Grid item xs={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" gutterBottom color="primary">
              {listing.title}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                startIcon={<EditIcon />}
                onClick={handleEditToggle}
                variant="contained"
                color="primary"
              >
                {isEditing ? "İptal" : "Düzenle"}
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
                variant="contained"
                color="secondary"
              >
                Sil
              </Button>
            </Box>
          </Box>
          <Typography variant="h5" gutterBottom color="secondary">
            {listing.price} TL
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {listing.location}
          </Typography>
          <Box sx={{ marginY: 2 }}>
            <Chip
              label={listing.type === "satılık" ? "Satılık" : "Kiralık"}
              color="primary"
              sx={{ marginRight: 1 }}
            />
            <Chip label={listing.category} color="secondary" />
          </Box>
          <Divider sx={{ marginY: 2 }} />

          <Accordion sx={{ marginTop: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">İlan Özellikleri</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                <strong>Açıklama:</strong>{" "}
                {listing.description || "Açıklama mevcut değil."}
              </Typography>
              <Typography variant="body2">
                <strong>Açıklama:</strong>{" "}
                {listing.description || "Açıklama mevcut değil."}
              </Typography>
              <Typography variant="body2">
                <strong>Oda Sayısı:</strong> {listing.roomCount}
              </Typography>
              <Typography variant="body2">
                <strong>m² (Brüt):</strong>{" "}
                {listing.details?.m2_brut || "Belirtilmemiş"}
              </Typography>
              <Typography variant="body2">
                <strong>m² (Net):</strong>{" "}
                {listing.details?.m2_net || "Belirtilmemiş"}
              </Typography>
              <Typography variant="body2">
                <strong>Bina Yaşı:</strong>{" "}
                {listing.details?.buildingAge || "Belirtilmemiş"}
              </Typography>
              <Typography variant="body2">
                <strong>Bulunduğu Kat:</strong>{" "}
                {listing.details?.floor || "Belirtilmemiş"}
              </Typography>
              <Typography variant="body2">
                <strong>Isıtma Türü:</strong>{" "}
                {listing.details?.heatingType || "Belirtilmemiş"}
              </Typography>
              <Typography variant="body2">
                <strong>Balkon:</strong>{" "}
                {listing.details?.balkon ? "Var" : "Yok"}
              </Typography>
              <Typography variant="body2">
                <strong>Otopark:</strong>{" "}
                {listing.details?.otopark ? "Var" : "Yok"}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={3}>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "background.paper",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" color="primary">
              İlan Sahibi Bilgileri
            </Typography>
            <Typography variant="body2">
              <strong>Ad:</strong> Barış Can Yönel
            </Typography>
            <Typography variant="body2">
              <strong>Telefon:</strong> +90 555 555 5555
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> baris@example.com
            </Typography>
            <Typography variant="body2">
              <strong>Şehir:</strong> İzmir
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {isEditing && (
        <Box
          className="edit-container"
          sx={{
            position: "absolute",
            top: "10%",
            left: "25%",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: "50%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Düzenle
          </Typography>
          <TextField
            label="Şehir"
            name="location"
            variant="outlined"
            fullWidth
            value={tempListing.location || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Fiyat"
            name="price"
            variant="outlined"
            fullWidth
            type="number"
            value={tempListing.price || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Oda Sayısı"
            name="roomCount"
            variant="outlined"
            fullWidth
            value={tempListing.roomCount || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="m² (Brüt)"
            name="m2_brut"
            variant="outlined"
            fullWidth
            type="number"
            value={tempListing.details?.m2_brut || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="m² (Net)"
            name="m2_net"
            variant="outlined"
            fullWidth
            type="number"
            value={tempListing.details?.m2_net || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Bina Yaşı"
            name="buildingAge"
            variant="outlined"
            fullWidth
            type="number"
            value={tempListing.details?.buildingAge || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Bulunduğu Kat"
            name="floor"
            variant="outlined"
            fullWidth
            type="number"
            value={tempListing.details?.floor || ""}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <Select
            name="heatingType"
            value={tempListing.details?.heatingType || ""}
            onChange={handleChange}
            fullWidth
            displayEmpty
            sx={{ marginBottom: 2 }}
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
                checked={tempListing.details?.balkon || false}
                name="balkon"
                onChange={handleChange}
              />
            }
            label="Balkon"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={tempListing.details?.otopark || false}
                name="otopark"
                onChange={handleChange}
              />
            }
            label="Otopark"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            fullWidth
          >
            Güncelle
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ListingDetailPage;
