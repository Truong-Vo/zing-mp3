import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components';

const Public = () => {
    return (
        <div className="w-full flex bg-[#CED9D9] ">
            <div className="w-[240px] flex-none border border-blue-500 overflow-y-auto">
                <SidebarLeft />
            </div>
            <div className="flex-auto border  overflow-y-auto relative">
                <Outlet />
            </div>
            <div className="w-[329px] flex-none overflow-y-auto">{/* <SidebarRight /> */}</div>
        </div>
    );
};

export default Public;
