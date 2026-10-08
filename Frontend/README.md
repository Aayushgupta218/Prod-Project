# Frontend

Frontend application for the Home Services platform, built with **React, TypeScript, and Vite**.

## Tech Stack

* React
* TypeScript
* Vite
* CSS
* React Router

## Prerequisites

Make sure the following are installed:

* Node.js
* npm

Verify the installation:

```bash
node --version
npm --version
```

## Getting Started

### 1. Install dependencies

From the `frontend` directory:

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

## Backend Connection

The frontend communicates with the Java Spring Boot backend.

Backend:

```text
http://localhost:8080
```

During local development, Vite proxies `/api` requests to the backend.


## Project Structure

```text
src/
├── api/                # Backend API communication
│
├── components/         # Reusable UI components
│   ├── Navbar/
│   └── ServiceCard/
│
├── pages/              # Application pages/routes
│   ├── Home/
│   └── Login/
│
├── models/              # TypeScript types and interfaces
│
├── utils/              # Common reusable utility functions
│   ├── dateUtils.ts
│   ├── formatUtils.ts
│   └── validationUtils.ts
│
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Folder Responsibilities

### `api/`

Contains functions responsible for communicating with the backend.

Examples:

```text
api/
├── apiClient.ts
├── authApi.ts
├── providerApi.ts
└── bookingApi.ts
```

API-specific logic should stay here rather than inside components.

### `components/`

Contains reusable UI components.

Example:

```text
components/
├── Navbar/
│   ├── Navbar.tsx
│   └── Navbar.css
│
└── ServiceCard/
    ├── ServiceCard.tsx
    └── ServiceCard.css
```

A component should generally represent a reusable piece of UI.

### `pages/`

Contains complete application screens/routes.

Example:

```text
pages/
├── Home/
│   ├── Home.tsx
│   └── Home.css
│
├── Login/
│   ├── Login.tsx
│   └── Login.css
│
└── Booking/
    ├── Booking.tsx
    └── Booking.css
```

Pages can combine multiple components to build a complete screen.

### `models/`

Contains shared TypeScript types and interfaces.


### `utils/`

Contains common, reusable utility functions that are not specific to a particular page, component, or API.

Examples:

```text
utils/
├── dateUtils.ts
├── formatUtils.ts
└── validationUtils.ts
```
Utility functions should be generic enough to be reused across different parts of the application.

## Naming Conventions

| Item             | Convention | Example           |
| ---------------- | ---------- | ----------------- |
| Components       | PascalCase | `ServiceCard`     |
| Component files  | PascalCase | `ServiceCard.tsx` |
| Pages            | PascalCase | `Home.tsx`        |
| Variables        | camelCase  | `providerName`    |
| Functions        | camelCase  | `handleSubmit()`  |
| Types/Interfaces | PascalCase | `Provider`        |
| CSS classes      | kebab-case | `service-card`    |
| Utility files    | camelCase  | `dateUtils.ts`    |
| API files        | camelCase  | `providerApi.ts`  |

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase.

## Development

Run the frontend and backend separately during development:

```text
frontend/
npm run dev
        ↓
http://localhost:5173
```

```text
backend/
mvn spring-boot:run
        ↓
http://localhost:8080
```

API requests from the frontend use the `/api` prefix and are proxied to the Spring Boot backend by Vite.

## Development Principles

* Keep components focused and reusable.
* Keep pages responsible for composing complete screens.
* Keep API communication inside `api/`.
* Keep shared TypeScript definitions inside `types/`.
* Keep generic reusable logic inside `utils/`.
* Avoid putting business logic directly inside UI components when it can be separated cleanly.
* Prefer simple solutions over unnecessary abstractions.
