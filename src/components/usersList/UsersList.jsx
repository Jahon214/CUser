import React from 'react'

const UsersList = ({ users, deleteClick }) => {
    return (
        <div>
            <div className="px-[10%] grid grid-cols-4 gap-4 mt-5">
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <div className="rounded-xl shadow-md shadow-gray-400 text-center bg-gray-200 p-4">
                                <img className="w-40 h-40 rounded-full inline-block" src={user.image} alt={user.name}/>
                                <h3 className="text-lg font-bold pt-4">{user.firstName} {user.lastName}, {user.age} age</h3>
                                <p className="pt-2"><span className="font-bold text-blue-600">From:</span> {user.from}</p>
                                <p className="pt-2"><span className="font-bold text-red-600">Job:</span> {user.job}</p>
                                <p className="pt-2"><span className="font-bold text-green-600">Gender:</span> {user.gender}</p>
                                <button onClick={() => deleteClick(user.id)} 
                                className="font-bold bg-black text-white px-4 py-1.5 rounded mt-2 cursor-pointer">Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UsersList