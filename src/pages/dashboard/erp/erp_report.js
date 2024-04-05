import { Helmet } from 'react-helmet-async';
// sections

import CallStatusView from 'src/sections/erp/erp_report/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Report: Call Status</title>
      </Helmet>
      <CallStatusView/>
    </>
  );
}
