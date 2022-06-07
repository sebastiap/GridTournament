
import '../../../src/styles/App.css';
import {useState} from "react"
import {personajes,formas,imgenemigo,options as tecnicas,Luchar,Empujar,Huir} from '../logic/Torneo'

function Torneo() {

const [formaProta,setFormaProta] = useState("Base");
const [formaColor,setFormaColor] = useState("white");
const [poderenemigo,setPoderEnemigo] = useState(1000);
const [protagonista,setProtagonista] = useState(personajes[0]);

const razas = () => {
	var personaje = protagonista;
	var formasposibles = formas.filter(forma => (forma.raza === personaje.raza)
	 || (personaje.ki === forma.ki) 
	 ||(personaje.nombre === forma.user) 
	 || (forma.user === 'TODOS')
	)
	return formasposibles;

}
	function changeForm(modo,color){
		console.log(protagonista);
		console.log(color);
		setFormaProta(modo);
		setFormaColor(color);

	}
	function handleChange(event)  {
		let obj = JSON.parse(event.target.value);
		setProtagonista(obj);
		console.log(obj)

	  }

	  function pelear()  {
		setPoderEnemigo(1000) //a futuro random
		Luchar();
		Huir();
		Empujar();

	  }

	var misformas = razas();
  return (
    <div className="App">
	<div className="contenedor">
		<header className="header">
			<h2>DRAGON BALL - EL TORNEO SECRETO</h2>
		</header>
		<main className="contenido">
			<h1>Relator:</h1>
			<p>
			<b>{protagonista.nombre}</b> asesta el primer golpe. Su rival, <b>Raspberry</b> , apenas puede mantenerse en pie. <b>Zeno-Sama</b> comienza a aburrirse, por lo que <b>{protagonista.nombre}</b> considera cambiar de forma para hacer la batalla mas interesante.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis rutrum gravida. Aliquam vel nunc sit amet nibh aliquam sollicitudin eu vitae elit. Duis varius turpis est, at feugiat metus blandit non. Mauris est nunc, ullamcorper nec egestas at, faucibus ac ex. Cras gravida ut odio eget vulputate. Suspendisse ut nunc cursus, vulputate tortor id, mollis magna. Proin mattis euismod magna. Suspendisse mattis, nunc vitae mattis iaculis, elit massa facilisis magna, ac consequat magna lacus sit amet lectus. Suspendisse a lacinia est, a semper turpis. Phasellus lobortis eget nibh in scelerisque. Morbi feugiat volutpat nisl, vehicula commodo augue volutpat at. Aenean aliquet tristique diam. Aenean maximus, quam non sollicitudin efficitur, est sapien pharetra odio, eget aliquam justo urna eu eros. Donec nec tincidunt tortor.
		</p>
		</main>
		<aside className="sidebar">
			<h3>PELEAR</h3>
		</aside>
		<div className="rival">
			{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmQxJGv23Y2nkUyfQZZTWRWTMEILZm756pg&usqp=CAU" alt="enemy" /> */}
			<img src={imgenemigo} alt="enemy" />
			<div>
			<h3>Rival</h3>
			<h3>Nivel de pelea: {poderenemigo}</h3>
			</div>
			<p>Estos soldados son los mas débiles , sin embargo son poderosos en comparacion a otras razas.</p>
		</div>
		<div className="protagonista">
			<div className="protadata">

			<h3>{protagonista.nombre}</h3>
			{/* <p>Guerrero {personajes[0].raza}</p> */}
			<select name="select"  id='pjselect' 
			onChange={handleChange}
			// defaultValue={{ label: "Cambiar Personaje", value: 0 }}
			// value={protagonista}
			
			>
				{personajes.map(pj => <option key={pj.id} value={JSON.stringify(pj)}>{pj.nombre}</option> )}
			</select>
		 
			<p>Nivel de Pelea: {protagonista.id}</p>
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
			<h3>DRAGON BALL - EL TORNEO SECRETO</h3>
		</footer>
	</div>
    </div>
  );
}

export default Torneo;
