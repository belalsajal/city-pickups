import React, { useEffect, useRef, useState } from 'react';

export default function DeliveryMap({ 
  center = { lat: 52.520008, lng: 13.404954 }, // Default to Berlin
  zoom = 13,
  courierLocations = [],
  deliveryRequests = [],
  activeDeliveries = [],
  onCourierClick,
  onDeliveryRequestClick,
  onActiveDeliveryClick,
  userType = 'customer' // 'customer' or 'courier'
}) {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [markers, setMarkers] = useState([]);

  // Initialize map when component mounts
  useEffect(() => {
    // This is a mock implementation - in a real app, you would use Google Maps or Mapbox
    const initMap = () => {
      // Mock mapInstance for demonstration purposes
      const mockMap = {
        setCenter: (center) => console.log('Map center set to', center),
        setZoom: (zoom) => console.log('Map zoom set to', zoom),
      };
      setMapInstance(mockMap);
      
      // In a real implementation, you'd have code like:
      // const map = new google.maps.Map(mapRef.current, {
      //   center,
      //   zoom,
      //   disableDefaultUI: true,
      //   zoomControl: true,
      //   fullscreenControl: true,
      // });
      // setMapInstance(map);
    };

    if (!mapInstance) {
      initMap();
    }
    
    return () => {
      // Cleanup markers if necessary
      if (markers.length) {
        markers.forEach(marker => {
          // In a real implementation: marker.setMap(null);
        });
        setMarkers([]);
      }
    };
  }, []);

  // Update markers when data changes
  useEffect(() => {
    if (mapInstance) {
      // Clear existing markers
      markers.forEach(marker => {
        // In a real implementation: marker.setMap(null);
      });
      
      const newMarkers = [];
      
      // Add courier markers (visible to customers)
      if (userType === 'customer' && courierLocations.length) {
        courierLocations.forEach((courier) => {
          // In a real implementation:
          // const marker = new google.maps.Marker({
          //   position: { lat: courier.location.lat, lng: courier.location.lng },
          //   map: mapInstance,
          //   icon: {
          //     url: '/images/courier-marker.svg',
          //     scaledSize: new google.maps.Size(30, 30)
          //   },
          //   title: `Courier: ${courier.name}`
          // });
          // marker.addListener('click', () => onCourierClick(courier));
          // newMarkers.push(marker);
          
          newMarkers.push({ id: courier.id, type: 'courier' });
        });
      }
      
      // Add delivery request markers (visible to couriers)
      if (userType === 'courier' && deliveryRequests.length) {
        deliveryRequests.forEach((request) => {
          // In a real implementation, add markers for pickup and dropoff
          // with appropriate icons and click handlers
          newMarkers.push({ id: request.id, type: 'request' });
        });
      }
      
      // Add active delivery markers (visible to both)
      if (activeDeliveries.length) {
        activeDeliveries.forEach((delivery) => {
          // In a real implementation, add markers for pickup and dropoff
          // with appropriate icons and click handlers
          newMarkers.push({ id: delivery.id, type: 'active' });
        });
      }
      
      setMarkers(newMarkers);
    }
  }, [mapInstance, courierLocations, deliveryRequests, activeDeliveries, userType]);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
      {/* Map container */}
      <div ref={mapRef} className="absolute inset-0 bg-gray-200">
        {/* This would be replaced by the actual map in a real implementation */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-4">
            <p className="text-gray-500 mb-2">Interactive Map</p>
            <p className="text-sm text-gray-400">
              {userType === 'customer' 
                ? `Showing ${courierLocations.length} nearby couriers and ${activeDeliveries.length} active deliveries` 
                : `Showing ${deliveryRequests.length} delivery requests and ${activeDeliveries.length} active deliveries`}
            </p>
            
            {/* Simulated map elements */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {markers.map((marker) => (
                <div 
                  key={`${marker.type}-${marker.id}`}
                  className={`p-2 rounded text-sm cursor-pointer ${
                    marker.type === 'courier' 
                      ? 'bg-blue-100 text-blue-800' 
                      : marker.type === 'request' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                  }`}
                  onClick={() => {
                    if (marker.type === 'courier' && onCourierClick) {
                      onCourierClick(courierLocations.find(c => c.id === marker.id));
                    } else if (marker.type === 'request' && onDeliveryRequestClick) {
                      onDeliveryRequestClick(deliveryRequests.find(r => r.id === marker.id));
                    } else if (marker.type === 'active' && onActiveDeliveryClick) {
                      onActiveDeliveryClick(activeDeliveries.find(d => d.id === marker.id));
                    }
                  }}
                >
                  {marker.type === 'courier' ? 'Courier' : marker.type === 'request' ? 'Delivery Request' : 'Active Delivery'} {marker.id}
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              <p>Note: This is a simulated map UI.</p>
              <p>In production, this would integrate with Google Maps or Mapbox API.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 bg-white rounded shadow p-2">
        <button className="p-1 hover:bg-gray-100 rounded" title="Zoom In">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
        <button className="p-1 hover:bg-gray-100 rounded" title="Zoom Out">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
          </svg>
        </button>
        <button className="p-1 hover:bg-gray-100 rounded" title="Center Map">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-white rounded shadow p-2">
        <div className="text-xs font-medium mb-1">Map Legend:</div>
        <div className="flex items-center text-xs mb-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span>
          <span>Couriers</span>
        </div>
        <div className="flex items-center text-xs mb-1">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-1"></span>
          <span>Pickup Locations</span>
        </div>
        <div className="flex items-center text-xs">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-1"></span>
          <span>Dropoff Locations</span>
        </div>
      </div>
    </div>
  );
}
