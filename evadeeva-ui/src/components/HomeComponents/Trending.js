import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import curencyFormat from '../../utils/displayPrice'

import "../../assets/style/style.css"

const Trending = ({product, sale}) => {
  return (
    <div>
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section head-link text-center ftco-animate">
                        <h1 className="big">Trending</h1>
                        <Link to="/products" title="Trending">
                            <h2 className="mb-4">Trending</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {product.map((item, index) => {
                        return (index < 4) && (
                            <div className="col-sm col-md-6 col-lg ftco-animate" key={index}>
                                <div className="product">
                                    <Link to={`/detail/${item.codePro}`} className="img-prod">
                                        <img className="img-fluid" src={item.img_1} alt="Product Image"/>
                                    </Link>
                                    <div className="text py-3 px-3">
                                        <h3><Link to={`/detail/${item.codePro}`}>{`${item.name} ${item.codePro}`}</Link></h3>
                                        <div className="d-flex">
                                            {
                                                sale?
                                                <div className="d-flex">
                                                    <div className="pricing">
                                                        <p className="price">
                                                            <span className="mr-2 price-dc">${curencyFormat(item.price)}</span>
                                                            <span className="price-sale">${curencyFormat(parseInt(item.price-item.price*sale/100, 10))}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                :<div className="d-flex">
                                                    <div className="pricing">
                                                        <p className="price">
                                                            <span className="price">${curencyFormat(item.price)}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                            <div className="rating">
                                                <p className="text-right">
                                                    <span className="fa-solid fa-star" style={{color: '#d26e4b'}}></span>
                                                    <span className="fa-solid fa-star" style={{color: '#d26e4b'}}></span>
                                                    <span className="fa-solid fa-star" style={{color: '#d26e4b'}}></span>
                                                    <span className="fa-solid fa-star" style={{color: '#d26e4b'}}></span>
                                                    <span className="fa-solid fa-star" style={{color: '#d26e4b'}}></span>
                                                </p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <Link to={`/detail/${item.codePro}`} className="add-to-cart">
                                            <p className="bottom-area d-flex">
                                                    <span>Add to cart <i className="fas fa-cart-plus" style={{marginLeft: '10px', fontSize: '15px'}}></i></span>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        product:[
            ...state.Shirt,
            ...state.Skirt,
            ...state.Trousers,
            ...state.Dress,
        ],
        sale: state.Event
    }
}

export default connect(mapStateToProps)(Trending)
