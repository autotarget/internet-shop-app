import { Link } from 'react-router-dom';
import styles from './MainMenu.module.css'
const MainMenu = () => {

  return (
    <nav className={styles.mainMenu}>
      <ul className={styles.mainMenuList}>
        <Link to="/cart">Basket</Link>
        <Link to="/actions">Actions</Link>
        <Link to="/bayers">Bayers</Link>
        <Link to="/shops">Shops</Link>
        <Link to="/tracking">Tracking</Link>
      </ul>
    </nav>
  )
}
export default MainMenu;