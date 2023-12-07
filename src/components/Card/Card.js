import './styles.css'

function Card({ characterData, onClick }) {

  const { name, species, image, status, id } = characterData
  return (
    <div onClick={ () => onClick(id)} className="card">
      <div>
        <img src={image} alt="Character" className="characterImage"/>
      </div>
      <div>
        <h2> {name} </h2>
        <ul>
          <li>Especie: <strong> {species}</strong> </li>
          <li>Estado: <strong>{status}</strong> </li>
        </ul>
      </div>
    </div>
  )
}
export default Card