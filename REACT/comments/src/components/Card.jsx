import data from "../helper/data";
import CardStyle from "../SASS/card.module.scss"


const Card = () => {
    return (
        <div className={CardStyle["card-container"]}>
            {
                data.map((person,i) => {
                    return (
                        <div key={i} className={CardStyle["card"]}>
                            <h3>{person.job}</h3>
                            <img src={person.img} alt="" />
                            <p className={CardStyle.name}>{person.name}</p>
                            <p>{person.comment}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card
