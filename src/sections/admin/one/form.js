import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography } from '@mui/material';

const ForwardCallForm = () => {
    const [formData, setFormData] = useState({
       From_Date:'',
       To_Date:'',
    });
    const [fromengineer, setfromengineer] = React.useState('');
    const [toengineer, settoengineer] = React.useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });


    };
    const handlefromengineer = (e) => {
        setfromengineer(e.target.value)

    };
    const handletoengineer = (e) => {
        settoengineer(e.target.value)

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };
    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px',marginBottom:'30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Forward Call</Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="From Date"
                            name="From_Date"
                            type='date'
                            defaultValue="2024-04-04"
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
                            type='date'
                            defaultValue="2024-04-04"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* option field  */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">From Engineer</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={fromengineer}
                                label="From Engineer"
                                onChange={handlefromengineer}
                            >
                                <MenuItem value="Mit">Mit</MenuItem>
                                <MenuItem value="Jay">Jay</MenuItem>
                                <MenuItem value="Sharad">Sharad</MenuItem>
                                
                                <MenuItem value="Priyesh">Priyesh</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">To Engineer</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={toengineer}
                                label="To Engineer"
                                onChange={handletoengineer}
                            >
                                <MenuItem value="Nisarg">Nisarg</MenuItem>
                                <MenuItem value="Radhe">Radhe</MenuItem>
                                <MenuItem value="Dharmik">Dharmik</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container justifyContent="center" marginTop='20px'>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                                Forward
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

export default ForwardCallForm;
