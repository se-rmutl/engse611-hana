const validateReview = (req, res, next) => {
  const { restaurantId, userName, rating, comment } = req.body;
  const errors = [];
  
  // TODO: ตรวจสอบ restaurantId
  // - ต้องมีค่า
  // - ต้องเป็นตัวเลข
  
  // TODO: ตรวจสอบ userName
  // - ต้องมีค่า
  // - ความยาว 2-50 ตัวอักษร
  // - ไม่มีอักขระพิเศษที่อันตราย (<script, etc.)
  
  // TODO: ตรวจสอบ rating
  // - ต้องมีค่า
  // - ต้องเป็นตัวเลข 1-5
  
  // TODO: ตรวจสอบ comment
  // - ต้องมีค่า
  // - ความยาว 10-500 ตัวอักษร
  // - ไม่มีอักขระพิเศษที่อันตราย
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }
  
  next();
};

module.exports = {
  validateReview
};