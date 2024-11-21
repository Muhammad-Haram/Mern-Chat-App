import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Signup = () => {

  const [User, setUser] = useState({
    fullName: "",
    username: "",
    passowrd: "",
    confirmPassword: "",
    gender: ""
  })

  const handleCheckbox = (gender) => {
    setUser({ ...User, gender })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, User, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      console.log(res)

    } catch (error) {
      console.log(error)
    }

    setUser({
      fullName: "",
      username: "",
      passowrd: "",
      confirmPassword: "",
      gender: ""
    })
  }

  return (
    <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={onSubmitHandler} action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              onChange={(e) => setUser({ ...User, fullName: e.target.value })}
              value={User.fullName}
              className='w-full input input-bordered h-10'
              type="text"
              placeholder='Full Name' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              onChange={(e) => setUser({ ...User, username: e.target.value })}
              value={User.username}
              className='w-full input input-bordered h-10'
              type="text"
              placeholder='Username' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              onChange={(e) => setUser({ ...User, passowrd: e.target.value })}
              value={User.passowrd}
              className='w-full input input-bordered h-10'
              type="password"
              placeholder='Password' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              onChange={(e) => setUser({ ...User, confirmPassword: e.target.value })}
              value={User.confirmPassword}
              className='w-full input input-bordered h-10'
              type="password"
              placeholder='Confirm Password' />
          </div>

          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                checked={User.gender === "male"}
                onChange={() => { handleCheckbox("male") }}
                type="checkbox"
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                checked={User.gender === "female"}
                onChange={() => { handleCheckbox("female") }}
                type="checkbox"
                defaultChecked
                className="checkbox mx-2" />
            </div>
          </div>

          <p className='text-center my-2'>Already have an account? <Link to="/login">login</Link></p>

          <div>
            <button type='submit' className='btn btn-block btn-md mt-2 border border-slate-700'>Singup</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
