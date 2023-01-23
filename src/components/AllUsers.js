import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div className='flex flex-col gap-4 mt-8'>
            {
                users.map(user => <UserCard
                    key={user.id}
                    user={user}
                ></UserCard>)
            }
        </div>
    );
};

export default AllUsers;