import React from 'react';
import { FaRegClock } from "react-icons/fa";

const Address = () => {
    return (
        <div className='flex justify-between my-4'>
            <div className="card w-96 shadow-xl  bg-gradient-to-r from-primary to-secondary text-white">
               
                    <div className=' my-auto flex justify-around p-4'>
                        <div className=''>
                            <FaRegClock className='w-20  h-20'/>
                        </div>
                        <div>
                            <h1>Opening hour</h1>
                            <p>We are using cookie</p>
                        </div>
                    </div>
                
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <div className='card-actions flex justify-between'>
                        <div className="">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="">

                            <p>We are using cookie</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <div className='card-actions flex justify-between'>
                        <div className="">
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="">

                            <p>We are using cookie</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Address;