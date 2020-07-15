import React, { useState } from "react";


function Form(props){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Backend");

  const handleName = event => setName(event.target.value);
  const handleEmail = event => setEmail(event.target.value);
  const handleRole = event => setRole(event.target.value);

   const handleSubmit = event => {
    event.preventDefault();
    if (name && email) {
    props.setMember([...props.member, { name, email, role}])  
    } 
   }
   //Inputs below
   return(
       <div className="form">
       <form onSubmit={handleSubmit}>
       <label>
        Name:
      <input type="text" name="name" value={name} onChange={handleName}/>
      </label>
      <br />
       <label>
        Email
        <input type="text" name="email" value={email} onChange={handleEmail}/> 
       </label>
       <br />
       <label>
        Role
        <select id="role" name="role" value={role} onChange={handleRole}>
       <option value="selected">Backend</option>
       <option value="Frontend">Frontend</option>
       <option value="UX">UX designer</option>
        </select>
       </label>

       <button type="submit">Submit!</button>
       </form>
       <br/>
       {props.member.map((player,i) => (
        <div key={i}>
        <li> {player.name}    </li> 
        Email: {player.email}
        <br/>
        Role: {player.role} 
        </div>   
      ))}

       </div>
   )

}





export default Form;