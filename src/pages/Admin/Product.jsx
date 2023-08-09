import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    const deleteProduct = (id) => {
        props.delete(id);
    };

    return (
        <div>

            <h1>ListProduct</h1>
            <Link to={"/admin/product/add"}>
                {" "}
                <button>Add</button>
            </Link>
            <table cellPadding={10} border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((p, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{p.id}</td>

                                <td>{p.name}</td>
                                <td>{p.description}</td>
                                <td><img src={p.image} alt="" /></td>
                                <td>{p.price}</td>
                                <td>
                                    <Link to={"/admin/product/update/" + p.id}>
                                        {" "}
                                        <button>Update</button>
                                    </Link>
                                    <Link to={`/detail/${p.id}`}><button>Detail</button></Link>
                                    <button onClick={() => deleteProduct(p.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default Product;