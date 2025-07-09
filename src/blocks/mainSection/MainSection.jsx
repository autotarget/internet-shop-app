import SideBar from "../sidebar/SideBar";
import '../../../src/index.css';
import ProductsContainer from "../../components/productsContainer/ProductsContainer";
import styles from './MainSection.module.css';
const MainSection = () => {

    return (
       <div className= {styles.mainSection}>
   <div className="container">
            <div className="row">
            <SideBar/>
            <ProductsContainer/>
            </div>
        </div>
       </div>
      
        
       
  
    )
    }
    export default MainSection;