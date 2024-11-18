import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (username === '' || password === '') {
            setError('Kullanıcı adı ve şifre zorunludur');
            return;
        }

        // Kayıt işlemi başarılı olduğunda giriş sayfasına yönlendirme
        navigate('/login');
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Kayıt Ol
            </Typography>
            <TextField
                label="Kullanıcı Adı"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Şifre"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                Kayıt Ol
            </Button>
        </Box>
    );
};

export default RegisterPage;
