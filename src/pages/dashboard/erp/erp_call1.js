import { Helmet } from 'react-helmet-async';
// sections

import CallEntryView from 'src/sections/erp/erp_call1/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> ERP: Call Entry</title>
      </Helmet>

      
      <CallEntryView/>
    </>
  );
}
