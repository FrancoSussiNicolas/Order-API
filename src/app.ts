import express, {json} from 'express';
import {routerCustomer} from './router/CustomerRouter'; 
import cors from 'cors'; 


const app = express(); 
app.use(json());
app.use(cors());
const PORT = process.env.PORT ?? 5342;

app.use('/customer', routerCustomer); 
app.use('/customer/customer-with-order', routerCustomer); 

app.listen( PORT, () =>{
        console.log(`the server is running on http://localhost/${PORT}`);
})