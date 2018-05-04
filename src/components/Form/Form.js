import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            img_url: 0,
            price: ''
        }

        this.handleCancel = this.handleCancel.bind(this);
    }

    handleImageUrlChange(value) {
        this.setState({ imageURL: value });
    }
    handleProductNameChange(value) {
        this.setState({ productName: value });
    }
    handlePriceChange(value) {
        this.setState({ price: value });
    }

    handleCancel() {
        this.setState({imageURL:'', productName:'', price:'' });
    }
    handleAdd() {
     axios.post('/api/product').then(res=>{
        this.setState({})
     });
    }

    render() {
        return (
            <div>
                Form
                <p>Image URL </p>
                <input value={this.state.imageURL}
                    onChange={(e) => this.handleImageUrlChange(e.target.value)} />
                <p>Product Name</p>
                <input value={this.state.productName}
                    onChange={(e) => this.handleProductNameChange(e.target.value)} />
                <p>Price</p>
                <input value={this.state.price}
                    onChange={(e) => this.handlePriceChange(e.target.value)} />
                <div>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.handleAdd}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;