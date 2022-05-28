import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import accessoryReducer from '../reducer/accessoryReducer';
import adminReducer from '../reducer/adminReducer';
import cartReducer from '../reducer/cartReducer';
import dressReducer from '../reducer/dressReducer';
import eventReducer from '../reducer/eventReducer';
import eventsReducer from '../reducer/eventsReducer';
import orderReducer from '../reducer/orderReducer';
import shirtReducer from '../reducer/shirtReducer';
import skirtReducer from '../reducer/skirtReducer'
import trousersReducer from '../reducer/trousersReducer';
import userReducer from '../reducer/userReducer';
import voucherPremiumReducer from '../reducer/voucherPremiumReducer';
import voucherReducer from '../reducer/voucherReducer';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const configStore = () => {
    return createStore (
        combineReducers (
            {
                Accessory: accessoryReducer,
                UserList: adminReducer,
                Cart: cartReducer,
                Dress: dressReducer,
                Event: eventReducer,
                Events: eventsReducer,
                Order: orderReducer,
                Shirt: shirtReducer,
                Skirt: skirtReducer,
                Trousers: trousersReducer,
                User: userReducer,
                VoucherPremium: voucherPremiumReducer,
                Voucher: voucherReducer,
            }
        ),
        composeEnhancers(applyMiddleware(thunk)),
    )
}

export default configStore;
