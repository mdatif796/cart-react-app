import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    title: 'Watch',
                    price: 99,
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    title: 'Mobile Phone',
                    price: 999,
                    qty: 4,
                    img: '',
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: 9999,
                    qty: 3,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const indexOfProduct = products.indexOf(product);
        products[indexOfProduct].qty += 1;
        this.setState({
            products
        });
    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const indexOfProduct = products.indexOf(product);
        if(products[indexOfProduct].qty > 0) {
            products[indexOfProduct].qty -= 1;
            this.setState({
                products
            });
        }
    }

    handleDeleteCartItem = (product) => {
        let { products } = this.state;
        products = products.filter((prod) => {
            return prod.id !== product.id;
        });
        this.setState({
            products
        });
    }

    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem product={product} key={product.id} handleIncreaseQuantity={this.handleIncreaseQuantity} handleDecreaseQuantity={this.handleDecreaseQuantity} handleDeleteCartItem={this.handleDeleteCartItem} />
                    )
                })}
            </div>
        );
    }
}


export default Cart;