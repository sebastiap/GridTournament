// import { Link } from 'react-router-dom';
import genClasses from './cardGen.module.css';

function CardGen() {
    return (
        <>
        <div className={genClasses.header}>
        Bienvenido a GridTournament , una coleccion de conceptos con CSS grid
        </div>
        <div className={genClasses.contenedor}>

            <div className={genClasses.options}>
                <div className={genClasses.botonera}>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                </div>
                <div className={genClasses.pageSettings}>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                </div>
                <div className={genClasses.defaultSettings}>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                </div>
            </div>
            <div className={genClasses.form}>
            <div className={genClasses.formbox}></div>
            </div>
            <div className={genClasses.preview}>
            <div className={genClasses.card} ></div>
            <div className={genClasses.card} ></div>
            </div>
            
        </div>
        </>
    )
}

export default CardGen;