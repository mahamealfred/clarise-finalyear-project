import React, { useEffect, useState } from "react";
import ReactToExcel from "react-html-table-to-excel";
import ModelPopUp from "../../../components/newPopUp/modal";
import axios from "axios";
import { url } from "../../../constants/url";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../../images/bdfLogo.jpg";

// or
import { DialogContentText } from '@mui/material';

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

const BusinessIdeaReport = (props) => {
  const { children, onClose, ...other } = props;
  const [open, setOpen] = useState(false);
  const [businessId,setBusinessId]=useState('');
  const [businessIdea, setBusinessIdea] = useState([]);
  const [singlebusiness,setSinglebusiness]=useState([]);

  const handleClose = () => {
    setBusinessId("")
    setOpen(false);

  };

  let status = false;
  const getSingleBusiness=async (props)=>{
    
    try {  
       const response=await axios.get(`http://localhost:5000/BCA/bisinessIdea/singleIdea/${businessId}`)
       const result=response.data.data
       console.log('results..:',result);
       setSinglebusiness(result)
       //console.log(urll)
       setOpen(true);
       console.log('ID..:',businessId)
       console.log('payload..:',singlebusiness) 
     } catch (error) {
       console.log("error is " + error);
     }
    
  }
  
  
  // const handleClickOpen = async() => {
  //   await getSingleBusiness(businessId);
  //   setOpen(true);
      
  // };
  //const urll=`http://localhost:5000/BCA/bisinessIdea/singleIdea/${businessId}`
 
  
  const getData = async () => {
    try {
      const responce = await axios.get(url.businessIdea);
      const responceData = responce.data.data;
      setBusinessIdea(responceData);
    } catch (error) {
      console.log("error is " + error);
    }
  };
  const todaysDate = () => {
    const time = new Date(Date.now());
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDay();
    const date = `${year}-${month}-${day}`;
    return date;
  };
  const Modal = (data, status) => {
    return (
      <>
        <ModelPopUp data={data} statsu={status} />
      </>
    );
  };

  const generatePdf=()=>{
    const doc = new jsPDF();
      
    doc.addImage(logo, "JPEG", 20, 20, 40, 40);
    doc.setFont("Helvertica", "bold");
    doc.text("Business Clarity Analysis System", 20, 20);
    doc.setFont("Helvertica", "normal");
    doc.text(`Date ${todaysDate()}`, 140, 60);
    doc.setFont("Helvertica", "bold");
    doc.text("Rejected Business Ideas Report", 80, 70);
    const tableColumn=['Business Name','Owner','Status','Ideas Strenght %']
      const tableRows=[]
        
      businessIdea.map(business=>{
        if( business.status==="rejected"){
          const rowsData=[
            business.name,
            business.owner,
            business.status,
            business.ideaSrengthPersentage +"%",
          ];
          tableRows.push(rowsData);
        }
        
        
      });
      doc.autoTable(tableColumn, tableRows, { 
        startY: 80,
        theme: "striped",
       margin: 10,
       styles: {
         font: "courier",
         fontSize: 12,
         overflow: "linebreak",
         cellPadding: 3,
         halign: "center"
       },
       head: [tableColumn],
       body:[tableRows],
       });
    
    const date = Date().split(" ");
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    
    doc.save(`report_on_${dateStr}.pdf`);
  }
  const generateApprovedIdeaPdf=()=>{
    const doc = new jsPDF();
      
    doc.addImage(logo, "JPEG", 20, 20, 40, 40);
    doc.setFont("Helvertica", "bold");
    doc.text("Business Clarity Analysis System", 20, 20);
    doc.setFont("Helvertica", "normal");
    doc.text(`Date ${todaysDate()}`, 140, 60);
    doc.setFont("Helvertica", "bold");
    doc.text("Approved Business Ideas Report", 80, 70);
    const tableColumn=['Business Name','Owner','Status','Ideas Strenght %']
      const tableRows=[]
        
      businessIdea.map(business=>{
        if( business.status==="approved"){
          const rowsData=[
            business.name,
            business.owner,
            business.status,
            business.ideaSrengthPersentage +"%",
          ];
          tableRows.push(rowsData);
        }
        
        
      });
      doc.autoTable(tableColumn, tableRows, { 
        startY: 80,
        theme: "striped",
       margin: 10,
       styles: {
         font: "courier",
         fontSize: 12,
         overflow: "linebreak",
         cellPadding: 3,
         halign: "center"
       },
       head: [tableColumn],
       body:[tableRows],
       });
    
    const date = Date().split(" ");
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    
    doc.save(`report_on_${dateStr}.pdf`);
  }
  

  useEffect(() => {
    async function fetchData(){
      //  setBusinessId(businessId  
      await  getData();
    }
   fetchData();
   
  }, [status]);

  return (
    <>
    
      <div>
        <BootstrapDialog
          maxWidth='md'
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >        
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
          
          {singlebusiness.owner}'s Business Ideas Details
          </BootstrapDialogTitle>
          <DialogContent    dividers>
            <DialogTitle >Business Name:</DialogTitle>
            <DialogContentText>{singlebusiness.name}</DialogContentText>
            
            <DialogTitle>Owner:</DialogTitle>
            <DialogContentText>{singlebusiness.owner}</DialogContentText>
            <DialogTitle>Business Status:</DialogTitle>
            <DialogContentText>{singlebusiness.status}</DialogContentText>
            <DialogTitle>Ideas Strength:</DialogTitle>
            <DialogContentText>{singlebusiness.ideaSrengthPersentage +"%"}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
       
       
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
            <button
                     onClick={generatePdf}
                      className="btn "
                      style={{color:"white"}}
                    >
                      Generate Rejected Ideas Report
                    </button>
                    <button
                     onClick={generateApprovedIdeaPdf}
                      className="btn "
                      style={{color:"white"}}
                    >
                      Generate Approved Ideas Report
                    </button>
              <table
                className="table align-items-center table-dark table-flush"
                id="dayly-report"
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="sort" data-sort="name">
                      name
                    </th>
                    <th scope="col" className="sort" data-sort="budget">
                      owner
                    </th>
                    <th scope="col" className="sort" data-sort="status">
                      Expected
                    </th>

                    <th scope="col" className="sort" data-sort="completion">
                      status
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      Idea Strength
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  {businessIdea.length != 0 ? (
                    businessIdea.map((business) => (
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
                        <td className="budget">{business.owner}</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success"></i>
                            <span className="status">100%</span>
                          </span>
                        </td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            {business.ideaSrengthPersentage === 100 ? (
                              <i className="bg-success"></i>
                            ) : (
                              <i className="bg-warning"></i>
                            )}

                            <span className="status">{business.status}</span>
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">
                              {business.ideaSrengthPersentage}%
                            </span>
                            <div>
                              <div className="progress">
                                <div
                                  className={
                                    business.ideaSrengthPersentage != 100
                                      ? "progress-bar bg-warning"
                                      : "progress-bar bg-success"
                                  }
                                  role="progressbar"
                                  aria-valuenow={`${business.ideaSrengthPersentage}`}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{
                                    width:
                                      +business.ideaSrengthPersentage + "%",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="budget">
                          <button
                            className="btn btn-success btn-block"
                            type="button"
                            data-toggle="modal"
                            data-target="#user-form-modal"
                            onClick={()=>{
                              setBusinessId(business._id)
                              getSingleBusiness()
                             //setSinglebusiness(business._id)
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
              <div
                className="modal fade"
                role="dialog"
                tabindex="-1"
                id="user-form-modal"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create Service</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        <span aria-hidden="false">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="py-1"></div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessIdeaReport;
