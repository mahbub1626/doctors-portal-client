import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='mt-36'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className=" flex-col ">
                    <div className='text-center  mt-16'>
                        <h4 className='text-xl text-primary font-bold mb-2.5'>Contact Us</h4>
                        <h2 className='text-4xl font-thin text-white'>Stay connected with us</h2>
                    </div>
                    <div className="card mb-16">
                        <div className="card-body">
                            <div className="form-control">
                               
                                <input type="text" placeholder="Email address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                
                                <input type="text" placeholder="Subject" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                            </div>

                            <div className="mx-auto mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;