import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import theme from "../data/theme";
import ImgPagos from "../assets/footer.png";

const Footer = () => {
    return ( 
        <Container>
            <FlexContainer>
                <Column nombre='contacto'>
                    <p className="titulo">Correo:</p>
                    <p>info@confiabogado.com</p>
                    <a href="http://tel+5522557397">55 2255 7397</a>
                    <a href="https://confiabogado.com/terminos-condiciones/">Términos y condiciones</a>
                    <a href="https://confiabogado.com/aviso-de-privacidad/">Aviso de privacidad</a>
                    <p>IUS ARTIFICIAL SAPI DE CV</p>
                </Column>
                <Column nombre='links'>
                    <a href="https://confiabogado.com/despido-injustificado/">Despido injustificado</a>
                    <a href="https://confiabogado.com/divorcio/">Divorcio</a>
                    <a href="https://confiabogado.com/registro-marca/">Registro de marca</a>
                </Column>
                <Column nombre='links'>
                    <a href="https://confiabogado.com/testamentos/">Testamentos</a>
                    <a href="https://confiabogado.com/constitucion-de-empresas/">Constitución de Empresas</a>
                    <a href="https://confiabogado.com/placas/">Placas</a>
                    <a href="https://confiabogado.com/arrendamiento/">Arrendamiento</a>
                </Column>
                <Column>
                    <Red color='#1877f2' href="https://www.facebook.com/confiabogado/"><FontAwesomeIcon icon={faFacebook}/>Facebook</Red>
                    <Red color='#00acee' href="https://twitter.com/confiabogado"><FontAwesomeIcon icon={faTwitter}/>Twitter</Red>
                    <Red color='#e4405f' href="https://www.instagram.com/confiabogado/"><FontAwesomeIcon icon={faInstagram}/>Instagram</Red>
                    <Red color='#0e76a8' href="https://www.linkedin.com/company/71114314/"><FontAwesomeIcon icon={faLinkedinIn}/>LinkedIn</Red>
                </Column>
            </FlexContainer>
            <ImgContainer/>
            <Slogan>
                <a href="https://confiabogado.com">CONFIABOGADO</a> <span> - Simplificando la justicia</span>
            </Slogan>
        </Container>
    );
}

const Container = styled.footer`
    background: ${theme.footerBackgroundColor};
    font-family: ${theme.primaryFont};
    font-size: 14px;
    font-weight: 200;
    color: #e8eef1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    @media (max-width: 767px) {
        padding: 10px;   
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: left;
    width: 80%;
    flex-wrap: wrap;
`;

const Column = styled.div`
    width: 25%;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;

    *{
        margin: 15px 0;
    }

    a {
        display: flex;
        align-items: center;
        width: max-content;
        text-decoration: none;
        color: inherit;   
        
        :hover {
            color: ${props => props.nombre === 'contacto' ? '#00b0ff' : props.nombre === 'links' ? '#2c3e50' : ''}
        }
    }

    .titulo{
        font-weight: 700;
    }
    
    
    @media (max-width: 767px) {
        width: 100%;   
    }
    
    `;

const Red = styled.a`
    svg{
        font-size: 20px;
        margin: 0 10px;
        color: ${theme.primaryColor};
        @media (max-width: 767px) {
            margin-left: 0;   
        }
    }
    
    :hover {
        svg {
            color: ${props => props.color};
        };
    }
`;

const ImgContainer = styled.div`
    background-image: url(${ImgPagos});
    background-repeat: no-repeat;
    background-size: contain;
    width: 575px;
    height: 100px;
    
    @media (max-width: 767px) {
        width: 70%;  
    }
`;

const Slogan = styled.div`
    font-weight: 700;
    font-size: 12px;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default Footer;