import React, { useState } from 'react';
import '../forms/form.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Perform form validation
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Please enter your name';
    }

    if (!formData.email) {
      validationErrors.email = 'Please enter your email';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email';
    }

    if (!formData.message) {
      validationErrors.message = 'Please enter your message';
    }

    // Display validation errors, if any
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear any previous validation errors
    setErrors({});

    console.log(formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    })
};




const isValidEmail = (email) => {
  // Simple email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

return (
  <form onSubmit={handleSubmit} className='contact-form'>
    <div className='name'>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}
    </div>
    <div className='name'>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
    </div>
    <div className='name'>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      {errors.message && <span className="error">{errors.message}</span>}
    </div>
    <button type="submit">Submit</button>
  </form>
);
}

export default ContactForm;
