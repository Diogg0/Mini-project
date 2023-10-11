import React from 'react';

type signupProps = {
    
};

const signup:React.FC<signupProps> = () => {
    
    return <form className="space-y-6 px-6 px-4">
        <h1 className= "text-xl text-dark-pink"><b>Sign up</b></h1>
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-dark-pink'>
            Email:
        </label>
        <input 
        type='email' 
        name='email' 
        id='email' 
        className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500-block w-full p-2.5
            bg-white-600 border-black placeholder-grade-400 text-black
            '
        placeholder='name@dypatil.edu'
        />
    </div>
    <div>
        <label htmlFor='Roll No:' className='text-sm font-medium block mb-2 text-dark-pink'>
            Roll No:
        </label>
        <input 
            type='roll no' 
            name='roll no' 
            id='roll no' 
            className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500-block w-full p-2.5
                bg-white-600 border-black placeholder-grade-400 text-black
                '
            placeholder='roll no'
        />
    </div>
    <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-dark-pink'>
            Password:
        </label>
        <input 
            type='password' 
            name='password' 
            id='password' 
            className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500-block w-full p-2.5
                bg-white-600 border-black placeholder-grade-400 text-black
                '
            placeholder='password'
        />
    </div>

    <button type="submit" className='w-200 text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-8 py-2.5 text-center bg-pink hover:bg-dull-pink'> 
        Sign Up
    </button>

    <div className='text-sm font-medium text-gray-500'>
        Already Registered?     <p>  </p>
        <a href="#" className='text-blue-700 hover:underline'>
            Log in
        </a>
    </div>


    </form>
}
export default signup;