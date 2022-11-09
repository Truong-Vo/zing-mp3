import icons from './icon';

const { MdOutlineLibraryMusic, TbChartArcs, HiOutlineChartPie, RiNeteaseCloudMusicLine, MdOutlineFeed } = icons;
export const SidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icons: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <TbChartArcs size={24} />,
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <HiOutlineChartPie size={24} />,
    },
    {
        path: 'radio',
        text: 'Radio',
        icons: <RiNeteaseCloudMusicLine size={24} />,
    },
    {
        path: 'follow',
        text: 'Theo Dõi',
        icons: <MdOutlineFeed size={24} />,
    },
];
