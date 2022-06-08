import { Link } from 'react-router-dom';
import menuClasses from './menu.module.css';

function Menu() {
  

   

    return (
        <div className={menuClasses.contenedor} >
            <div className={menuClasses.header}>
            Bienvenido a GridTournament , una coleccion de conceptos con CSS grid
            </div>
      
            <Link to="/torneo" className={menuClasses.opcion1}>
            <h1>
            Torneo de Poder
            </h1>
            <div className={menuClasses.imgcontainer}>

            <img src="https://64.media.tumblr.com/c07e7a11e1419375958094a8b3de334f/tumblr_nszghzvasq1uzhzl0o1_250.gifv" alt="Batalla 1" />
            <img src="https://64.media.tumblr.com/0a83746f02cbc37b0decf79fe2fc1010/tumblr_nrsjclOaAt1uzhzl0o1_400.gifv" alt="Batalla 2"/>
            <img src="https://64.media.tumblr.com/699774ecfb6a05ddce934cabc743dac8/tumblr_ns2iexYJfk1uzhzl0o1_250.gifv" alt="Batalla 3"/>
            </div>
            <p> En este proyecto debes lograr que nuestro protagonista participe en un torneo que solo seguira mientras mantenga entretenido al malvado organizador.</p>
            </Link>

            <Link to="/tarot" className={menuClasses.opcion2}>
            <h1>
            Tarot de 3 Cartas
            </h1>
            <p> En este proyecto la tarotista nos brindara predicciones sobre Presente Pasado y Futuro.</p>
            <div className={menuClasses.flexContainer}>
            <div className={menuClasses.flexItemCard}>The Fool</div>
            <div className={menuClasses.flexItemCard}>The World</div>
            <div className={menuClasses.flexItemCard}>The Hermit</div>

            </div>
            </Link>
            <Link to="/cardGenerator" className={menuClasses.opcion3}> 
            
            <div >
            <h1>Generador de Cartas</h1>
            </div>
            <div >
            <canvas id="canvas" width="150" height="200">

            </canvas>
            </div>
            </Link>
            <div className={menuClasses.footer}>
            Copyleft Sebastian Picardi 2022
            </div>
        </div>
    )
}

export default Menu;