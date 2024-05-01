import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../Redux/appSlice';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecomendedVideos from './RecomendedVideos';
import { GOOGLE_URL } from '../../utils/constants'

const Watch = () => {
    const [searchParams] = useSearchParams();
    const menu = useSelector((store) => store.app.isMenuOpen);
    const dispatch = useDispatch()
    const [popularVideos, setPopularVideos] = useState()
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
    }, [])
    if (!popularVideos) return
    return (
        <div className={`${!menu ? "px-32" : "px-8"} py-4 w-full`}>
            <div className="wrap flex gap-8">
                <div className="video-box w-full ">
                    <iframe className='w-full h-[400px] rounded-xl' src={`https://www.youtube.com/embed/${searchParams.get('v')} `} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="recomendedVideos flex flex-col gap-4">
                    {popularVideos.map((video) => <RecomendedVideos key={video.id} info={video} />)}

                </div>
                <div className="comments">
                    {/* comments heare */}
                </div>
            </div>

        </div>
    );
};
export default Watch;