import { Link } from "react-router-dom";
import styles from './MenuItem.Module.css';

const MenuItem  = (props) => {

    return (
<li className={styles.listItem}><Link className = {styles.navLink} to={props.url} target='_blank'>{props.icon} {props.label}</Link></li>
    )
    }
    export default MenuItem;