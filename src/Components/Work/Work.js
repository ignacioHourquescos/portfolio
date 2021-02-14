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
import useAppContext from '../../Context/UseAppContext';


<Link className="link_button link_button_agenda" to={'/agenda'}>Agenda Completa</Link>

const Work = ({project}) => { 
	
    const { languageSelection } = useAppContext();
    

	return ( 
        <ScrollAnimation animateIn='fadeInLeft'  animateOnce={true} delay={0} offset="10">
     
	        <div className = "work" style={{backgroundImage:`url(${project.img})`}}>

            {/* <div className="left" style={{backgroundColor:`${project.img}`}}> */}
	        	<div className="left" >
                    {languageSelection === 'Es'?   
                        <>
                            <h2>{project.title.es}</h2>	
	        		        {/* <h3>{project.type.es}</h3> */}
	        		        <p>{project.desc.es}</p>
                        </>
                    :
                        languageSelection === 'En'?   
                            <>
                                <h2>{project.title.en}</h2>	
	        		            {/* <h3>{project.type.en}</h3> */}
	        		            <p>{project.desc.en}</p>
                            </>
                            :
                            <>
                                <h2>{project.title.pt}</h2>	
	        		            {/* <h3>{project.type.pt}</h3> */}
	        		            <p>{project.desc.pt}</p>
                            </>                           
                    }

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
                   
                    <a href={`${project.link}`} className="go_to_page"> 
                        {languageSelection === 'Es'?
                                <a>Ir a proyecto</a> 
                            :
                                languageSelection === 'En'?
                                    <a>Go to Project</a>
                                : 
                                    <a>Ir a projeto</a>
                        }

                        {/* <FaArrowCircleRight color={"yellow"}/> */}
                    </a>
	        	</div>
                
                <div className="right">
                    
	        	</div>
	        </div>
           
        </ScrollAnimation>
	);
}

export default Work;


