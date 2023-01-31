import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.792421379405!2d85.36872091453421!3d27.692809882797906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a3983853ffb%3A0xcd261f2c806ed267!2sSun%20City%20Apartments!5e0!3m2!1sen!2snp!4v1673720321960!5m2!1sen!2snp"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="wrapper">
        <form
          // action="https://formspree.io/f/xjvdvryo"
          method="POST"
          className="p-3 mt-3"
        >
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
          <div className="text">
            <textarea
              name="message"
              cols="101"
              rows="6"
              placeholder="Write Something "
              autoComplete="off"
              required
            ></textarea>
          </div>
          <button className="btn">Send</button>
        </form>
      </div>
    </div>
  );
}
