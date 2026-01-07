require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/public.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/api/v1', require('./routes/api/portfolio.routes'));

const PORT = process.env.PORT || 5000;

// Only start server if run directly (local dev), otherwise export for Vercel
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;