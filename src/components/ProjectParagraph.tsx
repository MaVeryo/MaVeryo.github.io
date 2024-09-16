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
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[50%] flex flex-col md:flex-row items-center justify-center">
                {phone && (
                    <img src={Phone} alt="Phone" className="w-[40vw] h-[40vh] sm:h-auto sm:w-auto ml-[12.5rem] mr-[12.5rem]" />
                )}
                <div className={``} style={{marginLeft: phone ? '20px' : '0' }}>
                    <h1 className={`text-white text-[40px] pb-1`}>{header}</h1>
                    <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
                    <p className={`text-white pt-10 text-[16px]`}>{paragraph}</p>
                    <br />
                    <PrimaryButton text={buttonText} link={buttonLink} />
                </div>
                {!phone && (
                    <img src={MacBook} alt="MacBook" className="pt-32 sm:pt-5 pr-10" />
                )}
            </div>
        </div>
    );
};

export default ProjectParagraph;