import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function Login() {
  const location = useLocation();
  console.log(location);
 const navigate=useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  

  const formHandler = (event) => {
    const obj = {
      ...data,
      [event.target.name]: event.target.value,
    };
    setData(obj);
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const login = () => {
    if (validateForm()) {
      navigate('/books')
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className='w-1/4 items-center flex justify-center border-2 rounded-md border-white flex-col backdrop-blur-md mb-16'>
      <div className='mx-4 my-8'>
        <p className='text-slate-100 text-2xl font-bold w-full'>Login</p>
      </div>
      <div className='w-full flex items-center justify-center flex-col px-8'>
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={formHandler}
          placeholder='Enter Your Email'
          required
          className='h-10 w-full bg-black rounded text-white border border-white my-2 mb-4 mx-4'
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

        <input
          type='password'
          name='password'
          value={data.password}
          onChange={formHandler}
          placeholder='Enter Your Password'
          minLength={8}
          className='h-10 w-full bg-black rounded text-white border border-white my-2 mb-4 mx-4'
        />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
      </div>
      <div className='my-4 w-full flex items-center justify-center'>
        <button
          type='submit'
          className='w-full bg-white h-10 border border rounded mx-8 text-xl font-bold'
          onClick={login}
        >
          Login
        </button>
      </div>
      <div className='mx-4 my-2 mb-4'>
        <p className='text-slate-200 w-full'>
          Don't have an Account? <Link to='/signup' className='text-blue-500'>Signup</Link>
        </p>
      </div>
      <div className='my-4 w-full flex items-center justify-center'>
        <button className='w-full bg-white h-10 border border rounded mx-8'>Continue with Google</button>
      </div>
      <div className='my-4 w-full flex items-center justify-center'>
        <button className='w-full bg-white h-10 border border rounded mx-8 mb-6'>Continue with Email</button>
      </div>
    </div>
  );
}

export default Login;

