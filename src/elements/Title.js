import styled from "styled-components";
import theme from "../data/theme";

const Title = (props) => {
    return ( 
        <H2 visible={props.visible} color={props.color}>{props.children}</H2>
    );
}
 
const H2 = styled.h2`
    font-family: ${theme.primaryFont};
    font-size: ${theme.titleFontSize};
    line-height: 1;
    color: ${props => props.color ? props.color : theme.primaryColor};
    position: relative;
    animation: ${props => props.visible === true ? 'fadeLeft 1s ease-in' : ''};


    @keyframes fadeLeft {
        0%{
            right: 100%;
            opacity:0;
        }

        50%{
            opacity: 0.4;
        }
        100%{
            right: 0;
            opacity: 1;
        }
    }

    @media (max-width: 767px) {
        font-size: 28px;
    }
`;

export default Title;