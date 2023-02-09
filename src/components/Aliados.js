import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import theme from '../data/theme';
import Title from '../elements/Title';
import FadeRightButton from '../elements/FadeRightButton';
import Fondo from '../assets/fondo_aliados.png';
import Portada from '../assets/portada.png'

const Aliados = () => {

    const [visible, setVisible] = useState(false);

    const imgRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            if (visible===false && entry.isIntersecting===true){
                setVisible(true);
            }
        });
        observer.observe(imgRef.current);
    }, [visible]);


    return (  
        <Container>
            <div>
                <TextContainer>
                    <Title visible={visible} color={theme.secondaryColor}>Tus aliados en el proceso de divorcio</Title>
                    <FadeRightButton>QUIERO DIVORCIARME</FadeRightButton>
                </TextContainer>
                <ImgContainer ref={imgRef} visible={visible}/>
            </div>
        </Container>
    );
}
 
const Container = styled.div`
    height: 250px;
    background-image: url(${Fondo});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;

    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1140px;
        height: 100%;
        
        @media (max-width: 767px) {
            flex-direction: column;
            text-align: center;
        }
    }
    
    @media (max-width: 767px) {
        height: 400px;
        background-size: auto 700px;
    }

`;

const TextContainer = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 90%;
    width: 50%;

    @media (max-width: 767px) {
        width: 80%;
        align-items: center;
    }
`;

const ImgContainer = styled.div`
    width: 50%;;
    height: 100%;
    background-image: url(${Portada});
    background-size: 300px;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    animation: ${props => props.visible === true ? 'bounce 1s ease-in' : ''};

    @keyframes bounce {
        0%{
            top: 100%;
            opacity:0;
        }

        50%{
            opacity: 0.4;
        }

        95%{
            top: -10px;
        }

        100%{
            top: 0;
            opacity: 1;
        }
    }
    
    @media (max-width: 767px) {
        height: 400px;
    }
`;

export default Aliados;