import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { connectSocket } from './api/socket';

// Only connect to WebSocket in development
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
if (isLocalhost) {
  connectSocket('ws://localhost:4000');
}

export function App() {
  return <RouterProvider router={router} />;
}
