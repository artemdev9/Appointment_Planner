import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contact = props.contact;
  const addContact = props.addContact;
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    !duplicate
      ? addContact(name, phoneNumber, email)
      : console.log("duplicate value");
    // Clear the form
    setName("");
    setPhoneNumber("");
    setEmail("");
    setDuplicate(false);
  };

  useEffect(() => {
    contact.forEach((item) => {
      if (item.name === name) {
        setDuplicate(true);
      }
    });
  }, [name, contact]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contact} />
      </section>
    </div>
  );
};
