import { useEffect } from "react";
import useStore from "../../store/store";
// import styles from './Logo.module.css'
import Card from "../card/Card";

const ProductsList = () => {
    const {loading, error, filteredProducts, filterProducts } = useStore();

    useEffect(() => {
        setTimeout(() => { filterProducts() }, 500);
        return clearTimeout();
    }, []);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
    return (
        <>
            {/* {filteredProducts.map((product) => (<Card key={product.id} title={product.title} imgUrl={product.image} price={product.price} count={product.rating.count} />))} */}

            {filteredProducts.map((product) => (<Card key={product.id}  product ={product}/>))}
        </>
    )
}
export default ProductsList;