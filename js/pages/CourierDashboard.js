import React, { useState } from 'react';
import DeliveryMap from '../components/DeliveryMap';

// CourierDashboard component
export default function CourierDashboard() {
  const [isOnline, setIsOnline] = useState(false);

  const [availableDeliveries, setAvailableDeliveries] = useState([
    {
      id: 'DEL-4321',
      requestTime: '10 mins ago',
      pickup: '987 Spruce St',
      dropoff: '654 Birch Ave',
      distance: '3.2 km',
      estimatedEarnings: '$7.20',
      packageSize: 'Small'
    },
    {
      id: 'DEL-4322',
      requestTime: '15 mins ago',
      pickup: '432 Willow Dr',
      dropoff: '111 Forest Ln',
      distance: '5.7 km',
      estimatedEarnings: '$9.70',
      packageSize: 'Medium'
    },
    {
      id: 'DEL-4323',
      requestTime: '22 mins ago',
      pickup: '765 River Rd',
      dropoff: '890 Valley Blvd',
      distance: '8.1 km',
      estimatedEarnings: '$12.10',
      packageSize: 'Large'
    }
  ]);

  const [activeDeliveries, setActiveDeliveries] = useState([
    {
      id: 'DEL-1111',
      status: 'Picked up',
      pickup: '333 Market St',
      dropoff: '444 Commerce Ave',
      timeRemaining: '15 mins',
      customer: 'Emily W.',
      earnings: '$9.00'
    }
  ]);

  const [completedDeliveries, setCompletedDeliveries] = useState([
    {
      id: 'DEL-0987',
      date: '2023-08-21',
      pickup: '111 First St',
      dropoff: '222 Second Ave',
      earnings: '$8.50',
      customerRating: 5
    },
    {
      id: 'DEL-0986',
      date: '2023-08-19',
      pickup: '555 Fifth St',
      dropoff: '666 Sixth Ave',
      earnings: '$11.25',
      customerRating: 4
    }
  ]);

  const [earningStats, setEarningStats] = useState({
    today: '$32.75',
    week: '$187.50',
    month: '$756.00',
    allTime: '$2,105.25'
  });

  const [selectedDeliveryRequest, setSelectedDeliveryRequest] = useState(null);

  const enhancedAvailableDeliveries = availableDeliveries.map(delivery => ({
    ...delivery,
    pickupLocation: {
      lat: 52.52 + (Math.random() * 0.02 - 0.01),
      lng: 13.40 + (Math.random() * 0.02 - 0.01)
    },
    dropoffLocation: {
      lat: 52.52 + (Math.random() * 0.02 - 0.01),
      lng: 13.40 + (Math.random() * 0.02 - 0.01)
    }
  }));

  const enhancedActiveDeliveries = activeDeliveries.map(delivery => ({
    ...delivery,
    pickupLocation: {
      lat: 52.52 + (Math.random() * 0.02 - 0.01),
      lng: 13.40 + (Math.random() * 0.02 - 0.01)
    },
    dropoffLocation: {
      lat: 52.52 + (Math.random() * 0.02 - 0.01),
      lng: 13.40 + (Math.random() * 0.02 - 0.01)
    },
    courierLocation: {
      lat: 52.52 + (Math.random() * 0.01 - 0.005),
      lng: 13.40 + (Math.random() * 0.01 - 0.005)
    }
  }));

  const acceptDelivery = (deliveryId) => {
    const deliveryToAccept = availableDeliveries.find(d => d.id === deliveryId);
    if (deliveryToAccept) {
      const newActiveDelivery = {
        id: deliveryToAccept.id,
        status: 'Accepted',
        pickup: deliveryToAccept.pickup,
        dropoff: deliveryToAccept.dropoff,
        timeRemaining: 'Calculating...',
        customer: 'Customer',
        earnings: deliveryToAccept.estimatedEarnings
      };
      
      setActiveDeliveries([...activeDeliveries, newActiveDelivery]);
      setAvailableDeliveries(availableDeliveries.filter(d => d.id !== deliveryId));
    }
  };

  const updateDeliveryStatus = (deliveryId, newStatus) => {
    const updatedActiveDeliveries = activeDeliveries.map(delivery => {
      if (delivery.id === deliveryId) {
        return { ...delivery, status: newStatus };
      }
      return delivery;
    });

    if (newStatus === 'Delivered') {
      const deliveredItem = activeDeliveries.find(d => d.id === deliveryId);
      if (deliveredItem) {
        const newCompletedDelivery = {
          id: deliveredItem.id,
          date: new Date().toISOString().split('T')[0],
          pickup: deliveredItem.pickup,
          dropoff: deliveredItem.dropoff,
          earnings: deliveredItem.earnings,
          customerRating: 'Pending'
        };
        
        setCompletedDeliveries([newCompletedDelivery, ...completedDeliveries]);
        setActiveDeliveries(activeDeliveries.filter(d => d.id !== deliveryId));
      }
    } else {
      setActiveDeliveries(updatedActiveDeliveries);
    }
  };

  const toggleOnlineStatus = () => {
    setIsOnline(prevStatus => !prevStatus);
  };

  const handleDeliveryRequestClick = (request) => {
    setSelectedDeliveryRequest(request);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold">Courier Dashboard</h2>
        
        <div className="mt-4 md:mt-0">
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">Status:</span>
            <div 
              className={`relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors ease-in-out duration-200 ${isOnline ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={toggleOnlineStatus}
            >
              <span className="sr-only">Toggle availability</span>
              <span 
                className={`inline-block h-6 w-6 rounded-full bg-white shadow transform transition ease-in-out duration-200 ${isOnline ? 'translate-x-6' : 'translate-x-0'}`} 
              />
            </div>
            <span className={`font-medium ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {isOnline 
              ? 'You are visible to customers and can receive delivery requests' 
              : 'You are invisible to customers and won\'t receive delivery requests'}
          </p>
        </div>
      </div>
      
      {!isOnline && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <p><strong>You're currently offline.</strong> Go online to start receiving delivery requests.</p>
          </div>
        </div>
      )}
      
      <section className="mb-8">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Delivery Map</h3>
          <p className="text-gray-600 mb-4">
            View available delivery requests and your active deliveries in real-time.
          </p>
          
          <div className="h-[500px] mb-4">
            <DeliveryMap 
              deliveryRequests={isOnline ? enhancedAvailableDeliveries : []}
              activeDeliveries={enhancedActiveDeliveries}
              onDeliveryRequestClick={handleDeliveryRequestClick}
              onActiveDeliveryClick={(delivery) => console.log('Active delivery clicked:', delivery)}
              userType="courier"
            />
          </div>
          
          {selectedDeliveryRequest && (
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Delivery Request: {selectedDeliveryRequest.id}</h4>
                  <div className="text-sm text-gray-600 mt-1">From: {selectedDeliveryRequest.pickup}</div>
                  <div className="text-sm text-gray-600">To: {selectedDeliveryRequest.dropoff}</div>
                  <div className="text-sm text-gray-600">Distance: {selectedDeliveryRequest.distance}</div>
                  <div className="text-sm font-medium text-green-700">Earnings: {selectedDeliveryRequest.estimatedEarnings}</div>
                </div>
                <button 
                  className="primary-btn px-4 py-2 rounded"
                  onClick={() => acceptDelivery(selectedDeliveryRequest.id)}
                >
                  Accept Delivery
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card p-6 bg-primary bg-opacity-10 hover:bg-opacity-20 transition duration-300">
          <h3 className="font-semibold text-primary mb-2">Today's Earnings</h3>
          <p className="text-3xl font-bold">{earningStats.today}</p>
          <p className="text-sm text-gray-600 mt-1">From 4 deliveries</p>
        </div>
        
        <div className="card p-6 bg-accent bg-opacity-10 hover:bg-opacity-20 transition duration-300">
          <h3 className="font-semibold text-accent mb-2">Weekly Earnings</h3>
          <p className="text-3xl font-bold">{earningStats.week}</p>
          <p className="text-sm text-gray-600 mt-1">Aug 15 - Aug 21</p>
        </div>
        
        <div className="card p-6 bg-gray-100 hover:bg-gray-200 transition duration-300">
          <h3 className="font-semibold mb-2">Rating</h3>
          <div className="flex items-center">
            <p className="text-3xl font-bold mr-2">4.9</p>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          <p className="text-sm text-gray-600 mt-1">From 152 ratings</p>
        </div>
        
        <div className="card p-6 bg-green-50 hover:bg-green-100 transition duration-300">
          <h3 className="font-semibold text-green-700 mb-2">Delivery Points</h3>
          <p className="text-3xl font-bold text-green-700">325</p>
          <p className="text-sm text-gray-600 mt-1">+25 this week</p>
        </div>
      </div>
      
      <div className="card p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Active Deliveries</h3>
        {activeDeliveries.length > 0 ? (
          <div className="space-y-4">
            {activeDeliveries.map(delivery => (
              <div key={delivery.id} className="bg-white border border-primary rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-semibold mr-2">{delivery.id}</span>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        delivery.status === 'Picked up' 
                          ? 'bg-blue-100 text-blue-800' 
                          : delivery.status === 'Accepted' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600">Pickup: <span className="font-medium text-gray-800">{delivery.pickup}</span></p>
                      <p className="text-gray-600">Dropoff: <span className="font-medium text-gray-800">{delivery.dropoff}</span></p>
                    </div>
                    <div>
                      <p className="text-gray-600">Customer: <span className="font-medium text-gray-800">{delivery.customer}</span></p>
                      <p className="text-gray-600">Earnings: <span className="font-medium text-gray-800">{delivery.earnings}</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                  {delivery.status === 'Accepted' && (
                    <button 
                      onClick={() => updateDeliveryStatus(delivery.id, 'Picked up')}
                      className="bg-blue-500 text-white py-2 px-4 rounded text-sm hover:bg-blue-600 transition"
                    >
                      Mark as Picked Up
                    </button>
                  )}
                  
                  {delivery.status === 'Picked up' && (
                    <button 
                      onClick={() => updateDeliveryStatus(delivery.id, 'Delivered')}
                      className="bg-green-500 text-white py-2 px-4 rounded text-sm hover:bg-green-600 transition"
                    >
                      Mark as Delivered
                    </button>
                  )}
                  
                  <button className="border border-primary text-primary py-2 px-4 rounded text-sm hover:bg-primary hover:text-white transition">
                    Get Directions
                  </button>
                  
                  <button className="border border-accent text-accent py-2 px-4 rounded text-sm hover:bg-accent hover:text-white transition">
                    Contact Customer
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-6 text-center rounded-lg">
            <p className="text-gray-600">You don't have any active deliveries at the moment.</p>
            <p className="text-gray-600 mt-2">Check available deliveries below to get started.</p>
          </div>
        )}
      </div>
      
      <div className="card p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Available Deliveries</h3>
        
        {isOnline ? (
          availableDeliveries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold">ID</th>
                    <th className="py-3 px-4 font-semibold">Requested</th>
                    <th className="py-3 px-4 font-semibold">Pickup</th>
                    <th className="py-3 px-4 font-semibold">Dropoff</th>
                    <th className="py-3 px-4 font-semibold">Distance</th>
                    <th className="py-3 px-4 font-semibold">Size</th>
                    <th className="py-3 px-4 font-semibold">Earnings</th>
                    <th className="py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {availableDeliveries.map(delivery => (
                    <tr key={delivery.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{delivery.id}</td>
                      <td className="py-3 px-4">{delivery.requestTime}</td>
                      <td className="py-3 px-4">{delivery.pickup}</td>
                      <td className="py-3 px-4">{delivery.dropoff}</td>
                      <td className="py-3 px-4">{delivery.distance}</td>
                      <td className="py-3 px-4">{delivery.packageSize}</td>
                      <td className="py-3 px-4 font-medium">{delivery.estimatedEarnings}</td>
                      <td className="py-3 px-4">
                        <button 
                          onClick={() => acceptDelivery(delivery.id)}
                          className="bg-primary text-white py-1 px-3 rounded text-sm hover:bg-primary-dark transition"
                        >
                          Accept
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 text-center rounded-lg">
              <p className="text-gray-600">No delivery requests available at the moment.</p>
              <p className="text-gray-600 mt-2">Check back later or try expanding your service area.</p>
            </div>
          )
        ) : (
          <div className="bg-gray-50 p-6 text-center rounded-lg">
            <p className="text-gray-600">You're currently offline and can't receive delivery requests.</p>
            <button 
              onClick={toggleOnlineStatus}
              className="mt-3 bg-primary text-white py-2 px-4 rounded text-sm hover:bg-opacity-90 transition"
            >
              Go Online
            </button>
          </div>
        )}
      </div>
      
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4">Completed Deliveries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Date</th>
                <th className="py-3 px-4 font-semibold">Pickup</th>
                <th className="py-3 px-4 font-semibold">Dropoff</th>
                <th className="py-3 px-4 font-semibold">Earnings</th>
                <th className="py-3 px-4 font-semibold">Customer Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {completedDeliveries.map(delivery => (
                <tr key={delivery.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{delivery.id}</td>
                  <td className="py-3 px-4">{delivery.date}</td>
                  <td className="py-3 px-4">{delivery.pickup}</td>
                  <td className="py-3 px-4">{delivery.dropoff}</td>
                  <td className="py-3 px-4 font-medium">{delivery.earnings}</td>
                  <td className="py-3 px-4">
                    {delivery.customerRating === 'Pending' ? (
                      <span className="text-yellow-600">Pending</span>
                    ) : (
                      <div className="flex items-center">
                        <span className="mr-1">{delivery.customerRating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
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
