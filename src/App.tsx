import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ListProduct from './pages/Admin/Product/product'
import AdminLayout from './components/Layout/admin'
import Home from './pages/home'
import WebsiteLayout from './pages/WebsiteLayout'
import AddProductPage from './pages/Admin/Product/add'
import EditProduct from './pages/Admin/Product/edit'
import ListCategory from './pages/Admin/category/list'
function App(props: any) {
  const [count, setCount] = useState(0)
  const newLocal = "auto"
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to={"product"} />} />
            <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProductPage />} />
              <Route path='edit/:id' element={<EditProduct />} />
              {/* <Route path='categories' element={<CategoriesPage />} /> */}
            </Route>

          </Route>
          <Route path='category'>
            <Route index element={<ListCategory />} />
            

          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
