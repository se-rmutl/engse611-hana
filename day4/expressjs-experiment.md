# Lab Experiments: Express.js สำหรับสร้างเว็บเซิร์ฟเวอร์
## หัวข้อที่ 2: ทดลองระหว่างการเรียนการสอน

---

## 🧪 Lab 2.1: สร้าง Express Server แรก (15 นาที)

### **🎯 เป้าหมาย:** เปรียบเทียบ HTTP Module กับ Express.js

### **Step 1: เตรียมโปรเจค**
```bash
mkdir express-lab
cd express-lab
npm init -y
npm install express
```

### **Step 2: HTTP Module (ไฟล์: http-server.js)**
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    if (req.url === '/') {
        res.end('<h1>หน้าแรก - HTTP Module</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>เกี่ยวกับเรา - HTTP Module</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>ไม่พบหน้า 404</h1>');
    }
});

server.listen(3000, () => {
    console.log('HTTP Server: http://localhost:3000');
});
```

### **Step 3: Express.js (ไฟล์: express-server.js)**
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>หน้าแรก - Express.js</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>เกี่ยวกับเรา - Express.js</h1>');
});

app.listen(3001, () => {
    console.log('Express Server: http://localhost:3001');
});
```

### **🔍 ทดลองและสังเกต:**
```bash
# ทดสอบ HTTP Module
node http-server.js

# ทดสอบ Express (terminal ใหม่)
node express-server.js
```

### **💡 คำถามสำหรับสังเกต:**
1. **บรรทัดโค้ด:** HTTP Module กี่บรรทัด? Express กี่บรรทัด?
2. **ความซับซ้อน:** แบบไหนอ่านเข้าใจง่ายกว่า?
3. **การเพิ่ม route ใหม่:** แบบไหนเพิ่มง่ายกว่า?

### **🎓 สิ่งที่เรียนรู้:**
- Express.js ทำให้โค้ดสั้นลงและอ่านง่ายขึ้น
- การจัดการ routing ใน Express ง่ายกว่า HTTP Module
- Express มี built-in features ที่ช่วยลดความซับซ้อน

---

## 🧪 Lab 2.2: ทดลอง Routing และ Parameters (20 นาที)

### **🎯 เป้าหมาย:** เข้าใจ routing patterns และ parameters

### **Step 1: Basic Routing (ไฟล์: routing-demo.js)**
```javascript
const express = require('express');
const app = express();

// หน้าแรก
app.get('/', (req, res) => {
    res.send('<h1>🏠 หน้าแรก</h1><a href="/products">ดูสินค้า</a>');
});

// รายการสินค้า
app.get('/products', (req, res) => {
    res.send(`
        <h1>📦 รายการสินค้า</h1>
        <ul>
            <li><a href="/products/1">iPhone</a></li>
            <li><a href="/products/2">Samsung</a></li>
            <li><a href="/products/3">Xiaomi</a></li>
        </ul>
    `);
});

// สินค้าแต่ละชิ้น
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const products = {
        '1': 'iPhone 15 Pro',
        '2': 'Samsung Galaxy S24',
        '3': 'Xiaomi 14'
    };
    
    const productName = products[productId] || 'ไม่พบสินค้า';
    res.send(`<h1>📱 ${productName}</h1><p>รหัสสินค้า: ${productId}</p>`);
});

app.listen(3000, () => {
    console.log('🚀 Server: http://localhost:3000');
});
```

### **🔍 ทดลองและสังเกต:**
```bash
node routing-demo.js
```
**ทดสอบ URLs:**
- `http://localhost:3000/`
- `http://localhost:3000/products`
- `http://localhost:3000/products/1`
- `http://localhost:3000/products/999` (ไม่มีสินค้า)

### **Step 2: Query Parameters**
เพิ่มโค้ดนี้ใน routing-demo.js:
```javascript
// ค้นหาสินค้า
app.get('/search', (req, res) => {
    const query = req.query.q;
    const category = req.query.category;
    
    res.send(`
        <h1>🔍 ผลการค้นหา</h1>
        <p>คำค้นหา: <strong>${query || 'ไม่ได้ระบุ'}</strong></p>
        <p>หมวดหมู่: <strong>${category || 'ทั้งหมด'}</strong></p>
        <a href="/search?q=phone&category=electronics">ลองค้นหา phone</a>
    `);
});
```

### **🔍 ทดสอบเพิ่มเติม:**
- `http://localhost:3000/search`
- `http://localhost:3000/search?q=phone`
- `http://localhost:3000/search?q=phone&category=electronics`

### **💡 คำถามสำหรับสังเกต:**
1. **req.params vs req.query:** ต่างกันอย่างไร?
2. **URL patterns:** `/products/:id` หมายความว่าอย่างไร?
3. **Dynamic content:** ข้อมูลเปลี่ยนแปลงตาม URL ได้อย่างไร?

---

## 🧪 Lab 2.3: ทดลอง Middleware (25 นาที)

### **🎯 เป้าหมาย:** เข้าใจการทำงานของ middleware

### **Step 1: Basic Middleware (ไฟล์: middleware-demo.js)**
```javascript
const express = require('express');
const app = express();

// Middleware 1: Logger
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString('th-TH');
    console.log(`📅 ${timestamp} - ${req.method} ${req.url}`);
    next(); // สำคัญมาก! ต้องเรียก next()
});

// Middleware 2: ตรวจสอบเวลา
app.use((req, res, next) => {
    const hour = new Date().getHours();
    req.timeOfDay = hour < 12 ? 'เช้า' : hour < 18 ? 'บ่าย' : 'เย็น';
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send(`<h1>สวัสดี${req.timeOfDay}! 👋</h1>`);
});

app.get('/time', (req, res) => {
    res.send(`<h1>ตอนนี้เป็นช่วง${req.timeOfDay}</h1>`);
});

app.listen(3000, () => {
    console.log('🚀 Server: http://localhost:3000');
});
```

### **🔍 ทดลองและสังเกต:**
```bash
node middleware-demo.js
```
**สังเกต console output และทดสอบ:**
- `http://localhost:3000/`
- `http://localhost:3000/time`

### **Step 2: ทดลองลืม next()**
แก้ไข middleware แรก:
```javascript
// ลองเอา next() ออก
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString('th-TH');
    console.log(`📅 ${timestamp} - ${req.method} ${req.url}`);
    // next(); // ← comment บรรทัดนี้
});
```

### **🔍 สังเกต:** เกิดอะไรขึ้นเมื่อไม่มี next()?

### **Step 3: Route-specific Middleware**
เพิ่มโค้ด:
```javascript
// Middleware เฉพาะ admin
const checkAdmin = (req, res, next) => {
    const isAdmin = req.query.admin === 'true';
    if (!isAdmin) {
        return res.send('<h1>❌ ไม่มีสิทธิ์เข้าถึง</h1>');
    }
    next();
};

// Route ที่ต้องการสิทธิ์ admin
app.get('/admin', checkAdmin, (req, res) => {
    res.send('<h1>✅ ยินดีต้อนรับ Admin!</h1>');
});
```

### **🔍 ทดสอบ:**
- `http://localhost:3000/admin` (ไม่มีสิทธิ์)
- `http://localhost:3000/admin?admin=true` (มีสิทธิ์)

### **💡 คำถามสำหรับสังเกต:**
1. **Middleware order:** ลำดับ middleware สำคัญไหม?
2. **next() function:** เกิดอะไรขึ้นถ้าไม่เรียก next()?
3. **Request object:** middleware สามารถเพิ่มข้อมูลให้ req ได้ไหม?

---

## 🧪 Lab 2.4: JSON และ POST Requests (20 นาที)

### **🎯 เป้าหมาย:** เข้าใจการรับและส่ง JSON data

### **Step 1: JSON API (ไฟล์: json-demo.js)**
```javascript
const express = require('express');
const app = express();

// Middleware สำหรับ parse JSON
app.use(express.json());

// ข้อมูลจำลอง
let students = [
    { id: 1, name: 'สมชาย', grade: 'A' },
    { id: 2, name: 'สมหญิง', grade: 'B+' }
];

// GET: ดึงข้อมูลนักเรียนทั้งหมด
app.get('/api/students', (req, res) => {
    res.json({
        success: true,
        data: students,
        total: students.length
    });
});

// GET: ดึงข้อมูลนักเรียนตาม ID
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    
    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบนักเรียน'
        });
    }
    
    res.json({
        success: true,
        data: student
    });
});

// POST: เพิ่มนักเรียนใหม่
app.post('/api/students', (req, res) => {
    const { name, grade } = req.body;
    
    // Validation
    if (!name || !grade) {
        return res.status(400).json({
            success: false,
            message: 'กรุณาระบุชื่อและเกรด'
        });
    }
    
    const newStudent = {
        id: students.length + 1,
        name,
        grade
    };
    
    students.push(newStudent);
    
    res.status(201).json({
        success: true,
        message: 'เพิ่มนักเรียนสำเร็จ',
        data: newStudent
    });
});

// หน้า HTML สำหรับทดสอบ
app.get('/', (req, res) => {
    res.send(`
        <h1>🎓 Student API</h1>
        <h3>ทดสอบ API:</h3>
        <ul>
            <li><a href="/api/students">GET /api/students</a></li>
            <li><a href="/api/students/1">GET /api/students/1</a></li>
            <li>POST /api/students (ใช้ Postman หรือ curl)</li>
        </ul>
    `);
});

app.listen(3000, () => {
    console.log('🚀 JSON API Server: http://localhost:3000');
});
```

### **🔍 ทดลองและสังเกต:**

#### **GET Requests:**
```bash
node json-demo.js
```
- `http://localhost:3000/api/students`
- `http://localhost:3000/api/students/1`
- `http://localhost:3000/api/students/999`

#### **POST Request (ใช้ curl):**
```bash
# เพิ่มนักเรียนใหม่
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"สมปอง","grade":"A+"}'

# ทดสอบ validation
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"สมศรี"}'
```

### **💡 คำถามสำหรับสังเกต:**
1. **express.json():** ทำไมต้องมี middleware นี้?
2. **Status codes:** 200, 201, 400, 404 ใช้เมื่อไหร่?
3. **req.body:** ข้อมูลมาจากไหน?

---

## 🧪 Lab 2.5: Static Files และ CORS (15 นาที)

### **🎯 เป้าหมาย:** เข้าใจการเสิร์ฟไฟล์และแก้ปัญหา CORS

### **Step 1: Static Files (ไฟล์: static-demo.js)**
```javascript
const express = require('express');
const path = require('path');
const app = express();

// Middleware สำหรับ static files
app.use(express.static('public'));

// API endpoint
app.get('/api/message', (req, res) => {
    res.json({ 
        message: 'สวัสดีจาก API!',
        timestamp: new Date().toISOString()
    });
});

app.listen(3000, () => {
    console.log('🚀 Static Server: http://localhost:3000');
});
```

### **Step 2: สร้างไฟล์ Static**
```bash
mkdir public
```

**public/index.html:**
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>Static Files Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🌟 Static Files Demo</h1>
    <button onclick="callAPI()">เรียก API</button>
    <div id="result"></div>
    
    <script src="script.js"></script>
</body>
</html>
```

**public/style.css:**
```css
body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 50px;
}

button {
    background: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#result {
    margin-top: 20px;
    padding: 20px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
}
```

**public/script.js:**
```javascript
async function callAPI() {
    try {
        const response = await fetch('/api/message');
        const data = await response.json();
        
        document.getElementById('result').innerHTML = `
            <h3>📡 ข้อมูลจาก API:</h3>
            <p>${data.message}</p>
            <small>เวลา: ${data.timestamp}</small>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = 
            '<p>❌ เกิดข้อผิดพลาด: ' + error.message + '</p>';
    }
}
```

### **🔍 ทดลองและสังเกต:**
```bash
node static-demo.js
```
- `http://localhost:3000/` (index.html)
- `http://localhost:3000/style.css`
- `http://localhost:3000/script.js`
- กดปุ่ม "เรียก API" และสังเกต

### **Step 3: CORS Demo**
สร้างไฟล์ใหม่: **cors-demo.js**
```javascript
const express = require('express');
const cors = require('cors'); // npm install cors

const app = express();

// ✅ เปิด CORS
app.use(cors());
app.use(express.json());

app.get('/api/external', (req, res) => {
    res.json({ 
        message: 'ข้อมูลจาก External API',
        timestamp: new Date().toISOString()
    });
});

app.listen(3001, () => {
    console.log('🌐 CORS API Server: http://localhost:3001');
});
```

เพิ่มใน public/script.js:
```javascript
async function testCORS() {
    try {
        // เรียก API จาก port อื่น
        const response = await fetch('http://localhost:3001/api/external');
        const data = await response.json();
        console.log('CORS success:', data);
    } catch (error) {
        console.error('CORS error:', error);
    }
}

// เรียกทดสอบ
testCORS();
```

### **💡 คำถามสำหรับสังเกต:**
1. **Static files:** Express หาไฟล์จากโฟลเดอร์ไหน?
2. **CORS:** เกิดอะไรขึ้นถ้าไม่เปิด CORS?
3. **Same-origin policy:** คืออะไร?

---

## 🧪 Lab 2.6: Error Handling (10 นาที)

### **🎯 เป้าหมาย:** เข้าใจการจัดการ errors

### **Step 1: Error Demo (ไฟล์: error-demo.js)**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

// Route ที่อาจเกิด error
app.get('/api/divide/:a/:b', (req, res, next) => {
    try {
        const a = parseFloat(req.params.a);
        const b = parseFloat(req.params.b);
        
        if (isNaN(a) || isNaN(b)) {
            const error = new Error('กรุณาใส่ตัวเลข');
            error.status = 400;
            throw error;
        }
        
        if (b === 0) {
            const error = new Error('ไม่สามารถหารด้วยศูนย์ได้');
            error.status = 400;
            throw error;
        }
        
        const result = a / b;
        res.json({ 
            success: true,
            calculation: `${a} ÷ ${b} = ${result}`,
            result: result 
        });
        
    } catch (error) {
        next(error); // ส่งต่อไป error handler
    }
});

// Route ที่ทำให้ server crash (สำหรับทดสอบ)
app.get('/api/crash', (req, res) => {
    // ❌ ไม่มี try-catch
    const data = JSON.parse('invalid json'); // จะ error!
    res.json(data);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('💥 Error:', err.message);
    
    const statusCode = err.status || 500;
    const message = err.message || 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์';
    
    res.status(statusCode).json({
        success: false,
        error: message,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'ไม่พบหน้าที่ค้นหา',
        path: req.originalUrl
    });
});

app.listen(3000, () => {
    console.log('🚀 Error Demo Server: http://localhost:3000');
});
```

### **🔍 ทดลองและสังเกต:**
```bash
node error-demo.js
```

**ทดสอบ scenarios:**
- `http://localhost:3000/api/divide/10/2` (สำเร็จ)
- `http://localhost:3000/api/divide/abc/2` (error: ไม่ใช่ตัวเลข)
- `http://localhost:3000/api/divide/10/0` (error: หารด้วยศูนย์)
- `http://localhost:3000/api/crash` (server error)
- `http://localhost:3000/nonexist` (404 error)

### **💡 คำถามสำหรับสังเกต:**
1. **try-catch vs error middleware:** ต่างกันอย่างไร?
2. **Error status codes:** เมื่อไหร่ควรใช้ 400, 404, 500?
3. **next(error):** ทำอะไร?

---

## 📝 สรุป Labs และการเรียนรู้

### **🎯 สิ่งที่ได้จาก Labs:**

#### **Lab 2.1:** Express vs HTTP Module
- Express.js ทำให้โค้ดสั้นและเข้าใจง่ายกว่า
- การจัดการ routing ใน Express มีประสิทธิภาพกว่า

#### **Lab 2.2:** Routing และ Parameters  
- Route parameters (:id) สำหรับ dynamic URLs
- Query parameters (?q=value) สำหรับ filtering/searching

#### **Lab 2.3:** Middleware
- Middleware ทำงานเป็นลำดับ (order matters)
- next() function สำคัญมากในการส่งต่อ control
- สามารถเพิ่มข้อมูลให้ request object ได้

#### **Lab 2.4:** JSON และ POST
- express.json() จำเป็นสำหรับ parse JSON data
- Status codes มีความหมายและใช้งานแตกต่างกัน
- Validation สำคัญสำหรับ API security

#### **Lab 2.5:** Static Files และ CORS
- express.static() ทำให้เสิร์ฟไฟล์ได้ง่าย
- CORS จำเป็นสำหรับ cross-origin requests
- Frontend และ Backend สามารถทำงานร่วมกันได้

#### **Lab 2.6:** Error Handling
- Error handling middleware มี signature พิเศษ (4 parameters)
- try-catch ควรใช้กับ synchronous operations
- next(error) ส่ง errors ไป global error handler

### **🔧 Skills ที่พัฒนาแล้ว:**
✅ สร้าง Express server และ routing  
✅ เขียน middleware functions  
✅ จัดการ JSON data และ HTTP methods  
✅ เสิร์ฟ static files  
✅ แก้ปัญหา CORS  
✅ จัดการ errors อย่างเป็นระบบ  

### **🚀 พร้อมสำหรับขั้นตอนต่อไป:**
หัวข้อที่ 3: **การทำงานกับข้อมูล JSON และ API ง่ายๆ**
- REST API design patterns
- File-based data storage  
- Complete CRUD operations
- Advanced validation และ error handling

**ตอนนี้คุณมีพื้นฐาน Express.js ที่แข็งแกร่งแล้ว! 💪**