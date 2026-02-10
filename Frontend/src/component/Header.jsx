import { Link } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Header(){
  const cartValue = useSelector((state) => state.productCart.cartItem)
  return (
    <div className="flex justify-between px-10 py-5 bg-blue-500 text-white text-xl ">
      <h1>E-commerce</h1>
      <div>
        <ul className="flex gap-10">
          <Link to="/"> <li>Home</li> </Link>
          <Link to="/product"> <li>Product</li> </Link>
          <Link to="/dashboard"><li>Dashboard</li></Link>
          <Link to="/cart"><FaCartArrowDown /><li className="absolute top-0 right-7">{cartValue.length}</li></Link>
        </ul>
      </div>
    </div>
  )
}
export default Header
