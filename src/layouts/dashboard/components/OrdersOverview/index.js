/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Grading overview
        </MDTypography>        
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          sx={{ marginBottom: "0" }}
          color="success"
          icon="payment"
          title="D1"
          dateTime="95-100"          
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="D2"
          dateTime="90-94"
        />
        <TimelineItem
          color="info"
          icon="payment"
          title="C3"
          dateTime="80-89"
        />
        <TimelineItem
          color="info"
          icon="payment"
          title="C4"
          dateTime="70-79"
        />
        <TimelineItem
          color="info"
          icon="payment"
          title="C5"
          dateTime="66-69"          
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="C6"
          dateTime="60-65"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="P7"
          dateTime="56-59"
        />
        <TimelineItem
          color="error"
          icon="payment"
          title="P8"
          dateTime="50-55"
        />
        <TimelineItem
          color="error"
          icon="payment"
          title="F9"
          dateTime="0-49"
          lastItem
        />        
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
