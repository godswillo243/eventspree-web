import { eventspree } from '#/assets/index.ts';
import { Link } from '@tanstack/react-router';

export const PublicNavbar = () => {
  return (
    <div className="w-full layout-container py-2 flex items-center justify-between h-14! bg-neutral-0 border-b border-b-neutral-200 sticky top-0">
      <Link to="/">
        <img src={ eventspree } width={ 144 } height={ 48 } />
      </Link>
      <div className="flex items-center gap-3">
        <Link to="/browse" className="px-4 py-1.5 hover:bg-neutral-100 rounded-md text-body font-medium text-neutral-600">Browse</Link>
        <Link to="/contact" className="px-4 py-1.5 hover:bg-neutral-100 rounded-md text-body font-medium text-neutral-600">Contact</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/login" className="button-secondary">
          Log in
        </Link>
        <Link to="/signup" className="button-primary">
          Sign up
        </Link>
      </div>
    </div>
  );
};
