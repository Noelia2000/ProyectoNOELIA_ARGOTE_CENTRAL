import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id: string,
  nombre:string,
  email: string,
  github: string,
) {
  return { id, nombre, email, github };
}

const rows = [


  createData ('1','Noelia','noelia@gmail.com','noelia2000'),
  createData ('2','vane','vane@gmail.com','vane2000'),
  createData ('3','rodrigo','roa@gmail.com','noelia2000'),
 
  //createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //createData('Eclair', 262, 16.0, 24, 6.0),
  //createData('Cupcake', 305, 3.7, 67, 4.3),
  //createData('Gingerbread', 356, 16.0, 49, 3.9),

];

export default function ListOfUsers() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="right">nombre</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">GitHub</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.github}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
