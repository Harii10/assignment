import React,{useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'

function Dashboard(){

    return(
        <div className='h-lvh mt-40 bg-black text-white md: mt-14 '>
            <div className='flex -m-20 place-content-end md:hidden'>
                <img className='h-16 mr-24 -mt-16' src='images/Group 46@2x.png'/>
            </div>

             <div className='flex justify-center items-center mt-20 md:flex md:-mt-20 pl-5 md:-pt-8 '>
                <img className='h-20 w-14 pt-4 lg:h-20 w-20'
                src='images/moptro logo@2x.png'
                />
            </div>

            <div className='justify-center items-center pt-1 bg-zine-50 h-3/4 m-5 md:w-lvw lg:h-lvh w-full 
             '>
                <div className='bg-zine-400 h-10 w-full pt-2 text-sm text-center rounded-full md:w-full lg:h-14 pt-3 text-xl'>
                    <span>Employee Productivity Dashboard</span>
                </div>

                <div className='text-xs lg:text-xl m-10 '>
                    <ul className=''>
                        <li className='m-4 lg:mr-12'>Productivity on Monday <span className='grid -mt-4  place-content-end text-zine-200'>4%</span></li>
                        <input className='ml-4 bg-zine-900 h-2 w-5  border border-zine-200 rounded-full' disabled/>

                        <li className='m-4 lg:mr-12'>Productivity on Tuesday <span className='grid -mt-4  place-content-end text-zine-200'>92%</span></li>
                        <input className='ml-4 bg-zine-900 h-2 w-1/2  border border-zine-200 rounded-full' disabled/>

                        <li className='m-4 lg:mr-12'>Productivity on Wednesday <span className='grid -mt-4  place-content-end text-zine-200'>122%</span></li>
                        <input className='ml-4 bg-zine-900 h-2 w-2/3  border border-zine-200 rounded-full' disabled/>

                        <li className='m-4 lg:mr-12'>Productivity on Thursday <span className='grid -mt-4 place-content-end text-zine-200'>93%</span></li>
                        <input className='ml-4 bg-zine-900 h-2 w-1/2  border border-zine-200 rounded-full' disabled/>

                        <li className='m-4 lg:mr-12'>Productivity on Friday <span className='grid -mt-4 place-content-end text-zine-200'>89%</span></li>
                        <input className='ml-4 bg-zine-900 h-2 w-1/2  border border-zine-200 rounded-full' disabled/>

                        <li className='m-4 lg:mr-12'>Productivity on Saturday <span className='grid -mt-4 place-content-end text-zine-200'>98%</span></li>
                        <input className='ml-4 bg-zine-900 h-2 w-1/2  border border-zine-200 rounded-full' disabled/>
                    </ul>    
                </div> 
            </div>
        </div>
    )
}

export default Dashboard