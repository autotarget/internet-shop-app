import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { AddShoppingCart, ReadMore } from '@mui/icons-material';
import { Login } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
// import { ReadMore } from '@mui/icons-material';
import styles from './IconsPanel.module.css'
import {Delete} from '@mui/icons-material';

 const IconsPanel = () => {

  return (
<div className={styles.icons_panel}>
 <IconButton variant="outlined" color='primary'>
 <Login color='red' />
</IconButton>
<IconButton variant="outlined" color='primary'>
 <Logout />
</IconButton>
</div>

  )
}
export default IconsPanel;