import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Service from "./components/ServicePage/Service";
import Contact from "./components/Contact/Contact";
import ProductMagokits from "./components/ProductPage/ProductMagokitPack";
import ProductComposing from "./components/ProductPage/ProductComposingTools";
import ProductComposterFull from "./components/ProductPage/ProductComposterFull";
import ProductWasteSorters from "./components/ProductPage/ProductWasteSorters";
import ProductBiogasStove from "./components/ProductPage/ProductBiogasStove";
import ProductWasteBin from "./components/ProductPage/ProductWasteBin";
import Error404 from "./components/Error404/Error404";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/magokits" element={<ProductMagokits/>}/>
        <Route path="/product/composingTools" element={<ProductComposing/>}/>
        <Route path="/product/composterFullPack" element={<ProductComposterFull/>}/>
        <Route path="/product/wasteSorters" element={<ProductWasteSorters/>}/>
        <Route path="/product/biogasStove" element={<ProductBiogasStove/>}/>
        <Route path="/product/wasteBin" element={<ProductWasteBin/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
