

import styles from './Product.module.css'
import useStore from '../../store/store';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/CartStore';
import { AddShoppingCart } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';


const Product = () => {
    const { currentProduct } = useStore();
    const { cart, addProduct } = useCartStore();
    console.log(currentProduct)
    const handleAddToCart = () => {
        addProduct(currentProduct);
        console.log(cart);
    };
    return (
        <>
            {currentProduct && <div className={styles.productContainer}>
                <h2>{currentProduct.title}</h2>
                <div className={styles.row}>
                    <div><img className={styles.productImg} src={currentProduct.image} alt="productFoto" /></div>
                    <div>
                        <p><span>Price:</span> {currentProduct.price} € </p>
                        <p><span>Quantity:</span> {currentProduct.rating.count}</p>
                    </div>
                </div>
                <p><span>Description:</span> {currentProduct.description}</p>
                {/* <button onClick={handleAddToCart}> <Link className={styles.Link} to={`/cart`}>In Basket</Link></button> */}
                <Link className={styles.Link} to={`/cart`}><IconButton onClick={handleAddToCart} variant="outlined" color='primary' >
                    <AddShoppingCart fontSize='large' />
                </IconButton></Link>
            </div>}
        </>
    )
}
export default Product;