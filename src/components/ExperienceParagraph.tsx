import React from 'react';


interface ExperienceParagraphProps {
    header: string;
    paragraph: string;

}

const ExperienceParagraph: React.FC<ExperienceParagraphProps> = ({
    header,
    paragraph,

}) => {
    return (
        <div className="max-w-fit mx-auto overflow-hidden lg:flex md:items-center">
            <div className="w-[75%] flex flex-col md:flex-row items-center justify-center">
                <div className={`max-w-[100vw] pt-20`}>
                    <h1 className={`text-white text-[40px] pb-1`}>{header}</h1>
                    <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
                    <p className={`text-white pt-10 text-[16px]`}>{paragraph}</p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ExperienceParagraph;