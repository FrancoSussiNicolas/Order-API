import express from 'express';
import {routerCustomer} from './router/CustomerRouter'; 


const app = express(); 
const PORT = process.env.PORT ?? 5342;

app.use('/customer', routerCustomer); 



app.listen( PORT, () =>{
        console.log(`the server is running on http://localhost/${PORT}`);
})