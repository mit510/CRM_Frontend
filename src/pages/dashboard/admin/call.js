import { Helmet } from 'react-helmet-async';
// sections
import FourView from 'src/sections/admin/call/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Call: Request Call</title>
      </Helmet>

      <FourView />
    </>
  );
}
