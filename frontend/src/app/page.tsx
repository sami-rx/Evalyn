'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('access_token');
    const role = localStorage.getItem('user_role');

    if (token && role) {
      // Redirect to appropriate dashboard based on role
      const redirectMap: Record<string, string> = {
        admin: '/dashboard/jobs',
        reviewer: '/dashboard/reviews',
        candidate: '/portal/status',
      };
      router.push(redirectMap[role] || '/dashboard/jobs');
    } else {
      // Not logged in, go to login page
      router.push('/login');
    }
  }, [router]);

  // Show nothing while redirecting
  return null;
}
