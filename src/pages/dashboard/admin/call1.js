import { Helmet } from 'react-helmet-async';
// sections
import FiveView from 'src/sections/admin/call1/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Call: Call Entry</title>
      </Helmet>

      <FiveView />
    </>
  );
}
