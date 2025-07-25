import { useEffect } from "react";
import useStore from "../../store/store";
import Card from "../card/Card";

const ProductsList = () => {
    const { loading, error, filteredProducts, filterProducts } = useStore();

    useEffect(() => {
        setTimeout(() => { filterProducts() }, 1000);
        return clearTimeout();
    }, []);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
    return (
        <>
            {filteredProducts.map((product) => (<Card key={product.id} product={product} />))}
        </>
    )
}
export default ProductsList;