const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');
const { sequelize } = require('./models/task');

const app = express();

sequelize.sync();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json()); // <--- DOIT ÊTRE AVANT LES ROUTES

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Routes
app.use('/api/tasks', taskRoutes);

// Error handling
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});