import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

const port = 8000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Servier listening on port ${port}`);    
});

