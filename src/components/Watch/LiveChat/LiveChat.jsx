import React from 'react';
import {DUMMY_LIVE_CHAT_PROFILE_URL, generateRandomNames} from '../../../utils/constants'

const LiveChat = ({name,message}) => {
    return (
            <div className='flex items-center mb-4 '>
                <div className='min-w-[38px] h-[38px] rounded-full overflow-hidden ' >
                    <img src={DUMMY_LIVE_CHAT_PROFILE_URL+generateRandomNames()} alt="subs" className='w-full h-full object-cover' />
                </div>
                <div className='ms-2'>
                    <span className='font-semibold text-sm pe-2 text-gray-500'>{name}</span>
                    <span className='text-sm'>{message}</span>
                </div>
            </div>
       
    )
}

export default LiveChat
