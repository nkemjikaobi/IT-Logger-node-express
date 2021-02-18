const express = require('express');
const connectDB = require('./config/db')
const morgan = require('morgan')

const app = express();

//Connect Database
connectDB();

//Init Middleware for accepting data from body
app.use(express.json({ extended: false }));

//Middleware
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}


//Define Routes
app.use('/api/logs', require('./routes/logs'));
app.use('/api/techs', require('./routes/techs'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))