import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import Router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router} />
)
