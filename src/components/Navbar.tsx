import React from 'react';
import Link from "next/link";

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className="flex items-start  ">
        <Link href="/" className="justify-content:flex-start h-20 w-100% absolute top-[5.4%] left-[0%] 
        translate-x-[0%] translate-y-[-50%] ">
            <img src="/header.png" alt="Leetcode" className="h-full" width={5000} />
        </Link>

    </div>

};
export default Navbar;  