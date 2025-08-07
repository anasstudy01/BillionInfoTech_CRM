// Sidebar menu data configuration
export const menuData = [
  {
    title: 'Dashboard',
    icon: '🎨',
    path: '/',
  },
  {
    title: 'Profile',
    icon: '👤',
    path: '/profile',
  },
  {
    title: 'Accounts',
    icon: '⚙️',
    subMenu: [
      { title: 'Manage Accounts', path: '/accounts/manage' },
      { title: 'Live Trades', path: '/accounts/live' },
      { title: 'Demo Trades', path: '/accounts/demo' },
    ],
  },
  {
    title: 'Bonuses & Promotions',
    icon: '🏆',
    path: '/bonuses',
  },
  {
    title: 'Funds',
    icon: '💵',
    subMenu: [
      { title: 'Deposit Funds', path: '/funds/deposit' },
      { title: 'Withdraw Funds', path: '/funds/withdraw' },
      { title: 'Internal Transfer', path: '/funds/transfer' },
      { title: 'Transactions History', path: '/funds/history' },
    ],
  },
  {
    title: 'Trading Terminals',
    icon: '💻',
    subMenu: [
      { title: 'Desktop Terminal', path: '/terminals/desktop' },
      { title: 'Mobile iOS', path: '/terminals/ios' },
      { title: 'Android', path: '/terminals/android' },
    ],
  },
  {
    title: 'IB Menu',
    icon: '👥',
    subMenu: [
      { title: "IB Tree View", path: "/ib/tree" },
      { title: "IB Accordion View", path: "/ib/accordion" },
      { title: "My Sub IB's Summary", path: "/ib/summary" },
      { title: "Set Commission to IBs", path: "/ib/set-commission" },
      { title: "Commission Report", path: "/ib/report" },
      { title: "IB's Trade History", path: "/ib/trade-history" },
      { title: "IB Transactions", path: "/ib/transactions" },
      { title: "IB Business", path: "/ib/business" },
    ],
  },
  {
    title: 'Support',
    icon: 'ℹ️',
    subMenu: [
      { title: 'All Tickets', path: '/support/tickets' },
      { title: 'Create Ticket', path: '/support/create' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    subMenu: [
      { title: 'Analytics', path: '/tools/analytics' },
      { title: 'Trading Tools', path: '/tools/trading' },
    ],
  },
];
