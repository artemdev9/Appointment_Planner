import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form>
      <input
        aria-label="Appointment Name"
        placeholder="Appointment Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} /*required*/
      ></input>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      ></input>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <ContactPicker
        contacts={contacts}
        name={name}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
