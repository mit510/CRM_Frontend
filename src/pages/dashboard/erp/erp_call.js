import { Helmet } from 'react-helmet-async';
// sections
import CallView from 'src/sections/erp/erp_call/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> ERP: Request Call</title>
            </Helmet>
            <CallView />
        </>
    );
}
