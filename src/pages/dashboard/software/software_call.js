import { Helmet } from 'react-helmet-async';
import SoftwareRequstCallView from 'src/sections/software/software_call/view';




// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Network : Request Call</title>
            </Helmet>
            <SoftwareRequstCallView/>
        </>
    );
}
