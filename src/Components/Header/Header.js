import './Header.scss';
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';
import yoyo2 from '../../images/yoyo2.png'
import yoyo2mobile from '../../images/yoyo2_mobile.png'
import useAppContext from '../../Context/UseAppContext';
import avion from '../../images/avion3.png'

const Header = ({icons}) => { 

    const { languageSelection } = useAppContext();

    const me = [
        "Busco combinar innovación, lógica y el diseño para crear productos digitales de alto valor agregado. Siempre abierto a nuevos desafios!",
        "I look forward to combine innovation, logic and design to create highly value added digital products. Open to new challenges!",
        "Procuro combinar inovação, lógica e disenho para criar produtos digitais de alto valor agregado. Sempre Aberto a novos desafios!"
    ]
	
	return ( 
        <div className = "me" >
            <div className="paper_plane">
        <img src={avion} width={"50%"}></img>  
            </div>
 
            <div className="intro_mobile">
                { languageSelection === "Es" 
                    ?
                        <>
                            <h2>Hola! Soy Ignacio</h2>	
                            <h3>{me[0]}</h3>
                        </>
                    : languageSelection === "En"
                        ? 
                            <>
                                <h2>Hi! I am Ignacio</h2>	
                                <h3>{me[1]}</h3>
                            </>
                        : 
                            <>
                                <h2>Oi! Sou Ignacio</h2>	
                                <h3>{me[2]}</h3>
                            </>
                }   
                <div className="tools">
                    <div className="go_to_page"> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://github.com/ignacioHourquescos"><FaGithub color="white"/></a></div>               

                    {/* <p>Portfolio</p>
                    <img src={flechaabajo} width={"50%"}></img>   */}
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
                            <h3>{me[0]}</h3>
                        </>
                    : languageSelection === "En"
                        ? 
                            <>
                                <h2>Hi! I am Ignacio</h2>	
                                <h3>{me[1]}</h3>
                            </>
                        : 
                            <>
                                <h2>Oi! Sou Ignacio</h2>	
                                <h3>{me[2]}</h3>
                            </>
                }   
                <div className="tools">
                    <div className="go_to_page"> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance color="white"/></a></div>
                    <div className="go_to_page"> <a href="https://github.com/ignacioHourquescos"><FaGithub color="white"/></a></div>               
                </div>
k  
            </div>
            
                   
            <div className="poligono"></div>
            {/* <div className="poligono2"></div> */}

        </div>
	);
}

export default Header;


