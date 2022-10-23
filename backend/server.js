const express = require('express');
const { errorHandaler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const GoalRouter = require('./routes/goalsRoutes');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/goals',GoalRouter);

app.use(errorHandaler)

app.listen(port,()=>console.log(`Server listen on port ${port}`)) 