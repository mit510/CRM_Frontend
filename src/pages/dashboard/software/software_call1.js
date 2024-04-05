import { Helmet } from 'react-helmet-async';
import SoftwareCallEntryView from 'src/sections/software/software_call1/view';
// sections


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Network : Request Call</title>
            </Helmet>
            
        <SoftwareCallEntryView/>
        </>
    );
}
