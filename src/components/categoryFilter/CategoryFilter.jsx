
import styles from './CategoryFilter.module.css'
import useStore from '../../store/store';
import { useEffect } from 'react';


const CategoryFilter = () => {
    const {categories, setCategory, filterProducts, fetchProducts, fetchCategories} = useStore();
 
    useEffect(() => { fetchProducts(), fetchCategories()}, [])

    return (
        <>
            <li className={styles.listItem} onClick={() => {setCategory('All'); filterProducts(); }}>All</li>
            {categories.map(category => <li className = {styles.listItem} key={category} onClick={() => { setCategory(category); filterProducts(); }}>{category}</li>)}
        </>
    )
}
export default CategoryFilter;