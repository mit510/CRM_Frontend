import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography } from '@mui/material';

const PendingCallForm = () => {
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


    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom: '30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Search Pending Call </Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
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

                    {/* option field  */}

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={company}
                                label="Select Company"
                                onChange={handleChange1}
                            >
                                <MenuItem value="Elecon">Elecon</MenuItem>
                                <MenuItem value="Tech Elecon">Tech Elecon</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Engineer</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={engineer}
                                label="Engineer"
                                onChange={handledeengineer}
                            >
                                <MenuItem value="Mit">Mit</MenuItem>
                                <MenuItem value="Radhe">Radhe</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container justifyContent="center" marginTop='20px'>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                                Show Report
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

export default PendingCallForm;
