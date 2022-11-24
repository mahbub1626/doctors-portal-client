import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostkey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostkey);

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-chi-two.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data)

        // upload imag and hosting in imgbb
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }
                    //  save doctor information to the database
                    fetch('https://doctors-portal-server-chi-two.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl my-5'>Add Doctor</h2>
            <div className='h-[800px]'>
                <div className='w-96'>

                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register('name', {
                                required: "Name is required"
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register('email', {
                                required: "Email is required"
                            })} className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Specialty</span></label>
                            <select
                                {...register('specialty', {
                                    required: 'Specialty is required'
                                })}
                                className="select input-bordered w-full">
                                {
                                    specialties.map(specialty => <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}</option>)
                                }
                            </select>
                            {errors.specialty && <p className='text-red-500'>{errors.specialty?.message}</p>}
                        </div>

                        {/* file/img upload */}
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="file"
                                {...register('image')}
                                className="input input-bordered w-full " />
                            {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full text-white mt-3' value='Add Doctor' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};
/**
 * Three places to store images
 * 1. Third party image hosting server **(genarel recomended    )
 * 2. File system of your server
 * 3. mongodb (database )
 */
export default AddDoctor;