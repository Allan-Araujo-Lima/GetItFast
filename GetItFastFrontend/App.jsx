import { useEffect, useState } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './src/pages/home/index';
import { Sobre } from './src/pages/sobre/index';

function App() {

  const [presentation, setPresentation] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:7777/get_data")
      .then((response) => {
        const data = response.data;
        setPresentation(data["body"])
      })
      .catch((e) => {
        console.error(e);
      })
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/sobre",
      element: <Sobre />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
