import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SecondaryButtonProps {
    text: string;
    link: string;
}

const Button = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px 10px 5px;
    font-size: 20px;
    color: black;
    background-color: #21567D;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    .arrow {
        margin-left: 50px;
        transition: margin-left 0.3s;
    }

    &:hover .arrow {
        margin-left: 55px;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -25%;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 30px 30px;
        border-color: transparent transparent #05070A transparent;
    }
`;

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, link }) => {
    return (
        <Button href={link}>
            <span>{text}</span>
            <ArrowForwardIosIcon className="arrow" />
        </Button>
    );
};

export default SecondaryButton;