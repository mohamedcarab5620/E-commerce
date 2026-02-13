import Header from "./component/Header"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Dashboard from "./Dashboard/Dashboard"
import Addproduct from "./Dashboard/Addproduct"
import Viewproduct from "./Dashboard/Viewproduct"
import ViewMessages from "./Dashboard/ViewMessages"
import Update from "./Dashboard/Update"
import Login from "./Dashboard/Login"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route Path="/"            element = {<Home        />} />
        <Route path="/product"     element = {<Product     />} />
        <Route path="/contact"     element = {<Contact     />} />
        <Route path="/cart"        element = {<Cart        />} />
        <Route path="/dashboard"   element = {<Dashboard   />} />
        <Route path="/addproduct"  element = {<Addproduct  />} />
        <Route path="/viewproduct" element = {<Viewproduct />} />
        <Route path="/viewmessages"element = {<ViewMessages/>} />
        <Route path="/login"       element = {<Login       />} />
        <Route path="/update/:id"  element = {<Update      />} />
      </Routes>

    </div>
  )
}
export default App
