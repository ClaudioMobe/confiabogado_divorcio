import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import theme from "../data/theme";

const FadeRightButton = (props) => {
    const [visible, setVisible] = useState(false);

    const buttonRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            if (visible===false && entry.isIntersecting===true){
                setVisible(true);
            }
        });
        observer.observe(buttonRef.current);
    }, [visible]);

    return (  
        <A ref={buttonRef} visible={visible} href='https://confiabogado.com/formulario-divorcio/' grow={props.grow}>{props.children}</A>
    );
}

const A = styled.a`
    display: inline-block;
    position: relative;
    font-family: ${theme.secondaryFont};
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
    background: ${theme.primaryColor};
    padding: 20px 40px;
    text-align: center;
    border-radius: 8px;
    border: 2px solid #fff;
    color: #fff;
    transition: all .2s;
    animation: ${props => props.visible === true ? 'fadeRight 1s ease-out' : ''};
    
    :hover {
        color: ${theme.primaryColor};
        border: 2px solid ${theme.primaryColor};
        background: #fff;
        scale: ${props => props.grow ? '1.1' : '1'};
    }

    @keyframes fadeRight {
        0%{
            left: 100%;
            opacity:0;
        }

        50%{
            opacity: 0.4;
        }
        100%{
            left: 0;
            opacity: 1;
        }
    }
`;

export default FadeRightButton;
