import React, { useEffect, useState } from 'react'
import getData from '../../data/userData';



const UserList = () => {

  const [data, setData] = useState([])

useEffect(()=>{
  const copyData = getData()
  console.log(copyData)
  setData(copyData)


  },[])
  console.log("ffgfgf",data);
  return (
    <div className="bg-white flex-1 ">
      <div className="group relative w-full md:w-full lg:w-full">
        <input
          id="1"
          type="text"
          placeholder="Search.."
          className="peer h-10 w-full rounded-md border border-gray-400 bg-gray-100 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-300 focus:ring-1 focus:ring-blue-400 placeholder:text-black  placeholder:text-lg"
        />
      </div>
      <div className="pt-10">
        <header className="border-b border-gray-300 pb-3 ">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Chats
          </h1>
        </header>
        <ul
          id="messages"
          className="flex flex-col space-y-4 py-3 overflow-y-auto  h-screen   scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {data.map((user) => (
            <li key={user.id} className="py-3 sm:py-4 shadow-sm cursor-pointer px-2">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full "
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-gray-900 truncate ">
                    {user.name}
                  </p>
                  <p className="text-sm font-semiboldf text-black truncate dark:text-gray-400">
                    Nurse
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList