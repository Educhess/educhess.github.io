import React, { useState, useEffect } from "react";
import "./contact.css";
import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LevelItem = [
  { id: 'Beginner', title: 'Beginner' },
  { id: 'Intermediate', title: 'Intermediate' },
  { id: 'Advanced', title: 'Advanced' },
]

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    contact_number: "",
    Date_of_birth: "",
    email: "",
    level: "",
    referal: "",
  })
  const { name, contact_number, email, Date_of_birth, level, referal } = data

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
            [name, contact_number, email, Date_of_birth, level, referal, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json()
      //  document.getElementById("success"),innerHTML = "Thank you for reaching out to us!";
      alert("We have recieved your message. Someone from our team will contact you soon")
      setData({ ...data, name: '', contact_number: '', email: '', Date_of_birth: '', level: '', referal: '' })
    } catch (err) {
      console.log(err)
    };
  }

  return (
    <Form>
      <form className="form" onSubmit={handleSubmit} style={{ marginTop: '70px', marginLeft: '1px', width: '40%', height: '35%', align: 'center', display: 'flex' }}>
        <h1>Contact Us 🤳</h1>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              type="Name"
              name="name"
              label="Name"
              value={name}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.Input
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.Input
              type="phone"
              name="contact_number"
              label="Contact Number"
              value={contact_number}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.DatePicker
              type="date"
              name="Date_of_birth"
              // label="Date_of_birth"
              value={Date_of_birth}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

            <Controls.Input
              type="text"
              name="referal"
              label="Referal Code"
              value={referal}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
            // error={errors.fullName}
            />

          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="level"
              label="Level"
              value={level}
              items={LevelItem}
              onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}

            />

          </Grid>
        </Grid>



        <Controls.Button
          type="submit"
          style={{ background: " rgb(2, 2, 110)", width: '30%', height: '10%' }}
        >
          Submit
        </Controls.Button>
        <p id="success" style={{ color: 'green' }}></p>

      </form >
    </Form>
  );
};
export default ContactForm;