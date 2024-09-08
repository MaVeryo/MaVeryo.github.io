import React from 'react';

interface ParagraphLayoutProps {
    header: string;
    paragraph: string;
    paragraph2?: string;
}

const ParagraphLayout: React.FC<ParagraphLayoutProps> = ({
    header,
    paragraph,
    paragraph2,
}) => {
    return (
        <div className="max-w-80 md:max-w-[20vw] h-auto pb-4 md:p-0 ">
            <h1 className="text-white text-[24px] md:text-[40px] -pb-1">{header}</h1>
            <div className="overflow-hidden bg-white w-[10vh] h-[1px]"></div>
            <p className="text-white pt-4 md:pt-10 text-[16px] md:text-[20px]">{paragraph}</p>
            {paragraph2 && (
                <>
                    <br />
                    <p className="text-white pt-2 md:pt-5 text-[16px] md:text-[20px] pb-5">{paragraph2}</p>
                </>
            )}
        </div>
    );
};

export default ParagraphLayout;