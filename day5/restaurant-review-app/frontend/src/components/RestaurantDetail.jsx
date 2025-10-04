import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { getRestaurantById, getReviewsByRestaurant } from '../services/api';

function RestaurantDetail({ restaurantId, onBack }) {
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [restaurantId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // TODO: เรียก getRestaurantById และ getReviewsByRestaurant
      // TODO: set state ที่เหมาะสม
      
    } catch (error) {
      console.error('Error fetching restaurant:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReviewAdded = () => {
    // Refresh reviews after adding new one
    fetchData();
  };

  if (loading) return <div className="loading">กำลังโหลด...</div>;
  if (!restaurant) return <div className="error">ไม่พบร้านอาหาร</div>;

  return (
    <div className="restaurant-detail">
      <button className="back-button" onClick={onBack}>← กลับ</button>
      
      <div className="detail-header">
        <img src={restaurant.image} alt={restaurant.name} />
        <div className="detail-info">
          <h1>{restaurant.name}</h1>
          <p className="category">{restaurant.category}</p>
          <p className="description">{restaurant.description}</p>
          <div className="info-row">
            <span>📍 {restaurant.location}</span>
            <span>📞 {restaurant.phone}</span>
            <span>🕐 {restaurant.openHours}</span>
          </div>
          <div className="rating-info">
            <span className="rating">⭐ {restaurant.averageRating.toFixed(1)}</span>
            <span className="price">{'฿'.repeat(restaurant.priceRange)}</span>
            <span className="total-reviews">({restaurant.totalReviews} รีวิว)</span>
          </div>
        </div>
      </div>

      <ReviewForm 
        restaurantId={restaurantId} 
        onReviewAdded={handleReviewAdded}
      />
      
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default RestaurantDetail;