import React from 'react';
const Details = ({ user }) => {
    return (
        <div className="collapse" id={`collapse-${user?.id}`}>
            {user?.name}
        </div>
    );
};

export default Details;