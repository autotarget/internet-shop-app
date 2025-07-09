
// import styles from './ProductsContainer.module.css'
import styles from './ProductsContainer.module.css'
import ProductsList from '../productsList/ProductsList';

const ProductsContainer = () => {

    return (
        <div className={styles.productsContainer}>
            <ProductsList/>
                   </div>
    )
}
export default ProductsContainer;