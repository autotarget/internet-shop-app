import useCartStore from "../../store/CartStore";
import styles from './Cart.module.css'
import Card from "../../components/card/Card";

const Cart = () => {
    const { cart, removeProduct, clearCart } = useCartStore();
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className={styles.cart}>
            {/* <h1>Basket</h1> */}
            {console.log(cart)}
            {console.log(cart.length)}

            {
                cart.length === 0 ? (<h2>Basket is empty</h2>) : (
                    <div className={styles.tableContainer}>
                        <table className={styles.cartTable}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td><img className={styles.cartImg} src={item.image} alt="productFoto" /></td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td><button onClick={() => { removeProduct(item.id) }}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
           
                        <p>Total Price: {totalPrice.toFixed(2)}€</p>
                        <button onClick={clearCart}>Clear Basket</button>
                    </div>
                )

            }
        </div>
    )
}
export default Cart;