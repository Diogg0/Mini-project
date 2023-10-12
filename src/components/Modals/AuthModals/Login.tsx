import { AuthModalState } from '@/atoms/authModalAtom';
import React from 'react';
import {useSetRecoilState} from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useState } from 'react';
import { useRouter } from 'next/router';

type loginProps = {
    
};

const login:React.FC<loginProps> = () => {

    const setAuthModalState = useSetRecoilState(AuthModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type:"register"}));
    };

    const [inputs, setInputs] = useState({email: "", password:""});

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const router = useRouter();

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
      }
    
      const handleLogin = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!inputs.email || !inputs.password) return alert("Please fill all the fields");
        try{
            const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser) return;
            router.push("/");
        }catch (error:any){
            alert(error.message);
        }
      };
      console.log(user, "user");

    return <form className="space-y-6 px-6 px-4" onSubmit={handleLogin}>
        <h1 className= "text-xl text-dark-pink"><b>Sign in</b></h1>
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-dark-pink'>
            Email:
        </label>
        <input
        onChange={handleInputChange} 
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
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-dark-pink'>
            Password:
        </label>
        <input
        onChange={handleInputChange} 
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
        {loading ? "Logging in.." : "Log in"}
    </button>
    <br></br>
    <button type="submit" className='px-5'>

    </button>
    <div className='text-sm font-medium text-gray-500'>
        Not Registered?
        <a href="#" className='text-blue-700 hover:underline' onClick={() => handleClick()}>
            Sign up
        </a>
    </div>

    </form>
}
export default login;