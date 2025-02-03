const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Conectare la baza de date
connectDB();

// Importăm toate rutele
const medicationRoutes = require('./routes/medications');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');

// Configurăm rutele
app.use('/api/medications', medicationRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});