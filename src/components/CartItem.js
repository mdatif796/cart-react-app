import React from "react";

class CartItem extends React.Component {

    render () {
        const {title, qty, price} = this.props.product;
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
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={() => {this.props.handleIncreaseQuantity(this.props.product)}} alt="increase" style={styles.icon} /> 
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={ () => {this.props.handleDecreaseQuantity(this.props.product)} } alt="decrease" style={styles.icon} />
                        <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={() => {this.props.handleDeleteCartItem(this.props.product)}} alt="delete" style={styles.icon} />
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