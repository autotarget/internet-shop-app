import MenuItem from "../menuItem/MenuItem";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import styles from './Menu.module.css';

const Menu = (props) => {

    return (
        <nav className={styles.menu}>
            <ul className={styles.navList}>
                <MenuItem label={"Telegram"} url={"https://web.telegram.org/"} icon={<FaTelegram className={styles.icon} />}></MenuItem>
                <MenuItem label={"Viber"} url={"https://www.viber.com/"} icon={<FaViber className={styles.icon} />}></MenuItem>
                <MenuItem label={"Messenger"} url={"https://www.messenger.com/"} icon={<FaFacebookMessenger className={styles.icon} />}></MenuItem>
                <MenuItem label={"0 899 344 77 77"} url={"tel:0 899 344 77 77"} icon={<FaPhoneVolume className={styles.icon} />}></MenuItem>
                <MenuItem label={"Call Back"} icon={<FaPhoneVolume className={styles.icon} />}></MenuItem>
            </ul>
        </nav>
    )
}
export default Menu;
