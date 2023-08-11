import express from 'express';
import todoRoutes from './Routes/Routes';
import bodyParser from 'body-parser';

const app=express();
app.use(bodyParser.json())

app.use(todoRoutes);

app.listen(3000,()=>{console.log('Server is running on port 3000')});