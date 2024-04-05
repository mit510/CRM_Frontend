import { Helmet } from 'react-helmet-async';
import Master1View from 'src/sections/admin/master1/view';
// sections


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Master:Engineering Master</title>
            </Helmet>
            <Master1View />

        </>
    );
}
