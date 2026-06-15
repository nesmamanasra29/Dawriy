import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from './routes';

import { HomePage } from '../../features/public/pages/HomePage';
import { NotFoundPage } from '../../features/public/pages/NotFoundPage';

import { OwnerLayout } from '../../features/owner/layouts/OwnerLayout';
import { OwnerDashboardPage } from '../../features/owner/pages/OwnerDashboardPage';

import { AdminLayout } from '../../features/admin/layouts/AdminLayout';
import { AdminDashboardPage } from '../../features/admin/pages/AdminDashboardPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path={ROUTES.PUBLIC.HOME} element={<HomePage />} />

        {/* Owner routes */}
        <Route path={ROUTES.OWNER.ROOT} element={<OwnerLayout />}>
          <Route index element={<Navigate to={ROUTES.OWNER.DASHBOARD} replace />} />
          <Route path="dashboard" element={<OwnerDashboardPage />} />
        </Route>

        {/* Admin routes */}
        <Route path={ROUTES.ADMIN.ROOT} element={<AdminLayout />}>
          <Route index element={<Navigate to={ROUTES.ADMIN.DASHBOARD} replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
        </Route>

        {/* Fallback route */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}