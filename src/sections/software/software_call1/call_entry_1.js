
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
import { Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

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
const CallEntry = () => {
    const [formData, setFormData] = useState({
        Employee_code: '',
        Employee_Name: '',
        PC_No:'',
    });
    const [company, setcompany] = React.useState('');
    const [company1, setcompany1] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const employees = [
        { id: 1, name: 'Mit', email: 'mit@gmail.com' },
        { id: 2, name: 'Priyesh', email: 'priyesh@gmail.com' },
        { id: 3, name: 'Sharad', email: 'sharad@gmail.com' },
        { id: 4, name: 'Jay', email: 'jay@gmail.com' },
        // Add more employee data as needed
    ];
    // for first dialog box
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // for second dialog box
    const handleOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setcompany(e.target.value)

    };

    const handleChange1 = (e) => {
        setcompany1(e.target.value)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };

    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom:'30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Call Entry</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={company}
                                label="company Type"
                                onChange={handleChange}
                            >
                                <MenuItem value="Elecon">Elecon</MenuItem>
                                <MenuItem value="TechElecon">TechElecon</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <TextField
                            fullWidth
                            label="P.C. No."
                            name="PC_No"
                            type='search'
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                            search
                        </Button>
                    </Grid>
                    {/* option field  */}
                    <Grid container justifyContent="center">
                        <p>----------&nbsp; OR &nbsp;----------</p>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleOpen}>
                                Search By Employee Name
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </form>

            {/* Dialog box */}
            <Dialog open={open} onClose={handleClose}>
                <Paper sx={{ maxWidth: '800px', width: '100%', padding: '20px' }}>
                    <DialogTitle>Search By Employee Name</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent sx={{ paddingBottom: '20px' }}>
                            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                                <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={company1}
                                    label="company Type"
                                    onChange={handleChange1}
                                >
                                    <MenuItem value="Elecon">Elecon</MenuItem>
                                    <MenuItem value="TechElecon">TechElecon</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Employee Name"
                                        name="Employee_Name"
                                        value={formData.value}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button color="primary" type='submit' onClick={handleOpen1} >Search Employee Name</Button>
                        </DialogActions>
                    </form>
                </Paper>
            </Dialog>

            {/* second Dialog box */}

            <Dialog open={open1} onClose={handleClose1} >
                
                    <DialogTitle>Search By Employee Name</DialogTitle>
                    <DialogContent>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell sx={{textAlign:'center'}}>Id</StyledTableCell>
                                        <StyledTableCell sx={{textAlign:'center'}}>Employee Name</StyledTableCell>
                                        <StyledTableCell sx={{textAlign:'center'}} >Email</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {employees.map((employee) => (
                                        <StyledTableRow key={employee.id}>
                                            <StyledTableCell sx={{textAlign:'center'}} >{employee.id}</StyledTableCell>
                                            <StyledTableCell sx={{textAlign:'center'}} >{employee.name}</StyledTableCell>
                                            <StyledTableCell sx={{textAlign:'center'}} >{employee.email}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={handleClose1}>Close</Button>
                    </DialogActions>
               
            </Dialog>
        </Container>
    );
}

export default CallEntry;
