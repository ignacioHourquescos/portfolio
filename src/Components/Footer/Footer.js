import './Footer.scss';
import avion from '../../images/avion.png'

const Footer = ({icons}) => { 
	
	return ( 
        <div className = "footer" >
            <img src={avion}></img>
        </div>
	);
}

export default Footer;

