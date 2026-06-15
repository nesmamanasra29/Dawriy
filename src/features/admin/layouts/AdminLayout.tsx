import { Link, Outlet } from 'react-router-dom';

import { ROUTES } from '../../../app/router/routes';

export function AdminLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Admin</h2>

        <nav>
          <Link to={ROUTES.ADMIN.DASHBOARD}>Dashboard</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}