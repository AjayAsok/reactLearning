import React from "react"

function Product(params) {
    return (
        <div className="product-item">
            <img src="" />
            <h2>Product Name: {params.name}</h2>
            <h3>Price: {params.price.toLocaleString("en-US", {style: "currency", currency: "GBP"})}</h3>
            <h4>Description: {params.description}</h4>
        </div>
    )
}

export default Product