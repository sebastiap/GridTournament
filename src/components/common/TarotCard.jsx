// import { Link } from 'react-router-dom';
import CardClasses from './TarotCard.module.css';

function TarotCard(props) {
    return (
<div className={CardClasses.flipcard}>
  <div className={CardClasses.flipcardinner}>
    <div className={CardClasses.flipcardfront}>
    </div>
    <div className={CardClasses.flipcardback}>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name}  />
      <p>In the Emperor tarot card, a stoic ruler figure can be seen on his throne, which is adorned with the heads of four rams, representing his astrological sign - Aries.</p>
      <p>The Emperor is the Father. He sits upon a large stone throne, adorned with four rams’ heads (symbolic of his connection with Aries and the planet Mars). In his right hand, The Emperor holds an ankh, the Egyptian symbol of life, and in his left is an orb representing the world over which he rules.</p>
    </div>
  </div>
</div>
    )
}

export default TarotCard;