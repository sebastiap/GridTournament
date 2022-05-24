// import { Link } from 'react-router-dom';
import bttClasses from './SimpleButton.module.css';

function SimpleButton(props) {
    return (
        <>
        <button className={bttClasses.button} onClick={props.onClick}>boton</button>
        </>
    )
}

export default SimpleButton;