// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={`${className} card-item`}>
      <h1 className="title">{title}</h1>
      <p className="desc">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
