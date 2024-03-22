import Buton from "../buton/Buton.jsx"
import CardStyle from './Card.module.css'

const Card = ({language,img}) => {
  return (
    <div>
      <div className={CardStyle.wrapper}>
        <h1>{language}</h1>
      </div>
      <img className={CardStyle.images} src={img} alt={language} />
      <Buton/>
    </div>
  )
}

export default Card
