import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import '@sweetalert2/theme-dark/dark.css';


function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendMail = (e) => {
    e.preventDefault();
    if (!name) {
      Swal.fire({
        title: "Error!",
        text: "Please Provide Your Name",
        icon: "error",
        confirmButtonText: "Cool",
        timer:2000,
        background: "#1E1E1E",
        color: "white"
      });
    } else if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Please Provide Your Email",
        icon: "error",
        confirmButtonText: "Cool",
        timer:2000,
        background: "#1E1E1E",
        color: "white"
      });
    } else if (!message) {
      Swal.fire({
        title: "Error!",
        text: "Please Provide Your Email Body",
        icon: "error",
        confirmButtonText: "Cool",
        timer:2000,
        background: "#1E1E1E",
        color: "white"
      });
    } else {
      const template = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "service_muq8nui",
          "template_tx4a60o",
          template,
          "ZvKlz0_aP9a9pdb2e"
        )
        .then(
          (result) => {
            // console.log(result.text);
            Swal.fire({
              title: "Success!",
              text: "Mail Was sent successfully",
              icon: "success",
              confirmButtonText: result.text,
              timer:2000,
              background: "#1E1E1E",
              color: "white"
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              title: "Error!",
              text: "Do you want to continue",
              icon: "error",
              confirmButtonText: error.text,
              timer:2000,
              background: "#1E1E1E",
              color: "white"
            });
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    }
  };

  return (
    <div className={styles.form__container} id={"Contact"}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <form className={styles.form} onSubmit={(e) => sendMail(e)}>
        <div className={styles.input__div}>
          <input
            type={"text"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={styles.input}
            placeholder="Provide Your Name"
            name="from_name"
          />
          <input
            type={"text"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={styles.input}
            placeholder="Provide Your Email"
            name="from_email"
          />
        </div>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Leave A Message"
          name="message"
        />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
