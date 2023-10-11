import React from 'react';
import Navbar from '@/components/Navbar';
import TeacherName from '@/components/Modals/TeacherPageModals/TeacherName';
import TeacherDetails from '@/components/Modals/TeacherPageModals/TeacherDetails';
import Class from '@/components/Modals/TeacherPageModals/Class';


type TeacherPageProps = {};

const TeacherPage: React.FC<TeacherPageProps > = () => {
    
  return (
		    <div className='bg-solid-white h-screen relative'>
			      <div className='max-w-7xl mx-auto shadow-lg'>
				        <Navbar/>
            </div> 
            <TeacherName/>
            <TeacherDetails/>
            <Class/>

        </div>
    );

}
export default TeacherPage;