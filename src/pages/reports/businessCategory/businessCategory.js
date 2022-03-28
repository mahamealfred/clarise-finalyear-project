import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../constants/url";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { DialogContentText } from '@mui/material';
import moment from "moment";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "maxWidth":'lg',
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 2, p: 4 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



const BusinessCatReport = (props) => {
  const { children, onClose, ...other } = props;
  const [open, setOpen] = useState(false);
  const [businessCat, setBusinessCat] = useState([]);
  const [categoryId,setCategoryId]=useState("");
  const [singleCategory,setSingleCategory]=useState([]);

  // const handleClickOpen = async() => {
  //   console.log(categoryId)
  //   try {
  //     await getSingleBusinessCategory(categoryId)
  //   } catch (error) {
  //     console.log(error)
  //   }
   
  //  setCategoryId("")
  //  setOpen(true)
  
      
  // };
  const handleClose = () => {
     setCategoryId("")
    setOpen(false);
    


  };
 

  console.log("catagoryID:",categoryId)
 
  const getSingleBusinessCategory=async ()=>{
    
    try {  
       const response=await axios.get(`http://localhost:5000/BCA/bisinessDefinition/category/${categoryId}`)
      // const response=await axios.get(`http://localhost:5000/BCA/bisinessDefinition/category/623ad830165ddf45864e5d7d`)
       const result=response.data.data
       console.log('results..:',result);
       setSingleCategory(result)
       setOpen(true)
       setCategoryId("")
       console.log('ID..:',categoryId);
       console.log('payload..:',singleCategory);
       
     } catch (error) {
       console.log("Error Message: " +error);
     }
    
  }
  

  const getData = async () => {
    try {
      // console.log("catagoryId..:",categoryId)
      const responce = await axios.get(url.businessDefinition);
      const responceData = responce.data.data;
      setBusinessCat(responceData);
    } catch (error) {
      console.log("error is " + error);
    }
  };
  useEffect(async() => {
    await getData();
  
  }, []);
  return (
    <>
          <div>
        <BootstrapDialog
          maxWidth='md'
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
                      <>
                   
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
          
           Business Category Ideas Details
          </BootstrapDialogTitle>
          <DialogContent    dividers>
            <DialogTitle >Businness Category Name:</DialogTitle>
            <DialogContentText>{singleCategory.name}</DialogContentText>
            
            <DialogTitle>Created Date:</DialogTitle>
            <DialogContentText>{moment(singleCategory.createdAt).format("DD/MM/YYYY")}</DialogContentText>
            <DialogTitle>Business Status:</DialogTitle>
            <DialogContentText>{singleCategory.name}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
          </>
       
        </BootstrapDialog>
        
      </div>
      <div className="row">
        <div className="col">
          <div
            className="card bg-default shadow"
            style={{ position: "relative", top: 80, left: 10 }}
          >
            <div className="card-header bg-transparent border-0">
              <h3 className="text-white mb-0">Business Ideas Report</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <thead className="thead-dark">
                  <tr>
                    <th align-items-center scope="col" className="sort" data-sort="name">
                      name
                    </th>
                    <th align-items-center scope="col" className="sort" data-sort="name">
                      Created Date
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  {businessCat.length != 0 ? (
                    businessCat.map((business) => (
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                {business.name}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success"></i>
                            <span className="status">
                            {moment(business.createdAt).format("DD/MM/YYYY")}
                              </span>
                          </span>
                        </td>
                        <td className="budget">
                          <button
                            className="btn btn-success btn-block"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                            onClick={async()=>{
                           await  setCategoryId(business._id)
                           await getSingleBusinessCategory()
                           
                            
                            }}
                            
                          >
                            details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessCatReport;
