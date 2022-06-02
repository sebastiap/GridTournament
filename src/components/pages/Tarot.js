
import '../../../src/styles/tarot.css';
import TarotClasses from './Tarot.module.css';
import TarotCard from '../common/TarotCard'

function Tarot() {
  return (
	<div className={TarotClasses.contenedorTarot}>
		<header className={TarotClasses.header}>
			<h2>Tarot Reading</h2>
		</header>
		<div className={TarotClasses.card1}>
		<TarotCard name="The Fool" img="https://cdn.pixabay.com/photo/2021/04/05/22/42/the-fool-6154764_960_720.jpg"/>
		</div>
		<div className={TarotClasses.card2}>
		<TarotCard name="The Star" img="https://i.pinimg.com/564x/26/eb/63/26eb63066d199659a536d2ae3c4918cb.jpg"/>
		</div>
		<div className={TarotClasses.card3}>
			<TarotCard name="Emperor" img="https://cdn.pixabay.com/photo/2021/04/05/22/42/the-emperor-6154771_960_720.jpg"/>
		</div>
		<footer className={TarotClasses.footer}>
			<h3>The past just slipped , but the future is in your hands...</h3>
		</footer>
	</div>
  );
}

export default Tarot;
