import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/errorPage'

import Home from './pages/home'
import LocatorsMap from './pages/locatorsMap'
import DivisionProfiles from './pages/divisionProfiles'
import ContactUs from './pages/contactUs'
import Inquiries from './pages/inquiries'

function App() {


    const router = createBrowserRouter([
      {
        path:"/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path:"/locators-map",
        element: <LocatorsMap />,
      },
      {
        path:"/division-profiles",
        element: <DivisionProfiles />,
      },
      {
        path:"/contact-us",
        element: <ContactUs />,
      },
      {
        path:"/inquiries",
        element: <Inquiries />,
      },
    ]);

    return(
        <RouterProvider router={router} />
    )
    
}

export default App
