import { Helmet } from 'react-helmet-async';

import ReportView from 'src/sections/admin/report/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Report: Close Calls</title>
            </Helmet>
        
            <ReportView/>
        </>
    );
}
