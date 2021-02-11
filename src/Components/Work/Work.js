import './Work.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import { FaHtml5} from 'react-icons/fa';
import { FaCss3} from 'react-icons/fa';
import { FaNode} from 'react-icons/fa';
import { FaReact} from 'react-icons/fa';
import { FaBootstrap} from 'react-icons/fa';
import { FaSass} from 'react-icons/fa';
import { FaJs} from 'react-icons/fa';
import { FaDatabase} from 'react-icons/fa';
import { FaGoogle} from 'react-icons/fa';
import { FaArrowCircleRight} from 'react-icons/fa';


<Link className="link_button link_button_agenda" to={'/agenda'}>Agenda Completa</Link>

const Work = ({project}) => { 
	
	return ( 
        <ScrollAnimation animateIn='fadeInLeft'  animateOnce={true} delay={0} offset="10">
     
	        <div className = "work" style={{backgroundImage:`url(${project.img})`}}>

            {/* <div className="left" style={{backgroundColor:`${project.img}`}}> */}
	        	<div className="left" >
                	<h2>{project.title}</h2>	
	        		<h3>{project.type}</h3>
	        		<p>{project.desc}</p>
                    <div className="tools">
                        { project.icons.html==1 ? <FaHtml5 color="white"/> : ""}
                        { project.icons.css==1? <FaCss3 color="white"/> : ""}
                        { project.icons.node==1? <FaNode color="white"/> : ""}
                        { project.icons.react==1? <FaReact color="white"/> : ""}
                        { project.icons.sass==1? <FaSass color="white"/> : ""}
                        { project.icons.bootstrap==1? <FaBootstrap color="white"/> : ""}
                        { project.icons.js==1? <FaJs color="white"/> : ""}
                        { project.icons.mysql==1? <FaDatabase color="white"/> : ""}
                        { project.icons.google==1? <FaGoogle color="white"/> : ""}
                    </div>
                   
                    <a href={`${project.link}`}className="go_to_page"> 
                        <a>Ir a proyecto</a> 
                        <FaArrowCircleRight color={"yellow"}/>
                    </a>
	        	</div>
                
                <div className="right">
                    
               
	        	</div>
	        </div>
           
        </ScrollAnimation>
	);
}

export default Work;


