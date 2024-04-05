import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  cm: icon('ic_cmlogo'),
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  call: icon('request_call')
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [

      {
        subheader: 'Admin Navigation',
        // subheader: 'management',
        items: [
          {
            title: 'Call',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'Request Call', path: paths.dashboard.group.root, },
              { title: 'Call Entry', path: paths.dashboard.group.call1 },
            ],
          },
          {
            title: 'Master',
            path: paths.dashboard.group1.root,
            icon: ICONS.dashboard,
            children: [
              { title: 'Territory Master', path: paths.dashboard.group1.root },
              { title: 'Engineering Master', path: paths.dashboard.group1.master1 },
              { title: 'Assign Engineer Territory', path: paths.dashboard.group1.master2 },
            ],
          },
        ],
      },
      {
        items: [
          { title: 'Forward Call', path: paths.dashboard.root, icon: ICONS.external },
          { title: 'Close Call', path: paths.dashboard.two, icon: ICONS.ecommerce },
          {
            title: 'Report',
            path: paths.dashboard.group2.root,
            icon: ICONS.analytics,
            children: [
              { title: 'Close Call', path: paths.dashboard.group2.root, },
              { title: 'Pending Entry', path: paths.dashboard.group2.report1 },
            ],
          },
        ],
      },
      {
        subheader: 'ERP Navigation',
        // subheader: 'management',
        items: [
          {
            title: 'Call',
            path: paths.dashboard.ERP.root,
            icon: ICONS.user,
            children: [
              { title: 'Request Call', path: paths.dashboard.ERP.root, },
              { title: 'Call Entry', path: paths.dashboard.ERP.erp_call1 },
            ],
          },
        ],
      },
      {
        items: [
          { title: 'View', path: paths.dashboard.erp_view, icon: ICONS.external },
          {
            title: 'Report',
            path: paths.dashboard.ERP1.root,
            icon: ICONS.analytics,
            children: [
              { title: 'Call Status', path: paths.dashboard.ERP1.root, },
              { title: 'Orecle Modulewise', path: paths.dashboard.ERP1.erp_report1},
              { title: 'Close Call', path: paths.dashboard.ERP1.erp_report2 },
            ],
          },
        ],
      },
      {
        subheader: 'Network Navigation',
        // subheader: 'management',
        items: [
          {
            title: 'Call',
            path: paths.dashboard.Network.root,
            icon: ICONS.user,
            children: [
              { title: 'Request Call', path: paths.dashboard.Network.root},
              { title: 'Call Entry', path: paths.dashboard.Network.network_call1 },
            ],
          },
        ],
      },
      {
        items: [
          { title: 'View', path: paths.dashboard.network_view, icon: ICONS.external },
        ],
      },
      {
        subheader: 'Software Navigation',
        // subheader: 'management',
        items: [
          {
            title: 'Call',
            path: paths.dashboard.Software.root,
            icon: ICONS.user,
            children: [
              { title: 'Request Call', path: paths.dashboard.Software.root},
              { title: 'Call Entry', path: paths.dashboard.Software.software_call1},
            ],
          },
        ],
      },
      {
        items: [
          { title: 'View', path: paths.dashboard.software_view, icon: ICONS.external },
          { title: 'Report', path: paths.dashboard.software_report, icon: ICONS.analytics }
        ],
      },
    ],
    
    []
  );

  return data;
}
