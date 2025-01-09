// import React from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import { Breadcrumbs, Link, Typography } from '@mui/material';

// function BreadcrumbNavbar() {
//   const location = useLocation();

//   // Split the pathname into parts
//   const pathnames = location.pathname.split('/').filter((x) => x);
//   if (pathnames.length === 0) {
//     return null; // Return nothing if it's the home page
//   }

//   return (
//     <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
//       {/* Home Link */}
//       <Link
//         component={RouterLink}
//         to="/"
//         underline="hover"
//         color="inherit"
//         sx={{ fontWeight: 'bold' }}
//       >
//         Home
//       </Link>

//       {/* Map through pathnames to create the breadcrumb trail */}
//       {pathnames.map((value, index) => {
//         const last = index === pathnames.length - 1; // Check if it's the last breadcrumb
//         const to = `/${pathnames.slice(0, index + 1).join('/')}`;

//         return last ? (
//           <Typography key={to} color="text.primary" sx={{ fontWeight: 'bold' }}>
//             {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitalize */}
//           </Typography>
//         ) : (
//           <Link
//             key={to}
//             component={RouterLink}
//             to={to}
//             underline="hover"
//             color="inherit"
//           >
//             {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitalize */}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// }

// export default BreadcrumbNavbar;


import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';

function BreadcrumbNavbar() {
  const location = useLocation();

  // Split the pathname into parts
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't render breadcrumbs on the home page
  if (pathnames.length === 0) {
    return null; // Return nothing if it's the home page
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
      {/* Home Link */}
      <Link
        component={RouterLink}
        to="/"
        underline="hover"
        color="inherit"
        sx={{ fontWeight: 'bold' }}
      >
        Home
      </Link>

      {/* Map through pathnames to create the breadcrumb trail */}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1; // Check if it's the last breadcrumb
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} color="text.primary" sx={{ fontWeight: 'bold' }}>
            {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitalize */}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            to={to}
            underline="hover"
            color="inherit"
          >
            {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitalize */}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbNavbar;

