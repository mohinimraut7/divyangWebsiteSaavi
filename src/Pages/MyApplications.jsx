
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, CircularProgress,Button,IconButton,Modal } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditIcon from '@mui/icons-material/Edit';
import ApplicantForm from "../auth/ApplicantForm";
const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(""); 
  const [open, setOpen] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
const [selectedRow, setSelectedRow] = React.useState(null);
  const token = localStorage.getItem("token");

 
  const handleOpen = () => setOpen(true);

  
  const handleClose = () => {
    setOpen(false);
    setSelectedApplicationId(null);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://divyang.codifyinstitute.org/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserEmail(response.data.user.email); 
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to fetch user profile");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [token]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("https://divyang.codifyinstitute.org/api/forms", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && response.data.forms) {
          const filteredApplications = response.data.forms.filter(
            (application) => application.submittedBy.email === userEmail
          );
          setApplications(filteredApplications); 
        } else {
          setError("No data found");
        }
      } catch (err) {
        console.error("Error fetching applications:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchApplications(); 
    }
  }, [userEmail, token]);

  const columns = [
    { field: "applicationId", headerName: "Application ID", width: 180 },
    { field: "name", headerName: "Applicant's Name", width: 220 },
    { field: "divyangname", headerName: "Divyang Name", width: 220 },
    { field: "comment", headerName: "Comment", width: 150 },
    { field: "approvedBy", headerName: "Approved By", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    
    { 
      field: "preview", 
      headerName: "Preview", 
      width: 120,
      renderCell: (params) => (
        <IconButton 
          color="primary" 
          onClick={() => {
            setSelectedApplicationId(params.row);
            setSelectedRow("view");
            handleOpen(); 
          }}
        >
          <VisibilityOutlinedIcon />
        </IconButton>
      )
    },
    
    { 
      field: "edit", 
      headerName: "Edit", 
      width: 120,
      renderCell: (params) => {
       
        if (params.row.status === "Partial") {
          return (
            <IconButton 
              color="primary" 
              onClick={() => {
                setSelectedApplicationId(params.row);
                setSelectedRow("edit"); 
                handleOpen();
              }}
            >
              <EditIcon />
            </IconButton>
          );
        }
        return null; 
      },
    },
  ];

  const rows = applications.map((application) => ({
    id: application._id,  
    applicationId: application.applicationId,
    name: application.name,
    divyangname: application.divyangname,
    Relationship:application.Relationship,
    mobileno:application.mobileno,
    age:application.age,
    Gender:application.Gender,
    Marriagestatus:application.Marriagestatus,
    disability_in_percentage:application.disability_in_percentage,
    Caste:application.Caste,
    Education:application.Education,
    AdhaarCard:application.AdhaarCard,
    Ration_lightbill:application.Ration_lightbill,
    IFSC_CODE:application.IFSC_CODE,
    BranchName:application.BranchName,
    Address:application.Address,
    AccountNo:application.AccountNo,
    Schemname:application.Schemname,
    sportstype:application.sportstype,
    Disabilitycertificate:application.Disabilitycertificate,
    Residency:application.Residency,
    Applicantphoto:application.Applicantphoto,
    photo:application.photo,
    quotation:application.quotation,
    ubdertaking:application.ubdertaking,
    sportcertificate:application.sportcertificate,
    Selfdeclartion:application.Selfdeclartion,
    comment: application.comments && application.comments.length > 0
      ? application.comments.map(comment => comment.comment).join(', ') 
      : '-',
    approvedBy: application.comments && application.comments.length > 0
      ? application.comments.map(comment => comment.role ? `Given by ${comment.role}` : '-').join(', ') 
      : '-',
    status: application.status,
  }));

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        My Applications
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />

      {/* Modal for Preview */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "600px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
          >
            Applicant Form
          </Typography>
        
          {/* {selectedApplicationId && <ApplicantForm applicationId={selectedApplicationId} type="view" onClose={handleClose} />} */}
        
          {selectedRow === "view" && <ApplicantForm applicationId={selectedApplicationId} type="view" onClose={handleClose} />}
{selectedRow === "edit" && <ApplicantForm applicationId={selectedApplicationId} type="edit" onClose={handleClose} />}

        </Box>
      </Modal>
    </Box>
  );
};

export default MyApplications;
