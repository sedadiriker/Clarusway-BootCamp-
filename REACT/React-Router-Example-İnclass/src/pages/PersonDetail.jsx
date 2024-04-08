import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const [person, setPerson] = useState("");
  const {id} = useParams()
  const navigate = useNavigate()

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div>
      <img src={person?.avatar} alt={person.id} />
      <p>Email : {person.email}</p>
      <p>FullName : {person.first_name} {person.last_name}</p>
      <div className="btns">
        <button className="btn btn-danger" onClick={() =>navigate(-1)}>Back</button>
        <button className="btn btn-success" onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  )
}

export default PersonDetail
