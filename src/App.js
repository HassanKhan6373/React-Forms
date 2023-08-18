import "./App.css"

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const App = () => {


  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name Required';
    }
    if (!values.email) {
      errors.email = 'Last Required';
    }
    if (!values.message) {
      errors.email = 'messege is required';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0][0-9]{10}$/.test(values.phone)) {
      errors.phone = 'Invalid phone number. Must start with zero and be 11 digits equal';
    }
    if (!values.password) {
      errors.password = 'Password is required and must be greater';
    } 
    // else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(values.password)) {
    //   errors.password = 'Password must contain at least one capital letter and one special character';
    // }
    if (!values.repeatPassword) {
      errors.repeatPassword = 'repeatPasswordis required';
    }
    if (values.repeatPassword!==values.password) {
      errors.repeatPassword = 'same password is required';
      errors.repeatPassword = 'same password is required';
    }
    
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.message) {
      errors.email = 'messege is required';
    }
  
    return errors;
  };

  return (
    <div>

<div className="container">
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: '',
          repeatPassword:'',
          message: '',
        }}
        validate={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          // You can handle the form submission here
          console.log(values);
          
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form id="contact">
            <h3>Colorlib Contact Form</h3>
            <h4>Contact us for a custom quote</h4>
            <fieldset>
              <Field
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoFocus
              />
              <ErrorMessage name="name" component="div" className="error" />
            </fieldset>
            <fieldset>
              <Field
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <ErrorMessage name="email" component="div" className="error" />
            </fieldset>
            <fieldset>
              <Field
                type="tel"
                name="phone"
                placeholder="Your Phone Number (optional)"
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </fieldset>
            <fieldset>
              <Field
                type="password"
                name="password"
                placeholder="password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </fieldset>
            <fieldset>
              <Field
                type="password"
                name="repeatPassword"
                placeholder="reapeat password"
              />
              <ErrorMessage name="repeatPassword" component="div" className="error" />
            </fieldset>
            <fieldset>
              <Field
                as="textarea"
                name="message"
                placeholder="Type your message here...."
              
              />
              <ErrorMessage name="message" component="div" className="error" />
            </fieldset>
            <fieldset>
              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
            <p className="copyright">
              Designed by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" title="Colorlib">Colorlib</a>
            </p>
          </Form>
        )}
      </Formik>
    </div>

    </div>
  )
}

export default App