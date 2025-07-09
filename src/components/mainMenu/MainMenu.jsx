import { Link } from 'react-router-dom';
import styles from './MainMenu.module.css'
import MenuItem from '../dropDownMenu/menuItem/MenuItem';
const MainMenu= () => {

    return (
        <nav className={styles.mainMenu}>
         
        <ul className={styles.mainMenuList}>
        <Link to="/cart">Basket</Link>
        <MenuItem label = {"%Actions"} url = {"#"}></MenuItem>
        <MenuItem label = {"For buyers"} url = {"#"}></MenuItem>
        <MenuItem label = {"Shops"} url = {"#"}></MenuItem>
        <MenuItem label = {"Order tracking"} url = {"#"}></MenuItem>
                         </ul>
      </nav>
    )
    }
    export default MainMenu;