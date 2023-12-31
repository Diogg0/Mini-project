import {atom} from 'recoil';

type AuthModalState = {
    isOpen: boolean;
    type: 'login' | 'register' | 'forgotPassword';
};

const initialAuthModalState: AuthModalState = {
    isOpen: true,
    type: "login",
};

export const AuthModalState = atom<AuthModalState>({
    key: "authModalState",
    default: initialAuthModalState,
}); 