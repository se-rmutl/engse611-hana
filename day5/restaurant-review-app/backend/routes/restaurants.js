const express = require('express');
const router = express.Router();
const { readJsonFile } = require('../utils/fileManager');

// GET /api/restaurants - ดึงรายการร้านทั้งหมด (พร้อม filtering)
router.get('/', async (req, res) => {
  try {
    let restaurants = await readJsonFile('restaurants.json');
    const { search, category, minRating, priceRange } = req.query;
    
    // TODO: ทำ filtering ตาม query parameters
    
    // 1. กรองตามชื่อ (search)
    if (search) {
      restaurants = restaurants.filter(r => 
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // 2. กรองตามหมวดหมู่ (category)
    if (category) {
      restaurants = restaurants.filter(r => r.category === category);
    }
    
    // 3. กรองตาม rating ขั้นต่ำ (minRating)
    if (minRating) {
      restaurants = restaurants.filter(r => r.averageRating >= parseFloat(minRating));
    }
    
    // 4. กรองตามช่วงราคา (priceRange)
    if (priceRange) {
      restaurants = restaurants.filter(r => r.priceRange === parseInt(priceRange));
    }
    
    res.json({
      success: true,
      data: restaurants,
      total: restaurants.length,
      filters: {
        search: search || null,
        category: category || null,
        minRating: minRating || null,
        priceRange: priceRange || null
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching restaurants'
    });
  }
});

// GET /api/restaurants/:id - ดึงข้อมูลร้านตาม ID พร้อมรีวิว
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // ขั้นตอนที่ 1: อ่านข้อมูลร้านและรีวิว
    const restaurants = await readJsonFile('restaurants.json');
    const reviews = await readJsonFile('reviews.json');
    
    // ขั้นตอนที่ 2: หาร้านที่ต้องการ
    const restaurant = restaurants.find(r => r.id === parseInt(id));
    
    // ขั้นตอนที่ 3: ถ้าไม่เจอ ส่ง 404
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบร้านอาหารนี้'
      });
    }
    
    // ขั้นตอนที่ 4: หารีวิวของร้านนี้
    const restaurantReviews = reviews
      .filter(r => r.restaurantId === parseInt(id))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // เรียงจากใหม่สุด
    
    // ขั้นตอนที่ 5: ส่งข้อมูลกลับ
    res.json({
      success: true,
      data: {
        ...restaurant,
        reviews: restaurantReviews
      }
    });
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลร้าน'
    });
  }
});

// GET /api/restaurants/category/:category - ดึงร้านตามหมวดหมู่
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const restaurants = await readJsonFile('restaurants.json');
    
    // TODO: กรองร้านตามหมวดหมู่
    const filteredRestaurants = restaurants.filter(r => r.category === category);
    
    res.json({
      success: true,
      data: filteredRestaurants,
      total: filteredRestaurants.length,
      category: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching restaurants by category'
    });
  }
});

// GET /api/restaurants/random - สุ่มร้านอาหาร 1 ร้าน (Bonus)
router.get('/random', async (req, res) => {
  try {
    const restaurants = await readJsonFile('restaurants.json');
    
    // TODO: สุ่มร้าน
    // ใช้ Math.random() และ Math.floor()
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    
    res.json({
      success: true,
      data: randomRestaurant
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching random restaurant'
    });
  }
});

module.exports = router;