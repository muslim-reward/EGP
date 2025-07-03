require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/notify', async (req, res) => {
  const { message } = req.body;
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message
    });
    res.json({ok:true});
  } catch (e) {
    res.status(500).json({error: 'Failed to send'});
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
