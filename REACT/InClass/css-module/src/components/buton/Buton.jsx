import Butonstyle from './Buton.module.css'


const Buton = () => {
  return (
    <div>
      <div className={Butonstyle.butonContainer}>
        <button className={`${Butonstyle.btn} ${Butonstyle["btn-blue"]}`}>İnfo</button>
        <button className={`${Butonstyle.btn} ${Butonstyle["btn-red"]}`}>Back</button>
      </div>
    </div>
  )
}

export default Buton

