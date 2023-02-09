import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Hamburguer = (props) => {
    const visibleMobileMenu = props.visibleMobileMenu;
    const setVisibleMobileMenu = props.setVisibleMobileMenu;

    return ( 
        <Container onClick={()=> setVisibleMobileMenu(!visibleMobileMenu)}>
            <Top visible={visibleMobileMenu}></Top>
            <Middle visible={visibleMobileMenu}></Middle>
            <Bottom visible={visibleMobileMenu}></Bottom>
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    width: 20px;
    height: 16px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    
    div {
        height: 2px;
        width: 20px;
        background: #2C3E50;
    }

    @media (max-width: 1200px) {
        display: flex;
    }
`;

const Top = styled.div`
    position: absolute;
    transition: all 1s;
    
    ${props => {
        if(props.visible === true) {
            return css`
                top: 0;
                bottom: 0;
                margin-top: auto;
                margin-bottom: auto;
                transform: rotate(45deg);
            `;
        } else {
            return css`
                top: 0;
                margin-top: 0;
                bottom: 14px;
            `;
        }
    }}



`;
const Middle = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    transition: all 1s;

    ${props => {
        if(props.visible === true) {
            return css`
                top: 0;
                bottom: 0;
                margin-top: auto;
                margin: auto;
                transform: translateX(20px);
                opacity: 0;
            `;
        } else {
            return css`
                top: 0;
                bottom: 0;
                margin-top: auto;
                margin-bottom: auto;
            `;
        }
    }}

`;

const Bottom = styled.div`
    position: absolute;
    transition: all 1s;

    ${props => {
        if(props.visible === true) {
            return css`
                top: 0;
                bottom: 0;
                margin-top: auto;
                margin-bottom: auto;
                transform: rotate(-45deg);
            `;
        } else {
            return css`
                margin-bottom: 0;
                bottom: 0;
                top: 14px;
            `;
        }
    }}

`;

export default Hamburguer;