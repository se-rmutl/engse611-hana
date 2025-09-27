# Lab 3.2: การสร้าง Components และ Props
## Product List Component

**เวลา:** 30 นาที  
**เป้าหมาย:** สร้าง Product List ที่ใช้ Components และ Props โดยให้นักศึกษาพัฒนาเองบางส่วน  
**เทคนิคที่ใช้:** Props, PropTypes, Component Composition, Event Handling, Conditional Rendering

---

## Part 1: Follow Along (15 นาที)
### ทำตามทีละขั้นตอน - ได้โครงสร้างพื้นฐาน 70%

### ขั้นตอนที่ 1: สร้างโปรเจคใหม่
```bash
# สร้างโปรเจค Product List
npm create vite@latest product-list-lab -- --template react
cd product-list-lab
npm install

# ติดตั้ง PropTypes สำหรับ validation
npm install prop-types

npm run dev
```

---

### ขั้นตอนที่ 2: สร้าง Mock Data
**สร้างไฟล์:** `src/data/products.js`

```javascript
// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45900,
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 299,
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 650,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    }
];
```

---

### ขั้นตอนที่ 3: สร้าง CSS พื้นฐาน
**สร้างไฟล์:** `src/components/ProductList.css`

```css
/* src/components/ProductList.css - CSS พื้นฐาน นักศึกษาจะปรับปรุงเพิ่มเติม */
.product-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #333;
  margin-bottom: 10px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

/* Product Card - โครงสร้างพื้นฐาน */
.product-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  padding: 15px;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.product-info {
  margin-top: 15px;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.product-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #007bff;
  margin: 10px 0;
}

.product-actions {
  margin-top: 15px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 10px;
  margin-bottom: 5px;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn:disabled {
  background: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
}

/* ส่วนที่นักศึกษาจะต้องเพิ่มเติม:
- Responsive design
- Filter styles
- Advanced animations
- Status indicators
*/
```

---

### ขั้นตอนที่ 4: สร้าง ProductCard Component (โครงสร้างพื้นฐาน)
**สร้างไฟล์:** `src/components/ProductCard.jsx`

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart, onViewDetails }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/300x300/cccccc/666666?text=No+Image';
                    }}
                />
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                {/* TODO: นักศึกษาจะเพิ่ม rating stars ในส่วน Challenge */}
                
                <div className="product-price">
                    ฿{product.price.toLocaleString()}
                </div>
                
                <div className="product-actions">
                    <button 
                        className="btn btn-secondary"
                        onClick={() => onViewDetails(product)}
                    >
                        ดูรายละเอียด
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// TODO: นักศึกษาจะเพิ่ม PropTypes validation ในส่วน Challenge
ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;
```

---

### ขั้นตอนที่ 5: สร้าง ProductList Component (ฟังก์ชันพื้นฐาน)
**สร้างไฟล์:** `src/components/ProductList.jsx`

```jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // กรองสินค้าตามหมวดหมู่
    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="product-list-container">
            {/* Header */}
            <div className="header">
                <h1>🛍️ ร้านค้าออนไลน์</h1>
                <p>Lab 3.2 - การสร้าง Components และ Props</p>
            </div>

            {/* Simple Category Filter */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <label htmlFor="category-select">หมวดหมู่: </label>
                <select 
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ padding: '5px', fontSize: '16px' }}
                >
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Products Display */}
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onViewDetails={onViewDetails}
                    />
                ))}
            </div>

            {/* TODO: นักศึกษาจะเพิ่ม:
                - Advanced filters (ราคา, rating)
                - Search functionality  
                - Sorting options
                - Empty state handling
                - Loading states
            */}
        </div>
    );
}

// TODO: นักศึกษาจะปรับปรุง PropTypes ให้ละเอียดมากขึ้น
ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductList;
```

---

### ขั้นตอนที่ 6: แก้ไข App Component
**แก้ไขไฟล์:** `src/App.jsx`

```jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { products, categories } from './data/products';

function App() {
    const [cart, setCart] = useState([]);

    // ฟังก์ชันเพิ่มสินค้าใส่ตะกร้า - พื้นฐาน
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`เพิ่ม ${product.name} ในตะกร้าแล้ว!`);
    };

    // ฟังก์ชันดูรายละเอียดสินค้า - พื้นฐาน
    const handleViewDetails = (product) => {
        alert(`ดูรายละเอียด: ${product.name}\nราคา: ฿${product.price}\nคำอธิบาย: ${product.description}`);
    };

    return (
        <div className="app">
            {/* แสดงจำนวนสินค้าในตะกร้า */}
            <div style={{ 
                position: 'fixed', 
                top: '20px', 
                right: '20px', 
                background: '#007bff', 
                color: 'white', 
                padding: '10px', 
                borderRadius: '20px',
                zIndex: 1000
            }}>
                🛒 ตะกร้า: {cart.length} ชิ้น
            </div>

            <ProductList 
                products={products}
                categories={categories}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
            />
        </div>
    );
}

export default App;
```

---

### ขั้นตอนที่ 7: ทดสอบการทำงาน
```bash
npm run dev
```

**ผลลัพธ์พื้นฐานที่ได้:**
- ✅ แสดงสินค้า 3 ชิ้น
- ✅ กรองตามหมวดหมู่ได้
- ✅ คลิกใส่ตะกร้าได้
- ✅ คลิกดูรายละเอียดได้
- ⚠️ **ยังไม่สมบูรณ์ - รอการพัฒนาใน Challenge!**

---

## Part 2: Challenge Time! (15 นาที) 
### งานที่นักศึกษาต้องทำเองจากความรู้ที่เรียนมา

### 🎯 **Challenge 1: เพิ่มข้อมูลสินค้าและปรับปรุง PropTypes (5 นาที)**

**คำแนะนำ:**
- เพิ่มสินค้าอีก 3-5 ชิ้นใน `products.js` 
- เพิ่มข้อมูล `originalPrice` และ `discount` ให้สินค้า
- ปรับปรุง PropTypes ใน ProductCard ให้ละเอียด (ใช้ shape)
- เพิ่มการแสดงส่วนลดในการ์ดสินค้า

**สิ่งที่ต้องทำ:**
1. เพิ่มสินค้าใหม่ในไฟล์ `data/products.js`
2. เพิ่ม properties: `originalPrice`, `discount` 
3. อัพเดท PropTypes ใน ProductCard ให้ใช้ `PropTypes.shape()`
4. แสดงราคาเดิมและส่วนลดในการ์ดสินค้า

**คำใบ้:** 
- ใช้ conditional rendering เพื่อแสดงส่วนลด: `{discount > 0 && <span>ลด {discount}%</span>}`
- ใช้ CSS class สำหรับ styling ราคาเดิม (line-through)

---

### 🎯 **Challenge 2: เพิ่ม Star Rating Display (5 นาที)**

**คำแนะนำ:**
- สร้างฟังก์ชันแสดงดาวตาม rating
- แสดง rating ด้วย emoji ⭐ หรือ ★
- เพิ่มใน ProductCard component

**สิ่งที่ต้องทำ:**
1. สร้าง function `renderStars(rating)` ใน ProductCard
2. แสดงดาวเต็ม, ดาวครึ่ง, และดาวว่าง
3. เพิ่มการแสดงตัวเลข rating เช่น "(4.5)"

**คำใบ้:**
```jsx
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    // TODO: นักศึกษาทำต่อเอง...
};
```

---

### 🎯 **Challenge 3: เพิ่ม Search และ Sort Functionality (5 นาที)**

**คำแนะนำ:**
- เพิ่ม search box ใน ProductList
- เพิ่ม dropdown สำหรับเรียงลำดับสินค้า
- ใช้ `useState` และ `useMemo` (ถ้ารู้จัก)

**สิ่งที่ต้องทำ:**
1. เพิ่ม state `searchQuery` และ `sortBy`
2. สร้าง input สำหรับค้นหา
3. สร้าง select สำหรับเรียงลำดับ (ชื่อ, ราคา, rating)
4. อัพเดท filtering logic ให้รวม search และ sort

**คำใบ้:**
- ใช้ `filter()` และ `sort()` ร่วมกัน
- Search ใน name และ description: `product.name.toLowerCase().includes(query.toLowerCase())`

---

## 🏆 **เกณฑ์การประเมินผล:**

### **ระดับพื้นฐาน (70%):**
- ✅ ทำ Challenge 1 สำเร็จ (เพิ่มสินค้า + PropTypes)
- ✅ แสดงส่วนลดได้ถูกต้อง

### **ระดับดี (80%):**  
- ✅ Challenge 1 + 2 สำเร็จ
- ✅ Star rating แสดงได้ถูกต้อง

### **ระดับดีเยี่ยม (90-100%):**
- ✅ ทำครบทั้ง 3 Challenges
- ✅ Search และ Sort ทำงานได้ถูกต้อง
- ✅ UI/UX สวยงาม

---

## 🎓 **สิ่งที่นักศึกษาจะได้เรียนรู้:**

### **จากการทำ Challenge:**
- **Props Design** - การออกแบบ Props structure ที่ดี
- **PropTypes Validation** - การตรวจสอบข้อมูลแบบละเอียด  
- **Conditional Rendering** - แสดงเนื้อหาตามเงื่อนไข
- **Array Methods** - ใช้ filter, sort, map ใน React
- **State Management** - จัดการ multiple states
- **Component Thinking** - แยกหน้าที่ของแต่ละ component

### **Skills ที่ต้องใช้:**
- **JavaScript ES6** - Destructuring, Array methods
- **React Concepts** - useState, Props, Event handling  
- **CSS Skills** - Layout, Styling, Responsive design
- **Problem Solving** - Debug และแก้ไขปัญหา

### **เวลาในการทำ Challenge:**
- **Challenge 1:** 5 นาที (พื้นฐาน - ต้องทำได้ทุกคน)
- **Challenge 2:** 5 นาที (ปานกลาง - ใช้ logic เล็กน้อย) 
- **Challenge 3:** 5 นาที (ค่อนข้างยาก - สำหรับคนที่เก่ง)

---

**⏰ เวลาที่ใช้จริง: 30 นาที**  
**🎯 ระดับความยาก: เหมาะสำหรับผู้เริ่มต้น + ท้าทายพอดี**