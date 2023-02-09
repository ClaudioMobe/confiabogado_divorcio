import styled from 'styled-components';
import Cliente from './Cliente';
import reviewsClientes from '../data/reviewsClientes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ClientesCarousel = () => {
    return ( 
        <>
        {/* Desktop */}
        <CarouselContainer>
            <span> <FontAwesomeIcon icon={faChevronLeft}/> </span>
            <CarrouselInnerDesktop>
                {reviewsClientes.map((cliente, index)=>{
                    return (
                        <div key={index} id={index}>
                            <Cliente nombre={cliente.nombre} fecha={cliente.fecha} review={cliente.review}/>
                        </div>
                    )
                })}         
            </CarrouselInnerDesktop>
            <span> <FontAwesomeIcon icon={faChevronRight}/></span>
        </CarouselContainer>  

        {/* Mobile */}
        <CarouselContainerMobile id="clientesCarouselMobile" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#clientesCarouselMobile" data-slide-to="0" className="active"></li>
                <li data-target="#clientesCarouselMobile" data-slide-to="1"></li>
                <li data-target="#clientesCarouselMobile" data-slide-to="2"></li>
                <li data-target="#clientesCarouselMobile" data-slide-to="3"></li>
            </ol>
            <CarrouselInner className="carousel-inner">
                {reviewsClientes.map((cliente, index)=>{
                    return (
                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                            <Cliente nombre={cliente.nombre} fecha={cliente.fecha} review={cliente.review}/>
                        </div>
                    )
                })}         
            </CarrouselInner>
            <a className="carousel-control-prev" href="#clientesCarouselMobile" role="button" data-slide="prev">
                <span aria-hidden="true"> <FontAwesomeIcon icon={faChevronLeft}/> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#clientesCarouselMobile" role="button" data-slide="next">
                <span aria-hidden="true"> <FontAwesomeIcon icon={faChevronRight}/></span>
                <span className="sr-only">Next</span>
            </a>
        </CarouselContainerMobile>
        </>
     );
}

const CarouselContainer = styled.div`
    display: flex;
    max-width: 1165px;
    height: 320px;
    padding: 10px;
    align-items: center;
    >div{
        overflow-y: scroll;
    }
    >span {
        padding: 10px;
        color: #b7b7b7;
        font-size: 25px;
        
        :hover {
            color: #474747;
        }
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

    const CarrouselInnerDesktop = styled.div`
    display: flex;
    justify-content: center !important;
    align-items: center;
    overflow-y: scroll;

    .carousel-item{
        margin-right: 0;
        width: 352px;
    }

    `;
    
    
    const CarouselContainerMobile = styled.div`
    display: none;
    width: 500px;
    height: 280px;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    
    li {
        background: #b7b7b7;
        border-radius: 50%;
        height: 8px;
        width: 8px;
        
    }
    
    li.active {
        background: #474747;
    }

    a {
        color: #b7b7b7;
        font-size: 25px;
        
        :hover {
            color: #474747;
        }
    }

    @media (max-width: 767px) {
        display: flex;
    }
`;
 
 const CarrouselInner = styled.div`
    display: flex;
    justify-content: center !important;
    align-items: center;
    overflow: hidden;

    .carousel-item{
        margin-right: 0;
        width: 352px;
    }

`;

export default ClientesCarousel;