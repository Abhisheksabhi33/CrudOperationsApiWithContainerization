const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 9443;

app.use(bodyParser.json());

// Create (POST)
app.post('/add-item', async (req, res) => {
  try {
    const { basketKey, value } = req.body;
    
    const pantryId = 'd78e7671-1525-4bf5-aa50-cd99509a8343';

    const response = await axios.post(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`, {
      value,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add item to Pantry' });
  }
});

// Read (GET)
app.get('/get-item', async (req, res) => {
  try {
    const { basketKey } = req.query;

    const pantryId = 'd78e7671-1525-4bf5-aa50-cd99509a8343';

    const response = await axios.get(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve item from Pantry' });
  }
});
 
// List All Baskets (GET)
app.get('/list-baskets', async (req, res) => {
    try {
      const pantryId = 'd78e7671-1525-4bf5-aa50-cd99509a8343';
  
      const response = await axios.get(`https://getpantry.cloud/apiv1/pantry/${pantryId}`);
  
      const baskets = response.data;
  
      res.json(baskets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to list baskets from Pantry' });
    }
  });
  

// Update (PUT)
app.put('/update-item', async (req, res) => {
  try {
    const { basketKey, value } = req.body;

    const pantryId = 'd78e7671-1525-4bf5-aa50-cd99509a8343';

    const response = await axios.put(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`, {
      value,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update item in Pantry' });
  }
});

// Delete (DELETE)
app.delete('/delete-item', async (req, res) => {
  try {
    const { basketKey } = req.query;

    const pantryId = 'd78e7671-1525-4bf5-aa50-cd99509a8343';

    const response = await axios.delete(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete item from Pantry' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// Test your API endpoints using tools like Postman or curl to ensure that they work as expected. Make sure to test all CRUD operations (Create, Read, Update, Delete).

