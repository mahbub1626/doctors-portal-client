import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, address, description, img } = testimonial;
    return (
        <div className="card rounded-lg shadow-2xl ">
            <div className="card-body  text-left ">
                <p>{description}</p>
                <div className="card-actions gap-8 mt-9">
                    <div>
                        <img src={img} alt="" className='border-1 rounded-full border-white outline outline-primary outline-2 outline-offset-2 w-16' />
                    </div>
                    <div>
                        <h2 className="text-xl">{name}</h2>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;