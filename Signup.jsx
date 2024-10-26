import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  
  const [input, setInput] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const formHandler1 = (event) => {
    const obj1 = {
      ...input,
      [event.target.name]: event.target.value,
    };
    setInput(obj1);
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!input.username) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!input.email) {
      errors.email = 'email is required';
      isValid = false;
    }

    if (input.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const signup = () => {
    if (validateForm()) {
      navigate('/login');
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className='w-1/4 items-center flex justify-center border-2 rounded-md border-white flex-col backdrop-blur-md mb-16'>
      <div className='mx-4 my-8'>
        <p className='text-slate-100 text-2xl font-bold w-full '>Signup</p>
      </div>
      <div className='w-full flex items-center justify-center flex-col px-8'>
        <input
          type='text'
          name='username'
          value={input.username}
          onChange={formHandler1}
          placeholder='Enter Your Username'
          required
          className='h-10 w-full bg-black rounded text-white border border-white my-2 mb-4 mx-4'
        />
        {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}

        <input
          type='email'
          name='email'
          value={input.email}
          onChange={formHandler1}
          placeholder='Enter Your Email'
          required
          className='h-10 w-full bg-black rounded text-white border border-white my-2 mb-4 mx-4'
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

        <input
          type='password'
          name='password'
          value={input.password}
          onChange={formHandler1}
          placeholder='Enter Your Password'
          required
          className='h-10 w-full bg-black rounded text-white border border-white my-2 mb-4 mx-4'
        />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
      </div>
      <div className='my-4 w-full flex items-center justify-center '>
        <button
          type='submit'
          className='w-full bg-white h-10 border border rounded mx-8 text-xl font-bold'
          onClick={signup}
        >
          Signup
        </button>
      </div>
      <div className='mx-4 my-2 mb-4'>
        <p className='text-slate-200 w-full'>
          Already have an Account? <Link to="/login" className='text-blue-500'>Login</Link>
        </p>
      </div>
      <div className='my-4 w-full flex items-center justify-center '>
        <button className='w-full bg-white h-10 border border rounded mx-8 mb-8'>Continue with Google</button>
      </div>
    </div>
  );
}

export default Signup;
