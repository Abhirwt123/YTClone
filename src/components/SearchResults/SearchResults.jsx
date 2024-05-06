import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCHTAB_URL } from '../../utils/constants';
import RecomendedVideos from '../Watch/RecomendedVideos';

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([])
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('search_query');
    useEffect(() => {
        getSearchResults()
    }, [searchQuery])

    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_SEARCHTAB_URL+searchQuery);
        const json = await data.json();
    
            setSearchResults(json.items)
        
    }
    if( !searchResults) return;
    return (
        <div className='px-12 py-4 max-h-[88vh] overflow-y-scroll w-full'>
            {
                searchResults.map((result) => <RecomendedVideos key={result.id.videoId} info={result} />
                )
            }
        </div>
    )
}

export default SearchResults
