import React from 'react';

type DescriptionProps = {
    
};

const Description:React.FC<DescriptionProps> = () => {
    
    return(<>
        <div
            className='absolute top-0 left-0 w-600 h-full flex items-center justify-center ml-auto'
        ></div>
        <div className='w-500 sm:w-[1068px]  absolute top-[24.9%] translate-x-[-2%] translate-y-[-51%]
         flex justify-center items-center ml-auto'>
            <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                <div className='rounded-b-lg shadow relative w-full bg-dull-pink mx-6'>
                    <div className='flex justify-end p-2'>
                        <button
                            type='button'
                            className='bg-transparent  rounded-b-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                        >
                        </button>
                    </div>
                    <h1 className= "text-xl text-dark-pink"> <b>DSA Assignment Website</b></h1>
                    <p>Welcome to RAIT DSA Assignment Website,<br></br> Here you can enhance your problem solving skills 
                        to crack your coding interviews!<br></br> Login in to your account and browse through<br></br> your assignments 
                        to start right away.</p>
                        <button
                            type='button'
                            className='bg-transparent h-12  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                        >
                        </button>
                </div>
            </div>
        </div>
    </>);
};
export default Description;