import React, { useContext } from 'react'
import CreateUser from './CreateUser';
import "./Application.css"
import axios from 'axios';
import Charts from '../charts/Charts';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../context/apiCall';
import { ContextUser } from '../../../context/UserContext';


const Application = () => {
  // const [users, setUsers] = useState([])
  const [filteredUsers, setfilteredUsers] = useState([])
  const [formData, setFormData] = useState({ user: '', project: '', date: '' });
  const [ModalOpen, setModalOpen] = useState(false);

  const{users,dispatch}=useContext(ContextUser)


  const handleButtonClick = () => {
    setModalOpen(true);
  };


  // const getAllUsers = async () => {
  //   await axios.get("https://66ebfac82b6cf2b89c5cb787.mockapi.io/bootlabs/users").then
  //     ((res) => {
  //       setUsers(res.data);
  //       setfilteredUsers(res.data);
  //     });
  //   console.log(users)
  // };


  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  useEffect(()=>{
    setfilteredUsers(users)
  },[users])


  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    
    const filteredUsers = searchText !== "" ? users.filter((users) => users.user.toLowerCase().includes(searchText) || users.project.
      toLowerCase().includes(searchText)): users
    setfilteredUsers(filteredUsers)
  };

  const handleDelete = async (id) => {
    // await axios.delete(`https://66ebfac82b6cf2b89c5cb787.mockapi.io/bootlabs/users/${id}`)
    // getAllUsers();

  };
  const handleFormSubmit = (data) => {
    setFormData(data);
    setModalOpen(false);
    console.log('User created:', data);
  };



  return (
    <>
      <div className='container'>

        <h3 className='text'>Deatails of Application</h3>
        <div className='input-search'>
          <input
            type='search'
            placeholder='search text Here'
            onChange={handleSearchChange}
          />
          <button
            className='btn blue'
            onClick={handleButtonClick}
          >
            Create user
          </button>
          {ModalOpen && <CreateUser setModalOpen={setModalOpen} onSubmit={handleFormSubmit} />}
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>id </th>
              <th> user</th>
              <th>prject</th>
              <th>Date</th>
              <th>Update</th>
              <th>Dalete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers &&
              filteredUsers.map((users, index) => {
                return (
                  <tr key={users.id}>
                    <td>{index + 1}</td>
                    <td>{users.user}</td>
                    <td>{users.project}</td>
                    <td>{users.date}</td>
                    <td>
                      <button className='btn green'>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(users.id)} className='btn red'>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Application
