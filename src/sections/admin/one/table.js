import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, IconButton,Typography  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


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

const ForwardTable = () => {
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
    <TableContainer sx={{marginTop:'30px'}}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Forward Call Information</Typography>
    
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell sx={{textAlign:'center'}}>Territory Name</StyledTableCell>
            <StyledTableCell sx={{textAlign:'center'}}>Engineer Name</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell sx={{textAlign:'center'}}>
                Tech Elecon
              </StyledTableCell>
              <StyledTableCell sx={{textAlign:'center'}}>
               Mit
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ForwardTable;
