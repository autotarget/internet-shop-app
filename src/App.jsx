import Header from './blocks/header/Header';
import Footer from './blocks/footer/Footer';
// import Cart from './pages/cart/Cart';
import Error from './pages/errorPage/Error';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import MainSection from './blocks/mainSection/MainSection';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

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
        <Route path='*' element={<Error />} />
      </Route>
    )
  )

  return (

    < RouterProvider router={router} />

  )
}

export default App;
