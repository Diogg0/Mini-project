import React from "react";
import Signup from "./Signup";
import Login from "./Login";

type AuthModalProps = {}

const AuthModal: React.FC<AuthModalProps> = () =>{
    return(
        <>
			<div
				className='absolute top-0 left-0 w-full h-full flex items-center justify-center'
			></div>
			<div className='w-full sm:w-[500px]  absolute top-[36.4%] left-[67.9%] translate-x-[0%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='rounded-b-lg shadow relative w-full bg-hot-pink mx-6'>
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
							>
							</button>
						</div>
                        <Login />
					</div>
				</div>
			</div>
		</>
    );
};
export default AuthModal;