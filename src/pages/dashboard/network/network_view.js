import { Helmet } from 'react-helmet-async';
// sections

import NetworkView from 'src/sections/network/network_view/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> ERP: Request Call</title>
            </Helmet>
           
            <NetworkView/>
        </>
    );
}
