import React from 'react'
import { useSelector } from 'react-redux'

const VideoList = () => {
    const menu = useSelector((store) => store.app.isMenuOpen)
    return (
        <div className={` absolute top-[66px] ${menu ? "w-[82%]" : "w-[98%]"}`}>
            <div className="wrap px-2 py-1 flex gap-3 items-center overflow-x-scroll barStyle bg-white overflow-hidden">
                {[
                    'All', 'Music', 'Albums', 'Cricket', 'Live', 'Comedy', 'Recently Uploaded', 'New to You', "Movies", "Netflix", "Coading", "News", "Javascript", "Bhajan", "Garhwali Song"
                ].map((opt, index) => {
                    return (
                        <p key={index} className='rounded-md bg-zinc-200 px-2 py-1 text-nowrap'>{opt}</p>
                    )
                })
                }
            </div>
        </div>

    )
}

export default VideoList
