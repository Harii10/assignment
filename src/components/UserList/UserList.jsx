import React from 'react'


function UserList(props) {
    
    
  return (
    <div>
        <div className='h-full bg-black text-white '>
            <div className='bg-zine-50 h-60 w-64 m-8 mt-14 rounded-xl text-sm md:hover:scale-105 duration-200 md:shadow-xl shadow-zine-500/70 md:cursor-pointer lg:hover:scale-105 lg:w-2/3'>
            <span className='flex justify-end items-end border-2 border-black w-5 pr-3 ml-auto pl-4 text-sm rounded-full'>{props.emp}</span>
                <ul className='grid '>
                    <li className='m-4'>EMP Id : <span className='font-semibold'>{props.emp}</span></li>
                    <li className='m-4'>Name : <span className='font-semibold'>{props.name}</span></li>
                    <li className='m-4'> DOB : <span className='text-orange-400'>{props.dob}</span></li>
                    <li className='m-4'>Role : <span className='text-zine-200'>{props.role}</span></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default UserList