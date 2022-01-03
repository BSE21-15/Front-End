import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";

function Tables() { 

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
  
  const [finalSubject, setFinalSubject] = useState("");
  const { columns, rowsArray } = authorsTableData();

  const [tablesData, setTablesData] = useState([]);
  const [rows, setRows] = useState(rowsArray);

  console.log(tablesData);
  console.log(finalSubject);
  console.log(rows);
  const todayDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://markspredictorapi.herokuapp.com/prediction/"
      );
      const jsondata = await response.json()
      setTablesData([...jsondata]);
      let counter = 0;

      tablesData.map((item) => {
        const currentSubject = item.subject;
        const prediction = item.prediction;
        const student = item.student;
        const date = item.dateGenerated;
      
        if (currentSubject === finalSubject && (prediction >= 95) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="D1" color="success" variant="gradient" size="sm" />
                  </MDBox>
                ),
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),        
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 90) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="D2" color="success" variant="gradient" size="sm" />
                  </MDBox>
                ),
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),        
          })
          counter += 1;          
        } else if (currentSubject === finalSubject && (prediction >= 80) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="C3" color="info" variant="gradient" size="sm" />
                  </MDBox>
                ),    
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),    
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 70) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="C4" color="info" variant="gradient" size="sm" />
                  </MDBox>
                ),    
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),    
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 66) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="C5" color="info" variant="gradient" size="sm" />
                  </MDBox>
                ),        
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 60) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="C6" color="warning" variant="gradient" size="sm" />
                  </MDBox>
                ),  
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),      
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 56) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="P7" color="warning" variant="gradient" size="sm" />
                  </MDBox>
                ),    
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),    
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 50) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="P8" color="error" variant="gradient" size="sm" />
                  </MDBox>
                ),        
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),
          })
          counter += 1;
        } else if (currentSubject === finalSubject && (prediction >= 0) && date===todayDate && counter<395) {
          rowsArray.push({
                author: <Author name={student} />,
                function: <Job title={prediction} />,
                status: (
                  <MDBox ml={-1}>
                    <MDBadge badgeContent="F9" color="error" variant="gradient" size="sm" />
                  </MDBox>
                ),
                employed: (
                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {date}
                  </MDTypography>
                ),        
          })
          counter += 1;
        } else {
          return
        }
      });
      setRows(rowsArray)
    }
    
    console.log(rows);
    console.log(rowsArray);
    fetchData();
  }, [finalSubject]);

  

  return (
    <DashboardLayout>
      <DashboardNavbar setFinalSubject={setFinalSubject} />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Marks Sheet (Predictions)
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>          
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;