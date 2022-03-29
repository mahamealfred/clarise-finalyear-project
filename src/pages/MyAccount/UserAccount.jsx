import * as React from 'react';
import {useEffect,useState}  from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import jwt from 'jsonwebtoken';
//import jwt from "jsonwebtoken";
import jwtDecode from 'jwt-decode'

const UserAccount = () => {

    const [open, setOpen] = useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [userName,setUserName]=useState("");
    const [userId,setUserId]=useState("");
const token=localStorage.getItem("token")
const decode= (token) => {
    const JWT_SECRET="hhj4h545h4j5hj45h5j4h545";
    const payload =jwtDecode(token, JWT_SECRET);
    
     return payload.id;
  }

  console.log("id:",userId)
  
console.log("token data",decode(token))

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [value, setValue] = React.useState('Controlled');

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(()=>{
      async function fetchData(){
        
      }
      fetchData();
  },[])

  return (
    <div>
      <Button variant="outlined"
       onClick={()=>{
           setUserId(decode(token))
        handleClickOpen()
           }
       }
       >
        Modify My Acoount
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"My Account Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your Information Will be Modify
          </DialogContentText>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField
          id="standard-textarea"
          label="Full Name"
          placeholder="Placeholder"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          multiline
          variant="standard"
        />
         <TextField
          id="standard-textarea"
          label="Email"
          placeholder="Placeholder"
          multiline
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          variant="standard"
        />
         <TextField
          id="standard-textarea"
          label="Username"
          placeholder="Placeholder"
          value={userName}
          multiline
          onChange={(e)=>setUserName(e.target.value)}
          variant="standard"
        />
         <TextField
          id="standard-textarea"
          label="Address"
          placeholder="Placeholder"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          multiline
          variant="standard"
        />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserAccount