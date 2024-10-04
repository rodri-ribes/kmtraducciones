import express from 'express';
import cors from 'cors';
import routes from './src/routes/index';
// import dbConnection from './src/database/db';
import morgan from 'morgan'
const app = express();


app.use(cors({origin: true}));

app.use(express.json());

app.use(morgan('dev'));

app.use('/', routes);

// // Database connection
// dbConnection();

app.listen( 4000, () => {
    console.log('Server is running...');
})