import './Language.scss'
import useAppContext from '../../Context/UseAppContext';

const Language = ({}) => { 
    
    const { displayEnglish, displayEspañol, displayPortugues} = useAppContext();

	return ( 
        <div className="language_selection">
            <button onClick={() => displayEspañol()}>Es</button>
            <button onClick={() => displayEnglish()}>En</button>
            <button onClick={() => displayPortugues()}>Pt</button>           
        </div>
	);
}

export default Language;


