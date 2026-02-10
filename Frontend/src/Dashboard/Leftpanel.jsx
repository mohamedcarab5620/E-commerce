import React from 'react'
import { Link } from 'react-router-dom'

function Leftpanel() {
  return (
    <div className="bg-blue-400 w-62.5 h-screen">
      <h1 className="pt-10 font-bold text-white text-2xl ml-5">LeftPanel</h1>
      <ul>
        <Link to="/dashboard"> <li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5 text-white pl-10 p-3 ">Dashboard</li></Link>
        <Link to="/addproduct"> <li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5 text-white pl-10 p-3 ">Addproduct</li></Link>
        <Link to="/viewproduct"> <li className="text-xl hover:bg-blue-600 hover:rounded-2xl w-50 m-5 text-white pl-10 p-3 ">View product</li></Link>
      </ul>
      
    </div>
  )
}

export default Leftpanel
