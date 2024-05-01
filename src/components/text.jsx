import React, { useEffect, useState } from 'react';
import { CHANNEL_URL } from '../utils/constants';

const Text = () => {
    const [popularVideos, setPopularVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            try {
                const response = await fetch(CHANNEL_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPopularVideos(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getVideos();
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    // console.log(popularVideos);

    return (
        <div>
            {/* Render your data here */}
        </div>
    );
};

export default Text;
