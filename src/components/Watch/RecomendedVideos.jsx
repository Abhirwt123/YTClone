import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const RecomendedVideos = ({ info }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate=useNavigate()
    const pathname=window.location.pathname.replace(/\//g, '');

    const givenDate = new Date(info?.snippet?.publishedAt);
    const currentDate = new Date();
    const differenceInMs = currentDate - givenDate;
    const daysDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const handelWatchPage = () => {
        // console.log(info);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('v', info.id);
        setSearchParams(newSearchParams);
        if(window.location.search.replace(/\?/g, '').slice(0,12)=="search_query"){
            navigate(`/watch?v=${info.id.videoId}`)
        }
    };
    return (
        <div onClick={handelWatchPage} className="mb-4">
            <div className="flex gap-2  ">
                <div className={`video min-w-[170px] ${pathname=='watch'?"max-w-[170px]":'w-[420px]'}`}>
                    <img src={info?.snippet?.thumbnails?.medium?.url} className='object-cover h-full w-[100%] rounded-md' alt="" />
                </div>
                <div className="VDetails">
                    <div className={`title ${pathname=='/watch'?'text-sm':"text-lg"}`}>{info?.snippet?.title.slice(0, 50) + "..."}</div>
                    <p className={`channel text-zinc-400 py-1 ${pathname=='watch'?"text-xs":"text-base"}`}>{info?.snippet?.channelTitle}</p>
                    <div className={`views text-zinc-500 ${pathname=='watch'?"text-xs":"text-base"}`}>{info?.statistics?.viewCount} views - {daysDifference} days</div>
                </div>
            </div>

        </div>
    )
}

export default RecomendedVideos
