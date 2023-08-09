import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";


const Home = ({ products }) => {

    return (
        <>
            <Header />
            {products.map((p, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{p.name}</h3>
                        <p>{p.price}</p>

                    </div>
                )
            })}

        </>
    )
}

export default Home;