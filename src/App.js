import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Product from "./features/product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
