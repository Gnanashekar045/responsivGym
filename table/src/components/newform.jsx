import React, { useState } from "react";

const UserForms = () => {
  const [formData, setFormData] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)

    const user = {}

    form.forEach((value, key) => {
      user[key] = value
    })

    console.log(user)
  }

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required /> <br /><br />

        <label>Email:</label>
        <input type="email" name="email" required /> <br /><br />

        <label>Age:</label>
        <input type="number" name="age" required /> <br /><br />

        <label>Phone:</label>
        <input type="tel" name="phone" required /> <br /><br />

        <label>Address:</label>
        <input type="text" name="address" required /> <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForms;