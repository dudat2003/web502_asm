import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";


const Home = ({ products }) => {

    return (
        <>
            <Header />
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <Link to={`/detail/${item.id}`}><button>Detail</button></Link>
                    </div>
                )
            })}

        </>
    )
}

export default Home;