import Card from "../components/Card"
import HomeStyle from "../SASS/homepage.module.scss"

const Homepage = () => {
  return (
    <div className={HomeStyle.container}>
      <div className={HomeStyle.title}>
      <h1>Comments</h1>
      <img className={HomeStyle.img} src="./images/chat-2389223_1280.png" alt="" />
      </div>
      <Card/>

      <footer>
        
      </footer>
    </div>
  )
}

export default Homepage
