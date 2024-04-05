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
import { Container, Typography, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox } from '@mui/material';

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
        cc: '',
        Solution: '',
        Stend_Provides: false,
        Stend_Provides_Response: '',
        DC_no: '',
        Issue_no: '',
        Gate_Pass_no: '',
        Total_price: '',
        Price_per_part: '',
        Amount: '',
        Date: '',


    });
    const [forward, setForward] = useState('');
    const [status, setStatus] = useState('');
    const [action, setAction] = useState('');
    const [parts, setparts] = useState('');
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
        setForward(e.target.value)
    };

    const handleChange2 = (e) => {
        setStatus(e.target.value);
    };

    const handleaction = (e) => {
        setAction(e.target.value);
        // Show additional fields if "With Parts" is selected
        if (e.target.value === "With_Parts") {
            setShowAdditionalFields(true);
        } else {
            setShowAdditionalFields(false);
        }
    }
    const handleparts = (e) => {
        setparts(e.target.value)
    }

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
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom: '30px' }}>
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
                        <FormLabel component="legend">Action</FormLabel>
                        <RadioGroup
                            aria-label="Action"
                            name="Action"
                            value={status}
                            onChange={handleChange2}
                            row
                        >
                            <FormControlLabel
                                value="Pending"
                                control={<Radio />}
                                label="Pending"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Closed"
                                control={<Radio />}
                                label="Closed"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Grid>
                    {status === 'Pending' && (
                        <>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Pending for Customer Approval"
                                    name="Pending_For_Customer_Approval"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="User not available"
                                    name="User_Not_Available"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Pending for Parts"
                                    name="Pending_For_Parts"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Under Observation"
                                    name="Under_Observation"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Stend Provides"
                                    name="Stend_Provides"
                                    onChange={handleChange}
                                />
                            </Grid>
                            {formData.Stend_Provides && (
                                <Grid item xs={12}>
                                    <FormLabel component="legend">Stend Provides Response</FormLabel>
                                    <RadioGroup
                                        aria-label="Stend Provides Response"
                                        name="Stend_Provides_Response"
                                        value={formData.Stend_Provides_Response}
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="Yes"
                                            control={<Radio />}
                                            label="Yes"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="No"
                                            control={<Radio />}
                                            label="No"
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Solution"
                                    name="Solution"
                                    value={formData.Solution}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                        </>
                    )}
                    {status === 'Closed' && (
                        <>
                            <Grid item xs={12}>
                                <FormLabel component="legend">Select</FormLabel>
                                <RadioGroup
                                    aria-label="Action"
                                    name="Action"
                                    value={action}
                                    onChange={handleaction}
                                    row
                                >
                                    <FormControlLabel
                                        value="With_Parts"
                                        control={<Radio />}
                                        label="With Parts"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="Without_Parts"
                                        control={<Radio />}
                                        label="Without Parts"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </Grid>
                            {/* Additional Fields for "With Parts" */}
                            {showAdditionalFields && (
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="DC No"
                                            name="DC_no"
                                            value={formData.DC_no}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Date"
                                            name="Date"
                                            value={formData.Date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Issue No"
                                            name="Issue_no"
                                            value={formData.Issue_no}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Gate Pass No"
                                            name="Gate_pass_no"
                                            value={formData.Gate_Pass_no}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                
                                    
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Parts</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={parts}
                                                label="Parts"
                                                onChange={handleparts}
                                            >
                                                <MenuItem value="Cable">Cable</MenuItem>
                                                <MenuItem value="Adapter">Adapter</MenuItem>
                                                <MenuItem value="Fiber">Fiber</MenuItem>
                                                <MenuItem value="Switch">Switch</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Total Price"
                                            name="Total_price"
                                            type='number'
                                            value={formData.Total_price}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                     <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Price Per Part"
                                            name="Price_per_part"
                                            value={formData.Price_per_part}
                                            type='number'
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Amount"
                                            name="Amount"
                                            type='number'
                                            value={formData.Amount}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                </>
                            )}
                        </>
                    )}
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
                            <TableContainer component={Paper} sx={{ border: '1px solid #e4e8eb' }}>
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
