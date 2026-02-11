import axios from 'axios'
import { useEffect, useState } from 'react'
import Leftpanel from './Leftpanel'

function ViewMessages() {
  const [contact, setContact] = useState([])

  const handleContact = () => {
    axios.get("http://localhost:7000/contact")
      .then((res) => {
        setContact(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleContact()
  }, [])

  const deleteConApi = (id) => {
    axios.delete(`http://localhost:7000/contact/${id}`)
      .then(() => {
        handleContact()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left panel */}
      <Leftpanel />

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6">
          
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Contact Messages
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              
              <thead>
                <tr className="bg-blue-600 text-white uppercase text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Message</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {contact.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    <td className="p-3 font-medium">{item.name}</td>
                    <td className="p-3 text-gray-600">{item.email}</td>
                    <td className="p-3 text-gray-700">{item.message}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => deleteConApi(item._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewMessages
