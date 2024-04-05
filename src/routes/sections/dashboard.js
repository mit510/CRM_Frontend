import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { AuthGuard } from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/admin/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/admin/two'));
const PageThree = lazy(() => import('src/pages/dashboard/admin/three'));
const RequestCallPage = lazy(() => import('src/pages/dashboard/admin/call'));
const CallEntryPage = lazy(() => import('src/pages/dashboard/admin/call1'))
const MasterPage = lazy(() => import('src/pages/dashboard/admin/master'));
const Master1Page = lazy(() => import('src/pages/dashboard/admin/master1'));
const Master2Page = lazy(() => import('src/pages/dashboard/admin/master2'));
const ReportPage= lazy(()=>import('src/pages/dashboard/admin/report'));
const Report1Page= lazy(()=>import('src/pages/dashboard/admin/report1'));
const ErpRequestCallPage = lazy(()=>import('src/pages/dashboard/erp/erp_call'));
const ErpCallEntryPage = lazy(()=>import('src/pages/dashboard/erp/erp_call1'));
const ErpReportPage = lazy(()=>import('src/pages/dashboard/erp/erp_report'));
const ErpReport1Page = lazy(()=>import('src/pages/dashboard/erp/erp_report1'));
const ErpReport2Page = lazy(()=>import('src/pages/dashboard/erp/erp_report2'));
const ErpViewPage = lazy(()=>import('src/pages/dashboard/erp/erp_view'));
const NetworkRequestCallPage = lazy(()=>import('src/pages/dashboard/network/network_call'))
const NetworkCallEntryPage = lazy(()=>import('src/pages/dashboard/network/network_call1'))
const NetworkViewPage = lazy(()=>import('src/pages/dashboard/network/network_view'))
const SoftwareRequstCallPage = lazy(()=>import('src/pages/dashboard/software/software_call'))
const SoftwareCallEntryPage = lazy(()=>import('src/pages/dashboard/software/software_call1'))
const SoftwareViewPage = lazy(()=>import('src/pages/dashboard/software/software_view'))
const SoftwareReportPage = lazy(()=>import('src/pages/dashboard/software/software_report'))
// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },
      {
        path: 'group',
        children: [
          { element: <RequestCallPage/>, index: true },
          { path: 'call1', element: <CallEntryPage /> },
        ],
      },
      {
        path: 'group1',
        children: [
          { element: <MasterPage />, index: true },
          { path: 'master1', element: <Master1Page /> },
          { path: 'master2', element: <Master2Page />},
        ],
      },
      {
        path: 'group2',
        children: [
          { element: <ReportPage/>, index: true },
          { path: 'report1', element: <Report1Page /> },
        ],
      },
      {
        path: 'ERP',
        children: [
          { element: <ErpRequestCallPage/>, index: true },
          { path: 'erp_call1', element: <ErpCallEntryPage/> },
        ],
      },
      {
        path: 'erp_view', element: <ErpViewPage />
      },
      {
        path: 'ERP1',
        children: [
          { element: <ErpReportPage/>, index: true },
          { path: 'erp_report1', element: <ErpReport1Page/> },
          { path: 'erp_report2', element: <ErpReport2Page/>},
        ],
      },
      {
        path: 'Network',
        children: [
          { element: <NetworkRequestCallPage/>, index: true },
          { path: 'network_call1', element: <NetworkCallEntryPage/> },
        ],
      },
      {
        path: 'network_view', element: <NetworkViewPage />
      },
      {
        path: 'Software',
        children: [
          { element: <SoftwareRequstCallPage/>, index: true },
          { path: 'software_call1', element: <SoftwareCallEntryPage/> },
        ],
      },
      {
        path: 'software_view', element: <SoftwareViewPage />,
      },
      {
        path: 'software_report', element: <SoftwareReportPage />
      }
    ],
  },
];
