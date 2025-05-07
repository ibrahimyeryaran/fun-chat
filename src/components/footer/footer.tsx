import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="flex items-center w-full justify-around p-4 absolute z-20 bottom-0">
      <p>2025</p>
      <p className="text-sm">RS School</p>
      <Link to={'https://github.com/ibrahimyeryaran'} target="_blank" rel="noopener noreferrer">
        ibrahimyeryaran
      </Link>
    </footer>
  );
}
