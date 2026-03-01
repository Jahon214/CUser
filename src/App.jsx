import React from 'react'
import Header from './components/topbar/Header'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import UsersList from './components/usersList/UsersList'
import ModalFormList from './components/modal/ModalFormList'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const deleteClick = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  

  return (
    <div>
      <Header usersLength={users.length} />
      <main>
        {users.length === 0 && <h2 className="w-full h-[80vh] flex justify-center items-center text-9xl 
        opacity-20 select-none font-bold">No Users</h2>}
        {showModal && <ModalFormList addUser={addUser}/>}
        <button onClick={() => setShowModal(true)} className="fixed left-5 top-1/2 
             -translate-y-1/2 
             -rotate-90 
             origin-left
             bg-red-500 text-white 
             px-4 py-2 
             rounded-t-lg 
             shadow-lg ">Create user</button>
      </main>
      <UsersList deleteClick={deleteClick} users={users} />
    </div>
  )
}

export default App