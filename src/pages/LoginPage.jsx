import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === '' || password === '') {
            setError('Kullanıcı adı ve şifre zorunludur');
            return;
        }

        // Giriş başarılıysa kullanıcı bilgilerini kaydedin ve ana sayfaya yönlendirin
        setCurrentUser({ username });
        navigate('/');
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Giriş Yap
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
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                Giriş Yap
            </Button>
        </Box>
    );
};

export default LoginPage;
