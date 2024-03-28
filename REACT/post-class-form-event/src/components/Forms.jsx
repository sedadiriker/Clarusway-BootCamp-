import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Forms() {
  const [data, setData] = useState({
    username:"",
    email:"",
    password:""
  });

  const {username,email,password} = data
  const handledata= (e) => {
    setData({...data, [e.target.id] : e.target.value }) // dinamik veri güncelleme
    console.log(e.target.id)
  };
 console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault() // Submit refresh ini engelle
    
    alert(`
    username : ${username},
    email : ${email},
    password : ${password}
    `,

   setData({
    username:"",
    email:"",
    password:""
  })

    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handledata}
          type="text"
          placeholder="Enter username"
          value={username}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handledata}
          type="email"
          placeholder="Enter email"
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handledata}
          type="password"
          placeholder="Password"
          value={password}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
