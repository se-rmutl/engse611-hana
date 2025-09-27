# Homework Labs: Node.js และ Express.js
## งานบ้าน วันที่ 4: สำหรับส่งสัปดาห์ถัดไป

---

## 📋 ภาพรวมงานบ้าน

### **🎯 เป้าหมายการเรียนรู้:**
- ประยุกต์ใช้ความรู้ Node.js และ Express.js
- สร้าง REST API ที่สมบูรณ์
- จัดการข้อมูลด้วย File System
- ใช้งาน Git และ GitHub workflow

### **📦 ส่งมอบงาน:**
- Repository บน GitHub ของตัวเอง
- README.md ที่อธิบายโปรเจค
- Code ที่ทำงานได้จริง
- Screenshot หรือ video demo

### **⏰ กำหนดส่ง:** สัปดาห์ถัดไป (วันที่ประกาศ)

### **🏆 เกณฑ์การประเมิน:**
- **40%** - Code ทำงานได้ถูกต้อง
- **30%** - ความสมบูรณ์ของ features
- **20%** - Git workflow และ documentation
- **10%** - Creativity และ bonus features

---

## 🧪 Lab 4.1: สร้างเซิร์ฟเวอร์แรกด้วย Node.js (1 ชม.)

### **🎯 เป้าหมาย:** สร้าง HTTP server พื้นฐานและเปรียบเทียบกับ Express.js

### **📁 โครงสร้างโปรเจค:**
```
lab-4-1-basic-server/
├── package.json
├── README.md
├── http-server.js          ← ให้โครงสร้าง 70%
├── express-server.js       ← ให้โครงสร้าง 70%
└── comparison.md           ← นักศึกษาเขียนเอง
```

### **🏗️ โครงสร้างที่ให้ (70%):**

#### **package.json:**
```json
{
  "name": "lab-4-1-basic-server",
  "version": "1.0.0",
  "description": "เปรียบเทียบ HTTP Server vs Express Server",
  "main": "http-server.js",
  "scripts": {
    "start:http": "node http-server.js",
    "start:express": "node express-server.js",
    "dev:http": "nodemon http-server.js",
    "dev:express": "nodemon express-server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

#### **http-server.js (โครงสร้าง 70%):**
```javascript
const http = require('http');
const url = require('url');

const PORT = 3000;

// TODO: สร้างข้อมูลจำลอง students array
// ควรมี id, name, major, year อย่างน้อย 3 คน

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    
    // TODO: จัดการ route GET /
    // ส่งข้อความต้อนรับและรายการ endpoints ที่มี
    
    // TODO: จัดการ route GET /students
    // ส่งรายการนักศึกษาทั้งหมด
    
    // TODO: จัดการ route GET /students/:id
    // ส่งข้อมูลนักศึกษาตาม ID
    // ตัวอย่าง: /students/1
    
    // TODO: จัดการ route GET /students/major/:major
    // กรองนักศึกษาตามสาขา
    // ตัวอย่าง: /students/major/วิศวกรรม
    
    // TODO: จัดการกรณี 404 Not Found
    // ส่ง status 404 และข้อความที่เหมาะสม
});

server.listen(PORT, () => {
    console.log(`🌐 HTTP Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET /');
    console.log('  GET /students');
    console.log('  GET /students/:id');
    console.log('  GET /students/major/:major');
});
```

#### **express-server.js (โครงสร้าง 70%):**
```javascript
const express = require('express');
const app = express();
const PORT = 3001;

// TODO: สร้างข้อมูลจำลอง students array เดียวกับใน http-server.js

// Middleware
app.use(express.json());

// TODO: Route GET / 
// ส่งข้อความต้อนรับและรายการ endpoints

// TODO: Route GET /students
// ส่งรายการนักศึกษาทั้งหมด

// TODO: Route GET /students/:id
// ส่งข้อมูลนักศึกษาตาม ID

// TODO: Route GET /students/major/:major  
// กรองนักศึกษาตามสาขา

// TODO: Route GET /stats
// ส่งสถิติ เช่น จำนวนนักศึกษาทั้งหมด, จำนวนแต่ละสาขา

// TODO: Middleware จัดการ 404
// ส่งข้อความ error ที่เหมาะสม

app.listen(PORT, () => {
    console.log(`🚀 Express Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET /');
    console.log('  GET /students'); 
    console.log('  GET /students/:id');
    console.log('  GET /students/major/:major');
    console.log('  GET /stats');
});
```

### **✅ งานที่นักศึกษาต้องทำ (30%):**

1. **เติมโค้ดให้สมบูรณ์** - ทำ TODO ทั้งหมด
2. **สร้างไฟล์ comparison.md** - เปรียบเทียบ HTTP vs Express
3. **ทดสอบการทำงาน** - ใช้ curl หรือ browser
4. **เขียน README.md** - อธิบายวิธีรันและทดสอบ

### **📝 เกณฑ์การประเมิน Lab 4.1:**
- ✅ Server ทั้งสองทำงานได้ถูกต้อง
- ✅ Routes ทั้งหมดส่ง response ที่ถูกต้อง
- ✅ มีการจัดการ 404 error
- ✅ comparison.md มีเนื้อหาที่สมเหตุสมผล
- ✅ README.md อธิบายได้ชัดเจน

---

## 🍽️ Lab 4.2: ทำ API ส่งข้อมูลรายการอาหาร (1.5 ชม.)

### **🎯 เป้าหมาย:** สร้าง Food API ที่สมบูรณ์พร้อม search และ filter

### **📁 โครงสร้างโปรเจค:**
```
lab-4-2-food-api/
├── package.json
├── README.md
├── server.js               ← ให้โครงสร้าง 70%
├── data/
│   └── foods.json          ← ให้ข้อมูลตัวอย่าง
├── routes/
│   └── foods.js           ← ให้โครงสร้าง 70%
├── middleware/
│   └── logger.js          ← นักศึกษาสร้างเอง
└── public/
    └── index.html         ← ให้ HTML พื้นฐาน
```

### **🏗️ โครงสร้างที่ให้ (70%):**

#### **package.json:**
```json
{
  "name": "lab-4-2-food-api",
  "version": "1.0.0",
  "description": "Food Menu API with search and filtering",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "node test-api.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

#### **data/foods.json:**
```json
[
  {
    "id": 1,
    "name": "ผัดไทย",
    "category": "อาหารจานเดียว",
    "price": 120,
    "description": "เส้นหมี่ผัดรสเปรี้ยวหวาน",
    "spicyLevel": 2,
    "vegetarian": false,
    "available": true,
    "cookingTime": 15,
    "ingredients": ["เส้นหมี่", "กุ้ง", "ไข่", "ถั่วงอก", "หัวไชโป๊ว"]
  },
  {
    "id": 2,
    "name": "ต้มยำกุ้ง",
    "category": "แกง",
    "price": 180,
    "description": "ต้มยำรสเปรี้ยวเผ็ด",
    "spicyLevel": 4,
    "vegetarian": false,
    "available": true,
    "cookingTime": 20,
    "ingredients": ["กุ้ง", "เห็ด", "มะนาว", "พริกขี้หนู", "ใบมะกรูด"]
  },
  {
    "id": 3,
    "name": "แกงเขียวหวานไก่",
    "category": "แกง",
    "price": 150,
    "description": "แกงเขียวหวานรสชาติเข้มข้น",
    "spicyLevel": 3,
    "vegetarian": false,
    "available": false,
    "cookingTime": 25,
    "ingredients": ["ไก่", "พริกเขียว", "กะทิ", "มะเขือ", "ใบโหระพา"]
  },
  {
    "id": 4,
    "name": "ส้มตำ",
    "category": "ยำ",
    "price": 80,
    "description": "ส้มตำไทยแท้รสจัดจ้าน",
    "spicyLevel": 5,
    "vegetarian": true,
    "available": true,
    "cookingTime": 10,
    "ingredients": ["มะละกอ", "มะเขือเทศ", "ถั่วฝักยาว", "พริกขี้หนู"]
  },
  {
    "id": 5,
    "name": "มะม่วงข้าวเหนียว",
    "category": "ของหวาน",
    "price": 90,
    "description": "ของหวานไทยคลาสสิค",
    "spicyLevel": 0,
    "vegetarian": true,
    "available": true,
    "cookingTime": 5,
    "ingredients": ["มะม่วง", "ข้าวเหนียว", "กะทิ", "เกลือ", "น้ำตาล"]
  }
]
```

#### **server.js (โครงสร้าง 70%):**
```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');

// TODO: import foodRoutes จาก './routes/foods'
// TODO: import logger middleware จาก './middleware/logger'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// TODO: ใช้ logger middleware

// Routes
app.get('/', (req, res) => {
    res.json({
        message: '🍜 Welcome to Food API!',
        version: '1.0.0',
        endpoints: {
            foods: '/api/foods',
            search: '/api/foods?search=ผัด',
            category: '/api/foods?category=แกง',
            spicy: '/api/foods?maxSpicy=3',
            vegetarian: '/api/foods?vegetarian=true',
            documentation: '/api/docs'
        }
    });
});

// TODO: ใช้ foodRoutes สำหรับ '/api/foods'

// TODO: สร้าง route GET /api/docs
// ส่งข้อมูล API documentation

// TODO: สร้าง route GET /api/stats  
// ส่งสถิติต่างๆ เช่น จำนวนเมนูทั้งหมด, จำนวนแต่ละหมวด, etc.

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        requestedUrl: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Food API Server running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});
```

#### **routes/foods.js (โครงสร้าง 70%):**
```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const FOODS_FILE = path.join(__dirname, '../data/foods.json');

// Helper function: อ่านข้อมูลอาหาร
const loadFoods = () => {
    try {
        const data = fs.readFileSync(FOODS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading foods:', error);
        return [];
    }
};

// GET /api/foods - ดึงรายการอาหารทั้งหมด (พร้อม filtering)
router.get('/', (req, res) => {
    try {
        let foods = loadFoods();
        
        // TODO: เพิ่ม query parameters สำหรับ filtering:
        // - search: ค้นหาจากชื่อหรือคำอธิบาย
        // - category: กรองตามประเภทอาหาร
        // - maxSpicy: กรองระดับความเผ็ดไม่เกินที่กำหนด
        // - vegetarian: กรองอาหารมังสวิรัติ (true/false)
        // - available: กรองอาหารที่พร้อมเสิร์ฟ (true/false)
        // - maxPrice: กรองราคาไม่เกินที่กำหนด
        
        const { search, category, maxSpicy, vegetarian, available, maxPrice } = req.query;
        
        // TODO: ทำ filtering logic ตาม query parameters
        
        res.json({
            success: true,
            data: foods,
            total: foods.length,
            filters: {
                search: search || null,
                category: category || null,
                maxSpicy: maxSpicy || null,
                vegetarian: vegetarian || null,
                available: available || null,
                maxPrice: maxPrice || null
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching foods'
        });
    }
});

// TODO: GET /api/foods/:id - ดึงข้อมูลอาหารตาม ID

// TODO: GET /api/foods/category/:category - ดึงอาหารตามประเภท

// TODO: GET /api/foods/random - ดึงอาหารแบบสุ่ม 1 จาน

module.exports = router;
```

#### **public/index.html:**
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food API Demo</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .endpoint { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
        button { background: #007bff; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; }
        button:hover { background: #0056b3; }
        #result { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; white-space: pre-wrap; }
    </style>
</head>
<body>
    <h1>🍜 Food API Demo</h1>
    
    <div class="endpoint">
        <h3>ทดสอบ API Endpoints:</h3>
        <button onclick="testAPI('/api/foods')">ดูเมนูทั้งหมด</button>
        <button onclick="testAPI('/api/foods?search=ผัด')">ค้นหา "ผัด"</button>
        <button onclick="testAPI('/api/foods?category=แกง')">หมวดแกง</button>
        <button onclick="testAPI('/api/foods?vegetarian=true')">อาหารมังสวิรัติ</button>
        <button onclick="testAPI('/api/foods/1')">เมนู ID 1</button>
        <button onclick="testAPI('/api/stats')">สถิติ</button>
    </div>
    
    <div id="result">คลิกปุ่มเพื่อทดสอบ API</div>
    
    <script>
        async function testAPI(endpoint) {
            try {
                document.getElementById('result').textContent = 'Loading...';
                const response = await fetch(endpoint);
                const data = await response.json();
                document.getElementById('result').textContent = JSON.stringify(data, null, 2);
            } catch (error) {
                document.getElementById('result').textContent = 'Error: ' + error.message;
            }
        }
    </script>
</body>
</html>
```

### **✅ งานที่นักศึกษาต้องทำ (30%):**

1. **เติม filtering logic** ใน routes/foods.js
2. **สร้าง middleware/logger.js** - log request information
3. **เพิ่ม routes ที่ขาดหาย** (/:id, /category/:category, /random)
4. **สร้าง /api/docs และ /api/stats endpoints**
5. **ทดสอบทุก endpoints** และแก้ไข bugs
6. **เขียน README.md** อธิบายการใช้งาน

### **📝 เกณฑ์การประเมิน Lab 4.2:**
- ✅ Filtering ทำงานได้ถูกต้องทุก parameters
- ✅ Logger middleware แสดงข้อมูล request
- ✅ Routes ทั้งหมดส่ง response ที่ถูกต้อง
- ✅ HTML demo page ทำงานได้
- ✅ API documentation สมบูรณ์

---

# Lab 4.3: รับข้อมูลจาก Form และบันทึกในไฟล์ (1.5 ชม.)

### **🎯 เป้าหมาย:** สร้าง Contact Form API พร้อม validation และ file storage

### **📁 โครงสร้างโปรเจค:**
```
lab-4-3-contact-form/
├── package.json
├── README.md
├── server.js               ← ให้โครงสร้าง 70%
├── data/
│   ├── contacts.json       ← นักศึกษาสร้างเอง
│   └── feedback.json       ← นักศึกษาสร้างเอง
├── middleware/
│   ├── validation.js       ← ให้โครงสร้าง 70%
│   └── fileManager.js      ← ให้โครงสร้าง 70%
├── routes/
│   ├── contact.js          ← นักศึกษาสร้างเอง
│   └── feedback.js         ← นักศึกษาสร้างเอง
└── public/
    ├── index.html          ← ให้ HTML form
    ├── style.css           ← ให้ CSS พื้นฐาน
    └── script.js           ← ให้โครงสร้าง 70%
```

---

## 🏗️ โครงสร้างที่ให้ (70%)

### **package.json:**
```json
{
  "name": "lab-4-3-contact-form",
  "version": "1.0.0",
  "description": "Contact Form API with file storage and validation",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "clean": "node scripts/clean-data.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "express-rate-limit": "^6.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### **server.js (โครงสร้าง 70%):**
```javascript
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

// TODO: import routes
// const contactRoutes = require('./routes/contact');
// const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests, please try again later'
    }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Apply rate limiting to API routes
app.use('/api', limiter);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// TODO: ใช้ contactRoutes สำหรับ '/api/contact'
// TODO: ใช้ feedbackRoutes สำหรับ '/api/feedback'

// API documentation
app.get('/api/docs', (req, res) => {
    res.json({
        title: 'Contact Form API Documentation',
        version: '1.0.0',
        endpoints: {
            'POST /api/contact': {
                description: 'Submit contact form',
                requiredFields: ['name', 'email', 'subject', 'message'],
                optionalFields: ['phone', 'company']
            },
            'GET /api/contact': {
                description: 'Get all contact submissions (admin)',
                parameters: {
                    page: 'Page number (default: 1)',
                    limit: 'Items per page (default: 10)'
                }
            },
            'POST /api/feedback': {
                description: 'Submit feedback',
                requiredFields: ['rating', 'comment'],
                optionalFields: ['email']
            },
            'GET /api/feedback/stats': {
                description: 'Get feedback statistics'
            }
        }
    });
});

// TODO: สร้าง route GET /api/status
// ส่งสถานะของ API และจำนวนข้อมูลที่เก็บไว้

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Contact Form API running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});
```

### **middleware/validation.js (โครงสร้าง 70%):**
```javascript
// Contact form validation
const validateContact = (req, res, next) => {
    const { name, email, subject, message, phone, company } = req.body;
    const errors = [];
    
    // TODO: ตรวจสอบ name
    // - ต้องมีค่า
    // - ต้องเป็น string
    // - ความยาวอย่างน้อย 2 ตัวอักษร
    // - ไม่เกิน 100 ตัวอักษร
    
    // TODO: ตรวจสอบ email
    // - ต้องมีค่า  
    // - ต้องเป็น email format ที่ถูกต้อง
    // - ใช้ regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    // TODO: ตรวจสอบ subject
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 5 ตัวอักษร
    // - ไม่เกิน 200 ตัวอักษร
    
    // TODO: ตรวจสอบ message
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 10 ตัวอักษร
    // - ไม่เกิน 1000 ตัวอักษร
    
    // TODO: ตรวจสอบ phone (optional)
    // - ถ้ามีค่า ต้องเป็นเบอร์โทรที่ถูกต้อง
    // - ใช้ regex: /^[0-9]{9,10}$/
    
    // TODO: ตรวจสอบ company (optional)
    // - ถ้ามีค่า ต้องไม่เกิน 100 ตัวอักษร
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    // Sanitize data
    req.body.name = req.body.name.trim();
    req.body.email = req.body.email.trim().toLowerCase();
    req.body.subject = req.body.subject.trim();
    req.body.message = req.body.message.trim();
    
    next();
};

// Feedback validation
const validateFeedback = (req, res, next) => {
    const { rating, comment, email } = req.body;
    const errors = [];
    
    // TODO: ตรวจสอบ rating
    // - ต้องมีค่า
    // - ต้องเป็นตัวเลข 1-5
    
    // TODO: ตรวจสอบ comment
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 5 ตัวอักษร
    // - ไม่เกิน 500 ตัวอักษร
    
    // TODO: ตรวจสอบ email (optional)
    // - ถ้ามีค่า ต้องเป็น email format ที่ถูกต้อง
    
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
    validateContact,
    validateFeedback
};
```

### **middleware/fileManager.js (โครงสร้าง 70%):**
```javascript
const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

// สร้างโฟลเดอร์ data ถ้าไม่มี
const ensureDataDir = async () => {
    try {
        await fs.access(DATA_DIR);
    } catch (error) {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }
};

// อ่านข้อมูลจากไฟล์
const readJsonFile = async (filename) => {
    try {
        await ensureDataDir();
        const filePath = path.join(DATA_DIR, filename);
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // TODO: ถ้าไฟล์ไม่มี ให้ return array ว่าง []
        return [];
    }
};

// เขียนข้อมูลลงไฟล์
const writeJsonFile = async (filename, data) => {
    try {
        await ensureDataDir();
        const filePath = path.join(DATA_DIR, filename);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing file:', error);
        return false;
    }
};

// เพิ่มข้อมูลใหม่ลงไฟล์
const appendToJsonFile = async (filename, newData) => {
    try {
        const existingData = await readJsonFile(filename);
        
        // TODO: เพิ่ม ID และ timestamp ให้ข้อมูลใหม่
        const dataWithId = {
            id: Date.now(),
            ...newData,
            createdAt: new Date().toISOString()
        };
        
        existingData.push(dataWithId);
        await writeJsonFile(filename, existingData);
        return dataWithId;
    } catch (error) {
        console.error('Error appending to file:', error);
        return null;
    }
};

// TODO: สร้างฟังก์ชัน getFileStats
// ส่งกลับจำนวนข้อมูลในแต่ละไฟล์

module.exports = {
    readJsonFile,
    writeJsonFile,
    appendToJsonFile
    // TODO: export getFileStats
};
```

### **public/index.html:**
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form API Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📞 Contact Form API Demo</h1>
            <p>ทดสอบการส่งข้อมูลผ่าน API</p>
        </header>

        <div class="forms-container">
            <!-- Contact Form -->
            <section class="form-section">
                <h2>ฟอร์มติดต่อเรา</h2>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">ชื่อ-นามสกุล *</label>
                        <input type="text" id="name" name="name" required>
                        <div class="error" id="nameError"></div>
                    </div>

                    <div class="form-group">
                        <label for="email">อีเมล *</label>
                        <input type="email" id="email" name="email" required>
                        <div class="error" id="emailError"></div>
                    </div>

                    <div class="form-group">
                        <label for="phone">เบอร์โทรศัพท์</label>
                        <input type="tel" id="phone" name="phone">
                        <div class="error" id="phoneError"></div>
                    </div>

                    <div class="form-group">
                        <label for="company">บริษัท/องค์กร</label>
                        <input type="text" id="company" name="company">
                    </div>

                    <div class="form-group">
                        <label for="subject">หัวเรื่อง *</label>
                        <input type="text" id="subject" name="subject" required>
                        <div class="error" id="subjectError"></div>
                    </div>

                    <div class="form-group">
                        <label for="message">ข้อความ *</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        <div class="error" id="messageError"></div>
                    </div>

                    <button type="submit" id="contactSubmit">ส่งข้อความ</button>
                </form>
            </section>

            <!-- Feedback Form -->
            <section class="form-section">
                <h2>ให้คะแนนและความคิดเห็น</h2>
                <form id="feedbackForm">
                    <div class="form-group">
                        <label for="rating">คะแนน (1-5) *</label>
                        <div class="rating-container">
                            <input type="range" id="rating" name="rating" min="1" max="5" value="3">
                            <span id="ratingValue">3</span> ⭐
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="comment">ความคิดเห็น *</label>
                        <textarea id="comment" name="comment" rows="3" required></textarea>
                        <div class="error" id="commentError"></div>
                    </div>

                    <div class="form-group">
                        <label for="feedbackEmail">อีเมล (ไม่บังคับ)</label>
                        <input type="email" id="feedbackEmail" name="email">
                    </div>

                    <button type="submit" id="feedbackSubmit">ส่งความคิดเห็น</button>
                </form>
            </section>
        </div>

        <!-- Status Messages -->
        <div id="statusMessages"></div>

        <!-- API Testing Section -->
        <section class="api-section">
            <h2>ทดสอบ API Endpoints</h2>
            <div class="api-buttons">
                <button onclick="loadContacts()">📋 ดูข้อมูลติดต่อ</button>
                <button onclick="loadFeedbackStats()">📊 สถิติความคิดเห็น</button>
                <button onclick="loadAPIStatus()">⚡ สถานะ API</button>
                <button onclick="loadAPIDocs()">📖 เอกสาร API</button>
            </div>
            <div id="apiResults"></div>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### **public/style.css:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
    color: white;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.forms-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 30px;
}

.form-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.form-section h2 {
    color: #5a67d8;
    margin-bottom: 20px;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 10px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #4a5568;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #5a67d8;
    box-shadow: 0 0 0 3px rgba(90, 103, 216, 0.1);
}

input.valid {
    border-color: #38a169;
}

input.invalid {
    border-color: #e53e3e;
}

.rating-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="range"] {
    flex: 1;
}

#ratingValue {
    font-weight: bold;
    color: #5a67d8;
}

button {
    background: linear-gradient(135deg, #5a67d8, #667eea);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(90, 103, 216, 0.3);
}

button:disabled {
    background: #a0aec0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.error {
    color: #e53e3e;
    font-size: 14px;
    margin-top: 5px;
    min-height: 20px;
}

.success {
    color: #38a169;
    font-size: 14px;
    margin-top: 5px;
}

#statusMessages {
    margin-bottom: 30px;
}

.status-message {
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    animation: slideIn 0.3s ease;
}

.status-message.success {
    background: #c6f6d5;
    border: 1px solid #38a169;
    color: #1a202c;
}

.status-message.error {
    background: #fed7d7;
    border: 1px solid #e53e3e;
    color: #1a202c;
}

.status-message.info {
    background: #bee3f8;
    border: 1px solid #3182ce;
    color: #1a202c;
}

.api-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.api-section h2 {
    color: #5a67d8;
    margin-bottom: 20px;
}

.api-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.api-buttons button {
    background: linear-gradient(135deg, #38a169, #4fd1c7);
    font-size: 14px;
    padding: 10px 16px;
}

#apiResults {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
    white-space: pre-wrap;
    font-family: 'Courier New', monospace;
    font-size: 14px;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .forms-container {
        grid-template-columns: 1fr;
    }
    
    .api-buttons {
        flex-direction: column;
    }
    
    .api-buttons button {
        width: 100%;
    }
}
```

### **public/script.js (โครงสร้าง 70%):**
```javascript
// Global variables
let isSubmitting = false;

// DOM Elements
const contactForm = document.getElementById('contactForm');
const feedbackForm = document.getElementById('feedbackForm');
const statusMessages = document.getElementById('statusMessages');
const apiResults = document.getElementById('apiResults');
const ratingSlider = document.getElementById('rating');
const ratingValue = document.getElementById('ratingValue');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeForms();
    setupEventListeners();
});

function initializeForms() {
    // Update rating display
    ratingSlider.addEventListener('input', () => {
        ratingValue.textContent = ratingSlider.value;
    });
}

function setupEventListeners() {
    // Contact form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await submitContactForm();
    });

    // Feedback form submission
    feedbackForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await submitFeedbackForm();
    });

    // TODO: เพิ่ม real-time validation สำหรับ input fields
    // ใช้ addEventListener กับ 'input' event
}

// TODO: สร้างฟังก์ชัน validateField สำหรับ client-side validation
function validateField(fieldName, value) {
    // ตรวจสอบ field แต่ละประเภท
    // return { isValid: boolean, message: string }
}

async function submitContactForm() {
    if (isSubmitting) return;
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
        isSubmitting = true;
        updateSubmitButton('contactSubmit', 'กำลังส่ง...', true);
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showStatusMessage('✅ ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็ว', 'success');
            contactForm.reset();
        } else {
            showStatusMessage(`❌ เกิดข้อผิดพลาด: ${result.message}`, 'error');
            if (result.errors) {
                displayValidationErrors(result.errors);
            }
        }
    } catch (error) {
        showStatusMessage('❌ เกิดข้อผิดพลาดในการเชื่อมต่อ', 'error');
        console.error('Error:', error);
    } finally {
        isSubmitting = false;
        updateSubmitButton('contactSubmit', 'ส่งข้อความ', false);
    }
}

async function submitFeedbackForm() {
    if (isSubmitting) return;
    
    const formData = new FormData(feedbackForm);
    const data = Object.fromEntries(formData.entries());
    data.rating = parseInt(data.rating);
    
    try {
        isSubmitting = true;
        updateSubmitButton('feedbackSubmit', 'กำลังส่ง...', true);
        
        // TODO: ส่งข้อมูลไปยัง /api/feedback endpoint
        // ใช้ fetch API
        
        // TODO: จัดการ response และแสดงผลลัพธ์
        
    } catch (error) {
        showStatusMessage('❌ เกิดข้อผิดพลาดในการเชื่อมต่อ', 'error');
        console.error('Error:', error);
    } finally {
        isSubmitting = false;
        updateSubmitButton('feedbackSubmit', 'ส่งความคิดเห็น', false);
    }
}

function showStatusMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `status-message ${type}`;
    messageDiv.textContent = message;
    
    statusMessages.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function updateSubmitButton(buttonId, text, disabled) {
    const button = document.getElementById(buttonId);
    button.textContent = text;
    button.disabled = disabled;
}

function displayValidationErrors(errors) {
    errors.forEach(error => {
        showStatusMessage(`🔸 ${error}`, 'error');
    });
}

// API Testing Functions
async function loadContacts() {
    try {
        // TODO: เรียก GET /api/contact และแสดงผลลัพธ์
        apiResults.textContent = 'Loading contacts...';
        
    } catch (error) {
        apiResults.textContent = 'Error loading contacts: ' + error.message;
    }
}

async function loadFeedbackStats() {
    try {
        // TODO: เรียก GET /api/feedback/stats และแสดงผลลัพธ์
        apiResults.textContent = 'Loading feedback stats...';
        
    } catch (error) {
        apiResults.textContent = 'Error loading feedback stats: ' + error.message;
    }
}

async function loadAPIStatus() {
    try {
        // TODO: เรียก GET /api/status และแสดงผลลัพธ์
        apiResults.textContent = 'Loading API status...';
        
    } catch (error) {
        apiResults.textContent = 'Error loading API status: ' + error.message;
    }
}

async function loadAPIDocs() {
    try {
        const response = await fetch('/api/docs');
        const data = await response.json();
        apiResults.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        apiResults.textContent = 'Error loading API docs: ' + error.message;
    }
}
```

---

## ✅ งานที่นักศึกษาต้องทำ (30%)

### **1. เติม validation logic ใน middleware/validation.js:**
- เพิ่มการตรวจสอบทุก field ตาม TODO comments
- ใช้ regular expressions สำหรับ email และ phone
- เพิ่ม error messages ที่เหมาะสม

### **2. เติมฟังก์ชันใน middleware/fileManager.js:**
- เพิ่ม ID และ timestamp ในฟังก์ชัน appendToJsonFile
- สร้างฟังก์ชัน getFileStats ที่ส่งกลับจำนวนข้อมูลในแต่ละไฟล์

### **3. สร้าง routes/contact.js:**
```javascript
// โครงสร้างพื้นฐานที่ต้องมี:
// POST /api/contact - บันทึกข้อมูลติดต่อ
// GET /api/contact - ดึงข้อมูลติดต่อทั้งหมด (พร้อม pagination)
```

### **4. สร้าง routes/feedback.js:**
```javascript
// โครงสร้างพื้นฐานที่ต้องมี:
// POST /api/feedback - บันทึกความคิดเห็น
// GET /api/feedback/stats - ดึงสถิติความคิดเห็น
```

### **5. เติมฟังก์ชันใน public/script.js:**
- เพิ่ม real-time validation สำหรับ input fields
- เติมฟังก์ชัน submitFeedbackForm ให้สมบูรณ์
- เติมฟังก์ชัน loadContacts, loadFeedbackStats, loadAPIStatus

### **6. สร้าง data files:**
- สร้างไฟล์ data/contacts.json เป็น array ว่าง []
- สร้างไฟล์ data/feedback.json เป็น array ว่าง []

### **7. เติม server.js:**
- import และใช้ routes ที่สร้าง
- เพิ่ม route GET /api/status

---

## 📝 เกณฑ์การประเมิน Lab 4.3

### **ฟีเจอร์หลัก (70 คะแนน):**
- ✅ Contact form validation ทำงานได้ถูกต้อง (20 คะแนน)
- ✅ Feedback form ทำงานได้สมบูรณ์ (15 คะแนน)
- ✅ File storage บันทึกข้อมูลได้ (15 คะแนน)
- ✅ API endpoints ตอบสนองถูกต้อง (20 คะแนน)

### **ฟีเจอร์เสริม (20 คะแนน):**
- ✅ Real-time validation ใน frontend (10 คะแนน)
- ✅ API testing interface ใช้งานได้ (10 คะแนน)

### **คุณภาพโค้ดและเอกสาร (10 คะแนน):**
- ✅ README.md อธิบายการใช้งานชัดเจน (5 คะแนน)
- ✅ Code มีความเป็นระเบียบและ comment (5 คะแนน)

---

## 🚀 วิธีการทดสอบ

### **1. การรันโปรเจค:**
```bash
npm install
npm run dev
```

### **2. ทดสอบผ่าน Browser:**
- เปิด http://localhost:3000
- กรอกฟอร์มทั้งสอง
- ทดสอบ validation แบบต่างๆ
- ใช้ปุ่ม API testing

### **3. ทดสอบด้วย curl:**
```bash
# ทดสอบ Contact API
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ทดสอบ นามสกุล",
    "email": "test@email.com",
    "subject": "ทดสอบระบบ",
    "message": "นี่คือข้อความทดสอบระบบ"
  }'

# ทดสอบ Feedback API
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "comment": "ระบบใช้งานง่ายมาก"
  }'

# ดูข้อมูลที่บันทึก
curl http://localhost:3000/api/contact
curl http://localhost:3000/api/feedback/stats
```

---

## 💡 เคล็ดลับสำหรับนักศึกษา

### **1. การ Debug:**
- ใช้ console.log เพื่อตรวจสอบข้อมูลที่ส่งมา
- ดูไฟล์ data/*.json ว่าบันทึกข้อมูลถูกต้องไหม
- ใช้ Developer Tools ใน browser ดู Network tab

### **2. การเขียน Validation:**
```javascript
// ตัวอย่าง email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    errors.push('รูปแบบอีเมลไม่ถูกต้อง');
}
```

### **3. การจัดการ Error:**
```javascript
try {
    // โค้ดที่อาจเกิด error
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({
        success: false,
        message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์'
    });
}
```

---

## 🎯 ผลลัพธ์ที่คาดหวัง

หลังจากทำ Lab 4.3 เสร็จ นักศึกษาจะได้:

### **ทักษะด้านเทคนิค:**
- การทำ form validation ทั้ง client-side และ server-side
- การบันทึกข้อมูลลงไฟล์ด้วย Node.js
- การสร้าง REST API endpoints
- การจัดการ middleware ใน Express.js

### **ความเข้าใจ:**
- การทำงานร่วมกันของ Frontend และ Backend
- หลักการ validation และความปลอดภัย
- การจัดการข้อมูลแบบ persistent storage
- การออกแบบ API ที่ใช้งานง่าย

### **โปรเจคที่ใช้งานได้จริง:**
- Contact form ที่สมบูรณ์พร้อม validation
- Feedback system ที่บันทึกและแสดงสถิติได้
- API documentation ที่เข้าใจง่าย
- User interface ที่ responsive และใช้งานง่าย

---

## 📚 การบ้านและการส่งงาน

### **ข้อกำหนดการส่ง:**
1. **GitHub Repository** พร้อม README.md ที่สมบูรณ์
2. **Demo Video** แสดงการใช้งานฟีเจอร์ต่างๆ (3-5 นาที)
3. **Screenshot** ของการทำงานแต่ละฟีเจอร์
4. **Code ที่ clean และมี comments** อธิบายส่วนสำคัญ

### **Bonus Features (คะแนนเพิ่ม):**
- เพิ่ม pagination ใน contact list
- เพิ่ม search/filter ในการดูข้อมูล
- เพิ่ม email notification (simulation)
- เพิ่ม dark/light theme toggle
- เพิ่ม input การอัพโหลดไฟล์

### **กำหนดส่ง:** สัปดาห์ถัดไป (ตามที่ประกาศ)

**มั่นใจและสร้างสรรค์ API ที่ยอดเยี่ยม! 🌟**
