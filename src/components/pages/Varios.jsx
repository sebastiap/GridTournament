import menuClasses from './menu.module.css';
import miscClasses from './varios.module.css'

function Menu() {
  

   

    return (
        <div className={menuClasses.contenedor} >
            <div className={menuClasses.header}>
            Prueba de Conceptos Varios
            </div>
            <div className={miscClasses.resizer}>
                Estirame!
            </div>
            <div className={miscClasses.morfismbox}>

                <div className={miscClasses.morfism}>
                    Afuera!
                </div>
                <div className={miscClasses.morfisminset}>
                    Adentro!
                </div>
            </div>
            {/* <div>
                <input type="checkbox" id="checkbox"/>
                <label Htmlfor="checkbox">Mostrame el mensaje</label>
                <div className={miscClasses.invi}> Esto es solo CSS!!!</div>
            </div> */}
            <div className={miscClasses.wall}>
                <div className={miscClasses.glass}></div>
            </div>
            <div className={miscClasses.h1color}>
                <h1 >PONETE LENTES!</h1>
                <h1 >ESTO SE VE NORMAL!</h1>
            </div>
            <div className={miscClasses.wrapper}>
                <div className={miscClasses.card}>
                <h2>Card 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum incidunt praesentium magni consequatur odio, in tenetur ea doloribus commodi, fugit sequi qui ipsa similique!</p>
                </div>
                <div className={miscClasses.card}>
                <h2>Card 2</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum incidunt praesentium magni consequatur odio, in tenetur ea doloribus commodi, fugit sequi qui ipsa similique!</p>
                </div>
                <div className={miscClasses.card}>
                <h2>Card 3</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum incidunt praesentium magni consequatur odio, in tenetur ea doloribus commodi, fugit sequi qui ipsa similique!</p>
                </div>
                <div className={miscClasses.card}>
                <h2>Card 4</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum incidunt praesentium magni consequatur odio, in tenetur ea doloribus commodi, fugit sequi qui ipsa similique!</p>
                </div>
                <div className={miscClasses.card}>
                <h2>Card 5</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum incidunt praesentium magni consequatur odio, in tenetur ea doloribus commodi, fugit sequi qui ipsa similique!</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;