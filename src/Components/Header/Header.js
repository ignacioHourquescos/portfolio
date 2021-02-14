import './Header.scss';
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';
import flechaabajo from '../../images/flechaabajo.png'
import yoyo2 from '../../images/yoyo2.png'
import yoyo2mobile from '../../images/yoyo2_mobile.png'
import useAppContext from '../../Context/UseAppContext';


const Header = ({icons}) => { 

    const { languageSelection } = useAppContext();
	
	return ( 
        <div className = "me" >
 
            <div className="intro_mobile">
                { languageSelection === "Es" 
                    ?
                        <>
                            <h2>Hola! Soy Ignacio</h2>	
                            <h3>developer, diseñador y emprendedor</h3>
                        </>
                    : languageSelection === "En"
                        ? 
                            <>
                                <h2>Hi! I am Ignacio</h2>	
                                <h3>I am a developer, desginer and entrepeneur</h3>
                            </>
                        : 
                            <>
                                <h2>Oi! Sou Ignacio</h2>	
                                <h3>Sou desarollador, disenhador e emprendendor</h3>
                            </>
                }   
                <div className="tools">
                    <div className="go_to_page"> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://github.com/ignacioHourquescos"><FaGithub color="white"/></a></div>               

                    <p>Portfolio</p>
                    <img src={flechaabajo} width={"50%"}></img>  
                 </div>   
            </div>
       
        <div className="izquierda">
            <img className="desktop_image" src={yoyo2}></img>
            <img className="mobile_image" src={yoyo2mobile}></img>
        </div>

            <div className="intro">
                { languageSelection === "Es" 
                    ?
                        <>
                            <h2>Hola! Soy Ignacio</h2>	
                            <h3> de emprendimientos, diseño y programacion</h3>
                        </>
                    : languageSelection === "En"
                        ? 
                            <>
                                <h2>Hi! I am Ignacio</h2>	
                                <h3>I am a developer, desginer and entrepeneur</h3>
                            </>
                        : 
                            <>
                                <h2>Oi! Sou Ignacio</h2>	
                                <h3>Sou desarollador, dischadore e meprdendor</h3>
                            </>
                }   
                <div className="tools">
                    <div className="go_to_page"> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://github.com/ignacioHourquescos"><FaGithub color="white"/></a></div>               
                </div>
                <div className="portfolio">
                    <p>Portfolio</p>
                    <img src={flechaabajo} width={"50%"}></img>  
                 </div>        
            </div>
            

            <div className="poligono"></div>
            {/* <div className="poligono2"></div> */}

        </div>
	);
}

export default Header;


