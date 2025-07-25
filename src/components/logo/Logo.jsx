import { Link } from 'react-router-dom';
import styles from './Logo.module.css'

const Logo = () => {

  return (

    <h2 >
      <Link className={styles.logo} to={"/"}>My<span>Shop</span>
      </Link>
    </h2>

  )
}
export default Logo;