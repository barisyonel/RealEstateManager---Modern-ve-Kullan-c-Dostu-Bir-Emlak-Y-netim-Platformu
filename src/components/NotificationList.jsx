import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingDetailPage from './pages/ListingDetailPage';
import AddListingPage from './pages/AddListingPage';
import FavoritesPage from './pages/FavoritesPage';
import UpdateListingPage from './pages/UpdateListingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ListingProvider } from './ListingContext';
import { UserProvider } from './UserContext';
import theme from './theme';
import './styles/main.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <ListingProvider>
                    <Router>
                        <div className="App">
                            <Navbar />
                            <div className="content">
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                    <Route path="/listing/:id" element={<ListingDetailPage />} />
                                    <Route path="/add-listing" element={<AddListingPage />} />
                                    <Route path="/favorites" element={<FavoritesPage />} />
                                    <Route path="/update-listing/:id" element={<UpdateListingPage />} />
                                </Routes>
                            </div>
                            <Footer />
                        </div>
                    </Router>
                </ListingProvider>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
