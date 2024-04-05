import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography } from '@mui/material';

const CloseCallForm = () => {
    const [formData, setFormData] = useState({
        From_Date: '',
        To_Date: '',
    });



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });


    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };
    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom: '30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Search Close Call</Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="From Date"
                            name="From_Date"
                            type='date'
                            value={formData.value}
                            defaultValue="2024-04-04"
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
                    <Grid container justifyContent="space-around" marginTop="20px">
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">
                                Search
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">
                                Refresh
                            </Button>
                        </Grid>
                        <Grid item>
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

export default CloseCallForm;
