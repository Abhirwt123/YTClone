import React, { useState } from 'react';
import { HiDownload, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiShareForwardLine } from 'react-icons/ri';
import { SlDislike, SlLike } from 'react-icons/sl';

const ChannelInfo = ({ info }) => {
    const [showDes, setShowDes] = useState(false);
    const { channelTitle, description, title } = info;
    const newDescription = description.replace(/\n/g, '<br/>');
    return (
        <div>
            <div className="head mt-2">
                <p className='text-xl font-bold'>{title}</p>
            </div>
            <div className="info mt-2 flex items-center justify-between">
                <div className="left flex items-center ">
                    <div className="channelImg">
                        <img src="" alt="" />
                    </div>
                    <div className="nameTitle">
                        <p className="name font-semibold">{channelTitle}</p>
                        <p className="name text-xs">1.2M subscriber</p>
                    </div>
                    <div className="btn-wrap ms-4">
                        <button className='rounded-full px-4 py-2 bg-black text-white'>Subscribe</button>
                    </div>
                </div>
                <div className="rigth flex gap-6">
                    <div className="liked flex items-center bg-gray-100  rounded-full  cursor-pointer overflow-hidden">
                        <div className="like border-e-2 border-gray-300  hover:bg-gray-200 px-4 py-1"><SlLike /></div>
                        <div className="disLike hover:bg-gray-200 px-4 py-1"><SlDislike /></div>
                    </div>
                    <div className="btn flex items-center bg-gray-100 px-4 py-1 rounded-full">
                        <RiShareForwardLine />
                        <button className='ps-2'>Share</button>
                    </div>
                    <div className="btn flex items-center bg-gray-100 px-4 py-2 rounded-full">
                        <HiDownload />
                        <button className='ps-2'>Download</button>
                    </div>
                    <div className="btn text-center bg-gray-100 px-4 py-2 rounded-full">
                        <HiOutlineDotsHorizontal />
                    </div>
                </div>
            </div>
            <div className="des-wrap p-2 bg-gray-100 rounded-lg mt-4">
                <div dangerouslySetInnerHTML={{ __html: !showDes ? newDescription.slice(0, 150) : newDescription.slice(0, -1) }}></div>
                <button className='mt-2 font-semibold' onClick={() => setShowDes(!showDes)}>{!showDes ? "...more" : "Show Less"}</button>
            </div>
        </div>
    )
}

export default ChannelInfo
