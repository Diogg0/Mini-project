import React from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/Modals/AuthModals/AuthModal';
import Description from '@/components/Modals/AuthModals/Description';
import { AuthModalState } from '@/atoms/authModalAtom';
import {useRecoilValue} from "recoil";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { useEffect} from "react";
import { useState } from 'react';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(AuthModalState);
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState(true);

/*
    useEffect(() => {
        if(user) router.push('/');
        if(!loading && !user) setPageLoading(false);
    }, [user, router, loading]);

    if (pageLoading) return null;*/
 
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