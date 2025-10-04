import { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import './App.css';

function App() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  const handleSelectRestaurant = (id) => {
    setSelectedRestaurantId(id);
  };

  const handleBack = () => {
    setSelectedRestaurantId(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍜 Restaurant Review</h1>
        <p>ค้นหาและรีวิวร้านอาหารโปรดของคุณ</p>
      </header>

      <main className="app-main">
        {selectedRestaurantId ? (
          <RestaurantDetail 
            restaurantId={selectedRestaurantId}
            onBack={handleBack}
          />
        ) : (
          <RestaurantList 
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Restaurant Review App</p>
      </footer>
    </div>
  );
}

export default App;