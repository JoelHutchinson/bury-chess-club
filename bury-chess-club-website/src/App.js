import logo from './logo.svg';
import './App.css';

import Layout from './layout/Layout';
import About from './components/About'
import Contact from './components/Contact'
import Competitions from './components/Competitions'
import Privacy from './components/Privacy'
import Cookies from './components/Cookies'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import ErrorPage from "./components/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "competitions",
        element: <Competitions />
      },
      {
        path: "privacy",
        element: <Privacy />
      },
      {
        path: "cookies",
        element: <Cookies />
      },
    ],
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
