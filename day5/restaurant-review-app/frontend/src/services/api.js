const API_URL = 'http://localhost:3000/api';

/**
 * ฟังก์ชันสำหรับดึงรายการร้านอาหารทั้งหมด พร้อม filtering
 * @param {Object} filters - ตัวกรอง { search, category, minRating, priceRange }
 * @returns {Promise} - ข้อมูลร้านอาหาร
 */
export const getRestaurants = async (filters = {}) => {
  try {
    // สร้าง query string จาก filters
    const queryParams = new URLSearchParams();
    
    if (filters.search) {
      queryParams.append('search', filters.search);
    }
    if (filters.category) {
      queryParams.append('category', filters.category);
    }
    if (filters.minRating) {
      queryParams.append('minRating', filters.minRating);
    }
    if (filters.priceRange) {
      queryParams.append('priceRange', filters.priceRange);
    }
    
    const url = `${API_URL}/restaurants?${queryParams}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * ฟังก์ชันสำหรับดึงข้อมูลร้านอาหารตาม ID พร้อมรีวิว
 * @param {number} id - รหัสร้าน
 * @returns {Promise} - ข้อมูลร้านและรีวิว
 */
export const getRestaurantById = async (id) => {
  try {
    // TODO: เติมโค้ดตามตัวอย่าง getRestaurants
    // ใช้ endpoint: `${API_URL}/restaurants/${id}`
    // ตรวจสอบ response.ok
    // return ข้อมูล JSON
    
    const response = await fetch(`${API_URL}/restaurants/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch restaurant');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * ฟังก์ชันสำหรับดึงรีวิวทั้งหมดของร้าน
 * @param {number} restaurantId - รหัสร้าน
 * @returns {Promise} - รีวิวทั้งหมด
 */
export const getReviewsByRestaurant = async (restaurantId) => {
  try {
    // TODO: เติมโค้ด
    // ใช้ endpoint: `${API_URL}/reviews/${restaurantId}`
    // คล้ายกับ getRestaurantById
    
    const response = await fetch(`${API_URL}/reviews/${restaurantId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * ฟังก์ชันสำหรับเพิ่มรีวิวใหม่
 * @param {Object} reviewData - ข้อมูลรีวิว { restaurantId, userName, rating, comment, visitDate }
 * @returns {Promise} - ผลลัพธ์การเพิ่มรีวิว
 */
export const addReview = async (reviewData) => {
  try {
    // TODO: เติมโค้ด POST request
    // ใช้ method: 'POST'
    // ตั้งค่า headers: { 'Content-Type': 'application/json' }
    // ส่ง body: JSON.stringify(reviewData)
    
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add review');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * ฟังก์ชันสำหรับดึงสถิติต่างๆ
 * @returns {Promise} - สถิติทั้งหมด
 */
export const getStats = async () => {
  try {
    // TODO: เติมโค้ด
    // ใช้ endpoint: `${API_URL}/stats`
    // คล้ายกับ getRestaurants
    
    const response = await fetch(`${API_URL}/stats`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * ฟังก์ชันสำหรับดึงร้านอาหารตามหมวดหมู่
 * @param {string} category - ชื่อหมวดหมู่
 * @returns {Promise} - รายการร้านในหมวดนั้น
 */
export const getRestaurantsByCategory = async (category) => {
  try {
    // TODO: เติมโค้ด (Optional - ถ้ามีเวลา)
    // ใช้ endpoint: `${API_URL}/restaurants/category/${category}`
    
    const response = await fetch(`${API_URL}/restaurants/category/${category}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants by category');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * ฟังก์ชันสำหรับสุ่มร้านอาหาร
 * @returns {Promise} - ร้านสุ่ม 1 ร้าน
 */
export const getRandomRestaurant = async () => {
  try {
    // TODO: เติมโค้ด (Bonus Feature)
    // ใช้ endpoint: `${API_URL}/restaurants/random`
    
    const response = await fetch(`${API_URL}/restaurants/random`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch random restaurant');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};