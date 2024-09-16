import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PrimaryButtonProps {
    text: string;
    link: string;
}

const Button = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px 10px 5px;
    font-size: 24px;
    color: black;
    background-color: #72A8FD;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    white-space: nowrap;

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
        border-width: 0 0px 30px 30px;
        border-color: transparent transparent #05070A transparent;
    }
`;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, link }) => {
    return (
        <Button href={link}>
            <span>{text}</span>
            <ArrowForwardIosIcon className="arrow" />
        </Button>
    );
};

export default PrimaryButton;