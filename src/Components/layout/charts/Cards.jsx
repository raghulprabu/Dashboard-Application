import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AccountCircleOutlined } from '@mui/icons-material';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 290,
  height: 160,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  background: 'radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF', // Corrected
  boxShadow: '0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
  borderRadius: 23,
  transition: 'all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
  }

}));

export default function Cards() {
  return (
    <Stack sx={{ display: 'flex', justifyContent: 'space-between' }} direction="row" spacing={2}>

      <DemoPaper sx={{ backgroundColor: 'powderblue	' }} square={false}>
        <AccountCircleOutlined style={{ color: 'blue', fontSize: '40' }} />
        <h1>40</h1>
        <h4>Users</h4>
      </DemoPaper>

      <DemoPaper  sx={{backgroundColor:'PeachPuff	'}}square>
        <DesktopMacIcon style={{ color: 'Red', fontSize: '40' }} />
        <h1>20</h1>
        <h4>Project</h4>
      </DemoPaper>

      <DemoPaper sx={{backgroundColor:'PaleGreen'}} square>
        <SupervisedUserCircleOutlinedIcon style={{ color: 'green', fontSize: '40' }} />
        <h1>70</h1>
        <h4> Project User</h4>
      </DemoPaper>

      <DemoPaper  sx={{backgroundColor:'wheat'}}square>
        <GroupsOutlinedIcon style={{ color: "gold", fontSize: '40' }} />
        <h1>43</h1>
        <h4>Count</h4>
      </DemoPaper>
    </Stack>
  );
}
