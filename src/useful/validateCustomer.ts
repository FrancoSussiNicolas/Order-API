import z from 'zod';

const CustomerSchema = z.object({
    name: z.string().min(1,"Name is required").max(255),
    email: z.string().email("Invalid email"),
    adress: z.string().min(1,"Adress is required").max(255)
});

export type CustomerSchemaType = z.infer<typeof CustomerSchema>; 

export function validateCustomer(data: CustomerSchemaType) {
    return CustomerSchema.safeParse(data); 
}

const cP = CustomerSchema.partial()
export type CustomerSchemaTypePartial = z.infer<typeof cP>; 

export function validatePartialCustomer (data: CustomerSchemaTypePartial){
    return CustomerSchema.partial().safeParse(data); 
}