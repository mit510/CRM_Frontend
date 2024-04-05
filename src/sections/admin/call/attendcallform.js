import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography } from '@mui/material';

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

const Attendcallform = () => {
    const [formData, setFormData] = useState({
        Call_Number: '',
        Remarks: '',
        cc: ''
    });
    const [forward, setforward] = React.useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setforward(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };
    const Emails = [
        'mit@gmail.com',
        'priyesh@gmail.com',  
        'sharad@gmail.com',  
        'jay@gmail.com', 
    ];
    return (
        <Container  sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)',marginTop:'30px',marginBottom:'30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Attend Call</Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Call Number"
                            name="Call_Number"
                            value={formData.Call_Number}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Remarks"
                            name="Remarks"
                            value={formData.Remarks}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={9.2}>
                        <TextField
                            fullWidth
                            label="Responsible Employees Email to CC"
                            name="cc"
                            type='email'
                            value={formData.cc}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={2.8}>
                        <Button variant="contained" color="primary" type="button" sx={{ marginRight: '10px' }}>
                            Search Email
                        </Button>
                        OR
                        <Button variant="contained" color="primary" type="button" sx={{ marginLeft: '10px' }}>
                            Add Email
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid sm={9.2}>
                            <TableContainer component={Paper} sx={{border:'1px solid #e4e8eb'}}>
                                <Table>
                                    <TableHead >
                                        <TableRow>
                                            <StyledTableCell>Email</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Emails.map((email, index) => (
                                            <StyledTableRow key={index}>
                                                <StyledTableCell>{email}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Forward To</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={forward}
                                label="Forward To"
                                onChange={handleChange}
                            >
                                <MenuItem value="Mit">Mit</MenuItem>
                                <MenuItem value="Priyesh">Priyesh</MenuItem>
                                <MenuItem value="Sharad">Sharad</MenuItem>
                                <MenuItem value="Jay">Jay</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={12} sm={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button variant="contained" color="primary" type="submit">
                            Forward
                        </Button>
                    </Grid>
                    <Grid container justifyContent="center" marginTop='20px'>
                        <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                            Submit
                        </Button>
                        <Button variant="contained" color="primary" type="reset">
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Attendcallform;
