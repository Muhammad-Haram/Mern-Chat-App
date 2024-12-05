import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },

])

const App = () => {

  const { authUser } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8080/", {
        query: {
          userId: authUser._id
        }
      });
      setSocket(socket)
    }
  }, [authUser])

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
