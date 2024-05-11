import React, { useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";
import { YOUTUBE_LOGO, YOUTUBE_SEARCH_URL } from '../utils/constants';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Redux/appSlice';
import { useNavigate } from 'react-router-dom';
import { addCache } from '../Redux/searchSlice';
import Profile from './MyProfile/Profile';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryResults, setSearchQueryResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const cacheData = useSelector((store) => store.search)
    const [showProfile,setShowProfile]=useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getFromLocal = localStorage.getItem('userData');
    const { name } = JSON.parse(getFromLocal);

    const handelMenu = () => {
        dispatch(toggleMenu())
    }

    const handleToHome = () => {
        navigate('/')
    }

    // debouncinig concept                               

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cacheData[searchQuery]) {
                setSearchQueryResults(cacheData[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer)
        }

    }, [searchQuery]);

    const getSearchSuggestions = async () => {

        try {

            const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
            const json = await data.json();
            setSearchQueryResults(json[1])
            dispatch(addCache(
                { [searchQuery]: json[1] })
            )
        } catch (error) {
            console.log(error);
        }

    }

    const handleSearch = async (e) => {
        e.preventDefault()
        navigate(`/results?search_query=${searchQuery}`)
    }

    const handleSearchValues = (value) => {
        setShowSuggestions(false)
        navigate(`/results?search_query=${searchQuery}`)
    }

    

    return (
        <div id='header' className='px-4 py-3 flex justify-between items-center relative'>
            <div className="left flex items-center gap-4">
                <div className="menuIcon cursor-pointer" onClick={handelMenu}><IoIosMenu /></div>
                <div className="logo w-24 cursor-pointer" onClick={handleToHome}>{YOUTUBE_LOGO}</div>
            </div>
            <div className="mid relative w-6/12">
                <form action="#" className='flex items-center w-full'>
                    <input
                        ype="text"
                        id="searchBox"
                        placeholder='Search'
                        className='rounded-s-full border px-4 py-2 w-full'
                        value={searchQuery}
                        onFocus={() => setShowSuggestions(true)}
                        // onBlur={() =>  setShowSuggestions(false)}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button
                        className='rounded-e-full border px-4 py-2'
                        onClick={handleSearch}
                    >
                        <CiSearch className='font-6xl' />
                    </button>
                </form>
                {showSuggestions && <div className='absolute z-10 bg-gray-100 w-[92%] rounded-lg'>
                    <ul>
                        {searchQueryResults.map((res, index) => <li onClick={() => handleSearchValues(res)} className='px-4 py-2 flex items-center gap-2 hover:bg-gray-200' key={index}><CiSearch />{res}</li>)}
                    </ul>
                </div>}
            </div>
            <div className="right">
                <div className="icons flex items-center gap-4 ">
                    <div className="create"><VscDeviceCameraVideo /></div>
                    <div className="notification"><IoIosNotificationsOutline /></div>
                    <div className="profile">
                        <div className="img-wrap cursor-pointer" onClick={()=>setShowProfile(!showProfile)}>
                            <p className='w-8 h-8 bg-blue-800 rounded-full text-center '>
                                <span className='leading-[30px] text-xl text-white font-semibold'>{name.slice(0, 1)}</span>
                            </p>
                        </div></div>
                </div>
            </div>
            <Profile showProfile={showProfile} />
        </div>
    );
};

export default Header;
