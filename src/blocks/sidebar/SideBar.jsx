import styles from './SideBar.module.css'
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';

const SideBar = () => {

    return (
        <div className={styles.sidebar}>
            <ul className={styles.ul}>
                <CategoryFilter />
            </ul>
        </div>
    )
}
export default SideBar;