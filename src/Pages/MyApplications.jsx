// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box, Typography, CircularProgress } from "@mui/material";

// const MyApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get("https://divyang.codifyinstitute.org/api/forms", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Use Bearer token for authentication
//           },
//         });

//         if (response.data && response.data.forms) {
//           setApplications(response.data.forms); // Set the applications data
//         } else {
//           setError("No data found");
//         }
//       } catch (err) {
//         console.error(err);
//         if (err.response && err.response.data) {
//           setError(err.response.data.message || "Failed to fetch data");
//         } else {
//           setError("Failed to fetch data");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, [token]);

//   const columns = [
    // { field: "applicationId", headerName: "Application ID", width: 180 },
    // { field: "name", headerName: "Applicant's Name", width: 220 },
    // { field: "divyangname", headerName: "Divyang Name", width: 220 },
    // { field: "comment", headerName: "Comment", width: 150 },
    // { field: "approvedBy", headerName: "Approved By", width: 200 },
//   ];

//   const rows = applications.map((application) => ({
    // id: application._id,  // unique identifier for DataGrid
    // applicationId: application.applicationId,
    // name: application.name,
    // divyangname: application.divyangname,
    // comment: application.comments.map(comment => comment.comment).join(', '),
    // approvedBy: application.comments.map(comment => `Given by ${comment.role}`).join(', '),
//   }));

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <Typography>Error: {error}</Typography>;
//   }

//   return (
//     <Box sx={{ width: '100%', height: 400 }}>
//       <Typography variant="h6" sx={{ marginBottom: 2 }}>My Applications</Typography>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         disableSelectionOnClick
//       />
//     </Box>
//   );
// };

// export default MyApplications;
// =====================================================================


import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, CircularProgress } from "@mui/material";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(""); // State to store user's email

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch the user profile to get the logged-in user's email
        const response = await axios.get("https://divyang.codifyinstitute.org/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserEmail(response.data.user.email); // Set the logged-in user's email
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
          // Filter applications where the submittedBy email matches the logged-in user's email
          const filteredApplications = response.data.forms.filter(
            (application) => application.submittedBy.email === userEmail
          );
          setApplications(filteredApplications); // Set filtered applications
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
  ];

  const rows = applications.map((application) => ({
    id: application._id,  
    applicationId: application.applicationId,
    name: application.name,
    divyangname: application.divyangname,
    
 comment :application.comments && application.comments.length > 0 
    ? application.comments.map(comment => comment.comment).join(', ') 
    : '-',
    
  approvedBy : application.comments && application.comments.length > 0 
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
    </Box>
  );
};

export default MyApplications;

