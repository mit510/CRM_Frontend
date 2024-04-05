import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Typography, FormLabel,RadioGroup, Radio, FormControlLabel} from '@mui/material';

const DirectCallEntry = () => {
    const [formData, setFormData] = useState({
        Employee_name: '',
        Department: '',
        HOD_name: '',
        Ext_no: '',
        Mobile_no: '',
        Email: '',
        Date_Time: '',
        IP_address: '',
        Problem_Description: '',
    });
    const [problem, setproblem] = React.useState('');
    const [territory, setterritory] = React.useState('');
    const [showProblemFields, setshowProblemFields] = useState(false);
    const [Software, setsoftware] = useState('');
    const [organization, setorganization] = useState('');
    const [erporganization, setERPorganization] = useState('');
    const [erporecle, setERPOrecle] = useState('');
    const [showERPFields, setShowERPFields] = useState(false);
    const [priority, setpriority] = useState('');

    const handlepriority = (e)=>{
        setpriority(e.target.value);
    }
    const handleERPOrecle = (e)=>{
        setERPOrecle(e.target.value)
    }

    const handleERPorganization = (e)=>{
        setERPorganization(e.target.value)
    }
    const handlesoftware = (e) => {
        setsoftware(e.target.value);
    }
    const handleorganization = (e) => {
        setorganization(e.target.value);

    }
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            File: e.target.files[0], // Store the selected file
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };
    const handleproblem = (e) => {
        setproblem(e.target.value);
        if (e.target.value === "Development_Software_Website") {
            setshowProblemFields(true);
            setShowERPFields(false);
        } else if (e.target.value === "ERP") {
            setshowProblemFields(false);
            setShowERPFields(true);
        }
        else {
            setshowProblemFields(false);
            setShowERPFields(false);
        }
        
    }


    const handleChange1 = (e) => {
        setterritory(e.target.value)

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
    };
    return (
        <Container sx={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '30px', marginBottom: '30px' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>Direct Call Entry</Typography>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Employee Name"
                            name="Employee_name"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Department"
                            name="Department"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="HOD name"
                            name="HOD_name"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Ext No"
                            name="Ext_no"
                            type='number'
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Mobile Number"
                            name="Mobile_no"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="Email"
                            type='email'
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Create Date and Time"
                            name="Date_Time"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="IP Address"
                            name="IP_address"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* option field  */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Problem Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={problem}
                                label="Problem Type"
                                onChange={handleproblem}
                            >
                                <MenuItem value="System_Internet">System / Internet</MenuItem>
                                <MenuItem value="Printer">Printer</MenuItem>
                                <MenuItem value="Development_Software_Website">Development Software / Website</MenuItem>
                                <MenuItem value="ERP">ERP</MenuItem>
                                <MenuItem value="Network_CCTV">Network / CCTV</MenuItem>
                                <MenuItem value="Telephone">Telephone</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Territory</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={territory}
                                label="Select Territory"
                                onChange={handleChange1}
                            >
                                <MenuItem value="Anand">Anand</MenuItem>
                                <MenuItem value="V_V_Nagr">V V Nagar</MenuItem>
                                <MenuItem value="Karamshad">Karamshad</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {showProblemFields && (
                        <>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Software Name</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Software}
                                    label="Select Software Name"
                                    onChange={handlesoftware}
                                >
                                    <MenuItem value="Gate_Pass_System">Gatepass System</MenuItem>
                                    <MenuItem value="HR_Helpdesk">HR Helpdesk</MenuItem>
                                    <MenuItem value="ISP">ISP</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Organization Name</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={organization}
                                    label="Select Organization Name"
                                    onChange={handleorganization}
                                >
                                    <MenuItem value="Elecon_MHE_Division">Elecon MHE Division</MenuItem>
                                    <MenuItem value="VMC_Pvt_Ltd">VMC Pvt Ltd</MenuItem>
                                    <MenuItem value="Elecon_GEAR_Division">Elecon GEAR Division</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        </>
                    )}
                    {showERPFields && (
                        <>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Orecle Module</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={erporecle}
                                    label="Select Orecle Module"
                                    onChange={handleERPOrecle}
                                >
                                    <MenuItem value="BI_Report">BI Report</MenuItem>
                                    <MenuItem value="DBA">DBA</MenuItem>
                                    <MenuItem value="Technical">Technical</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Organization Name</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={erporganization}
                                    label="Select Organization Name"
                                    onChange={handleERPorganization}
                                >
                                    <MenuItem value="Elecon_MHE_Division">Elecon MHE Division</MenuItem>
                                    <MenuItem value="VMC_Pvt_Ltd">VMC Pvt Ltd</MenuItem>
                                    <MenuItem value="Elecon_GEAR_Division">Elecon GEAR Division</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                        <FormLabel component="legend">Priority</FormLabel>
                        <RadioGroup
                            aria-label="Action"
                            name="Action"
                            value={priority}
                            onChange={handlepriority}
                            row
                        >
                            <FormControlLabel
                                value="Low"
                                control={<Radio />}
                                label="Low"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Medium"
                                control={<Radio />}
                                label="Medium"
                                labelPlacement="end"
                            />
                             <FormControlLabel
                                value="High"
                                control={<Radio />}
                                label="High"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Grid>
                        </>
                    )}
                    <Grid item xs={12} >
                        <TextField
                            id="outlined-multiline-static"
                            label="Problem Description"
                            multiline
                            fullWidth
                            rows={4}
                            name="Problem_Description"
                            value={formData.value}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel component="legend">Status</FormLabel>
                        <TextField
                            fullWidth
                            name="File"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </Grid>
                    <Grid container justifyContent="center" marginTop='20px'>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" sx={{ marginRight: '10px' }}>
                                Submit
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

export default DirectCallEntry;
