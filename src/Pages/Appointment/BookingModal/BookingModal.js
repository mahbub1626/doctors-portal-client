import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP")

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointment: date,
            slot,
            treatment: name,
            patient: name,
            phone,
            email,
        }
        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast
        console.log(date, slot, name, phone, email);
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full border border-gray-100" />
                        <select name='slot' className="select select-bordered w-full">
                            {

                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input w-full border border-gray-100" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full border border-gray-100" />
                        <input name='email' type="text" placeholder="Email" className="input w-full border border-gray-100" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;