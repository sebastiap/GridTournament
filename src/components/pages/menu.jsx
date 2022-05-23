import { Link } from 'react-router-dom';
import menuClasses from './menu.module.css';

function Menu() {
    return (
        <div className={menuClasses.contenedor}>
            <div className={menuClasses.header}>
            Bienvenido a GridTournament , una coleccion de conceptos con CSS grid
            </div>
      
            <Link to="/torneo" className={menuClasses.opcion1}>
            <h1>
            Torneo de Poder
            </h1>
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
            <Link to="/cardGenerator" className={menuClasses.opcion2}> 
            <div className={menuClasses.opcion3}>
            CardGen
            </div>
            </Link>
            <div className={menuClasses.footer}>
            Soy el footer del menu
            </div>
        </div>
    )
}

export default Menu;