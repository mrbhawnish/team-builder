import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";


function App() {

  const defaultState = [
   {"id":0, "name":"Ronaldo", "email":"email@email.com", "role":"football player"},
   {"id":1, "name":"Messi", "email":"eamil@email.com", "role":"football player"},
   {"id":2, "name":"Neymar", "email":"eamil@email.com", "role":"football player"}

  ];

  const [member, setMember] = useState(defaultState);
  return (
    <div className="App">
      
      <Form member={member} setMember={setMember}></Form>
    </div>
  );
}

export default App;
