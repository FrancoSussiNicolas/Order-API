import { PrismaClient, Customer } from "@prisma/client";
import { CustomerSchemaOrderType,CustomerSchemaTypePartial } from "../useful/validateCustomerWithOrder";

const prisma = new PrismaClient; 

export class CustomerModel {
    static async getAll(): Promise<Customer[] | null> {
        const customer = await prisma.customer.findMany({
            orderBy: {id: 'asc'}
        }); 
        return customer;
    }

    static async getById (id : number) : Promise <Customer| null> {
        const customer = await prisma.customer.findUnique({
            where: {id : id}
        })
        return customer; 
    }

    //Create customer without orders (Review)
    // static async create (newCustomer: CustomerSchemaType ): Promise<Customer | null> {
    //     const customer = await prisma.customer.findUnique({
    //         where: {email: newCustomer.email}
    //     });
        
    //     if(customer !== null) return null;

    //     const newCus = await prisma.customer.create({
    //         data: {...newCustomer}
    //     }); 
    //     return newCus;
    // }

    //Create customer with order
    static async createCustomerWOrder (data: CustomerSchemaOrderType){

    }

    //Review
    static async update (data: CustomerSchemaTypePartial, idCustomer:number): Promise<Customer | null | number> {
        const customer = await prisma.customer.findUnique({
            where: {id : idCustomer}
        }); 
        if(customer == null) return null; 

                if (data.email) {
            const emailExists = await prisma.customer.findFirst({
                where: {
                    email: data.email,
                    id: { not: idCustomer }
                }
            });
            if (emailExists) return -1;
        }
        return await prisma.customer.update({
            where: {id : idCustomer},
            data : {...data}
        });
    }

    static async delete (idCustomer: number): Promise<Boolean> {
        const memberFind = await prisma.customer.findUnique({
            where: {id : idCustomer}
        }); 
        if(memberFind == null) return false; 
        
        const customerDelete = await prisma.customer.delete({
            where: {id: idCustomer}
        }); 
        return true; 

    }
}