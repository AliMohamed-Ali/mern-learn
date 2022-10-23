const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db')
const { errorHandaler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const GoalRouter = require('./routes/goalsRoutes');

const app = express();
connectDB();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/goals',GoalRouter);

app.use(errorHandaler)

app.listen(port,()=>console.log(`Server listen on port ${port}`)) 