/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";


import axios from 'axios';



// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

const FormData = require('form-data');
const fs = require('fs');

function Cover() {

  const [fileState, setfileState] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setfileState(file); 
  }

  const handleFileUpload = (e) => {    
    const file = fileState;    

    
    // eslint-disable-next-line prefer-const    
    let formData = new FormData();
    console.log(file)
    
    formData.append('file', file)
    
    console.log([...formData]);
    axios.post('http://markspredictorapi.herokuapp.com/file/', formData, {
      
      headers: {        
        'content-type': 'multipart/form-data'
        
      },    
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.response);
  });   

    // fetch(
    //   'http://markspredictorapi.herokuapp.com/file/',
    //   {mode: 'cors'},
		// 	{
		// 		method: 'POST',
		// 		body: formdata,
    //   },
    //   {
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   }
		// )
   
    
  }
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" id="uploadFile">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onChange={handleFile} fullWidth>
                <MDInput type="file" label="Select File" variant="standard" fullWidth />
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleFileUpload} fullWidth>
                upload file
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
