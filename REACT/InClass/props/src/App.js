import { Cat } from "./components/Cat";


function App() {

  return (
    <div className="App">
       <Cat name="Cenitin" img="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_640.jpg" color="White" isBlueEyed/>

       <Cat name="Şerafettin" img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg" color="Grey" isBlueEyed={false}/>

       <Cat name="Garfield" img="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg" color="Orange" isBlueEyed/>

       <Cat name="Soda" img="https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_640.jpg" isBlueEyed={false} />
    </div>
  )
}

export default App;
