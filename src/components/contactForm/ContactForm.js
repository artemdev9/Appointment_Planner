import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form>
      <input
        aria-label="Name"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} /*required*/
      ></input>
      <input
        aria-label="Phone Number"
        placeholder="Phone Number"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      ></input>
      <input
        aria-label="Email"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
