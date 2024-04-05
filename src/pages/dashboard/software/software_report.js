import { Helmet } from 'react-helmet-async';
// sections


import ReportView from 'src/sections/software/software_report/report';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Software : Report</title>
            </Helmet>
            
            
            <ReportView/>
        </>
    );
}
