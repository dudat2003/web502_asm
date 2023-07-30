import React, { useState } from 'react'

const AddProduct = (props) => {
    const [inputValue, setInputValue] = useState({ name: "", price: 0 })

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
            props.add(inputValue)
        }
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={submit}>
                <label htmlFor="">
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" onChange={onChangeInput} />
                </label>

                <label htmlFor="">
                    <p>Price</p>
                    <input type="number" name="price" placeholder="Price" onChange={onChangeInput} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProduct