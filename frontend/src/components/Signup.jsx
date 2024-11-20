import React, { useState } from 'react'

import { Link } from "react-router-dom"

const Signup = () => {

  const [User, setUser] = useState({
    fullName: "",
    username: "",
    passowrd: "",
    confirmPassword: "",
    gender: ""
  })

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit")
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
              value={User.confirmPassword}
              className='w-full input input-bordered h-10'
              type="password"
              placeholder='Confirm Password' />
          </div>

          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox mx-2" />
            </div>
          </div>

          <p className='text-center my-2'>Already have an account? <Link to="/login">login</Link></p>

          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Singup</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
