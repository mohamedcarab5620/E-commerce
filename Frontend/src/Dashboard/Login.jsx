import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:7000/admin/login", admin)
      if (res.data) {
        setErr("email & password are incorrect")
        alert("go to dashbaord")
        navigate("/dashboard")

        return
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label> <br />
        <input type="email" name='email' value={admin.email} onChange={handlChange} /> <br />
        <label>password</label> <br />
        <input type="text" name='password' value={admin.password} onChange={handlChange} />
        <button type='submit' className='cursor-pointer' >save</button>
        {err && <h1> err : {err}</h1>}
      </form>
    </div>
  )
}

export default Login
