import { useMediaQuery } from '@mui/material';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import MacBook from "../assets/Website Revamp Photos/photos/MacCut.png";
import Phone from "../assets/Website Revamp Photos/photos/PhoneCut.png";

interface ProjectParagraphProps {
    header: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
    phone: boolean;
}

const ProjectParagraph: React.FC<ProjectParagraphProps> = ({
    header,
    paragraph,
    buttonText,
    buttonLink,
    phone
}) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[75%] flex flex-col md:flex-row items-center justify-center">
                {!phone && (
                    <img src={Phone} alt="Phone" className="w-full md:w-[20vw] h-auto md:h-[65vh] ml-[12.5rem] mr-[12.5rem]" />
                )}
                <div className={`max-w-[100vw] ${isSmallScreen ? 'max-w-[90vw] p-10' : 'p-0'}`} style={{ width: '834px', height: '329px', marginLeft: phone ? '20px' : '0' }}>
                    <h1 className={`text-white ${isSmallScreen ? 'text-[24px]' : 'text-[40px]'} pb-1`}>{header}</h1>
                    <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
                    <p className={`text-white pt-10 ${isSmallScreen ? 'text-[16px]' : 'text-[24px]'}`}>{paragraph}</p>
                    <br />
                    <PrimaryButton text={buttonText} link={buttonLink} />
                </div>
                {phone && (
                    <img src={MacBook} alt="MacBook" className="w-full md:w-[40vw] h-auto md:h-[50vh] pr-10" />
                )}
            </div>
        </div>
    );
};

export default ProjectParagraph;