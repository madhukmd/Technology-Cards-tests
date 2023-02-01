import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`card ${className}`}>
      <div className="cardContainer">
        <h1 className="cardHead">{title}</h1>
        <p className="cardPara">{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
