import CartProducts from '../../ui/cartProducts/CartProducts';
import './cart.scss'
const Cart = () => {
    return (
        <section id="cart">
            <div className="container">
                <h2>Shopping Cart</h2>
                    <div className="form">
                        <CartProducts/>
                        <CartProducts/>
                        <CartProducts/>
                        <CartProducts/>

                    </div>
                    <div className="totals">
                    <button className='last'>Clean Cart</button>
                    <h3>TOTAL PRICE: $2677.00</h3>
                    </div>
                    
            </div>
        </section>
    );
};

export default Cart;