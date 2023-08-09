import React from "react";
import { useParams } from "react-router-dom";


const Detail = ({ products }) => {
    const { id } = useParams()
    const currentProduct = products.find(p => p.id === Number(id))

    return (
        <>
            <h1> Detail Product</h1>
            <h3>{currentProduct?.name}</h3>
            <p>{currentProduct?.description}</p>
            <p><img src={currentProduct?.image} alt="" /></p>
            <p>{currentProduct?.price}</p>

        </>)
}

export default Detail;