import * as React from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Application.css"

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'project', headerName: 'Project', width: 250 },
  { field: 'date', headerName: 'Date', width: 250 },

  {
    field: 'user',
    headerName: 'User',
    sortable: false,
    width: 250,
  },
  {
    headerName: 'Actions',
    width: 250,
    sortable: false,
    renderCell: (params) => (<><Button sx={{ marginRight: "20px" }} variant="contained"> Edit </Button>
      <Button variant="outlined" color="error" > Delete </Button></>
    ),
  },
];


const rows = [
  { id: 1, date: '15-08-2024', project: 'Jon', user: 'Prathipan' },
  { id: 2, date: '15-08-2024', project: 'Cersei', user: 'Prathipan' },
  { id: 3, date: '15-08-2024', project: 'Jaime', user: 'Prathipan' },
  { id: 4, date: '15-08-2024', project: 'Arya', user: 'Prathipan' },
  { id: 5, date: '15-08-2024', project: 'Daenerys', user: 'Prathipan' },
  { id: 6, date: '15-08-2024', project: null, user: 'Prathipan' },
  { id: 7, date: '15-08-2024', project: 'Ferrara', user: 'Prathipan' },
  { id: 8, date: '15-08-2024', project: 'Rossini', user: 'Prathipan' },
  { id: 9, date: '15-08-2024', project: 'Harvey', user: 'Prathipan' },
];


export default function Application() {
  return (
    <Paper sx={{ height: 500, width: '80%' , position:'relative'}}>
     <div className='table-header'> 
      <div>
        <h1>All Application</h1>
      </div>
     <Button className='user' variant='contained'>
        <Link className='btn-links' to='/create-user'>Create User</Link>
      </Button>
     </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination={false}
      />
    </Paper>
  );
}
