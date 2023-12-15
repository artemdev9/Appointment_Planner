import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointment, setAppointment] = useState([]);
  const [contact, setContact] = useState([
    { name: "John", phoneNumber: "123-456-7890", email: "john@example.com" },
    { name: "Jane", phoneNumber: "987-654-3210", email: "jane@example.com" },
  ]);

  /*
  Define state variables for 
  contacts and appointments 
  */
  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    setContact((prevContacts) => [...prevContacts, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };

    setAppointment((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contact={contact} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointment={appointment}
              contacts={contact}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
