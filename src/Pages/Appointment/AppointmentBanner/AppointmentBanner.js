import appointment from '../../../assets/images/appointment.png';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header
        className='my-6'
            style={{
                   background: `url(${appointment})` 
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-6 text-white'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onDayClick={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;