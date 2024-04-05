import { Helmet } from 'react-helmet-async';
// sections


import SoftwareView from 'src/sections/software/software_view/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Software : View </title>
            </Helmet>
            
            
            <SoftwareView/>
        </>
    );
}
