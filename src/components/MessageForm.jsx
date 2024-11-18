import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const MessageForm = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message) {
            onSend(message);
            setMessage(''); // Mesaj gönderildikten sonra metni temizle
        }
    };

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6">İlan Sahibi ile İletişime Geçin:</Typography>
            <TextField
                label="Mesajınız"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                multiline
                rows={4}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                Mesaj Gönder
            </Button>
        </Box>
    );
};

export default MessageForm;
