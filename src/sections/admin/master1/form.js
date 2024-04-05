import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';

const EngineeringForm = () => {
    const [formData, setFormData] = useState({
        Employee_name: '',
        Employee_code: '',
    });

    const [department, setdepartment] = React.useState('');
    const [territory, setterritory] = React.useState('');
    const [speciality, setspeciality] = React.useState('');

    const [role, setRole] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
       

    };
    const handledepartment = (e) => {
        setdepartment(e.target.value)

    };
    
    const handleChange1 = (e) => {
        setterritory(e.target.value)

    };
    const handllespeciality = (e) => {
        setspeciality(e.target.value)

    };
    const handleChange2 = (e) => {
        setRole(e.target.value);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };


    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom: '30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Engineering Information Form</Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormLabel component="legend">Engineer Rights</FormLabel>
                        <RadioGroup
                            aria-label="role"
                            name="role"
                            value={role}
                            onChange={handleChange2}
                            row
                        >
                            <FormControlLabel
                                value="Admin"
                                control={<Radio />}
                                label="Admin"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="User"
                                control={<Radio />}
                                label="User"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Engineer Code"
                            name="Employee_code"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Engineer Name"
                            name="Employee_name"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* option field  */}

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={territory}
                                label="Select Territory"
                                onChange={handleChange1}
                            >
                                <MenuItem value="Elecon">Elecon</MenuItem>
                                <MenuItem value="Tech Elecon">Tech Elecon</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={department}
                                label="type Type"
                                onChange={handledepartment}
                            >
                                <MenuItem value="Internal">It</MenuItem>
                                <MenuItem value="External">Gear</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={speciality}
                                label="type Type"
                                onChange={handllespeciality}
                            >
                                <MenuItem value="Internal">ASP / .NEt</MenuItem>
                                <MenuItem value="External">React</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container justifyContent="center" marginTop='20px'>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                                Save
                            </Button>
                            <Button variant="contained" color="primary" type="reset">
                                Reset
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </Container>
    );
}

export default EngineeringForm;
