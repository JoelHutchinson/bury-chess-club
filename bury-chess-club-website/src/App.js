import './App.css';

import Layout from './layout/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Competitions from './components/Competitions';
import Games from './components/Games';
import Privacy from './components/Privacy';

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
        path: "games",
        element: <Games />
      },
      {
        path: "privacy",
        element: <Privacy />
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
