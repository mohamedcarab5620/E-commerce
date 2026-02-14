import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Adminlogin() {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  })
  const [err, setErr] = useState("")
  
  const handlChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    })
  }
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:7000/admin/login", admin)
      if (!res.data) {
        setErr("email & password are incorrect")
        return
      }
      alert("go to dashbaord")
      navigate("/dashboard")
    } catch (err) {
      console.log(err)
    }
  }
// console.log(admin)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handlChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              type="text"
              name="password"
              value={admin.password}
              onChange={handlChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Save
          </button>

          {err && (
            <h1 className="text-red-500 text-center font-medium mt-3">
              err : {err}
            </h1>
          )}
        </form>
      </div>
    </div>
  )
}

export default Adminlogin
