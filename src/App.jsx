import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Routing from "./routes/Routing";
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
       <Routing />
        <Footer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
