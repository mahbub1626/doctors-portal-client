import React from 'react';

const AppointmentOption = ({ appointmentOption , setTreatment}) => {
    const { name,price, slots } = appointmentOption;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body  text-center">
                <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day.'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>${price}</small></p>
                <div className=" text-center">
                    <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary text-white"
                    onClick={()=> setTreatment(appointmentOption)}
                    >Book Appointment</label>
  
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;