import { Helmet } from 'react-helmet-async';
// sections
import TwoView from 'src/sections/admin/two/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Two</title>
      </Helmet>

      <TwoView />
    </>
  );
}
