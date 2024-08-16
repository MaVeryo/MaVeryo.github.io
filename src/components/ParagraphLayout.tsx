import { useMediaQuery } from '@mui/material';
import React from 'react';

interface ParagraphLayoutProps {
    header: string;
    paragraph: string;
    paragraph2?:string;
}

const ParagraphLayout: React.FC<ParagraphLayoutProps> = ({
    header,
    paragraph,
    paragraph2,
}) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    return (
<div className={`max-w-[20vw] max-h-screen ${isSmallScreen ? 'max-w-[90vw] p-10' : 'p-0'}`}>
            <h1 className={`text-white ${isSmallScreen ? 'text-[24px]' : 'text-[40px]'} pb-1`}>{header}</h1>
            <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
            <p className={`text-white pt-10 ${isSmallScreen ? 'text-[16px]' : 'text-[24px]'}`}>{paragraph}</p>
            <br />
            <p className={`text-white pt-5 ${isSmallScreen ? 'text-[16px]' : 'text-[24px]'} pb-10`}>{paragraph2}</p>
        </div>
    );
};

export default ParagraphLayout;