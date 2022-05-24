// import { Link } from 'react-router-dom';
import genClasses from './cardGen.module.css';
import CustomButton from '../../common/CustomButton';
import PrintButton from '../../common/PrintButton';
import SimpleButton from '../../common/SimpleButton';

function CardGen() {
    return (
        <>
        <div className={genClasses.header}>
        Bienvenido a GridTournament , una coleccion de conceptos con CSS grid
        </div>
        <div className={genClasses.contenedor}>

            <div className={genClasses.options}>
                <div className={genClasses.botonera}>
                    <CustomButton buttonName="Ayuda" color="#5bc0de" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Borrar Todo" color="$c12e2a" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Cargar Ejemplo" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Cargar Archivo" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Grabar Archivo" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Ordenar" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Map/Filter" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Generar Mazo" color="#5cb85c" onClick={() => {console.log("hola")} }/>

                </div>
                <div className={genClasses.pageSettings}>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <PrintButton/>
                    <PrintButton/>
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