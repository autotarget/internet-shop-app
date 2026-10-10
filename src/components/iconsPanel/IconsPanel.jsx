import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { AddShoppingCart, ReadMore } from '@mui/icons-material';
import { Login } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
// import { ReadMore } from '@mui/icons-material';
import styles from './IconsPanel.module.css'
import {Delete} from '@mui/icons-material';
import { Link } from 'react-router-dom';
 const IconsPanel = () => {

  return (
<div className={styles.icons_panel}>
 <IconButton component = {Link} to = "/form" variant="outlined" color='primary'>
 <Login />
</IconButton>

<IconButton  component = {Link} to = "/" variant="outlined" color='primary'>
 <Logout />
</IconButton>
</div>

  )
}
export default IconsPanel;