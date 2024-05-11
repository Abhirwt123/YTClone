import React, { useEffect, useState } from 'react';
import youtubeImg from '../../images/youtube.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../Redux/authSlice';
import { ValidateForm } from '../../utils/validate';

function SignUp() {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('')
    const { isAuthenticate } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials, [name]: value
        })
        dispatch(setUserData(credentials))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password } = credentials;
        const message = ValidateForm(name, email, password)
        setErrorMessage(message)
        console.log(errorMessage);
        if (errorMessage && isAuthenticate) {
            navigate('/')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('userData')) {
            navigate('/')
        }
    }, [])
    return (
        <div className="flex justify-center items-center h-screen bg-red-200">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-10/12 m-auto">
                {/* Image */}
                <div className="md:w-1/2 overflow-hidden">
                    <img
                        src={youtubeImg}
                        alt="SignUp"
                        className="w-full h-full object-cover scale-125 "
                    />
                </div>
                {/* Form */}
                <div className="md:w-1/2 p-4">
                    <h2 className="text-gray-800 text-3xl font-semibold">Create Your Account</h2>
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                value={credentials.name}
                                id="name"
                                name='name'
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={credentials.email}
                                id="email"
                                name='email'
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                value={credentials.password}
                                name='password'
                                onChange={handleChange}
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white p-3 rounded-md focus:outline-none hover:bg-red-700"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-4 text-gray-600">
                        Already have an account?{' '}
                        <a href="#" className="text-blue-500">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
