import { Helmet } from 'react-helmet-async';
import Master2View from 'src/sections/admin/master2/view';
// sections

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> Master: Assign Engineer Territory </title>
            </Helmet>
            <Master2View />

        </>
    );
}
