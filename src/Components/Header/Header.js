import './Header.scss';
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';
import flechaabajo from '../../images/flechaabajo.png'

const Header = ({icons}) => { 
	
	return ( 
        <div className = "me" >
 
        <div className="izquierda"></div>
       
            <div className="derecha">
                <h2>Hola! Soy Ignacio</h2>	
                <h3>Soy una mezcla de varios mundos. emprendimientos, negocios, diseño y programacion</h3>
                <div className="tools">
                    <div className="go_to_page"> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://github.com/ignacioHourquescos"><FaGithub color="white"/></a></div>
    
                       
                       
                    </div>
                <div className="portfolio">
                <p>Portfolio</p>
                <img src={flechaabajo} width={"50%"}></img>
                    {/* <div className="wrapper">
	
				    		<div className="scroll-down">
				    			<span className="arrow-down"></span>
				    			<span className="scroll-title"> </span>
				    		</div>
				    
				    </div> */}
                   
                 </div>

                

                
                    
            </div>
            
            <div className="poligono"></div>

        </div>
	);
}

export default Header;


