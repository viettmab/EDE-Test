
const Query = {
    async getDress(parent, agrs, {prisma}, info) {
        return await prisma.dress.findMany();
    }, 
    async getShirt(parent, agrs, {prisma}, info) {
        return await prisma.shirt.findMany();
    }, 
    async getSkirt(parent, agrs, {prisma}, info) {
        return await prisma.skirt.findMany();
    }, 
    async getTrousers(parent, agrs, {prisma}, info) {
        return await prisma.trousers.findMany();
    },   
    async getBannerImg(parent, agrs,{prisma}, info) {
        return await prisma.bannerImg.findMany({
            where:{
                publish: true,
            }
        });
    },
    async getBannerImg(parent, agrs, {prisma}, info) {
        return await prisma.bannerImg.findMany();
    }, 
    async getUser(parent, agrs, {prisma}, info){
        return await prisma.user.findMany();
    },
    async getVoucher(parent, agrs, {prisma}, info) {
        return await prisma.voucher.findMany();
    },
    async getOrder(parent, agrs, {prisma}, info) {
        return await prisma.order.findMany();
    }, 
    async getVoucherPremium(parent, agrs, {prisma}, info) {
        return await prisma.voucherPremium.findMany();
    }, 
    async getSales(parent, agrs, {prisma}, info) {
        return await prisma.sales.findMany();
    },
    async getSale(parent, agrs, {prisma}, info){
        return await prisma.sales.findFirst({
            where: {
                publish: true,
            }
        })
    },
    async getAccessory(parent, agrs, {prisma}, info) {
        return await prisma.accessory.findMany();
    }
}
export default Query;