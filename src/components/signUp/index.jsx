import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import history from "../utils";
import "./style.scss";
import Image from "./assets/main_illustration.png";

const SignUp = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Please enter your password"),
    full_name: Yup.string().required("Please enter your full name"),
    last_name: Yup.string().required("Please enter your last name"),
  });

  const handleClick = () => {
    history.push("/LogIn");
  };
  const handleChange = () => {
    history.push("/");
  };
  return (
    <>
      <div className="signUp">
        <div className="image-auth">
          <img src={Image} alt="" />
        </div>
        <div className="form">
          <h1 onClick={handleChange}>ZOU</h1>
          <p className="p1">
            Create a Zou account and join the community of Farmers
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
              full_name: "",
              phone_number: "",
            }}
            onSubmit={console.log("hello world")}
            validationSchema={signInSchema}
          >
            <>
              <section className="login_form">
                <Form>
                  <div className="input-container">
                    <Field
                      type="text"
                      name="full_name"
                      placeholder="your full name e.g Jane Doe"
                    />
                  </div>
                  <ErrorMessage
                    name="full_name"
                    component="div"
                    className="error_message"
                  />
                  <div className="input-container">
                    <Field
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number "
                    />
                  </div>
                  <ErrorMessage
                    name="phone-number"
                    component="div"
                    className="error_message"
                  />

                  <div className="input-container">
                    <Field type="email" name="email" placeholder="email" />
                  </div>

                  <ErrorMessage name="email" component="div" />
                  <div className="input-container">
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error_message"
                  />
                  <div className="input-container">
                    <Field
                      type="password"
                      name="confirm-password"
                      placeholder="Confirm password"
                    />
                  </div>
                  <ErrorMessage
                    name="confirm-password"
                    component="div"
                    className="error_message"
                  />

                  <div>
                    <button className="form-button" type="submit">
                      Sign Up
                    </button>
                  </div>
                  <p className="fa-register">
                    Already have an account?
                    <span className="Registration" onClick={handleClick}>
                      Log In
                    </span>
                  </p>
                </Form>
              </section>
            </>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUp;
