import React from "react";
import styled from "styled-components";
import theme from "../data/theme";
import Title from "../elements/Title";
import FadeRightButton from "../elements/FadeRightButton";
import ClientesCarousel from "../elements/ClientesCarousel";

const Clientes = () => {
    return ( 
        <Container>
            <ClientesContainer>                
                <Title>Nuestros clientes</Title>
                <ClientesCarousel/>
                <FadeRightButton>MÁS COMENTARIOS</FadeRightButton>
            </ClientesContainer>
        </Container>
    );
}

const Container = styled.div`
    background: ${theme.backgroundColor};
    height: 500px;
`;

const ClientesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export default Clientes;