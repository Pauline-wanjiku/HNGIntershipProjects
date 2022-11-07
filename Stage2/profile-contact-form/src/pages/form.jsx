import React from 'react'
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";


function ContactForm() {
    const information = {
      heading: "Contact Me",
      paragraph:
        "Hi there, contact me to ask me about anything you have in mind.",
      name: "Ms. Pauline Wanjiku",
    };

    //useForm
    const { register, handleSubmit } = useForm();

    //handling onclick
    const onSubmit = (data) => {
      console.log(data);
    };

    const [checkboxValue, setCheckbox] = useState(false);
    const [message, setMessage] = useState(
      "Send me a message and I'll reply you as soon as possible..."
    );
    const handleOnClick = () => {
      setMessage(
        "Hey {name}, hope you are doing great.Let us collaborate on project axyz"
      );
    };
    const { heading, paragraph, name } = information;
    return (
      <Form>
        <h1 className="contactMe">{heading}</h1>
        <p className="content">{paragraph}</p>
        <div className="firstLastName">
          <label htmlFor="firstName" className="fnameLabel">
            First name
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              id="first_name"
              {...register("firstName", { required: true, maxLength: 10 })}
            />
          </label>
          <label htmlFor="lastName" className="lnameLabel">
            Last name
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              id="last_name"
              {...register("lastName", { required: true, maxLength: 10 })}
            />
          </label>
        </div>
        <div className="email">
          <label htmlFor="email" className="emailLabel">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="yourname@gmail.com"
            id="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </div>
        <div>
          <label htmlFor="message" className="messageLabel">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={message}
            cols="10"
            rows="10"
            onClick={handleOnClick}
            {...register("message", { required: true })}></textarea>

          <p className="errorMessage">Please enter a message</p>
        </div>
        <div>
          <label className="check-container">
            You agree to provide your data to {name} who can contact you.
            <input
              type="checkbox"
              name="chekbox"
              id="terms"
              value={checkboxValue}
              onChange={() => setCheckbox(!checkboxValue)}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            id="btn__submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!checkboxValue}>
            Send message
          </button>
        </div>
      </Form>
    );
}

export default ContactForm;