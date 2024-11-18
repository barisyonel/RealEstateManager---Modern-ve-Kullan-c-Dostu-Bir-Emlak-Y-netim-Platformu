import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import AddListingPage from './pages/AddListingPage';
import ListingDetailPage from './pages/ListingDetailPage';
import UpdateListingPage from './pages/UpdateListingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ListingProvider } from './ListingContext';
import { UserProvider } from './UserContext';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: { main: darkMode ? '#bb86fc' : '#6200ea' },
            secondary: { main: darkMode ? '#03dac6' : '#03a9f4' },
            background: {
                default: darkMode ? '#121212' : '#f5f5f5',
                paper: darkMode ? '#1e1e1e' : '#ffffff',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#000000',
                secondary: darkMode ? '#CC2B52' : '#6200ea',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <ListingProvider>
                    <Router>
                        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onSearch={setSearchTerm} />
                            <Box sx={{ flex: 1, display: 'flex', padding: '20px' }}>
                                <Routes>
                                    <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
                                    <Route path="/favori" element={<FavoritesPage />} />
                                    <Route path="/add-listing" element={<AddListingPage />} />
                                    <Route path="/listing/:id" element={<ListingDetailPage />} />
                                    <Route path="/update-listing/:id" element={<UpdateListingPage />} />
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                </Routes>
                            </Box>
                            <Footer />
                        </Box>
                    </Router>
                </ListingProvider>
            </UserProvider>
        </ThemeProvider>
    );
};

export default App;
