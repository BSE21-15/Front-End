/* eslint-disable react/prop-types */
// @mui material

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

export default function data() {
  const Company = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "grade", accessor: "companies", width: "25%", align: "left" },
      { Header: "no. of students", accessor: "budget", align: "center" },
      { Header: "proportion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company name="D1" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            40
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="D2" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            82
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="C3" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            115
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="C4" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            170
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="C5" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            120
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="C6" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            90
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="P7" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            50
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="P8" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            32
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company name="F9" />,
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            15
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
