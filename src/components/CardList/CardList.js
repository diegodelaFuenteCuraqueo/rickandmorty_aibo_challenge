import Card from '../Card/Card'
import './styles.css'

function CardList({ allCards, onCardClick }) {
  const cards = allCards.map(card => (
    <Card
      characterData={card}
      key={card.id}
      onClick={onCardClick}
    />
  ))
  return (
    <div className="cardList card-container">
      {cards}
    </div>
  )
}

export default CardList