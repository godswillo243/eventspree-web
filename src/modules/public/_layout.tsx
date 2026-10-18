import { Outlet } from '@tanstack/react-router';
import { PublicNavbar } from './components/navbar';
import { Footer } from "./components/footer";

export const PublicLayout = () => {
  return (
    <main className="relative w-full h-dvh overflow-auto bg-neutral-50 pb-6">
      <PublicNavbar />
      { <Outlet /> }
      <Footer />
    </main>
  );
};
