# วันที่ 5: การเชื่อมต่อ Frontend-Backend และความปลอดภัย

## ส่วนที่ 3.1: แนวทางและขั้นตอนการทำโปรเจค (Slides)

**ลักษณะ:** Presentation slides อธิบายแนวคิดและขั้นตอน ไม่มีโค้ดหลัก

---

## Slide 1: หน้าปก

**หัวข้อ:** Final Project: Restaurant Review Website

**เนื้อหา:**
- โปรเจคสุดท้าย: เว็บไซต์รีวิวร้านอาหาร
- รวมความรู้ทั้ง 5 วัน
- เวลาทำ: 2.5 ชั่วโมง (14:00-16:30)
- นำเสนอ: 16:30-17:00

**คำพูดเปิด:**
> "มาสร้าง Fullstack Application จริงด้วยมือเรากันเถอะ!"

**Design:** พื้นหลังสีส้ม-แดง ไอคอนร้านอาหาร

---

## Slide 2: ภาพรวมโปรเจค

**หัวข้อ:** Restaurant Review Website คืออะไร?

### จุดประสงค์

**สร้างเว็บไซต์รีวิวร้านอาหารที่:**
- แสดงรายการร้านอาหารต่างๆ
- ค้นหาและกรองร้านตามเงื่อนไข
- ดูรายละเอียดและรีวิวของร้าน
- เขียนรีวิวและให้คะแนนร้าน

### เชื่อมโยงกับที่เรียนมา

**วันที่ 1-2: HTML, CSS, JavaScript, React**
- ใช้ React สร้าง UI components

**วันที่ 3-4: Node.js, Express, API**
- สร้าง REST API ด้วย Express
- จัดการข้อมูลด้วย JSON files

**วันที่ 5 (วันนี้):**
- เชื่อมต่อ React กับ Express
- ใช้หลัก Security ที่เรียน

### ทักษะที่จะได้ฝึก

**Technical Skills:**
- Fullstack Development
- API Integration
- State Management
- Error Handling
- Data Validation

**Soft Skills:**
- Planning & Organization
- Problem Solving
- Time Management

---

## Slide 3: Features และเกณฑ์การประเมิน

**หัวข้อ:** สิ่งที่ต้องทำและคะแนน

### Required Features (70 คะแนน)

**1. Backend API (30 คะแนน)**
- GET /api/restaurants - ดึงรายการร้าน พร้อม filter
- GET /api/restaurants/:id - ดึงร้านตาม ID
- POST /api/reviews - เพิ่มรีวิวใหม่
- GET /api/stats - สถิติต่างๆ
- Input validation ทุก endpoints

**2. Frontend (30 คะแนน)**
- แสดงรายการร้านอาหาร
- Search และ Filter (category, rating, price)
- ดูรายละเอียดร้าน + รีวิว
- ฟอร์มเขียนรีวิว
- Loading และ Error states

**3. Integration (10 คะแนน)**
- เชื่อมต่อ Frontend-Backend สำเร็จ
- ไม่มี CORS errors
- ข้อมูลแสดงถูกต้อง

### Bonus Features (15 คะแนน)

- Sort restaurants (rating, name)
- สุ่มร้าน (Random Restaurant)
- Filter หลายเงื่อนไขพร้อมกัน
- Responsive Design
- Smooth animations

### Documentation & Presentation (15 คะแนน)

**README.md (10 คะแนน):**
- อธิบายโปรเจค
- วิธีติดตั้งและรัน
- Features ที่มี
- Screenshots

**Code Quality (5 คะแนน):**
- โค้ดเป็นระเบียบ
- มี comments สำคัญ
- ไม่มี console.log ที่ไม่จำเป็น

### รวม: 100 คะแนน

---

## Slide 4: N-Tier Architecture Review

**หัวข้อ:** ทบทวนสถาปัตยกรรมที่ใช้

### ทำไมต้องเข้าใจ Architecture?

**เพื่อให้รู้ว่า:**
- แต่ละชั้นทำหน้าที่อะไร
- จะเริ่มทำจากชั้นไหนก่อน
- แต่ละชั้นสื่อสารกันอย่างไร

### 3-Tier Architecture

```
┌─────────────────────────────────┐
│   Presentation Layer            │
│   (Frontend - React)            │
│   - แสดง UI                     │
│   - รับ input จากผู้ใช้         │
│   - แสดงข้อมูล                  │
└───────────┬─────────────────────┘
            │ HTTP (fetch API)
            │
┌───────────▼─────────────────────┐
│   Application Layer             │
│   (Backend - Express)           │
│   - Business Logic              │
│   - API Endpoints               │
│   - Validation                  │
└───────────┬─────────────────────┘
            │ File System
            │
┌───────────▼─────────────────────┐
│   Data Layer                    │
│   (JSON Files)                  │
│   - restaurants.json            │
│   - reviews.json                │
└─────────────────────────────────┘
```

### Key Principles

**Separation of Concerns:**
- Frontend ไม่เข้าถึง Data Layer โดยตรง
- Backend เป็น gatekeeper
- แต่ละชั้นมีหน้าที่ชัดเจน

**Data Flow:**
- User action → Frontend → Backend → Data
- Data → Backend → Frontend → User sees result

---

## Slide 5: ภาพรวม System Architecture

**หัวข้อ:** โครงสร้างระบบทั้งหมด

### Restaurant Review App Architecture

```
┌──────────────────────────────────────────┐
│         Frontend (React)                 │
│  Port: 5173                              │
│                                          │
│  Components:                             │
│  • RestaurantList                        │
│  • RestaurantCard                        │
│  • RestaurantDetail                      │
│  • SearchBar                             │
│  • FilterPanel                           │
│  • ReviewForm                            │
│  • ReviewList                            │
│                                          │
│  Services:                               │
│  • api.js (fetch calls)                  │
└────────────┬─────────────────────────────┘
             │
             │ HTTP Requests
             │ (GET, POST)
             │
┌────────────▼─────────────────────────────┐
│         Backend (Express)                │
│  Port: 3000                              │
│                                          │
│  Routes:                                 │
│  • /api/restaurants                      │
│  • /api/reviews                          │
│  • /api/stats                            │
│                                          │
│  Middleware:                             │
│  • CORS                                  │
│  • Validation                            │
│  • Error Handler                         │
│                                          │
│  Utils:                                  │
│  • fileManager.js                        │
└────────────┬─────────────────────────────┘
             │
             │ Read/Write
             │
┌────────────▼─────────────────────────────┐
│         Data Layer                       │
│                                          │
│  data/                                   │
│  • restaurants.json (10 ร้าน)             │
│  • reviews.json (30+ รีวิว)                │
│  • categories.json                       │
└──────────────────────────────────────────┘
```

### Communication Flow

**Example: ดูรายการร้าน**
1. User เปิดหน้าแรก
2. React component mount
3. เรียก fetch('http://localhost:3000/api/restaurants')
4. Express รับ request
5. อ่านข้อมูลจาก restaurants.json
6. ส่ง JSON response กลับ
7. React รับข้อมูลและแสดงผล

---

## Slide 6: Frontend Components

**หัวข้อ:** Components ที่ต้องสร้าง

### Component Hierarchy

```
App.jsx
│
├── HomePage
│   ├── SearchBar
│   ├── FilterPanel
│   └── RestaurantList
│       └── RestaurantCard (x N)
│
└── RestaurantDetailPage
    ├── RestaurantDetail
    ├── ReviewForm
    └── ReviewList
        └── ReviewItem (x N)
```

### หน้าที่ของแต่ละ Component

**RestaurantList**
- แสดงรายการร้านทั้งหมด
- จัดการ loading/error states
- เรียก API ดึงข้อมูล

**RestaurantCard**
- แสดงข้อมูลร้าน 1 ร้าน
- ชื่อ, หมวด, rating, ราคา
- คลิกเพื่อดูรายละเอียด

**SearchBar**
- ช่องค้นหาชื่อร้าน
- ส่ง query ไปยัง API

**FilterPanel**
- เลือกหมวดหมู่
- เลือกช่วงราคา
- เลือก minimum rating

**RestaurantDetail**
- แสดงรายละเอียดร้านครบถ้วน
- แสดง reviews
- แสดง average rating

**ReviewForm**
- ฟอร์มเขียนรีวิว
- เลือกคะแนน 1-5
- Validate input
- ส่งข้อมูลไป Backend

**ReviewList**
- แสดงรีวิวทั้งหมดของร้าน
- เรียงตามวันที่

### State Management

**ข้อมูลที่ต้องจัดการ:**
- restaurants (array)
- selectedRestaurant (object)
- reviews (array)
- loading (boolean)
- error (string/null)
- filters (object)

---

## Slide 7: Backend API Endpoints

**หัวข้อ:** API ที่ต้องสร้าง

### Restaurant Endpoints

**GET /api/restaurants**
- ดึงรายการร้านทั้งหมด
- รองรับ query parameters:
  - search (ค้นหาชื่อ)
  - category (หมวดหมู่)
  - minRating (rating ขั้นต่ำ)
  - priceRange (ช่วงราคา)

**GET /api/restaurants/:id**
- ดึงข้อมูลร้านตาม ID
- รวม reviews ของร้านนั้นด้วย

**GET /api/restaurants/category/:category**
- ดึงร้านตามหมวดหมู่

**GET /api/restaurants/random**
- สุ่มร้านอาหาร 1 ร้าน

### Review Endpoints

**GET /api/reviews/:restaurantId**
- ดึงรีวิวของร้านเฉพาะ

**POST /api/reviews**
- เพิ่มรีวิวใหม่
- ต้อง validate ข้อมูล
- อัพเดท average rating

### Statistics Endpoint

**GET /api/stats**
- จำนวนร้านทั้งหมด
- จำนวนรีวิวทั้งหมด
- Average rating รวม
- Top 5 ร้าน

### Response Format

```json
{
  "success": true,
  "data": [...],
  "message": "Operation successful"
}
```

หรือกรณี error:
```json
{
  "success": false,
  "message": "Error message",
  "errors": ["detail 1", "detail 2"]
}
```

---

## Slide 8: Data Structure

**หัวข้อ:** โครงสร้างข้อมูล JSON

### restaurants.json

**ข้อมูลร้านอาหาร (10 ร้าน)**

```
Restaurant Object:
{
  id: number (unique)
  name: string (ชื่อร้าน)
  category: string (หมวดหมู่)
  description: string (รายละเอียด)
  location: string (ที่อยู่)
  priceRange: 1-3 (ช่วงราคา)
  phone: string (เบอร์โทร)
  image: string (URL รูปภาพ)
  averageRating: number (คะแนนเฉลี่ย)
  totalReviews: number (จำนวนรีวิว)
  openHours: string (เวลาเปิด-ปิด)
  createdAt: ISO date string
}
```

**หมวดหมู่ที่มี:**
- อาหารไทย
- อาหารญี่ปุ่น
- อาหารอิตาเลียน
- อาหารจีน
- ฟาสต์ฟู้ด

### reviews.json

**รีวิวอาหาร (30+ รีวิว)**

```
Review Object:
{
  id: number (unique)
  restaurantId: number (เชื่อมกับร้าน)
  userName: string (ชื่อผู้รีวิว)
  rating: 1-5 (คะแนน)
  comment: string (ความคิดเห็น)
  visitDate: date string
  createdAt: ISO date string
}
```

### ความสัมพันธ์ข้อมูล

```
restaurants (1) ←→ (many) reviews

- 1 ร้านมีได้หลายรีวิว
- 1 รีวิวเป็นของร้านเดียว

การเชื่อม:
reviews.restaurantId → restaurants.id
```

### การคำนวณ Average Rating

```
เมื่อเพิ่มรีวิวใหม่:
1. หา reviews ทั้งหมดของร้าน
2. รวมคะแนนทั้งหมด / จำนวนรีวิว
3. อัพเดท averageRating
4. อัพเดท totalReviews
```

---

## Slide 9: ขั้นตอนการทำโปรเจค

**หัวข้อ:** Step-by-step Overview

### 5 ขั้นตอนหลัก

```
1. Planning & Setup (15 นาที)
   ↓
2. Backend Development (45 นาที)
   ↓
3. Frontend Development (60 นาที)
   ↓
4. Integration & Testing (30 นาที)
   ↓
5. Final Touches & Submission (10 นาที)
```

### ทำไมต้องทำตามลำดับนี้?

**เริ่มจาก Backend:**
- สร้าง API ก่อน
- ทดสอบได้ด้วย Postman
- มั่นใจว่า data flow ถูกต้อง
- Frontend เรียกใช้ได้ทันที

**จากนั้น Frontend:**
- มี API พร้อมใช้แล้ว
- focus ที่ UI/UX
- ทดสอบการเชื่อมต่อจริง

**สุดท้าย Integration:**
- เชื่อมทั้งสองส่วนเข้าด้วยกัน
- แก้ bug ที่เจอ
- ทดสอบ end-to-end

### Timeline Suggestion

- 14:00-14:15 → Planning & Setup
- 14:15-15:00 → Backend
- 15:00-16:00 → Frontend
- 16:00-16:25 → Integration
- 16:25-16:30 → Final check
- 16:30-17:00 → Presentation

---

## Slide 10: Step 1 - Planning & Setup

**หัวข้อ:** เตรียมความพร้อม (15 นาที)

### สิ่งที่ต้องทำ

**1. สร้าง Project Structure**

```
restaurant-review-app/
├── backend/
│   ├── data/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── services/
        └── App.jsx
```

**2. ดาวน์โหลด/คัดลอกไฟล์เริ่มต้น**
- ได้รับ Development Guide (markdown)
- โค้ดเริ่มต้น ~50%
- ข้อมูล JSON files พร้อมใช้

**3. ติดตั้ง Dependencies**

Backend:
```bash
cd backend
npm install express cors dotenv
npm install --save-dev nodemon
```

Frontend:
```bash
cd frontend
npm install
```

**4. ทดสอบว่าทั้งสองรันได้**

Backend:
```bash
npm run dev
# ควรเห็น: Server running on http://localhost:3000
```

Frontend:
```bash
npm run dev
# ควรเห็น: http://localhost:5173
```

### Checklist

- โครงสร้าง folder ครบ
- ติดตั้ง packages สำเร็จ
- Server รันได้
- React app รันได้
- มี Dev Guide เปิดไว้

---

## Slide 11: Step 2 - Backend Development

**หัวข้อ:** สร้าง Express API (45 นาที)

### สิ่งที่ได้รับมา (~50%)

**ให้แล้ว:**
- server.js โครงสร้างหลัก
- fileManager.js helper functions
- ข้อมูล JSON files
- Validation template

### สิ่งที่ต้องทำเอง (~50%)

**1. routes/restaurants.js (30 นาที)**
- เติม filtering logic (search, category, rating)
- เพิ่ม GET by ID
- เพิ่ม GET by category
- เพิ่ม random endpoint

**2. routes/reviews.js (10 นาที)**
- เขียน POST review
- Validation input
- อัพเดท restaurant rating

**3. middleware/validation.js (5 นาที)**
- เติม validation rules ทั้งหมด

### วิธีทดสอบ

**ใช้ Postman หรือ curl:**

```bash
# ทดสอบ GET restaurants
curl http://localhost:3000/api/restaurants

# ทดสอบ search
curl http://localhost:3000/api/restaurants?search=ส้มตำ

# ทดสอบ POST review
curl -X POST http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"restaurantId":1,"userName":"Test","rating":5,"comment":"อร่อยมาก"}'
```

### Tips

- ทดสอบแต่ละ endpoint ทันทีที่เขียนเสร็จ
- ใช้ console.log ดู request body
- เช็ค JSON file ว่าบันทึกถูกต้อง
- อย่าลืม validation!

---

## Slide 12: Step 3 - Frontend Development

**หัวข้อ:** สร้าง React Components (60 นาที)

### สิ่งที่ได้รับมา (~50%)

**ให้แล้ว:**
- Component structures
- Basic layouts
- CSS styling
- api.js template

### สิ่งที่ต้องทำเอง (~50%)

**1. services/api.js (10 นาที)**
- เติม API call functions
- Error handling

**2. RestaurantList.jsx (15 นาที)**
- fetch ข้อมูลร้าน
- Loading & error states
- แสดงผลด้วย RestaurantCard

**3. SearchBar & FilterPanel (10 นาที)**
- รับ input จาก user
- ส่ง query parameters

**4. RestaurantDetail.jsx (15 นาที)**
- fetch ร้านตาม ID
- แสดงรีวิว

**5. ReviewForm.jsx (10 นาที)**
- Validation
- Submit review

### แนวทางการทำ

**เริ่มจาก RestaurantList:**
1. สร้าง state (restaurants, loading, error)
2. useEffect fetch data
3. แสดงผลด้วย map
4. ทดสอบดูข้อมูลขึ้นหรือไม่

**จากนั้นค่อย:**
- เพิ่ม Search
- เพิ่ม Filter
- ทำ Detail page
- สุดท้ายทำ Review form

### Tips

- ทดสอบทีละ component
- เช็ค Network tab ว่า API เรียกถูกไหม
- ดู Console errors
- เริ่มจาก features หลัก ก่อน bonus

---

## Slide 13: Step 4 - Integration & Testing

**หัวข้อ:** เชื่อมต่อและทดสอบ (30 นาที)

### การเชื่อมต่อ Frontend-Backend

**Problem: CORS Error**

```
Access to fetch has been blocked by CORS policy
```

**Solution: เปิด CORS ใน Backend**

```javascript
// server.js
const cors = require('cors');
app.use(cors());
```

**ตรวจสอบ:**
- Backend รันที่ port 3000
- Frontend รันที่ port 5173
- fetch ใช้ URL ถูกต้อง: http://localhost:3000

### Test Scenarios

**1. แสดงรายการร้าน**
- เปิดหน้าแรก
- ควรเห็นร้าน 10 ร้าน
- มีรูป ชื่อ rating

**2. ค้นหาร้าน**
- พิมพ์ "ส้มตำ"
- ควรเห็นเฉพาะร้านที่มีคำว่า "ส้มตำ"

**3. กรองตามหมวด**
- เลือก "อาหารไทย"
- ควรเห็นเฉพาะร้านอาหารไทย

**4. ดูรายละเอียด**
- คลิกที่ร้าน
- ควรเห็นรายละเอียด + รีวิว

**5. เขียนรีวิว**
- กรอกฟอร์ม
- ส่งรีวิว
- ควรเห็นรีวิวใหม่ทันที

### Debugging Tips

**ถ้าข้อมูลไม่แสดง:**
- เช็ค Network tab → request สำเร็จไหม
- เช็ค Console → มี error ไหม
- เช็ค Backend → API ส่งข้อมูลถูกต้องไหม

**ถ้า CORS error:**
- ตรวจสอบ cors middleware
- Restart backend server

**ถ้า POST ไม่ทำงาน:**
- เช็ค request body ส่งไปถูกต้องไหม
- เช็ค Content-Type: application/json
- เช็ค validation ใน backend

---

## Slide 14: Common Problems & Solutions

**หัวข้อ:** ปัญหาที่พบบ่อยและวิธีแก้

### Problem 1: CORS Error

**อาการ:**
```
Access to fetch blocked by CORS policy
```

**สาเหตุ:**
- ไม่ได้เปิด CORS ใน backend
- หรือ restart server หลัง เพิ่ม cors

**วิธีแก้:**
```javascript
const cors = require('cors');
app.use(cors());
```

### Problem 2: ข้อมูลไม่แสดง

**อาการ:**
- หน้าว่างเปล่า
- Loading ไม่หาย

**เช็ค:**
1. Network tab → status 200?
2. Response มีข้อมูลไหม?
3. State update หรือไม่?
4. console.log ดูข้อมูล

**วิธีแก้:**
```javascript
// เช็คว่า set state ถูกต้อง
setRestaurants(data.data); // ไม่ใช่ data.restaurants
```

### Problem 3: Form ไม่ส่งข้อมูล

**อาการ:**
- คลิก submit แล้วไม่เกิดอะไร
- หรือ error 400

**เช็ค:**
1. e.preventDefault() หรือยัง?
2. data format ถูกต้องไหม?
3. validation ผ่านหรือไม่?

**วิธีแก้:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault(); // สำคัญ!
  
  // เช็คว่าส่งข้อมูลอะไรไป
  console.log(formData);
  
  await fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};
```

### Problem 4: Port Already in Use

**อาการ:**
```
Error: listen EADDRINUSE :::3000
```

**วิธีแก้:**
```bash
# หา process ที่ใช้ port
lsof -i :3000

# kill process
kill -9 <PID>

# หรือเปลี่ยน port
PORT=3001 npm run dev
```

### Problem 5: Module Not Found

**อาการ:**
```
Cannot find module 'express'
```

**วิธีแก้:**
```bash
npm install express
```

---

## Slide 15: Final Touches

**หัวข้อ:** ตกแต่งและเช็คให้ครบ (10 นาที)

### ก่อนส่งงาน ต้องเช็ค

**Functionality Checklist:**
- แสดงรายการร้านได้
- ค้นหาทำงานได้
- กรองทำงานได้
- ดูรายละเอียดได้
- เขียนรีวิวได้
- ไม่มี console errors

**Code Quality:**
- ลบ console.log ที่ไม่จำเป็น
- ลบ code ที่ comment ไว้
- เช็คว่าไม่มี TODO ค้างอยู่

**UI/UX:**
- Loading states ทุกที่
- Error messages ชัดเจน
- Empty states (ไม่มีข้อมูล)
- Responsive (ถ้าทำ)

### การทำ README.md

**ต้องมี:**
1. ชื่อโปรเจค + คำอธิบาย
2. Features ที่มี
3. Technologies ที่ใช้
4. วิธีติดตั้งและรัน
5. Screenshots (2-3 รูป)
6. ผู้พัฒนา

**Template ให้ใน Dev Guide**

### Git Workflow

```bash
# Initial commit
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin <your-repo-url>
git push -u origin main
```

**อย่าลืม .gitignore:**
```
node_modules/
.env
.DS_Store
```

---

## Slide 16: การส่งงาน

**หัวข้อ:** Submission Guidelines

### สิ่งที่ต้องส่ง

**1. GitHub Repository**
- Code ทั้ง frontend และ backend
- README.md ครบถ้วน
- .gitignore ถูกต้อง (ไม่มี node_modules)

**2. README.md ต้องมี:**

```markdown
# Restaurant Review Website

## คำอธิบาย
เว็บไซต์รีวิวร้านอาหาร...

## Features
- ดูรายการร้านอาหาร
- ค้นหาและกรองร้าน
- เขียนรีวิว
- ...

## Technologies
- Frontend: React, Vite
- Backend: Node.js, Express
- Data: JSON Files

## การติดตั้ง

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Screenshots
[ใส่รูป 2-3 รูป]

## ผู้พัฒนา
- ชื่อ-นามสกุล
- รหัสนักศึกษา
```

**3. Screenshots (2-3 รูป)**
- หน้าแรก (รายการร้าน)
- หน้ารายละเอียดร้าน
- ฟอร์มเขียนรีวิว

### วิธีส่ง

**ส่งผ่าน:**
- GitHub Repository URL
- หรือตามที่อาจารย์กำหนด

**กำหนดส่ง:**
- ตามที่ประกาศ

---

## Slide 17: Tips & Best Practices

**หัวข้อ:** เคล็ดลับความสำเร็จ

### DO's - ควรทำ

**1. เริ่มจาก Backend**
- สร้าง API ให้เสร็จก่อน
- ทดสอบด้วย Postman
- มั่นใจว่าข้อมูลถูกต้อง

**2. ทดสอบบ่อยๆ**
- เขียนโค้ดนิดหน่อย → ทดสอบ
- อย่ารอเขียนเสร็จหมดค่อยทดสอบ

**3. Commit บ่อยๆ**
```bash
git add .
git commit -m "Add restaurant list component"
```

**4. ใช้ console.log**
- debug ดูข้อมูล
- เช็คว่า state update ไหม
- ดู API response

**5. อ่าน Error Messages**
- อย่าเพิกเฉย
- Google error message
- เข้าใจสาเหตุ

**6. ถามเมื่อติดจริงๆ**
- พยายามแก้เองก่อน 15-20 นาที
- แล้วค่อยถาม TA

### DON'Ts - ไม่ควรทำ

**1. อย่าคัดลอกโค้ดทั้งก้อน**
- เข้าใจทีละบรรทัด
- แก้ไขให้เข้ากับโปรเจค

**2. อย่ามุ่งหวัง Perfect**
- ทำให้ใช้งานได้ก่อน
- ค่อยปรับปรุงภายหลัง

**3. อย่าทิ้ง console.log ไว้**
- ลบก่อนส่งงาน
- หรือ comment ไว้

**4. อย่าเพิ่ง Bonus**
- ทำ required features ก่อน
- มีเวลาค่อยทำ bonus

**5. อย่าลืม git push**
- Push บ่อยๆ
- เผื่อเครื่องเสีย

---

## Slide 18: เวลาทำงานและการนำเสนอ

**หัวข้อ:** Timeline และ Presentation

### Timeline (2.5 ชั่วโมง)

**14:00-14:15 (15 นาที) - Planning**
- อ่าน Dev Guide
- Setup project
- ติดตั้ง dependencies

**14:15-15:00 (45 นาที) - Backend**
- สร้าง API endpoints
- Validation
- ทดสอบด้วย Postman

**15:00-16:00 (60 นาที) - Frontend**
- สร้าง components
- เชื่อมต่อ API
- UI/UX

**16:00-16:25 (25 นาที) - Integration**
- แก้ CORS
- ทดสอบ end-to-end
- Fix bugs

**16:25-16:30 (5 นาที) - Final Check**
- เช็ค README
- Push to GitHub
- เตรียมนำเสนอ

### การนำเสนอ (16:30-17:00)

**Format: นำเสนอคนละ 5-7 นาที**

**โครงสร้างการนำเสนอ:**

**1. แนะนำ (30 วินาที)**
- ชื่อโปรเจค
- ชื่อผู้พัฒนา

**2. Demo (3-4 นาที)**
- เปิดเว็บไซต์
- แสดง features:
  - ดูรายการร้าน
  - ค้นหา/กรอง
  - ดูรายละเอียด
  - เขียนรีวิว

**3. อธิบายโค้ด (2 นาที)**
- Architecture overview
- แสดงโค้ดส่วนที่น่าสนใจ
- อธิบาย approach

**4. Challenges (1 นาที)**
- ปัญหาที่เจอ
- วิธีแก้ไข

**5. Q&A (1 นาที)**
- รับคำถาม

### Tips การนำเสนอ

- ฝึกพูดก่อน 1-2 รอบ
- เปิดเว็บไซต์ไว้ล่วงหน้า
- Backup plan ถ้า demo ไม่ทำงาน
- พูดช้าๆ ชัดเจน
- มั่นใจ!

---

## Slide 19: Resources & References

**หัวข้อ:** แหล่งข้อมูลและเอกสารอ้างอิง

### เอกสารที่ได้รับ

**1. Development Guide (Markdown)**
- โจทย์ละเอียด
- โค้ดเริ่มต้น 50%
- Test cases
- วิธีทดสอบ

**2. Data Files**
- restaurants.json
- reviews.json
- categories.json

**3. README Template**
- ตัวอย่างการเขียน
- โครงสร้างที่ดี

### เอกสารประกอบ

**React:**
- React Docs: https://react.dev
- useState & useEffect
- Component patterns

**Express:**
- Express.js Guide: https://expressjs.com
- Routing
- Middleware

**MDN Web Docs:**
- fetch API
- JavaScript
- HTTP methods

### การขอความช่วยเหลือ

**ในระหว่างทำ:**
- TA พร้อมช่วย
- ถามได้เมื่อติดจริงๆ

**หลังเลิกเรียน:**
- กลุ่ม Discord/Line
- Stack Overflow
- Google

### Lab Materials

**ทบทวนจาก:**
- Lab 4.2: Food API
- Lab 4.3: Contact Form
- ส่วนที่ 1-2 วันนี้

---

## Slide 20: สรุป - พร้อมเริ่มแล้ว!

**หัวข้อ:** Let's Build Something Amazing!

### สิ่งที่จะได้เรียนรู้

**Technical:**
- Fullstack development
- API integration
- State management
- Error handling
- Data validation

**Soft Skills:**
- Problem solving
- Time management
- Planning
- Presentation

### หลักการสำคัญ

**1. เริ่มจากพื้นฐาน**
- Backend → Frontend → Integration
- ทำให้ใช้งานได้ก่อน → ปรับปรุงทีหลัง

**2. ทดสอบบ่อยๆ**
- แต่ละ feature ทำเสร็จ → ทดสอบ
- พบ bug → แก้ทันที

**3. อย่ากลัวผิดพลาด**
- Error คือส่วนหนึ่งของการเรียนรู้
- อ่าน error message
- Debug อย่างมีระบบ

**4. Manage เวลา**
- ตั้งเวลาแต่ละขั้นตอน
- ถ้าติดนาน → ข้าม → กลับมาทำทีหลัง

### คำแนะนำสุดท้าย

**Remember:**
- คุณมีความรู้ทั้งหมดที่จำเป็นแล้ว
- Dev Guide มีโค้ด 50% ให้แล้ว
- TA พร้อมช่วย
- เชื่อมั่นในตัวเอง!

### ขั้นตอนถัดไป

**1. รับ Development Guide**
**2. Setup project**
**3. Start coding!**

---

**"The best way to learn is by doing. Let's do this!"**

**Good luck! 🚀**

---

## สิ้นสุดส่วนที่ 3.1 (20 slides)

**Next:** ส่วนที่ 3.2 - Development Guide (Markdown Document)
