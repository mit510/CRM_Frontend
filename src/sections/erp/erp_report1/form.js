import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';

const OrecleForm = () => {
    const [formData, setFormData] = useState({
        From_Date: '',
        To_Date: '',
    });

    const [engineer, setengineer] = React.useState('');
    const [company, setcompany] = React.useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
       

    };
    const handledeengineer = (e) => {
        setengineer(e.target.value)

    };
    
    const handleChange1 = (e) => {
        setcompany(e.target.value)

    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };
    const [role, setRole] = useState('');
    const handleChange2 = (e) => {
        setRole(e.target.value);

    };
    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom: '30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Orecle Module </Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                 {/* option field  */}

                 <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Orecle Module</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={company}
                                label="Select Orecle Module"
                                onChange={handleChange1}
                            >
                                <MenuItem value="Module_1">Module 1</MenuItem>
                                <MenuItem value="Module_2">Module 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="From Date"
                            name="From_Date"
                            defaultValue='2024-04-04'
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="To Date"
                            name="To_Date"
                            defaultValue='2024-05-04'
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormLabel component="legend">Status</FormLabel>
                        <RadioGroup
                            aria-label="status"
                            name="status"
                            value={role}
                            onChange={handleChange2}
                            row
                        >
                            <FormControlLabel
                                value="Open"
                                control={<Radio />}
                                label="Open"
                                labelPlacement="end"
                            />
                             <FormControlLabel
                                value="Pending"
                                control={<Radio />}
                                label="Pending"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Work_In_Progress"
                                control={<Radio />}
                                label="Work In Progress"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Closed"
                                control={<Radio />}
                                label="Closed"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Reopen"
                                control={<Radio />}
                                label="Reopen"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid container justifyContent="center" marginTop='20px'>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                               Search
                            </Button>
                            <Button variant="contained" color="primary" type="reset" sx={{ marginRight: '10px' }}>
                                Refresh
                            </Button>
                            <Button variant="contained" color="primary" type="reset">
                                Export
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </Container>
    );
}

export default OrecleForm;
