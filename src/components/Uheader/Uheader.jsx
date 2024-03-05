import React, { useState } from 'react'
import Data from '../Data/Data'
import UserList from '../UserList/UserList'

const uInfos = Data.map(item=>{
    return(
      <UserList
        key={item.id}
        emp={item.empId}
        name={item.name}
        dob={item.dob}
        role={item.role}
      />
    )
  })

  const EmployeeData = [
    { name: 'Hariharachandru', empNo: '1', dob: '30-04-2001', role: 'Front End Developer' },
    { name: 'Arjun', empNo: '2', dob: '16-11-2000', role: 'Software Engineer' },
    { name: 'Mahesh', empNo: '3', dob: '30-01-2000', role: 'Web Developer' },
    { name: 'Kumaran', empNo: '4', dob: '19-04-1998', role: 'QA Engineer' }

]
 
const EmployeeCard = ({ employee }) => {
    return (
        <div className="card">
            <p>EMP ID: {employee.empNo}</p>
            <p>Name: {employee.name}</p>
            <p className='text-orange-400'>DOB: {employee.dob}</p>
            <p className='text-zine-200'>Role: {employee.role}</p>
        </div>
    )
}

function Uheader() {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState(EmployeeData)
    const [selectedEmployee, setSelectedEmployee] = useState(null)

    const handleSearch = (e) => {
        const term = e.target.value
        setSearchTerm(term)
        const results = EmployeeData.filter((employee) =>
            employee.name.toLowerCase().includes(term.toLowerCase())
        )
        setSearchResults(results)
        setSelectedEmployee(null)
    }
 
    const handleSuggestionClick = (employee) => {
        setSelectedEmployee(employee)
    }
 
    const handleSearchIconClick = () => {
        setSelectedEmployee(searchResults[0]) // Select the first search result by default
    }
 
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchResults.length > 0) {
            setSelectedEmployee(searchResults[0]) // Select the first search result when Enter is pressed
        }
    }


  return (
    <div>
        <div className='flex place-content-end text-zine-200 md:hidden'>
            <img className='h-16 ' src='images/Group 46@2x.png'/>
        </div>

        <div className='flex justify-center items-center mt-7 md:flex md:-mt-20 pl-5 md:-pt-8'>
            <img className='h-20 w-14 pt-4 md:block lg:block xl:block'
            src='images/moptro logo@2x.png'
            />
        </div>
         <div className='flex justify-center text-white lg:mr-7 '>
            <input
            className='m-7 bg-zine-50 border-transparent outline-none p-5 w-full h-8 rounded-full lg:w-1/2'
            type='text'
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
            />
        </div>

        <div className='w-5/6 -mt-14 pr-3 flex justify-end'>
            <button 
            onClick={handleSearchIconClick}
            className='text-white size-0 lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
        </div>

        <div className=' p-3 absolute left-12 z-10 mt-8 w-56 origin-top-right rounded-md bg-zine-50 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" md:w-2/3 mr-20 lg:w-1/2 ml-96 '>
        {searchTerm && (
                <div className="suggestions">
                    {searchResults.map((employee, index) => (
                        <div
                            className="suggestion"
                            key={index}
                            onClick={() => handleSuggestionClick(employee)}
                        >
                            {employee.name}
                        </div>
                    ))}
                </div>
            )}

         {selectedEmployee && (
                <div className="cards-container">
                    <EmployeeCard employee={selectedEmployee} />
                </div>
            )}
            {!selectedEmployee && (
                <div className="cards-container">
                    {EmployeeData.map((employee, index) => (
                        <EmployeeCard key={index} employee={employee} />
                    ))}
                </div>
            )}

        </div>
        
         

        // <div>
        //    {uInfos} 
        // </div>
        
    </div>
    
  )
}

export default Uheader