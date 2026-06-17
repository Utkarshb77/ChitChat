import React from 'react'

function User({ user }) {
    if (!user) return null;
    return (
        <div>
            <div className='flex items-center gap-4 p-2 cursor-pointer hover:bg-slate-800'>
                <div className="avatar avatar-online">
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt={user.name} />
                    </div>
                </div>

                <div>
                    <h1 className='font-bold'>{user.name}</h1>
                    <span className='text-sm text-gray-500'>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default User

