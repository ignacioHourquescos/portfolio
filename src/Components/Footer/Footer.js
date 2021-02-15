import './Footer.scss';
import avion from '../../images/avion.png'

const Footer = ({icons}) => { 
	
	return ( 
        <div className = "footer" >
            {/* <img src={avion}></img> */}
            <p className="copyright">© 2021 Ignacio Hourquescos</p>
 
            <p className="mail">ihourquescos@gmail.com</p>
            <p className="clone">Liked this template? <a href="https://github.com/ignacioHourquescos/portfolio" style={{color:"yellow"}}>Clone it!</a></p>
      
        </div>
	);
}

export default Footer;



