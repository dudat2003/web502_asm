import React from "react";
import { useParams } from "react-router-dom";


const Detail = ({ products }) => {
    const { id } = useParams()
    const currentProduct = products.find(p => p.id === Number(id))

    return (
        <>
            Detail Page
            <h3>{currentProduct?.name}</h3>
            <p>{currentProduct?.price}</p>

        </>)
}

export default Detail;