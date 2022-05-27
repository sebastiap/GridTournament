// import { Link } from 'react-router-dom';
import bttClasses from './CustomButton.module.css';

function CustomButton(props) {
    return (
        <>
        <button style={{background:props.color}} className={bttClasses.buttonClass} onClick={props.onClick}>{props.buttonName}</button>
        </>
    )
}

export default CustomButton;