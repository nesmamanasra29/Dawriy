import { Link } from 'react-router-dom';

import { ROUTES } from '../../../app/router/routes';
import { useDocumentTitle } from '../../../shared/hooks/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Dawriy | Page Not Found');

  return (
    <main className="page">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to={ROUTES.PUBLIC.HOME}>Go back home</Link>
    </main>
  );
}