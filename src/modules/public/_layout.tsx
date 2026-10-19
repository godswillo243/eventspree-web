import { Outlet } from "@tanstack/react-router";
import { PublicNavbar } from "../../components/public/public-navbar";
import { Footer } from "../../components/public/public-footer";

export const PublicLayout = () => {
  return (
    <main className="relative w-full h-dvh overflow-auto bg-neutral-50 pb-6">
      <PublicNavbar />
      {<Outlet />}
      <Footer />
    </main>
  );
};
