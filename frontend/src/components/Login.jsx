import React, { useState } from 'react'

import { Link } from "react-router-dom"

const Login = () => {

    const [User, setUser] = useState({
        username: "",
        passowrd: "",
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(User)
        setUser({
            username: "",
            passowrd: "",
        })
    }

    return (
        <div className="min-w-96 mx-auto">
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center'>Login</h1>
                <form onSubmit={onSubmitHandler} action="">

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

                    <p className='text-center my-2'>Don't have an account? <Link to="/signup">Signup</Link></p>

                    <div>
                        <button type='submit' className='btn btn-block btn-md mt-2 border border-slate-700'>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
