// Profile Card component
const ProfileCard = () => {
  const { user } = useAuth();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card p-6 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4">Profile</h3>
        
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user && user.name ? user.name.charAt(0) : 'U'}
          </div>
          
          <div className="ml-4">
            <p className="font-medium text-lg">{user && user.name || 'User'}</p>
            <p className="text-gray-600">{user && user.email || 'user@example.com'}</p>
          </div>
        </div>
        
        <div className="p-3 bg-gray-100 rounded mb-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Delivery Points</span>
            <span className="text-accent font-bold">{user && user.deliveryPoints || 0}</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <p>Earn points for each successful delivery</p>
            <a href="#" className="text-primary hover:underline">Redeem for discounts →</a>
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <p className="flex justify-between">
            <span className="text-gray-600">Account Type</span>
            <span className="font-medium capitalize">{user && user.role || 'Customer'}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600">Member Since</span>
            <span className="font-medium">June 2023</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600">Completed Deliveries</span>
            <span className="font-medium">{user && user.role === 'courier' ? '42' : '15'}</span>
          </p>
        </div>
        
        <button className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded font-medium hover:bg-gray-300 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};
