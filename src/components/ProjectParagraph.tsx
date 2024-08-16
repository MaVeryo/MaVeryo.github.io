import { useMediaQuery } from '@mui/material';
import React from 'react';
import PrimaryButton from './PrimaryButton';

interface ProjectParagraphProps {
    header: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
}

const ProjectParagraph: React.FC<ProjectParagraphProps> = ({
    header,
    paragraph,
    buttonText,
    buttonLink,
}) => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    return (
        <div className={`max-w-[100vw] max-h-screen ${isSmallScreen ? 'max-w-[90vw] p-10' : 'p-0'}`}>
            <h1 className={`text-white ${isSmallScreen ? 'text-[24px]' : 'text-[40px]'} pb-1`}>{header}</h1>
            <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
            <p className={`text-white pt-10 ${isSmallScreen ? 'text-[16px]' : 'text-[24px]'}`}>{paragraph}</p>

            <br />
            <PrimaryButton text={buttonText} link={buttonLink} />
        </div>
    );
};

export default ProjectParagraph;