import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const menu = useSelector((store) => store.app.isMenuOpen);
    return (<> {menu &&
        <aside className="barStyle w-2/12 flex flex-col justify-between h-[calc(100vh-14.6vh)] overflow-y-scroll">
            <div className="optWrap">
                <div className="box border-b px-4 py-2 ">
                    <ul className='flex flex-col gap-4'>
                        {["Home", "Shorts", "Subscriptions"].map((list, index) => <li className='hover:bg-zinc-200 px-2 py-1 rounded-md' key={index}><a href="#">{list}</a></li>)}
                    </ul>
                </div>
                <div className="box border-b px-4 py-2">
                    <ul className='flex flex-col gap-4'>
                        {["History", "Watch Later", "Liked Videos"].map((list, index) => <li className='hover:bg-zinc-200 px-2 py-1 rounded-md' key={index}><a href="#">{list}</a></li>)}
                    </ul>
                </div>
                <div className="box border-b px-4 py-2">
                    <ul className='flex flex-col gap-4'>
                        {["HistoTrendingry", "Music", "Shopping", "Movie", "Podcaste", "Live", "Gaming", "News"].map((list, index) => <li className='hover:bg-zinc-200 px-2 py-1 rounded-md' key={index}><a href="#">{list}</a></li>)}
                    </ul>
                </div>
            </div>
        </aside>}
    </>
    );
};

export default Sidebar;
