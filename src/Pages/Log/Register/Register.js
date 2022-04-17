import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../About/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Register</h2>
      <input
        className="mb-3 w-100"
        type="text"
        name="name"
        id=""
        placeholder="Your Name"
      />
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
        </Form.Group>

        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms and Conditions
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
