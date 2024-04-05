import { Helmet } from 'react-helmet-async';
// sections

import NetworkCallView from 'src/sections/network/network_call/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Network : Request Call</title>
            </Helmet>
            
            <NetworkCallView/>
        </>
    );
}
