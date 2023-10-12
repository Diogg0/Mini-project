import React from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/Modals/AuthModals/AuthModal';
import Description from '@/components/Modals/AuthModals/Description';
import { AuthModalState } from '@/atoms/authModalAtom';
import {useRecoilValue} from "recoil";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(AuthModalState)
    return (
		    <div className='bg-solid-white h-screen relative'>
			      <div className='max-w-7xl mx-auto'>
				        <Navbar/>
                    </div> 
                {authModal.isOpen && <AuthModal />}
                <Description/>
            </div>
            );

}
export default AuthPage;