import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { connect } from 'react-redux'

import curencyFormat from '../../utils/displayPrice'

import "../../assets/style/style.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Products = ({product, sale}) => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 3,
    };

    return (
        <div>
            <section className="ftco-section ftco-product">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section head-link text-center ftco-animate">
                            <h1 className="big">Products</h1>
                            <Link to="/products" title="Products">
                                <h2 className="mb-4">Products</h2>
                            </Link>
                        </div>
                    </div>
                    <Slider className="ftco-section ftco-product" {...settings}>
                    {product.map((item, index) => {
                        return (index < 15) && (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-slider owl-carousel ftco-animate">
                                        <div className="item" data-index={index} key={index}>
                                            <Link to={`/detail/${item.codePro}`}>
                                                <div className="product">
                                                    <div className="img-prod">
                                                        <img className="img-fluid" src={item.img_1} alt="Product Image"/>
                                                        <span className="status">HOT</span>
                                                    </div>
                                                    <div className="text pt-3 px-3">
                                                        <h3><Link to={`/detail/${item.codePro}`}>{`${item.name} ${item.codePro}`}</Link></h3>
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
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
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

export default connect(mapStateToProps)(Products)
