import React from 'react';
import { Disclosure } from '@headlessui/react'
const Details = () => {
    return (
        <div>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
            </Disclosure.Panel>
        </div>
    );
};

export default Details;