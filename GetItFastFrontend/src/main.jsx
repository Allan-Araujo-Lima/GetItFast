import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LayoutExp } from './layout'
import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import { Loja } from './pages/loja'
import { Cadastro } from './pages/cadastro'
import { Ajuda } from './pages/ajuda'

import "antd/dist/reset.css";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutExp />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/loja",
        element: <Loja />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/ajuda",
        element: <Ajuda />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);