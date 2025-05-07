import { Layout } from '../components/layout/layout.tsx';

export function ErrorPage() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl">🥲 Page Not Found 🥲</p>
      </main>
    </Layout>
  );
}
