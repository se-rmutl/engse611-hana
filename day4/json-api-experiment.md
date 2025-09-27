# Lab Experiments: JSON และ API ง่ายๆ
## หัวข้อที่ 3: ทดลองระหว่างการเรียนการสอน

---

## 🧪 Lab 3.1: ทำความเข้าใจ JSON (15 นาที)

### **🎯 เป้าหมาย:** เข้าใจการทำงานของ JSON และการแปลงข้อมูล

### **Step 1: JSON vs JavaScript Object**
```javascript
// ไฟล์: json-basics.js
console.log('=== JSON vs JavaScript Object ===');

// JavaScript Object
const user = {
    name: 'สมชาย',
    age: 25,
    isActive: true,
    hobbies: ['อ่านหนังสือ', 'เขียนโปรแกรม']
};

console.log('JavaScript Object:', user);
console.log('Type:', typeof user);

// แปลง Object เป็น JSON String
const jsonString = JSON.stringify(user);
console.log('\nJSON String:', jsonString);
console.log('Type:', typeof jsonString);

// แปลง JSON String กลับเป็น Object
const parsedObject = JSON.parse(jsonString);
console.log('\nParsed Object:', parsedObject);
console.log('Type:', typeof parsedObject);

// ทดสอบ equality
console.log('\nAre they equal?', user === parsedObject); // false!
console.log('Name comparison:', user.name === parsedObject.name); // true
```

### **Step 2: JSON Formatting**
```javascript
// ไฟล์: json-formatting.js
const studentData = {
    id: 1,
    personalInfo: {
        firstName: 'สมชาย',
        lastName: 'ใจดี',
        birthDate: '2000-05-15'
    },
    grades: [
        { subject: 'คณิตศาสตร์', score: 85 },
        { subject: 'ภาษาอังกฤษ', score: 92 },
        { subject: 'วิทยาศาสตร์', score: 78 }
    ],
    isGraduated: false
};

console.log('=== JSON Formatting ===');

// JSON แบบบีบ (compact)
const compactJson = JSON.stringify(studentData);
console.log('Compact JSON:');
console.log(compactJson);

// JSON แบบสวย (pretty print)
const prettyJson = JSON.stringify(studentData, null, 2);
console.log('\nPretty JSON:');
console.log(prettyJson);

// JSON แบบกรองข้อมูล
const filteredJson = JSON.stringify(studentData, ['id', 'personalInfo', 'isGraduated'], 2);
console.log('\nFiltered JSON:');
console.log(filteredJson);
```

### **🔍 ทดลองและสังเกต:**
```bash
node json-basics.js
node json-formatting.js
```

### **💡 คำถามสำหรับสังเกต:**
1. **Type differences:** Object และ JSON string ต่างกันอย่างไร?
2. **Equality:** ทำไม `user === parsedObject` ถึงเป็น false?
3. **Formatting:** JSON แบบไหนเหมาะสำหรับส่งข้อมูล? แบบไหนเหมาะสำหรับอ่าน?

### **🎓 สิ่งที่เรียนรู้:**
- JSON เป็น string format ที่มาจาก JavaScript Object
- JSON.stringify() และ JSON.parse() เป็นฟังก์ชันสำคัญ
- JSON formatting มีผลต่อขนาดและความอ่านง่าย

---

## 🧪 Lab 3.2: Express กับ JSON API พื้นฐาน (20 นาที)

### **🎯 เป้าหมาย:** สร้าง API ที่ส่งและรับข้อมูล JSON

### **Step 1: Basic JSON API (ไฟล์: simple-api.js)**
```javascript
const express = require('express');
const app = express();

// Middleware สำหรับ parse JSON
app.use(express.json());

// ข้อมูลจำลอง
let books = [
    { id: 1, title: 'แฮร์รี่ พอตเตอร์', author: 'J.K. Rowling', price: 350 },
    { id: 2, title: 'เดอะ ฮอบบิท', author: 'J.R.R. Tolkien', price: 280 },
    { id: 3, title: 'อาชญากรรมและโทษ', author: 'Dostoevsky', price: 420 }
];

// GET - ดึงหนังสือทั้งหมด
app.get('/api/books', (req, res) => {
    console.log('📚 Request: GET /api/books');
    
    res.json({
        success: true,
        message: 'ดึงข้อมูลหนังสือสำเร็จ',
        data: books,
        total: books.length
    });
});

// GET - ดึงหนังสือตาม ID
app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    console.log(`📖 Request: GET /api/books/${bookId}`);
    
    const book = books.find(b => b.id === bookId);
    
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบหนังสือที่ต้องการ'
        });
    }
    
    res.json({
        success: true,
        data: book
    });
});

// POST - เพิ่มหนังสือใหม่
app.post('/api/books', (req, res) => {
    console.log('➕ Request: POST /api/books');
    console.log('Body:', req.body);
    
    const { title, author, price } = req.body;
    
    // ตรวจสอบข้อมูลพื้นฐาน
    if (!title || !author || !price) {
        return res.status(400).json({
            success: false,
            message: 'กรุณาระบุ title, author และ price'
        });
    }
    
    const newBook = {
        id: books.length + 1,
        title,
        author,
        price: parseInt(price)
    };
    
    books.push(newBook);
    
    res.status(201).json({
        success: true,
        message: 'เพิ่มหนังสือสำเร็จ',
        data: newBook
    });
});

app.listen(3000, () => {
    console.log('🚀 Simple API Server: http://localhost:3000');
    console.log('📖 Books API: http://localhost:3000/api/books');
});
```

### **Step 2: ทดสอบด้วย curl**
```bash
# ทดสอบ GET
curl http://localhost:3000/api/books

# ทดสอบ GET ตาม ID
curl http://localhost:3000/api/books/1

# ทดสอบ POST
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "สงครามและสันติภาพ",
    "author": "Leo Tolstoy", 
    "price": 500
  }'

# ทดสอบ POST ข้อมูลไม่ครบ
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "หนังสือไม่มีผู้แต่ง"}'
```

### **🔍 ทดลองและสังเกต:**
```bash
node simple-api.js
```

**ทดสอบใน browser:**
- `http://localhost:3000/api/books`
- `http://localhost:3000/api/books/1`
- `http://localhost:3000/api/books/999`

### **💡 คำถามสำหรับสังเกต:**
1. **express.json():** เกิดอะไรขึ้นถ้าไม่มี middleware นี้?
2. **Status codes:** ทำไม GET ใช้ 200 แต่ POST ใช้ 201?
3. **Error handling:** API ตอบสนองข้อผิดพลาดอย่างไร?

---

## 🧪 Lab 3.3: CRUD Operations พื้นฐาน (25 นาที)

### **🎯 เป้าหมาย:** เข้าใจ Create, Read, Update, Delete operations

### **Step 1: Complete CRUD API (ไฟล์: crud-api.js)**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

// ข้อมูลผู้ใช้จำลอง
let users = [
    { id: 1, name: 'สมชาย', email: 'somchai@email.com', age: 25 },
    { id: 2, name: 'สมหญิง', email: 'somying@email.com', age: 23 }
];

// Helper function: หา user ตาม ID
const findUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
};

// Helper function: สร้าง ID ใหม่
const generateNewId = () => {
    return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
};

// CREATE - เพิ่มผู้ใช้ใหม่
app.post('/api/users', (req, res) => {
    console.log('➕ CREATE: POST /api/users');
    
    const { name, email, age } = req.body;
    
    // ตรวจสอบข้อมูลจำเป็น
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: 'ต้องมี name และ email'
        });
    }
    
    // ตรวจสอบ email ซ้ำ
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: 'Email นี้มีผู้ใช้แล้ว'
        });
    }
    
    const newUser = {
        id: generateNewId(),
        name,
        email,
        age: age || null
    };
    
    users.push(newUser);
    
    res.status(201).json({
        success: true,
        message: 'สร้างผู้ใช้สำเร็จ',
        data: newUser
    });
});

// READ - ดึงผู้ใช้ทั้งหมด
app.get('/api/users', (req, res) => {
    console.log('📋 READ: GET /api/users');
    
    res.json({
        success: true,
        data: users,
        total: users.length
    });
});

// READ - ดึงผู้ใช้ตาม ID
app.get('/api/users/:id', (req, res) => {
    console.log(`👤 READ: GET /api/users/${req.params.id}`);
    
    const user = findUserById(req.params.id);
    
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบผู้ใช้'
        });
    }
    
    res.json({
        success: true,
        data: user
    });
});

// UPDATE - แก้ไขผู้ใช้
app.put('/api/users/:id', (req, res) => {
    console.log(`✏️ UPDATE: PUT /api/users/${req.params.id}`);
    
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบผู้ใช้ที่จะแก้ไข'
        });
    }
    
    const { name, email, age } = req.body;
    
    // ตรวจสอบ email ซ้ำ (ยกเว้นตัวเอง)
    if (email) {
        const existingUser = users.find(u => u.email === email && u.id !== userId);
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email นี้มีผู้ใช้แล้ว'
            });
        }
    }
    
    // อัปเดตข้อมูล
    users[userIndex] = {
        id: userId,
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
        age: age !== undefined ? age : users[userIndex].age
    };
    
    res.json({
        success: true,
        message: 'แก้ไขข้อมูลสำเร็จ',
        data: users[userIndex]
    });
});

// DELETE - ลบผู้ใช้
app.delete('/api/users/:id', (req, res) => {
    console.log(`🗑️ DELETE: DELETE /api/users/${req.params.id}`);
    
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบผู้ใช้ที่จะลบ'
        });
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    res.json({
        success: true,
        message: 'ลบผู้ใช้สำเร็จ',
        data: deletedUser
    });
});

app.listen(3000, () => {
    console.log('🚀 CRUD API Server: http://localhost:3000');
    console.log('👥 Users API: http://localhost:3000/api/users');
});
```

### **Step 2: ทดลอง CRUD Operations**
```bash
# CREATE - สร้างผู้ใช้ใหม่
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมศรี",
    "email": "somsri@email.com",
    "age": 28
  }'

# READ - ดูผู้ใช้ทั้งหมด
curl http://localhost:3000/api/users

# READ - ดูผู้ใช้ตาม ID
curl http://localhost:3000/api/users/1

# UPDATE - แก้ไขผู้ใช้
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมชาย (แก้ไขแล้ว)",
    "age": 26
  }'

# DELETE - ลบผู้ใช้
curl -X DELETE http://localhost:3000/api/users/2
```

### **💡 คำถามสำหรับสังเกต:**
1. **HTTP Methods:** แต่ละ CRUD operation ใช้ method อะไร?
2. **Data persistence:** เกิดอะไรขึ้นกับข้อมูลเมื่อ restart server?
3. **Error cases:** API จัดการ error อย่างไร?

---

## 🧪 Lab 3.4: File Storage - เก็บข้อมูลถาวร (25 นาที)

### **🎯 เป้าหมาย:** เก็บข้อมูลใน JSON file เพื่อให้คงอยู่หลัง restart

### **Step 1: File Operations (ไฟล์: file-storage.js)**
```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

// ตำแหน่งไฟล์ข้อมูล
const DATA_FILE = path.join(__dirname, 'data', 'products.json');

// สร้างโฟลเดอร์ data ถ้าไม่มี
const ensureDataDir = () => {
    const dataDir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
        console.log('📁 สร้างโฟลเดอร์ data แล้ว');
    }
};

// อ่านข้อมูลจากไฟล์
const loadProducts = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            console.log('📄 ไม่พบไฟล์ข้อมูล สร้างไฟล์ใหม่');
            saveProducts([]);
            return [];
        }
        
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        const products = JSON.parse(data);
        console.log(`📊 โหลดข้อมูล ${products.length} รายการ`);
        return products;
    } catch (error) {
        console.error('❌ ข้อผิดพลาดในการอ่านไฟล์:', error.message);
        return [];
    }
};

// บันทึกข้อมูลลงไฟล์
const saveProducts = (products) => {
    try {
        ensureDataDir();
        fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
        console.log(`💾 บันทึกข้อมูล ${products.length} รายการแล้ว`);
    } catch (error) {
        console.error('❌ ข้อผิดพลาดในการบันทึกไฟล์:', error.message);
        throw error;
    }
};

// โหลดข้อมูลเมื่อเริ่มต้น server
let products = loadProducts();

// API Endpoints
app.get('/api/products', (req, res) => {
    console.log('📋 ดึงข้อมูลสินค้าทั้งหมด');
    
    res.json({
        success: true,
        data: products,
        total: products.length,
        file: DATA_FILE
    });
});

app.post('/api/products', (req, res) => {
    console.log('➕ เพิ่มสินค้าใหม่');
    
    const { name, price, category } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({
            success: false,
            message: 'ต้องมี name และ price'
        });
    }
    
    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name,
        price: parseFloat(price),
        category: category || 'อื่นๆ',
        createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    
    try {
        saveProducts(products);
        
        res.status(201).json({
            success: true,
            message: 'เพิ่มสินค้าสำเร็จ',
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ไม่สามารถบันทึกข้อมูลได้'
        });
    }
});

app.delete('/api/products/:id', (req, res) => {
    console.log(`🗑️ ลบสินค้า ID: ${req.params.id}`);
    
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบสินค้าที่จะลบ'
        });
    }
    
    const deletedProduct = products.splice(productIndex, 1)[0];
    
    try {
        saveProducts(products);
        
        res.json({
            success: true,
            message: 'ลบสินค้าสำเร็จ',
            data: deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ไม่สามารถบันทึกข้อมูลได้'
        });
    }
});

// Endpoint สำหรับดูข้อมูลในไฟล์
app.get('/api/file-content', (req, res) => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            return res.json({
                success: true,
                message: 'ไฟล์ยังไม่มี',
                content: null
            });
        }
        
        const content = fs.readFileSync(DATA_FILE, 'utf8');
        
        res.json({
            success: true,
            file: DATA_FILE,
            content: content,
            parsed: JSON.parse(content)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ไม่สามารถอ่านไฟล์ได้'
        });
    }
});

app.listen(3000, () => {
    console.log('🚀 File Storage API: http://localhost:3000');
    console.log('📦 Products API: http://localhost:3000/api/products');
    console.log('📄 File Content: http://localhost:3000/api/file-content');
});
```

### **Step 2: ทดสอบ File Persistence**
```bash
# เพิ่มสินค้า
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "แล็ปท็อป",
    "price": 25000,
    "category": "เทคโนโลยี"
  }'

# ดูข้อมูลในไฟล์
curl http://localhost:3000/api/file-content

# หยุด server (Ctrl+C) แล้วเริ่มใหม่
# ดูว่าข้อมูลยังอยู่ไหม
curl http://localhost:3000/api/products
```

### **Step 3: ตรวจสอบไฟล์ที่สร้าง**
```bash
# ดูโครงสร้างไฟล์
ls -la data/

# ดูเนื้อหาในไฟล์
cat data/products.json
```

### **💡 คำถามสำหรับสังเกต:**
1. **Data persistence:** ข้อมูลยังอยู่หลัง restart server ไหม?
2. **File structure:** JSON file มีโครงสร้างอย่างไร?
3. **Error handling:** เกิดอะไรขึ้นถ้าไฟล์เสียหาย?

---

## 🧪 Lab 3.5: Simple API Validation (20 นาที)

### **🎯 เป้าหมาย:** เพิ่ม validation เพื่อป้องกันข้อมูลผิดพลาด

### **Step 1: Manual Validation (ไฟล์: validation-api.js)**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

let students = [];

// ฟังก์ชัน validation
const validateStudent = (studentData) => {
    const errors = [];
    const { name, email, age, major } = studentData;
    
    // ตรวจสอบ name
    if (!name || typeof name !== 'string') {
        errors.push('Name ต้องเป็น string และไม่ว่าง');
    } else if (name.trim().length < 2) {
        errors.push('Name ต้องมีอย่างน้อย 2 ตัวอักษร');
    }
    
    // ตรวจสอบ email
    if (!email || typeof email !== 'string') {
        errors.push('Email ต้องเป็น string และไม่ว่าง');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Email format ไม่ถูกต้อง');
        }
    }
    
    // ตรวจสอบ age
    if (age !== undefined) {
        if (typeof age !== 'number' || age < 0 || age > 100) {
            errors.push('Age ต้องเป็นตัวเลขระหว่าง 0-100');
        }
    }
    
    // ตรวจสอบ major
    const validMajors = ['วิศวกรรม', 'คอมพิวเตอร์', 'บริหาร', 'เศรษฐศาสตร์'];
    if (major && !validMajors.includes(major)) {
        errors.push(`Major ต้องเป็นหนึ่งใน: ${validMajors.join(', ')}`);
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
};

// POST - เพิ่มนักเรียนใหม่ (มี validation)
app.post('/api/students', (req, res) => {
    console.log('➕ เพิ่มนักเรียน:', req.body);
    
    // ตรวจสอบ Content-Type
    if (!req.is('application/json')) {
        return res.status(400).json({
            success: false,
            message: 'Content-Type ต้องเป็น application/json'
        });
    }
    
    // Validate ข้อมูล
    const validation = validateStudent(req.body);
    
    if (!validation.isValid) {
        return res.status(400).json({
            success: false,
            message: 'ข้อมูลไม่ถูกต้อง',
            errors: validation.errors
        });
    }
    
    // ตรวจสอบ email ซ้ำ
    const existingStudent = students.find(s => s.email === req.body.email);
    if (existingStudent) {
        return res.status(409).json({
            success: false,
            message: 'Email นี้มีในระบบแล้ว'
        });
    }
    
    const newStudent = {
        id: students.length + 1,
        name: req.body.name.trim(),
        email: req.body.email.toLowerCase(),
        age: req.body.age,
        major: req.body.major || 'ไม่ระบุ',
        createdAt: new Date().toISOString()
    };
    
    students.push(newStudent);
    
    res.status(201).json({
        success: true,
        message: 'เพิ่มนักเรียนสำเร็จ',
        data: newStudent
    });
});

// GET - ดึงข้อมูลนักเรียน
app.get('/api/students', (req, res) => {
    res.json({
        success: true,
        data: students,
        total: students.length
    });
});

// ทดสอบ validation errors
app.get('/api/validation-examples', (req, res) => {
    const examples = [
        {
            description: 'ข้อมูลถูกต้อง',
            data: {
                name: 'สมชาย',
                email: 'somchai@email.com',
                age: 20,
                major: 'วิศวกรรม'
            }
        },
        {
            description: 'Name สั้นเกินไป',
            data: {
                name: 'ส',
                email: 'test@email.com'
            }
        },
        {
            description: 'Email ผิด format',
            data: {
                name: 'สมชาย',
                email: 'invalid-email'
            }
        },
        {
            description: 'Age ไม่ถูกต้อง',
            data: {
                name: 'สมชาย',
                email: 'somchai@email.com',
                age: -5
            }
        },
        {
            description: 'Major ไม่ถูกต้อง',
            data: {
                name: 'สมชาย',
                email: 'somchai@email.com',
                major: 'สาขาที่ไม่มี'
            }
        }
    ];
    
    res.json({
        success: true,
        message: 'ตัวอย่างข้อมูลสำหรับทดสอบ validation',
        examples: examples
    });
});

app.listen(3000, () => {
    console.log('🚀 Validation API: http://localhost:3000');
    console.log('📚 Students API: http://localhost:3000/api/students');
    console.log('📋 Examples: http://localhost:3000/api/validation-examples');
});
```

### **Step 2: ทดสอบ Validation Cases**
```bash
# ข้อมูลถูกต้อง
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมชาย",
    "email": "somchai@email.com",
    "age": 20,
    "major": "วิศวกรรม"
  }'

# ข้อมูลผิด - name สั้นเกินไป
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "ส",
    "email": "test@email.com"
  }'

# ข้อมูลผิด - email format ผิด
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมหญิง",
    "email": "invalid-email"
  }'

# ข้อมูลผิด - age ติดลบ
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "สมศรี",
    "email": "somsri@email.com",
    "age": -5
  }'

# ดู validation examples
curl http://localhost:3000/api/validation-examples
```

### **💡 คำถามสำหรับสังเกต:**
1. **Validation timing:** ทำไมต้อง validate ก่อนบันทึกข้อมูล?
2. **Error messages:** Error message ที่ดีควรมีลักษณะอย่างไร?
3. **Status codes:** ใช้ 400 vs 409 เมื่อไหร่?

---

## 🧪 Lab 3.6: API Testing และ Error Handling (15 นาที)

### **🎯 เป้าหมาย:** เข้าใจการทดสอบ API และจัดการ errors

### **Step 1: API with Error Scenarios (ไฟล์: error-testing.js)**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

let items = [
    { id: 1, name: 'Item 1', status: 'active' },
    { id: 2, name: 'Item 2', status: 'inactive' }
];

// Helper: จำลอง database error
const simulateDbError = () => {
    const random = Math.random();
    if (random < 0.1) { // 10% chance of error
        throw new Error('Database connection failed');
    }
};

// Helper: จำลอง slow response
const simulateSlowResponse = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
};

// GET - ทดสอบ normal response
app.get('/api/items', async (req, res) => {
    try {
        console.log('📋 GET /api/items');
        
        // จำลอง slow response
        if (req.query.slow === 'true') {
            await simulateSlowResponse();
        }
        
        // จำลอง database error
        if (req.query.error === 'true') {
            simulateDbError();
        }
        
        res.json({
            success: true,
            data: items,
            total: items.length,
            responseTime: Date.now()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์',
            error: error.message
        });
    }
});

// GET - ทดสอบ 404 error
app.get('/api/items/:id', (req, res) => {
    console.log(`👁️ GET /api/items/${req.params.id}`);
    
    const itemId = parseInt(req.params.id);
    
    // ตรวจสอบ ID format
    if (isNaN(itemId) || itemId <= 0) {
        return res.status(400).json({
            success: false,
            message: 'ID ต้องเป็นตัวเลขบวก',
            receivedId: req.params.id
        });
    }
    
    const item = items.find(i => i.id === itemId);
    
    if (!item) {
        return res.status(404).json({
            success: false,
            message: 'ไม่พบ item ที่ต้องการ',
            searchedId: itemId,
            availableIds: items.map(i => i.id)
        });
    }
    
    res.json({
        success: true,
        data: item
    });
});

// POST - ทดสอบ validation errors
app.post('/api/items', (req, res) => {
    console.log('➕ POST /api/items', req.body);
    
    const { name, status } = req.body;
    const errors = [];
    
    // Validation
    if (!name) {
        errors.push('name is required');
    } else if (typeof name !== 'string') {
        errors.push('name must be string');
    } else if (name.trim().length < 3) {
        errors.push('name must be at least 3 characters');
    }
    
    if (status && !['active', 'inactive'].includes(status)) {
        errors.push('status must be active or inactive');
    }
    
    // ตรวจสอบชื่อซ้ำ
    const existingItem = items.find(i => i.name.toLowerCase() === name?.toLowerCase());
    if (existingItem) {
        errors.push('name already exists');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors,
            receivedData: req.body
        });
    }
    
    const newItem = {
        id: Math.max(...items.map(i => i.id)) + 1,
        name: name.trim(),
        status: status || 'active',
        createdAt: new Date().toISOString()
    };
    
    items.push(newItem);
    
    res.status(201).json({
        success: true,
        message: 'Item created successfully',
        data: newItem
    });
});

// Testing endpoints
app.get('/api/test-scenarios', (req, res) => {
    const scenarios = [
        {
            name: 'Normal GET request',
            url: 'GET /api/items',
            expectedStatus: 200
        },
        {
            name: 'Slow response',
            url: 'GET /api/items?slow=true',
            expectedStatus: 200,
            note: 'จะใช้เวลา 1 วินาที'
        },
        {
            name: 'Server error',
            url: 'GET /api/items?error=true',
            expectedStatus: 500,
            note: '10% chance ของ error'
        },
        {
            name: 'Valid item by ID',
            url: 'GET /api/items/1',
            expectedStatus: 200
        },
        {
            name: 'Item not found',
            url: 'GET /api/items/999',
            expectedStatus: 404
        },
        {
            name: 'Invalid ID format',
            url: 'GET /api/items/abc',
            expectedStatus: 400
        },
        {
            name: 'Valid POST request',
            url: 'POST /api/items',
            body: { name: 'New Item', status: 'active' },
            expectedStatus: 201
        },
        {
            name: 'Missing required field',
            url: 'POST /api/items',
            body: { status: 'active' },
            expectedStatus: 400
        }
    ];
    
    res.json({
        success: true,
        message: 'API testing scenarios',
        scenarios: scenarios,
        instructions: 'ใช้ curl หรือ Postman ทดสอบตาม scenarios เหล่านี้'
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('💥 Unhandled error:', err);
    
    res.status(500).json({
        success: false,
        message: 'เกิดข้อผิดพลาดที่ไม่คาดคิด',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'ไม่พบ API endpoint ที่ต้องการ',
        requestedUrl: req.originalUrl,
        method: req.method,
        availableEndpoints: [
            'GET /api/items',
            'GET /api/items/:id',
            'POST /api/items',
            'GET /api/test-scenarios'
        ]
    });
});

app.listen(3000, () => {
    console.log('🚀 Error Testing API: http://localhost:3000');
    console.log('🧪 Test Scenarios: http://localhost:3000/api/test-scenarios');
});
```

### **Step 2: ทดสอบ Error Scenarios**
```bash
# Normal request
curl http://localhost:3000/api/items

# Slow response
curl http://localhost:3000/api/items?slow=true

# Server error (ลองหลายครั้งจนเจอ error)
curl http://localhost:3000/api/items?error=true

# 404 - Item not found
curl http://localhost:3000/api/items/999

# 400 - Invalid ID
curl http://localhost:3000/api/items/abc

# 400 - Validation error
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{}'

# 404 - Invalid endpoint
curl http://localhost:3000/api/nonexistent

# ดู test scenarios
curl http://localhost:3000/api/test-scenarios
```

### **💡 คำถามสำหรับสังเกต:**
1. **Error types:** แต่ละ status code ใช้เมื่อไหร่?
2. **Error messages:** Error message ที่ดีควรมีข้อมูลอะไรบ้าง?
3. **Testing approach:** ควรทดสอบ scenario ไหนบ้าง?

---

## 📝 สรุป Labs และการเรียนรู้

### **🎯 สิ่งที่ได้จาก Labs:**

#### **Lab 3.1:** JSON พื้นฐาน
- เข้าใจความแตกต่างระหว่าง Object และ JSON string
- รู้จัก JSON.stringify() และ JSON.parse()
- เข้าใจ JSON formatting options

#### **Lab 3.2:** Express JSON API
- สร้าง API ที่ส่งและรับข้อมูล JSON
- เข้าใจความสำคัญของ express.json() middleware
- รู้จัก basic API response patterns

#### **Lab 3.3:** CRUD Operations
- เข้าใจ Create, Read, Update, Delete operations
- รู้จัก HTTP methods และ status codes
- เข้าใจ RESTful API patterns

#### **Lab 3.4:** File Storage
- เก็บข้อมูลถาวรใน JSON files
- รู้จัก file system operations ใน Node.js
- เข้าใจ data persistence concepts

#### **Lab 3.5:** API Validation
- สร้าง validation functions
- จัดการ validation errors
- เข้าใจความสำคัญของ input validation

#### **Lab 3.6:** Testing และ Error Handling
- ทดสอบ API scenarios ต่างๆ
- จัดการ errors อย่างเป็นระบบ
- เข้าใจ error response patterns

### **🔧 Skills ที่พัฒนาแล้ว:**
✅ จัดการข้อมูล JSON อย่างมีประสิทธิภาพ  
✅ สร้าง REST API ตาม standards  
✅ ทำ CRUD operations ครบครัน  
✅ เก็บข้อมูลใน file system  
✅ เขียน validation logic  
✅ จัดการ errors และ testing  

### **🚀 ความพร้อมสำหรับขั้นตอนต่อไป:**
หัวข้อที่ 3 เสร็จสิ้น! นักศึกษาพร้อมสำหรับ:
- การเชื่อมต่อ Frontend (React) กับ Backend (Express)
- Authentication และ authorization
- Database integration
- Production deployment

### **💡 Tips สำหรับการนำไปใช้:**
1. **เริ่มจาก simple API** แล้วค่อยเพิ่ม features
2. **Testing เป็นสิ่งสำคัญ** - ทดสอบทุก scenario
3. **Error handling ที่ดี** ทำให้ API ใช้งานง่าย
4. **Documentation** ช่วยให้คนอื่นเข้าใจ API
5. **File storage เหมาะสำหรับ learning** แต่ production ใช้ database

### **🎓 การบ้าน (Optional):**
ปรับปรุง Labs ให้มี features เพิ่มเติม:
- เพิ่ม search และ filter functionality
- เพิ่ม pagination สำหรับข้อมูลเยอะ
- เพิ่ม API documentation endpoint
- เพิ่ม automated tests
- เพิ่ม API rate limiting

**ตอนนี้คุณมีความรู้พื้นฐานที่แข็งแกร่งสำหรับ JSON และ API development แล้ว! 💪**

### **ขั้นตอนต่อไป:**
เตรียมตัวสำหรับการเชื่อมต่อ Frontend-Backend และสร้าง Full-stack Application! 🌟