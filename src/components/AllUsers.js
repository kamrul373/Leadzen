import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import UserCard from './UserCard';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                setUsers(users)
                setLoading(false)
            })
    }, [])
    if (users) {
        const usersLength = users.length;
        const limit = 3;

    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='flex flex-col  gap-8 mt-8'>
            {
                users.map(user => <UserCard
                    key={user.id}
                    user={user}
                ></UserCard>)
            }
            <div className="flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item disabled"><a href="#"
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                            href="#" tabIndex="-1" aria-disabled="true">Previous</a></li>
                        <li className="page-item active"><a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                            href="#"> 1<span className="visually-hidden">(current)</span></a></li>
                        <li className="page-item"><a
                            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AllUsers;