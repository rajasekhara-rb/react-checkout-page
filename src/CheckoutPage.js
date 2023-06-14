import React, { useState } from "react";
import data from "./ProductsData.json";
// import { ReactDOM } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

function CheckoutPage() {
    const [shirtQuantity, setShirtQuantity] = useState(0);
    const [skirtQuantity, setSkirtQuantity] = useState(0);
    const [capQuantity, setCapQuantity] = useState(0);

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
                            {/* <li class="list-group-item d-flex flex-row justify-content-around row text-center w-100 m-2 align-items-center">
                                <div className="d-flex flex-row col-6 align-items-center">
                                    <img className="card-img-top w-25 m-2" src="https://cart-challenge.vercel.app/assets/tshirt.0523f35c.jpg" alt="product">
                                    </img>
                                    <div className="m-2">
                                        <h6>Product Name</h6>
                                        <p>Porduct code</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <span className="btn m-1 p-2">-</span>
                                    <button className="btn m-1 p-2">0</button>
                                    <span className="btn m-1 p-2">+</span>
                                </div>
                                <div className="col-2">
                                    20$
                                </div>
                                <div className="col-2">
                                    20$
                                </div>
                            </li> */}
                            {data.products.map((product, i) => (
                                <li class="list-group-item d-flex flex-row justify-content-around row text-center w-100 m-0 align-items-center" key={i}>
                                    <div className="d-flex flex-row col-6 align-items-center">
                                        <img className="card-img-top w-25 h-25 m-2" src={product.image} alt="product">
                                        </img>
                                        <div className="m-2">
                                            <h6>{product.name}</h6>
                                            <p>{product.id}</p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <span className="btn m-1 p-2" onClick={() => {
                                            handleDecrement(product.name)
                                        }}>-</span>
                                        <button className="btn m-1 p-2" style={{ width: "5px" }}>
                                            {product.name !== "" ? (
                                                setQty(product.name)
                                            ) : (0)}
                                        </button>
                                        <span className="btn m-1 p-2" onClick={() => {
                                            handleIncriment(product.name)
                                        }}>+</span>
                                    </div>
                                    <div className="col-2">
                                    {(product.cost)}$
                                    </div>
                                    <div className="col-2">
                                    {(product.cost)*(setQty(product.name))}$
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="bg-secondary col col-md-4 p-2">
                        <h4>Order Summary</h4>
                        <hr></hr>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CheckoutPage;