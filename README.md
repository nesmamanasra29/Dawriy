# Dawriy MVP

Dawriy MVP is a React/Vite frontend project prepared with a scalable folder structure for Public, Owner, and Admin flows.

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM

## Project Structure

```txt
src/
├── app/
│   ├── App.tsx
│   └── router/
│       ├── AppRouter.tsx
│       └── routes.ts
│
├── features/
│   ├── public/
│   │   └── pages/
│   │       ├── HomePage.tsx
│   │       └── NotFoundPage.tsx
│   │
│   ├── owner/
│   │   ├── layouts/
│   │   │   └── OwnerLayout.tsx
│   │   └── pages/
│   │       └── OwnerDashboardPage.tsx
│   │
│   └── admin/
│       ├── layouts/
│       │   └── AdminLayout.tsx
│       └── pages/
│           └── AdminDashboardPage.tsx
│
├── shared/
│   ├── api/
│   │   └── httpClient.ts
│   ├── components/
│   │   └── PageLoader.tsx
│   ├── constants/
│   │   └── app.constants.ts
│   ├── hooks/
│   │   └── useDocumentTitle.ts
│   ├── types/
│   │   └── common.types.ts
│   └── utils/
│       └── cn.ts
│
├── index.css
├── main.tsx
└── vite-env.d.ts