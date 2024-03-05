import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'



function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      validateForm({ ...formData, [name]: value });
    };
  
    const validateForm = (data) => {
      const errors = {};
      const emailRegex = /\S+@\S+\.\S+/;

      if (!data.email.trim()) {
        errors.email = 'Email is required';
      } else if (!emailRegex.test(data.email)) {
        errors.email = 'Email is invalid';
      }

      if (!data.password.trim()) {
        errors.password = 'Password is required';
      } 
  
      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    };
  
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        navigate('/dashboard');
    }

    return(
        <div className='flex justify-center h-lvh w-lvw overflow-hidden bg-black '>
            <div 
            className='flex flex-col items-center'>
            
             <img 
            src='images/Group 3@2x.png'
            className='h-24 w-16 pt-7 m-4 md:h-28 w-28'
            />

            <h3 className='-mt-3 text-zine-900 font-thin md:text-xl'>We are ELectric</h3>
            
           <input 
            name='email'
            value={formData.email}
            onChange={handleChange}
            type='email' 
            placeholder='Email Id' 
            className=' invalid:border-red-500 required:border-red-500 w-64 h-8 mt-16 p-6 bg-zine-500 shadow-inner shadow-zine-500/70 text-white rounded-full outline-none md:w-96 
            '/><p className='text-red-500 -mt-4 ml-32 text-xs font-extralight'>{errors.email}</p>

            <input 
            name='password'
            value={formData.password}
            onChange={handleChange}
            type='password' 
            placeholder='Password' 
            className=' invalid:border-red-500 required:border-red-500 w-64 h-8 mt-16 p-6 bg-zine-500 shadow-inner shadow-zine-500/70 text-white rounded-full outline-none md:w-96'/><p className=' text-red-500 -mt-4 ml-32 text-xs font-extralight'>{errors.password}</p>

            <button 
                onClick={handleClick}
                type='submit' 
                className='w-64 h-14 mt-24 bg-gradient-t bg-zine-300 to-zine-500 shadow-inner shadow-zine-500/70 text-white rounded-full'>Log in</button>
            

            <h2 className='text-zine-200 mt-8 cursor-pointer'>Forget Password?</h2>
            </div>             

        </div>
    )
}

export default Login