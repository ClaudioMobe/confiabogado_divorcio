import React from "react";
import styled from "styled-components";
import theme from "../data/theme";
import Title from "../elements/Title";
import Abogado from "../assets/colab_abogado.png";
import Foro from "../assets/colab_foro.png";
import Core from "../assets/colab_core.png";
import Renacer from "../assets/colab_renacer.png";
import OrgullososCarousel from "../elements/OrgullososCarousel";

const Orgullosos = () => {
    return ( 
        <Container>
            <Content>
                <Title color='#fff'>Orgullosos de trabajar con</Title>
                <Colaboradores>
                    <img src={Abogado} alt="Abogado"/>
                    <img src={Foro} alt="Foro"/>
                    <img src={Core} alt="Core"/>
                    <img src={Renacer} alt="Renacer"/>
                </Colaboradores>
                <OrgullososCarousel/>            
            </Content>
        </Container>
    );
}
 
const Container = styled.div`
    font-family: ${theme.primaryFont};
    font-size: ${theme.textFontSize};
    color: #2c3e50;
    background: ${theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 278px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 1140px;
    height: 100%;
`;

const Colaboradores = styled.div`
    height: 170px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
        width: 20%;
        object-fit: contain;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;
export default Orgullosos;