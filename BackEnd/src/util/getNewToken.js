import jwt from 'jsonwebtoken';
const getNewToken = (userId) => {
    return jwt.sign({userID: userId}, 'thisisasecret', {expiresIn: '7 days'})
}
export default getNewToken;