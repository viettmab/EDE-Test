import { useState, useEffect} from "react"
import Add_acc from "../Add_acc";
import Update_acc from "../Update_acc";
import { connect } from "react-redux";
import { gql, useMutation } from '@apollo/client';
import deleteAccessory from '../../mutation/deleteAccessory';
import {addAccessory, updateAccessory, removeAccessory} from '../../actions/accessory';
import NavHeader from "../../components/HomeComponents/Header";
import Modal from 'react-modal'
import format_curency from "../../utils/displayPrice";
import { showSuccessToast } from "../../utils/displayToastMess";
const ADD_ACCESSORY = gql`
    mutation Mutation($data: createAccessoryInput!) {
        createAccessory(data: $data) {
            id
            name
            description
            img
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
}
`
const UPDATE_ACCESSORY = gql`
    mutation Mutation($data: updateAccessoryInput!, $proId: Int!) {
        updateAccessory(data: $data, proId: $proId) {
            id
            name
            description
            img
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
    }
`;
const Accessory = ({accessory, addAccessory, updateAccessory, removeAccessory }) => {
    const [showModalRemove, setShowModalRemove] = useState(-1)
    const [showModalAdd, setShowModalAdd]= useState(false);
    const [flag, setFlag] = useState(0);
    const [showModalUpdate, setShowModalUpdate]= useState(false);
    const [inputSearch, setInputSearch] = useState('') 
    const [showResult, setShowResult] = useState(false)
    const resultArray = accessory.filter((item) => {
        return item.name.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1
    })
    const [update, statusUpdate] = useMutation(UPDATE_ACCESSORY,{
        onCompleted: (data)=>{
            updateAccessory(data.updateAccessory.id, data.updateAccessory);
        }
    });
    const [add, statusAdd] = useMutation(ADD_ACCESSORY,
            {
                onCompleted:(data)=>{
                    addAccessory(data.createAccessory);
                }
            }
        );
    useEffect(() => {
        if(inputSearch.length > 0) {
            setShowResult(true)
        } 
        else (
            setShowResult(false)
        )
    },[inputSearch.length])    
        const handleUpdateAccessory= (id) => {
            setFlag(id);
            setShowModalUpdate(true);
        }

        const handleRemoveAccessory = async(item) => {
            await deleteAccessory(item);
            removeAccessory(item.id);
            setShowModalRemove(false);
            showSuccessToast("???? x??a")
        }

        const handleAddAccessory = () => {
            setShowModalAdd(true);
        }
        const handleInputSearch = (e) => {
            setInputSearch(e)
        }
    return (
        <div>
            <NavHeader showPro={true} />
            
            <div className="margin-bottom">
            
            <div className="table-product">
                <div className="table-product-title">
                    <div className="title-table-product-content">Ph??? ki???n</div>
                    <div className="admin-right-product">
                        <div className="admin-search">
                                    <form action="search" className="header-form-admin-product">
                                            <input autoFocus={true} type="text" className="header-search-admin-product" placeholder="T??m s???n ph???m..." 
                                                value={inputSearch} onChange={(e) => {handleInputSearch(e.target.value)}}
                                            />
                                            <div className="close-search-product"><i class="fas fa-search" /></div>
                                    </form>
                        </div>
                    <button className='btn-add btn btn-success' onClick={handleAddAccessory}><i className="fas fa-plus"/>Th??m m???i</button>
                    </div>
                </div>
                    <table className="table  ">
                        <thead>
                            <tr className="table-tr">
                                <th scope="col" class="table-title-pro" style={{width:" 1%"}}>STT</th>
                                <th scope="col" class="table-title-pro" style={{width:" 1%"}}>ID</th>
                                <th scope="col" class="table-title-pro" style={{width:" 9%"}}>NG??Y T???O</th>
                                <th scope="col" class="table-title-pro" style={{width:" 10%"}}>NG??Y C???P NH???T</th>
                                <th scope="col" class="table-title-pro" style={{width:" 13%"}}>T??N</th>
                                <th scope="col" class="table-title-pro pro-des">M?? T???</th>
                                <th scope="col" class="table-title-pro" style={{width:" 5%"}}>???NH</th>
                                <th scope="col" class="table-title-pro" style={{width:" 5%"}}>GI??</th>
                                <th scope="col" class="table-title-pro" style={{width:" 10%"}}>M?? S???N PH???M</th>
                                <th scope="col" class="table-title-pro" style={{width:" 10%"}}>S??? L?????NG</th>
                                <th scope="col" class="table-title-pro" style={{width:" 7%"}}>CH???T LI???U</th>
                                <th scope="col" class="table-title-pro" style={{width:" 6%"}}>M??U</th>
                                <th scope="col" class="table-title-pro" style={{width:" 7%"}}>THAO T??C</th>
                                
                            </tr>
                        </thead>

                        { showResult ? 
                        
                            resultArray.length !== 0 ?
                            <tbody className="table-body">
                                    {resultArray.map((item,index) => {
                                var createdAt = new Date(parseFloat(item.createdAt));
                                var updatedAt = new Date(parseFloat(item.updatedAt));
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className='content'>{item.id}</td>
                                        <td className='content'>{createdAt.toLocaleString()}</td>
                                        <td className='content'>{updatedAt.toLocaleString()}</td>
                                        <td className='content'>{item.name}</td>
                                        <td className='content '>
                                            <div className='content-img'>
                                                {item.description}
                                            </div>
                                        </td>
                                        <td className='content img-pro '><img src={item.img_1} alt="" /></td>
                                        <td className='content'>{format_curency(item.price)}??</td>
                                        <td className='content'>{item.codePro}</td>
                                        <td className='content'>{item.count}</td>
                                        <td className='content'>{item.material}</td>
                                        <td className='content'>{item.color}</td>
                                        <td className='content'style={{paddingLeft: '20px',paddingRight: '20px'}}>
                                            <div>
                                                <button 
                                                    onClick={()=>setShowModalRemove(item.id)}
                                                    className='btn-remove btn btn-danger btn-sm px-3'
                                                >
                                                    <i class="fas fa-trash-alt"></i>
                                                </button>
                                                <button 
                                                    className='btn-update btn btn-warning'
                                                    onClick={()=>handleUpdateAccessory(item.id)}
                                                >
                                                <i class="fas fa-edit"></i>
                                                </button>
                                            </div>
                                            {showModalUpdate&&(flag===item.id)&&<Update_acc isDisplay={showModalUpdate} update={update} status={statusUpdate}  setShowModalUpdate={setShowModalUpdate} product={item}/>}
                                            <Modal
                                                isOpen={showModalRemove===item.id}
                                                className="modal-react custom-modal-react"
                                                ariaHideApp={false}
                                            >
                                                <div className="modal-body-react" >
                                                    <div className="close-modal" onClick={()=>setShowModalRemove(false)}>
                                                        <i className="far fa-times-circle"></i>
                                                    </div>
                                                    <div>
                                                        <div>B???n c?? ch???c ch???n x??a kh??ng ?</div>
                                                        <div className="modal-btn">
                                                            <button type="button" class="btn btn-danger btn-modal-remove" onClick={() => handleRemoveAccessory(item)}>Ch???c ch???n</button>
                                                            <button type="button" class="btn btn-primary btn-modal-cancel" onClick={() => setShowModalRemove(false)}>H???y</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                    
                                )
                                
                            })}
                            </tbody>
                            :
                            <span className="no-data">Kh??ng t??m th???y s???n ph???m</span>
                            :

                            <tbody className="table-body">
                                
                                {accessory.map((item,index) => {
                                    var createdAt = new Date(parseFloat(item.createdAt));
                                    var updatedAt = new Date(parseFloat(item.updatedAt));
                                    return (
                                        <tr key={item.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td className='content'>{item.id}</td>
                                            <td className='content'>{createdAt.toLocaleString()}</td>
                                            <td className='content'>{updatedAt.toLocaleString()}</td>
                                            <td className='content'>{item.name}</td>
                                            <td className='content '>
                                                <div className='content-img'>
                                                    {item.description}
                                                </div>
                                            </td>
                                            <td className='content img-pro '><img src={item.img_1} alt="" /></td>
                                            <td className='content'>{format_curency(item.price)}??</td>
                                            <td className='content'>{item.codePro}</td>
                                            <td className='content'>{item.count}</td>
                                            <td className='content'>{item.material}</td>
                                            <td className='content'>{item.color}</td>
                                            <td className='content'style={{paddingLeft: '20px',paddingRight: '20px'}}>
                                                <div>
                                                    <button 
                                                        onClick={()=>setShowModalRemove(item.id)}
                                                        className='btn-remove btn btn-danger btn-sm px-3'
                                                    >
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                    <button 
                                                        className='btn-update btn btn-warning'
                                                        onClick={()=>handleUpdateAccessory(item.id)}
                                                    >
                                                    <i class="fas fa-edit"></i>
                                                    </button>
                                                </div>
                                                {showModalUpdate&&(flag===item.id)&&<Update_acc isDisplay={showModalUpdate} update={update} status={statusUpdate}  setShowModalUpdate={setShowModalUpdate} product={item}/>}
                                                <Modal
                                                    isOpen={showModalRemove===item.id}
                                                    className="modal-react custom-modal-react"
                                                    ariaHideApp={false}
                                                >
                                                    <div className="modal-body-react" >
                                                        <div className="close-modal" onClick={()=>setShowModalRemove(false)}>
                                                            <i className="far fa-times-circle"></i>
                                                        </div>
                                                        <div>
                                                            <div>B???n c?? ch???c ch???n x??a kh??ng ?</div>
                                                            <div className="modal-btn">
                                                                <button type="button" class="btn btn-danger btn-modal-remove" onClick={() => handleRemoveAccessory(item)}>Ch???c ch???n</button>
                                                                <button type="button" class="btn btn-primary btn-modal-cancel" onClick={() => setShowModalRemove(false)}>H???y</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </td>
                                        </tr>
                                        
                                    )
                                    
                                })}
                                
                            </tbody>

                    }
                    </table>
            </div>

            
            
            <Add_acc isDisplay={showModalAdd} add={add} status={statusAdd}  setShowModalAdd={setShowModalAdd} />
            
            
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        accessory: state.Accessory,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addAccessory:(data) => dispatch(addAccessory(data)),
        updateAccessory:(id,data) => dispatch(updateAccessory(id,data)),
        removeAccessory:(id) => dispatch(removeAccessory(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accessory)