import logo from './logo.svg';
import './App.css';

import Layout from './layout/Layout';
import About from './components/About'
import Contact from './components/Contact'

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
    ],
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
