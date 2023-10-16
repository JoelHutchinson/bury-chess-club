import logo from './logo.svg';
import './App.css';

import Layout from './layout/Layout';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
