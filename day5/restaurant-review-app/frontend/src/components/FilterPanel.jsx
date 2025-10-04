function FilterPanel({ onFilterChange, filters }) {
  const categories = ['ทั้งหมด', 'อาหารไทย', 'อาหารญี่ปุ่น', 'อาหารอิตาเลียน', 'อาหารจีน', 'ฟาสต์ฟู้ด'];

  const handleCategoryChange = (category) => {
    onFilterChange({ 
      category: category === 'ทั้งหมด' ? '' : category 
    });
  };

  // TODO: เพิ่มฟังก์ชัน handleRatingChange
  // TODO: เพิ่มฟังก์ชัน handlePriceChange

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label>หมวดหมู่:</label>
        <select 
          value={filters.category || 'ทั้งหมด'}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* TODO: เพิ่ม filter สำหรับ minRating */}
      {/* TODO: เพิ่ม filter สำหรับ priceRange */}
    </div>
  );
}

export default FilterPanel;