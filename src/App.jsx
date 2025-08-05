import Header from './blocks/header/Header';
import Footer from './blocks/footer/Footer';
import Error from './pages/errorPage/Error';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import MainSection from './blocks/mainSection/MainSection';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Actions from './pages/actions/Actions';
import Bayers from './pages/bayers/Bayers';
import Shops from './pages/shops/Shops';
import Tracking from './pages/tracking/Tracking';
import Form from './pages/form/Form';
import Users from './pages/users/Users';


function App() {

  const Root = () => {

    return (
      <div className='App'>
        <Header></Header>
        <div className='mainContent'>
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Root />}>
        <Route index element={<MainSection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/actions' element={<Actions />} />
        <Route path='/bayers' element={<Bayers />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/form' element={<Form />} />
        <Route path='/users' element={<Users/>} />

        <Route path='*' element={<Error />} />
      </Route>
    )
  )

  return (

    < RouterProvider router={router} />

  )
}

export default App;
