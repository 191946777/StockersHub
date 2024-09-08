import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/NavLinks/About"
import Global from "./Components/NavLinks/Global"
import News from "./Components/NavLinks/News"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/><Home/></>
    },
    { 
      path: "/about",
      element: <><Header/><About/></>
    },
    { 
      path: "/global",
      element: <><Header/><Global/></>
    },
    { 
      path: "/news",
      element: <><Header/><News/></>
    }
    
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
      <Footer/>
      
    </>
  )
}

export default App
