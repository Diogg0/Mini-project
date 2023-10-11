import React from 'react';

type TeacherNameProps = {
    
};

const TeacherName:React.FC<TeacherNameProps> = () => {
    
    return(<>
        <div
            className='absolute top-0 left-0 w-full h-full flex items-center justify-center ml-auto'
        ></div>
        <div className='w-full sm:w-[1545px] absolute top-[13.6%] translate-x-[-1.6%] translate-y-[-50%]
         flex justify-center items-center ml-auto'>
            <div className='relative w-full h-full mx-auto flex items-center justify-center border border-black'>
                <div className='shadow relative w-full bg-hot-pink mx-6'>
                    <div className='flex justify-end p-2'></div>
                    <h1 className= "text-xl text-dark-pink"><b>Welcome Back teacher_name</b></h1>
                </div>

            </div>

        </div>

        </>
        
    );
}
export default TeacherName;