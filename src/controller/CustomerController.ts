import {Request , Response} from 'express';
import { CustomerModel } from '../model/CustomerModel';
import { validateCustomerWithOrder, validatePartialCustomer } from '../useful/validateCustomerWithOrder';
import { error } from 'console';


export class CustomerController {

    static async getAllCustomer (req:Request,res:Response){
        const allCustomer = await CustomerModel.getAll(); 
        if(allCustomer == null){
            res.status(200).json({message: 'There are no registered customers'});
        }

        res.status(200).json(allCustomer);
    }

    static async getByIdCustomer (req:Request, res: Response) {
        const id = req.params.id; 
        if (isNaN(+id)){
            res.status(400).json({ error: "ID sent must be a number" });
        }

        const customer = await CustomerModel.getById(+id);
        if(customer == null) {
            return res.status(404).json({message: "Customer not found"});
        }
        return res.status(201).json(customer);
    }

    // static async createCustomer (req:Request, res:Response){
    //     const result = validateCustomer(req.body); 
    //     if(result.success) {
    //         const newCustomer = await CustomerModel.create(result.data);
    //         if(newCustomer == null) {
    //             return res.status(400).json({message:"The Customer already registered"});
    //         }
    //         return res.status(201).json(newCustomer); 
    //     }
    // }

    static async createCustomerWithOrder (req:Request, res:Response){
        const result = validateCustomerWithOrder(req.body);

        if(!result.success){
            return res.status(404).json({
                error: "Invalid dates",
                detail : result.error.format()
            })
        }

        const newCustomerOrder = CustomerModel.createCustomerWOrder(result.data)
    }

    //Review
    static async updateCustomer(req:Request, res:Response){
        const id = req.params.id; 
        if (isNaN(+id)){
            res.status(400).json({ error: "ID sent must be a number" });
        }

        const result = validatePartialCustomer(req.body);
        if(result.success) {
            const updateCustomer = await CustomerModel.update(result.data, +id);

        }
    }

    static async deleteCustomer(req:Request, res:Response) {
        const id = req.params.id; 
        if (isNaN(+id)){
            res.status(400).json({ error: "ID sent must be a number" });
        }
        const deleteCustomer = await CustomerModel.delete(+id);
        if(deleteCustomer) return res.status(204).json({message:"The customer was correctly eliminated"});

        return res.status(404).json({message: "The customer not found"});
    }
}