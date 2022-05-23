
import '../../../src/styles/App.css';
import {useState} from "react"
import {personajes,formas,imgenemigo,options,Luchar,Empujar,Huir} from '../logic/Torneo'

function Torneo() {

const [formaProta,setFormaProta] = useState("Base");
const [formaColor,setFormaColor] = useState("white");
const razas = () => {
	var personaje = personajes[0];
	var formasposibles = formas.filter(forma => (forma.raza === personaje.raza)
	 || (personaje.ki === forma.ki) 
	 ||(personaje.nombre === forma.user) 
	 || (forma.user === 'TODOS')
	)
	// console.log(formasposibles);
	return formasposibles;

}
	function changeForm(modo,color){
		console.log(modo);
		console.log(color);
		setFormaProta(modo);
		setFormaColor(color);

	}
	var misformas = razas();
  return (
    <div className="App">
	<div className="contenedor">
		<header className="header">
			<h2>HEADER</h2>
		</header>
		<main className="contenido">
			<h1>Contenido</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis rutrum gravida. Aliquam vel nunc sit amet nibh aliquam sollicitudin eu vitae elit. Duis varius turpis est, at feugiat metus blandit non. Mauris est nunc, ullamcorper nec egestas at, faucibus ac ex. Cras gravida ut odio eget vulputate. Suspendisse ut nunc cursus, vulputate tortor id, mollis magna. Proin mattis euismod magna. Suspendisse mattis, nunc vitae mattis iaculis, elit massa facilisis magna, ac consequat magna lacus sit amet lectus. Suspendisse a lacinia est, a semper turpis. Phasellus lobortis eget nibh in scelerisque. Morbi feugiat volutpat nisl, vehicula commodo augue volutpat at. Aenean aliquet tristique diam. Aenean maximus, quam non sollicitudin efficitur, est sapien pharetra odio, eget aliquam justo urna eu eros. Donec nec tincidunt tortor.
		</p>
		</main>
		<aside className="sidebar">
			<h3>PELEAR</h3>
		</aside>
		<div className="rival">
			<h3>Rival</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adip</p>
			<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmQxJGv23Y2nkUyfQZZTWRWTMEILZm756pg&usqp=CAU" alt="enemy" />
		</div>
		<div className="protagonista">
			<div className="protadata">

			<h3>{personajes[0].nombre}</h3>
			<p>Guerrero {personajes[0].raza}</p>
			<p>Nivel de Pelea: {personajes[0].id}</p>
			<p>Forma Actual: {formaProta}</p>
			<div className="formas">
				
			{misformas.map(forma => 
				<button key={forma.id} type="button" style={{background:forma.aura}} onClick={() => changeForm(forma.modo,forma.aura)}>{forma.modo}</button>)}
			</div>
			</div>

			<img style={{borderColor:formaColor}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCQVP-lxNewrbhT5y2M0RdAHRg-aFxdSrpQ&usqp=CAU" alt="Protagonista"/>

		</div>
		<div className="widget-1">
			<h3>EMPUJAR</h3>
		</div>
		<div className="widget-2">
			<h3>HUIR</h3>
		</div>
		<footer className="footer">
			<h3>FOOTER</h3>
		</footer>
	</div>
    </div>
  );
}

export default Torneo;
