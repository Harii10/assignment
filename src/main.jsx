import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout/Layout.jsx'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Uheader from './components/Uheader/Uheader.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Login/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='userinfo' element={<Uheader/>}/>
      <Route path='*' element={<div className='text-white'>Not Found</div>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
