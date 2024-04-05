// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      call1: `${ROOTS.DASHBOARD}/group/call1`,
    },
    group1: {
      root: `${ROOTS.DASHBOARD}/group1`,
      master1:`${ROOTS.DASHBOARD}/group1/master1`,
      master2:`${ROOTS.DASHBOARD}/group1/master2`,
    },
    group2: {
      root: `${ROOTS.DASHBOARD}/group2`,
      report1:`${ROOTS.DASHBOARD}/group2/report1`,

    },
    ERP:{
      root: `${ROOTS.DASHBOARD}/ERP`,
      erp_call1: `${ROOTS.DASHBOARD}/ERP/erp_call1`
    },
    erp_view:`${ROOTS.DASHBOARD}/erp_view`,
    ERP1: {
      root: `${ROOTS.DASHBOARD}/ERP1`,
      erp_report1:`${ROOTS.DASHBOARD}/ERP1/erp_report1`,
      erp_report2:`${ROOTS.DASHBOARD}/ERP1/erp_report2`,
    },
    Network:{
      root: `${ROOTS.DASHBOARD}/Network`,
      network_call1: `${ROOTS.DASHBOARD}/Network/network_call1`
    },
    network_view:`${ROOTS.DASHBOARD}/network_view`,
    Software:{
      root: `${ROOTS.DASHBOARD}/Software`,
      software_call1: `${ROOTS.DASHBOARD}/Software/software_call1`
    },
    software_view:`${ROOTS.DASHBOARD}/software_view`,
    software_report:`${ROOTS.DASHBOARD}/software_report`,

  },
};
