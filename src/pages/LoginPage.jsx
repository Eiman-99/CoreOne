import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple2.png";
import { useState, useContext } from "react";
import { AuthContext } from "../utilities";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { users, login, valid } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <section className="login">
      <Form className="custom-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        {!valid && (
          <div className="invalid">Please fill out all fields to proceed</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
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
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn w-100">
          Login
        </Button>
        <div className="or">
          <div className="hline"></div>
          <p>Or</p>
          <div className="hline"></div>
        </div>
        <div className="social-links">
          <a href="#" id="google">
            <img src={google} />
          </a>
          <a href="#" id="facebook">
            <img src={facebook} />
          </a>
          <a href="#" id="github">
            <img src={apple} />
          </a>
        </div>

        <p id="go-to-signup">
          <Link to="/signup">Don't have an account?</Link>
        </p>
      </Form>
    </section>
  );
}

export default LoginPage;
