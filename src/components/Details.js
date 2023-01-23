import React from 'react';
const Details = ({ user }) => {
    const { name, email, phone, company, address, website, id, username } = user;
    return (
        <div className="collapse pt-20" id={`collapse-${id}`}>
            <div className='flex flex-col gap-6'>
                <div>
                    <p><strong>Description</strong></p>
                    <p><span className='font-semibold'>Company Name</span> : {company?.name}  <span className='font-semibold'>Phrase</span> : {company?.catchPhrase} <span className='font-semibold'>Tags</span> : {company?.bs} </p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div>
                        <div className='py-2'>
                            <p><strong>Contact Person</strong></p>
                            <p>{name}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>Email</strong></p>
                            <p>{email}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>Phone</strong></p>
                            <p>{phone}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>Web</strong></p>
                            <p>{website}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>UID</strong></p>
                            <p>{username}</p>
                        </div>
                    </div>
                    <div>
                        <div className='py-2'>
                            <p><strong>Address</strong></p>
                            <p>{address?.street}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>City</strong></p>
                            <p>{address?.city}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>Suite</strong></p>
                            <p>{address?.suite}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>Zipcode</strong></p>
                            <p>{address?.zipcode}</p>
                        </div>
                        <div className='py-2'>
                            <p><strong>Geo</strong></p>
                            <p>lat: {address?.geo?.lat}, lng:{address?.geo?.lng} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;