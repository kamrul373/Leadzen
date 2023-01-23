import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Details from './Details';
const UserCard = ({ user }) => {
    return (
        <div className='card'>
            <div className="w-full px-12">
                <div className=" w-full rounded-2xl bg-white p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>View Details</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Details></Details>
                            </>
                        )}
                    </Disclosure>

                </div>
            </div>
        </div>
    );
};

export default UserCard;