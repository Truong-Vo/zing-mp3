import React from 'react';
import icons from '../utils/icon';
import { Search } from '../components';

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;

const Header = () => {
    return (
        <div className="flex justify-between w-full">
            <div className=" flex flex-auto items-center gap-5 ">
                <div className="flex gap-5 text-gray-400">
                    <span>
                        <HiArrowNarrowLeft size={24} />
                    </span>
                    <span>
                        <HiArrowNarrowRight size={24} />
                    </span>
                </div>
                <div className="max-w-[540px] w-full ">
                    <Search />
                </div>
            </div>
            <div>login</div>
        </div>
    );
};

export default Header;
