import Navbar from "./Const/Navbar";
import Navheader from "./Const/Nav_header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Path/Home/Home";
import Product from "../Path/Product/Product";
import Contact from "../Path/Contact/Contact";
import Category from "../Path/Category/Category";

function Navbars() {
  return (
    <div>
      
        <Navheader />
        <Navbar/>

    </div>
  );
}

export default Navbars;
