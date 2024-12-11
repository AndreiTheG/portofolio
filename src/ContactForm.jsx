import './Contact.css'
import React, { useState } from "react";

function verify() {
  let name = document.getElementById('name').value;
  console.log(name);
  let email = document.getElementById('email').value;
  console.log(email);
  let message = document.getElementById('message').value;
  console.log(message);
  if (name === '') {
    preventDefault();
    document.getElementById('name').style.borderColor = 'red';
    document.getElementById('name').setCustomValidity("Te rog sa completezi acest camp!");
  }
  if (email === '') {
    document.getElementById('name').style.borderColor = 'red';
  }
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/blllglvb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mesajul a fost trimis cu succes!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Eroare la trimiterea mesajului!");
      }
    } catch (error) {
      alert("Eroare de rețea! Verificați conexiunea.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br/>
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br/>
      <textarea
        id="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <br/>
      <button id="submit" type="submit" onClick={verify}>Submit</button>
    </form>
  );
}

export default ContactForm;