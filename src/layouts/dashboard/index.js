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
import BasicTable from "examples/Tables/DataTable/BasicTable"
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";




function Dashboard() {
  
  const [finalSubject, setFinalSubject] = useState("Mathematics");
  const [marks, setMarks] = useState([]);

  const [distinctions, setDistinctions] = useState(0);
  const [credits, setCredits] = useState(0);
  const [passes, setPasses] = useState(0);
  const [fails, setFails] = useState(0);

  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  const [p7, setP7] = useState(0);
  const [p8, setP8] = useState(0);
  const [f9, setF9] = useState(0);



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://markspredictorapi.herokuapp.com/prediction/"
      );
      const jsondata = await response.json()
      const newArray = [...jsondata];
      console.log(newArray)
      console.log(finalSubject)

      const marksPerGrade = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          
      newArray.map((item) => {
        const currentSubject = item.subject;
        const prediction = item.prediction;
      
        if (currentSubject === finalSubject && (prediction >= 90)) {
          marksPerGrade[0] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 80)) {
          marksPerGrade[1] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 75)) {
          marksPerGrade[2] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 70)) {
          marksPerGrade[3] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 65)) {
          marksPerGrade[4] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 60)) {
          marksPerGrade[5] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 40)) {
          marksPerGrade[6] += 1;
        } else if (currentSubject === finalSubject && (prediction >= 20)) {
          marksPerGrade[7] += 1;
        }else if (currentSubject === finalSubject && (prediction >= 0)) {
          marksPerGrade[8] += 1;
        } else {
          return
        }
      });
      console.log(marksPerGrade);
      setMarks(marksPerGrade);

      // Setting data for the statistics cards
      setDistinctions(marksPerGrade[0]+marksPerGrade[1]); 
      setCredits(marksPerGrade[2] + marksPerGrade[3] + marksPerGrade[4] + marksPerGrade[5]);
      setPasses(marksPerGrade[6] + marksPerGrade[7]);
      setFails(marksPerGrade[8]);

      // Setting data for propotion of students in each grade
      setD1(marksPerGrade[0]);
      setD2(marksPerGrade[1]);
      setC3(marksPerGrade[2]);
      setC4(marksPerGrade[3]);
      setC5(marksPerGrade[4]);
      setC6(marksPerGrade[5]);
      setP7(marksPerGrade[6]);
      setP8(marksPerGrade[7]);
      setF9(marksPerGrade[8]);    
    }
    fetchData()
  }, [finalSubject]);

  const { sales } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar setFinalSubject={setFinalSubject}/>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="person_add"
                title="Distinctions"
                count={distinctions}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="person_add"
                title="Credits"
                count={credits}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="person_add"
                title="Pass"
                count={passes}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="person_add"
                title="Failure"
                count={fails}
                
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
                  chart={{
                    labels: ["D1", "D2", "C3", "C4", "C5", "C6", "P7","P8","F9"],
                    datasets: { label: "No of Students", data: marks },
                  }}
                />
              </MDBox>
            </Grid>
            
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <BasicTable
                  d1={d1}
                  d2={d2}
                  c3={c3}
                  c4={c4}
                  c5={c5}
                  c6={c6}
                  p7={p7}
                  p8={p8}
                  f9={f9}               
                  
                />
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

