import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import Image from "./assets/main_illustration.png";

const SignUp = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Please enter your password"),
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
  });
  return (
    <>
      <div className="signUp">
        <div className="image-auth">
          <img src={Image} alt="" />
        </div>
        <div className="form">
          <h1>ZOU</h1>
          <p className="p1">
            Create a Zou account and join the community of Farmers
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
              first_name: "",
              last_name: "",
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
                      name="first_name"
                      placeholder="First name"
                    />
                  </div>
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="error_message"
                  />
                  <div className="input-container">
                    <Field
                      type="text"
                      name="last_name"
                      placeholder="Last Name (optional)"
                    />
                  </div>
                  <ErrorMessage
                    name="Last_name"
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
                    <span className="Registration">Log In</span>
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
