import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { YOUTUBE_VIDEO_CATEGORY_URL } from '../utils/constants'

const VideoList = ({setVideoId}) => {
    const [category, setCategory] = useState([])

    const getCategory = async () => {
        const data = await fetch(YOUTUBE_VIDEO_CATEGORY_URL)
        const json = await data.json()
        const workingCategory=json.items.filter((ctgy)=>ctgy.snippet.assignable===true)
        setCategory(workingCategory)
    }

    useEffect(() => {
        getCategory()
    }, [])
    
    const menu = useSelector((store) => store.app.isMenuOpen)

    const handleCategoryId = (vId) => {
        setVideoId(vId)
    }

    return (
        <div className={` absolute top-[62px] ${menu ? "w-[82%]" : "w-[98%]"}`}>
            <div className="wrap px-2 py-1 flex gap-3 items-center overflow-x-scroll barStyle bg-white overflow-hidden">
                {category.map((opt, index) => {
                    return (
                        <p key={index} onClick={() => handleCategoryId(opt.id)} className='cursor-pointer rounded-md bg-zinc-200 px-2 py-1 text-nowrap text-sm'>{opt.snippet.title}</p>
                    )
                })
                }
            </div>
        </div>

    )
}

export default VideoList
