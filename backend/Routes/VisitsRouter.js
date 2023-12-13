const express = require('express');
const Visitrouter = express.Router();
const visitController = require('../Controllers/visit'); 


Visitrouter.post('/incrementMembers', async (req, res) => {
    try {
      await visitController.incrementMembers();
      res.status(200).json({ message: 'Incremented "members" value successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  Visitrouter.post('/incrementGuests', async (req, res) => {
    try {
      await visitController.incrementGuests();
      res.status(200).json({ message: 'Incremented "guests" value successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = Visitrouter;