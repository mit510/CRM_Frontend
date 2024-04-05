import { Helmet } from 'react-helmet-async';
import MasterView from 'src/sections/admin/master/view';
// sections
import OneView from 'src/sections/admin/one/view';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Master:Territory Master</title>
            </Helmet>
            <MasterView />

        </>
    );
}
