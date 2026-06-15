import { Link, Outlet } from 'react-router-dom';

import { ROUTES } from '../../../app/router/routes';

export function OwnerLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Owner</h2>

        <nav>
          <Link to={ROUTES.OWNER.DASHBOARD}>Dashboard</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}