import React, { useEffect } from 'react';
import { AuthModalState } from '@/atoms/authModalAtom';
import {useSetRecoilState} from 'recoil';
import {useState} from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { useRouter } from 'next/router';


type signupProps = {
    
};

const signup:React.FC<signupProps> = () => {
    
    const setAuthModalState = useSetRecoilState(AuthModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type:"login"}));
    };

    const [inputs, setInputs] = useState({email:'', displayName:'', password:''});
    const router = useRouter();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser) return;
            router.push('/')
        } catch(error:any){
            alert(error.message)
        }
         
    };

    useEffect(() => {
        if(error) alert(error.message)
    }, [error]);
    

    return <form className="space-y-6 px-6 px-4" onSubmit={handleRegister}>
        <h1 className= "text-xl text-dark-pink"><b>Sign up</b></h1>
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-dark-pink'>
            Email:
        </label>
        <input 
        onChange={handleChangeInput} 
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
        onChange={handleChangeInput} 
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
            onChange={handleChangeInput} 
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
        {loading ? "Signing up.." : "Sign up"}
    </button>

    <div className='text-sm font-medium text-gray-500'>
        Already Registered?     <p>  </p>
        <a href="#" className='text-blue-700 hover:underline' onClick={() => handleClick()}>
            Log in
        </a>
    </div>


    </form>
}
export default signup;