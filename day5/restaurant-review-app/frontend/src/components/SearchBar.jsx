import { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  // **Debounce Implementation - ป้องกันการเรียก API บ่อยเกินไป**
  // Concept: รอให้ผู้ใช้พิมพ์เสร็จก่อน ค่อยค่อยค้นหา
  useEffect(() => {
    // ตั้ง timer รอ 500ms หลังจากผู้ใช้พิมพ์
    const timer = setTimeout(() => {
      // ถ้าผู้ใช้ไม่พิมพ์อะไรใน 500ms แล้ว ค่อยเรียก onSearch
      if (searchTerm !== undefined) {
        onSearch(searchTerm);
      }
    }, 500); // รอ 500 milliseconds (0.5 วินาที)
    
    // Cleanup function - ยกเลิก timer เก่าถ้าผู้ใช้พิมพ์ต่อ
    return () => clearTimeout(timer);
  }, [searchTerm]); // ✅ ลบ onSearch ออก

  const handleSubmit = (e) => {
    e.preventDefault();
    // เรียก search ทันทีเมื่อกด Enter หรือคลิกปุ่มค้นหา
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="ค้นหาร้านอาหาร..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      <button type="submit" className="search-button">
        🔍 ค้นหา
      </button>
    </form>
  );
}

export default SearchBar;