import React, { useState } from 'react';
import DeliveryMap from '../components/DeliveryMap';

export default function CustomerDashboard() {
  const [deliveries, setDeliveries] = useState([
    {
      id: 'DEL-1234',
      date: '2023-08-15',
      status: 'Delivered',
      pickup: '123 Main St',
      dropoff: '456 Elm St',
      cost: '$12.50',
      courier: 'Michael B.'
    },
    {
      id: 'DEL-1235',
      date: '2023-08-20',
      status: 'In Transit',
      pickup: '789 Oak St',
      dropoff: '101 Pine St',
      cost: '$8.75',
      courier: 'Sarah J.'
    },
    {
      id: 'DEL-1236',
      date: '2023-08-22',
      status: 'Scheduled',
      pickup: '202 Maple Ave',
      dropoff: '303 Cedar Blvd',
      cost: '$15.00',
      courier: 'Pending'
    }
  ]);

  const [newDelivery, setNewDelivery] = useState({
    pickup: '',
    dropoff: '',
    packageSize: 'small',
    date: '',
    time: ''
  });

  const [nearbyCouriers, setNearbyCouriers] = useState([
    {
      id: 'C-1001',
      name: 'Lisa K.',
      location: { lat: 52.520008, lng: 13.407954 },
      rating: 4.9,
      distanceAway: '0.5 km',
      estimatedPickupTime: '5 min'
    },
    {
      id: 'C-1002',
      name: 'Markus W.',
      location: { lat: 52.522008, lng: 13.402954 },
      rating: 4.7,
      distanceAway: '1.2 km',
      estimatedPickupTime: '8 min'
    },
    {
      id: 'C-1003',
      name: 'Jana B.',
      location: { lat: 52.518008, lng: 13.406954 },
      rating: 4.8,
      distanceAway: '0.8 km',
      estimatedPickupTime: '6 min'
    }
  ]);

  const [selectedCourier, setSelectedCourier] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDelivery(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this to an API
    const newDeliveryItem = {
      id: `DEL-${Math.floor(1000 + Math.random() * 9000)}`,
      date: newDelivery.date,
      status: 'Scheduled',
      pickup: newDelivery.pickup,
      dropoff: newDelivery.dropoff,
      cost: 'Calculating...',
      courier: 'Pending'
    };

    setDeliveries([newDeliveryItem, ...deliveries]);
    setNewDelivery({
      pickup: '',
      dropoff: '',
      packageSize: 'small',
      date: '',
      time: ''
    });
  };

  const handleCourierClick = (courier) => {
    setSelectedCourier(courier);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Customer Dashboard</h2>
      
      {/* Map Section */}
      <section className="mb-8">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Delivery Map</h3>
          <p className="text-gray-600 mb-4">
            View nearby couriers and track your active deliveries in real-time.
          </p>
          
          <div className="h-[500px] mb-4">
            <DeliveryMap 
              courierLocations={nearbyCouriers}
              activeDeliveries={deliveries.filter(delivery => delivery.status === 'In Transit')}
              onCourierClick={handleCourierClick}
              onActiveDeliveryClick={(delivery) => console.log('Active delivery clicked:', delivery)}
              userType="customer"
            />
          </div>
          
          {selectedCourier && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{selectedCourier.name}</h4>
                  <div className="text-sm text-gray-600 mt-1">Rating: {selectedCourier.rating} ★</div>
                  <div className="text-sm text-gray-600">{selectedCourier.distanceAway} away</div>
                  <div className="text-sm text-gray-600">Estimated pickup: {selectedCourier.estimatedPickupTime}</div>
                </div>
                <button 
                  className="primary-btn px-4 py-2 rounded"
                  onClick={() => {
                    // Logic to request this specific courier
                    alert(`Requested courier: ${selectedCourier.name}`);
                  }}
                >
                  Request This Courier
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6 bg-primary bg-opacity-10 hover:bg-opacity-20 transition duration-300">
          <h3 className="font-semibold text-primary mb-2">Request a Delivery</h3>
          <p className="text-gray-600 mb-4">Need something delivered? Create a new delivery request in just a few steps.</p>
          <button className="primary-btn py-2 px-4 rounded text-sm">New Request</button>
        </div>
        
        <div className="card p-6 bg-accent bg-opacity-10 hover:bg-opacity-20 transition duration-300">
          <h3 className="font-semibold text-accent mb-2">Track Active Deliveries</h3>
          <p className="text-gray-600 mb-4">You have 1 delivery in progress. Check status updates in real-time.</p>
          <button className="bg-accent text-white py-2 px-4 rounded text-sm hover:bg-opacity-90 transition">View Map</button>
        </div>
        
        <div className="card p-6 bg-gray-100 hover:bg-gray-200 transition duration-300">
          <h3 className="font-semibold mb-2">Delivery Points</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Current Balance:</p>
            <p className="text-2xl font-bold text-primary">250</p>
          </div>
          <button className="border border-primary text-primary py-2 px-4 rounded text-sm hover:bg-primary hover:text-white transition">Redeem Points</button>
        </div>
      </div>
      
      {/* Request New Delivery Form */}
      <div className="card p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Request New Delivery</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="pickup">Pickup Address</label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                className="w-full p-3 border border-gray-300 rounded"
                value={newDelivery.pickup}
                onChange={handleInputChange}
                placeholder="Enter pickup address"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="dropoff">Dropoff Address</label>
              <input
                type="text"
                id="dropoff"
                name="dropoff"
                className="w-full p-3 border border-gray-300 rounded"
                value={newDelivery.dropoff}
                onChange={handleInputChange}
                placeholder="Enter dropoff address"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="packageSize">Package Size</label>
              <select
                id="packageSize"
                name="packageSize"
                className="w-full p-3 border border-gray-300 rounded"
                value={newDelivery.packageSize}
                onChange={handleInputChange}
                required
              >
                <option value="small">Small (fits in a backpack)</option>
                <option value="medium">Medium (fits in a car trunk)</option>
                <option value="large">Large (needs sedan or SUV)</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={newDelivery.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={newDelivery.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button type="submit" className="primary-btn py-3 px-6 rounded font-semibold">
              Request Delivery
            </button>
          </div>
        </form>
      </div>
      
      {/* Recent Deliveries */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Deliveries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Date</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Pickup</th>
                <th className="py-3 px-4 font-semibold">Dropoff</th>
                <th className="py-3 px-4 font-semibold">Cost</th>
                <th className="py-3 px-4 font-semibold">Courier</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {deliveries.map(delivery => (
                <tr key={delivery.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{delivery.id}</td>
                  <td className="py-3 px-4">{delivery.date}</td>
                  <td className="py-3 px-4">
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        delivery.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : delivery.status === 'In Transit' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{delivery.pickup}</td>
                  <td className="py-3 px-4">{delivery.dropoff}</td>
                  <td className="py-3 px-4">{delivery.cost}</td>
                  <td className="py-3 px-4">{delivery.courier}</td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:text-primary-dark transition mr-2">
                      View
                    </button>
                    {delivery.status === 'In Transit' && (
                      <button className="text-accent hover:text-accent-dark transition">
                        Track
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
