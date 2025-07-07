import z from "zod"; 

const OrederItemSchema = z.object({
    productId : z.number().min(1).positive(), 
    quantity : z.number().min(1).positive(), 
});

const OrderSchema = z.object({
    products: z.array(OrederItemSchema).nonempty()
});

const CustomerSchemaOrder = z.object({
    name: z.string().min(1,"Name is required").max(255),
    email: z.string().email("Invalid email"),
    adress: z.string().min(1,"Adress is required").max(255), 
    orders : z.array(OrderSchema).min(1," You must have at least an order ").optional()
});

export type CustomerSchemaOrderType = z.infer<typeof CustomerSchemaOrder>

export function validateCustomerWithOrder (data: CustomerSchemaOrderType) {
    return CustomerSchemaOrder.safeParse(data);
}

const cP = CustomerSchemaOrder.partial()
export type CustomerSchemaTypePartial = z.infer<typeof cP>; 

export function validatePartialCustomer (data: CustomerSchemaTypePartial){
    return CustomerSchemaOrder.partial().safeParse(data); 
}