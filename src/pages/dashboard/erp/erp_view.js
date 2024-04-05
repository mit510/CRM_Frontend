import { Helmet } from 'react-helmet-async';
import ERPView from 'src/sections/erp/erp_view/view';
// sections


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> ERP: View</title>
            </Helmet>
            <ERPView />

        </>
    );
}
