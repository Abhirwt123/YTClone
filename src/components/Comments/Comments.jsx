import React from 'react'
import { DUMMY_LIVE_CHAT_PROFILE_URL } from '../../utils/constants';

const Comments = ({info}) => {
    const {textDisplay,authorDisplayName,authorProfileImageUrl}=info?.snippet?.topLevelComment?.snippet;
    // console.log(info);
    return (
        <div className='mb-4'>
            <div className="body">
                <div className="flex">
                    <div className="userImg me-4">
                        <img src={authorProfileImageUrl?authorProfileImageUrl:DUMMY_LIVE_CHAT_PROFILE_URL+"john"} alt="userProfile" className='min-w-12 h-12 rounded-full' />
                    </div>
                    <div className="comment_detail">
                        <p className="name  text-[13px] font-semibold">{authorDisplayName}</p>
                        <p className="comment text-[14px] font-normal">{textDisplay}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
