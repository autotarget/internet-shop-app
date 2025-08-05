import styles from './Header.module.css'
import Logo from '../../components/logo/Logo';
import Position from '../../components/position/Position';
import Contacts from '../../components/contacts/Contacts';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';
import '../../../src/index.css';
import MainMenu from '../../components/mainMenu/MainMenu';
import Input from '../../components/input/Input';
import { Link } from 'react-router-dom';
import IconsPanel from '../../components/iconsPanel/IconsPanel';

const Header = () => {

  return (
    <header className={styles.header}>

      <div className='container'>
        <div className={styles.mainPanel}>
          <div className={styles.leftPanel}>
            <Logo />
            <Position />
            <Contacts />
          </div>
          <div className={styles.rightPanel}>
            <MainMenu />
          </div>
        </div>

        <div className={styles.shopPanel}>
          <Link to='/'>
            <Button variant="contained">Catalog</Button>
          </Link>
          <Input />
          <IconsPanel/>
        </div>
      </div>

    </header>
  )
}
export default Header;
