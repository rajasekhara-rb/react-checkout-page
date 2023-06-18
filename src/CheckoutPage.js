import React, { useEffect, useState } from "react";
import data from "./ProductsData.json";
// import { ReactDOM } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

function CheckoutPage() {
    const [shirtQuantity, setShirtQuantity] = useState(0);
    const [skirtQuantity, setSkirtQuantity] = useState(0);
    const [capQuantity, setCapQuantity] = useState(0);

    const [shirtPrice, setShirtPrice] = useState(0);
    const [skirtPrice, setSkirtPrice] = useState(0);
    const [capPrice, setCapPrice] = useState(0);

    const [shirtDiscount, setShirtDiscount] = useState(0);
    const [skirtDiscount, setskirtDiscount] = useState(0);
    const [capDiscount, setCapDiscount] = useState(0);

    // const [total, setTotal] = useState(0);

    const handlePrice = (name, cost) => {
        if (name !== "") {
            if (name === "Shirt") {
                setShirtPrice(cost);
            } else if (name === "Skirt") {
                setSkirtPrice(cost);
            } else if (name === "Cap") {
                setCapPrice(cost);
            }
        }
    }

    const setPrice = (id) => {
        if (id === "Shirt") {
            return shirtPrice
        } else if (id === "Skirt") {
            return skirtPrice
        } else if (id === "Cap") {
            return capPrice
        }
    }

    const setQty = (id) => {
        if (id === "Shirt") {
            return shirtQuantity
        } else if (id === "Skirt") {
            return skirtQuantity
        } else if (id === "Cap") {
            return capQuantity
        }
    }

    const handleIncriment = (id) => {
        if (id !== "") {
            if (id === "Shirt") {
                setShirtQuantity(shirtQuantity + 1)
            } else if (id === "Skirt") {
                setSkirtQuantity(skirtQuantity + 1)
            } else if (id === "Cap") {
                setCapQuantity(capQuantity + 1)
            }
        }
    }

    const handleDecrement = (id) => {
        if (id !== "") {
            if (id === "Shirt" && shirtQuantity !== 0) {
                setShirtQuantity(shirtQuantity - 1)
            } else if (id === "Skirt" && skirtQuantity !== 0) {
                setSkirtQuantity(skirtQuantity - 1)
            } else if (id === "Cap" && capQuantity !== 0) {
                setCapQuantity(capQuantity - 1)
            }
        }
    }

    const handleDiscountAmount = () => {

        if (shirtQuantity !== 0) {
            if (shirtQuantity >= 3) {

                setShirtDiscount((shirtPrice * shirtQuantity * 0.05))
            }else{
                setShirtDiscount(0)
            }
        }
        if (skirtQuantity !== 0) {
            setskirtDiscount(Math.floor(skirtQuantity / 2) * skirtPrice)
        }
        if (capQuantity !== 0) {
            setCapDiscount(0)
        }

    }
    useEffect(() => {
        handleDiscountAmount()
    })

    // const totalPrice = () => {
    //     setTotal(shirtPrice * shirtQuantity + skirtPrice * skirtQuantity + capPrice * capQuantity)

    // }
    return (
        <>
            <div className="container-fluid p-5" style={
                {
                    backgroundImage: `url("https://cart-challenge.vercel.app/assets/background.1525cfc4.jpg")`,
                    height: "100vh"
                }}>
                <div className="p-2 m-0 d-flex row h-100">
                    <div className="bg-light col col-md-8 p-2">
                        <h4 className="text-start p-2">Shopping cart</h4>
                        <hr></hr>
                        <ul class="list-group list-group-flush d-flex flex-row justify-content-around row text-center w-100 m-0">
                            <li class="list-group-item col-6">PRODUCT DETAILS</li>
                            <li class="list-group-item col-2">QUANTITY</li>
                            <li class="list-group-item col-2">PRICE</li>
                            <li class="list-group-item col-2">TOTAL</li>
                        </ul>
                        <ul class="list-group list-group-flush m-0">
                            {data.products.map((product, i) => (
                                <li class="list-group-item d-flex flex-row justify-content-around row text-center w-100 m-0 align-items-center" key={i} onLoad={() => {
                                    handlePrice(product.name, product.cost);

                                }}>
                                    <div className="d-flex flex-row col-6 align-items-center">
                                        <img className="card-img-top w-25 h-25 m-2" src={product.image} alt="product">
                                        </img>
                                        <div className="m-2">
                                            <h6 className="text-warning">{product.name}</h6>
                                            <p style={{ fontSize: "12px" }}>Product Code: {product.id}</p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <span className="btn m-1 p-2 text-warning" onClick={() => {
                                            handleDecrement(product.name)
                                        }} style={{ fontSize: "25px", fontWeight: "bolder" }}>-</span>
                                        <button className="btn m-1 p-2" style={{ width: "5px" }}>
                                            {product.name !== "" ? (
                                                setQty(product.name)
                                            ) : (0)}
                                        </button>
                                        <span className="btn m-1 p-2 text-warning" onClick={() => {
                                            handleIncriment(product.name)
                                        }} style={{ fontSize: "25px", fontWeight: "bolder" }}>+</span>
                                    </div>
                                    <div className="col-2"  >
                                        {/* {(product.cost)}$ */}
                                        {product.name !== "" ? (
                                            setPrice(product.name) + "$"
                                        ) : (0)}

                                    </div>
                                    <div className="col-2">
                                        {(product.cost) * (setQty(product.name))}$
                                    </div>
                                </li>

                            ))}
                        </ul>

                    </div>
                    <div className="bg-warning col col-md-4 p-2 d-flex flex-column text-dark">
                        <div>
                            <h4 className="text-start p-2">Order Summary</h4>
                            <hr></hr>
                            {/* <ul className="list-group list-group-flush d-flex flex-row justify-content-around row text-center w-100 m-0"> */}
                            <li className="list-group-item col-12">
                                <div className="d-flex justify-content-between p-2">
                                    <div>
                                        <span >{shirtQuantity + skirtQuantity + capQuantity}</span>
                                        <span className="p-2">Items</span>
                                    </div>
                                    <span className=""><b>{shirtQuantity * shirtPrice + skirtQuantity * skirtPrice + capQuantity * capPrice}</b></span>
                                </div>
                            </li>
                            {/* </ul> */}
                        </div>

                        <div>
                            <hr></hr>
                            <h6 className="text-start p-2">DISCOUNTS</h6>
                            <ul className="list-group list-group-flush d-flex flex-row justify-content-around row text-center w-100 m-0">
                                {skirtDiscount > 0 ? (<li className="list-group-item col-12 m-2 bg-warning">
                                    <div className="d-flex justify-content-between">
                                        <span>2x1 Skirt offer</span>
                                        <span style={{ fontSize: "16px", fontWeight: "bolder" }}>-{skirtDiscount}</span>
                                    </div>
                                </li>) : ("")}
                                {shirtDiscount > 0 ? (<li className="list-group-item col-12 m-2 bg-warning">
                                    <div className="d-flex justify-content-between">
                                        <span> x3 Shirt offer</span>
                                        <span style={{ fontSize: "16px", fontWeight: "bolder" }}>-{shirtDiscount}</span>
                                    </div>
                                </li>) : ("")}


                                <hr></hr>
                            </ul>
                        </div>
                        <div className="">
                            <hr></hr>
                            <div className="m-4 d-flex justify-content-between">
                                <span style={{ fontSize: "20px" }}>
                                    TOTAL COST
                                </span>
                                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                                    {(shirtQuantity * shirtPrice + skirtQuantity * skirtPrice + capQuantity * capPrice) - (skirtDiscount + shirtDiscount + capDiscount)}
                                </span>
                            </div>
                            <button className="btn btn-light col-12">Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default CheckoutPage;