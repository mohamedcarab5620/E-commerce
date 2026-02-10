import Header from "./component/Header"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Dashboard from "./Dashboard/Dashboard"
import Addproduct from "./Dashboard/Addproduct"
import Viewproduct from "./Dashboard/Viewproduct"
import Update from "./Dashboard/Update"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route Path="/"            element = {<Home        />} />
        <Route path="/product"     element = {<Product     />} />
        <Route path="/cart"        element = {<Cart        />} />
        <Route path="/dashboard"   element = {<Dashboard   />} />
        <Route path="/addproduct"  element = {<Addproduct  />} />
        <Route path="/viewproduct" element = {<Viewproduct />} />
        <Route path="/update/:id"  element = {<Update      />} />
      </Routes>

    </div>
  )
}
export default App
