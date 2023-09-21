import express from "express";
import bodyParser from 'body-parser';
 import userRoutes from './Routes/users.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());


 
app.use('/users', userRoutes);

app.get('/', (req, res) => {

    

    res.send("heelo broooo");


})

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));