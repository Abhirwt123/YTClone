import React from 'react'
import { useNavigate } from 'react-router-dom';

const Videos = ({ info }) => {
    const navigate = useNavigate()
    const givenDate = new Date(info?.snippet?.publishedAt);
    const currentDate = new Date();
    const differenceInMs = currentDate - givenDate;
    const daysDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const handelWatchPage = () => {
        navigate(`/watch?v=${info.id}`)
    }
    return (
        <div className='box col-span-4' onClick={handelWatchPage}>
            <div className="thumbnail ">
                <img src={info?.snippet?.thumbnails?.medium?.url} alt="" className='w-full rounded-md h-full object-cover' />
            </div>
            <div className="body flex py-2 gap-2">
                <div className="logo">
                    <img src={''} alt="" />
                </div>
                <div className="info">
                    <div className="title pb-1 font-semibold">{info?.snippet?.title.slice(0, 80) + "..."}</div>
                    <div className="name">
                        <p className='text-zinc-500 text-lg'> {info?.snippet?.channelTitle}</p>
                        <div className="views text-zinc-500 text-sm">{info?.statistics?.viewCount} views - {daysDifference} days</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Videos
