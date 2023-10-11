import React from 'react';

type ClassProps = {
    
};

const Class:React.FC<ClassProps> = () => {
    
    return(<>
        <div
            className='absolute top-0 left-0 w-full h-full flex items-center justify-center'
        ></div>
        <div className='w-full sm:w-[1100px] absolute top-[30%] translate-x-[34.5%] translate-y-[-50%]
         flex justify-center items-center ml-auto'>
            <div className='relative w-full h-full mx-auto flex items-center justify-center border border-black'>
                <div className='shadow relative w-[1300px] bg-chill-gray mx-6 '>
                    <div className='flex justify-end p-2'></div>
                    <h1 className= "text-xl text-black"><b>Class A</b></h1>
                </div>

            </div>

        </div>

        </>
        
    );
}
export default Class;