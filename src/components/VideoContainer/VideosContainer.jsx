import React, { useEffect, useState } from 'react'
import VideoList from '../VideoList'
import Videos from './Videos'
import { GOOGLE_URL } from '../../utils/constants'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const VideosContainer = () => {
    const [popularVideos, setPopularVideos] = useState()
    const [videoId, setVideoId] = useState(0)
    const menu = useSelector((store) => store.app.isMenuOpen)
    useEffect(() => {
        getVideos()
    }, [videoId])
    const getVideos = async () => {
        try {
            const data = await fetch(GOOGLE_URL + videoId);
            const json = await data.json();
            setPopularVideos(json.items);
            // console.log(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    if (!popularVideos) return
    return (
        <div className={`${menu ? "w-10/12" : "w-full"} overflow-y-scroll barStyle h-[calc(100vh-9vh)] pt-14 px-4`}>
            <VideoList setVideoId={setVideoId} />
            <div className="grid grid-cols-12 gap-6">
                {popularVideos.map((info) => <Videos key={info.id} info={info} />)}
            </div>
        </div>
    )
}

export default VideosContainer
