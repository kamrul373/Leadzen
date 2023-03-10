import React from 'react';
import Details from './Details';
const UserCard = ({ user }) => {
    return (
        <div className='card shadow-lg rounded-xl bg-white px-12 py-8 w-[90%] mx-auto'>
            <div className='grid md:grid-cols-5 justify-center items-center gap-4'>
                <div>{user?.company?.name}</div>
                <div>
                    <p>
                        <strong>Contact</strong>
                    </p>
                    {user?.name}
                </div>
                <div>
                    <p>
                        <strong>City</strong>
                    </p>
                    {user?.address?.city}
                </div>
                <div>
                    <p>
                        <strong>Phone</strong>
                    </p>
                    {user?.phone}
                </div>
                <div>
                    <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${user?.id}`} aria-expanded="false" aria-controls={`collapse-${user?.id}`}>
                        View Details
                    </button>
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                {/* details */}
                <Details user={user}></Details>
            </div>
        </div>
    );
};

export default UserCard;