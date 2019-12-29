const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect Database
connectDB();

//Init Middleware

app.use(express.json({
    extended: false
}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

process.on('SIGINT', () => {
    console.log("Exiting server!");
    process.exit();
});