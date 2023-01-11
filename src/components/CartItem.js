import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            title: 'Mobile Phone',
            qty: 2,
            price: 100,
            img: ''
        }

    }

    // for increasing qty of cartItem
    increaseQuantity = () => {
        // setState first form when previous state is not required
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState second form when previous state is required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    // for decreasing qty of cartItem
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if(prevState.qty > 0) {
                return {
                    qty: prevState.qty - 1
                }
            }
        })
    }


    render () {
        const {title, qty, price, img} = this.state;
        return (
            <div className="cart-item">
                <div className="cart-item-left">
                    <img src="" alt="" />
                </div>
                <div className="cart-item-right">
                    <div style={ { fontSize: 25 } } className="title">{title}</div>
                    <div style={ { color: '#777' } } className="qty">{qty}</div>
                    <div style={ { color: '#777' } } className="price">Rs {price}</div>
                    <div className="cart-item-actions">
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQuantity} alt="increase" style={styles.icon} /> 
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={ this.decreaseQuantity } alt="decrease" style={styles.icon} />
                        <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete" style={styles.icon} />
                    </div>
                </div>
            </div>
        )
    }

}
let styles = {
    icon: {
        width: '25px',
        height: '25px',
        marginRight: '10px'
    }
}


export default CartItem;