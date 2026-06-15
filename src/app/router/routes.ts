export const ROUTES = {
  PUBLIC: {
    HOME: '/',
  },

  OWNER: {
    ROOT: '/owner',
    DASHBOARD: '/owner/dashboard',
  },

  ADMIN: {
    ROOT: '/admin',
    DASHBOARD: '/admin/dashboard',
  },

  NOT_FOUND: '*',
} as const;