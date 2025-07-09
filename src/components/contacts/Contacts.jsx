import styles from './Contacts.module.css'
import Menu from '../dropDownMenu/menu/Menu';
import { useState } from 'react';

const Contacts = () => {
const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className={styles.contacts}>
      <button  onClick = {()=>setMenuIsOpen(!menuIsOpen)}className={styles.menuBtn}>Contact us
      {menuIsOpen && <Menu/>}
      </button>
         </div>
  )
}
export default Contacts;