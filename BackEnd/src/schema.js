import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!,
        email: String!,
        name: String!,
        phoneNumber: String!,
        address: String!,
        point: Int!,
        orders: [Order!],
        admin: Boolean!,
        staff: Boolean!,
    }
    type SliderImg{
        id: Int!,
        name: String!,
        publish: Boolean!,
        img: String!,
        createdAt: String!,
        updatedAt: String!,
    }
    type BannerImg{
        id: Int!,
        name: String!,
        publish: Boolean!,
        img: String!,
        createdAt: String!,
        updatedAt: String!,
    }
    type Dress{
        id:   Int     
        name: String!,
        codePro:  String!,
        description: String!,
        createdAt: String!,
        updatedAt: String!,
        material:  String!,
        color: String!,
        price: Int! ,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        img_1:    String!,
        img_2:    String!,
        publish: Boolean!,
        newPro: Boolean!    
    }
    type Skirt{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        newPro: Boolean!
        publish: Boolean!,
    }
    type Trousers{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        newPro: Boolean!
        publish: Boolean!,
    }
    type Shirt{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    type Order{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        namePro: String!,
        price: Int!,
        userId: Int!,
        status: String!,
    }
    type Sales{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        disCount: Int!,
        publish: Boolean!,
    }
    type Voucher{
        id: Int!,
        createdAt: String!, 
        updatedAt: String!,
        disCount: Int!,
        condition: Int!,
    }
    type VoucherPremium{
        id: Int!,
        createdAt: String!,
        updatedAt: String!,
        disCount: Int!,
        condition: Int!,
    }
    type Accessory{
        id:   Int     
        createdAt: String!,
        updatedAt: String!,
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        count: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    type Query {
        getDress:[Dress!]!,
        getTrousers:[Trousers!]!,
        getShirt:[Shirt!]!,
        getSkirt:[Skirt!]!,
        getAccessory: [Accessory!]!,
        getBannerImg:[BannerImg!]!,
        getSliderImg:[SliderImg!]!,
        getUser: [User!]!,
        getOrder: [Order!]!,
        getVoucher: [Voucher!]!,
        getVoucherPremium: [VoucherPremium!]!,
        getSales: [Sales!]!,
        getSale: Sales!,
        
    }

    type Subscription{
        EventCreate: Sales,
        VoucherCreate: Voucher,
        OrderUpdate(userId: Int): Order,
        NewOrder: Order
    }

    type File {
        url: String!
    }
    scalar Upload
    input createVoucherInput{
        disCount: Int!,
        condition: Int!
    }
    input createVoucherPremiumInput{
        disCount: Int!,
        condition: Int!
    }
    input createUserInput {
        email: String!,
        name: String!,
        phoneNumber: String!,
        address: String!,
        point: Int!,
        admin: Boolean!,
        staff: Boolean!,
    }
    input createAccessoryInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        count: Int!
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createDressInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createShirtInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createSkirtInput {
        publish: Boolean!,
        newPro: Boolean!
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!
    }
    input createTrousersInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateUserInput {
        name: String,
        phoneNumber: String,
        address: String,
        point: Int,
    }
    input updateDressInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateAccessoryInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        count: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input createOrderInput {
        namePro: String!,
        price: Int!,
        userId: Int!,
        status: String!,
    }
    input updateShirtInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateVoucherInput {
        disCount: Int,
        condition: Int,
    }
    input updateVoucherPremiumInput {
        disCount: Int,
        condition: Int,
    }
    input updateOrderInput {
        status: String!,
    }
    input updateSkirtInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateTrousersInput {
        name: String!,
        description: String!,
        img_1:    String!,
        img_2:    String!,
        price: Int! ,
        codePro:  String!,
        size_M:  Int!,
        size_S:  Int!,
        size_L: Int!,
        size_XL: Int!,
        material:  String!,
        color: String!,
        publish: Boolean!,
        newPro: Boolean!
    }
    input updateSalesInput {
        publish: Boolean
    }
    type Mutation{
        # login(data: LoginInput!): AuthPayload!
        # createUser(data: CreatedUserInput!): AuthPayload!
        # updateUser(data: UpdatedUserInput!): User!
        createSales(disCount: Int!, publish: Boolean!):Sales!,
        updateSales(id: Int!, data: updateSalesInput!): Sales!,
        createVoucher(data: createVoucherInput!):Voucher!,
        createVoucherPremium(data: createVoucherPremiumInput!):VoucherPremium!,
        createUser(data: createUserInput!): User!
        upLoadFile(file: [Upload!]!): File!,
        deleteFile(filesName: [String]):String,
        createAccessory(data: createAccessoryInput!): Accessory!,
        createDress(data: createDressInput!): Dress!,
        createSkirt(data: createSkirtInput!): Skirt!,
        createShirt(data: createShirtInput!): Shirt!,
        createOrder(data: createOrderInput!): Order!,
        createTrousers(data: createTrousersInput!): Trousers!,
        updateVoucher(data: updateVoucherInput!, id: Int!): Voucher!,
        updateVoucherPremium(data: updateVoucherPremiumInput!, id: Int!): VoucherPremium!, 
        updateUser(data: updateUserInput!, email: String, userId: Int): User!,
        deleteUser(id: Int!): User,
        updateAccessory(data: updateAccessoryInput!, proId: Int!): Accessory!,
        updateDress(data: updateDressInput!, proId: Int!): Dress!,
        updateSkirt(data: updateSkirtInput!, proId: Int!):Skirt!,
        updateShirt(data: updateShirtInput!, proId: Int!):Shirt!,
        updateOrder(data: updateOrderInput!, id: Int!):Order!,
        updateTrousers(data: updateTrousersInput!, proId: Int!):Trousers!,
        deleteTrousers(id: Int!): Trousers!,
        deleteShirt(id: Int!): Shirt!,
        deleteSkirt(id: Int!): Skirt!,
        deleteOrder(id: Int!): Order!,
        deleteDress(id: Int!): Dress!,
        deleteVoucher(id: Int!):Voucher!,
        deleteAccessory(id: Int!): Accessory!,
        deleteVoucherPremium(id: Int!):VoucherPremium!,
        deleteSale(id: Int!): Sales!,
    }
`;

export default typeDefs;