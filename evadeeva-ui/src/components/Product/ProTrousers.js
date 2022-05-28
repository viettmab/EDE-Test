import '../../style/Product/Product.css'
import format_curency from '../../utils/displayPrice'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NavHeader from '../HomeComponents/Header'
import NavProduct from './NavProduct'
import FindShop from '../HomeComponents/Subscribe'
import Footer from '../HomeComponents/Footer'
const ProTrousers = ({trousers, sale} ) => {
    return (
            <div>
                <NavHeader showPro={true} />
                <div className="main-body">
                    <NavProduct />  
                    <div className="collection-body container"> 
                        <div className="product-list row">
                                {trousers.map((item,index) => {
                                    return  (
                                        <div className="product col-3" key={index}> 
                                            <Link to={`/detail/${item.codePro}`}>
                                                <div className="product-img">
                                                    <img className="img-change" src={item.img_1} alt=""/>
                                                    <img className="img-after-change" src={item.img_2} alt=""/>       
                                                    <img className="new-arrivals" src="https://file.hstatic.net/200000000133/file/1_113da73eef75425786591a547aeda483.png" alt=""/>
                                                    <img className="best-seller" src="https://file.hstatic.net/200000000133/file/labels-final_b1d9901b63944df28810efb035e03fcb.png" alt=""/>
                                                </div>
                                            </Link>
                                            <div className="product-detail">
                                                <Link to={`/detail/${item.codePro}`}>{item.name}</Link>
                                                {
                                                    sale?
                                                    <div>
                                                        <span style={{
                                                        fontSize: "13px",
                                                        textDecoration: 'line-through',
                                                        marginRight: '10px',
                                                        opacity: '0.6'}}>
                                                            {format_curency(item.price)}đ
                                                        </span>
                                                        <span>{format_curency(parseInt(item.price-item.price*sale/100, 10))}đ</span>
                                                    </div>
                                                    :<div>
                                                        <span style={{fontSize: "13px"}}>{format_curency(item.price)}đ</span>
                                                    </div>
                                                    
                                                }
                                            </div>      
                                        </div>
                                    )
                                })}
                                
                        </div>
                    </div>
                </div>
                <FindShop />
                <Footer />
            </div>
        )
    }
 
const mapStateToProps = (state)  => {
    return {
        trousers: state.Trousers,
    }
}

export default connect(mapStateToProps)(ProTrousers)