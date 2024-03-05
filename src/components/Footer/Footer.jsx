import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
  return (
        <footer className=" w-ful sticky md:w-full h-28 md:bg-black md:border border-zinc-800 md:mt-60 ">
          <div className='hidden md:flex flex-row justify-center my-9 gap-14'>
            <div>
              <Link path='/'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </Link>
            </div>

            <div>
              <Link path='/'>
                <img className=' text-white' src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png' width={40}/>
              </Link>
            </div>

            <div>
              <Link path='/'>
                <img src='https://icon-library.com/images/file-icon/file-icon-28.jpg' width={22}/>
              </Link>
            </div>
        </div>

        <Link className='justify-end md:hidden'>
            <div className='flex h-14 bg-zine-20 md:hidden'>
                <NavLink to ='dashboard'
                    className={({isActive}) =>
                    `block p-4 pl-16 w-1/2 duration-200 ${isActive ?
                     "bg-zine-10" : "text-gray-500"}`
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zine-200">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                </NavLink>
            
                <Link>
                     <NavLink to ='userinfo'
                    className={({isActive}) =>
                    `block p-4 pl-16 w-40 duration-200 ${isActive ?
                     "bg-zine-10" : "text-gray-500"}`
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zine-200">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </Link>
                
        </div>
        </Link>
        
      </footer>
  )
}

export default Footer