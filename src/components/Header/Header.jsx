import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
    <header className="hidden md:block md:sticky top-0 md:h-20 shadow-xl md:bg-black md:border border-zinc-800 
    lg:block lg:sticky top-0 lg:h-20 shadow-xl lg:bg-black lg:border border-zinc-800">
    <nav className=" md:px-4 px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
        <Link>
            <img className='h-16 w-12 md:hidden lg:block' src='images/Group 3@2x.png'/>
        </Link>
            <div
                className=" justify-between w-full md:w-lvw ">
                <ul className="flex flex-col py-4 font-medium">

                    <li className='md:flex justify-end pr-32 lg:-mt-14 mr-20'>
                        <NavLink to ='dashboard'
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200  ${isActive ?
                                "text-zine-200" : "text-gray-500"} 
                                lg:hover:bg-transparent lg:border-0 hover:text-zine-200 lg:p-0`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>

                    <li className='md:flex justify-end pr-8 -mt-10 lg:-mt-6'>
                        <NavLink to ='userinfo'
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border  ${isActive ?
                                "text-zine-200" : "text-gray-500"} 
                                lg:hover:bg-transparent lg:border-0 hover:text-zine-200 lg:p-0`
                            }
                        >
                            Infos
                        </NavLink>
                    </li>
                    
                  </ul>
            </div>
        </div>
    </nav>
    </header>
    </div>
  )
}

export default Header