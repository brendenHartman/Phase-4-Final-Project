import React from "react";
import "./Index.css";
import { RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);
