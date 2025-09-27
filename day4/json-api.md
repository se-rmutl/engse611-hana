# หัวข้อที่ 3: การทำงานกับข้อมูล JSON และ API ง่ายๆ
## วันที่ 4: Node.js และ Express.js เบื้องต้น
### สำหรับนักศึกษาวิศวกรรมซอฟต์แวร์ (2.5 ชั่วโมง)

---

## สไลด์ 39: ยินดีต้อนรับสู่ยุค Data-Driven API! 🎯

### **เราเดินทางมาไกลแล้ว:**
✅ **Node.js & NPM** - JavaScript runtime และ package management  
✅ **Express.js** - Web framework ที่ทันสมัย  
✅ **Routing & Middleware** - การจัดการ requests อย่างมีระบบ  

### **แต่ยังขาดหัวใจสำคัญ... 💔**
```javascript
// เราทำได้แค่นี้:
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },  // ข้อมูล hard-coded
        { id: 2, name: 'Jane' }   // ไม่เปลี่ยนแปลง
    ]);
});

// แต่โลกจริงต้องการ:
// - ข้อมูลที่เปลี่ยนแปลงได้
// - การเพิ่ม/แก้ไข/ลบข้อมูล
// - การเก็บข้อมูลถาวร
// - API ที่เป็นมาตรฐาน
```

### **วันนี้เราจะปลดล็อค:**
📊 **JSON** - ภาษากลางของ Web APIs  
🔌 **REST API** - มาตรฐานการออกแบบ API  
💾 **Data Persistence** - เก็บข้อมูลถาวรในไฟล์  
🔄 **CRUD Operations** - Create, Read, Update, Delete  
✅ **Validation** - ตรวจสอบข้อมูลอย่างมีระบบ  

### **เป้าหมายท้ายวัน:**
*"จาก Static API → Dynamic REST API ที่ใช้งานได้จริง"*

**พร้อมสร้าง API ที่โลกจริงใช้งานหรือยัง? 🚀**

---

## สไลด์ 40: JSON คืออะไร? ทำไมต้องรู้? 📊

### **JSON = JavaScript Object Notation**
> **"รูปแบบข้อมูลที่ทุกภาษาโปรแกรมเข้าใจ"**

### **เปรียบเทียบให้เข้าใจ:**
```javascript
// JavaScript Object (ใช้ได้แค่ใน JavaScript)
const user = {
    name: "สมชาย",
    age: 25,
    isActive: true
};

// JSON String (ทุกภาษาเข้าใจ)
const jsonString = '{"name":"สมชาย","age":25,"isActive":true}';

// การแปลงไป-กลับ
const toJSON = JSON.stringify(user);     // Object → JSON String
const fromJSON = JSON.parse(jsonString); // JSON String → Object
```

### **ทำไม JSON ถึงสำคัญ?**
```
🌐 Frontend (React) ← JSON → Backend (Express)
📱 Mobile App       ← JSON → API Server
🖥️ Desktop App      ← JSON → Cloud Service
🤖 AI/ML System     ← JSON → Data Pipeline
```

### **JSON Rules ที่ต้องจำ:**
```json
{
    "name": "ต้องใช้ double quotes",
    "age": 25,
    "isStudent": true,
    "hobbies": ["reading", "coding"],
    "address": {
        "city": "Bangkok",
        "zipcode": "10110"
    },
    "spouse": null
}
```

### **ข้อมูลประเภทที่ JSON รองรับ:**
✅ **String** - `"text"`  
✅ **Number** - `123`, `45.67`  
✅ **Boolean** - `true`, `false`  
✅ **Array** - `[1, 2, 3]`  
✅ **Object** - `{"key": "value"}`  
✅ **null** - `null`  
❌ **undefined** - ไม่รองรับ  
❌ **Function** - ไม่รองรับ  
❌ **Date** - ต้องแปลงเป็น string  

### **คำถามสำคัญ:**
*"ถ้า JSON เป็นแค่ string แล้วทำไมถึงเรียกว่า 'Object' Notation?"*

**เพราะมันออกแบบมาจาก JavaScript Object syntax! 💡**

---

## สไลด์ 41: JSON ในโลกจริง - ตัวอย่างจาก APIs ดัง 🌟

### **Instagram API Response:**
```json
{
    "data": {
        "id": "17841405793187218",
        "media_type": "IMAGE",
        "media_url": "https://scontent.cdninstagram.com/...",
        "caption": "Beautiful sunset! 🌅",
        "timestamp": "2024-01-15T14:30:00+0000",
        "like_count": 1247,
        "comments_count": 23,
        "owner": {
            "username": "photographer_pro",
            "id": "17841405622187218"
        }
    }
}
```

### **YouTube API Response:**
```json
{
    "kind": "youtube#video",
    "etag": "abc123",
    "items": [
        {
            "id": "dQw4w9WgXcQ",
            "snippet": {
                "title": "How to Learn Node.js",
                "description": "Complete tutorial for beginners",
                "publishedAt": "2024-01-10T10:00:00Z",
                "channelTitle": "Tech Academy",
                "viewCount": "1250000",
                "likeCount": "45000"
            }
        }
    ]
}
```

### **E-commerce API (Product):**
```json
{
    "product": {
        "id": "prod_123",
        "name": "iPhone 15 Pro",
        "price": 35900,
        "currency": "THB",
        "inStock": true,
        "categories": ["electronics", "smartphones"],
        "specifications": {
            "storage": "256GB",
            "color": "Space Black",
            "screen": "6.1 inch"
        },
        "images": [
            "https://cdn.example.com/iphone15pro-1.jpg",
            "https://cdn.example.com/iphone15pro-2.jpg"
        ],
        "reviews": {
            "average": 4.8,
            "count": 1337
        }
    }
}
```

### **Weather API Response:**
```json
{
    "location": {
        "name": "Bangkok",
        "country": "Thailand"
    },
    "current": {
        "temperature": 32,
        "humidity": 75,
        "condition": "Partly Cloudy",
        "wind": {
            "speed": 10,
            "direction": "NE"
        }
    },
    "forecast": [
        {
            "date": "2024-01-15",
            "high": 34,
            "low": 26,
            "condition": "Sunny"
        }
    ]
}
```

### **สิ่งที่สังเกต:**
🔍 **Consistent Structure** - มีรูปแบบที่เป็นมาตรฐาน  
🔍 **Nested Objects** - ข้อมูลซับซ้อนจัดระเบียบได้  
🔍 **Arrays** - รายการข้อมูลหลายๆ ตัว  
🔍 **Metadata** - ข้อมูลเกี่ยวกับข้อมูล (count, timestamp)  
🔍 **Meaningful Keys** - ชื่อ key บอกความหมายได้ชัดเจน  

### **คำถามให้คิด:**
*"API ดังๆ เหล่านี้มีรูปแบบ JSON ที่คล้ายกันไหม? ทำไม?"*

**เพราะเป็นมาตรฐานที่ดีที่ทุกคนยอมรับ! 🎯**

---

## สไลด์ 42: JSON Operations ใน Express.js ⚙️

### **การรับ JSON Data (เจาะลึก):**
```javascript
const express = require('express');
const app = express();

// 🔧 Middleware สำคัญ!
app.use(express.json());

// ✅ ก่อนมี express.json()
app.post('/users', (req, res) => {
    console.log(req.body); // undefined 😢
});

// ✅ หลังมี express.json()
app.post('/users', (req, res) => {
    console.log(req.body); // { name: "John", email: "john@email.com" } 🎉
    
    const { name, email } = req.body;
    res.json({
        message: 'User created successfully',
        user: { name, email }
    });
});
```

### **การส่ง JSON Response (หลายแบบ):**
```javascript
// 1. ส่ง Object โดยตรง
app.get('/simple', (req, res) => {
    res.json({ message: 'Hello World' });
});

// 2. ส่งพร้อม Status Code
app.post('/create', (req, res) => {
    res.status(201).json({
        success: true,
        message: 'Created successfully'
    });
});

// 3. ส่ง Array
app.get('/fruits', (req, res) => {
    res.json(['apple', 'banana', 'orange']);
});

// 4. ส่งข้อมูลซับซ้อน
app.get('/dashboard', (req, res) => {
    res.json({
        user: {
            name: 'John Doe',
            role: 'admin'
        },
        stats: {
            totalUsers: 1250,
            activeToday: 387
        },
        notifications: [
            { id: 1, message: 'New user registered' },
            { id: 2, message: 'Server maintenance at 2 AM' }
        ]
    });
});
```

### **JSON Validation และ Error Handling:**
```javascript
app.post('/api/product', (req, res) => {
    const { name, price, category } = req.body;
    
    // Basic Validation
    const errors = [];
    
    if (!name || name.trim().length < 2) {
        errors.push('Product name must be at least 2 characters');
    }
    
    if (!price || price <= 0) {
        errors.push('Price must be greater than 0');
    }
    
    if (!category) {
        errors.push('Category is required');
    }
    
    // ถ้ามี errors
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    // ถ้าไม่มี errors
    res.status(201).json({
        success: true,
        message: 'Product created successfully',
        product: {
            id: Date.now(),
            name: name.trim(),
            price: parseFloat(price),
            category: category,
            createdAt: new Date().toISOString()
        }
    });
});
```

### **JSON Response Patterns ที่ดี:**
```javascript
// ✅ Success Response Pattern
{
    "success": true,
    "data": { /* actual data */ },
    "message": "Operation completed successfully"
}

// ✅ Error Response Pattern
{
    "success": false,
    "error": "Error message",
    "code": "VALIDATION_ERROR",
    "details": ["field1 is required", "field2 is invalid"]
}

// ✅ Paginated Response Pattern
{
    "success": true,
    "data": [/* array of items */],
    "pagination": {
        "currentPage": 1,
        "totalPages": 10,
        "totalItems": 100,
        "itemsPerPage": 10
    }
}
```

### **คำถามสำคัญ:**
*"ถ้าลืมใส่ express.json() middleware จะเกิดอะไรขึ้น?"*

**req.body จะเป็น undefined เสมอ! 😱**

---

## สไลด์ 43: REST API คืออะไร? ทำไมต้องเป็นมาตรฐาน? 🔌

### **REST = REpresentational State Transfer**
> **"หลักการออกแบบ API ที่ทำให้ทุกคนเข้าใจง่าย"**

### **ปัญหาก่อนมี REST:**
```javascript
// 😵 API แบบไม่เป็นมาตรฐาน
app.get('/getUserList');           // ดึงรายการผู้ใช้
app.get('/createNewUser');         // สร้างผู้ใช้? (ใช้ GET ผิด!)
app.get('/updateUserInfo');        // แก้ไขผู้ใช้? (ใช้ GET ผิด!)
app.get('/deleteUserById');        // ลบผู้ใช้? (ใช้ GET ผิด!)
app.get('/getOneUserInfo');        // ดึงผู้ใช้หนึ่งคน

// 🤔 Developer อื่นจะงงมาก:
// - endpoint ชื่ออะไร?
// - ใช้ HTTP method อะไร?
// - ส่งข้อมูลอย่างไร?
```

### **REST API มาแก้ปัญหา:**
```javascript
// ✅ REST API - เข้าใจง่าย เป็นมาตรฐาน
app.get('/api/users');          // ดึงรายการผู้ใช้ทั้งหมด
app.get('/api/users/:id');      // ดึงผู้ใช้ตาม ID
app.post('/api/users');         // สร้างผู้ใช้ใหม่
app.put('/api/users/:id');      // แก้ไขผู้ใช้ทั้งหมด
app.patch('/api/users/:id');    // แก้ไขผู้ใช้บางส่วน
app.delete('/api/users/:id');   // ลบผู้ใช้

// 🎉 Developer อื่นเข้าใจทันที!
```

### **หลักการ REST ที่สำคัญ:**

#### **1. Resource-Based URLs:**
```
/api/users          ← Collection (รายการ)
/api/users/123      ← Individual Resource (รายการเดียว)
/api/products       ← Collection
/api/products/456   ← Individual Resource
```

#### **2. HTTP Methods มีความหมาย:**
```
GET     → อ่านข้อมูล (Read)
POST    → สร้างข้อมูลใหม่ (Create)
PUT     → แก้ไขข้อมูลทั้งหมด (Update/Replace)
PATCH   → แก้ไขข้อมูลบางส่วน (Partial Update)
DELETE  → ลบข้อมูล (Delete)
```

#### **3. HTTP Status Codes:**
```
200 OK              → สำเร็จ (GET, PUT, PATCH)
201 Created         → สร้างสำเร็จ (POST)
204 No Content      → สำเร็จแต่ไม่มีข้อมูลส่งกลับ (DELETE)
400 Bad Request     → ข้อมูลผิด
401 Unauthorized    → ไม่มีสิทธิ์
404 Not Found       → ไม่พบข้อมูล
500 Internal Error  → เซิร์ฟเวอร์ผิดพลาด
```

#### **4. JSON for Data Exchange:**
```javascript
// Request Body (POST/PUT/PATCH)
{
    "name": "John Doe",
    "email": "john@example.com"
}

// Response Body
{
    "success": true,
    "data": {
        "id": 123,
        "name": "John Doe",
        "email": "john@example.com",
        "createdAt": "2024-01-15T10:30:00Z"
    }
}
```

### **ตัวอย่าง REST API ที่สมบูรณ์:**
```javascript
// Users API
GET    /api/users           → ดึงรายการผู้ใช้ทั้งหมด
GET    /api/users/123       → ดึงผู้ใช้ ID 123
POST   /api/users           → สร้างผู้ใช้ใหม่
PUT    /api/users/123       → แก้ไขผู้ใช้ ID 123 ทั้งหมด
PATCH  /api/users/123       → แก้ไขผู้ใช้ ID 123 บางส่วน
DELETE /api/users/123       → ลบผู้ใช้ ID 123

// Products API
GET    /api/products        → ดึงรายการสินค้าทั้งหมด
GET    /api/products/456    → ดึงสินค้า ID 456
POST   /api/products        → สร้างสินค้าใหม่
PUT    /api/products/456    → แก้ไขสินค้า ID 456
DELETE /api/products/456    → ลบสินค้า ID 456
```

### **ประโยชน์ของ REST:**
✅ **เข้าใจง่าย** - Developer ใหม่เรียนรู้ได้เร็ว  
✅ **เป็นมาตรฐาน** - ใช้หลักการเดียวกันทั่วโลก  
✅ **Scalable** - ขยายได้ง่าย  
✅ **Cacheable** - Cache ได้ง่าย  
✅ **Stateless** - ไม่เก็บ state ที่เซิร์ฟเวอร์  

### **คำถามท้าทาย:**
*"ถ้า Facebook, Twitter, Instagram ใช้ REST API ทำไมเราไม่ใช้?"*

**เพราะมันเป็น industry standard! 🌟**

---

## สไลด์ 44: CRUD Operations - หัวใจของ API 🔄

### **CRUD = Create, Read, Update, Delete**
> **"4 การดำเนินการพื้นฐานที่ทุก API ต้องมี"**

### **CRUD กับ HTTP Methods:**
```
Create  → POST    → สร้างข้อมูลใหม่
Read    → GET     → อ่านข้อมูล
Update  → PUT/PATCH → แก้ไขข้อมูล
Delete  → DELETE  → ลบข้อมูล
```

### **ตัวอย่าง CRUD API สำหรับ "Books":**

#### **📚 CREATE - เพิ่มหนังสือใหม่:**
```javascript
// POST /api/books
app.post('/api/books', (req, res) => {
    const { title, author, price, isbn } = req.body;
    
    // Validation
    if (!title || !author || !price) {
        return res.status(400).json({
            success: false,
            message: 'Title, author, and price are required'
        });
    }
    
    // สร้างหนังสือใหม่
    const newBook = {
        id: Date.now(),
        title,
        author,
        price: parseFloat(price),
        isbn,
        createdAt: new Date().toISOString()
    };
    
    // เพิ่มลงในข้อมูล (จำลอง)
    books.push(newBook);
    
    res.status(201).json({
        success: true,
        message: 'Book created successfully',
        data: newBook
    });
});
```

#### **📖 READ - อ่านข้อมูลหนังสือ:**
```javascript
// GET /api/books - ดึงหนังสือทั้งหมด
app.get('/api/books', (req, res) => {
    const { page = 1, limit = 10, search } = req.query;
    
    let filteredBooks = books;
    
    // ค้นหา (ถ้ามี)
    if (search) {
        filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    
    res.json({
        success: true,
        data: paginatedBooks,
        pagination: {
            currentPage: parseInt(page),
            totalPages: Math.ceil(filteredBooks.length / limit),
            totalItems: filteredBooks.length,
            itemsPerPage: parseInt(limit)
        }
    });
});

// GET /api/books/:id - ดึงหนังสือเล่มเดียว
app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    res.json({
        success: true,
        data: book
    });
});
```

#### **✏️ UPDATE - แก้ไขข้อมูลหนังสือ:**
```javascript
// PUT /api/books/:id - แก้ไขทั้งหมด
app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, price, isbn } = req.body;
    
    const bookIndex = books.findIndex(b => b.id === bookId);
    
    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    // แทนที่ข้อมูลทั้งหมด
    books[bookIndex] = {
        id: bookId,
        title,
        author,
        price: parseFloat(price),
        isbn,
        updatedAt: new Date().toISOString()
    };
    
    res.json({
        success: true,
        message: 'Book updated successfully',
        data: books[bookIndex]
    });
});

// PATCH /api/books/:id - แก้ไขบางส่วน
app.patch('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updates = req.body;
    
    const bookIndex = books.findIndex(b => b.id === bookId);
    
    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    // อัปเดตเฉพาะ fields ที่ส่งมา
    books[bookIndex] = {
        ...books[bookIndex],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    
    res.json({
        success: true,
        message: 'Book updated successfully',
        data: books[bookIndex]
    });
});
```

#### **🗑️ DELETE - ลบหนังสือ:**
```javascript
// DELETE /api/books/:id
app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);
    
    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    const deletedBook = books.splice(bookIndex, 1)[0];
    
    res.json({
        success: true,
        message: 'Book deleted successfully',
        data: deletedBook
    });
});
```

### **CRUD Operations Testing:**
```bash
# CREATE
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code","author":"Robert Martin","price":599}'

# READ All
curl http://localhost:3000/api/books

# READ One
curl http://localhost:3000/api/books/1

# UPDATE
curl -X PUT http://localhost:3000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code Updated","author":"Robert Martin","price":699}'

# DELETE
curl -X DELETE http://localhost:3000/api/books/1
```

### **คำถามสำคัญ:**
*"PUT กับ PATCH ต่างกันอย่างไร? เมื่อไหร่ควรใช้อันไหน?"*

**PUT = แทนที่ทั้งหมด, PATCH = แก้ไขบางส่วน! 🎯**

---

## สไลด์ 45: File-based Data Storage - เก็บข้อมูลถาวร 💾

### **ปัญหาข้อมูลใน Memory:**
```javascript
// ❌ ข้อมูลหายเมื่อ restart server
let users = [
    { id: 1, name: 'John', email: 'john@email.com' }
];

app.post('/api/users', (req, res) => {
    users.push(req.body); // เก็บใน memory
    res.json({ message: 'User added' });
});

// 💥 Server restart → users = [] (ข้อมูลหาย!)
```

### **วิธีแก้: เก็บข้อมูลในไฟล์**
```javascript
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'users.json');

// ฟังก์ชันอ่านข้อมูลจากไฟล์
const loadUsers = () => {
    try {
        // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
        if (!fs.existsSync(DATA_FILE)) {
            // ถ้าไม่มี สร้างไฟล์ใหม่
            saveUsers([]);
            return [];
        }
        
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
};

// ฟังก์ชันบันทึกข้อมูลลงไฟล์
const saveUsers = (users) => {
    try {
        // สร้างโฟลเดอร์ถ้ายังไม่มี
        const dataDir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        
        // เขียนไฟล์ (format สวยด้วย 2 spaces)
        fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
        console.log('✅ Users saved to file');
    } catch (error) {
        console.error('❌ Error saving users:', error);
        throw error;
    }
};
```

### **CRUD Operations กับ File Storage:**
```javascript
// โหลดข้อมูลเมื่อเริ่มต้น server
let users = loadUsers();

// CREATE - เพิ่มผู้ใช้ใหม่
app.post('/api/users', (req, res) => {
    try {
        const { name, email } = req.body;
        
        // Validation
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Name and email are required'
            });
        }
        
        // ตรวจสอบ email ซ้ำ
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists'
            });
        }
        
        // สร้างผู้ใช้ใหม่
        const newUser = {
            id: Date.now(),
            name,
            email,
            createdAt: new Date().toISOString()
        };
        
        // เพิ่มใน memory
        users.push(newUser);
        
        // บันทึกลงไฟล์
        saveUsers(users);
        
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// READ - ดึงผู้ใช้ทั้งหมด
app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        data: users,
        total: users.length
    });
});

// UPDATE - แก้ไขผู้ใช้
app.put('/api/users/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const { name, email } = req.body;
        
        const userIndex = users.findIndex(u => u.id === userId);
        
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        
        // อัปเดตข้อมูล
        users[userIndex] = {
            ...users[userIndex],
            name,
            email,
            updatedAt: new Date().toISOString()
        };
        
        // บันทึกลงไฟล์
        saveUsers(users);
        
        res.json({
            success: true,
            message: 'User updated successfully',
            data: users[userIndex]
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// DELETE - ลบผู้ใช้
app.delete('/api/users/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const userIndex = users.findIndex(u => u.id === userId);
        
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        
        // ลบออกจาก array
        const deletedUser = users.splice(userIndex, 1)[0];
        
        // บันทึกลงไฟล์
        saveUsers(users);
        
        res.json({
            success: true,
            message: 'User deleted successfully',
            data: deletedUser
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
```

### **โครงสร้างไฟล์:**
```
my-api-project/
├── data/
│   ├── users.json       ← ข้อมูลผู้ใช้
│   ├── products.json    ← ข้อมูลสินค้า
│   └── orders.json      ← ข้อมูลคำสั่งซื้อ
├── server.js
└── package.json
```

### **ตัวอย่างไฟล์ data/users.json:**
```json
[
  {
    "id": 1642158720000,
    "name": "สมชาย ใจดี",
    "email": "somchai@email.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "id": 1642158820000,
    "name": "สมหญิง รักเรียน",
    "email": "somying@email.com",
    "createdAt": "2024-01-15T10:31:00.000Z"
  }
]
```

### **Async/Await Pattern (ขั้นสูง):**
```javascript
const fs = require('fs').promises;

// Async functions
const loadUsersAsync = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // ถ้าไฟล์ไม่มี สร้างใหม่
        await saveUsersAsync([]);
        return [];
    }
};

const saveUsersAsync = async (users) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
};

// ใช้ในAPI
app.post('/api/users', async (req, res) => {
    try {
        const users = await loadUsersAsync();
        
        // เพิ่มผู้ใช้ใหม่
        const newUser = { /* ... */ };
        users.push(newUser);
        
        await saveUsersAsync(users);
        
        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
```

### **ข้อดีของ File Storage:**
✅ **ข้อมูลคงอยู่** - ไม่หายเมื่อ restart server  
✅ **ง่ายต่อการทดสอบ** - เปิดไฟล์ดูได้ทันที  
✅ **ไม่ต้องติดตั้งฐานข้อมูล** - เหมาะสำหรับ prototype  
✅ **Version Control ได้** - สามารถ commit ข้อมูลได้  

### **ข้อจำกัด:**
❌ **Performance** - ช้าเมื่อข้อมูลเยอะ  
❌ **Concurrency** - หลายคนแก้ไขพร้อมกันได้ยาก  
❌ **Scalability** - ไม่เหมาะสำหรับ production ขนาดใหญ่  

### **คำถามให้คิด:**
*"ถ้าเรามีผู้ใช้งาน 1000 คนพร้อมกัน การใช้ file storage จะเกิดปัญหาไหม?"*

**ใช่! ต้องใช้ database จริงๆ แต่สำหรับเรียนรู้ file storage เพียงพอ! 📚**

---

## สไลด์ 46: Data Validation - ป้องกันข้อมูลผิดพลาด ✅

### **ทำไมต้อง Validate?**
```javascript
// ❌ ไม่มี Validation
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: 'User created' });
});

// 💥 ผู้ใช้ส่งข้อมูลแบบนี้มาได้:
// { "name": "", "email": "notanemail", "age": -5 }
// { "password": "123" }
// { "maliciousScript": "<script>alert('hack')</script>" }
```

### **Basic Validation:**
```javascript
const validateUser = (userData) => {
    const errors = [];
    const { name, email, age, password } = userData;
    
    // ตรวจสอบ name
    if (!name || typeof name !== 'string') {
        errors.push('Name is required and must be a string');
    } else if (name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    } else if (name.trim().length > 50) {
        errors.push('Name must not exceed 50 characters');
    }
    
    // ตรวจสอบ email
    if (!email || typeof email !== 'string') {
        errors.push('Email is required and must be a string');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }
    }
    
    // ตรวจสอบ age (optional)
    if (age !== undefined) {
        if (typeof age !== 'number' || age < 0 || age > 150) {
            errors.push('Age must be a number between 0 and 150');
        }
    }
    
    // ตรวจสอบ password (ถ้ามี)
    if (password !== undefined) {
        if (typeof password !== 'string' || password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
};

// ใช้งาน Validation
app.post('/api/users', (req, res) => {
    const validation = validateUser(req.body);
    
    if (!validation.isValid) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: validation.errors
        });
    }
    
    // ข้อมูลถูกต้อง ดำเนินการต่อ
    const newUser = {
        id: Date.now(),
        name: req.body.name.trim(),
        email: req.body.email.toLowerCase(),
        age: req.body.age,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    res.status(201).json({
        success: true,
        data: newUser
    });
});
```

### **Advanced Validation with Joi Library:**
```bash
npm install joi
```

```javascript
const Joi = require('joi');

// Schema definition
const userSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name must be at least 2 characters',
            'string.max': 'Name cannot exceed 50 characters',
            'any.required': 'Name is required'
        }),
    
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required'
        }),
    
    age: Joi.number()
        .integer()
        .min(0)
        .max(150)
        .optional()
        .messages({
            'number.min': 'Age must be at least 0',
            'number.max': 'Age cannot exceed 150'
        }),
    
    password: Joi.string()
        .min(6)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
        .optional()
        .messages({
            'string.min': 'Password must be at least 6 characters',
            'string.pattern.base': 'Password must contain at least one uppercase, lowercase, and number'
        })
});

// Validation middleware
const validateUserInput = (req, res, next) => {
    const { error, value } = userSchema.validate(req.body, {
        abortEarly: false // รายงาน error ทั้งหมด
    });
    
    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    req.validatedData = value; // เก็บข้อมูลที่ validate แล้ว
    next();
};

// ใช้งาน
app.post('/api/users', validateUserInput, (req, res) => {
    // ใช้ req.validatedData แทน req.body
    const newUser = {
        id: Date.now(),
        ...req.validatedData,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    res.status(201).json({
        success: true,
        data: newUser
    });
});
```

### **Sanitization - ทำความสะอาดข้อมูล:**
```javascript
const sanitizeUser = (userData) => {
    return {
        name: userData.name?.trim(),
        email: userData.email?.toLowerCase().trim(),
        age: userData.age ? parseInt(userData.age) : undefined
    };
};

app.post('/api/users', (req, res) => {
    // 1. Sanitize data
    const sanitizedData = sanitizeUser(req.body);
    
    // 2. Validate data
    const validation = validateUser(sanitizedData);
    
    if (!validation.isValid) {
        return res.status(400).json({
            success: false,
            errors: validation.errors
        });
    }
    
    // 3. Process clean data
    const newUser = {
        id: Date.now(),
        ...sanitizedData,
        createdAt: new Date().toISOString()
    };
    
    res.status(201).json({
        success: true,
        data: newUser
    });
});
```

### **Common Validation Patterns:**
```javascript
// ตรวจสอบ ID format
const isValidId = (id) => {
    return Number.isInteger(parseInt(id)) && parseInt(id) > 0;
};

// ตรวจสอบ required fields
const hasRequiredFields = (data, requiredFields) => {
    return requiredFields.every(field => 
        data[field] !== undefined && data[field] !== null && data[field] !== ''
    );
};

// ตรวจสอบ enum values
const isValidCategory = (category) => {
    const validCategories = ['electronics', 'clothing', 'books', 'food'];
    return validCategories.includes(category);
};

// ตรวจสอบ file extensions
const isValidImageFile = (filename) => {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    return validExtensions.includes(extension);
};
```

### **Validation Error Response Format:**
```javascript
// ✅ Good Error Response
{
    "success": false,
    "message": "Validation failed",
    "errors": [
        "Name must be at least 2 characters",
        "Email format is invalid",
        "Age must be between 0 and 150"
    ],
    "timestamp": "2024-01-15T10:30:00Z"
}

// ❌ Bad Error Response
{
    "error": "bad data"
}
```

### **คำถามสำคัญ:**
*"ทำไมต้อง validate ทั้งในฝั่ง Frontend และ Backend? validate ฝั่งเดียวไม่พอหรือ?"*

**Frontend validation = UX, Backend validation = Security! 🛡️**

---

## สไลด์ 47: Error Handling สำหรับ API ⚠️

### **ประเภทของ Errors ใน API:**

#### **1. Client Errors (4xx):**
```javascript
// 400 Bad Request - ข้อมูลผิด
app.post('/api/users', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            success: false,
            error: 'Bad Request',
            message: 'Name is required',
            code: 'MISSING_REQUIRED_FIELD'
        });
    }
});

// 401 Unauthorized - ไม่มีสิทธิ์
app.get('/api/admin', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized',
            message: 'Access token is required',
            code: 'MISSING_TOKEN'
        });
    }
});

// 404 Not Found - ไม่พบข้อมูล
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({
            success: false,
            error: 'Not Found',
            message: 'User not found',
            code: 'USER_NOT_FOUND'
        });
    }
});

// 409 Conflict - ข้อมูลซ้ำ
app.post('/api/users', (req, res) => {
    const existingUser = users.find(u => u.email === req.body.email);
    if (existingUser) {
        return res.status(409).json({
            success: false,
            error: 'Conflict',
            message: 'Email already exists',
            code: 'DUPLICATE_EMAIL'
        });
    }
});
```

#### **2. Server Errors (5xx):**
```javascript
// 500 Internal Server Error - เซิร์ฟเวอร์ผิดพลาด
app.get('/api/users', (req, res) => {
    try {
        const users = loadUsers(); // อาจ throw error
        res.json({ success: true, data: users });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            message: 'Something went wrong on our end',
            code: 'DATABASE_ERROR'
        });
    }
});
```

### **Centralized Error Handler:**
```javascript
// Custom Error Class
class ApiError extends Error {
    constructor(statusCode, message, code = null) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = true;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

// Error Factory Functions
const createBadRequestError = (message, code) => {
    return new ApiError(400, message, code);
};

const createNotFoundError = (message, code) => {
    return new ApiError(404, message, code);
};

const createConflictError = (message, code) => {
    return new ApiError(409, message, code);
};

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
    console.error('💥 Error:', err);
    
    let statusCode = 500;
    let message = 'Internal server error';
    let code = 'INTERNAL_ERROR';
    
    // ถ้าเป็น operational error
    if (err.isOperational) {
        statusCode = err.statusCode;
        message = err.message;
        code = err.code;
    }
    
    // ถ้าเป็น validation error จาก Joi
    if (err.isJoi) {
        statusCode = 400;
        message = 'Validation failed';
        code = 'VALIDATION_ERROR';
    }
    
    // ถ้าเป็น JSON parsing error
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        statusCode = 400;
        message = 'Invalid JSON format';
        code = 'INVALID_JSON';
    }
    
    res.status(statusCode).json({
        success: false,
        error: {
            message: message,
            code: code,
            timestamp: new Date().toISOString(),
            path: req.originalUrl,
            method: req.method
        },
        // เฉพาะ development เท่านั้น
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

// ต้องวางหลัง routes ทั้งหมด
app.use(errorHandler);
```

### **การใช้งาน Error Handler:**
```javascript
// ใน route handlers
app.get('/api/users/:id', async (req, res, next) => {
    try {
        const userId = parseInt(req.params.id);
        
        if (isNaN(userId) || userId <= 0) {
            throw createBadRequestError('Invalid user ID', 'INVALID_USER_ID');
        }
        
        const users = await loadUsersAsync();
        const user = users.find(u => u.id === userId);
        
        if (!user) {
            throw createNotFoundError('User not found', 'USER_NOT_FOUND');
        }
        
        res.json({
            success: true,
            data: user
        });
        
    } catch (error) {
        next(error); // ส่งไป error handler
    }
});

// Async wrapper helper
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

// ใช้ async wrapper
app.get('/api/users/:id', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    
    if (isNaN(userId) || userId <= 0) {
        throw createBadRequestError('Invalid user ID', 'INVALID_USER_ID');
    }
    
    const users = await loadUsersAsync();
    const user = users.find(u => u.id === userId);
    
    if (!user) {
        throw createNotFoundError('User not found', 'USER_NOT_FOUND');
    }
    
    res.json({
        success: true,
        data: user
    });
}));
```

### **404 Handler สำหรับ Unknown Routes:**
```javascript
// ต้องวางหลัง routes ทั้งหมด แต่ก่อน error handler
app.all('*', (req, res, next) => {
    const error = createNotFoundError(
        `Can't find ${req.originalUrl} on this server`,
        'ROUTE_NOT_FOUND'
    );
    next(error);
});

app.use(errorHandler);
```

### **Error Response Examples:**
```javascript
// Validation Error
{
    "success": false,
    "error": {
        "message": "Validation failed",
        "code": "VALIDATION_ERROR",
        "details": [
            "Name must be at least 2 characters",
            "Email format is invalid"
        ],
        "timestamp": "2024-01-15T10:30:00Z",
        "path": "/api/users",
        "method": "POST"
    }
}

// Not Found Error
{
    "success": false,
    "error": {
        "message": "User not found",
        "code": "USER_NOT_FOUND",
        "timestamp": "2024-01-15T10:30:00Z",
        "path": "/api/users/999",
        "method": "GET"
    }
}

// Server Error
{
    "success": false,
    "error": {
        "message": "Database connection failed",
        "code": "DATABASE_ERROR",
        "timestamp": "2024-01-15T10:30:00Z",
        "path": "/api/users",
        "method": "GET"
    }
}
```

### **Best Practices:**
✅ **เฉพาะข้อมูลที่จำเป็น** - ไม่เปิดเผย stack trace ใน production  
✅ **Error codes** - ใช้สำหรับ frontend handle errors  
✅ **Consistent format** - รูปแบบ error response เดียวกันทั้งระบบ  
✅ **Logging** - บันทึก errors สำหรับ debugging  
✅ **User-friendly messages** - ข้อความที่ผู้ใช้เข้าใจได้  

### **คำถามให้คิด:**
*"ทำไมต้องแยก error code ออกจาก error message? ใช้ message อย่างเดียวไม่ได้หรือ?"*

**Error code = สำหรับโปรแกรม, Error message = สำหรับคน! 🤖👨‍💻**

---

## สไลด์ 48: API Testing ด้วย Postman และ curl 🧪

### **ทำไมต้อง Test API?**
```javascript
// เราสร้าง API แล้ว แต่...
app.post('/api/users', (req, res) => {
    // โค้ดยาวๆ 50 บรรทัด
});

// คำถาม:
// - API ทำงานถูกต้องไหม?
// - Response format เป็นไปตามที่ต้องการไหม?
// - Error handling ทำงานไหม?
// - Validation ครบไหม?
```

### **Testing ด้วย curl (Command Line):**

#### **GET Requests:**
```bash
# ดึงข้อมูลทั้งหมด
curl http://localhost:3000/api/users

# ดึงข้อมูลเฉพาะ ID
curl http://localhost:3000/api/users/1

# ดึงข้อมูลพร้อม query parameters
curl "http://localhost:3000/api/users?page=1&limit=5"

# ดึงข้อมูลพร้อมแสดง response headers
curl -i http://localhost:3000/api/users

# ดึงข้อมูลแบบ verbose (ดู request/response ทั้งหมด)
curl -v http://localhost:3000/api/users
```

#### **POST Requests:**
```bash
# สร้างผู้ใช้ใหม่
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมชาย",
    "email": "somchai@email.com",
    "age": 25
  }'

# ทดสอบ validation error
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "",
    "email": "invalid-email"
  }'

# ทดสอบ duplicate email
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "คนที่สอง",
    "email": "somchai@email.com"
  }'
```

#### **PUT/PATCH Requests:**
```bash
# แก้ไขข้อมูลทั้งหมด (PUT)
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมชาย แก้ไขแล้ว",
    "email": "somchai.new@email.com",
    "age": 26
  }'

# แก้ไขข้อมูลบางส่วน (PATCH)
curl -X PATCH http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "age": 27
  }'
```

#### **DELETE Requests:**
```bash
# ลบผู้ใช้
curl -X DELETE http://localhost:3000/api/users/1

# ทดสอบลบผู้ใช้ที่ไม่มี
curl -X DELETE http://localhost:3000/api/users/999
```

### **Postman - GUI Tool สำหรับ API Testing:**

#### **ข้อดีของ Postman:**
✅ **GUI ใช้งานง่าย** - ไม่ต้องจำ curl commands  
✅ **Save requests** - เก็บคำสั่งไว้ใช้ซ้ำ  
✅ **Collections** - จัดกลุ่ม API requests  
✅ **Environment variables** - สลับ server ได้ง่าย  
✅ **Response formatting** - แสดง JSON สวยงาม  
✅ **Testing scripts** - เขียน automated tests ได้  

#### **Postman Collection ตัวอย่าง:**
```json
{
  "info": {
    "name": "Users API",
    "description": "Complete CRUD operations for users"
  },
  "item": [
    {
      "name": "Get All Users",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/users",
          "host": ["{{baseUrl}}"],
          "path": ["api", "users"]
        }
      }
    },
    {
      "name": "Create User",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"สมชาย\",\n  \"email\": \"somchai@email.com\",\n  \"age\": 25\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/api/users",
          "host": ["{{baseUrl}}"],
          "path": ["api", "users"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    }
  ]
}
```

### **API Testing Checklist:**
```
✅ Happy Path Testing:
   - GET: ดึงข้อมูลที่มีอยู่
   - POST: สร้างข้อมูลใหม่สำเร็จ
   - PUT: แก้ไขข้อมูลสำเร็จ
   - DELETE: ลบข้อมูลสำเร็จ

✅ Error Path Testing:
   - GET: ดึงข้อมูลที่ไม่มี (404)
   - POST: ส่งข้อมูลผิด (400)
   - POST: ส่งข้อมูลซ้ำ (409)
   - PUT: แก้ไขข้อมูลที่ไม่มี (404)
   - DELETE: ลบข้อมูลที่ไม่มี (404)

✅ Edge Cases:
   - ส่งข้อมูลเปล่า
   - ส่งข้อมูลที่ยาวเกินไป
   - ส่ง JSON format ผิด
   - ไม่ส่ง Content-Type header
```

### **Testing Script ใน Postman:**
```javascript
// Test Response Status
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

// Test Response Format
pm.test("Response has success field", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('success');
    pm.expect(jsonData.success).to.be.true;
});

// Test Data Structure
pm.test("User has required fields", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data).to.have.property('id');
    pm.expect(jsonData.data).to.have.property('name');
    pm.expect(jsonData.data).to.have.property('email');
    pm.expect(jsonData.data).to.have.property('createdAt');
});

// Save data for next test
pm.test("Save user ID", function () {
    const jsonData = pm.response.json();
    pm.globals.set("userId", jsonData.data.id);
});
```

### **Manual Testing vs Automated Testing:**
```javascript
// Manual Testing (ทำเอง ช้า เสี่ยงพลาด)
// 1. เปิด Postman
// 2. สร้าง request ใหม่
// 3. ใส่ URL และ data
// 4. กด Send
// 5. ดูผลลัพธ์
// 6. ทำซ้ำทุกครั้งที่แก้โค้ด

// Automated Testing (เร็ว แม่นยำ)
const request = require('supertest');
const app = require('../server');

describe('Users API', () => {
    test('GET /api/users should return all users', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect(200);
            
        expect(response.body.success).toBe(true);
        expect(Array.isArray(response.body.data)).toBe(true);
    });
    
    test('POST /api/users should create new user', async () => {
        const userData = {
            name: 'Test User',
            email: 'test@email.com'
        };
        
        const response = await request(app)
            .post('/api/users')
            .send(userData)
            .expect(201);
            
        expect(response.body.success).toBe(true);
        expect(response.body.data.name).toBe(userData.name);
    });
});
```

### **Common API Testing Scenarios:**
```bash
# 1. Basic CRUD Operations
echo "=== Testing CRUD Operations ==="

# Create
USER_ID=$(curl -s -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@email.com"}' \
  | jq -r '.data.id')

echo "Created user with ID: $USER_ID"

# Read
curl -s http://localhost:3000/api/users/$USER_ID | jq

# Update
curl -s -X PUT http://localhost:3000/api/users/$USER_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated User","email":"updated@email.com"}' \
  | jq

# Delete
curl -s -X DELETE http://localhost:3000/api/users/$USER_ID | jq
```

### **Performance Testing:**
```bash
# ใช้ Apache Bench (ab) ทดสอบ load
ab -n 100 -c 10 http://localhost:3000/api/users

# ใช้ curl ทดสอบ response time
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:3000/api/users

# curl-format.txt
     time_namelookup:  %{time_namelookup}\n
        time_connect:  %{time_connect}\n
     time_appconnect:  %{time_appconnect}\n
    time_pretransfer:  %{time_pretransfer}\n
       time_redirect:  %{time_redirect}\n
  time_starttransfer:  %{time_starttransfer}\n
                     ----------\n
          time_total:  %{time_total}\n
```

### **API Documentation Testing:**
```javascript
// ตัวอย่าง API Documentation
/**
 * @api {post} /api/users Create User
 * @apiName CreateUser
 * @apiGroup Users
 * 
 * @apiParam {String} name User's full name (2-50 characters)
 * @apiParam {String} email User's email address (must be unique)
 * @apiParam {Number} [age] User's age (0-150)
 * 
 * @apiSuccess {Boolean} success Always true for successful requests
 * @apiSuccess {Object} data User object
 * @apiSuccess {Number} data.id Unique user ID
 * @apiSuccess {String} data.name User's name
 * @apiSuccess {String} data.email User's email
 * @apiSuccess {String} data.createdAt ISO timestamp
 * 
 * @apiError {Boolean} success Always false for errors
 * @apiError {String} message Error description
 * @apiError {String[]} [errors] Array of validation errors
 */
```

### **คำถามสำคัญ:**
*"ถ้าเรามี API 20 endpoints การ test ทุก endpoint ทุกครั้งที่แก้โค้ดจะใช้เวลานานไหม?"*

**ใช่! เลยต้องใช้ Automated Testing! ⚡**

---

## สไลด์ 49: สร้าง Complete REST API Project 🎯

### **เป้าหมาย: Food Menu API**
> **"API สำหรับจัดการเมนูอาหารของร้านอาหาร"**

### **ฟีเจอร์ที่จะสร้าง:**
```
📋 Food Menu API Features:
├── ดูเมนูทั้งหมด (GET /api/foods)
├── ดูเมนูตาม ID (GET /api/foods/:id)
├── ค้นหาเมนู (GET /api/foods?search=...)
├── เพิ่มเมนูใหม่ (POST /api/foods)
├── แก้ไขเมนู (PUT /api/foods/:id)
└── ลบเมนู (DELETE /api/foods/:id)

✨ พร้อม:
├── Validation ครบครัน
├── Error handling
├── File-based storage
└── API documentation
```

### **Data Model:**
```javascript
// Food Item Structure
{
    "id": 1,
    "name": "ผัดไทย",
    "description": "เส้นหมี่ผัดรสเปรี้ยวหวาน",
    "price": 120,
    "category": "อาหารจานเดียว",
    "image": "padthai.jpg",
    "available": true,
    "ingredients": ["เส้นหมี่", "กุ้ง", "ไข่", "ถั่วงอก"],
    "spicyLevel": 2,
    "nutrition": {
        "calories": 520,
        "protein": 15,
        "carbs": 65,
        "fat": 18
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
}
```

### **Project Structure:**
```
food-menu-api/
├── data/
│   └── foods.json           ← ข้อมูลเมนูอาหาร
├── middleware/
│   ├── validation.js        ← Validation middleware
│   └── errorHandler.js      ← Error handling
├── routes/
│   └── foods.js            ← Food routes
├── utils/
│   ├── fileManager.js      ← File operations
│   └── helpers.js          ← Helper functions
├── tests/
│   └── foods.test.js       ← API tests
├── server.js               ← Main server file
├── package.json
└── README.md
```

### **Step 1: Setup Project**
```bash
mkdir food-menu-api
cd food-menu-api
npm init -y
npm install express cors dotenv joi
npm install --save-dev nodemon

# สร้างโฟลเดอร์
mkdir data middleware routes utils tests
```

### **Step 2: Basic Server (server.js)**
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const foodRoutes = require('./routes/foods');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Food Menu API! 🍜',
        version: '1.0.0',
        endpoints: {
            foods: '/api/foods',
            docs: '/api/docs'
        }
    });
});

app.use('/api/foods', foodRoutes);

// Error handling
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
        availableRoutes: ['/api/foods']
    });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Food Menu API Server running on port ${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});

module.exports = app;
```

### **Step 3: Validation Middleware (middleware/validation.js)**
```javascript
const Joi = require('joi');

const foodSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.min': 'ชื่อเมนูต้องมีอย่างน้อย 2 ตัวอักษร',
            'string.max': 'ชื่อเมนูต้องไม่เกิน 100 ตัวอักษร',
            'any.required': 'กรุณาระบุชื่อเมนู'
        }),
    
    description: Joi.string()
        .max(500)
        .optional()
        .messages({
            'string.max': 'คำอธิบายต้องไม่เกิน 500 ตัวอักษร'
        }),
    
    price: Joi.number()
        .positive()
        .precision(2)
        .required()
        .messages({
            'number.positive': 'ราคาต้องเป็นจำนวนบวก',
            'any.required': 'กรุณาระบุราคา'
        }),
    
    category: Joi.string()
        .valid('อาหารจานเดียว', 'ของหวาน', 'เครื่องดื่ม', 'อาหารว่าง', 'อาหารจานหลัก')
        .required()
        .messages({
            'any.only': 'หมวดหมู่ไม่ถูกต้อง',
            'any.required': 'กรุณาระบุหมวดหมู่'
        }),
    
    image: Joi.string()
        .uri()
        .optional(),
    
    available: Joi.boolean()
        .default(true),
    
    ingredients: Joi.array()
        .items(Joi.string())
        .optional(),
    
    spicyLevel: Joi.number()
        .integer()
        .min(0)
        .max(5)
        .default(0)
        .messages({
            'number.min': 'ระดับความเผ็ดต้องอยู่ระหว่าง 0-5',
            'number.max': 'ระดับความเผ็ดต้องอยู่ระหว่าง 0-5'
        }),
    
    nutrition: Joi.object({
        calories: Joi.number().positive().optional(),
        protein: Joi.number().positive().optional(),
        carbs: Joi.number().positive().optional(),
        fat: Joi.number().positive().optional()
    }).optional()
});

const validateFood = (req, res, next) => {
    const { error, value } = foodSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
    });
    
    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(400).json({
            success: false,
            message: 'ข้อมูลไม่ถูกต้อง',
            errors: errors
        });
    }
    
    req.validatedData = value;
    next();
};

module.exports = { validateFood };
```

### **Step 4: File Manager (utils/fileManager.js)**
```javascript
const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const FOODS_FILE = path.join(DATA_DIR, 'foods.json');

// สร้างโฟลเดอร์ data ถ้ายังไม่มี
const ensureDataDir = async () => {
    try {
        await fs.access(DATA_DIR);
    } catch (error) {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }
};

// โหลดข้อมูลอาหาร
const loadFoods = async () => {
    try {
        await ensureDataDir();
        const data = await fs.readFile(FOODS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // ถ้าไฟล์ไม่มี สร้างไฟล์ใหม่พร้อมข้อมูลตัวอย่าง
        const defaultFoods = [
            {
                id: 1,
                name: "ผัดไทย",
                description: "เส้นหมี่ผัดรสเปรี้ยวหวาน",
                price: 120,
                category: "อาหารจานเดียว",
                available: true,
                ingredients: ["เส้นหมี่", "กุ้ง", "ไข่", "ถั่วงอก"],
                spicyLevel: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ];
        await saveFoods(defaultFoods);
        return defaultFoods;
    }
};

// บันทึกข้อมูลอาหาร
const saveFoods = async (foods) => {
    await ensureDataDir();
    await fs.writeFile(FOODS_FILE, JSON.stringify(foods, null, 2));
};

// สร้าง ID ใหม่
const generateId = (foods) => {
    return foods.length > 0 ? Math.max(...foods.map(f => f.id)) + 1 : 1;
};

module.exports = {
    loadFoods,
    saveFoods,
    generateId
};
```

### **API Response Examples:**
```javascript
// GET /api/foods - Success
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "ผัดไทย",
            "price": 120,
            "category": "อาหารจานเดียว",
            "available": true
        }
    ],
    "total": 1,
    "pagination": {
        "currentPage": 1,
        "totalPages": 1,
        "totalItems": 1
    }
}

// POST /api/foods - Error
{
    "success": false,
    "message": "ข้อมูลไม่ถูกต้อง",
    "errors": [
        "ชื่อเมนูต้องมีอย่างน้อย 2 ตัวอักษร",
        "กรุณาระบุราคา"
    ]
}
```

**ต่อไปเราจะดู Food Routes Implementation! 🍽️**

---

## สไลด์ 50: Food Routes Implementation 🍽️

### **Complete Food Routes (routes/foods.js):**
```javascript
const express = require('express');
const router = express.Router();
const { loadFoods, saveFoods, generateId } = require('../utils/fileManager');
const { validateFood } = require('../middleware/validation');

// GET /api/foods - ดึงเมนูทั้งหมด
router.get('/', async (req, res, next) => {
    try {
        const foods = await loadFoods();
        const { 
            page = 1, 
            limit = 10, 
            search, 
            category, 
            available,
            sortBy = 'name',
            sortOrder = 'asc'
        } = req.query;
        
        let filteredFoods = foods;
        
        // ค้นหาตามชื่อหรือคำอธิบาย
        if (search) {
            const searchTerm = search.toLowerCase();
            filteredFoods = filteredFoods.filter(food => 
                food.name.toLowerCase().includes(searchTerm) ||
                (food.description && food.description.toLowerCase().includes(searchTerm))
            );
        }
        
        // กรองตามหมวดหมู่
        if (category) {
            filteredFoods = filteredFoods.filter(food => 
                food.category === category
            );
        }
        
        // กรองตามสถานะ
        if (available !== undefined) {
            const isAvailable = available === 'true';
            filteredFoods = filteredFoods.filter(food => 
                food.available === isAvailable
            );
        }
        
        // เรียงลำดับ
        filteredFoods.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];
            
            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }
            
            if (sortOrder === 'desc') {
                return bValue > aValue ? 1 : -1;
            }
            return aValue > bValue ? 1 : -1;
        });
        
        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + parseInt(limit);
        const paginatedFoods = filteredFoods.slice(startIndex, endIndex);
        
        res.json({
            success: true,
            data: paginatedFoods,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(filteredFoods.length / limit),
                totalItems: filteredFoods.length,
                itemsPerPage: parseInt(limit)
            },
            filters: {
                search: search || null,
                category: category || null,
                available: available || null,
                sortBy,
                sortOrder
            }
        });
        
    } catch (error) {
        next(error);
    }
});

// GET /api/foods/:id - ดึงเมนูตาม ID
router.get('/:id', async (req, res, next) => {
    try {
        const foodId = parseInt(req.params.id);
        
        if (isNaN(foodId) || foodId <= 0) {
            return res.status(400).json({
                success: false,
                message: 'ID เมนูไม่ถูกต้อง'
            });
        }
        
        const foods = await loadFoods();
        const food = foods.find(f => f.id === foodId);
        
        if (!food) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบเมนูที่ต้องการ'
            });
        }
        
        res.json({
            success: true,
            data: food
        });
        
    } catch (error) {
        next(error);
    }
});

// POST /api/foods - เพิ่มเมนูใหม่
router.post('/', validateFood, async (req, res, next) => {
    try {
        const foods = await loadFoods();
        
        // ตรวจสอบชื่อเมนูซ้ำ
        const existingFood = foods.find(f => 
            f.name.toLowerCase() === req.validatedData.name.toLowerCase()
        );
        
        if (existingFood) {
            return res.status(409).json({
                success: false,
                message: 'มีเมนูนี้อยู่แล้ว'
            });
        }
        
        // สร้างเมนูใหม่
        const newFood = {
            id: generateId(foods),
            ...req.validatedData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        foods.push(newFood);
        await saveFoods(foods);
        
        res.status(201).json({
            success: true,
            message: 'เพิ่มเมนูใหม่สำเร็จ',
            data: newFood
        });
        
    } catch (error) {
        next(error);
    }
});

// PUT /api/foods/:id - แก้ไขเมนูทั้งหมด
router.put('/:id', validateFood, async (req, res, next) => {
    try {
        const foodId = parseInt(req.params.id);
        
        if (isNaN(foodId) || foodId <= 0) {
            return res.status(400).json({
                success: false,
                message: 'ID เมนูไม่ถูกต้อง'
            });
        }
        
        const foods = await loadFoods();
        const foodIndex = foods.findIndex(f => f.id === foodId);
        
        if (foodIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบเมนูที่ต้องการแก้ไข'
            });
        }
        
        // ตรวจสอบชื่อเมนูซ้ำ (ยกเว้นตัวเอง)
        const existingFood = foods.find(f => 
            f.id !== foodId && 
            f.name.toLowerCase() === req.validatedData.name.toLowerCase()
        );
        
        if (existingFood) {
            return res.status(409).json({
                success: false,
                message: 'มีเมนูชื่อนี้อยู่แล้ว'
            });
        }
        
        // อัปเดตเมนู
        const updatedFood = {
            id: foodId,
            ...req.validatedData,
            createdAt: foods[foodIndex].createdAt,
            updatedAt: new Date().toISOString()
        };
        
        foods[foodIndex] = updatedFood;
        await saveFoods(foods);
        
        res.json({
            success: true,
            message: 'แก้ไขเมนูสำเร็จ',
            data: updatedFood
        });
        
    } catch (error) {
        next(error);
    }
});

// DELETE /api/foods/:id - ลบเมนู
router.delete('/:id', async (req, res, next) => {
    try {
        const foodId = parseInt(req.params.id);
        
        if (isNaN(foodId) || foodId <= 0) {
            return res.status(400).json({
                success: false,
                message: 'ID เมนูไม่ถูกต้อง'
            });
        }
        
        const foods = await loadFoods();
        const foodIndex = foods.findIndex(f => f.id === foodId);
        
        if (foodIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'ไม่พบเมนูที่ต้องการลบ'
            });
        }
        
        // ลบเมนู
        const deletedFood = foods.splice(foodIndex, 1)[0];
        await saveFoods(foods);
        
        res.json({
            success: true,
            message: 'ลบเมนูสำเร็จ',
            data: deletedFood
        });
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;
```

### **Error Handler (middleware/errorHandler.js):**
```javascript
const errorHandler = (err, req, res, next) => {
    console.error('💥 API Error:', {
        message: err.message,
        stack: err.stack,
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        timestamp: new Date().toISOString()
    });
    
    let statusCode = 500;
    let message = 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์';
    
    // จัดการ error ตามประเภท
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'ข้อมูลไม่ถูกต้อง';
    } else if (err.code === 'ENOENT') {
        statusCode = 500;
        message = 'ไม่สามารถเข้าถึงข้อมูลได้';
    } else if (err instanceof SyntaxError && err.status === 400) {
        statusCode = 400;
        message = 'รูปแบบ JSON ไม่ถูกต้อง';
    }
    
    res.status(statusCode).json({
        success: false,
        error: {
            message: message,
            code: err.code || 'INTERNAL_ERROR',
            timestamp: new Date().toISOString(),
            path: req.originalUrl,
            method: req.method
        },
        // แสดง stack trace เฉพาะ development
        ...(process.env.NODE_ENV === 'development' && { 
            stack: err.stack,
            originalMessage: err.message 
        })
    });
};

module.exports = errorHandler;
```

### **Testing Examples:**
```bash
# 1. ดึงเมนูทั้งหมด
curl http://localhost:3000/api/foods

# 2. ค้นหาเมนู
curl "http://localhost:3000/api/foods?search=ผัด&category=อาหารจานเดียว"

# 3. เพิ่มเมนูใหม่
curl -X POST http://localhost:3000/api/foods \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ส้มตำ",
    "description": "ส้มตำไทยแท้รสจัดจ้าน",
    "price": 80,
    "category": "อาหารจานเดียว",
    "spicyLevel": 4,
    "ingredients": ["มะละกอ", "มะเขือเทศ", "ถั่วฝักยาว", "พริกขี้หนู"]
  }'

# 4. แก้ไขราคา
curl -X PATCH http://localhost:3000/api/foods/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 150}'

# 5. ลบเมนู
curl -X DELETE http://localhost:3000/api/foods/1
```

### **API Documentation Endpoint:**
```javascript
// เพิ่มใน server.js
app.get('/api/docs', (req, res) => {
    res.json({
        title: 'Food Menu API Documentation',
        version: '1.0.0',
        baseUrl: `${req.protocol}://${req.get('Host')}/api`,
        endpoints: {
            foods: {
                'GET /foods': {
                    description: 'ดึงรายการเมนูทั้งหมด',
                    parameters: {
                        page: 'หน้าที่ต้องการ (default: 1)',
                        limit: 'จำนวนรายการต่อหน้า (default: 10)',
                        search: 'ค้นหาจากชื่อหรือคำอธิบาย',
                        category: 'กรองตามหมวดหมู่',
                        available: 'กรองตามสถานะ (true/false)',
                        sortBy: 'เรียงตามฟิลด์ (name, price, createdAt)',
                        sortOrder: 'ลำดับการเรียง (asc/desc)'
                    }
                },
                'GET /foods/:id': {
                    description: 'ดึงข้อมูลเมนูตาม ID'
                },
                'POST /foods': {
                    description: 'เพิ่มเมนูใหม่',
                    requiredFields: ['name', 'price', 'category'],
                    optionalFields: ['description', 'image', 'ingredients', 'spicyLevel', 'nutrition']
                },
                'PUT /foods/:id': {
                    description: 'แก้ไขข้อมูลเมนูทั้งหมด'
                },
                'DELETE /foods/:id': {
                    description: 'ลบเมนู'
                }
            }
        },
        examples: {
            createFood: {
                url: 'POST /api/foods',
                body: {
                    name: 'ผัดไทย',
                    description: 'เส้นหมี่ผัดรสเปรี้ยวหวาน',
                    price: 120,
                    category: 'อาหารจานเดียว',
                    spicyLevel: 2,
                    ingredients: ['เส้นหมี่', 'กุ้ง', 'ไข่']
                }
            }
        }
    });
});
```

### **Package.json Scripts:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint .",
    "docs": "node -e \"console.log('API Docs: http://localhost:3000/api/docs')\""
  }
}
```

**API พร้อมใช้งานแล้ว! ต่อไปเราจะเรียน Best Practices! 🚀**

---

## สไลด์ 51: สรุปและ Best Practices 🏆

### **สิ่งที่เราสร้างได้:**
✅ **Complete REST API** - CRUD operations ครบครัน  
✅ **Data Validation** - ตรวจสอบข้อมูลอย่างละเอียด  
✅ **Error Handling** - จัดการ errors อย่างมีระบบ  
✅ **File Storage** - เก็บข้อมูลถาวร  
✅ **Search & Filter** - ค้นหาและกรองข้อมูล  
✅ **Pagination** - แบ่งหน้าข้อมูล  
✅ **API Documentation** - เอกสารการใช้งาน  

### **จาก Static Website → Dynamic API:**
```javascript
// วันที่ 1-2: Static Website
<h1>ผัดไทย - 120 บาท</h1>

// วันที่ 3: React Component
const Food = ({ name, price }) => <h1>{name} - {price} บาท</h1>

// วันที่ 4: REST API
GET /api/foods/1 → { "name": "ผัดไทย", "price": 120 }
```

### **API Design Best Practices:**

#### **1. URL Naming Conventions:**
```javascript
// ✅ Good - ใช้ nouns (คำนาม)
GET    /api/foods
POST   /api/foods
GET    /api/foods/123

// ❌ Bad - ใช้ verbs (คำกริยา)
GET    /api/getFoods
POST   /api/createFood
GET    /api/showFood/123
```

#### **2. HTTP Status Codes:**
```javascript
// ✅ Correct Usage
200 OK           → GET, PUT, PATCH success
201 Created      → POST success
204 No Content   → DELETE success
400 Bad Request  → Client error (validation)
401 Unauthorized → Authentication required
403 Forbidden    → Access denied
404 Not Found    → Resource not found
409 Conflict     → Duplicate data
500 Server Error → Server malfunction

// ❌ Common Mistakes
200 OK → for all responses (even errors)
404 Not Found → for validation errors
500 Server Error → for client errors
```

#### **3. Response Format Consistency:**
```javascript
// ✅ Consistent Success Response
{
    "success": true,
    "data": { /* actual data */ },
    "message": "Operation completed successfully"
}

// ✅ Consistent Error Response
{
    "success": false,
    "error": {
        "message": "Error description",
        "code": "ERROR_CODE",
        "details": [/* specific errors */]
    }
}
```

#### **4. Input Validation:**
```javascript
// ✅ Always validate input
const validateInput = (data) => {
    // 1. Check required fields
    // 2. Validate data types
    // 3. Check format (email, phone)
    // 4. Check ranges (min/max)
    // 5. Sanitize data
};

// ❌ Never trust client data
app.post('/api/users', (req, res) => {
    users.push(req.body); // Dangerous!
});
```

#### **5. Error Handling:**
```javascript
// ✅ Centralized error handling
app.use(globalErrorHandler);

// ✅ Specific error types
class ValidationError extends Error { /* ... */ }
class NotFoundError extends Error { /* ... */ }

// ✅ Async error handling
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
```

### **Security Best Practices:**
```javascript
// ✅ Input sanitization
const sanitizeInput = (input) => {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

// ✅ Rate limiting
const rateLimit = require('express-rate-limit');
app.use('/api', rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));

// ✅ CORS configuration
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(','),
    credentials: true
}));

// ✅ Environment variables
const config = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET
};
```

### **Performance Best Practices:**
```javascript
// ✅ Pagination for large datasets
const paginate = (data, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
};

// ✅ Caching (simple in-memory)
const cache = new Map();
const getCachedData = (key, fetchFn, ttl = 300000) => {
    if (cache.has(key)) {
        const { data, timestamp } = cache.get(key);
        if (Date.now() - timestamp < ttl) {
            return data;
        }
    }
    const data = fetchFn();
    cache.set(key, { data, timestamp: Date.now() });
    return data;
};

// ✅ Compression
const compression = require('compression');
app.use(compression());
```

### **Development Workflow:**
```bash
# 1. Development
npm run dev          # nodemon for auto-restart

# 2. Testing
npm test             # run unit tests
npm run test:watch   # watch mode

# 3. Linting
npm run lint         # check code quality

# 4. Documentation
npm run docs         # view API documentation

# 5. Production
npm start           # production server
```

### **Next Steps - Production Deployment:**
```javascript
// ✅ Environment-specific configs
const config = {
    development: {
        port: 3000,
        logging: 'debug'
    },
    production: {
        port: process.env.PORT,
        logging: 'error'
    }
};

// ✅ Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

// ✅ Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});
```

### **คำถามสำคัญสุดท้าย:**
*"API ที่เราสร้างพร้อมใช้งาน production หรือยัง? ขาดอะไรอีก?"*

**Database, Authentication, Monitoring, และ Deployment! 🚀**

---

## สไลด์ 52: 🎉 สรุปหัวข้อที่ 3: JSON และ API ง่ายๆ

### **Journey ที่เราผ่านมา:**
```
📊 JSON Data Format
        ↓
🔌 REST API Design
        ↓
🔄 CRUD Operations
        ↓
💾 File-based Storage
        ↓
✅ Validation & Error Handling
        ↓
🧪 API Testing
        ↓
🏆 Complete Food Menu API
```

### **ความรู้ที่ได้:**
🧠 **แนวคิด** - JSON, REST, CRUD, API Design Patterns  
🛠️ **เครื่องมือ** - Joi validation, Postman, curl  
💻 **การเขียนโค้ด** - File operations, Error handling, Testing  
🏗️ **โครงสร้าง** - API architecture, Best practices  

### **ทักษะใหม่:**
- ออกแบบ REST API ตามมาตรฐาน
- จัดการข้อมูล JSON อย่างมีประสิทธิภาพ
- สร้าง CRUD operations ที่สมบูรณ์
- ใช้ file system สำหรับ data persistence
- เขียน validation และ error handling
- ทดสอบ API ด้วยเครื่องมือต่างๆ

### **เปรียบเทียบ Before & After:**

#### **Before (Static Data):**
```javascript
// ข้อมูลตายตัว ไม่เปลี่ยนแปลง
app.get('/foods', (req, res) => {
    res.json([
        { id: 1, name: 'ผัดไทย', price: 120 }
    ]);
});
```

#### **After (Dynamic API):**
```javascript
// API ที่สมบูรณ์ พร้อมใช้งานจริง
app.get('/api/foods', validateQuery, async (req, res, next) => {
    try {
        const { search, category, page, limit } = req.query;
        const foods = await searchFoods({ search, category, page, limit });
        res.json({
            success: true,
            data: foods.items,
            pagination: foods.pagination
        });
    } catch (error) {
        next(error);
    }
});
```

### **Production-Ready Features ที่ได้:**
✅ **Data Validation** - ป้องกันข้อมูลผิดพลาด  
✅ **Error Handling** - จัดการ errors อย่างมีระบบ  
✅ **Search & Filter** - ค้นหาและกรองข้อมูล  
✅ **Pagination** - แบ่งหน้าสำหรับข้อมูลเยอะ  
✅ **File Storage** - เก็บข้อมูลถาวร  
✅ **API Testing** - ทดสอบการทำงาน  
✅ **Documentation** - เอกสารการใช้งาน  

### **การเชื่อมต่อกับ React:**
```javascript
// Frontend (React) สามารถเรียกใช้ API ได้เลย
const fetchFoods = async () => {
    try {
        const response = await fetch('/api/foods');
        const data = await response.json();
        setFoods(data.data);
    } catch (error) {
        console.error('Error fetching foods:', error);
    }
};

const createFood = async (foodData) => {
    try {
        const response = await fetch('/api/foods', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(foodData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating food:', error);
    }
};
```

### **คำถามทบทวน:**
1. *"JSON ต่างจาก JavaScript Object อย่างไร?"*
2. *"ทำไม REST API ถึงเป็นมาตรฐาน?"*
3. *"CRUD operations คืออะไร? ใช้ HTTP methods ไหน?"*
4. *"ทำไมต้อง validate ข้อมูลก่อนบันทึก?"*
5. *"File storage vs Database แตกต่างกันอย่างไร?"*

### **ขั้นตอนต่อไป:**
วันที่ 5: **การเชื่อมต่อ Frontend-Backend และความปลอดภัย**
- เชื่อมต่อ React กับ Express API
- Authentication และ Authorization
- Security best practices
- Deployment และ Production

**เตรียมตัวสร้าง Full-stack Application! 🎯**

### **Key Takeaways:**
💡 **JSON เป็นภาษากลางของ web APIs**  
💡 **REST API มีหลักการที่ชัดเจนและเป็นมาตรฐาน**  
💡 **CRUD operations เป็นพื้นฐานของระบบจัดการข้อมูล**  
💡 **Validation และ Error handling สำคัญต่อความปลอดภัย**  
💡 **Testing ช่วยให้มั่นใจในคุณภาพของ API**  
💡 **File storage เหมาะสำหรับ prototype และการเรียนรู้**  

**ตอนนี้คุณสามารถสร้าง REST API ที่ใช้งานได้จริงแล้ว! 🏆**

### **สุดท้าย...**
*"จาก Static Website → React App → Express Server → REST API"*

**คุณได้เดินทางมาไกลมากแล้ว! ขั้นตอนสุดท้ายคือการนำทุกอย่างมารวมกัน! 🚀**

### **ข้อความจากผู้สอน:**
*"การสร้าง API ไม่ใช่แค่การเขียนโค้ด แต่เป็นการออกแบบประสบการณ์สำหรับ developers คนอื่นๆ ที่จะมาใช้งาน API ของเรา ให้ใส่ใจในรายละเอียด ทำให้เข้าใจง่าย และใช้งานสะดวก!"*

**มั่นใจและภูมิใจในสิ่งที่สร้างขึ้นมา! 🎊**

### **สรุปการเรียนรู้วันที่ 4:**
```
หัวข้อที่ 1: Node.js และ NPM (2.5 ชม.)
        ↓
หัวข้อที่ 2: Express.js Web Server (3 ชม.)
        ↓
หัวข้อที่ 3: JSON และ API (2.5 ชม.)
        ↓
🎯 ผลลัพธ์: นักศึกษาสามารถสร้าง REST API ที่สมบูรณ์ได้!
```

**พร้อมสำหรับวันที่ 5: การเชื่อมต่อ Full-stack! 🌟**