const express = require('express');
const cors = require('cors');
require('dotenv').config();

const restaurantRoutes = require('./routes/restaurants');
const reviewRoutes = require('./routes/reviews');
const { readJsonFile } = require('./utils/fileManager');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: '🍜 Restaurant Review API',
    version: '1.0.0',
    endpoints: {
      restaurants: '/api/restaurants',
      reviews: '/api/reviews',
      stats: '/api/stats'
    }
  });
});

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/reviews', reviewRoutes);

// GET /api/stats - สถิติทั้งหมด
app.get('/api/stats', async (req, res) => {
  try {
    // ขั้นตอนที่ 1: อ่านข้อมูลทั้งหมด
    const restaurants = await readJsonFile('restaurants.json');
    const reviews = await readJsonFile('reviews.json');
    
    // ขั้นตอนที่ 2: คำนวณสถิติต่างๆ
    
    // 2.1 จำนวนร้านทั้งหมด
    const totalRestaurants = restaurants.length;
    
    // 2.2 จำนวนรีวิวทั้งหมด
    const totalReviews = reviews.length;
    
    // 2.3 คะแนนเฉลี่ยรวมทุกร้าน
    const totalRating = restaurants.reduce((sum, r) => sum + r.averageRating, 0);
    const averageRating = totalRestaurants > 0 
      ? Math.round((totalRating / totalRestaurants) * 10) / 10 
      : 0;
    
    // 2.4 ร้าน 5 อันดับแรกที่มี rating สูงสุด
    const topRatedRestaurants = restaurants
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 5)
      .map(r => ({
        id: r.id,
        name: r.name,
        category: r.category,
        averageRating: r.averageRating,
        totalReviews: r.totalReviews
      }));
    
    // 2.5 สถิติเพิ่มเติม (Bonus)
    const categoryStats = {};
    restaurants.forEach(r => {
      if (!categoryStats[r.category]) {
        categoryStats[r.category] = 0;
      }
      categoryStats[r.category]++;
    });
    
    // ขั้นตอนที่ 3: ส่งข้อมูลกลับ
    res.json({
      success: true,
      data: {
        totalRestaurants,
        totalReviews,
        averageRating,
        topRatedRestaurants,
        categoryStats // Bonus: จำนวนร้านในแต่ละหมวด
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการดึงสถิติ'
    });
  }
});

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});