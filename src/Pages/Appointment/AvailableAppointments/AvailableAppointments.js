import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    // role 3 of React Query
    const { data: appointmentOption = [],  refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    })


    // role 2 of React Query
    // const {data: appointmentOption = []}= useQuery({
    //     queryKey:['appointmentOption'],
    //     queryFn:()=> fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=>res.json())
    // })


    // role 1 (first time i was learn it)

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    // }, [])

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    key={treatment._id}
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={ refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;