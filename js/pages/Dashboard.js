import React from 'react';
import { useAuth } from '../app';
import CustomerDashboard from './CustomerDashboard';
import CourierDashboard from './CourierDashboard';
import { ProfileCard } from './ProfileCard';

export function Dashboard() {
  const { user } = useAuth();
  
  return (
    <div>
      {user && user.role === 'customer' ? <CustomerDashboard /> : <CourierDashboard />}
      <ProfileCard />
    </div>
  );
}
