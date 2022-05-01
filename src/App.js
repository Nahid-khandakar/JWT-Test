
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import OrderList from './component/OrderList/OrderList';
import Products from './component/Products/Products';
import UploadProduct from './component/UploadProduct/UploadProduct';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>


        <Route path='/uploadproduct' element={<RequireAuth>
          <UploadProduct></UploadProduct>
        </RequireAuth>}></Route>


        <Route path='/orders' element={<RequireAuth>
          <OrderList></OrderList>
        </RequireAuth>}></Route>


        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
