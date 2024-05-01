import { useSearchParams } from "react-router-dom";

const RecomendedVideos = ({ info }) => {
    const [searchParams,setSearchParams] = useSearchParams();
    const givenDate = new Date(info?.snippet?.publishedAt);
    const currentDate = new Date();
    const differenceInMs = currentDate - givenDate;
    const daysDifference = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const handelWatchPage = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('v', info.id);
        setSearchParams(newSearchParams);
    };
    // console.log(info);
    return (
        <div onClick={handelWatchPage}>
            <div className="flex gap-2  ">
                <div className="video min-w-[150px]">
                    <img src={info?.snippet?.thumbnails?.default?.url} className='object-cover h-full w-[100%] rounded-md' alt="" />
                </div>
                <div className="VDetails w-50% ">
                    <div className="title text-sm">{info?.snippet?.title.slice(0, 50) + "..."}</div>
                    <p className="channel text-xs text-zinc-400 py-1">{info?.snippet?.channelTitle}</p>
                    <div className="views text-zinc-500 text-xs">{info?.statistics?.viewCount} views - {daysDifference} days</div>

                </div>
            </div>

        </div>
    )
}

export default RecomendedVideos
