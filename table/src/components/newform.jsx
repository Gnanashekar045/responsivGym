import React, { useState } from "react";

const Userform = () => {
  const [userData, setUserData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.target);
    const user = {}

    form.forEach((value, key) => {
      if(user[key]) {
        if(!Array.isArray(user(key))) {
          user[key] = [user[key]]
        }
        user[key].push(value)
      } else {
        user[key] = value
      }
    })

    setUserData([...userData, user])
    console.log(userData)
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input type="text" name="name" /><br />
        <input type="email" name="email" /><br />
        <input type="number" name="number" /><br />
        <label htmlFor="">Hobbies</label><br />
        <input type="checkbox" name="hobbies" value="writing" />
        <label htmlFor="">writing</label><br />
        <input type="checkbox" name="hobbies" value="watching" />
        <label htmlFor="">watching</label><br />
        <input type="checkbox" name="hobbies" value="walking" />
        <label htmlFor="">walking</label><br />
        <button type="submit">Submit</button>

      </form>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Hobbies</th>
        </tr>
        </thead>
        <tbody>
          {userData.map((usr, index) => (
            <tr key={index}>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
              <td>{usr.number}</td>
              <td>{usr.hobbies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) 
  
}

export default Userform; 