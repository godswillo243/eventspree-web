// apps/web/src/components/MobileNav.tsx
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { X as XIcon } from 'lucide-react';

export function MobileNav() {
  return (
    <div className="md:hidden relative z-50">
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-0">
        <Link to="/" className="heading-3 text-primary-600">
          EventHub
        </Link>

        {/* Hamburger / X toggle */}
      </div>
    </div>
  );
}
