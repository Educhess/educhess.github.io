import React, { useState, useEffect } from "react";
import "./contact.css";
import ReactDOM from 'react-dom';


const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    contact_number: "",
    Date_of_birth: "",
    email: "",
    message: "",
  })
  const { name, contact_number, email, message, Date_of_birth } = data

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/jen_ken/google_sheets/IbFTnNaHKLKJnIRy?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, contact_number, email, message, Date_of_birth, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json()
      //  document.getElementById("success"),innerHTML = "Thank you for reaching out to us!";
      alert("We have recieved your message. Someone from our team will contact you soon")
      setData({ ...data, name: '', contact_number: '', email: '', message: '', Date_of_birth: '' })
    } catch (err) {
      console.log(err)
    };
  }

  return (
    <form className="form" onSubmit={handleSubmit} style={{ marginTop: '70px', marginLeft: '1px', width: '40%', height: '35%', align: 'center' }}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <label>Contact number</label>
      <input
        placeholder="Contact number"
        name="contact number"
        value={contact_number}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />

      <label>Date_of_birth</label>
      <input
        type="date"
        placeholder="Date Of Birth"
        name="Date Of Birth"
        value={Date}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        name="message"
        value={message}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      ></textarea>

      <button
        type="submit"
        style={{ background: " rgb(2, 2, 110)", width: '30%', height: '10%' }}
      >
        Submit
      </button>
      <p id="success" style={{ color: 'green' }}></p>
    </form >

  );
};
export default ContactForm;