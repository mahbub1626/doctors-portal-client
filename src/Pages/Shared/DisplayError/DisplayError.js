import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div className='my-5 mx-auto w-60'>
            <p className="text-red-500">Something went wrong!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button className='btn btn-sm btn-primary text-white' onClick={handleLogout}>Sign out</button></h4>
        </div>
    );
};

export default DisplayError;