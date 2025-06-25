import { PrismaClient } from "@prisma/client";
import { create } from "domain";
export const prisma = new PrismaClient();

async function seed() {
    // Create Product
    const product1 = await prisma.product.create({
        data: {
        nameProduct: 'Mouse',
        descripcion: 'Wireless ergonomic mouse'
        }
    })

    const product2 = await prisma.product.create({
        data: {
        nameProduct: 'Keyboard',
        descripcion: 'Mechanical keyboard with RGB'
        }
    })

  // Create Client without order
    const customerWithouOrder = await prisma.customer.create({
        data: {
            name: 'Ana González',
            email: 'ana@example.com',
            adress: 'Calle Falsa 123',
        },
    })

  // Client with order
    const customerWithOrder = await prisma.customer.create({
        data: {
        name: 'Luis Pérez',
        email: 'luis@example.com',
        adress: 'Av. Siempre Viva 742',
        },
    })

  // Create Order with order (OrderItem)
    const order = await prisma.order.create({
    data: {
        idClient: customerWithOrder.id,
        OrderItem: {
            create: [
                {
                    productId: product1.idProduct,
                    quantity: 2,
                },
                {
                    productId: product2.idProduct,
                    quantity: 1,
                }
            ]
        }
    }
    })
}

seed()
    .then(() => {
        console.log('🌱 Seed completo')
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
    


seed().then(()=> prisma.$disconnect);