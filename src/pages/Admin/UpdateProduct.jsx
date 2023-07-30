import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then(({ data }) => {
            setProduct(data);
        });
    }, []);

    const [inputValue, setInputValue] = useState({
        name: product.name,
        price: product.price,
    });



    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault();

        if (inputValue.name == "") {
            alert("Name cannot be empty ")
        }
        else if (inputValue.price == "") {
            alert("Price cannot be empty")
        }
        else if (inputValue.price <= 0) {
            alert("Price must be greater than 0")
        }
        else {
            props.update(id, inputValue)
        }
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={submit}>
                <label htmlFor="">
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" onChange={onChangeInput} />
                </label>

                <label htmlFor="">
                    <p>Price</p>
                    <input type="number" name="price" placeholder="Price" onChange={onChangeInput} />
                </label>
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct