import { Link } from 'react-router-dom';

import { ROUTES } from '../../../app/router/routes';
import { useDocumentTitle } from '../../../shared/hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle('Dawriy | Home');

  return (
    <main className="page">
      <h1>Dawriy MVP</h1>
      <p>Public landing page is ready.</p>

      <nav className="nav-links">
        <Link to={ROUTES.OWNER.DASHBOARD}>Owner Dashboard</Link>
        <Link to={ROUTES.ADMIN.DASHBOARD}>Admin Dashboard</Link>
      </nav>
    </main>
  );
}