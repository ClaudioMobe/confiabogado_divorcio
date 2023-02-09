import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Google from "../assets/google.jpg";


const Cliente = (props) => {
    return ( 
        <Container>
            <Nombre>
                <span>{props.nombre}</span>
                <GoogleContainer/>
            </Nombre>
            <Fecha>{props.fecha}</Fecha>
            <Estrellas>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </Estrellas>
            <Review>{props.review}</Review>
        </Container>
     );
}

const Container = styled.div`
    background: #fff;
    font-family: 'Open Sans';
    width: 344px;
    height: 220px;
    margin: 0 8px;
    padding: 15px;
    border-radius: 3px;
    transition: transform 0.5s;
    display: block;

    :hover {
        transform: translateY(-5px);
    }
`;

 
const Nombre = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
`;

const GoogleContainer = styled.div`
    background-image: url(${Google});
    background-size: contain;
    background-position: center;
    width: 25px;
    height: 25px;
`;

const Fecha = styled.p`
    color: #7e7e7e;
    font-size: 12px;
`;

const Estrellas = styled.div`
    color: #f6bb06;
    margin: 15px 0;
`;

const Review = styled.div`
    font-size: 14px;
    line-height: 20px;
    height: 81px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export default Cliente;