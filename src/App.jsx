import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Category from "./Pages/Category";
import AddProduct from "./components/AddProduct";
import GetProduct from "./components/GetProduct";

function App() {
  return (
    <div class="wrapper">
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height={60}
          width={60}
        />
      </div>

      <Header />
      <Menu />
      <Dashboard />
      <Category />
      <AddProduct />
      <GetProduct />
      <Footer />
    </div>
  );
}

export default App;
