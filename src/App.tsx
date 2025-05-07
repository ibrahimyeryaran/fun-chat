import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { connectSocket } from './api/socket';

// Only connect to WebSocket in development
if (import.meta.env.DEV) {
  connectSocket('ws://localhost:4000');
}

export function App() {
  return <RouterProvider router={router} />;
}
