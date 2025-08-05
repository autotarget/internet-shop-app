import useCartStore from "../../store/CartStore";
import styles from './Cart.module.css'
import { DeleteOutline } from "@mui/icons-material";
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';

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
                                        <td>
                                            <IconButton onClick={() => { removeProduct(item.id) }} variant="outlined" color='primary' >
                                                <DeleteOutline fontSize='large' />
                                            </IconButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p>Total Price: {totalPrice.toFixed(2)}€</p>
                        <Button onClick={clearCart} variant="contained" color='primary' >
                            Clear Basket
                        </Button>
                        {/* <button onClick={clearCart}>Clear Basket</button> */}
                    </div>
                )

            }
        </div>
    )
}
export default Cart;