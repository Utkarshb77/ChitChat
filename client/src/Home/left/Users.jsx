import React from 'react'
import User from './User';
import userGetAllUsers from '../../context/userGetAllUsers';

function Users() {
    const { allUsers, loading } = userGetAllUsers();

    return (
        <div style={{ maxHeight: "calc(82vh - 1vh)" }} className=' flex-help overflow-y-auto'>
            {loading ? (
                <div className="text-center py-4 text-gray-500">Loading users...</div>
            ) : allUsers && allUsers.length > 0 ? (
                allUsers.map((user) => (
                    <User key={user._id} user={user} />
                ))
            ) : (
                <div className="text-center py-4 text-gray-500">No other users found</div>
            )}
        </div>
    )
}

export default Users

