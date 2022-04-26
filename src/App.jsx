import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard"
import Category from "./Pages/Category";
import AddProduct from "./components/AddProduct";
import GetProduct from "./components/GetProduct";
function App() {
  return (
    <BrowserRouter>
    <div class="wrapper">
      {/* <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height={60}
          width={60}
        />
      </div> */}
    
        <Header />
        <Menu />
       <Routes>
         <Route path="/" element={<Dashboard />}></Route>
         <Route path="/category" element={<Category />}></Route>
         <Route path="/AddProduct" element={<AddProduct />}></Route>
         <Route path="/AllProducts" element={<GetProduct />}></Route>
       </Routes>
        <Footer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
