import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import theme from "../data/theme";
import FadeRightButton from "../elements/FadeRightButton";

const Resuelto = () => {
    const [asunto, setAsunto] = useState(0);
    const [visible, setVisible] = useState(false);

    const counterRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        });
        observer.observe(counterRef.current);
    }, []);

    const aumentar = (num) => {
        if (visible === true && asunto<num){
            setTimeout(()=>{
                setAsunto(asunto+4);
            }, 1)
        }
        return asunto
    }
    

    return ( 
        <Container>
            <FlexContainer>
                <Text>
                    <p>HEMOS RESUELTO</p>
                    <p ref={counterRef}> <span>{aumentar(964)}</span> ASUNTOS DE DIVORCIO</p>
                </Text>
                <FadeRightButton grow>RESUELVE TU DIVORCIO</FadeRightButton>
            </FlexContainer>
        </Container>
    );
}

const Container= styled.div`
    background: ${theme.primaryColor};
    display: flex;
    justify-content: center;
    
    
    @media (max-width: 767px) {
        height: 360px;
    }
    
`;

const FlexContainer = styled.div`
    display: flex;
    font-family: ${theme.primaryFont};
    font-weight: 700;
    font-size: 30px;
    color: #fff;
    align-items: center;
    justify-content: space-around;
    width: 1140px;
    
    a{
        max-width: 260px;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: space-evenly;
        width: 90%;
    }
`;
 
 const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 500px;
    height: 262px;
    
    @media (max-width: 767px) {
        width: 100%;
    }

    span {
        font-size: 70px;
    }

    
    
    @media (max-width: 767px) {
        flex-direction: column;
        height: 100px;
    }
`;

export default Resuelto;