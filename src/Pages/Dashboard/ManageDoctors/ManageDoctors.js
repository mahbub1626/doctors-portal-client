import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery({
        queryKey: ['docotrs'],
        queryFn: async () => {
            try {
                const rest = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorizatio: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await rest.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDoctorDelete = (doctor) => {
        const agree = window.confirm(`Are you sure? You want to delete: ${doctor.name}`);
        if (agree) {
            // console.log('Deleting DOCTOR with id: ', doctor._id)
            fetch(`http://localhost:5000/doctors/${doctor._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.error('User deleted successfully.')
                    }
                })

        }

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl my-5'>Manage Doctors: {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr
                                key={doctor._id}
                            >
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={doctor.img} alt='' />
                                    </div>
                                </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td><button onClick={() => handleDoctorDelete(doctor)} className="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;