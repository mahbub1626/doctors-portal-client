import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';


const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
        },
        {
            id: 2,
            name: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
        },
        {
            id: 3,
            name: 'Winson Herry',
            address: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
        },
    ]
    return (
        <section className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl font-thin  mr-14'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} alt=""  className='w-24 lg:w-48'/>
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                {
                    testimonialsData.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;