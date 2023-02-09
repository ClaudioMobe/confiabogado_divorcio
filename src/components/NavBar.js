import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburguer from '../elements/Hamburguer';
import theme from '../data/theme';
import Logo from '../assets/logo.png'
import {ReactComponent as ArrowDown} from '../assets/arrowdownicon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSortDown} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
    console.log(visibleMobileMenu);
    return ( 
        <>
        <Container>
            <NavContainer>
                <a href="https://confiabogado.com/">
                    <Img src={Logo} alt="CONFIABOGADO" />
                </a>
                <Menu>
                    <a href='https://confiabogado.com/despido-injustificado/'>DESPIDO INJUSTIFICADO</a>
                    <a href='https://confiabogado.com/registro-marca/'>REGISTRO DE MARCA</a>
                    <Servicios onMouseEnter={()=> setShowMenu(true)} onMouseLeave={()=> setShowMenu(false)} >
                        <ServiciosTitle>
                            <p>SERVICIOS</p>
                            <ArrowDown/>
                        </ServiciosTitle>
                        {showMenu && 
                            <ServiciosMenu>
                                <a href="https://confiabogado.com/divorcio/">DIVORCIO</a>
                                <a href="https://confiabogado.com/constitucion-de-empresas/">CONSTITUCIÓN DE EMPRESAS</a>
                                <a href="https://confiabogado.com/placas/">REGISTRO DE PLACAS</a>
                                <a href="https://confiabogado.com/testamentos/">TESTAMENTO</a>
                                <a href="https://confiabogado.com/arrendamiento/">ARRENDAMIENTOS</a>
                            </ServiciosMenu>
                        }
                    </Servicios>
                    <Contactanos href='https://web.whatsapp.com/send?phone=525519353568&text=Hola!%20%0D%0AQuiero%20agendar%20mi%20consulta%20gratis%20con%20un%20abogado%20experto' target='_blank' rel="noreferrer">CONTÁCTANOS</Contactanos>
                </Menu>
                <Hamburguer setVisibleMobileMenu={setVisibleMobileMenu} visibleMobileMenu={visibleMobileMenu}/>
            
            </NavContainer>
        </Container>
        <MobileMenu visible={visibleMobileMenu}>
            <Buscar>
                <FontAwesomeIcon icon={faSearch}/>
                <FontAwesomeIcon icon={faSortDown}/>
                <input type="text" placeholder='Encuentra abogados' />
            </Buscar>
            <a href='https://confiabogado.com/despido-injustificado/'>DESPIDO INJUSTIFICADO</a>
            <a href='https://confiabogado.com/registro-marca/'>REGISTRO DE MARCA</a>
            <Servicios onClick={()=> setShowMenu(!showMenu)} onMouseEnter={()=> setShowMenu(true)} onMouseLeave={()=> setShowMenu(false)} >
                <ServiciosTitle>
                    <p>SERVICIOS<ArrowDown/></p>   
                </ServiciosTitle>
                {showMenu && 
                    <ServiciosMenu>
                        <a href="https://confiabogado.com/divorcio/">DIVORCIO</a>
                        <a href="https://confiabogado.com/constitucion-de-empresas/">CONSTITUCIÓN DE EMPRESAS</a>
                        <a href="https://confiabogado.com/placas/">REGISTRO DE PLACAS</a>
                        <a href="https://confiabogado.com/testamentos/">TESTAMENTO</a>
                        <a href="https://confiabogado.com/arrendamiento/">ARRENDAMIENTOS</a>
                    </ServiciosMenu>
                }
            </Servicios>
            <Contactanos href='https://web.whatsapp.com/send?phone=525519353568&text=Hola!%20%0D%0AQuiero%20agendar%20mi%20consulta%20gratis%20con%20un%20abogado%20experto' target='_blank' rel="noreferrer">CONTÁCTANOS</Contactanos>
        </MobileMenu>
        </>
     );
}
const Container = styled.div`
    height: 105px;
    width: 100%;

    @media (max-width: 1200px) {
        height: 89px;
    }
`;

const NavContainer = styled.nav`
    position: fixed;
    font-family: ${theme.primaryFont}, sans-serif;
    font-weight: 500;
    font-size: 14px;
    background: #fff;
    height: 105px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
    z-index: 1000;

    @media (max-width: 1200px) {
        position: relative;
        height: 89px;
    }
`;

const Img = styled.img`
    width: 210px;
`;

const Menu = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-right: 150px;
    
    > * {
        min-width: max-content;
        margin-left: 40px;
        line-height: 1.4;
    }

    * {
        text-decoration: none;
        color: #191919;

        :hover{
            color: ${theme.primaryColor};
        }
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Servicios = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    position: relative;

    svg {
        height: 14px;
    }
    * {
        text-decoration: none;
        color: #191919;

        :hover{
            color: ${theme.primaryColor};
        }
    }
        @media (max-width: 1200px) {
            height: 10px;
        }
`;

const ServiciosTitle = styled.div`
    display: flex;

`;

const ServiciosMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: max-content;
    background: #F1F1F1;
    padding: 5px 10px;
    top: 70px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    *{
        line-height: 2;
    }

    @media (max-width: 1200px) {
        top: 0;
        left: 100%;
    }

`;

const Contactanos = styled.a`
    padding: 5px 8px 3px 8px;
    border-radius: 5px;
    color: #fff !important;
    background-color: ${theme.primaryColor};

    :hover {
        color: #fff;
    }

    @media (max-width: 1200px) {
        align-self: center;
    }
`;

const MobileMenu = styled.div`
    font-family: ${theme.secondaryFont};
    font-size: 14px;
    display: ${props => props.visible === true ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 200px;
    position: absolute;
    top: 89px;
    background: #fff;
    width: 100vw;
    z-index: 1000;
    padding: 15px;
    
    p {
        width: auto;
        display: flex;
    }

    *{
        text-decoration: none;
        color: #191919;

        :hover{
            color: ${theme.primaryColor};
        }
    }

`;

const Buscar = styled.div`
    border: 1px solid ${theme.secondaryColor};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 20px;

    *{
        padding: 0 5px;
    }

    input{
        outline: none;
        width: 100%;

    }

`;

export default NavBar;