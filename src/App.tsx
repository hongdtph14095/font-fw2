import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ListProduct from './pages/Admin/Product/product'
import AdminLayout from './components/Layout/admin'
import WebsiteLayout from './pages/WebsiteLayout'
import AddProductPage from './pages/Admin/Product/add'
import EditProduct from './pages/Admin/Product/edit'
import ListCategory from './pages/Admin/category/list'
import EditCategory from './pages/Admin/category/edit'
import Detailproduct from './pages/Detailproduct'
import Cart from './pages/Cart'
import { CartProvider } from 'react-use-cart'
import Home from './pages/Home/home'
import AddCategory from './pages/Admin/category/add'
import Login from './pages/Auth/signin'
import Signin from './pages/Auth/signin'
import Signup from './pages/Auth/signup'
import ListPhuKien from './pages/Admin/phukien/phukien'
import ListLinhKien from './pages/Admin/linhkien/linhkien'
import PrivateRoute from './midlerware/PrivateRoute'
function App() {

  const [count, setCount] = useState(0)
  const newLocal = "auto"
  return (
    <div>
      <main>
        <Routes>

          <Route path='/' element={<CartProvider><WebsiteLayout /></CartProvider>}>
            <Route index element={<Home />} />
            <Route path='/detail/:id' element={<Detailproduct />} />
            <Route path='/cart' element={<Cart />} />
          </Route>




          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />


          <Route path='admin'element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
            <Route index element={<Navigate to={"product"} />} />
            <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProductPage />} />
              <Route path='edit/:id' element={<EditProduct />} />
            </Route>
            <Route path='categories'>
              <Route index element={<Navigate to={"phone"} />} />
              <Route path='add' element={<AddCategory />} />
              <Route path='edit/:id' element={<EditCategory />} />
              <Route path='phone'>
                <Route index element={<ListCategory />} />
              </Route>
              <Route path='phukien'>
                <Route index element={<ListPhuKien />} />
              </Route>

              <Route path='linhkien'>
                <Route index element={<ListLinhKien />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App