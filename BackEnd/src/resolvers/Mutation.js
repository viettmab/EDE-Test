import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require("path");
const fs = require("fs");

function generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const Mutation = {
    // async login(parent, args, {prisma}, info){
    //     const user = await prisma.user.findUnique({where: {email: args.data.email}});
    //     if(!user){
    //         throw new Error('Email not found')
    //     }
    //     const passwordToken = await bcrypt.compare(args.data.password, user.password);
    //     if(!passwordToken){
    //         throw new Error('Password false');
    //     }
    //     return {
    //         user,
    //         token: getNewToken(user.id)
    //     }
    // },
    // async createUser(parent, args, {prisma}, info){
    //     const emailExisted = await prisma.user.findUnique({
    //         where: {
    //             email: args.data.email
    //         }
    //     });
    //     if(emailExisted){
    //         throw new Error('Email is exited!');
    //     }
    //     if(args.data.password.length < 8){
    //         throw new Error('Password must be at least 8 characters');
    //     }
    //     const password = await bcrypt.hash(args.data.password, 10);
    //     const user = prisma.user.create({
    //         data: {
    //             ...args.data,
    //             password: password,
    //         }
    //     });
    //     return {
    //         user,
    //         token: getNewToken(user.id)
    //     }
    // },
    // async updateUser(parent, args, {prisma, request}, info){
    //     const userId = getUserId(request);
    //     return prisma.user.update({
    //         where:{
    //             id: userId,
    //         }, 
    //         data:{
    //             ...args.data
    //         }
    //     })
    // }, 
    // async deleteUser(parent, args, {prisma, request}, info){
    //     const userId = getUserId(request);
    //     return prisma.user.delete({
    //         where:{
    //             id: userId,
    //         }
    //     }, info)
    // }, 
    async upLoadFile(parent, {file}, {prisma}, info){
        const url= file.map(async (item)=>{
            const {createReadStream, filename} = await item;
            const stream = createReadStream();
            const {ext} = path.parse(filename);
            const randomName = generateRandomString(12)+ext;
            const pathName = path.join(__dirname, `../../public/img/${randomName}`);
            await stream.pipe(fs.createWriteStream(pathName));
            return `http://localhost:4000/img/${randomName}`
        })
        return {
            url
        }
    }, 
    async deleteFile(parent, args, {prisma}, info){
        var status;
        args.filesName.forEach(fileName =>{
            fs.unlink(path.join(__dirname, `../../public/img/${fileName}`), (err)=>{
                if(err) status='False';
                else{
                    status = 'Success';
                }
            }) 
        })
        return status;
    },
    async createVoucher(parent, args, {prisma, pubsub}, info){
        const Voucher = await prisma.voucher.create({
            data:{
                ...args.data,
            }
        }, info);
        pubsub.publish('VOUCHER_CREATE', {
            VoucherCreate: Voucher
        })
        return Voucher
    },
    async createVoucherPremium(parent, args, {prisma}, info){
        return  prisma.voucherPremium.create({
            data:{
                ...args.data,
            }
        }, info)
    },
    async createUser(parent, args, {prisma}, info){
        const userExist = await prisma.user.findUnique({
            where: {
                email: args.data.email
            }
        });
        if(!userExist){
            const newUser = await prisma.user.create({
                data: {...args.data}
            });
            return {
                ...newUser
            }
        }else{
            return await prisma.user.findUnique({
                where:{
                    email: args.data.email,
                    
                },
                include: {
                    orders: true
                }
            }, info);
        }
    },
    async createDress(parent, args, {prisma}, info){
        return prisma.dress.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createShirt(parent, args, {prisma}, info){
        return prisma.shirt.create({
            data:{
                ...args.data,
            }
        }, info);
    },
    async createSkirt(parent, args, {prisma}, info){
        return prisma.skirt.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createTrousers(parent, args, {prisma}, info){
        return prisma.trousers.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createAccessory(parent, args, {prisma, request}, info){
        return prisma.accessory.create({
            data: {
                ...args.data,
            }
        }, info);
    },
    async createOrder(parent, args, {prisma, pubsub}, info){
        const newOrder = await prisma.order.create({
            data: {
                ...args.data,
            }
        }, info)
        pubsub.publish('NEW_ORDER', {
            NewOrder: newOrder
        })
        return newOrder;
    },
    async updateUser(parent, args, {prisma}, info){
        if(args.email){
            return prisma.user.update({
                where:{
                    email: args.email,
                },
                data:{
                    ...args.data,
                }
            }, info);
        }else{
            return prisma.user.update({
                where:{
                    id: args.userId,
                },
                data:{
                    ...args.data,
                }
            }, info);
        }
        
    }, 
    async updateVoucher(parent, args, {prisma}, info){
        return prisma.voucher.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info)
    },
    async updateVoucherPremium(parent, args, {prisma}, info){
        return prisma.voucherPremium.update({
            where:{
                id: args.id,
            }, 
            data:{...args.data}
        }, info)
    },
    async updateDress(parent, args, {prisma}, info){
        return prisma.dress.update({
            where:{
                id: args.proId,
            }, 
            data:{...args.data}
        }, info);
    },
    async updateAccessory(parent, args, {prisma, request}, info){
        return prisma.accessory.update({
            where:{
                id: args.proId,
            }, 
            data:{...args.data}
        }, info);
    },  
    async updateSkirt(parent, args, {prisma, request}, info){
        return prisma.skirt.update({
            where:{
                id: args.proId,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateShirt(parent, args, {prisma}, info){
        return prisma.shirt.update({
            where:{
                id: args.proId,
            }, 
            data:{...args.data}
        }, info);
    }, 
    async updateTrousers(parent, args, {prisma}, info){
        return prisma.trousers.update({
            where:{
                id: args.proId,
            }, 
            data:{...args.data}
        }, info);
    },
    async updateOrder(parent, args, {prisma, pubsub}, info) {
        const Order = await prisma.order.update({
            where: {
                id: args.id
            },
            data: {
                ...args.data,
            },
        },info);
        pubsub.publish(`ORDER_UPDATE_${Order.userId}`, {
            OrderUpdate: Order
        })
        return Order;
    },
    async deleteDress(parent, args, {prisma}, info){
        return prisma.dress.delete({
            where:{
                id: args.id
            }
        }, info);
    },
    async deleteAccessory(parent, args, {prisma, request}, info){
        return prisma.accessory.delete({
            where:{
                id: args.id
            }
        }, info);
    },  
    async deleteSkirt(parent, args, {prisma, request}, info){
        return prisma.skirt.delete({
            where:{
                id: args.id
            }
        }, info)
    }, 
    async deleteShirt(parent, args, {prisma}, info){
        return prisma.shirt.delete({
            where:{
                id: args.id
            }
        }, info)
    }, 
    async deleteVoucher(parent, args, {prisma}, info){
        return prisma.voucher.delete({
            where:{
                id: args.id
            }
        }, info)
    },
    async deleteVoucherPremium(parent, args, {prisma}, info){
        return prisma.voucherPremium.delete({
            where:{
                id: args.id
            }
        }, info)
    },
    async deleteTrousers(parent, args, {prisma}, info){
        return prisma.trousers.delete({
            where:{
                id: args.id
            }
        }, info)
    },
    async deleteOrder(parent, args, {prisma}, info){
        return prisma.order.update({
            where:{
                id: args.id
            },
            data: {
                status: "Hủy đơn hàng",
            }
        }, info);
    },
    async deleteUser(parent, args, {prisma}, info){
        const deleteOrder = prisma.order.deleteMany({
            where:{
                userId: args.id,
            }
        })
        const deleteUser = prisma.user.delete({
            where:{
                id: args.id
            }
        })
        const transaction = await prisma.$transaction([deleteOrder, deleteUser]);
    },
    async createSales(parent, args, {prisma, pubsub}, info){
        const Sale = await prisma.sales.create({
            data:{
                disCount: args.disCount,
                publish: args.publish,
            }
        }, info);
        pubsub.publish('EVENT_CREATE',{
            EventCreate: Sale
        })
        return Sale;
    }, 
    async updateSales(parent, args,{prisma}, info){
        return prisma.sales.update({
            where:{
                id: args.id
            }, 
            data:{
                ...args.data
            }
        }, info);
    },
    async deleteSale(parent, args, {prisma}, info){
        return prisma.sales.delete({
            where:{
                id: args.id
            }
        })
    }
}
export default Mutation;