import client from '../client/client';
import {gql} from '@apollo/client';
import {startSetTrousers} from '../actions/Trousers';

const getTrousers = (dispatch) => {
    client
        .query({
            query: gql`
                query GetTrousers {
                    getTrousers {
                        id
                        name
                        description
                        img_1
                        img_2
                        updatedAt
                        createdAt
                        price
                        codePro
                        size_M
                        size_S
                        size_L
                        size_XL
                        material
                        color
                        publish
                        newPro
                    }
                }`
        })
        .then(result => {
            dispatch(startSetTrousers(result.data.getTrousers))
        })
};

export default getTrousers;
