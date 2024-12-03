import React, { useState } from 'react'
import { Search } from 'lucide-react';
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice'

const Sidebar = () => {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { otherUsers } = useSelector(store => store.user);

    const logoutHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("http://localhost:8080/api/v1/user/logout");
            navigate("/login");
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
        }

    }

    const searchHandler = async (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }

    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form onSubmit={searchHandler} action="" className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-bordered rounded-md' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='btn bg-zinc-700 text-white'>
                    <Search className='w-6 h-6 outline-none' />
                </button>
            </form>

            <div className="divider px-3"></div>

            <OtherUsers />

            <div className='mt-2'>
                <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
            </div>
        </div >
    )
}

export default Sidebar
