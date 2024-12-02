import React, { useState } from 'react'
import { SendHorizontal } from 'lucide-react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const SendInput = () => {

    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
                { message }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            console.log(selectedUser?._id)
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                    type="text"
                    placeholder='Send a message...'
                    className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white'
                    onChange={(e) => { setMessage(e.target.value) }}
                    value={message}
                />
                <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <SendHorizontal />
                </button>
            </div>
        </form>
    )
}

export default SendInput
