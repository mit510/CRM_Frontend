import { Helmet } from 'react-helmet-async';

import Report1View from 'src/sections/admin/report1/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Report: Pending Calls</title>
            </Helmet>
        
            <Report1View/>
        </>
    );
}
