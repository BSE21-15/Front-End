/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>      
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>        
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>      
    </MDBox>
  );

  return {
    columns: [
      { Header: "student", accessor: "author", width: "45%", align: "left" },
      { Header: "Final-mark", accessor: "function", align: "left" },
      { Header: "grade", accessor: "status", align: "center" },
      
    ],

    rowsArray: [
      {
        author: <Author name="Anorld" />,
        function: <Job title="85" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="D1" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),        
      },
      {
        author: <Author name="Anorld" />,
        function: <Job title="85" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="D1" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),        
      },
    ],
  };
}
