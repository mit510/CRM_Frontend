import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, IconButton,Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { NetworkViewTableData2 } from 'src/assets/data/TableData';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
})); 

const PendingCall = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer sx={{ marginBottom: '30px',marginTop:'30px' }}>
    <Typography variant="h5" align="center" sx={{ marginBottom: '30px'}}>Your Pending Calls </Typography>
      <Table>
        <TableHead>
          <StyledTableRow>
            {NetworkViewTableData2.columns.map((column, index) => (
              <StyledTableCell key={index} sx={{textAlign:'center'}}>{column.title}</StyledTableCell>
            ))}
            <StyledTableCell sx={{textAlign:'center'}}>Action</StyledTableCell>
            <StyledTableCell sx={{textAlign:'center'}}>Reopen</StyledTableCell>
            <StyledTableCell sx={{textAlign:'center'}}>Close</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {NetworkViewTableData2.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <StyledTableCell key={cellIndex} sx={{textAlign:'center'}}>{cell}</StyledTableCell>
              ))}
              <StyledTableCell sx={{textAlign:'center'}}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell sx={{textAlign:'center'}}>
                <IconButton>
                  <AutorenewIcon/>
                </IconButton>
              </StyledTableCell>
              <StyledTableCell sx={{textAlign:'center'}}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={NetworkViewTableData2.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default PendingCall;
