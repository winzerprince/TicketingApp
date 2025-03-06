//layouts
import { RootLayout } from './layouts/RootLayout.jsx'

//pages/components
import Home from './components/HomePage.jsx'
import DashBoard from './Dashboard/Dashboard.jsx'

// router dom
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

const UserPage = () => {
  return (
    <>
      <DashBoard />
    </>
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='user' element={ <UserPage /> } />
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={ router } />
  )
}

export default App;