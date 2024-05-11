import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../Redux/appSlice';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecomendedVideos from './RecomendedVideos';
import { GET_YOUTUBE_COMMENTS_URL, GOOGLE_URL, YOUTUBE_CHANNEL_INFO_URL, generateRandomMessages, generateRandomNames } from '../../utils/constants';
import LiveChat from './LiveChat/LiveChat';
import { addMessages } from '../../Redux/chatSlice';
import Comments from '../Comments/Comments';
import ChannelInfo from './ChannelInfo';

const Watch = () => {
    const [popularVideos, setPopularVideos] = useState();
    const [commentsList, setcommentsList] = useState([]);
    const [channelInfo, setChannelInfo] = useState({});       
    const [myMessage, setMyMessage] = useState({ name: '', message: '' });
    const menu = useSelector((store) => store.app.isMenuOpen);
    const messagesList = useSelector((store) => store.chat.messages);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();                         
    const getVideos = async () => {
        try {
            const data = await fetch(GOOGLE_URL);
            const json = await data.json();
            setPopularVideos(json.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  
    useEffect(() => {
        getVideos();
        dispatch(closeMenu());
        const timer = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomNames(),
                message: generateRandomMessages()
            }))
        }, 2000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    const handleChat = () => {
        dispatch(addMessages(myMessage))
        setMyMessage({ message: '' })
    }
    useEffect(() => {
        getComments()
        getChannelInfo()
    }, [searchParams.get('v')])

    const getComments = async () => {
        const data = await fetch(GET_YOUTUBE_COMMENTS_URL + searchParams.get('v'));
        const json = await data.json()
        setcommentsList(json.items);
    }

    const getChannelInfo = async () => {
        const data = await fetch(YOUTUBE_CHANNEL_INFO_URL + searchParams.get('v'))
        const json = await data.json();
        setChannelInfo(json.items[0].snippet)
        console.log(json);
    }

 

    if (!popularVideos) return
    return (
        <div className={`${!menu ? "px-16" : "px-8"} py-4 w-full`}>
            <div className="wrap grid grid-cols-12 gap-8" >
                <div className="video-box col-span-8">
                    <iframe className='w-full h-[70vh] rounded-xl' src={`https://www.youtube.com/embed/${searchParams.get('v')} `} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <ChannelInfo info={channelInfo} />

                    <div className="comments mt-5">
                        <div>
                            <h1 className='font-bold text-xl pb-8'>{commentsList.length} Comments</h1>
                        </div>
                        {commentsList.map((comment) => <Comments key={comment.id} info={comment} />)}
                    </div>
                </div>

                <div className="recomendedVideos col-span-4 gap-4">

                    <div className='border-t-2 border-x-2 p-4 rounded-t-md  max-h-[67vh] overflow-y-scroll flex flex-col-reverse min-h-[64vh]'>
                        {messagesList.map((mess, index) => <LiveChat key={index} name={mess.name} message={mess.message} />)}
                    </div>

                    <div className='mb-2 border-2 rounded-b-md py-2'>
                        <input className='w-[75%] px-4 py-1 outline-none border-none' placeholder='Say Something...' value={myMessage.message} type="text" onChange={(e) => setMyMessage({
                            name: "Abhishek Rawat",
                            message: e.target.value
                        })} />
                        <button className='ms-2 bg-red-600 px-4 py-1 rounded-md text-white' onClick={() => handleChat()}>Send</button>
                    </div>
                    {popularVideos.map((video) => <RecomendedVideos key={video.id} info={video} />)}
                </div>

            </div>

        </div>
    );
};
export default Watch;