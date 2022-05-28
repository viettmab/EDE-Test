import jwt from 'jsonwebtoken';
const getUserId = (request, Auth = true) => {
    const header =request.req.headers.authorization || '';
    // : request.connection.context.Authorization;

    if(header){
        const token = header.replace('Bearer ', '');
        const decoded = jwt.verify(token,'thisisasecret');
        return decoded.userID
    }
    if(Auth){
        throw new Error('Authorization header required');
    }
   return null;
}
export default getUserId;