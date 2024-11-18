import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, InputBase, Menu, MenuItem, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: '100%',
    maxWidth: '600px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const Navbar = ({ onSearch, darkMode, setDarkMode, language, setLanguage }) => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        setCurrentUser(null);
        navigate('/login');
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setAnchorEl(null);
    };

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#4B0082' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                        Anasayfa
                    </Typography>
                    <IconButton color="inherit" onClick={() => navigate('/favori')}>
                        <FavoriteIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Ara"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </Search>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton color="inherit" onClick={openMenu}>
                        <LanguageIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                    >
                        <MenuItem onClick={() => handleLanguageChange('tr')}>Türkçe</MenuItem>
                        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                    </Menu>
                    {currentUser ? (
                        <>
                            <Typography variant="body1" sx={{ marginRight: 1 }}>
                                {currentUser.username}
                            </Typography>
                            <IconButton color="inherit" onClick={() => navigate('/profile')}>
                                <AccountCircleIcon />
                            </IconButton>
                            <Button color="inherit" onClick={handleLogout}>
                                Çıkış
                            </Button>
                        </>
                    ) : (
                        <Button color="inherit" onClick={() => navigate('/login')}>
                            Giriş Yap
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
