import './Title.scss';
import arrow from '../../images/arrowblack.png'


const Title = ({icons}) => { 
	
	return ( 
        <div className = "title" >
            <h2>Portfolio</h2>
            <div class="downArrow bounce">
                <img width="30" height="30" alt="" src={arrow} />
            </div>
        </div>
	);
}

export default Title;

