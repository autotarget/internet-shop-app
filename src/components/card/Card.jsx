

import useCartStore from '../../store/CartStore';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import Product from '../../pages/product/Product';
import useStore from '../../store/store';

const Card = ({ product }) => {
   const { cart, addProduct } = useCartStore();
   const { currentProduct, filteredProducts, getProductById } = useStore();

   const handleAddToCart = () => {
      addProduct(product);
      console.log(cart);
   };

   const handleShowProductInfo = () => {
      getProductById(product.id);
      console.log(product.id)
      console.log(product)
   };

   return (
      <div className={styles.productCard}>
         <h3 className={styles.productTitle}>{product.title}</h3>
         <img className={styles.cardImg} src={product.image} alt="productFoto" />
         <p>Price: {product.price} € </p>
         <p>Quantity: {product.rating.count}</p>
         <div className={styles.btnBar}>
            <button onClick={handleAddToCart}> <Link className={styles.Link} to={`/cart`}>In Basket</Link></button>
            <button onClick={handleShowProductInfo}> <Link className={styles.Link} to={`/product/${product.id}`}>More...</Link></button>
         </div>
      </div>
   )
}
export default Card;

