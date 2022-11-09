import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../static/logo-dark.svg';
import { SidebarMenu } from '../utils/menu';

const notActive = 'py-2 px-[25px] font-bold text-[#32323D] text-[13px] flex gap-[12px] items-center';
const active = ' py-2 px-[25px] font-bold text-[#0F7070] text-[13px] flex gap-[12px] items-center';

const SidebarLeft = () => {
    return (
        <div className="flex flex-col bg-[#DDE4E4] ">
            <div className="w-full h-[70px] px-[25px] flex items-center ">
                <img src={logo} alt="logo" className="w-[120px] h-10" />
            </div>
            <div className="flex flex-col">
                {SidebarMenu.map((item, index) => (
                    <NavLink key={index} end={item.end} to={item.path} className={({ isActive }) => (isActive ? active : notActive)}>
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
