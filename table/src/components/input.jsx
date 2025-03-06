import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({});
  const [fileName, setFileName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    const form = new FormData(event.target);
    const user = {};

    form.forEach((value, key) => {
      // Handle checkboxes (multiple values as an array)
      if (user[key]) {
        if (!Array.isArray(user[key])) {
          user[key] = [user[key]];
        }
        user[key].push(value);
      } else {
        user[key] = value;
      }
    });

    // Handle file input separately
    const fileInput = event.target.elements.file;
    if (fileInput.files.length > 0) {
      user.file = fileInput.files[0].name;
      setFileName(fileInput.files[0].name);
    }

    setFormData(user); // Update state with form data
    console.log(user); // Display in console
  };

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Text Inputs */}
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

        {/* Radio Buttons - Gender */}
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="Other" /> Other
        <br /><br />

        {/* Radio Buttons - Experience Level */}
        <label>Experience Level:</label>
        <input type="radio" name="experience" value="Beginner" /> Beginner
        <input type="radio" name="experience" value="Intermediate" /> Intermediate
        <input type="radio" name="experience" value="Expert" /> Expert
        <br /><br />

        {/* Checkboxes - Hobbies */}
        <label>Hobbies:</label>
        <input type="checkbox" name="hobbies" value="Reading" /> Reading
        <input type="checkbox" name="hobbies" value="Gaming" /> Gaming
        <input type="checkbox" name="hobbies" value="Traveling" /> Traveling
        <input type="checkbox" name="hobbies" value="Cooking" /> Cooking
        <br /><br />

        {/* Checkboxes - Skills */}
        <label>Skills:</label>
        <input type="checkbox" name="skills" value="HTML" /> HTML
        <input type="checkbox" name="skills" value="CSS" /> CSS
        <input type="checkbox" name="skills" value="JavaScript" /> JavaScript
        <input type="checkbox" name="skills" value="React" /> React
        <br /><br />

        {/* Select Dropdown - Country */}
        <label>Country:</label>
        <select name="country">
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
        </select>
        <br /><br />

        {/* Date Input */}
        <label>Date of Birth:</label>
        <input type="date" name="dob" />
        <br /><br />

        {/* File Upload */}
        <label>Upload File:</label>
        <input type="file" name="file" />
        <br /><br />
        {fileName && <p>Uploaded File: {fileName}</p>}

        {/* Textarea */}
        <label>Message:</label>
        <textarea name="message" placeholder="Enter your message"></textarea>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Display Submitted Data */}
      <h3>Submitted Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default UserForm;
