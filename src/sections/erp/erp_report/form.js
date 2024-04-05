import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Container, Typography, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';

const CallStatusForm = () => {
    const [formData, setFormData] = useState({
        From_Date: '',
        To_Date: '',
    });


    const [role, setRole] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
       

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
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Search Call Status </Typography>
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

export default CallStatusForm;
