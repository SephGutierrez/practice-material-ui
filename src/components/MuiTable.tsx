import React from 'react';
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Tab
} from '@mui/material';

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
              <TableRow
               key={row.id}
               sx={{ '&:last-child td, &:last-child th': {border: 0} }}
               >
                 <TableCell>{row.id}</TableCell>
                 <TableCell>{row.first_name}</TableCell>
                 <TableCell align="center" >{row.email}</TableCell>
                 <TableCell>{row.company}</TableCell>
               </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [{
  "id": 1,
  "first_name": "Fernando",
  "last_name": "Durbann",
  "email": "fdurbann0@creativecommons.org",
  "location": "Alkmaar",
  "company": "Yotz"
}, {
  "id": 2,
  "first_name": "Dorian",
  "last_name": "Laise",
  "email": "dlaise1@vinaora.com",
  "location": "Bang Ban",
  "company": "Reallinks"
}, {
  "id": 3,
  "first_name": "Lenna",
  "last_name": "Andriolli",
  "email": "landriolli2@psu.edu",
  "location": "Eauripik",
  "company": "Skalith"
}, {
  "id": 4,
  "first_name": "Lona",
  "last_name": "Pascall",
  "email": "lpascall3@nps.gov",
  "location": "Molo",
  "company": "Camimbo"
}, {
  "id": 5,
  "first_name": "Elliot",
  "last_name": "Baigrie",
  "email": "ebaigrie4@archive.org",
  "location": "Creil",
  "company": "Fiveclub"
}, {
  "id": 6,
  "first_name": "Bee",
  "last_name": "Ault",
  "email": "bault5@state.tx.us",
  "location": "Qimantage",
  "company": "Gevee"
}, {
  "id": 7,
  "first_name": "Sapphire",
  "last_name": "Grandin",
  "email": "sgrandin6@opera.com",
  "location": "Tenggina Daya",
  "company": "Katz"
}, {
  "id": 8,
  "first_name": "Edsel",
  "last_name": "Kann",
  "email": "ekann7@discuz.net",
  "location": "Sadang Kulon",
  "company": "Linklinks"
}, {
  "id": 9,
  "first_name": "Tynan",
  "last_name": "Barabich",
  "email": "tbarabich8@foxnews.com",
  "location": "Gião",
  "company": "Skippad"
}, {
  "id": 10,
  "first_name": "Irina",
  "last_name": "Barradell",
  "email": "ibarradell9@npr.org",
  "location": "Dingdian",
  "company": "Bubblebox"
}]