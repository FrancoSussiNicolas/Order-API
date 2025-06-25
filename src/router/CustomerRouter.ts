import {Router} from 'express'; 
import { CustomerController } from '../controller/Customercontroller';

const routerCustomer = Router(); 

routerCustomer.get('/', CustomerController.getAllCustomer); 
routerCustomer.get('/:id', (req,res) => {CustomerController.getByIdCustomer(req,res)}); 
routerCustomer.post('/', (req,res)=> {CustomerController.createCustomer(req,res)}); 
routerCustomer.patch('/:id', (req,res) =>{CustomerController.updateCustomer(req,res)});
routerCustomer.delete('/:id',(req,res) => {CustomerController.deleteCustomer(req,res)}); 


export {routerCustomer};