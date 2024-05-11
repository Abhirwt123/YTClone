import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = ({ showProfile }) => {
    const navigate = useNavigate()
    const getFromLocal = localStorage.getItem('userData');
    const { email, name } = JSON.parse(getFromLocal);

    const handleLogout = () => {
        localStorage.clear('userData')
        navigate('/signUp')
    }
    
    return (
        <div className={`w-3/12 absolute  h-56 right-[50px] top-[40px] z-10 bg-gray-100 rounded-lg border-2 ${showProfile ? "block" : "hidden"}`}>
            <div className='w-full p-4  border-b-2 '>
                <div className="wrap rounded-lg text-start  m-auto flex items-center">
                    <div className="img-wrap">
                        <p className='w-12 h-12 bg-blue-800 rounded-full text-center '><span className='leading-[44px] text-2xl text-white font-semibold'>{name?name.slice(0, 1):"U"}</span> </p>
                    </div>
                    <div className="detail-wrap ms-4">
                        <p className="name mb-2 font-semibold">{name?name.slice(0, 1):"User 0001"}</p>
                        <p className="email mb-2 font-normal ">{email?email:"Example123@gmail.com"}</p>
                    </div>
                </div>
                <div className="btn_wrap mt-4 flex ms-16">
                    <button className='px-4 py-2 bg-blue-500 rounded-lg text-white' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;
  