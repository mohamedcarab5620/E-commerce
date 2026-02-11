import axios from 'axios'
import React, { useState } from 'react'

function Contact() {
  const [contact , setContact] = useState({
    name: "",
    email:"",
    message: ""
  })

  const HandleChange = (e) =>{
    const {name , value} = e.target
  setContact({
    ...contact,
    [name] : value
  })
  }

  const Handlesubmit = async (e) =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:7000/contact", contact)
      setContact({
        name: "",
        email: "",
        message: ""
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Me
        </h1>

        <form onSubmit={Handlesubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name='name'
              onChange={HandleChange}
              placeholder="Enter your name please"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name='email'
              onChange={HandleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              name='message'
              onChange={HandleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
            
  )
}

export default Contact
