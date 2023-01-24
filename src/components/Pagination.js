import React, { useEffect, useState } from 'react';

const Pagination = ({ users, handlePagination, currentPage }) => {
    const [pages, setPages] = useState([])
    const limit = 3;
    useEffect(() => {
        const usersLength = users.length;
        const numberOfpages = Math.ceil(usersLength / limit)
        setPages(numberOfpages)
    }, [users])



    return (
        <div className="flex justify-center py-5 my-6">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item "><a href="#test"
                        className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500  focus:shadow-none ${(currentPage) === 0 ? "pointer-events-none" : ""}`}
                        onClick={(e) => handlePagination(currentPage - 1, limit, e)} >Previous</a></li>
                    {
                        [...Array(pages).keys()].map((page, i) => <li key={i} className="page-item "><a
                            className={`page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 rounded  hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md mr-3 ${currentPage === i ? "bg-blue-600 text-white" : "text-black"} `}
                            href={`#${i}`} onClick={(e) => handlePagination(i, limit, e)}> {i + 1} <span className="visually-hidden">(current)</span></a></li>)

                    }

                    <li className={`page-item`}><a
                        className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${(currentPage + 1) === pages ? "pointer-events-none" : ""}`}
                        aria-disabled="true"
                        tabIndex="-1"
                        href="#test" onClick={(e) => handlePagination(currentPage + 1, limit, e)}>Next</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;