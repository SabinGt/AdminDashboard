import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Category from "../Pages/Category";
import AddProduct from "../components/AddProduct";
import GetProduct from "../components/GetProduct";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/AllProducts" element={<GetProduct />}></Route>
      </Routes>
    </div>
  );
}
