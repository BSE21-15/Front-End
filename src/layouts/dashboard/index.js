/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";


const marksPerGrade = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function Dashboard() {
  
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://markspredictorapi.herokuapp.com/prediction/"
      );
      const jsondata = await response.json()
      const newArray = [...jsondata];
      console.log(newArray)
          
      newArray.map((item) => {
        const currentSubject = item.subject;
        const prediction = item.prediction;
      
        if (currentSubject === "Mathematics" || (prediction >= 95)) {
          marksPerGrade[0] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 90)) {
          marksPerGrade[1] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 80)) {
          marksPerGrade[2] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 70)) {
          marksPerGrade[3] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 66)) {
          marksPerGrade[4] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 60)) {
          marksPerGrade[5] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 56)) {
          marksPerGrade[6] += 1;
        } else if (currentSubject === "Mathematics" || (prediction >= 50)) {
          marksPerGrade[7] += 1;
        } else {
          marksPerGrade[8] += 1;
        }
      });
      console.log(marksPerGrade);
      setMarks(marksPerGrade)
    }
    fetchData()
  }, []);

  const { sales } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Distinctions"
                count={151}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Credits"
                count={400}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Pass"
                count={60}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Failure"
                count={15}
                
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={6}>
                <ReportsBarChart
                  color="info"
                  title="individual Grade Projections"
                  description="Bar chart showing number of students in each grade"
                  chart={{
                    labels: ["D1", "D2", "C3", "C4", "C5", "C6", "P7","P8","F9"],
                    datasets: { label: "No of Students", data: marks },
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={6}>
                <ReportsLineChart
                  color="success"
                  title="Monthly Grade Projections"
                  description="Line chart showing number of students in each grade"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;

