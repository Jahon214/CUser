import React from 'react'

const Header = ({usersLength}) => {
  return (
    <div className="flex sticky inset-0 shadow-md shadow-gray-400 justify-between items-center px-[10%] py-6 bg-gray-200">
      <p className="font-semibold text-2xl text-blue-800">CUser</p>
      <p className="font-semibold text-base">
        {usersLength > 0 ? "You have " + usersLength : "No users: ("}
      </p>
    </div>
  )
}

export default Header