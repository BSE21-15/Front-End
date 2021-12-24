import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function BasicTable({ d1, d2, c3, c4, c5, c6, p7, p8, f9 }) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ paddingRight: '5px', paddingLeft: '0px' }} >
          <TableRow >
            <TableCell align="left" sx={{ paddingRight: '350px', textAlign: 'left' }}>Grade</TableCell>
            <TableCell align="right" sx={{ paddingLeft: '105px', textAlign: 'right', paddingRight: '0px' }}>No. of Students</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>          
            <TableRow>
              <TableCell >
                D1
              </TableCell>
              <TableCell align="center">{d1}</TableCell>              
            </TableRow>
            
          <TableRow>
              <TableCell component="th" >
                D2
              </TableCell>
              <TableCell align="center">{d2}</TableCell>              
          </TableRow>
          <TableRow>
              <TableCell component="th" scope="row">
                C3
              </TableCell>
              <TableCell align="center">{c3}</TableCell>              
          </TableRow>
          
          <TableRow>
              <TableCell component="th" scope="row">
                C4
              </TableCell>
              <TableCell align="center">{c4}</TableCell>              
          </TableRow>
          <TableRow>
              <TableCell component="th" scope="row">
                C5
              </TableCell>
              <TableCell align="center">{c5}</TableCell>              
          </TableRow>
          <TableRow>
              <TableCell component="th" scope="row">
                C6
              </TableCell>
              <TableCell align="center">{c6}</TableCell>              
          </TableRow>
          <TableRow>
              <TableCell component="th" scope="row">
                P7
              </TableCell>
              <TableCell align="center">{p7}</TableCell>              
          </TableRow>
          <TableRow>
              <TableCell component="th" scope="row">
                P8
              </TableCell>
              <TableCell align="center">{p8}</TableCell>              
          </TableRow>
          <TableRow>
              <TableCell component="th" scope="row">
                F9
              </TableCell>
              <TableCell align="center">{f9}</TableCell>              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
