import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [userType, setUserType] = useState('rider');

    const handleUserTypeChange = () => {
        setUserType(userType === 'rider' ? 'driver' : 'rider');
    };
    return (
        <div className={`fixed h-full z-50 w-64 bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 bg bg-gray-200">
                <h1 className="text-lg font-bold text-black">Sidebar</h1>
                {isOpen && (
                    <button className="text-white focus:outline-none" onClick={toggleSidebar}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left text-black" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="">
                {/* Sidebar Content */}
                <div>
                    <div className='flex gap-2 justify-center items-center bg-gray-200 text-black w-full p-2'>
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                        <div>
                            <h2 className="text-lg font-bold">Tom Cook</h2>
                            <h3 className='text-base font-semibold'>+91 88309 79209</h3>
                        </div>
                    </div>
                    <div>
                        <ul className="p-2 flex flex-col gap-4 mt-3" onClick={toggleSidebar}>
                            <Link to={'/'} className="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</Link>
                            <Link to={'/profile'} className="p-2 hover:bg-gray-700 cursor-pointer">Profile</Link>
                            <Link to={'/'} className="p-2 hover:bg-gray-700 cursor-pointer">Settings</Link>
                            <Link to={'/'} className="p-2 hover:bg-gray-700 cursor-pointer">Logout</Link>
                        </ul>
                        <div className='bg-white w-full h-[0.1px]'></div>
                        <div className='flex flex-col items-center justify-center p-2 text-center'>
                            <div className=''>
                                {userType === 'rider' ? (
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUserTypeChange}>
                                        Become a Driver
                                    </button>
                                ) : (
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUserTypeChange}>
                                        Vehicle Details
                                    </button>
                                )}
                            </div>
                            <a href="tel:100" className="bg-red-500 hover:bg-red-700 rounded-full px-4 py-[7.5px] justify-center items-center text-center text-white font-bold mt-4 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="86" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>

                            </a>
                            <p className='font-semibold'>
                                Emergency Dial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {!isOpen && (
                <button className="fixed top-4 text-white bg-gray-800 p-3 rounded-r-full focus:outline-none" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </button>
            )}
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default App;
