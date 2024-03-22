import Card from "./components/card/Card";
import data from "./data";

function App() {
  
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Languages</h1>
      {
        data.map((item,i) => {
          const {language,img} = item
         
          return(
            <Card key={i} language={language} img={img} />
          )  
        })
      }
    </div>
  );
}

export default App;
