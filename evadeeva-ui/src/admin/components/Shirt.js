import { useState, useEffect} from "react"
import Add from "../Add";
import Update from "../Update";
import PageLoading from "../../pages/PageLoading";
import { connect } from "react-redux";
import { gql, useMutation } from '@apollo/client';
import deleteShirt from "../../mutation/deleteShirt";
import {addShirt, updateShirt, removeShirt} from '../../actions/shirt';
import NavHeader from "../../components/HomeComponents/Header";
import Modal from 'react-modal'
import format_curency from "../../utils/displayPrice";
import { showSuccessToast } from "../../utils/displayToastMess";
const ADD_SHIRT = gql`
    mutation Mutation($data: createShirtInput!) {
        createShirt(data: $data) {
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
    }
`;
const UPDATE_SHIRT = gql`
    mutation Mutation($data: updateShirtInput!, $proId: Int!) {
        updateShirt(data: $data, proId: $proId) {
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
    }
`;

const Shirt = ({shirt, addShirt, updateShirt, removeShirt}) => {
    const [showModalRemove, setShowModalRemove] = useState(-1)
    const [showModalAdd, setShowModalAdd]= useState(false);
    const [flag, setFlag] = useState(0);
    const [showModalUpdate, setShowModalUpdate]= useState(false);
    const [inputSearch, setInputSearch] = useState('') 
    const [showResult, setShowResult] = useState(false)
    const resultArray = shirt.filter((item) => {
        return item.name.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1
    })
    const [add, statusAdd] = useMutation(ADD_SHIRT,{
            onCompleted:(data)=>{
                addShirt(data.createShirt)
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
    const [update, statusUpdate] = useMutation(UPDATE_SHIRT,{
        onCompleted: (data)=>{
            updateShirt(data.updateShirt.id, data.updateShirt);
        }
    });
        const handleUpdateShirt = (id) => {
            setFlag(id);
            setShowModalUpdate(true);
            
        }

        const handleRemoveShirt = async (item) => {
            await deleteShirt(item);
            removeShirt(item.id);
            setShowModalRemove(false);
            showSuccessToast("???? x??a");
        }

        const handleAddShirt = () => {
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
                    <div className="title-table-product-content">??O</div>
                    <div className="admin-right-product">
                        <div className="admin-search">
                                    <form action="search" className="header-form-admin-product">
                                            <input autoFocus={true} type="text" className="header-search-admin-product" placeholder="T??m s???n ph???m..." 
                                                value={inputSearch} onChange={(e) => {handleInputSearch(e.target.value)}}
                                            />
                                            <div className="close-search-product"><i className="fas fa-search" /></div>
                                    </form>
                    </div>
                    
                    <button className='btn-add btn btn-success' onClick={handleAddShirt}><i className="fas fa-plus" />Th??m m???i</button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table-tr">
                            <th scope="col" className="table-title-pro" style={{width:" 1%"}}>STT</th>
                            <th scope="col" className="table-title-pro" style={{width:" 1%"}}>ID</th>
                            <th scope="col" className="table-title-pro" style={{width:" 9%"}}>NG??Y T???O</th>
                            <th scope="col" className="table-title-pro" style={{width:" 10%"}}>NG??Y C???P NH???T</th>
                            <th scope="col" className="table-title-pro" style={{width:" 13%"}}>T??N</th>
                            <th scope="col" className="table-title-pro pro-des">M?? T???</th>
                            <th scope="col" className="table-title-pro" style={{width:" 5%"}}>???NH</th>
                            <th scope="col" className="table-title-pro" style={{width:" 5%"}}>GI??</th>
                            <th scope="col" className="table-title-pro" style={{width:" 10%"}}>M?? S???N PH???M</th>
                            <th scope="col" className="table-title-pro" style={{width:" 1%"}}> Size_M</th>
                            <th scope="col" className="table-title-pro" style={{width:" 1%"}}>Size_S</th>
                            <th scope="col" className="table-title-pro" style={{width:" 1%"}}>Size_L</th>
                            <th scope="col" className="table-title-pro" style={{width:" 1%"}}>Size_XL</th>
                            <th scope="col" className="table-title-pro" style={{width:" 7%"}}>CH???T LI???U</th>
                            <th scope="col" className="table-title-pro" style={{width:" 6%"}}>M??U</th>
                            <th scope="col" className="table-title-pro" style={{width:" 7%"}}>THAO T??C</th>
                        </tr>
                    </thead>
                    { showResult ? 
                    
                        resultArray.length !== 0 ?
                        <tbody className="table-body">
                             {resultArray.map((item,index) => {
                            var createdAt = new Date(parseFloat(item.createdAt));
                            var updatedAt = new Date(parseFloat(item.updatedAt));
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td className='content'>{item.id}</td>
                                    <td className='content'>{createdAt.toLocaleString()}</td>
                                    <td className='content'>{updatedAt.toLocaleString()}</td>
                                    <td className='content'>{item.name}</td>
                                    <td className='content '>
                                        <p className='content-img'>
                                            {item.description}
                                        </p>
                                    </td>
                                    <td className='content img-pro'><img src={item.img_1} alt=""/></td>
                                    <td className='content'>{format_curency(item.price)}??</td>
                                    <td className='content'>{item.codePro}</td>
                                    <td className='content'>{item.size_M}</td>
                                    <td className='content'>{item.size_S}</td>
                                    <td className='content'>{item.size_L}</td>
                                    <td className='content'>{item.size_XL}</td>
                                    <td className='content'>{item.material}</td>
                                    <td className='content'>{item.color}</td>
                                    <td className='content 'style={{paddingLeft: '20px',paddingRight: '20px'}}>
                                        <div>
                                            <button 
                                                onClick={()=>setShowModalRemove(item.id)}
                                                className='btn-remove btn btn-danger btn-sm px-3'
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                            <button 
                                                className='btn-update btn btn-warning'
                                                onClick={()=>handleUpdateShirt(item.id)}
                                            >
                                            <i className="fas fa-edit"></i>
                                            </button>
                                        </div>
                                        {showModalUpdate&&(flag===item.id)&&<Update isDisplay={showModalUpdate} update={update} status={statusUpdate}  setShowModalUpdate={setShowModalUpdate} product={item}/>}
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
                                                        <button type="button" className="btn btn-danger btn-modal-remove" onClick={() => handleRemoveShirt(item)}>Ch???c ch???n</button>
                                                        <button type="button" className="btn btn-primary btn-modal-cancel" onClick={() => setShowModalRemove(false)} >H???y</button>
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
                            
                            {shirt.map((item,index) => {
                                var createdAt = new Date(parseFloat(item.createdAt));
                                var updatedAt = new Date(parseFloat(item.updatedAt));
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td className='content'>{item.id}</td>
                                        <td className='content'>{createdAt.toLocaleString()}</td>
                                        <td className='content'>{updatedAt.toLocaleString()}</td>
                                        <td className='content'>{item.name}</td>
                                        <td className='content '>
                                            <p className='content-img'>
                                                {item.description}
                                            </p>
                                        </td>
                                        <td className='content img-pro'><img src={item.img_1} alt=""/></td>
                                        <td className='content'>{format_curency(item.price)}??</td>
                                        <td className='content'>{item.codePro}</td>
                                        <td className='content'>{item.size_M}</td>
                                        <td className='content'>{item.size_S}</td>
                                        <td className='content'>{item.size_L}</td>
                                        <td className='content'>{item.size_XL}</td>
                                        <td className='content'>{item.material}</td>
                                        <td className='content'>{item.color}</td>
                                        <td className='content 'style={{paddingLeft: '20px',paddingRight: '20px'}}>
                                        <div>
                                            <button 
                                                onClick={()=>setShowModalRemove(item.id)}
                                                className='btn-remove btn btn-danger btn-sm px-3'
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                            <button 
                                                className='btn-update btn btn-warning'
                                                onClick={()=>handleUpdateShirt(item.id)}
                                            >
                                            <i className="fas fa-edit"></i>
                                            </button>
                                        </div>
                                        {showModalUpdate&&(flag===item.id)&&<Update isDisplay={showModalUpdate} update={update} status={statusUpdate}  setShowModalUpdate={setShowModalUpdate} product={item}/>}
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
                                                        <button type="button" className="btn btn-danger btn-modal-remove" onClick={() => handleRemoveShirt(item)}>Ch???c ch???n</button>
                                                        <button type="button" className="btn btn-primary btn-modal-cancel" onClick={() => setShowModalRemove(false)} >H???y</button>
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

            
            <Add isDisplay={showModalAdd} add={add} status={statusAdd} setShowModalAdd={setShowModalAdd} />
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shirt: state.Shirt,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addShirt:(shirt)=>dispatch(addShirt(shirt)),
        updateShirt:(id,data) => dispatch(updateShirt(id,data)),
        removeShirt:(id) => dispatch(removeShirt(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shirt)