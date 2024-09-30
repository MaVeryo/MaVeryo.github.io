//import React from 'react';
import styled from 'styled-components';

interface BigButtonProps {
    text: string;
    link: string;
}

const Button = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 24px;
    color: black;
    background-color: #72A8FD;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    width:314px;
    transition: width 0.3s ease-in-out;


    &:hover {
        width:324px;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -10%;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 30px 30px;
        border-color: transparent transparent #05070A transparent;
    }
    &::before {
        content: '';
        position: absolute;
        bottom: -10%;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0px 30px 30px 0px;
        border-color: transparent transparent #05070A transparent;
    }
`;

const BigButton: React.FC<BigButtonProps> = ({ text, link }) => {
    return (
        <Button href={link}>
            <span>{text}</span>
        </Button>
    );
};

export default BigButton;