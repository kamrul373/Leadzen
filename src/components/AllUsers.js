import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Pagination from './Pagination';
import UserCard from './UserCard';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [tempUsers, setTempUsers] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                setUsers(users)
                setTempUsers(users.slice(0, 3))
                setLoading(false)
            })
    }, [])

    const handlePagination = (page, limit, e) => {
        e.preventDefault()
        setCurrentPage(page)
        setTempUsers(users.slice(page * limit, (limit * (page + 1))))
    }

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='flex flex-col  gap-8 mt-8'>
            {
                tempUsers.map(user => <UserCard
                    key={user.id}
                    user={user}
                ></UserCard>)
            }
            <Pagination users={users} handlePagination={handlePagination} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default AllUsers;