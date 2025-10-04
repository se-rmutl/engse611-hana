import { useState } from 'react';
import { addReview } from '../services/api';

function ReviewForm({ restaurantId, onReviewAdded }) {
  const [formData, setFormData] = useState({
    userName: '',
    rating: 5,
    comment: '',
    visitDate: new Date().toISOString().split('T')[0]
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // 1. Validate userName (2-50 ตัวอักษร)
    if (!formData.userName.trim()) {
      newErrors.userName = 'กรุณากรอกชื่อ';
    } else if (formData.userName.trim().length < 2) {
      newErrors.userName = 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร';
    } else if (formData.userName.trim().length > 50) {
      newErrors.userName = 'ชื่อต้องไม่เกิน 50 ตัวอักษร';
    }
    
    // 2. Validate rating (1-5)
    const ratingNum = parseInt(formData.rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      newErrors.rating = 'คะแนนต้องอยู่ระหว่าง 1-5';
    }
    
    // 3. Validate comment (10-500 ตัวอักษร)
    if (!formData.comment.trim()) {
      newErrors.comment = 'กรุณากรอกความคิดเห็น';
    } else if (formData.comment.trim().length < 10) {
      newErrors.comment = 'ความคิดเห็นต้องมีอย่างน้อย 10 ตัวอักษร';
    } else if (formData.comment.trim().length > 500) {
      newErrors.comment = 'ความคิดเห็นต้องไม่เกิน 500 ตัวอักษร';
    }
    
    // TODO: เพิ่ม validation อื่นๆ ถ้าต้องการ
    // เช่น ตรวจสอบว่ามีอักขระพิเศษที่อันตรายหรือไม่
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ตรวจสอบ validation ก่อน
    if (!validateForm()) {
      return;
    }
    
    try {
      setSubmitting(true);
      
      // เรียก API เพื่อเพิ่มรีวิว
      const result = await addReview({
        restaurantId,
        ...formData,
        rating: parseInt(formData.rating)
      });
      
      if (result.success) {
        // แสดงข้อความสำเร็จ
        alert('เพิ่มรีวิวสำเร็จ! ขอบคุณสำหรับความคิดเห็น');
        
        // reset form
        setFormData({
          userName: '',
          rating: 5,
          comment: '',
          visitDate: new Date().toISOString().split('T')[0]
        });
        setErrors({});
        
        // เรียก callback เพื่ออัพเดทรีวิว
        if (onReviewAdded) {
          onReviewAdded();
        }
      }
    } catch (error) {
      console.error('Error adding review:', error);
      alert('เกิดข้อผิดพลาดในการส่งรีวิว กรุณาลองใหม่อีกครั้ง');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="review-form">
      <h3>เขียนรีวิว</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อของคุณ *</label>
          <input
            type="text"
            value={formData.userName}
            onChange={(e) => setFormData({...formData, userName: e.target.value})}
            placeholder="กรอกชื่อ-นามสกุล"
            className={errors.userName ? 'invalid' : ''}
          />
          {errors.userName && <span className="error">{errors.userName}</span>}
        </div>

        <div className="form-group">
          <label>คะแนน *</label>
          <select
            value={formData.rating}
            onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
            className={errors.rating ? 'invalid' : ''}
          >
            <option value="5">⭐⭐⭐⭐⭐ ดีเยี่ยม</option>
            <option value="4">⭐⭐⭐⭐ ดีมาก</option>
            <option value="3">⭐⭐⭐ ดี</option>
            <option value="2">⭐⭐ พอใช้</option>
            <option value="1">⭐ ต้องปรับปรุง</option>
          </select>
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        <div className="form-group">
          <label>ความคิดเห็น *</label>
          <textarea
            value={formData.comment}
            onChange={(e) => setFormData({...formData, comment: e.target.value})}
            placeholder="เล่าประสบการณ์การทานอาหารที่ร้านนี้... (อย่างน้อย 10 ตัวอักษร)"
            rows="4"
            className={errors.comment ? 'invalid' : ''}
          />
          <div className="char-count">
            {formData.comment.length}/500 ตัวอักษร
          </div>
          {errors.comment && <span className="error">{errors.comment}</span>}
        </div>

        <div className="form-group">
          <label>วันที่เข้าร้าน</label>
          <input
            type="date"
            value={formData.visitDate}
            onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'กำลังส่ง...' : 'ส่งรีวิว'}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;