import styles from './SideBar.module.css'
// import Categories from '../../store/categories/Categories'
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';

const SideBar = () => {
  
    return (
        <div className={styles.sidebar}>
            <ul className={styles.ul}>
                <CategoryFilter/>
                {/* <Categories /> */}
            </ul>
        </div>
    )
}
export default SideBar;