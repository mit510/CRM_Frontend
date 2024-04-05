import { Helmet } from 'react-helmet-async';
// sections

import NetworkCallView1 from 'src/sections/network/network_call1/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Network: Call Entry</title>
            </Helmet>
       
            <NetworkCallView1/>
        </>
    );
}
