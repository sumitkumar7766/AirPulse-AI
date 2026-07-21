'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LoginPage } from '../../components/LoginPage';

export default function LoginPageContainer() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', 'administrator');
    router.push('/dashboard');
  };

  return <LoginPage onLogin={handleLogin} />;
}
