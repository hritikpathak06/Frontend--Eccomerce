import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone:'',
    address:'',
    avatar: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address,
      avatar: formData.avatar,
    };

    try {
      await axios.post('http://localhost:7000/api/v1/user/register', data);
      console.log('User registered successfully');
      alert("User Registered")
    } catch (error) {
      console.error('Error registering user:');
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone
          <input type="text" name="phone" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address
          <input type="text" name="address" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Profile Image:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
