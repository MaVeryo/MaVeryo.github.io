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
    return (
        <div className="max-w-[20vw]">
            <h1 className="text-white text-[40px] pb-1 ">{header}</h1>
            <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
            <p className="text-white pt-10 text-[24px]">{paragraph}</p>
            <br/>
            <p className="text-white pt-5 text-[24px] pb-10">{paragraph2}</p>
        </div>
    );
};

export default ParagraphLayout;