import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './client/Home'
import Dasboard from './admin/Dasboard'
import styled from './styled-component'
import ProductList from './admin/products/ProductList'
import ProductAdd from './admin/products/ProductAdd'
import Signin from './auth/signin'
import ProductDetail from './admin/products/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/app' element={<ProductDetail/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Dasboard />}>
          <Route index element={<ProductList />} />
          <Route path='product' >
            <Route path ='add' element={<ProductAdd />}/>
        </Route>
        </Route>
        <Route path='/signin' element ={<Signin/>}></Route>
      </Routes>
    </div>

  )
}

export default App
