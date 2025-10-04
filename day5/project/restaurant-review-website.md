# Final Project Development Guide: Restaurant Review Website

## 📋 ภาพรวมโปรเจค

### 🎯 จุดประสงค์
สร้างเว็บไซต์รีวิวร้านอาหารแบบ Fullstack ที่ทำงานได้จริง โดยรวมความรู้ทั้งหมดจาก 5 วัน:
- **Frontend:** React (Components, Hooks, State Management)
- **Backend:** Node.js + Express (REST API, File Storage)
- **Integration:** fetch API, CORS handling
- **Security:** Input validation, Error handling

### 🏆 คะแนน
- **Required Features:** 70 คะแนน
- **Bonus Features:** 15 คะแนน
- **Documentation & Code Quality:** 15 คะแนน
- **รวม:** 100 คะแนน

### ⏰ เวลาทำงาน
**2.5 ชั่วโมง (14:00-16:30)**
- 14:00-14:15: Setup (15 นาที)
- 14:15-15:00: Backend Development (45 นาที)
- 15:00-16:00: Frontend Development (60 นาที)
- 16:00-16:30: Integration & Testing (30 นาที)

---

## 🗂️ โครงสร้างโปรเจค

```
restaurant-review-app/
├── backend/
│   ├── data/
│   │   ├── restaurants.json      ← ให้ข้อมูล 10 ร้าน
│   │   └── reviews.json           ← ให้ข้อมูล 30+ รีวิว
│   ├── routes/
│   │   ├── restaurants.js         ← ให้โครงสร้าง 50%
│   │   └── reviews.js             ← ให้โครงสร้าง 50%
│   ├── middleware/
│   │   └── validation.js          ← ให้โครงสร้าง 60%
│   ├── utils/
│   │   └── fileManager.js         ← ให้ฟังก์ชันครบ 100%
│   ├── server.js                  ← ให้โครงสร้าง 70%
│   ├── package.json               ← ให้ครบ 100%
│   ├── .env.example               ← ให้ครบ 100%
│   └── .gitignore                 ← ให้ครบ 100%
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── RestaurantList.jsx     ← ให้โครงสร้าง 50%
    │   │   ├── RestaurantCard.jsx     ← ให้โครงสร้างครบ 100%
    │   │   ├── RestaurantDetail.jsx   ← ให้โครงสร้าง 50%
    │   │   ├── SearchBar.jsx          ← ให้โครงสร้าง 60%
    │   │   ├── FilterPanel.jsx        ← ให้โครงสร้าง 50%
    │   │   ├── ReviewForm.jsx         ← ให้โครงสร้าง 60%
    │   │   └── ReviewList.jsx         ← ให้โครงสร้างครบ 100%
    │   ├── services/
    │   │   └── api.js                 ← ให้โครงสร้าง 50%
    │   ├── App.jsx                    ← ให้โครงสร้าง 70%
    │   ├── App.css                    ← ให้ CSS พื้นฐาน 100%
    │   └── main.jsx                   ← ให้ครบ 100%
    ├── public/
    │   └── vite.svg
    ├── index.html                     ← ให้ครบ 100%
    ├── package.json                   ← ให้ครบ 100%
    ├── vite.config.js                 ← ให้ครบ 100%
    └── .gitignore                     ← ให้ครบ 100%
```

---

## 📦 ขั้นตอนที่ 1: Setup โปรเจค (15 นาที)

### 1.1 Clone/Download Starter Code

ดาวน์โหลด starter code จากที่อาจารย์แจก หรือสร้างโครงสร้างตามด้านบน

### 1.2 ติดตั้ง Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 1.3 ตรวจสอบว่ารันได้

**Backend:**
```bash
cd backend
npm run dev
# ควรเห็น: Server running on http://localhost:3000
```

**Frontend:**
```bash
cd frontend
npm run dev
# ควรเห็น: Local: http://localhost:5173
```

---

## 🔧 ขั้นตอนที่ 2: Backend Development (45 นาที)

### 2.1 ข้อมูลที่ให้มา (100%)


## **backend/.env.example** (ให้ครบ 100%)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# API Configuration
API_VERSION=1.0.0

# CORS Configuration (สำหรับ Production)
# ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Rate Limiting (ถ้าใช้)
# RATE_LIMIT_WINDOW_MS=900000
# RATE_LIMIT_MAX_REQUESTS=100

# Database (ถ้ามีการใช้ Database จริงในอนาคต)
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=restaurant_review
# DB_USER=your_username
# DB_PASSWORD=your_password

# JWT Secret (ถ้ามี Authentication ในอนาคต)
# JWT_SECRET=your-super-secret-key-change-this-in-production
# JWT_EXPIRES_IN=7d

# File Upload (ถ้ามีการอัพโหลดรูปภาพ)
# MAX_FILE_SIZE=5242880
# UPLOAD_DIR=uploads
```

## **backend/.env** (ตัวอย่างสำหรับ Development - ไม่ commit ขึ้น Git)

```env
PORT=3000
NODE_ENV=development
```

## **backend/.gitignore** (ให้ครบ 100%)

```
# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.*.local

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Build files
dist/
build/

# Test coverage
coverage/

# Temporary files
tmp/
temp/
```

---

#### **data/restaurants.json** (ตัวอย่าง - มีทั้งหมด 10 ร้าน)
```json
[
  {
    "id": 1,
    "name": "ส้มตำนัวเข้าน้อง",
    "category": "อาหารไทย",
    "description": "ร้านส้มตำและอาหารอีสานแท้ๆ รสชาติต้นตำรับ ส้มตำรสจัดจ้าน ลาบก้อยสดใหม่",
    "location": "ตลาดนัดสวนจตุจักร",
    "priceRange": 1,
    "phone": "02-123-4567",
    "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
    "averageRating": 4.5,
    "totalReviews": 12,
    "openHours": "10:00-20:00",
    "createdAt": "2024-01-15T10:00:00.000Z"
  },
  {
    "id": 2,
    "name": "ซูชิโตเกียว",
    "category": "อาหารญี่ปุ่น",
    "description": "ร้านอาหารญี่ปุ่นต้นตำรับ เชฟจากโตเกียว วัตถุดิบนำเข้าจากญี่ปุ่น สดใหม่ทุกวัน",
    "location": "สยามพารากอน ชั้น 4",
    "priceRange": 3,
    "phone": "02-234-5678",
    "image": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
    "averageRating": 4.8,
    "totalReviews": 8,
    "openHours": "11:00-22:00",
    "createdAt": "2024-01-10T10:00:00.000Z"
  },
  {
    "id": 3,
    "name": "พิซซ่าอิตาเลียน",
    "category": "อาหารอิตาเลียน",
    "description": "พิซซ่าแท้จากอิตาลี เตาอบไม้ แป้งบาง ชีสนำเข้า ซอสทำเองทุกวัน",
    "location": "เอกมัย ซอย 5",
    "priceRange": 2,
    "phone": "02-345-6789",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    "averageRating": 4.3,
    "totalReviews": 15,
    "openHours": "11:00-23:00",
    "createdAt": "2024-01-12T10:00:00.000Z"
  },
  {
    "id": 4,
    "name": "ก๋วยเตี๋ยวเรือพี่ดี",
    "category": "อาหารไทย",
    "description": "ก๋วยเตี๋ยวเรือต้นตำรับ น้ำซุปเข้มข้น เนื้อสด ราคาประหยัด",
    "location": "ตลาดพลู ถนนราชพฤกษ์",
    "priceRange": 1,
    "phone": "02-456-7890",
    "image": "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800",
    "averageRating": 4.6,
    "totalReviews": 20,
    "openHours": "06:00-15:00",
    "createdAt": "2024-01-08T10:00:00.000Z"
  },
  {
    "id": 5,
    "name": "ติ่มซำฮ่องกง",
    "category": "อาหารจีน",
    "description": "ติ่มซำฮ่องกงแท้ เชฟจากฮ่องกง ขนมจีบ ฮะเก๋า เสี่ยวหมาย สดใหม่ทุกวัน",
    "location": "ไชน่าทาวน์ เยาวราช",
    "priceRange": 2,
    "phone": "02-567-8901",
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
    "averageRating": 4.4,
    "totalReviews": 18,
    "openHours": "07:00-14:00",
    "createdAt": "2024-01-05T10:00:00.000Z"
  },
  {
    "id": 6,
    "name": "เบอร์เกอร์ครัวอเมริกัน",
    "category": "ฟาสต์ฟู้ด",
    "description": "เบอร์เกอร์สไตล์อเมริกัน เนื้อแท้ 100% ขนาดใหญ่ มีเดลิเวอรี่",
    "location": "สยามสแควร์ ชั้น 2",
    "priceRange": 2,
    "phone": "02-678-9012",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    "averageRating": 4.2,
    "totalReviews": 25,
    "openHours": "10:00-22:00",
    "createdAt": "2024-01-20T10:00:00.000Z"
  },
  {
    "id": 7,
    "name": "ราเมงโอซาก้า",
    "category": "อาหารญี่ปุ่น",
    "description": "ราเมงสไตล์โอซาก้า น้ำซุปเข้มข้น หมูชาชูนุ่ม ไข่ออนเซ็น",
    "location": "เซ็นทรัลเวิลด์ ชั้น 6",
    "priceRange": 2,
    "phone": "02-789-0123",
    "image": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800",
    "averageRating": 4.7,
    "totalReviews": 22,
    "openHours": "11:00-21:00",
    "createdAt": "2024-01-18T10:00:00.000Z"
  },
  {
    "id": 8,
    "name": "ข้าวมันไก่ไฮหนาน",
    "category": "อาหารไทย",
    "description": "ข้าวมันไก่ต้นตำรับไฮหนาน ไก่นุ่ม ข้าวหอม น้ำจิ้มรสเด็ด",
    "location": "ประตูน้ำ",
    "priceRange": 1,
    "phone": "02-890-1234",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    "averageRating": 4.5,
    "totalReviews": 30,
    "openHours": "08:00-18:00",
    "createdAt": "2024-01-22T10:00:00.000Z"
  },
  {
    "id": 9,
    "name": "สเต็กเฮ้าส์พรีเมียม",
    "category": "อาหารอิตาเลียน",
    "description": "สเต็กเนื้อวากิว เนื้อนำเข้า ย่างสไตล์อเมริกัน บรรยากาศหรูหรา",
    "location": "อโศก ทองหล่อ ซอย 10",
    "priceRange": 3,
    "phone": "02-901-2345",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    "averageRating": 4.9,
    "totalReviews": 10,
    "openHours": "17:00-23:00",
    "createdAt": "2024-01-25T10:00:00.000Z"
  },
  {
    "id": 10,
    "name": "ผัดไทยป้าถวิล",
    "category": "อาหารไทย",
    "description": "ผัดไทยโบราณ สูตรต้นตำรับ 50 ปี ตามสั่งเท่านั้น ไม่รับจอง",
    "location": "ท่าพระจันทร์",
    "priceRange": 1,
    "phone": "02-012-3456",
    "image": "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
    "averageRating": 4.8,
    "totalReviews": 28,
    "openHours": "09:00-16:00",
    "createdAt": "2024-01-28T10:00:00.000Z"
  }
]
```

**คำอธิบาย Fields:**
- `id`: รหัสร้าน (unique)
- `name`: ชื่อร้าน
- `category`: หมวดหมู่ (อาหารไทย, อาหารญี่ปุ่น, อาหารอิตาเลียน, อาหารจีน, ฟาสต์ฟู้ด)
- `description`: รายละเอียดร้าน
- `location`: ที่ตั้ง
- `priceRange`: 1 = ไม่เกิน 100 บาท, 2 = 100-300 บาท, 3 = มากกว่า 300 บาท
- `phone`: เบอร์โทร
- `image`: URL รูปภาพ (ใช้ Unsplash)
- `averageRating`: คะแนนเฉลี่ย (1-5)
- `totalReviews`: จำนวนรีวิวทั้งหมด
- `openHours`: เวลาเปิด-ปิด
- `createdAt`: วันที่สร้าง

#### **data/reviews.json** (ตัวอย่าง - มีทั้งหมด 30+ รีวิว)
```json
[
{
    "id": 1,
    "restaurantId": 1,
    "userName": "สมชาย ใจดี",
    "rating": 5,
    "comment": "อร่อยมากครับ ส้มตำรสชาติจัดจ้าน ถูกปากมาก ราคาไม่แพง แนะนำเลย",
    "visitDate": "2024-10-01",
    "createdAt": "2024-10-01T14:30:00.000Z"
  },
  {
    "id": 2,
    "restaurantId": 1,
    "userName": "มาลี สวยงาม",
    "rating": 4,
    "comment": "อาหารอร่อยดี แต่รอนานหน่อย คนเยอะมาก ควรจองล่วงหน้า",
    "visitDate": "2024-09-28",
    "createdAt": "2024-09-28T18:15:00.000Z"
  },
  {
    "id": 3,
    "restaurantId": 1,
    "userName": "ประยุทธ์ มั่นใจ",
    "rating": 5,
    "comment": "ส้มตำอร่อยสุดๆ แซ่บจี๊ด ลาบก้อยสดมาก บรรยากาศดี",
    "visitDate": "2024-09-25",
    "createdAt": "2024-09-25T12:00:00.000Z"
  },
  {
    "id": 4,
    "restaurantId": 2,
    "userName": "วิภา รักสุขภาพ",
    "rating": 5,
    "comment": "ซูชิสดมาก รสชาติเข้มข้น วัตถุดิบคุณภาพดี คุ้มค่าเงิน",
    "visitDate": "2024-10-02",
    "createdAt": "2024-10-02T19:00:00.000Z"
  },
  {
    "id": 5,
    "restaurantId": 2,
    "userName": "ธนากร เศรษฐี",
    "rating": 4,
    "comment": "อาหารอร่อย บริการดี แต่ราคาค่อนข้างสูง เหมาะสำหรับโอกาสพิเศษ",
    "visitDate": "2024-09-30",
    "createdAt": "2024-09-30T20:30:00.000Z"
  },
  {
    "id": 6,
    "restaurantId": 2,
    "userName": "สุดา ชอบกิน",
    "rating": 5,
    "comment": "รสชาติดีมาก เชฟเก่งจริง แซลมอนสดใหม่ ข้าวอมตัว",
    "visitDate": "2024-09-27",
    "createdAt": "2024-09-27T18:45:00.000Z"
  },
  {
    "id": 7,
    "restaurantId": 3,
    "userName": "จักรพงษ์ หิวข้าว",
    "rating": 4,
    "comment": "พิซซ่าอร่อย แป้งบาง ชีสเยอะ แต่ที่นั่งน้อยไป ต้องรอคิว",
    "visitDate": "2024-10-03",
    "createdAt": "2024-10-03T20:00:00.000Z"
  },
  {
    "id": 8,
    "restaurantId": 3,
    "userName": "นภา รักการกิน",
    "rating": 4,
    "comment": "รสชาติดี บรรยากาศสบายๆ เหมาะมานั่งชิล ราคาปานกลาง",
    "visitDate": "2024-09-29",
    "createdAt": "2024-09-29T19:30:00.000Z"
  },
  {
    "id": 9,
    "restaurantId": 3,
    "userName": "อนุชา ชอบพิซซ่า",
    "rating": 5,
    "comment": "พิซซ่าแท้ๆ เตาอบไม้ ซอสทำเอง รสชาติเข้มข้น ต้องลอง",
    "visitDate": "2024-09-26",
    "createdAt": "2024-09-26T21:00:00.000Z"
  },
  {
    "id": 10,
    "restaurantId": 4,
    "userName": "สมศักดิ์ รักก๋วยเตี๋ยว",
    "rating": 5,
    "comment": "อร่อยมากๆ น้ำซุปเข้มข้น เนื้อนุ่ม ราคาถูก แนะนำ 10/10",
    "visitDate": "2024-10-04",
    "createdAt": "2024-10-04T10:30:00.000Z"
  },
  {
    "id": 11,
    "restaurantId": 4,
    "userName": "ชนิดา หิวตลอด",
    "rating": 4,
    "comment": "ก๋วยเตี๋ยวรสชาติดี น้ำซุปเข้มข้น แต่ที่จอดรถไม่สะดวก",
    "visitDate": "2024-10-01",
    "createdAt": "2024-10-01T11:00:00.000Z"
  },
  {
    "id": 12,
    "restaurantId": 4,
    "userName": "วีระ ชอบเนื้อ",
    "rating": 5,
    "comment": "เนื้อสดมาก คุณภาพดี น้ำซุปเข้มข้นกำลังดี ต้องมาอีก",
    "visitDate": "2024-09-28",
    "createdAt": "2024-09-28T09:30:00.000Z"
  },
  {
    "id": 13,
    "restaurantId": 5,
    "userName": "ปรีดา รักติ่มซำ",
    "rating": 4,
    "comment": "ติ่มซำอร่อย สดใหม่ หนังบาง แต่รอนานหน่อย คนเยอะมาก",
    "visitDate": "2024-10-02",
    "createdAt": "2024-10-02T08:30:00.000Z"
  },
  {
    "id": 14,
    "restaurantId": 5,
    "userName": "สุภาพ ชอบจีน",
    "rating": 4,
    "comment": "รสชาติดี ติ่มซำสดใหม่ ราคาสมเหตุสมผล บริการดี",
    "visitDate": "2024-09-30",
    "createdAt": "2024-09-30T09:00:00.000Z"
  },
  {
    "id": 15,
    "restaurantId": 5,
    "userName": "กรกนก หิวบ่อย",
    "rating": 5,
    "comment": "ติ่มซำแท้ๆ รสชาติเข้มข้น ขนมจีบอร่อยมาก ต้องมาอีก",
    "visitDate": "2024-09-27",
    "createdAt": "2024-09-27T10:30:00.000Z"
  },
  {
    "id": 16,
    "restaurantId": 6,
    "userName": "ธีระ รักเบอร์เกอร์",
    "rating": 4,
    "comment": "เบอร์เกอร์อร่อย เนื้อแท้ ขนาดใหญ่ อิ่มคุ้มค่า",
    "visitDate": "2024-10-03",
    "createdAt": "2024-10-03T18:00:00.000Z"
  },
  {
    "id": 17,
    "restaurantId": 6,
    "userName": "สมหญิง ชอบฟาสต์ฟู้ด",
    "rating": 4,
    "comment": "รสชาติดี เฟรนช์ฟรายส์กรอบ มีเดลิเวอรี่สะดวก",
    "visitDate": "2024-10-01",
    "createdAt": "2024-10-01T19:30:00.000Z"
  },
  {
    "id": 18,
    "restaurantId": 6,
    "userName": "พิชัย หิวเบอร์เกอร์",
    "rating": 4,
    "comment": "เบอร์เกอร์ขนาดใหญ่ เนื้อนุ่ม ซอสอร่อย ราคาสมเหตุสมผล",
    "visitDate": "2024-09-29",
    "createdAt": "2024-09-29T20:00:00.000Z"
  },
  {
    "id": 19,
    "restaurantId": 7,
    "userName": "นันทา รักราเมง",
    "rating": 5,
    "comment": "ราเมงอร่อยมาก น้ำซุปเข้มข้น หมูชาชูนุ่มละลาย ต้องลอง",
    "visitDate": "2024-10-04",
    "createdAt": "2024-10-04T12:30:00.000Z"
  },
  {
    "id": 20,
    "restaurantId": 7,
    "userName": "สุรชัย ชอบญี่ปุ่น",
    "rating": 4,
    "comment": "รสชาติดี น้ำซุปเข้มข้น แต่ราคาค่อนข้างแพง",
    "visitDate": "2024-10-02",
    "createdAt": "2024-10-02T13:00:00.000Z"
  },
  {
    "id": 21,
    "restaurantId": 7,
    "userName": "วรรณา หิวราเมง",
    "rating": 5,
    "comment": "ราเมงแท้ๆ สไตล์โอซาก้า เส้นนุ่ม ซุปเข้มข้น แนะนำ",
    "visitDate": "2024-09-30",
    "createdAt": "2024-09-30T14:30:00.000Z"
  },
  {
    "id": 22,
    "restaurantId": 8,
    "userName": "ประเสริฐ รักข้าวมัน",
    "rating": 5,
    "comment": "ข้าวมันไก่อร่อยสุดๆ ไก่นุ่ม ข้าวหอม น้ำจิ้มรสเด็ด ราคาถูก",
    "visitDate": "2024-10-03",
    "createdAt": "2024-10-03T11:00:00.000Z"
  },
  {
    "id": 23,
    "restaurantId": 8,
    "userName": "สมใจ หิวข้าวมัน",
    "rating": 4,
    "comment": "อร่อยดี ไก่นุ่ม ราคาไม่แพง แต่คนเยอะต้องรอคิว",
    "visitDate": "2024-10-01",
    "createdAt": "2024-10-01T12:30:00.000Z"
  },
  {
    "id": 24,
    "restaurantId": 8,
    "userName": "นิภา ชอบกิน",
    "rating": 4,
    "comment": "ข้าวมันไก่รสชาติดี ไก่สดใหม่ น้ำจิ้มอร่อย",
    "visitDate": "2024-09-29",
    "createdAt": "2024-09-29T13:00:00.000Z"
  }
  // ... อีก 6+ รีวิว
]
```

### 2.2 ไฟล์ที่ให้ครบ (100%)

#### **backend/utils/fileManager.js** - ใช้งานได้เลย
```javascript
const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

// อ่านไฟล์ JSON
const readJsonFile = async (filename) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
};

// เขียนไฟล์ JSON
const writeJsonFile = async (filename, data) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
};

module.exports = {
  readJsonFile,
  writeJsonFile
};
```

#### **backend/package.json**
```json
{
  "name": "restaurant-review-backend",
  "version": "1.0.0",
  "description": "Backend API for Restaurant Review App",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 2.3 ไฟล์ที่ต้องเติม (50%)

#### **backend/server.js** (ให้ 70% - เติม 30%)

```javascript
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
```

#### **backend/routes/restaurants.js** (ให้ 50% - เติม 50%)

```javascript
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
```

#### **backend/routes/reviews.js** (ให้ 50% - เติม 50%)

```javascript
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
```

#### **backend/middleware/validation.js** (ให้ 50% - เติม 50%)

```javascript
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
```

### 2.4 การทดสอบ Backend

#### ใช้ Postman หรือ curl:

**1. ทดสอบดูร้านทั้งหมด:**
```bash
curl http://localhost:3000/api/restaurants
```

**2. ทดสอบค้นหา:**
```bash
curl "http://localhost:3000/api/restaurants?search=ส้มตำ"
```

**3. ทดสอบกรองตามหมวด:**
```bash
curl "http://localhost:3000/api/restaurants?category=อาหารไทย"
```

**4. ทดสอบเพิ่มรีวิว:**
```bash
curl -X POST http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "restaurantId": 1,
    "userName": "ทดสอบ",
    "rating": 5,
    "comment": "อร่อยมากครับ บรรยากาศดี"
  }'
```

---

## ⚛️ ขั้นตอนที่ 3: Frontend Development (60 นาที)

### 3.1 ไฟล์ที่ให้ครบ (100%)

## **คำอธิบายสำหรับนักศึกษา**

### **api.js - API Service Layer**

ไฟล์นี้เป็นชั้นกลางระหว่าง Frontend กับ Backend:

**ฟังก์ชันที่ให้โค้ดครบ (ใช้ได้เลย):**
- `getRestaurants(filters)` - ดึงรายการร้าน + filter
- `getRestaurantById(id)` - ดึงร้านตาม ID
- `getReviewsByRestaurant(restaurantId)` - ดึงรีวิวของร้าน
- `addReview(reviewData)` - เพิ่มรีวิวใหม่
- `getStats()` - ดึงสถิติ

**ฟังก์ชัน Bonus (ถ้ามีเวลา):**
- `getRestaurantsByCategory(category)` - ดึงตามหมวด
- `getRandomRestaurant()` - สุ่มร้าน

**วิธีใช้งาน:**
```javascript
import { getRestaurants, addReview } from './services/api';

// ดึงร้านทั้งหมด
const data = await getRestaurants();

// ดึงร้านที่มีคำว่า "ส้มตำ"
const data = await getRestaurants({ search: 'ส้มตำ' });

// เพิ่มรีวิว
const result = await addReview({
  restaurantId: 1,
  userName: 'John',
  rating: 5,
  comment: 'อร่อยมาก'
});
```

### **vite.config.js**

ไฟล์ config ของ Vite:
- ใช้ plugin React
- ตั้งค่า port 5173
- เปิด browser อัตโนมัติ

### **main.jsx**

จุดเริ่มต้นของ React app:
- render `<App />` ไปที่ `<div id="root">`
- ใช้ `React.StrictMode` เพื่อตรวจสอบปัญหา

### **index.html**

HTML หลัก:
- มี `<div id="root">` สำหรับ React
- โหลด `main.jsx` ด้วย `type="module"`

--- 

## **frontend/vite.config.js** (ให้ครบ 100%)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // เปิด browser อัตโนมัติ
  }
})
```

#### **frontend/package.json**
```json
{
  "name": "restaurant-review-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "vite": "^4.4.5"
  }
}
```

## **frontend/.gitignore** (ให้ครบ 100%)

```
# Dependencies
node_modules/

# Production build
dist/
dist-ssr/
build/

# Environment variables
.env
.env.local
.env.*.local

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories and files
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
*.swp
*.swo
*~

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Testing
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
```

## คำอธิบายสำหรับนักศึกษา

### **Debounce คืออะไร?**

**ปัญหา:**
- ถ้าผู้ใช้พิมพ์คำว่า "ส้มตำ" (5 ตัวอักษร)
- โดยไม่มี debounce จะเรียก API **5 ครั้ง**: "ส", "ส้", "ส้ม", "ส้มต", "ส้มตำ"
- สิ้นเปลือง bandwidth และทำให้ server ทำงานหนัก

**วิธีแก้ด้วย Debounce:**
- รอ 500ms หลังจากผู้ใช้พิมพ์ตัวสุดท้าย
- ถ้าผู้ใช้ไม่พิมพ์อะไรเพิ่มภายใน 500ms → ค่อยเรียก API
- ผลลัพธ์: เรียก API **แค่ 1 ครั้ง** เมื่อผู้ใช้พิมพ์เสร็จ

**การทำงาน:**
```
ผู้ใช้พิมพ์: ส → ตั้ง timer 500ms
                ↓ (ยังไม่ถึง 500ms)
ผู้ใช้พิมพ์: ้ → ยกเลิก timer เก่า, ตั้ง timer ใหม่ 500ms
                ↓ (ยังไม่ถึง 500ms)
ผู้ใช้พิมพ์: ม → ยกเลิก timer เก่า, ตั้ง timer ใหม่ 500ms
                ↓ (ยังไม่ถึง 500ms)
ผู้ใช้พิมพ์: ต → ยกเลิก timer เก่า, ตั้ง timer ใหม่ 500ms
                ↓ (ยังไม่ถึง 500ms)
ผู้ใช้พิมพ์: ำ → ยกเลิก timer เก่า, ตั้ง timer ใหม่ 500ms
                ↓
         รอ 500ms...
                ↓
         เรียก API! ✓
```

### **.env.example vs .env**

**`.env.example`:**
- ตัวอย่างไฟล์ config
- **ส่งขึ้น Git ได้** เพื่อให้คนอื่นรู้ว่าต้องตั้งค่าอะไรบ้าง
- ไม่มีค่าจริง (หรือใช้ค่า placeholder)

**`.env`:**
- ไฟล์จริงที่ใช้งาน
- **ห้าม** commit ขึ้น Git
- มีข้อมูลลับ (password, API keys)

### **.gitignore**

ป้องกันไม่ให้ไฟล์ที่ไม่ต้องการถูก commit ขึ้น Git:
- `node_modules/` - ไฟล์ dependencies (ใหญ่มาก)
- `.env` - ข้อมูลลับ
- `dist/` - ไฟล์ build (สร้างใหม่ได้)
- `.DS_Store` - ไฟล์ระบบ Mac

---

## **frontend/src/main.jsx** (ให้ครบ 100%)

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## **frontend/index.html** (ให้ครบ 100%)

```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Restaurant Review - ค้นหาและรีวิวร้านอาหาร</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### **frontend/src/components/RestaurantCard.jsx** (ให้ครบ 100%)
```javascript
function RestaurantCard({ restaurant, onClick }) {
  const getPriceDisplay = (range) => {
    return '฿'.repeat(range);
  };

  return (
    <div className="restaurant-card" onClick={() => onClick(restaurant.id)}>
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="card-content">
        <h3>{restaurant.name}</h3>
        <p className="category">{restaurant.category}</p>
        <p className="description">{restaurant.description}</p>
        <div className="card-footer">
          <span className="rating">⭐ {restaurant.averageRating.toFixed(1)}</span>
          <span className="price">{getPriceDisplay(restaurant.priceRange)}</span>
          <span className="reviews">{restaurant.totalReviews} รีวิว</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
```

#### **frontend/src/components/ReviewList.jsx** (ให้ครบ 100%)
```javascript
function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className="no-reviews">ยังไม่มีรีวิว</p>;
  }

  return (
    <div className="review-list">
      <h3>รีวิวทั้งหมด ({reviews.length})</h3>
      {reviews.map(review => (
        <div key={review.id} className="review-item">
          <div className="review-header">
            <span className="reviewer-name">{review.userName}</span>
            <span className="review-rating">
              {'⭐'.repeat(review.rating)}
            </span>
          </div>
          <p className="review-comment">{review.comment}</p>
          <p className="review-date">
            วันที่เข้าร้าน: {new Date(review.visitDate).toLocaleDateString('th-TH')}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
```

### 3.2 ไฟล์ที่ต้องเติม (40-50%)

## **frontend/src/services/api.js** (ให้โครงสร้างครบทุกฟังก์ชัน 50%)

```javascript
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
```

#### **frontend/src/components/RestaurantList.jsx** (ให้ 100%)

```javascript
import { useState, useEffect, useCallback } from 'react';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import { getRestaurants } from '../services/api';

function RestaurantList({ onSelectRestaurant }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ เปลี่ยนเป็น false
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minRating: '',
    priceRange: ''
  });

  useEffect(() => {
    fetchRestaurants();
  }, [filters]); // เรียกใหม่เมื่อ filters เปลี่ยน

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await getRestaurants(filters);
      setRestaurants(result.data);
      
    } catch (err) {
      setError('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ ใช้ useCallback และเช็คค่าเดิม
  const handleSearch = useCallback((searchTerm) => {
    setFilters(prev => {
      if (prev.search === searchTerm) {
        return prev; // คืนค่า object เดิม
      }
      return { ...prev, search: searchTerm };
    });
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  return (
    <div className="restaurant-list-container">
      <SearchBar onSearch={handleSearch} />
      <FilterPanel onFilterChange={handleFilterChange} filters={filters} />
      
      {loading && <div className="loading">กำลังโหลด...</div>}
      {error && <div className="error">{error}</div>}
      
      {!loading && !error && (
        <>
          {restaurants.length === 0 ? (
            <p className="no-results">ไม่พบร้านอาหารที่ค้นหา</p>
          ) : (
            <div className="restaurant-grid">
              {restaurants.map(restaurant => (
                <RestaurantCard 
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={onSelectRestaurant}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default RestaurantList;
```

#### **frontend/src/components/SearchBar.jsx** (เพิ่ม debounce - ให้ 100%)

```javascript
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
  }, [searchTerm]); // รันใหม่ทุกครั้งที่ searchTerm เปลี่ยน

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
```

#### **frontend/src/components/FilterPanel.jsx** (ให้ 50% - เติม 50%)

```javascript
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
```

#### **frontend/src/components/RestaurantDetail.jsx** (ให้ 50% - เติม 50%)

```javascript
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
```

#### **frontend/src/components/ReviewForm.jsx** (ให้ 50% - เติม 50%)

```javascript
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
```

#### **frontend/src/App.jsx** (ให้ 70% - เติม 30%)

```javascript
import { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import './App.css';

function App() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  const handleSelectRestaurant = (id) => {
    setSelectedRestaurantId(id);
  };

  const handleBack = () => {
    setSelectedRestaurantId(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍜 Restaurant Review</h1>
        <p>ค้นหาและรีวิวร้านอาหารโปรดของคุณ</p>
      </header>

      <main className="app-main">
        {selectedRestaurantId ? (
          <RestaurantDetail 
            restaurantId={selectedRestaurantId}
            onBack={handleBack}
          />
        ) : (
          <RestaurantList 
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Restaurant Review App</p>
      </footer>
    </div>
  );
}

export default App;
```

#### **frontend/src/App.css** (ให้ CSS พื้นฐาน 100%)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
  color: #333;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.app-main {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
}

.app-footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

/* Search Bar - Enhanced */
.search-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input-wrapper {
  flex: 1;
  position: relative;
}

.search-bar input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.clear-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: #e5e7eb;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  transition: all 0.2s ease;
}

.clear-button:hover {
  background: #d1d5db;
  color: #333;
}

.search-button {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.search-button:hover {
  background: #5568d3;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.search-button:active {
  transform: translateY(0);
}

.search-bar input:focus {
  outline: none;
  border-color: #667eea;
}

.search-bar button {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

.search-bar button:hover {
  background: #5568d3;
}

/* Filter Panel */
.filter-panel {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 600;
}

.filter-group select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Restaurant Grid */
.restaurant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* Restaurant Card */
.restaurant-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.restaurant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.restaurant-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.category {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.rating {
  color: #f59e0b;
  font-weight: 600;
}

.price {
  color: #10b981;
  font-weight: 600;
}

.reviews {
  color: #666;
  font-size: 0.9rem;
}

/* Restaurant Detail */
.restaurant-detail {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.back-button {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.detail-header {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.detail-header img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.detail-info h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

.rating-info {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
}

/* Review Form */
.review-form {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.review-form h3 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
  font-family: inherit;
}

.form-group .error {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

/* Form Validation Styles */
.form-group input.invalid,
.form-group select.invalid,
.form-group textarea.invalid {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.form-group input.valid,
.form-group select.valid,
.form-group textarea.valid {
  border-color: #10b981;
}

.char-count {
  text-align: right;
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
}

.review-form button {
  padding: 0.75rem 2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

.review-form button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

/* Review List */
.review-list {
  margin-top: 2rem;
}

.review-list h3 {
  margin-bottom: 1.5rem;
}

.review-item {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.reviewer-name {
  font-weight: 600;
}

.review-rating {
  color: #f59e0b;
}

.review-comment {
  margin: 1rem 0;
  line-height: 1.6;
}

.review-date {
  color: #666;
  font-size: 0.875rem;
}

/* Loading & Error */
.loading,
.error,
.no-results,
.no-reviews {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}

.error {
  color: #ef4444;
}

/* Responsive */
@media (max-width: 768px) {
  .detail-header {
    grid-template-columns: 1fr;
  }
  
  .restaurant-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-panel {
    flex-direction: column;
  }
}
```

---

## 🔗 ขั้นตอนที่ 4: Integration & Testing (30 นาที)

### 4.1 Checklist การเชื่อมต่อ

**ตรวจสอบก่อนทดสอบ:**
- [ ] Backend รันที่ port 3000
- [ ] Frontend รันที่ port 5173
- [ ] CORS เปิดใน backend (app.use(cors()))
- [ ] API URL ถูกต้องใน services/api.js

### 4.2 Test Cases

#### **Test Case 1: แสดงรายการร้าน**
**ขั้นตอน:**
1. เปิด http://localhost:5173
2. ควรเห็นร้านอาหาร 10 ร้าน

**ผลลัพธ์ที่คาดหวัง:**
- แสดงร้าน 10 ร้านพร้อมรูปภาพ
- แสดงชื่อ, หมวดหมู่, rating, ราคา
- ไม่มี error ใน console

#### **Test Case 2: ค้นหาร้าน**
**ขั้นตอน:**
1. พิมพ์ "ส้มตำ" ในช่องค้นหา
2. กดค้นหา

**ผลลัพธ์ที่คาดหวัง:**
- แสดงเฉพาะร้านที่มีคำว่า "ส้มตำ" ในชื่อ
- อัพเดทจำนวนผลลัพธ์

#### **Test Case 3: กรองตามหมวดหมู่**
**ขั้นตอน:**
1. เลือกหมวด "อาหารไทย"

**ผลลัพธ์ที่คาดหวัง:**
- แสดงเฉพาะร้านอาหารไทย
- Filter อื่นๆ ยังใช้งานได้

#### **Test Case 4: ดูรายละเอียดร้าน**
**ขั้นตอน:**
1. คลิกที่การ์ดร้านใดก็ได้

**ผลลัพธ์ที่คาดหวัง:**
- แสดงหน้ารายละเอียดร้าน
- แสดงรีวิวทั้งหมดของร้าน
- แสดงฟอร์มเขียนรีวิว
- มีปุ่มกลับ

#### **Test Case 5: เขียนรีวิว**
**ขั้นตอน:**
1. กรอกชื่อ: "ทดสอบ ทดสอบ"
2. เลือกคะแนน: 5 ดาว
3. กรอกความคิดเห็น: "อร่อยมาก บรรยากาศดี แนะนำเลยครับ"
4. กดส่งรีวิว

**ผลลัพธ์ที่คาดหวัง:**
- แสดงข้อความสำเร็จ
- รีวิวใหม่ปรากฏในรายการ
- ฟอร์มถูก reset
- คะแนนเฉลี่ยของร้านอัพเดท

#### **Test Case 6: Validation**
**ขั้นตอน:**
1. พยายามส่งรีวิวโดยไม่กรอกชื่อ
2. พยายามส่งความคิดเห็นสั้นเกินไป (น้อยกว่า 10 ตัวอักษร)

**ผลลัพธ์ที่คาดหวัง:**
- แสดง error message ที่เหมาะสม
- ไม่ส่งข้อมูลไป backend
- Frontend validation ทำงาน

### 4.3 การทดสอบด้วย Postman

**Collection: Restaurant Review API**

**1. GET All Restaurants**
```
GET http://localhost:3000/api/restaurants
```

**2. GET Restaurants with Search**
```
GET http://localhost:3000/api/restaurants?search=ส้มตำ
```

**3. GET Restaurants by Category**
```
GET http://localhost:3000/api/restaurants?category=อาหารไทย
```

**4. GET Restaurant by ID**
```
GET http://localhost:3000/api/restaurants/1
```

**5. POST New Review**
```
POST http://localhost:3000/api/reviews
Content-Type: application/json

{
  "restaurantId": 1,
  "userName": "ทดสอบ API",
  "rating": 5,
  "comment": "ทดสอบจาก Postman อร่อยมากครับ"
}
```

**6. GET Stats**
```
GET http://localhost:3000/api/stats
```

### 4.4 Debugging Tips

**ปัญหา: CORS Error**
```javascript
// ตรวจสอบใน backend/server.js
app.use(cors()); // ต้องมีบรรทัดนี้
```

**ปัญหา: ข้อมูลไม่แสดง**
```javascript
// เช็คใน Browser Developer Tools
// 1. Console - มี error อะไรไหม?
// 2. Network tab - API request status code อะไร?
// 3. Response มีข้อมูลไหม?
```

**ปัญหา: Form ไม่ส่งข้อมูล**
```javascript
// ตรวจสอบ
// 1. e.preventDefault() มีไหม?
// 2. validation ผ่านไหม?
// 3. console.log ดูข้อมูลที่จะส่ง
```

---

## 📤 การส่งงาน

### 5.1 สิ่งที่ต้องส่ง

**1. GitHub Repository**
- URL: `https://github.com/yourusername/restaurant-review-app`
- ต้องมี code ทั้ง frontend และ backend
- ต้องมี .gitignore (ไม่ส่ง node_modules)

**2. README.md** (ต้องมีครบทุกหัวข้อ)

```markdown
# Restaurant Review Website

## รายละเอียดโปรเจค
เว็บไซต์รีวิวร้านอาหารที่ผู้ใช้สามารถ:
- ค้นหาและกรองร้านอาหาร
- ดูรายละเอียดและรีวิวของร้าน
- เขียนรีวิวและให้คะแนนร้าน

## Technologies ที่ใช้

### Frontend
- React 18
- Vite
- CSS3

### Backend
- Node.js
- Express.js
- JSON File Storage

## Features

### Required Features
- ✅ แสดงรายการร้านอาหาร
- ✅ ค้นหาร้านตามชื่อ
- ✅ กรองตามหมวดหมู่, คะแนน, ราคา
- ✅ ดูรายละเอียดร้าน
- ✅ เขียนและแสดงรีวิว
- ✅ Input validation

### Bonus Features (ถ้ามี)
- [ ] Sort restaurants
- [ ] Random restaurant
- [ ] Responsive design
- [ ] Animations

## การติดตั้งและรัน

### Backend
```bash
cd backend
npm install
npm run dev
```
Server จะรันที่ http://localhost:3000

### Frontend
```bash
cd frontend
npm install
npm run dev
```
App จะรันที่ http://localhost:5173

## API Endpoints

### Restaurants
- `GET /api/restaurants` - ดึงรายการร้านทั้งหมด
- `GET /api/restaurants/:id` - ดึงร้านตาม ID
- `GET /api/restaurants?search=...&category=...` - ค้นหาและกรอง

### Reviews
- `POST /api/reviews` - เพิ่มรีวิวใหม่
- `GET /api/reviews/:restaurantId` - ดึงรีวิวของร้าน

### Stats
- `GET /api/stats` - ดึงสถิติทั้งหมด

## Screenshots

### หน้าแรก
![Home Page](screenshots/home.png)

### รายละเอียดร้าน
![Detail Page](screenshots/detail.png)

### ฟอร์มรีวิว
![Review Form](screenshots/review-form.png)

## ผู้พัฒนา
- ชื่อ-นามสกุล
- รหัสนักศึกษา
- Email

## License
MIT
```

**3. Screenshots** (อย่างน้อย 3 รูป)
- หน้าแรก (รายการร้าน)
- หน้ารายละเอียดร้าน
- ฟอร์มเขียนรีวิว

### 5.2 เกณฑ์การประเมิน

#### **Required Features (70 คะแนน)**

**Backend API (30 คะแนน)**
- [ ] GET /api/restaurants พร้อม filtering (10 คะแนน)
- [ ] GET /api/restaurants/:id (5 คะแนน)
- [ ] POST /api/reviews พร้อม validation (10 คะแนน)
- [ ] อัพเดท rating เมื่อมีรีวิวใหม่ (5 คะแนน)

**Frontend (30 คะแนน)**
- [ ] แสดงรายการร้าน (5 คะแนน)
- [ ] Search และ Filter ทำงานได้ (10 คะแนน)
- [ ] ดูรายละเอียดร้าน + รีวิว (5 คะแนน)
- [ ] ฟอร์มเขียนรีวิว + validation (10 คะแนน)

**Integration (10 คะแนน)**
- [ ] เชื่อมต่อ Frontend-Backend สำเร็จ (5 คะแนน)
- [ ] Loading และ Error states (5 คะแนน)

#### **Bonus Features (15 คะแนน)**
- [ ] Sort restaurants (3 คะแนน)
- [ ] Random restaurant (2 คะแนน)
- [ ] Filter หลายเงื่อนไขพร้อมกัน (3 คะแนน)
- [ ] Responsive design (4 คะแนน)
- [ ] Smooth animations (3 คะแนน)

#### **Documentation & Code Quality (15 คะแนน)**
- [ ] README.md สมบูรณ์ (5 คะแนน)
- [ ] Screenshots ครบ (3 คะแนน)
- [ ] Code เป็นระเบียบ (4 คะแนน)
- [ ] มี comments สำคัญ (3 คะแนน)

### 5.3 วิธีส่งงาน

**ขั้นตอน:**

1. **Push code ขึ้น GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Restaurant Review App"
git branch -M main
git remote add origin https://github.com/yourusername/restaurant-review-app.git
git push -u origin main
```

2. **เพิ่ม Screenshots:**
- สร้างโฟลเดอร์ `screenshots/`
- เพิ่มรูป 3-5 รูป
- อ้างอิงใน README.md

3. **ตรวจสอบความสมบูรณ์:**
- [ ] README.md ครบถ้วน
- [ ] Code ทำงานได้
- [ ] ไม่มี node_modules ใน repo
- [ ] Screenshots แสดงได้

4. **ส่ง GitHub URL:**
- ส่งผ่านระบบที่อาจารย์กำหนด
- หรือส่งผ่าน Google Classroom

---

## 💡 Tips & Best Practices

### Code Quality

**1. ใช้ความสามารถของ ES6+:**
```javascript
// ดี
const { name, rating } = restaurant;

// ไม่ดี
const name = restaurant.name;
const rating = restaurant.rating;
```

**2. Handle Errors ทุกที่:**
```javascript
try {
  const data = await fetchData();
} catch (error) {
  console.error('Error:', error);
  setError('ไม่สามารถโหลดข้อมูลได้');
}
```

**3. Validate ทั้ง Frontend และ Backend:**
- Frontend: UX ดี (แจ้ง error ทันที)
- Backend: Security (ป้องกันจริง)

**4. ใช้ useState และ useEffect อย่างถูกต้อง:**
```javascript
// ระวัง infinite loop
useEffect(() => {
  fetchData();
}, []); // [] สำคัญ!
```

### Performance

**1. ใช้ debounce สำหรับ search:**
```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    onSearch(searchTerm);
  }, 500);
  
  return () => clearTimeout(timer);
}, [searchTerm]);
```

**2. Loading states:**
```javascript
if (loading) return <Loading />;
if (error) return <Error message={error} />;
return <Data />;
```

### Git Workflow

**1. Commit บ่อยๆ:**
```bash
git add .
git commit -m "Add restaurant list component"
git push
```

**2. Commit messages ที่ดี:**
```bash
# ดี
"Add search functionality to restaurant list"
"Fix rating calculation bug"
"Update README with screenshots"

# ไม่ดี
"update"
"fix bug"
"asdf"
```

---

## 🎯 Bonus Features (คะแนนเพิ่ม)

### 1. Sort Restaurants (3 คะแนน)

**เพิ่มใน FilterPanel.jsx:**
```javascript
<select onChange={(e) => onSort(e.target.value)}>
  <option value="">เรียงตาม...</option>
  <option value="rating-desc">คะแนนสูงสุด</option>
  <option value="rating-asc">คะแนนต่ำสุด</option>
  <option value="name-asc">ชื่อ A-Z</option>
  <option value="reviews-desc">รีวิวมากสุด</option>
</select>
```

**จัดการใน RestaurantList.jsx:**
```javascript
const sortRestaurants = (restaurants, sortBy) => {
  const sorted = [...restaurants];
  
  switch(sortBy) {
    case 'rating-desc':
      return sorted.sort((a, b) => b.averageRating - a.averageRating);
    case 'rating-asc':
      return sorted.sort((a, b) => a.averageRating - b.averageRating);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'th'));
    case 'reviews-desc':
      return sorted.sort((a, b) => b.totalReviews - a.totalReviews);
    default:
      return sorted;
  }
};
```

### 2. Random Restaurant (2 คะแนน)

**Backend route:**
```javascript
router.get('/random', async (req, res) => {
  const restaurants = await readJsonFile('restaurants.json');
  const random = restaurants[Math.floor(Math.random() * restaurants.length)];
  res.json({ success: true, data: random });
});
```

**Frontend button:**
```javascript
<button onClick={getRandomRestaurant}>
  🎲 สุ่มร้านอาหาร
</button>
```

### 3. Responsive Design (4 คะแนน)

**เพิ่มใน App.css:**
```css
@media (max-width: 768px) {
  .restaurant-grid {
    grid-template-columns: 1fr;
  }
  
  .detail-header {
    grid-template-columns: 1fr;
  }
  
  .search-bar {
    flex-direction: column;
  }
  
  .filter-panel {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .app-header h1 {
    font-size: 1.5rem;
  }
  
  .card-content h3 {
    font-size: 1.2rem;
  }
}
```

### 4. Animations (3 คะแนน)

```css
/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.restaurant-card {
  animation: fadeIn 0.5s ease;
}

/* Loading spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading::after {
  content: "";
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```bash
# หา process ที่ใช้ port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# หรือเปลี่ยน port
PORT=3001 npm run dev
```

### Issue 2: Module Not Found

**Error:**
```
Cannot find module 'express'
```

**Solution:**
```bash
cd backend
npm install
```

### Issue 3: CORS Error

**Error:**
```
Access to fetch has been blocked by CORS policy
```

**Solution:**
```javascript
// ใน server.js
const cors = require('cors');
app.use(cors());
```

### Issue 4: Data Not Updating

**Problem:** เพิ่มรีวิวแล้วแต่คะแนนไม่เปลี่ยน

**Solution:**
```javascript
// ตรวจสอบว่าอัพเดท averageRating ใน POST /api/reviews
const restaurantReviews = reviews.filter(r => r.restaurantId === restaurantId);
const avgRating = restaurantReviews.reduce((sum, r) => sum + r.rating, 0) / restaurantReviews.length;

// อัพเดทใน restaurants.json
restaurant.averageRating = avgRating;
restaurant.totalReviews = restaurantReviews.length;
```

### Issue 5: State Not Updating

**Problem:** เปลี่ยน filters แล้วแต่ข้อมูลไม่เปลี่ยน

**Solution:**
```javascript
// ตรวจสอบ dependency array ใน useEffect
useEffect(() => {
  fetchRestaurants();
}, [filters]); // ต้องมี filters
```

---

## 📚 Additional Resources

### React Documentation
- [React Hooks](https://react.dev/reference/react)
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)

### Express.js
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)

### JavaScript
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

### Tools
- [Postman](https://www.postman.com/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

## ✅ Final Checklist

**ก่อนส่งงาน ตรวจสอบ:**

### Functionality
- [ ] แสดงรายการร้านได้
- [ ] ค้นหาทำงาน
- [ ] กรองทำงาน
- [ ] ดูรายละเอียดได้
- [ ] เขียนรีวิวได้
- [ ] Validation ทำงาน
- [ ] Loading states แสดง
- [ ] Error handling ครบ

### Code Quality
- [ ] ไม่มี console.log ที่ไม่จำเป็น
- [ ] ไม่มี code ที่ comment ทิ้งไว้
- [ ] มี comments สำหรับโค้ดที่ซับซ้อน
- [ ] ชื่อตัวแปรและฟังก์ชันชัดเจน

### Documentation
- [ ] README.md สมบูรณ์
- [ ] มี screenshots อย่างน้อย 3 รูป
- [ ] อธิบายวิธีติดตั้งและรัน
- [ ] ระบุ features ที่ทำ

### Git
- [ ] Push code ขึ้น GitHub แล้ว
- [ ] ไม่มี node_modules ใน repo
- [ ] มี .gitignore
- [ ] Commit messages ชัดเจน

---

## 🎉 สรุป

**สิ่งที่คุณจะได้เรียนรู้:**
- การสร้าง Fullstack Application จริง
- การเชื่อมต่อ React กับ Express
- REST API Design
- State Management
- Error Handling
- Input Validation
- Git Workflow

**เวลาที่แนะนำ:**
- Backend: 45 นาที
- Frontend: 60 นาที  
- Integration: 30 นาที
- รวม: 2.5 ชั่วโมง

**คำแนะนำสุดท้าย:**
- เริ่มจาก required features ก่อน
- ทดสอบบ่อยๆ
- commit เป็นประจำ
- ถามเมื่อติดจริงๆ
- มีความสุขกับการเขียนโค้ด!

**Good luck และสนุกกับการพัฒนา! 🚀**

---

**หมายเหตุ:** เอกสารนี้เป็น guide เท่านั้น นักศึกษาสามารถปรับแต่งและเพิ่มเติม features ได้ตามความคิดสร้างสรรค์