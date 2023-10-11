import React from 'react';

type TeacherDetailsProps = {
    
};

const TeacherDetails:React.FC<TeacherDetailsProps> = () => {
    
    return(<>
        <div
            className='absolute top-0 left-0 w-1/4 h-full flex items-center justify-center ml-auto'
        ></div>
        <div className='w-1/4 sm:w-[300] absolute top-[50.5%] translate-x-[-6.5%] translate-y-[-50%]
         flex justify-center items-center ml-auto'>
            <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                <div className='shadow relative w-full bg-dull-pink mx-6'>
                    <div className='flex justify-end p-2'></div>
                    <p className= "text-xl text-dark-pink"><b>Name:</b> Teacher_name
                    <br></br><br></br><b>Teacher ID:</b> ID<br></br><br></br> <b>Number of Classes:</b> 5<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></p>
                </div>
            </div>
        </div>

        </>

    );
}
export default TeacherDetails;