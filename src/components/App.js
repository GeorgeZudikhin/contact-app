import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      name: "George",
      email: "email@email.com"
    },
    {
      id: "2",
      name: "Russell",
      email: "email@email.com"
    },
    {
      id: "1",
      name: "Luca",
      email: "email@email.com"
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
