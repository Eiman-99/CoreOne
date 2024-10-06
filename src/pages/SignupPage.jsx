import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import { AuthContext } from "../utilities";

function SignuPage() {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { valid, validEmail, validPassword, signup } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    signup(userName, email, password);
  };

  return (
    <section className="signup">
      <h3>Sign Up</h3>
      <Form className="custom-form p-5 w-50" onSubmit={handleSignup}>
        {!valid && (
          <div className="invalid">please fill out all fields to proceed</div>
        )}
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!validEmail && <div className="invalid">Enter a valid email</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {!validPassword && (
            <div className="invalid">Minimum 6 characters</div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default SignuPage;
