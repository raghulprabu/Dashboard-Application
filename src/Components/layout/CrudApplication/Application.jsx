// import React from 'react'
// import "./Application.css"
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Application = () => {
//   const [users, setUsers] = useState([])
//   const [filteredUsers , setfilteredUsers]=useState([])

//   const getAllUsers = async () => {
//     await axios.get("https://66ebfac82b6cf2b89c5cb787.mockapi.io/bootlabs/users").then
//       ((res) => {
//         setUsers(res.data);
//         setfilteredUsers(res.data);
//       });
//     console.log(users)
//   };


//   useEffect(() => {
//     getAllUsers();
//   }, []);


//   const handleSearchChange = (e) => {
//     const searchText = e.target.value.toLowerCase();
//     const filteredUsers = users.filter((users) => users.user.toLowerCase().includes(searchText) || users.project.
//     toLowerCase().includes(searchText))
//     setfilteredUsers(filteredUsers)
//   };

//   return (
//     <>
//       <div className='container'>
//         <h3 className='text'>Deatails of Application</h3>
//         <div className='input-search'>
//           <input
//             type='search'
//             placeholder='search text Here'
//             onChange={handleSearchChange}
//           />
//           <button className='btn blue'>Create user</button>
//         </div>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>id </th>
//               <th> user</th>
//               <th>prject</th>
//               <th>Date</th>
//               <th>Update</th>
//               <th>Dalete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers && 
//             filteredUsers.map((users, index) => {
//               return (
//                 <tr key={users.id}>
//                   <td>{index + 1}</td>
//                   <td>{users.user}</td>
//                   <td>{users.project}</td>
//                   <td>{users.date}</td>
//                   <td>
//                     <button className='btn green'>Edit</button>
//                   </td>
//                   <td>
//                     <button className='btn red'>Delete</button>
//                   </td>
//                 </tr>
//               );
//             })}

//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default Application
