import logo from './logo.svg';
import './App.css';

import Layout from './layout/Layout';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import ErrorPage from "./components/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
