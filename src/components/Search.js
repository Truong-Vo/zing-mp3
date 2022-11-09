import React from 'react';
import icons from '../utils/icon';

const { FiSearch } = icons;

const Search = () => {
    return (
        <div className="w-full flex items-center bg-[#DDE4E4] rounded-[20px] text-gray-500  ">
            <span className="h-10 px-[10px] flex items-center">
                <FiSearch size={20} />
            </span>
            <input
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                className="w-full outline-none bg-transparent pr-4 py-2  h-10 "
            />
        </div>
    );
};

export default Search;
