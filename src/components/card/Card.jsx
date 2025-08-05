import useCartStore from '../../store/CartStore';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import useStore from '../../store/store';
import IconButton from '@mui/material/IconButton';
import { AddShoppingCart } from '@mui/icons-material';
import { ReadMore } from '@mui/icons-material';

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
            <Link className={styles.Link} to={`/cart`}><IconButton onClick={handleAddToCart} variant="outlined" color='primary' >
               <AddShoppingCart fontSize='large' />
            </IconButton></Link>
            <Link className={styles.Link} to={`/product/${product.id}`}><IconButton onClick={handleShowProductInfo} variant="outlined" color='primary'>
               <ReadMore fontSize='large' variant='outlined' />
            </IconButton></Link>
         </div>
      </div>
   )
}
export default Card;

