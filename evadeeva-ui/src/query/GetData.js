import { disableExperimentalFragmentVariables, gql, useQuery } from '@apollo/client';
import {connect} from 'react-redux';

import PageLoading from '../pages/PageLoading';
import { startSetAccessory } from '../actions/accessory';
import { startSetDress } from '../actions/dress';
import { setEvent, startSetEvent } from '../actions/event';
import { startSetShirt } from '../actions/shirt';
import { startSetSkirt } from '../actions/skirt';
import { startSetTrousers } from '../actions/trousers';
import { startSetVoucherPremium } from '../actions/voucherPremium';
import { startSetVoucher } from '../actions/voucher';

const GET_DATA = gql`
  query GetDress {
    getDress {
      id
      createdAt
      updatedAt
      name
      description
      img_1
      img_2
      price
      codePro
      size_M
      size_S
      size_L
      size_XL
      material
      color
      newPro
      publish
    }
    getTrousers {
      id
      createdAt
      updatedAt
      name
      description
      img_1
      img_2
      price
      codePro
      size_M
      size_S
      size_L
      size_XL
      material
      color
      newPro
      publish
    }
    getShirt {
      id
      createdAt
      updatedAt
      name
      description
      img_1
      img_2
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
    getSkirt {
      id
      createdAt
      updatedAt
      name
      description
      img_1
      img_2
      price
      codePro
      size_M
      size_S
      size_L
      size_XL
      material
      color
      newPro
      publish
    }
    getSale{
      disCount
    }
    getVoucher {
      id
      createdAt
      updatedAt
      disCount
      condition
    }
    getVoucherPremium {
      id
      createdAt
      updatedAt
      disCount
      condition
    }
    getAccessory {
        id
        name
        description
        img_1
        img_2
        updatedAt
        createdAt
        price
        codePro
        count
        material
        color
        publish
        newPro
    }
    getSales {
      id
      createdAt
      updatedAt
      disCount
      publish
    }
  }`;

const GetData = ({startSetAccessory, startSetTrousers, startSetDress, startSetSkirt, startSetShirt, startSetVoucher, startSetVoucherPremium, setEvent, startSetEvent}) => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <PageLoading/>;
  if (error) return `Error! ${error}`;
  if (data) {
      startSetDress(data.getDress)
      startSetShirt(data.getShirt)
      startSetSkirt(data.getSkirt)
      startSetTrousers(data.getTrousers)
      setEvent(data.getSale.disCount)
      startSetVoucher(data.getVoucher)
      startSetVoucherPremium(data.getVoucherPremium)
      startSetAccessory(data.getAccessory)
      startSetEvent(data.getSales)
  }
  return (
      <PageLoading/>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSetTrousers:(trousers) => dispatch(startSetTrousers(trousers)),
    startSetDress:(dress) => dispatch(startSetDress(dress)),
    startSetSkirt:(skirt) => dispatch(startSetSkirt(skirt)),
    startSetShirt:(shirt) => dispatch(startSetShirt(shirt)),
    setEvent:(data) => dispatch(setEvent(data)),
    startSetVoucher:(voucher) => dispatch(startSetVoucher(voucher)),
    startSetVoucherPremium:(voucher) => dispatch(startSetVoucherPremium(voucher)),
    startSetAccessory:(accessory) => dispatch(startSetAccessory(accessory)),
    startSetEvent:(event) => dispatch(startSetEvent(event)),
  }
}

export default connect(null, mapDispatchToProps)(GetData);
