# หัวข้อที่ 2: Express.js สำหรับสร้างเว็บเซิร์ฟเวอร์
## วันที่ 4: Node.js และ Express.js เบื้องต้น
### สำหรับนักศึกษาวิศวกรรมซอฟต์แวร์ (3 ชั่วโมง)

---

## สไลด์ 19: ยินดีต้อนรับสู่ Express.js! 🚀

### **เราเพิ่งเรียนจบ:**
✅ **Node.js HTTP Module** - สร้างเซิร์ฟเวอร์พื้นฐาน  
✅ **NPM และ Modules** - การจัดการ package และโค้ด  
✅ **Built-in APIs** - fs, path, os สำหรับระบบ  

### **แต่พบปัญหา... 😫**
```javascript
// HTTP Module = โค้ดยาว ซับซ้อน
const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        // 20 บรรทัดเพื่อส่ง JSON
    } else if (req.url === '/users' && req.method === 'POST') {
        // 30 บรรทัดเพื่อรับข้อมูล
    } else if (req.url.match(/\/users\/\d+/) && req.method === 'DELETE') {
        // 25 บรรทัดเพื่อลบข้อมูล
    }
    // ... และอีกมากมาย 🤯
});
```

### **Express.js มาแก้ปัญหา! 💡**
```javascript
// Express = สั้น เข้าใจง่าย ทันสมัย
app.get('/users', (req, res) => res.json(users));
app.post('/users', (req, res) => { /* สร้างผู้ใช้ */ });
app.delete('/users/:id', (req, res) => { /* ลบผู้ใช้ */ });
```

### **คำถามเปิดใจ:**
*"ถ้า HTTP Module เป็นการขับรถธรรมดา Express.js คืออะไร?"*

**มาค้นหาคำตอบไปด้วยกัน! 🎯**

---

## สไลด์ 20: Express.js คืออะไร? 🤔

### **คำจำกัดความง่ายๆ:**
> **Express.js = Web Framework ที่ทำให้การสร้างเซิร์ฟเวอร์ง่ายขึ้น**

### **เปรียบเทียบให้เข้าใจ:**
```
🏗️ Node.js HTTP Module
├── เหมือนการสร้างบ้านด้วยมือเปล่า
├── ต้องทำทุกอย่างเอง
├── ใช้เวลานาน
└── ผิดพลาดง่าย

🏢 Express.js Framework  
├── เหมือนการใช้เครื่องมือก่อสร้างที่สมบูรณ์
├── มีแม่แบบและเครื่องมือพร้อม
├── ทำได้เร็ว
└── มาตรฐานและปลอดภัย
```

### **ตัวเลขน่าทึ่ง:**
- **30+ ล้าน downloads ต่อสัปดาห์**
- **#1 Node.js Web Framework**
- **ใช้โดย 65%+ ของ Node.js developers**
- **GitHub stars 60,000+**

### **บริษัทใหญ่ที่ใช้ Express.js:**
🏢 **Netflix** - API สำหรับ streaming  
🏢 **Uber** - Backend services  
🏢 **WhatsApp** - Messaging infrastructure  
🏢 **IBM** - Enterprise applications  
🏢 **Accenture** - Client projects  

### **คำถามคิดตาม:**
*"ถ้าบริษัทระดับโลกเลือก Express.js แสดงว่ามันดีจริงหรือ?"*

**แน่นอน! แต่ดียังไง? 🤩**

---

## สไลด์ 21: ทำไม Express.js ถึงเป็นที่นิยม? 🌟

### **ข้อดีที่ชัดเจน:**

#### **1. เขียนโค้ดน้อยลง 📝**
```javascript
// HTTP Module: ~50 บรรทัด
const server = http.createServer((req, res) => {
    const url = require('url').parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');
    // ... อีก 45+ บรรทัด
});

// Express: ~5 บรรทัด  
app.get('/api/users', (req, res) => {
    res.json({ users: ['John', 'Jane'] });
});
```

#### **2. Routing ที่ยืดหยุ่น 🛣️**
```javascript
// URL parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
});

// Query parameters  
app.get('/search', (req, res) => {
    const query = req.query.q;
});

// Wildcards
app.get('/files/*', (req, res) => {
    // จัดการไฟล์ทุกประเภท
});
```

#### **3. Middleware System 🔧**
```javascript
// ใช้ middleware ร่วมกัน
app.use(express.json());        // Parse JSON
app.use(express.static('public')); // Static files
app.use('/api', authMiddleware);    // Authentication
```

#### **4. Ecosystem ที่ใหญ่ 📦**
```bash
# Middleware พร้อมใช้งาน
npm install cors helmet morgan compression
```

### **Performance Comparison:**
```
HTTP Module: 100 บรรทัดโค้ด → 1 API endpoint
Express.js:   10 บรรทัดโค้ด → 1 API endpoint

ประหยัดเวลา 90%! 🚀
```

### **คำถามท้าทาย:**
*"ถ้า Express.js ทำให้ทุกอย่างง่ายขึ้น แล้วทำไมยังต้องเรียน HTTP Module?"*

---

## สไลด์ 22: การติดตั้ง Express.js 💻

### **ขั้นตอนการติดตั้ง:**

#### **1. สร้างโปรเจคใหม่:**
```bash
# สร้างโฟลเดอร์โปรเจค
mkdir my-express-app
cd my-express-app

# เริ่มต้น NPM project
npm init -y
```

#### **2. ติดตั้ง Express:**
```bash
# ติดตั้ง Express
npm install express

# ติดตั้ง nodemon สำหรับ development
npm install --save-dev nodemon
```

#### **3. ตั้งค่า package.json:**
```json
{
  "name": "my-express-app",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### **เลือก Express Version:**
```bash
# LTS Version (แนะนำ)
npm install express@^4.18.2

# Latest Version
npm install express@latest

# Specific Version
npm install express@4.18.2
```

### **โครงสร้างโปรเจคที่ได้:**
```
my-express-app/
├── node_modules/    ← Express และ dependencies
├── package.json     ← ข้อมูลโปรเจค
├── package-lock.json ← Lock versions
└── server.js        ← ไฟล์หลัก (เราจะสร้าง)
```

### **คำถามเช็คความเข้าใจ:**
*"ทำไม Express version เป็น 4.x.x แต่ยังเรียกว่า latest?"*

**Hint: Express 5.x ยังอยู่ใน beta! 🚧**

---

## สไลด์ 23: Hello World Express Server 🎉

### **สร้างเซิร์ฟเวอร์ Express แรก:**

```javascript
// ไฟล์: server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route พื้นฐาน
app.get('/', (req, res) => {
    res.send('<h1>🎉 สวัสดี Express.js!</h1>');
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`🚀 Server กำลังทำงานที่ http://localhost:${PORT}`);
});
```

### **รันเซิร์ฟเวอร์:**
```bash
# รันแบบ production
npm start

# รันแบบ development (auto-restart)
npm run dev

# ผลลัพธ์:
# 🚀 Server กำลังทำงานที่ http://localhost:3000
```

### **เปรียบเทียบกับ HTTP Module:**
```javascript
// HTTP Module: 10+ บรรทัด
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>สวัสดี HTTP Module!</h1>');
});
server.listen(3000, () => console.log('Server running...'));

// Express: 6 บรรทัด
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>สวัสดี Express!</h1>'));
app.listen(3000, () => console.log('Server running...'));
```

### **Express App Object:**
```javascript
// app คือ Express application
console.log(typeof app);        // 'function'
console.log(app.constructor);   // [Function: app]

// app มี methods มากมาย
app.get();     // HTTP GET
app.post();    // HTTP POST  
app.use();     // Middleware
app.listen();  // Start server
```

### **ทดสอบการทำงาน:**
1. เปิด browser ไปที่ `http://localhost:3000`
2. ควรเห็นข้อความ "🎉 สวัสดี Express.js!"
3. ลอง refresh หลายๆ ครั้ง

**สำเร็จ! คุณเพิ่งสร้าง Express server แรก! 🎊**

---

## สไลด์ 24: Express App Structure 🏗️

### **โครงสร้างพื้นฐานของ Express App:**

```javascript
const express = require('express');
const app = express();

// 1. Configuration & Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

// 2. Routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// 3. Error Handling
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong!');
});

// 4. Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### **Request-Response Cycle:**
```
1. Client ส่ง HTTP Request
        ↓
2. Express รับ Request
        ↓  
3. ผ่าน Middleware chain
        ↓
4. ตรงกับ Route handler
        ↓
5. ส่ง Response กลับ Client
```

### **Express App Methods:**
```javascript
// HTTP Methods
app.get('/users', handler);      // GET requests
app.post('/users', handler);     // POST requests  
app.put('/users/:id', handler);  // PUT requests
app.delete('/users/:id', handler); // DELETE requests

// All Methods
app.all('/users', handler);      // ทุก HTTP methods

// Middleware
app.use(middleware);             // ใช้ทุก routes
app.use('/api', middleware);     // ใช้เฉพาะ /api/*
```

### **Response Object Methods:**
```javascript
app.get('/demo', (req, res) => {
    res.send('Text response');           // ส่งข้อความ
    res.json({ name: 'John' });         // ส่ง JSON
    res.status(404).send('Not found');  // ตั้ง status code
    res.redirect('/login');             // Redirect
    res.render('index');                // Render template
});
```

### **คำถามสำคัญ:**
*"req และ res object มีความสามารถอะไรเพิ่มขึ้นจาก HTTP Module?"*

---

## สไลด์ 25: Routing พื้นฐาน 🛣️

### **Route = URL Pattern + HTTP Method + Handler**

```javascript
// Basic Routes
app.get('/', (req, res) => {
    res.send('หน้าแรก');
});

app.get('/about', (req, res) => {
    res.send('เกี่ยวกับเรา');
});

app.get('/contact', (req, res) => {
    res.send('ติดต่อเรา');
});

// Different HTTP Methods
app.post('/users', (req, res) => {
    res.send('สร้างผู้ใช้ใหม่');
});

app.put('/users/123', (req, res) => {
    res.send('แก้ไขผู้ใช้ 123');
});

app.delete('/users/123', (req, res) => {
    res.send('ลบผู้ใช้ 123');
});
```

### **Route Parameters:**
```javascript
// URL Parameters (:name)
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`ผู้ใช้ ID: ${userId}`);
});

// Multiple Parameters
app.get('/users/:id/posts/:postId', (req, res) => {
    const { id, postId } = req.params;
    res.send(`ผู้ใช้ ${id}, โพสต์ ${postId}`);
});

// Optional Parameters
app.get('/products/:id?', (req, res) => {
    if (req.params.id) {
        res.send(`สินค้า ID: ${req.params.id}`);
    } else {
        res.send('รายการสินค้าทั้งหมด');
    }
});
```

### **Query Parameters:**
```javascript
// URL: /search?q=laptop&category=electronics&page=2
app.get('/search', (req, res) => {
    const query = req.query.q;        // 'laptop'
    const category = req.query.category; // 'electronics'  
    const page = req.query.page;      // '2'
    
    res.json({
        searchTerm: query,
        category: category,
        page: page
    });
});
```

### **Route Patterns:**
```javascript
// Wildcards
app.get('/files/*', (req, res) => {
    res.send(`File path: ${req.params[0]}`);
});

// Regular Expressions
app.get(/.*fly$/, (req, res) => {
    res.send('Ends with "fly"');
});

// String Patterns
app.get('/ab?cd', (req, res) => {
    res.send('Matches: /acd or /abcd');
});
```

### **ตัวอย่างการใช้งานจริง:**
```javascript
// API Routes
app.get('/api/users', getAllUsers);
app.get('/api/users/:id', getUserById);
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);
```

**Routes คือหัวใจของ web application! 💖**

---

## สไลด์ 26: HTTP Methods และการใช้งาน 📡

### **HTTP Methods ที่ใช้บ่อย:**

#### **GET - ดึงข้อมูล 📥**
```javascript
// ดึงข้อมูลทั้งหมด
app.get('/api/products', (req, res) => {
    res.json({
        products: [
            { id: 1, name: 'iPhone', price: 25000 },
            { id: 2, name: 'Samsung', price: 20000 }
        ]
    });
});

// ดึงข้อมูลตาม ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'ไม่พบสินค้า' });
    }
});
```

#### **POST - สร้างข้อมูลใหม่ 📤**
```javascript
app.use(express.json()); // สำคัญ! ต้องมี

app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    
    // Validation
    if (!name || !price) {
        return res.status(400).json({ 
            error: 'กรุณาระบุชื่อและราคา' 
        });
    }
    
    const newProduct = {
        id: Date.now(),
        name: name,
        price: price
    };
    
    products.push(newProduct);
    res.status(201).json(newProduct);
});
```

#### **PUT - แก้ไขข้อมูล ✏️**
```javascript
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).json({ error: 'ไม่พบสินค้า' });
    }
    
    products[productIndex] = {
        id: productId,
        name: name || products[productIndex].name,
        price: price || products[productIndex].price
    };
    
    res.json(products[productIndex]);
});
```

#### **DELETE - ลบข้อมูล 🗑️**
```javascript
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).json({ error: 'ไม่พบสินค้า' });
    }
    
    const deletedProduct = products.splice(productIndex, 1)[0];
    res.json({ 
        message: 'ลบสินค้าสำเร็จ',
        deletedProduct 
    });
});
```

### **HTTP Status Codes ที่ควรรู้:**
```javascript
// 2xx Success
res.status(200).json(data);      // OK
res.status(201).json(newData);   // Created
res.status(204).send();          // No Content

// 4xx Client Error  
res.status(400).json(error);     // Bad Request
res.status(401).json(error);     // Unauthorized
res.status(404).json(error);     // Not Found

// 5xx Server Error
res.status(500).json(error);     // Internal Server Error
```

### **RESTful API Design:**
```
GET    /api/products      → ดึงสินค้าทั้งหมด
GET    /api/products/123  → ดึงสินค้า ID 123
POST   /api/products      → สร้างสินค้าใหม่
PUT    /api/products/123  → แก้ไขสินค้า ID 123
DELETE /api/products/123  → ลบสินค้า ID 123
```

### **คำถามให้คิด:**
*"ทำไม POST ใช้สร้าง PUT ใช้แก้ไข? สลับกันได้ไหม?"*

---

## สไลด์ 27: Static Files และ Public Directory 📁

### **Static Files คืออะไร?**
> **ไฟล์ที่ไม่เปลี่ยนแปลง เสิร์ฟตรงๆ ให้ client**

### **ประเภทของ Static Files:**
```
📄 HTML files    → หน้าเว็บ
🎨 CSS files     → styling  
⚡ JavaScript   → client-side scripts
🖼️ Images       → PNG, JPG, SVG
📹 Videos       → MP4, WebM
📄 Documents    → PDF, DOC
🎵 Audio        → MP3, WAV
```

### **ตั้งค่า Static Files:**
```javascript
const express = require('express');
const path = require('path');
const app = express();

// เสิร์ฟไฟล์จาก public directory
app.use(express.static('public'));

// หรือกำหนด path prefix
app.use('/static', express.static('public'));

// หรือใช้ absolute path
app.use(express.static(path.join(__dirname, 'public')));
```

### **โครงสร้างโปรเจค:**
```
my-express-app/
├── public/              ← Static files directory
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   ├── images/
│   │   └── logo.png
│   └── index.html
├── server.js
└── package.json
```

### **ตัวอย่างไฟล์ Static:**

**public/index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Express App</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>ยินดีต้อนรับสู่ Express!</h1>
    <img src="/images/logo.png" alt="Logo">
    <script src="/js/app.js"></script>
</body>
</html>
```

**public/css/style.css:**
```css
body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 50px;
}

h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}
```

**public/js/app.js:**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Express app loaded!');
    
    // เรียก API
    fetch('/api/status')
        .then(response => response.json())
        .then(data => console.log(data));
});
```

### **การเข้าถึงไฟล์:**
```bash
# ถ้าใช้ app.use(express.static('public'))
http://localhost:3000/index.html
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/logo.png

# ถ้าใช้ app.use('/static', express.static('public'))  
http://localhost:3000/static/index.html
http://localhost:3000/static/css/style.css
```

### **Multiple Static Directories:**
```javascript
// เสิร์ฟหลาย directories
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/uploads', express.static('uploads'));
```

### **Security Considerations:**
```javascript
// ✅ ดี - กำหนด directory ชัดเจน
app.use(express.static('public'));

// ❌ อันตราย - เสิร์ฟ root directory
app.use(express.static('/'));

// ✅ ปลอดภัย - ใช้ path.join()
app.use(express.static(path.join(__dirname, 'public')));
```

**Static files ทำให้เราส่งไฟล์ได้ง่ายๆ! 📦**

---

## สไลด์ 28: Middleware คืออะไร? 🔧

### **Middleware = ฟังก์ชันที่ทำงานระหว่าง Request และ Response**

### **เปรียบเทียบให้เข้าใจ:**
```
🏢 การเข้าบริษัท
Request → รปภ.ตรวจบัตร → แผนก HR → แผนกงาน → Response

🌐 Express Middleware  
Request → CORS → Auth → Logging → Route Handler → Response
```

### **Middleware Signature:**
```javascript
// Middleware function
function middlewareName(req, res, next) {
    // ทำงานก่อน route handler
    console.log('Middleware executed!');
    
    // ต้องเรียก next() เพื่อไปต่อ
    next();
}

// หรือ Error Middleware
function errorMiddleware(err, req, res, next) {
    console.error(err);
    res.status(500).send('Something went wrong!');
}
```

### **วิธีใช้ Middleware:**

#### **1. Application-level Middleware:**
```javascript
// ใช้กับทุก routes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

// ใช้กับ path เฉพาะ
app.use('/api', (req, res, next) => {
    console.log('API request');
    next();
});
```

#### **2. Router-level Middleware:**
```javascript
const router = express.Router();

router.use((req, res, next) => {
    console.log('Router middleware');
    next();
});

app.use('/users', router);
```

#### **3. Route-specific Middleware:**
```javascript
// Authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    // ตรวจสอบ token
    next();
};

// ใช้กับ route เฉพาะ
app.get('/profile', authenticate, (req, res) => {
    res.json({ message: 'Protected route' });
});
```

### **Built-in Middleware:**
```javascript
// Parse JSON
app.use(express.json());

// Parse URL-encoded data  
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));
```

### **Third-party Middleware:**
```javascript
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// CORS
app.use(cors());

// Security headers
app.use(helmet());

// Logging
app.use(morgan('combined'));
```

### **Middleware Order สำคัญ!**
```javascript
// ✅ ลำดับที่ถูกต้อง
app.use(express.json());        // 1. Parse JSON first
app.use(morgan('dev'));         // 2. Logging  
app.use('/api', authenticate);  // 3. Authentication
app.get('/api/users', handler); // 4. Route handler

// ❌ ลำดับผิด
app.get('/api/users', handler); // Route handler จะไม่ผ่าน middleware!
app.use(express.json());        // Too late!
```

### **Custom Middleware Examples:**
```javascript
// Request timing
app.use((req, res, next) => {
    req.startTime = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - req.startTime;
        console.log(`Request took ${duration}ms`);
    });
    next();
});

// API Key validation
app.use('/api', (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== 'secret123') {
        return res.status(403).json({ error: 'Invalid API key' });
    }
    next();
});
```

### **คำถามสำคัญ:**
*"ถ้าลืมเรียก next() ใน middleware จะเกิดอะไรขึ้น?"*

**Hint: Request จะค้างไม่มีที่สิ้นสุด! ⏳**

---

## สไลด์ 29: Express.json() และ Body Parsing 📦

### **ปัญหาที่เจอ:**
```javascript
// POST request กับ JSON data
app.post('/users', (req, res) => {
    console.log(req.body); // undefined 😢
    // ไม่สามารถอ่านข้อมูลที่ส่งมาได้!
});
```

### **สาเหตุ:**
> **Express ไม่รู้จักวิธีอ่าน JSON data โดยอัตโนมัติ**

### **วิธีแก้ - ใช้ express.json():**
```javascript
// เพิ่ม middleware นี้
app.use(express.json());

// ตอนนี้อ่าน JSON ได้แล้ว!
app.post('/users', (req, res) => {
    console.log(req.body); // { name: "John", email: "john@email.com" } ✅
    
    const { name, email } = req.body;
    res.json({ 
        message: 'สร้างผู้ใช้สำเร็จ',
        user: { name, email }
    });
});
```

### **ประเภทของ Body Parsing:**

#### **1. JSON Data:**
```javascript
app.use(express.json());

// Client ส่ง:
// Content-Type: application/json
// { "name": "John", "age": 25 }

app.post('/api/users', (req, res) => {
    const { name, age } = req.body;
    console.log(name, age); // "John", 25
});
```

#### **2. URL-encoded Data (Form Data):**
```javascript
app.use(express.urlencoded({ extended: true }));

// Client ส่ง:
// Content-Type: application/x-www-form-urlencoded
// name=John&age=25

app.post('/submit-form', (req, res) => {
    const { name, age } = req.body;
    console.log(name, age); // "John", "25"
});
```

#### **3. Raw Data:**
```javascript
app.use(express.raw({ type: 'application/octet-stream' }));

app.post('/upload', (req, res) => {
    console.log(req.body); // Buffer object
});
```

#### **4. Text Data:**
```javascript
app.use(express.text({ type: 'text/plain' }));

app.post('/webhook', (req, res) => {
    console.log(req.body); // String
});
```

### **การตั้งค่า Middleware:**
```javascript
// Size limit
app.use(express.json({ limit: '10mb' }));

// Type filter
app.use(express.json({ type: 'application/json' }));

// Custom verification
app.use(express.json({
    verify: (req, res, buf, encoding) => {
        // Custom verification logic
    }
}));
```

### **ตัวอย่างการใช้งานจริง:**
```javascript
const express = require('express');
const app = express();

// Middleware สำหรับ parse data
app.use(express.json());                          // JSON data
app.use(express.urlencoded({ extended: true }));  // Form data

// API endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'กรุณากรอกข้อมูลให้ครบถ้วน'
        });
    }
    
    // บันทึกข้อมูล (จำลอง)
    console.log('ได้รับข้อความจาก:', name);
    
    res.json({
        message: 'ส่งข้อความสำเร็จ',
        data: { name, email }
    });
});
```

### **ทดสอบด้วย Postman:**
```json
POST http://localhost:3000/api/contact
Content-Type: application/json

{
    "name": "สมชาย",
    "email": "somchai@email.com", 
    "message": "สวัสดีครับ"
}
```

### **Common Mistakes:**
```javascript
// ❌ ผิด - วาง middleware หลัง routes
app.post('/users', (req, res) => {
    console.log(req.body); // undefined
});
app.use(express.json()); // Too late!

// ✅ ถูก - วาง middleware ก่อน routes
app.use(express.json());
app.post('/users', (req, res) => {
    console.log(req.body); // Works!
});
```

**Body parsing คือเครื่องมือสำคัญสำหรับ API! 🔧**

---

## สไลด์ 30: Error Handling ใน Express 🚨

### **ประเภทของ Error:**
```javascript
// 1. Synchronous Error
app.get('/sync-error', (req, res) => {
    throw new Error('Something went wrong!'); // Express จับได้อัตโนมัติ
});

// 2. Asynchronous Error  
app.get('/async-error', (req, res, next) => {
    setTimeout(() => {
        next(new Error('Async error!')); // ต้องส่งไป next()
    }, 1000);
});

// 3. Promise Rejection
app.get('/promise-error', async (req, res, next) => {
    try {
        await someAsyncFunction();
        res.json({ success: true });
    } catch (error) {
        next(error); // ส่ง error ไป error handler
    }
});
```

### **Error Handling Middleware:**
```javascript
// Error middleware ต้องมี 4 parameters
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    
    // ตั้ง status code
    const statusCode = err.statusCode || 500;
    
    // ส่ง error response
    res.status(statusCode).json({
        error: {
            message: err.message,
            status: statusCode,
            timestamp: new Date().toISOString()
        }
    });
});
```

### **Custom Error Class:**
```javascript
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

// การใช้งาน
app.get('/users/:id', (req, res, next) => {
    const userId = req.params.id;
    
    if (!userId || isNaN(userId)) {
        return next(new AppError('Invalid user ID', 400));
    }
    
    const user = findUserById(userId);
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    
    res.json(user);
});
```

### **Error Handling Best Practices:**
```javascript
// 1. Centralized Error Handler
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    
    // Log error
    console.error(err);
    
    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = 'Resource not found';
        error = new AppError(message, 404);
    }
    
    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new AppError(message, 400);
    }
    
    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new AppError(message, 400);
    }
    
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

app.use(errorHandler);
```

### **404 Handler:**
```javascript
// ต้องวางหลัง routes ทั้งหมด
app.all('*', (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
    next(err);
});

// Error handler
app.use(errorHandler);
```

### **Async Error Wrapper:**
```javascript
// Wrapper function สำหรับ async routes
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// การใช้งาน
app.get('/users', catchAsync(async (req, res, next) => {
    const users = await User.find(); // ถ้า error จะส่งไป error handler อัตโนมัติ
    res.json(users);
}));
```

### **Development vs Production Errors:**
```javascript
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};

const sendErrorProd = (err, res) => {
    // Operational error: ส่งให้ client ได้
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } else {
        // Programming error: ไม่ส่งรายละเอียดให้ client
        console.error('ERROR 💥', err);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        });
    }
};

const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    }
};
```

### **คำถามให้คิด:**
*"ทำไม Error middleware ต้องมี 4 parameters? ลบ parameter ไหนได้บ้าง?"*

**ลองทดลองดู... 🧪**

---

## สไลด์ 31: Environment Variables และ Configuration ⚙️

### **Environment Variables คืออะไร?**
> **ค่า configuration ที่เก็บไว้นอกโค้ด สำหรับแต่ละ environment**

### **ทำไมต้องใช้?**
```javascript
// ❌ Hard-coded values
const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/myapp';
const JWT_SECRET = 'mysecret123';
const API_KEY = 'sk-1234567890abcdef';

// Problems:
// - Secret ติดไปกับโค้ด
// - ไม่สามารถเปลี่ยนค่าได้ตาม environment  
// - ข้อมูลลับอาจรั่วไหล
```

```javascript
// ✅ Environment Variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const API_KEY = process.env.API_KEY;

// Benefits:
// - ปลอดภัย
// - Flexible
// - แยกตาม environment ได้
```

### **การใช้ process.env:**
```javascript
// อ่านค่าจาก environment
console.log(process.env.NODE_ENV);    // 'development' หรือ 'production'
console.log(process.env.PORT);        // '3000'
console.log(process.env.HOME);        // '/Users/username' (macOS)

// ตั้งค่า default value
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
```

### **การใช้ dotenv Package:**
```bash
# ติดตั้ง dotenv
npm install dotenv
```

```javascript
// โหลด dotenv ที่ต้นไฟล์
require('dotenv').config();

const express = require('express');
const app = express();

// ใช้ environment variables
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
```

### **ไฟล์ .env:**
```bash
# .env file
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-super-secret-jwt-key
API_KEY=your-api-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password

# Third-party services
STRIPE_SECRET_KEY=sk_test_1234567890
CLOUDINARY_URL=cloudinary://123456789
```

### **Environment-specific Configuration:**
```javascript
// config/config.js
const config = {
    development: {
        port: process.env.PORT || 3000,
        database: {
            url: process.env.DEV_DATABASE_URL || 'mongodb://localhost:27017/myapp-dev'
        },
        jwt: {
            secret: process.env.JWT_SECRET || 'dev-secret',
            expiresIn: '7d'
        }
    },
    
    production: {
        port: process.env.PORT || 8080,
        database: {
            url: process.env.DATABASE_URL
        },
        jwt: {
            secret: process.env.JWT_SECRET,
            expiresIn: '1d'
        }
    },
    
    test: {
        port: 3001,
        database: {
            url: process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/myapp-test'
        }
    }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];
```

### **การใช้งาน Configuration:**
```javascript
const config = require('./config/config');

// Database connection
mongoose.connect(config.database.url);

// JWT
const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
});

// Server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port} in ${process.env.NODE_ENV} mode`);
});
```

### **Security Best Practices:**
```bash
# .gitignore file
node_modules/
.env
.env.local
.env.production
*.log
```

```bash
# .env.example (สำหรับทีมงาน)
NODE_ENV=development
PORT=3000
DATABASE_URL=your-database-url-here
JWT_SECRET=your-jwt-secret-here
API_KEY=your-api-key-here
```

### **Validation Environment Variables:**
```javascript
// ตรวจสอบ required variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET', 'API_KEY'];

requiredEnvVars.forEach(envVar => {
    if (!process.env[envVar]) {
        console.error(`❌ Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
});

console.log('✅ All required environment variables are set');
```

### **Different Ways to Set Environment Variables:**
```bash
# 1. Command line
NODE_ENV=production PORT=8080 node server.js

# 2. package.json scripts
{
    "scripts": {
        "start": "node server.js",
        "dev": "NODE_ENV=development nodemon server.js",
        "prod": "NODE_ENV=production node server.js"
    }
}

# 3. .env file (with dotenv)
# สร้างไฟล์ .env และใส่ค่า

# 4. System environment (Linux/Mac)
export NODE_ENV=production
export PORT=8080
```

**Environment Variables = ความปลอดภัยและความยืดหยุ่น! 🔒**

---

## สไลด์ 32: Express Router และการจัดระเบียบ Routes 🗂️

### **ปัญหาเมื่อ Routes เยอะขึ้น:**
```javascript
// server.js กลายเป็นไฟล์ใหญ่และยุ่งเหยิง
app.get('/api/users', getAllUsers);
app.get('/api/users/:id', getUserById);
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUser);

app.get('/api/products', getAllProducts);
app.get('/api/products/:id', getProductById);
app.post('/api/products', createProduct);
// ... และอีกร้อยบรรทัด 😵
```

### **Express Router เข้ามาช่วย!**
> **แยก routes ออกเป็นไฟล์แยก เพื่อง่ายต่อการจัดการ**

### **การสร้าง Router:**

**routes/users.js:**
```javascript
const express = require('express');
const router = express.Router();

// Route handlers
const getAllUsers = (req, res) => {
    res.json({ users: ['John', 'Jane', 'Bob'] });
};

const getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ user: `User ${userId}` });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ 
        message: 'User created',
        user: { name, email }
    });
};

// Define routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);  
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
```

**routes/products.js:**
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ products: ['iPhone', 'Samsung', 'Huawei'] });
});

router.get('/:id', (req, res) => {
    res.json({ product: `Product ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(201).json({ message: 'Product created' });
});

module.exports = router;
```

### **การใช้ Router ใน Main App:**
```javascript
// server.js
const express = require('express');
const app = express();

// Import routers
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

// Middleware
app.use(express.json());

// Use routers
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Routes จะกลายเป็น:
// GET    /api/users/        → getAllUsers
// GET    /api/users/:id     → getUserById  
// POST   /api/users/        → createUser
// GET    /api/products/     → getAllProducts
// POST   /api/products/     → createProduct
```

### **Router Middleware:**
```javascript
// routes/admin.js
const router = express.Router();

// Middleware สำหรับ router นี้เท่านั้น
router.use((req, res, next) => {
    console.log('Admin route accessed');
    // ตรวจสอบสิทธิ์ admin
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
});

router.get('/dashboard', (req, res) => {
    res.json({ message: 'Admin dashboard' });
});

router.get('/users', (req, res) => {
    res.json({ message: 'All users (admin view)' });
});

module.exports = router;
```

### **Nested Routers:**
```javascript
// routes/api.js
const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const productRoutes = require('./products');
const adminRoutes = require('./admin');

// Nested routers
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/admin', adminRoutes);

module.exports = router;

// server.js
app.use('/api', require('./routes/api'));

// Final routes:
// /api/users/
// /api/products/  
// /api/admin/dashboard
```

### **Route Parameters ใน Router:**
```javascript
// routes/users.js
router.param('id', (req, res, next, id) => {
    // ทำงานทุกครั้งที่มี :id parameter
    console.log(`User ID: ${id}`);
    
    // Validation
    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }
    
    // เพิ่มข้อมูลให้ req object
    req.userId = parseInt(id);
    next();
});

router.get('/:id', (req, res) => {
    // req.userId พร้อมใช้งานแล้ว
    res.json({ userId: req.userId });
});
```

### **โครงสร้างโปรเจคที่เป็นระเบียบ:**
```
my-express-app/
├── routes/
│   ├── index.js        ← Main router
│   ├── users.js        ← User routes
│   ├── products.js     ← Product routes
│   ├── admin.js        ← Admin routes
│   └── auth.js         ← Authentication routes
├── controllers/
│   ├── userController.js
│   └── productController.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── server.js
└── package.json
```

### **Route Testing:**
```javascript
// routes/index.js
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// API info
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API',
        version: '1.0.0',
        endpoints: {
            users: '/api/users',
            products: '/api/products',
            admin: '/api/admin'
        }
    });
});

module.exports = router;
```

**Router ทำให้โค้ดเป็นระเบียบและดูแลง่าย! 📁**

---

## สไลด์ 33: CORS และการแก้ปัญหา Cross-Origin 🌐

### **CORS คืออะไร?**
> **Cross-Origin Resource Sharing = กฎความปลอดภัยของเบราว์เซอร์**

### **ปัญหาที่เจอ:**
```javascript
// Frontend (http://localhost:3000) พยายามเรียก API
fetch('http://localhost:3001/api/users')
    .then(response => response.json())
    .then(data => console.log(data));

// ❌ Error in Console:
// Access to fetch at 'http://localhost:3001/api/users' 
// from origin 'http://localhost:3000' has been blocked by CORS policy
```

### **ทำไมถึงเกิด CORS Error?**
```
🌐 Browser Security Policy
├── Same-Origin Policy
├── ป้องกันการโจมตีจากเว็บไซต์อื่น
└── Block requests ระหว่าง different origins

Origin = Protocol + Domain + Port
├── http://localhost:3000    ← React app
└── http://localhost:3001    ← Express API (Different port!)
```

### **วิธีแก้ด้วย CORS Middleware:**

#### **1. ติดตั้ง CORS package:**
```bash
npm install cors
```

#### **2. เพื่อ Enable CORS:**
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// เปิด CORS สำหรับทุก origins (Development only!)
app.use(cors());

// ตอนนี้ Frontend เรียก API ได้แล้ว! ✅
app.get('/api/users', (req, res) => {
    res.json({ users: ['John', 'Jane'] });
});
```

### **CORS Configuration ขั้นสูง:**
```javascript
// กำหนด specific origins
app.use(cors({
    origin: ['http://localhost:3000', 'https://myapp.com'],
    credentials: true,  // อนุญาต cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### **Dynamic CORS:**
```javascript
const corsOptions = {
    origin: (origin, callback) => {
        // อนุญาต requests ที่ไม่มี origin (mobile apps, Postman)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
            'http://localhost:3000',
            'https://myapp.com',
            'https://www.myapp.com'
        ];
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
```

### **Environment-based CORS:**
```javascript
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://myapp.com', 'https://www.myapp.com']
        : ['http://localhost:3000', 'http://localhost:3001']
};

app.use(cors(corsOptions));
```

### **Route-specific CORS:**
```javascript
// CORS เฉพาะ route
app.get('/api/public', cors(), (req, res) => {
    res.json({ message: 'Public API' });
});

// CORS สำหรับ specific origin
const specificCors = cors({
    origin: 'https://trusted-partner.com'
});

app.get('/api/partner', specificCors, (req, res) => {
    res.json({ message: 'Partner API' });
});
```

### **Manual CORS Headers:**
```javascript
// ถ้าไม่ใช้ cors package
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    }
});
```

### **Preflight Requests:**
```javascript
// เบราว์เซอร์ส่ง OPTIONS request ก่อน (Preflight)
app.options('*', cors()); // Enable preflight for all routes

// หรือ handle เอง
app.options('/api/*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).send();
});
```

### **CORS in Production:**
```javascript
// production-cors.js
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
        
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error(`CORS blocked: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

module.exports = corsOptions;
```

### **CORS Debugging:**
```javascript
app.use((req, res, next) => {
    console.log(`Origin: ${req.headers.origin}`);
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    next();
});

app.use(cors({
    origin: (origin, callback) => {
        console.log(`CORS check for origin: ${origin}`);
        callback(null, true);
    }
}));
```

### **Common CORS Scenarios:**
```javascript
// 1. React app กับ Express API
const devCors = cors({
    origin: 'http://localhost:3000',
    credentials: true
});

// 2. Multiple frontends
const multiCors = cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
});

// 3. Mobile app (no origin)
const mobileCors = cors({
    origin: false, // Allow requests with no origin
    credentials: false
});
```

### **คำถามสำคัญ:**
*"ทำไมเปิด CORS ให้ทุก origins ใน production ถึงอันตราย?"*

**Hint: เหมือนเปิดประตูบ้านให้คนแปลกหน้าเข้ามาได้! 🚪**

---

## สไลด์ 34: Request และ Response Objects ขั้นสูง 📨

### **Request Object (req) ขยายความสามารถ:**

#### **Request Properties:**
```javascript
app.get('/demo', (req, res) => {
    console.log('=== Request Information ===');
    
    // Basic info
    console.log('Method:', req.method);        // 'GET'
    console.log('URL:', req.url);             // '/demo?name=john'
    console.log('Original URL:', req.originalUrl); // '/demo?name=john'
    console.log('Path:', req.path);           // '/demo'
    
    // Headers
    console.log('User-Agent:', req.get('User-Agent'));
    console.log('Accept:', req.headers.accept);
    console.log('Authorization:', req.headers.authorization);
    
    // Query parameters
    console.log('Query:', req.query);         // { name: 'john' }
    
    // Route parameters  
    console.log('Params:', req.params);       // { id: '123' }
    
    // Body (ต้องมี body parser)
    console.log('Body:', req.body);
    
    // IP และ Host
    console.log('IP:', req.ip);
    console.log('Host:', req.hostname);
    console.log('Protocol:', req.protocol);   // 'http' or 'https'
    
    res.json({ message: 'Check console for request info' });
});
```

#### **Custom Request Properties:**
```javascript
// Middleware เพิ่มข้อมูลให้ req
app.use((req, res, next) => {
    req.startTime = Date.now();
    req.requestId = Math.random().toString(36).substr(2, 9);
    next();
});

app.get('/api/users', (req, res) => {
    console.log('Request ID:', req.requestId);
    console.log('Start time:', req.startTime);
    
    // ใช้งาน custom properties
    res.json({
        users: ['John', 'Jane'],
        requestId: req.requestId,
        processTime: Date.now() - req.startTime
    });
});
```

### **Response Object (res) Methods ขั้นสูง:**

#### **Response Status และ Headers:**
```javascript
app.get('/api/examples', (req, res) => {
    // ตั้ง status code
    res.status(200);              // OK
    res.status(201);              // Created
    res.status(400);              // Bad Request
    res.status(404);              // Not Found
    res.status(500);              // Internal Server Error
    
    // ตั้ง headers
    res.set('Content-Type', 'application/json');
    res.set('X-Powered-By', 'Express.js');
    res.set({
        'Cache-Control': 'no-cache',
        'X-API-Version': '1.0.0'
    });
    
    // ส่ง response
    res.json({ message: 'Hello' });
});
```

#### **Response Types:**
```javascript
app.get('/response-types', (req, res) => {
    const type = req.query.type;
    
    switch (type) {
        case 'json':
            res.json({ message: 'JSON response', data: [1, 2, 3] });
            break;
            
        case 'text':
            res.send('Plain text response');
            break;
            
        case 'html':
            res.send('<h1>HTML Response</h1><p>Hello World!</p>');
            break;
            
        case 'file':
            res.sendFile(path.join(__dirname, 'public', 'download.pdf'));
            break;
            
        case 'redirect':
            res.redirect('https://google.com');
            break;
            
        case 'cookie':
            res.cookie('username', 'john', { 
                maxAge: 900000, 
                httpOnly: true 
            });
            res.json({ message: 'Cookie set' });
            break;
            
        default:
            res.status(400).json({ error: 'Invalid type parameter' });
    }
});
```

#### **Response Chaining:**
```javascript
app.get('/api/chaining', (req, res) => {
    res
        .status(201)
        .set('X-Custom-Header', 'MyValue')
        .cookie('session', 'abc123')
        .json({
            message: 'Chained response',
            timestamp: new Date().toISOString()
        });
});
```

### **File Downloads:**
```javascript
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'uploads', filename);
    
    // ตรวจสอบไฟล์
    if (!fs.existsSync(filepath)) {
        return res.status(404).json({ error: 'File not found' });
    }
    
    // Download ไฟล์
    res.download(filepath, (err) => {
        if (err) {
            console.error('Download error:', err);
            res.status(500).json({ error: 'Download failed' });
        }
    });
});

// Force download with custom filename
app.get('/download-as/:filename', (req, res) => {
    const originalFile = 'data.csv';
    const downloadName = req.params.filename;
    
    res.download(originalFile, downloadName);
});
```

### **Response Streaming:**
```javascript
app.get('/stream', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked'
    });
    
    let counter = 0;
    const interval = setInterval(() => {
        res.write(`Chunk ${counter}\n`);
        counter++;
        
        if (counter > 10) {
            clearInterval(interval);
            res.end('Stream complete!');
        }
    }, 1000);
});
```

### **Content Negotiation:**
```javascript
app.get('/api/data', (req, res) => {
    const data = { users: ['John', 'Jane'], count: 2 };
    
    res.format({
        'application/json': () => {
            res.json(data);
        },
        
        'application/xml': () => {
            res.send('<users><user>John</user><user>Jane</user></users>');
        },
        
        'text/plain': () => {
            res.send('Users: John, Jane');
        },
        
        'text/html': () => {
            res.send('<h1>Users</h1><ul><li>John</li><li>Jane</li></ul>');
        },
        
        'default': () => {
            res.status(406).send('Not Acceptable');
        }
    });
});
```

### **Response Validation:**
```javascript
const responseValidator = (schema) => {
    return (req, res, next) => {
        const originalJson = res.json;
        
        res.json = function(data) {
            // Validate response data
            const { error } = schema.validate(data);
            if (error) {
                console.error('Response validation error:', error);
                return res.status(500).json({
                    error: 'Internal server error'
                });
            }
            
            return originalJson.call(this, data);
        };
        
        next();
    };
};

// Usage
app.get('/api/users', responseValidator(userListSchema), (req, res) => {
    res.json({ users: [...] });
});
```

### **Response Performance:**
```javascript
// Response time middleware
app.use((req, res, next) => {
    const startTime = process.hrtime();
    
    res.on('finish', () => {
        const [seconds, nanoseconds] = process.hrtime(startTime);
        const duration = seconds * 1000 + nanoseconds / 1000000;
        
        console.log(`${req.method} ${req.url} - ${res.statusCode} - ${duration.toFixed(2)}ms`);
    });
    
    next();
});
```

### **คำถามท้าทาย:**
*"res.send() กับ res.json() ต่างกันอย่างไร? เมื่อไหร่ควรใช้อันไหน?"*

**ลองทดสอบดู... 🧪**

---

## สไลด์ 35: Middleware ขั้นสูง และ Custom Middleware 🔧

### **การสร้าง Custom Middleware:**

#### **1. Logging Middleware:**
```javascript
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const ip = req.ip || req.connection.remoteAddress;
    
    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
    
    // Log response time
    const startTime = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`);
    });
    
    next();
};

app.use(logger);
```

#### **2. Authentication Middleware:**
```javascript
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
        return res.status(401).json({
            error: 'Access token is required'
        });
    }
    
    try {
        // ตรวจสอบ JWT token (จำลอง)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Invalid or expired token'
        });
    }
};

// ใช้กับ protected routes
app.get('/api/profile', authenticate, (req, res) => {
    res.json({
        message: 'Protected route',
        user: req.user
    });
});
```

#### **3. Validation Middleware:**
```javascript
const validateUser = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];
    
    if (!name || name.length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    if (!email || !email.includes('@')) {
        errors.push('Valid email is required');
    }
    
    if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({
            error: 'Validation failed',
            details: errors
        });
    }
    
    next();
};

app.post('/api/users', validateUser, (req, res) => {
    // ข้อมูลผ่านการ validate แล้ว
    res.json({ message: 'User created successfully' });
});
```

#### **4. Rate Limiting Middleware:**
```javascript
const rateLimit = (maxRequests = 100, windowMs = 15 * 60 * 1000) => {
    const requests = new Map();
    
    return (req, res, next) => {
        const clientId = req.ip;
        const now = Date.now();
        const windowStart = now - windowMs;
        
        // ล้างข้อมูลเก่า
        if (requests.has(clientId)) {
            const clientRequests = requests.get(clientId);
            const validRequests = clientRequests.filter(time => time > windowStart);
            requests.set(clientId, validRequests);
        }
        
        // ตรวจสอบจำนวน requests
        const clientRequests = requests.get(clientId) || [];
        
        if (clientRequests.length >= maxRequests) {
            return res.status(429).json({
                error: 'Too many requests',
                retryAfter: Math.ceil(windowMs / 1000)
            });
        }
        
        // บันทึก request ใหม่
        clientRequests.push(now);
        requests.set(clientId, clientRequests);
        
        // เพิ่ม headers
        res.set({
            'X-RateLimit-Limit': maxRequests,
            'X-RateLimit-Remaining': maxRequests - clientRequests.length,
            'X-RateLimit-Reset': new Date(now + windowMs).toISOString()
        });
        
        next();
    };
};

// ใช้งาน
app.use('/api', rateLimit(100, 15 * 60 * 1000)); // 100 requests per 15 minutes
```

#### **5. CORS Middleware (Custom):**
```javascript
const customCors = (options = {}) => {
    const {
        origin = '*',
        methods = ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders = ['Content-Type', 'Authorization'],
        credentials = false
    } = options;
    
    return (req, res, next) => {
        // ตั้ง CORS headers
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', methods.join(', '));
        res.header('Access-Control-Allow-Headers', allowedHeaders.join(', '));
        
        if (credentials) {
            res.header('Access-Control-Allow-Credentials', 'true');
        }
        
        // Handle preflight requests
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
        
        next();
    };
};

app.use(customCors({
    origin: 'http://localhost:3000',
    credentials: true
}));
```

### **Middleware Patterns:**

#### **1. Conditional Middleware:**
```javascript
const conditionalMiddleware = (condition, middleware) => {
    return (req, res, next) => {
        if (condition(req)) {
            return middleware(req, res, next);
        }
        next();
    };
};

// ใช้งาน
app.use(conditionalMiddleware(
    req => req.url.startsWith('/api'),
    authenticate
));
```

#### **2. Async Middleware Wrapper:**
```javascript
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// ใช้กับ async middleware
app.get('/api/users', asyncHandler(async (req, res) => {
    const users = await User.find(); // อาจ throw error
    res.json(users);
}));
```

#### **3. Middleware Factory:**
```javascript
const createValidator = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        
        if (error) {
            return res.status(400).json({
                error: 'Validation failed',
                details: error.details.map(detail => detail.message)
            });
        }
        
        req.validatedBody = value;
        next();
    };
};

// สร้าง validators
const validateUserCreate = createValidator(userCreateSchema);
const validateUserUpdate = createValidator(userUpdateSchema);

app.post('/api/users', validateUserCreate, createUser);
app.put('/api/users/:id', validateUserUpdate, updateUser);
```

### **Middleware Composition:**
```javascript
const compose = (...middlewares) => {
    return (req, res, next) => {
        const dispatch = (i) => {
            if (i >= middlewares.length) return next();
            
            const middleware = middlewares[i];
            middleware(req, res, () => dispatch(i + 1));
        };
        
        dispatch(0);
    };
};

// รวม middlewares
const apiMiddleware = compose(
    logger,
    rateLimit(100),
    authenticate,
    validateApiKey
);

app.use('/api', apiMiddleware);
```

### **Error Handling ใน Middleware:**
```javascript
const safeMiddleware = (middleware) => {
    return (req, res, next) => {
        try {
            middleware(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

// Global error handler
app.use((err, req, res, next) => {
    console.error('Middleware error:', err);
    
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    res.status(500).json({
        error: 'Internal server error',
        requestId: req.requestId
    });
});
```

**Custom Middleware = พลังในการควบคุม Request-Response! 💪**

---


---

## สไลด์ 36: Express Generator และ Project Structure 🏗️

### **Express Generator คืออะไร?**
> **เครื่องมือสร้างโครงสร้างโปรเจค Express แบบมาตรฐาน**

### **การติดตั้งและใช้งาน:**
```bash
# ติดตั้ง Express Generator
npm install -g express-generator

# สร้างโปรเจคใหม่
express my-express-app

# หรือกำหนด template engine
express --view=ejs my-express-app
express --view=pug my-express-app

# เข้าไปในโปรเจค และติดตั้ง dependencies
cd my-express-app
npm install

# รันโปรเจค
npm start
```

### **โครงสร้างที่ได้จาก Generator:**
```
my-express-app/
├── bin/
│   └── www              ← Server startup script
├── public/              ← Static files
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/              ← Route handlers
│   ├── index.js
│   └── users.js
├── views/               ← Template files
│   ├── error.pug
│   ├── index.pug
│   └── layout.pug
├── app.js               ← Main application
├── package.json
└── package-lock.json
```

### **Modern Project Structure (แนะนำ):**
```
my-api-project/
├── src/
│   ├── controllers/     ← Business logic
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── productController.js
│   ├── middleware/      ← Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── models/          ← Data models
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/          ← Route definitions
│   │   ├── auth.js
│   │   ├── users.js
│   │   └── products.js
│   ├── services/        ← Business services
│   │   ├── authService.js
│   │   ├── emailService.js
│   │   └── paymentService.js
│   ├── utils/           ← Utility functions
│   │   ├── validation.js
│   │   └── helpers.js
│   └── config/          ← Configuration
│       ├── database.js
│       └── config.js
├── tests/               ← Test files
├── public/              ← Static files
├── uploads/             ← File uploads
├── .env                 ← Environment variables
├── .gitignore
├── server.js            ← Entry point
└── package.json
```

### **Controller Pattern Example:**
```javascript
// src/controllers/userController.js
const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        next(error);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};
```

### **Benefits ของ Structure ที่ดี:**
✅ **แยกความรับผิดชอบ** - แต่ละไฟล์มีหน้าที่ชัดเจน  
✅ **ง่ายต่อการดูแล** - หาโค้ดได้เร็ว แก้ไขง่าย  
✅ **ทดสอบได้** - แยก logic ออกจาก HTTP layer  
✅ **ขยายได้** - เพิ่ม features ใหม่ได้ง่าย  
✅ **ทำงานเป็นทีม** - หลายคนทำงานได้พร้อมกัน  

**โครงสร้างที่ดี = โปรเจคที่ประสบความสำเร็จ! 🏆**

---

## สไลด์ 37: สรุปและเตรียมตัว JSON & API 🎯

### **สิ่งที่เราเรียนรู้ในหัวข้อนี้:**
✅ **Express.js Framework** - Web framework ที่ทันสมัย  
✅ **Routing System** - จัดการ URL และ HTTP methods  
✅ **Middleware Pattern** - ประมวลผล request ระหว่างทาง  
✅ **Static Files** - เสิร์ฟไฟล์ HTML, CSS, JS  
✅ **Error Handling** - จัดการ error อย่างมีระบบ  
✅ **CORS** - แก้ปัญหา Cross-Origin requests  

### **จาก HTTP Module ไปสู่ Express.js:**
```javascript
// ก่อน: HTTP Module (50+ บรรทัด)
const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ users: [] }));
    } else if (pathname === '/users' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            // จัดการ POST data
        });
    }
    // ... และอีกมากมาย
});

// หลัง: Express.js (5 บรรทัด)
const express = require('express');
const app = express();
app.use(express.json());
app.get('/users', (req, res) => res.json({ users: [] }));
app.post('/users', (req, res) => { /* จัดการ POST */ });
```

### **ความสามารถที่ได้รับ:**
🚀 **เร็วขึ้น** - เขียนโค้ดน้อยลง ได้ผลมากขึ้น  
🛡️ **ปลอดภัยขึ้น** - Middleware สำหรับรักษาความปลอดภัย  
🔧 **ยืดหยุ่นขึ้น** - ปรับแต่งได้ตามต้องการ  
📦 **พร้อมใช้** - Ecosystem ที่ใหญ่และสมบูรณ์  

### **แต่ยังขาดอะไรอยู่? 🤔**
```javascript
// ตอนนี้เราส่งข้อมูล hard-coded
app.get('/api/users', (req, res) => {
    res.json({
        users: [
            { id: 1, name: 'John', email: 'john@email.com' },
            { id: 2, name: 'Jane', email: 'jane@email.com' }
        ]
    });
});

// แต่ในโลกจริง...
// - ข้อมูลมาจากไหน? ฐานข้อมูล?
// - POST ข้อมูลแล้วเก็บไว้ไหน?
// - แก้ไข/ลบข้อมูลจัดการอย่างไร?
```

### **JSON และ API เข้ามาแก้ปัญหา! 💡**
```javascript
// เราจะเรียนรู้:
// 1. JSON format สำหรับ data exchange
// 2. REST API design patterns
// 3. CRUD operations
// 4. การเก็บข้อมูลใน File System
// 5. การ validate และ handle errors
```

### **ต่อไปเราจะเรียน:**
📊 **JSON Data Format** - โครงสร้างข้อมูลมาตรฐาน  
🔌 **API Design** - สร้าง API ที่เป็นมาตรฐาน  
💾 **Data Persistence** - เก็บข้อมูลในไฟล์  
🔄 **CRUD Operations** - Create, Read, Update, Delete  
✅ **Validation** - ตรวจสอบข้อมูลที่ถูกต้อง  

### **เป้าหมาย 2.5 ชั่วโมงต่อไป:**
*"จาก Express Server → REST API ที่สมบูรณ์"*

### **คำถามก่อนพัก:**
1. *"Express.js ทำให้การสร้างเซิร์ฟเวอร์ง่ายขึ้นอย่างไร?"*
2. *"Middleware ช่วยจัดการ request อย่างไร?"*
3. *"CORS คืออะไร และทำไมต้องจัดการ?"*

### **Preview หัวข้อต่อไป:**
หัวข้อที่ 3: **การทำงานกับข้อมูล JSON และ API ง่ายๆ**
- ออกแบบ REST API ที่เป็นมาตรฐาน
- จัดการข้อมูลด้วย File System
- สร้าง CRUD operations ที่สมบูรณ์
- Validation และ Error Handling

**พร้อมสร้าง API จริงๆ แล้วหรือยัง? 🚀**

---

## สไลด์ 38: 🎉 สรุปหัวข้อที่ 2: Express.js สำหรับสร้างเว็บเซิร์ฟเวอร์

### **Journey ที่เราผ่านมา:**
```
🌐 HTTP Module (ยุคหิน)
        ↓
🚀 Express.js (ยุคสมัยใหม่)
        ↓
🛣️ Routing & Middleware
        ↓
🔧 Advanced Features
        ↓
📁 Project Structure
        ↓
🎯 พร้อมสำหรับ JSON & API!
```

### **ความรู้ที่ได้:**
🧠 **แนวคิด** - Framework, Middleware, Routing  
🛠️ **เครื่องมือ** - Express.js, CORS, Error Handling  
💻 **การเขียนโค้ด** - Routes, Middleware, Static Files  
🏗️ **โครงสร้าง** - Project Organization, Best Practices  

### **ทักษะใหม่:**
- สร้างเว็บเซิร์ฟเวอร์ด้วย Express.js
- ออกแบบ routing และ middleware
- จัดการ static files และ CORS
- จัดการ errors อย่างมีระบบ
- เขียนโค้ดที่เป็นระเบียบและดูแลง่าย

### **เปรียบเทียบ Before & After:**

#### **Before (HTTP Module):**
```javascript
// 50+ บรรทัดสำหรับ 1 endpoint
const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ users: [] }));
    } else if (req.url === '/api/users' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                // Process data...
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});
```

#### **After (Express.js):**
```javascript
// 10 บรรทัดสำหรับ multiple endpoints
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
    const userData = req.body;
    res.status(201).json({ message: 'User created' });
});

app.listen(3000);
```

### **Production-Ready Features ที่ได้:**
✅ **Error Handling** - จัดการ errors อย่างเป็นระบบ  
✅ **CORS Support** - รองรับ cross-origin requests  
✅ **Security** - Helmet, rate limiting, validation  
✅ **Logging** - Morgan middleware  
✅ **File Serving** - Static files middleware  
✅ **Body Parsing** - JSON และ form data  

### **คำถามทบทวน:**
1. *"Express.js ช่วยลดความซับซ้อนในการสร้างเซิร์ฟเวอร์อย่างไร?"*
2. *"Middleware pattern ให้ประโยชน์อะไรบ้าง?"*
3. *"โครงสร้างโปรเจคที่ดีมีลักษณะอย่างไร?"*

### **ขั้นตอนต่อไป:**
หัวข้อที่ 3: **การทำงานกับข้อมูล JSON และ API ง่ายๆ**
- ข้อมูลจริงแทน hard-coded values
- REST API design patterns
- File-based data storage
- Complete CRUD operations

**เตรียมตัวสร้าง API ที่ใช้งานได้จริง! 🎯**

### **Key Takeaways:**
💡 **Express.js ทำให้ Node.js development ง่ายขึ้นมาก**  
💡 **Middleware คือหัวใจของ Express architecture**  
💡 **Routing ที่ดีทำให้ API มีระเบียบ**  
💡 **Error handling ที่ถูกต้องสำคัญมาก**  
💡 **Project structure ที่ดีช่วยในการทำงานเป็นทีม**  

**จากนี้ไป คุณคือ Express.js Developer แล้ว! 🎊**

---
