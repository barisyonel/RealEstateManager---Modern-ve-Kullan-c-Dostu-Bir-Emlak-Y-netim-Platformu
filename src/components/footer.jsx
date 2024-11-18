import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box 
            component="footer" 
            sx={{
                backgroundColor: '#6200ee',
                color: 'white',
                padding: '20px',
                position: 'relative',
                bottom: 0,
                width: '100%',
                marginTop: 'auto',
                textAlign: 'center'
            }}
        >
            <Typography variant="body1">Bize Ulaşın</Typography>
            <Typography variant="body2">Adres: KARŞIYAKA / İZMİR</Typography>
            <Typography variant="body2">Telefon: (0212) 123 45 67</Typography>

            <Box sx={{ marginTop: 1 }}>
                <MuiLink component={Link} to="/" sx={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
                    Anasayfa
                </MuiLink>
                <MuiLink component={Link} to="/favori" sx={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
                    Favoriler
                </MuiLink>
                <MuiLink component={Link} to="/login" sx={{ color: 'white', textDecoration: 'none' }}>
                    Giriş Yap
                </MuiLink>
            </Box>
        </Box>
    );
};

export default Footer;
