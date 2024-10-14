import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

 const sidebars=[
  {
  name:"Dashboard",
  href:"/"
},
{
  name:"Projects",
  href:"/projects"
},
]


export default function Sidebar({ Open, toggleSidebar }) {

  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // };


  const DrawerList = (
    <Box sx={{  height:100 ,width: 250,
      '&. MuiDrawer-paper':{
        marginTop:'3rem',
      },
      '&. MuiBackdrop-root':{
        opacity:'0!important'

      }
     }}  role="presentation" onClick={toggleSidebar}>
      <List>
        {sidebars.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
             <Link style={{textDecoration:'none',color:'black'}} to={data.href}> <ListItemText primary={data.name} /></Link>
             
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // <Button onClick={toggleDrawer(true)}>Open drawer</Button>
    //   <Drawer open={open} onClose={toggleDrawer(false)}>
    //     {DrawerList}
    //   </Drawer>
    <Drawer PaperProps={
      {
        sx:{
          backdropFilter : 'none',
          marginTop:'4.6rem'
        }
      }
    } open={Open} onClose={toggleSidebar}>
      {DrawerList}
    </Drawer>
  );
}
