import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toggle, setToggle] = useState(true);
    const {theme, setTheme}=useContext(ThemeContext)

    useEffect(()=>{
        console.log("Theme",theme)
    },[])
    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={100} height={100} />
            <div className='flex bg-slate-200 p-2 w-full 
        mx-5 rounded-full items-center'>
                <HiOutlineMagnifyingGlass />
                <input type='text' placeholder='Search Games' 
                className='px-2 bg-transparent dark:bg-cyan-500 outline-none' />
            </div>
            <div>
                {toggle ? (
                    <HiMoon
                    className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                    onClick={()=> setToggle(!toggle)}/>
                ) : (
                    <HiSun
                    onClick={()=> setToggle(!toggle)}
                    className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'/>
                )}
            </div>
        </div>
    )
}

export default Header