import { data } from "../../helpers/data";
import Form from "react-bootstrap/Form";
import LegendCard from "./LegendCard";

const LegendContainer = () => {

  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <div className="border border-3">
      {
        data.map((player) => (
          <LegendCard key={player.id} {...player}/>
        ))
      }
      </div>
     
      
    </div>
  );
};

export default LegendContainer;
