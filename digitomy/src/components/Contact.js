import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_b88h2lx",
      "template_tal2btj",
      e.target,
      "RySt4B4HgAoNBEL2-"
    );
    e.target.reset();
  };

  return (
    <section id="contact" style={{ marginTop: 200 }}>
      <h2 style={{ textAlign: "center", fontSize: 49 }} className="title">
        Get in touch
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <div
          className="contact__options"
          style={{
            marginRight: 200,
            justifyContent: "center",
          }}
        >
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h3>Email</h3>
            <h4>digitomytech@gmail.com</h4>
            <h4>
              <a href="mailto:digitomytech@gmail.com" target="_blank">
                Send an email
              </a>
            </h4>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="2"
            placeholder="Your message"
            required
          ></textarea>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginBottom: 20 }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
