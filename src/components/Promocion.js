import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import theme from '../data/theme';

const Promocion = () => {
    const ventajasArray = [
        '100% seguridad en que te divorciamos',
        'Incluye el acta de divorcio y registro público',
        'Estamos contigo en todo momento',
        'Pagos sencillos de manera quincenal'
    ];

    return (  
        <Container>
            <Promo>
                <PromoTitle>Divorcio ConfiAbogado</PromoTitle>
                <Decoracion>PROMOCIÓN</Decoracion>
                <Contenido>
                    <Precios>
                        <PrecioAnterior>
                            <span>MXN</span>
                            16000
                        </PrecioAnterior>
                        <PrecioActual>
                            MXN
                            <span>1,499</span>
                        </PrecioActual>
                        <span>6 pagos quincenales</span>
                    </Precios>
                    <Ventajas>
                        {ventajasArray.map((elemento, index) => {
                            return (
                                <Ventaja key={index} value={index}>
                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                    {elemento}
                                </Ventaja>
                            )
                        })}
                    </Ventajas>
                </Contenido>
                <Obtener>
                    <GrowButton href='https://confiabogado.com/formulario-divorcio/'>OBTENER PROMOCIÓN</GrowButton>
                    <p>¡No pagas un solo peso más! Nuestro precio es FINAL. Siempre intentamos llegar a un acuerdo entre las partes, si no lo conseguimos llevamos el juicio sin ningún costo adicional.</p>
                </Obtener>
            </Promo>
        </Container>
    );
}
 
const Container = styled.div`
    background: ${theme.backgroundColor};
    min-height: 807px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Promo = styled.div`
    font-family: ${theme.primaryFont};
    width: 95%;
    max-width: 720px;
    text-align: center;
    position: relative;
    overflow: hidden;
`;
const PromoTitle = styled.h2`
    background: ${theme.promoBackgroundColor};
    font-size: 38px;
    font-weight: 300;
    width: 100%;
    padding: 20px 0;
    color: #fff;
    line-height: 1.2;
`;

const Decoracion = styled.div`
    content: 'PROMOCIÓN';
    background: ${theme.primaryColor};
    color: #fff;
    font-family: ${theme.secondaryFont};
    font-size: 13px;
    font-weight: 500;
    line-height: 2;
    position: absolute;
    right: -67px;
    top: 22px;
    transform: rotate(45deg);
    width: 200px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    `;

const Contenido = styled.div`
    background: #f7f7f7;
    color: ${theme.secondaryColor};
    padding-bottom: 50px;
`;

const Precios = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
`;
const PrecioAnterior = styled.span`
    text-decoration: line-through;
    color: #df0000;
    display: flex;
    align-items: flex-end;

    span {
        color: ${theme.secondaryColor};
    }
`;

const PrecioActual = styled.span`
    font-weight: 700;
    display: flex;
    margin: 0 10px;


    span {
        font-size: ${theme.titleFontSize};
    }
`;

const Ventajas = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Ventaja = styled.li`
    position: relative;
    font-size: ${theme.textFontSize};
    display: flex; 
    align-items: center;
    width: 450px;
    height: 80px;
    text-align: justify;

    svg {
        font-size: 26px;
        margin: 0 20px;
    }

    ${props => {
        if (props.value !== 0){
            return css`
                ::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    height: 1px;
                    width: 70%;
                    background: ${theme.secondaryColor};
                }
            `;
        }
    }}

    
    @media (max-width: 767px) {
        width: 100%;
    }
    
`;

const Obtener = styled.div`
    background: ${theme.promoBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    p{
        font-size: ${theme.textFontSize};
        color: #fff;
        line-height: 1.5;
        margin-top: 15px;
    }
`;

const GrowButton = styled.a`
    font-weight: 700;
    font-family: ${theme.secondaryFont};
    text-decoration: none;
    color: #fff;
    background-color: ${theme.primaryColor};
    padding: 15px 30px;
    display: inline-block;
    border-radius: 5px;
    transition: all .5s;

    :hover {
        scale: 1.1;
        background: #fff;
        color: ${theme.primaryColor};
    }
`;


export default Promocion;