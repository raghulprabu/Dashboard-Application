import React, { useState } from 'react';
import './Application.css';
import axios from 'axios';

const CreateUser = ({ onSubmit,setModalOpen }) => {
  const [user, setUser] = useState('');
  const [project, setProject] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({user,project,date})
    const res = await axios.post("https://66ebfac82b6cf2b89c5cb787.mockapi.io/bootlabs/users",{user,project,date});
    setModalOpen(false)
    window.location.reload()
    // onSubmit({ user, project, date });
  };


  return (
    <div className='model'>
      <div className='model-content'>
        <h2>User Record</h2>
        <span className='close' onClick={()=>setModalOpen(false)}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label>User:</label>
            <input
              type='text'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label>Project:</label>
            <input
              type='text'
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label>Date:</label>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type='submit' className='btn blue'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
























