import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "../../assets/style/style.css"

const CartMain = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="hero-wrap hero-bread" style={{backgroundColor: '#f1b8c4'}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <h1 className="mb-0 bread">My Cart</h1>
                            <p className="breadcrumbs">
                                <span className="mr-2"><Link to="/">Home</Link></span>
                                <span>Cart</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-center">
                                        <td className="product-remove">
                                            <Link to="#">
                                                <span className="fas fa-close" onClick={() => setCount(0)}></span>
                                            </Link>
                                        </td>
                                        <td className="image-prod">
                                            <div className="img" style={{backgroundImage: 'url("https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/267138209_107351718468091_7903980479427849546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=b9115d&_nc_ohc=jWwg-zfzHqUAX8ApOJy&_nc_ht=scontent.fhan4-2.fna&oh=00_AT9ajAaxjALnMLJoXu97kExMsUAb7nji3vu9AlFn-KKhHA&oe=62942FF8")'}}>
                                            </div>
                                        </td>
                                        <td className="product-name">
                                            <h3>Young Woman Wearing Dress</h3>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                        </td>
                                        <td className="price">$4.90</td>
                                        <td className="quantity">
                                            <div className="input-group" style={{justifyContent: 'center'}}>
                                                <td className="product-remove">
                                                    <Link to="#">
                                                        <span className="fas fa-minus" onClick={() => setCount(count-1)}></span>
                                                    </Link>
                                                </td>
                                                <td className="product-remove">
                                                    <span>{count}</span>
                                                </td>
                                                <td className="product-remove">
                                                    <Link to="#">
                                                        <span className="fas fa-plus" onClick={() => setCount(count+1)}></span>
                                                    </Link>
                                                </td>
                                            </div>
                                        </td>
                                        <td className="total">$4.90</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="product-remove">
                                            <Link to="#">
                                                <span className="fas fa-close" onClick={() => setCount(0)}></span>
                                            </Link>
                                        </td>
                                        <td className="image-prod">
                                            <div className="img" style={{backgroundImage: 'url("https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/267138209_107351718468091_7903980479427849546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=b9115d&_nc_ohc=jWwg-zfzHqUAX8ApOJy&_nc_ht=scontent.fhan4-2.fna&oh=00_AT9ajAaxjALnMLJoXu97kExMsUAb7nji3vu9AlFn-KKhHA&oe=62942FF8")'}}>
                                            </div>
                                        </td>
                                        <td className="product-name">
                                            <h3>Young Woman Wearing Dress</h3>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                        </td>
                                        <td className="price">$4.90</td>
                                        <td className="quantity">
                                            <div className="input-group" style={{justifyContent: 'center'}}>
                                                <td className="product-remove">
                                                    <Link to="#">
                                                        <span className="fas fa-minus" onClick={() => setCount(count-1)}></span>
                                                    </Link>
                                                </td>
                                                <td className="product-remove">
                                                    <span>{count}</span>
                                                </td>
                                                <td className="product-remove">
                                                    <Link to="#">
                                                        <span className="fas fa-plus" onClick={() => setCount(count+1)}></span>
                                                    </Link>
                                                </td>
                                            </div>
                                        </td>
                                        <td className="total">$4.90</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="product-remove">
                                            <Link to="#">
                                                <span className="fas fa-close" onClick={() => setCount(0)}></span>
                                            </Link>
                                        </td>
                                        <td className="image-prod">
                                            <div className="img" style={{backgroundImage: 'url("https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/267138209_107351718468091_7903980479427849546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=b9115d&_nc_ohc=jWwg-zfzHqUAX8ApOJy&_nc_ht=scontent.fhan4-2.fna&oh=00_AT9ajAaxjALnMLJoXu97kExMsUAb7nji3vu9AlFn-KKhHA&oe=62942FF8")'}}>
                                            </div>
                                        </td>
                                        <td className="product-name">
                                            <h3>Young Woman Wearing Dress</h3>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                        </td>
                                        <td className="price">$4.90</td>
                                        <td className="quantity">
                                            <div className="input-group" style={{justifyContent: 'center'}}>
                                                <td className="product-remove">
                                                    <Link to="#">
                                                        <span className="fas fa-minus" onClick={() => setCount(count-1)}></span>
                                                    </Link>
                                                </td>
                                                <td className="product-remove">
                                                    <span>{count}</span>
                                                </td>
                                                <td className="product-remove">
                                                    <Link to="#">
                                                        <span className="fas fa-plus" onClick={() => setCount(count+1)}></span>
                                                    </Link>
                                                </td>
                                            </div>
                                        </td>
                                        <td className="total">$4.90</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p className="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr/>
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span>$17.60</span>
                                </p>
                            </div>
                            <p className="text-center">
                                <Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CartMain