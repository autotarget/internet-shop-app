import styles from './Contacts.module.css'
import Menu from '../dropDownMenu/menu/Menu';
import { useState } from 'react';
import { Button } from '@mui/material';

const Contacts = () => {
const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className={styles.contacts}>
       <Button onClick = {()=>setMenuIsOpen(!menuIsOpen)} variant="contained" color='primary'>
Contact us {menuIsOpen && <Menu/>}
</Button>
      {/* <button  onClick = {()=>setMenuIsOpen(!menuIsOpen)} className={styles.menuBtn}>Contact us
      {menuIsOpen && <Menu/>}
      </button> */}
         </div>
  )
}
export default Contacts;