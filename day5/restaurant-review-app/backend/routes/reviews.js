const express = require('express');
const router = express.Router();
const { readJsonFile, writeJsonFile } = require('../utils/fileManager');
const { validateReview } = require('../middleware/validation');

// GET /api/reviews/:restaurantId - ดึงรีวิวทั้งหมดของร้านนั้น
router.get('/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const reviews = await readJsonFile('reviews.json');
    
    // TODO: กรองรีวิวเฉพาะร้านนี้
    // const restaurantReviews = reviews.filter(r => r.restaurantId === parseInt(restaurantId));
    // เรียงจากใหม่สุดไปเก่าสุด
    // restaurantReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    const restaurantReviews = reviews.filter(r => r.restaurantId === parseInt(restaurantId));
    restaurantReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    res.json({
      success: true,
      data: restaurantReviews,
      total: restaurantReviews.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching reviews'
    });
  }
});

// POST /api/reviews - เพิ่มรีวิวใหม่
router.post('/', validateReview, async (req, res) => {
  try {
    const { restaurantId, userName, rating, comment, visitDate } = req.body;
    
    // อ่านข้อมูลปัจจุบัน
    const reviews = await readJsonFile('reviews.json');
    const restaurants = await readJsonFile('restaurants.json');
    
    // ตรวจสอบว่า restaurant ID มีอยู่จริงไหม
    const restaurant = restaurants.find(r => r.id === parseInt(restaurantId));
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: 'ไม่พบร้านอาหารนี้'
      });
    }
    
    // สร้างรีวิวใหม่
    const newReview = {
      id: Date.now(),
      restaurantId: parseInt(restaurantId),
      userName: userName.trim(),
      rating: parseInt(rating),
      comment: comment.trim(),
      visitDate: visitDate || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };
    
    reviews.push(newReview);
    await writeJsonFile('reviews.json', reviews);
    
    // **สำคัญ: อัพเดท averageRating และ totalReviews ของร้าน**
    // ขั้นตอนที่ 1: หารีวิวทั้งหมดของร้านนี้
    const restaurantReviews = reviews.filter(r => r.restaurantId === parseInt(restaurantId));
    
    // ขั้นตอนที่ 2: คำนวณ averageRating ใหม่
    // สูตร: รวมคะแนนทั้งหมด ÷ จำนวนรีวิว
    const totalRating = restaurantReviews.reduce((sum, review) => sum + review.rating, 0);
    const newAverageRating = totalRating / restaurantReviews.length;
    
    // ขั้นตอนที่ 3: อัพเดทข้อมูลร้าน
    restaurant.averageRating = Math.round(newAverageRating * 10) / 10; // ปัดเศษ 1 ตำแหน่ง
    restaurant.totalReviews = restaurantReviews.length;
    
    // ขั้นตอนที่ 4: บันทึกกลับไป restaurants.json
    await writeJsonFile('restaurants.json', restaurants);
    
    res.status(201).json({
      success: true,
      message: 'เพิ่มรีวิวสำเร็จ',
      data: newReview,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        averageRating: restaurant.averageRating,
        totalReviews: restaurant.totalReviews
      }
    });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการเพิ่มรีวิว'
    });
  }
});

module.exports = router;