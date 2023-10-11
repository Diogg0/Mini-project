import React from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/Modals/AuthModals/AuthModal';
import Description from '@/components/Modals/AuthModals/Description';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    
  return (
		    <div className='bg-solid-white h-screen relative'>
			      <div className='max-w-7xl mx-auto'>
				        <Navbar/>
            </div> 
            <AuthModal/>
            <Description/>
        </div>
    );

}
export default AuthPage;