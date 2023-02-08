import React from 'react'
import Chat from '../components/chat';
import UserList from '../components/userList';


const Home = () => {
  return (
    <main className="mt-5 bg-gradient-to-tr from-gray-200 to-gray-300">
      <section className="flex justify-center gap-4 lg:grid-flow-row grid-">
        <div className="lg:w-1/5 md:w-1/3 m-5 p-5 bg-white ">
         <UserList />
        </div>
        <div className="lg:w-4/5 md:w-2/3 p-5 text-center bg-white m-5">
         <Chat/>
        </div>
      </section>
    </main>
  );
}

export default Home;