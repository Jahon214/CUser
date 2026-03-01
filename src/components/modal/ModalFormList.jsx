import React from 'react'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const ModalFormList = ({addUser}) => {
    const [user, setUser] = useState([{
          id: uuidv4(),
          image: '',
          firstName: '',
          lastName: '',
          age: '',
          from: '',
          job: '',
          gender: '',
    }])

    const handleSubmit = (e) => {
      e.preventDefault()
      addUser(user)
    }


  return (
    <div>
      <div className="w-full h-screen bg-gray-900 opacity-80 fixed inset-0">
        <div className="overlay flex justify-center items-center mt-26">
          <form className="w-1/4 bg-white p-6 rounded" onSubmit={handleSubmit}>
            <h2 className="font-bold text-2xl py-3 text-center">Create New User</h2>
            <label>
              <span className="font-semibold ">Image URL:</span>
              <input className="block pl-2 border-2 w-full rounded py-1" type="url" required onChange={(e) => {setUser((prev) => {
                return {...prev, image: e.target.value}
              })}} />
            </label>
            <label>
              <span className="font-semibold ">First Name:</span>
              <input className="block pl-2 border-2 w-full rounded py-1" type="text" required onChange={(e) => {setUser((prev) => {
                return {...prev, firstName: e.target.value}
              })}} />
            </label>
            <label>
              <span className="font-semibold ">Last Name:</span>
              <input className="block pl-2 border-2 w-full rounded py-1" type="text" required onChange={(e) => {setUser((prev) => {
                return {...prev, lastName: e.target.value}
              })}}/>
            </label>
            <label>
              <span className="font-semibold ">Age:</span>
              <input className="block pl-2 border-2 w-full rounded py-1" type="number" required onChange={(e) => {setUser((prev) => {
                return {...prev, age: e.target.value}
              })}}/>
            </label>
            <label>
              <span className="font-semibold ">From:</span>
              <input className="block pl-2 border-2 w-full rounded py-1" type="text" required onChange={(e) => {setUser((prev) => {
                return {...prev, from: e.target.value}
              })}}/>
            </label>
            <label>
              <span className="font-semibold ">Job:</span>
              <input className="block pl-2  border-2 w-full rounded py-1" type="text" required onChange={(e) => {setUser((prev) => {
                return {...prev, job: e.target.value}
              })}}/>
            </label>
            <div className="flex">
              <span className="font-semibold pr-4">Gender:</span>

              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="gender" value="male" onChange={(e) => {setUser((prev) => {
                return {...prev, gender: e.target.value}
              })}}/>
                <span className="font-semibold">Male</span>
              </label>

              <label className="flex items-center gap-1 cursor-pointer ml-2">
                <input type="radio" name="gender" value="female" onChange={(e) => {setUser((prev) => {
                return {...prev, gender: e.target.value}
              })}}/>
                <span className="font-semibold">Female</span>
              </label>
            </div>
            <button className="bg-red-600 mx-auto block text-center font-semibold px-4 py-1 rounded cursor-pointer mt-4 text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalFormList