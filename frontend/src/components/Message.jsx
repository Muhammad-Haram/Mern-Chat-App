import React from 'react'

const Message = () => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="chat-header text-white">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50 text-white">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
        </div>
    )
}

export default Message