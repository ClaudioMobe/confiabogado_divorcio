import styled from 'styled-components';
import Abogado from "../assets/colab_abogado.png";
import Foro from "../assets/colab_foro.png";
import Core from "../assets/colab_core.png";
import Renacer from "../assets/colab_renacer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const OrgullososCarousel = () => {
    return ( 
        <CarouselContainer id="orgullososCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#orgullososCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#orgullososCarousel" data-slide-to="1"></li>
                <li data-target="#orgullososCarousel" data-slide-to="2"></li>
                <li data-target="#orgullososCarousel" data-slide-to="3"></li>
            </ol>
            <CarrouselInner className="carousel-inner">
                <div className="carousel-item active">
                    <div>
                        <img src={Abogado} alt="Abogado" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src={Foro} alt="Foro" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src={Core} alt="Core" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src={Renacer} alt="Renacer" />
                    </div>
                </div>         
            </CarrouselInner>
            <a className="carousel-control-prev" href="#orgullososCarousel" role="button" data-slide="prev">
                <span aria-hidden="true"> <FontAwesomeIcon icon={faChevronLeft}/> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#orgullososCarousel" role="button" data-slide="next">
                <span aria-hidden="true"> <FontAwesomeIcon icon={faChevronRight}/></span>
                <span className="sr-only">Next</span>
            </a>
        </CarouselContainer>
     );
}

   
    
const CarouselContainer = styled.div`
    display: none;
    width: 400px;
    height: 220px;
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
        height: 180px;
        
        div {
            display: flex;
            justify-content: center;
        }
    }

    
    img{
        height: 180px;
        object-fit: contain; 
    }

`;

export default OrgullososCarousel;