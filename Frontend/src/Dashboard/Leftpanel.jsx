import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom'

function Leftpanel() {
  const navigate = useNavigate()
  return (
    <div className=" border-r-1 w-62.5 h-screen">
      <h1 className="pt-10 font-bold  text-2xl ml-5">LeftPanel</h1>
      <ul>
        <Link to="/dashboard"> <li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5  pl-10 p-3 ">Dashboard</li></Link>
        <Link to="/addproduct"> <li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5  pl-10 p-3 ">Addproduct</li></Link>
        <Link to="/viewproduct"> <li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5  pl-10 p-3 ">View product</li></Link>
        <Link to="/viewmessages"><li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5  pl-10 p-3 ">ViewMessages</li></Link>

        <button onClick={() => navigate("/")} className="text-2xl pl-20" ><FiLogOut /></button>
      </ul>
      
    </div>
  )
}

export default Leftpanel
