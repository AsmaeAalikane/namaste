const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campervan = require('./models/Campervan'); // Import the model

const app = express();
const PORT = process.env.PORT || 4002;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/campervan_rental', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Configure EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configure the static files folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // To parse form data

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Location de Campervans' });
});

app.post('/book', async (req, res) => {
  const { pickLocation, dropLocation, pickDate, dropDate, pickTime, dropTime } = req.body;

  try {
    const availableVans = await Campervan.find({
      availableFrom: { $lte: new Date(pickDate) },
      availableTo: { $gte: new Date(dropDate) },
    });

    res.render('availableVans', { vans: availableVans });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
