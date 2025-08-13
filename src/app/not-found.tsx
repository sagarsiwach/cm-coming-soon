'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-stone-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-stone-600 mb-4">Page Not Found</h2>
        <p className="text-stone-500 mb-8">Redirecting you to our main page in 3 seconds...</p>
        <div className="w-64 bg-stone-200 rounded-full h-2 mx-auto">
          <div className="bg-red-600 h-2 rounded-full animate-pulse w-1/3"></div>
        </div>
      </div>
    </div>
  );
}