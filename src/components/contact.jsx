import React, { useState } from 'react'
import './contact.css'

export default function Contact() {
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyX1EhGcthbd1a07yyOrHcRYC_FSRa6aHIIQ07z2RVI8SPVNnwOqwGkFK0RgJzEvYko/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setMsg('Message Sent!')
      setFormData({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setMsg(''), 5000)
    } catch (error) {
      console.error('Error!', error.message)
      setMsg('Something went wrong!')
    }
  }

  return (
    <section id="contact" className="container-fluid px-5 py-5">
      <h2>Contact Me</h2>
      <p><i className="far fa-envelope"></i> suhanidhar.2504@gmail.com</p>
      <p><i className="fas fa-phone"></i> +91 9330081361</p>

      <form onSubmit={handleSubmit} className="mt-4" id="cont-form">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-control bg-black text-white" required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} type="text" className="form-control bg-black text-white" required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control bg-black text-white" required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="form-control bg-black text-white" rows="3" required></textarea>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        <div className="mt-2 text-success">{msg}</div>
      </form>
    </section>
  )
}
