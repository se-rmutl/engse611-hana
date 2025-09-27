# หัวข้อที่ 1: ทำความรู้จัก Node.js และ NPM
## วันที่ 4: Node.js และ Express.js เบื้องต้น
### สำหรับนักศึกษาวิศวกรรมซอฟต์แวร์

---

## สไลด์ 1: ยินดีต้อนรับสู่ Backend Journey! 🚀

### **เมื่อวานเราเรียน:**
✅ **React.js Components** - สร้าง UI ที่ทันสมัย  
✅ **JSX และ Props** - การส่งผ่านข้อมูล  
✅ **State Management** - การจัดการสถานะ  

### **วันนี้เราจะก้าวสู่:**
🌟 **Backend Development** - เซิร์ฟเวอร์และ API  
🔧 **Node.js** - JavaScript นอกเบราว์เซอร์  
📦 **NPM** - Package Manager ที่ทรงพลัง  

### **Journey ของเรา:**
```
Frontend (React) → Backend (Node.js) → Full-stack Developer! 💪
```

### **คำถามเปิดหัวใจ:**
*"ถ้า React เป็นเหมือนร้านอาหาร... Backend คืออะไร?"*

**มาค้นหาคำตอบไปด้วยกัน! 🎯**

---

## สไลด์ 2: Roadmap การเรียนวันนี้ 🗺️

### **หัวข้อที่ 1: Node.js และ NPM (2.5 ชม.)**
🟢 **Node.js คืออะไร?** - JavaScript Engine นอกเบราว์เซอร์  
📦 **NPM คืออะไร?** - Package Manager และ Ecosystem  
⚡ **Installation & Setup** - เริ่มต้นใช้งาน  
🧩 **Modules System** - การแบ่งโค้ดเป็นชิ้นส่วน  

### **Timeline วันนี้:**
```
09:00-09:30  │ Node.js Introduction & History
09:30-10:00  │ Node.js vs Browser JavaScript  
10:00-10:30  │ NPM Package Manager
10:30-10:45  │ ☕ Break
10:45-11:15  │ Installation & First Commands
11:15-12:00  │ Modules & Built-in APIs
```

### **เป้าหมายท้ายชั่วโมง:**
*"เข้าใจ Node.js และสามารถใช้ NPM เบื้องต้นได้"*

**พร้อมเริ่มต้นการเดินทางแล้วหรือยัง? 🚀**

---

## สไลด์ 3: Node.js คืออะไร? 🤔

### **คำจำกัดความง่ายๆ:**
> **Node.js = JavaScript ที่ทำงานนอกเบราว์เซอร์**

### **เปรียบเทียบให้เข้าใจ:**
```
🌐 เบราว์เซอร์ (Chrome, Firefox)
├── HTML, CSS สำหรับแสดงผล
├── JavaScript สำหรับ interaction
└── DOM API สำหรับจัดการหน้าเว็บ

💻 Node.js (คอมพิวเตอร์เรา)  
├── JavaScript สำหรับทุกอย่าง
├── File System API สำหรับจัดการไฟล์
└── HTTP API สำหรับสร้างเซิร์ฟเวอร์
```

### **ใจความสำคัญ:**
- **Same Language** → JavaScript ที่เราใช้ใน React
- **Different Environment** → รันบนคอมพิวเตอร์ ไม่ใช่เบราว์เซอร์
- **More Powers** → เข้าถึงระบบไฟล์, เครือข่าย, ฐานข้อมูล

### **คำถามคิดตาม:**
*"ถ้า JavaScript ทำงานได้นอกเบราว์เซอร์แล้ว เราสร้างอะไรได้บ้าง?"*

**ลองเดากันดู... 🎲**

---

## สไลด์ 4: ประวัติของ Node.js 📚

### **Timeline ที่น่าสนใจ:**
```
2009 🎯 Ryan Dahl สร้าง Node.js
     ↓ ปัญหา: เว็บเซิร์ฟเวอร์เก่าๆ ช้าและซับซ้อน
     ↓ แนวคิด: ใช้ V8 Engine ของ Chrome

2010 🚀 NPM เกิดขึ้น (Node Package Manager)
     ↓ แชร์โค้ดระหว่าง developer ได้ง่ายขึ้น

2015 ⚡ io.js แยกตัว → Node.js Foundation
     ↓ Open Source แบบสมบูรณ์

2024 🌟 ปัจจุบัน: ใช้งานโดยบริษัทใหญ่ทั่วโลก
```

### **บริษัทที่ใช้ Node.js:**
🏢 **Netflix** - Streaming 200+ ล้านผู้ใช้  
🏢 **Uber** - Real-time location tracking  
🏢 **PayPal** - Payment processing  
🏢 **LinkedIn** - Social networking backend  
🏢 **NASA** - Mission-critical applications  

### **ตัวเลขที่น่าทึ่ง:**
- **50+ ล้าน downloads ต่อสัปดาห์**
- **2+ ล้าน packages บน NPM**
- **#1 Backend technology** ใน Stack Overflow Survey

**ถ้าบริษัทใหญ่เลือก Node.js แสดงว่า...? 💭**

---

## สไลด์ 5: Node.js vs Browser JavaScript 🥊

### **เหมือนกัน:**
```javascript
// ✅ Syntax เหมือนกันทุกประการ
const name = "นักศึกษา";
const greet = () => console.log(`สวัสดี ${name}!`);

// ✅ ES6+ Features ใช้ได้หมด
const fruits = ['apple', 'banana', 'orange'];
const [first, ...rest] = fruits;

// ✅ Async/Await ทำงานเหมือนกัน
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
}
```

### **ต่างกัน:**
| Feature | 🌐 Browser | 💻 Node.js |
|---------|------------|-------------|
| **Global Object** | `window` | `global` |
| **File Access** | ❌ ไม่ได้ | ✅ `fs` module |
| **DOM** | ✅ `document` | ❌ ไม่มี |
| **HTTP Server** | ❌ ไม่ได้ | ✅ `http` module |
| **Modules** | ES6 modules | CommonJS + ES6 |

### **ตัวอย่างที่แตกต่าง:**
```javascript
// 🌐 Browser: แสดงผลบนหน้าเว็บ
document.getElementById('title').innerHTML = 'Hello World';

// 💻 Node.js: เขียนไฟล์ลงฮาร์ดดิสก์
fs.writeFileSync('hello.txt', 'Hello World');
```

### **คำถามท้าทาย:**
*"ถ้า Node.js ไม่มี DOM แล้วจะสร้าง UI ได้อย่างไร?"*

---

## สไลด์ 6: ทำไมต้องเรียน Node.js? 🎯

### **สำหรับ React Developer:**
```javascript
// ⚡ สร้างเครื่องมือช่วยพัฒนา
npx create-react-app my-app  // ← Node.js tool!

// 📦 ติดตั้ง libraries
npm install react-router-dom  // ← NPM!

// 🔄 Auto-reload เมื่อแก้โค้ด
npm start  // ← Development server!
```

### **Career Path ที่เป็นไปได้:**
```
Frontend Developer (React)
        ↓
Frontend + Node.js Tools
        ↓
Full-stack Developer
        ↓
Backend Developer / DevOps Engineer
```

### **Real-world Applications:**
🎮 **Game Servers** - Multiplayer online games  
💰 **Fintech APIs** - Banking and payment systems  
📱 **Mobile Backends** - API สำหรับแอปมือถือ  
🤖 **AI/ML Services** - Machine learning inference  
🌐 **IoT Systems** - Internet of Things backends  

### **Salary Impact (Thailand 2024):**
- **Frontend Only:** 25,000-45,000 บาท
- **Frontend + Node.js:** 35,000-60,000 บาท
- **Full-stack:** 45,000-80,000 บาท

### **คำถามให้คิด:**
*"ถ้าคุณเป็น startup founder คุณจะจ้าง developer ที่รู้แค่ frontend หรือ full-stack?"*

---

## สไลด์ 7: NPM คืออะไร? 📦

### **NPM = Node Package Manager**
> **"App Store สำหรับ Developers"**

### **NPM ทำอะไรได้บ้าง:**
```bash
# 🔍 ค้นหา package
npm search react

# 📥 ติดตั้ง package  
npm install express

# 🚀 รันโปรเจค
npm start

# 📋 ดูรายการ package ที่ติดตั้งแล้ว
npm list
```

### **เปรียบเทียบให้เข้าใจ:**
```
🍎 App Store
├── หาแอปที่ต้องการ → ติดตั้ง → ใช้งาน
├── อัปเดทอัตโนมัติ
└── รีวิวและเรตติ้ง

📦 NPM  
├── หา package ที่ต้องการ → ติดตั้ง → import
├── อัปเดทด้วยคำสั่ง
└── Downloads และ GitHub stars
```

### **ตัวเลขน่าทึ่งของ NPM:**
- **2,000,000+ packages** 
- **200+ billion downloads ต่อปี**
- **17+ million developers** ใช้งาน
- **Package ใหม่ 1,300+ ต่อวัน**

### **คำถามสำคัญ:**
*"ถ้าไม่มี NPM แล้ว การพัฒนา web จะเป็นอย่างไร?"*

**ลองจินตนาการดู... 🤯**

---

## สไลด์ 8: NPM Package ยอดนิยม 🌟

### **Top Downloads (รายสัปดาห์):**
```
📦 lodash          → 50M+ downloads
   ├── Utility functions
   └── โค้ดสั้นลง อ่านง่ายขึ้น

📦 express         → 30M+ downloads  
   ├── Web framework
   └── สร้างเซิร์ฟเวอร์ง่ายๆ

📦 react           → 25M+ downloads
   ├── UI library ที่เราใช้!
   └── สร้าง component-based UI

📦 axios           → 20M+ downloads
   ├── HTTP client
   └── เรียก API ได้ง่าย
```

### **Categories ที่น่าสนใจ:**
🎨 **UI/UX:** React, Vue.js, Material-UI  
🌐 **Backend:** Express, Fastify, Koa  
🗃️ **Database:** MongoDB, Prisma, Sequelize  
🧪 **Testing:** Jest, Mocha, Cypress  
🔧 **Tools:** Webpack, ESLint, Prettier  

### **การติดตั้งง่ายๆ:**
```bash
# ติดตั้ง package เดียว
npm install package-name

# ติดตั้งหลาย packages พร้อมกัน
npm install express body-parser cors

# ติดตั้งเฉพาะ development  
npm install --save-dev nodemon
```

### **Fun Fact:**
*Package `is-odd` (ตรวจสอบเลขคี่) มี 500K+ downloads ต่อสัปดาห์!*

**ทำไมถึงมีคนใช้เยอะจัง? 🤔**

---

## สไลด์ 9: การติดตั้ง Node.js 💻

### **ขั้นตอนการติดตั้ง:**

#### **1. ดาวน์โหลดจาก nodejs.org**
```
🔗 https://nodejs.org
├── LTS Version (แนะนำ) → เสถียร, ปลอดภัย
└── Current Version → Feature ใหม่ล่าสุด
```

#### **2. ติดตั้งตามระบบปฏิบัติการ:**
```
🖥️ Windows: ดับเบิลคลิก .msi ไฟล์
🍎 macOS: ดับเบิลคลิก .pkg ไฟล์  
🐧 Linux: ใช้ package manager
```

#### **3. ตรวจสอบการติดตั้ง:**
```bash
# ตรวจสอบ Node.js version
node --version
# หรือ
node -v

# ตรวจสอบ NPM version  
npm --version
# หรือ
npm -v
```

### **ผลลัพธ์ที่ควรเห็น:**
```bash
$ node -v
v20.10.0

$ npm -v  
10.2.3
```

### **Alternative Installation:**
```bash
# ใช้ NVM (Node Version Manager)
nvm install node    # ติดตั้ง version ล่าสุด
nvm use 18.17.0     # เปลี่ยน version
```

### **คำถามเช็คความเข้าใจ:**
*"ทำไม NPM ถึงมาพร้อมกับ Node.js?"*

---

## สไลด์ 10: คำสั่ง Node.js แรก 🎉

### **Hello World แบบง่ายที่สุด:**
```bash
# เปิด Terminal/Command Prompt
node

# เข้าสู่ REPL (Read-Eval-Print Loop)
> console.log('สวัสดี Node.js!');
สวัสดี Node.js!
undefined

> 2 + 3
5

> const name = 'นักศึกษา'
undefined

> `สวัสดี ${name}!`
'สวัสดี นักศึกษา!'

# ออกจาก REPL
> .exit
```

### **สร้างไฟล์ JavaScript แรก:**
```javascript
// ไฟล์: hello.js
console.log('สวัสดีจาก Node.js!');
console.log('วันนี้เราเรียน Backend Development');

const currentTime = new Date();
console.log(`เวลาปัจจุบัน: ${currentTime}`);
```

### **รันไฟล์:**
```bash
# รันไฟล์ JavaScript
node hello.js

# ผลลัพธ์:
# สวัสดีจาก Node.js!
# วันนี้เราเรียน Backend Development  
# เวลาปัจจุบัน: Sat Sep 27 2025 10:30:00 GMT+0700
```

### **ความแตกต่างสำคัญ:**
```javascript
// ❌ ใน Browser มี window
console.log(window); // ReferenceError in Node.js

// ✅ ใน Node.js มี global และ process
console.log(global);
console.log(process.version);
```

**ลองรันดูสิ! มันใช้งานได้จริงๆ นะ! 🚀**

---

## สไลด์ 11: NPM คำสั่งพื้นฐาน 📋

### **เริ่มต้นโปรเจคใหม่:**
```bash
# สร้างโฟลเดอร์โปรเจค
mkdir my-first-node-project
cd my-first-node-project

# เริ่มต้นโปรเจค NPM
npm init

# หรือสร้างด้วยค่า default
npm init -y
```

### **package.json ที่ได้:**
```json
{
  "name": "my-first-node-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### **การติดตั้ง Package:**
```bash
# ติดตั้งและบันทึกใน dependencies
npm install express

# ติดตั้งเฉพาะ development  
npm install --save-dev nodemon

# ติดตั้งแบบ global (ใช้ได้ทุกที่)
npm install -g create-react-app
```

### **การจัดการ Package:**
```bash
# ดูรายการ package
npm list

# อัปเดท package
npm update

# ถอนการติดตั้ง
npm uninstall express

# ตรวจสอบ package ที่เก่า
npm outdated
```

### **คำถามสำคัญ:**
*"dependencies กับ devDependencies ต่างกันอย่างไร?"*

---

## สไลด์ 12: เข้าใจ package.json 📄

### **package.json = ใบแสดงตัวตนของโปรเจค**

```json
{
  "name": "food-delivery-api",           // ← ชื่อโปรเจค
  "version": "1.0.0",                    // ← เวอร์ชัน
  "description": "API สำหรับแอปสั่งอาหาร", // ← คำอธิบาย
  "main": "server.js",                   // ← ไฟล์หลัก
  "scripts": {                           // ← คำสั่งที่ใช้บ่อย
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {                      // ← package สำหรับ production
    "express": "^4.18.2",
    "body-parser": "^1.20.2"
  },
  "devDependencies": {                   // ← package สำหรับ development
    "nodemon": "^3.0.1",
    "jest": "^29.7.0"
  }
}
```

### **Scripts ที่ใช้บ่อย:**
```bash
# รันคำสั่งใน scripts
npm start        # → node server.js
npm run dev      # → nodemon server.js  
npm test         # → jest
npm run build    # → custom build command
```

### **Version Numbers (Semantic Versioning):**
```
^4.18.2 → Major.Minor.Patch
├── ^ = อัปเดท minor และ patch ได้
├── ~ = อัปเดทเฉพาะ patch ได้  
└── ไม่มีสัญลักษณ์ = version ตายตัว
```

### **node_modules/ คืออะไร:**
```
📁 my-project/
├── 📄 package.json     ← ข้อมูลโปรเจค
├── 📄 package-lock.json ← version ที่แน่นอน
├── 📁 node_modules/     ← ที่เก็บ package ทั้งหมด
└── 📄 server.js        ← โค้ดของเรา
```

**Fun Fact:** node_modules เป็นไดเรกทอรีที่หนักที่สุดในจักรวาล! 😂

---

## สไลด์ 13: Module System ของ Node.js 🧩

### **แนวคิด Modules:**
> **"แบ่งโค้ดเป็นชิ้นเล็กๆ เพื่อใช้ซ้ำและจัดการง่าย"**

### **CommonJS (วิธีเดิมของ Node.js):**
```javascript
// ไฟล์: math.js - สร้าง module
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// ส่งออกฟังก์ชัน
module.exports = {
    add,
    multiply
};

// หรือส่งออกทีละตัว
// module.exports.add = add;
// module.exports.multiply = multiply;
```

```javascript
// ไฟล์: app.js - ใช้ module
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.multiply(4, 2)); // 8

// หรือ destructuring
const { add, multiply } = require('./math');
console.log(add(10, 5));          // 15
```

### **ES6 Modules (วิธีใหม่):**
```javascript
// ไฟล์: math.mjs - สร้าง module แบบ ES6
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// หรือ default export
export default function calculator(a, b, operation) {
    if (operation === 'add') return a + b;
    if (operation === 'multiply') return a * b;
}
```

```javascript
// ไฟล์: app.mjs - ใช้ module แบบ ES6  
import { add, multiply } from './math.mjs';
import calculator from './math.mjs';

console.log(add(5, 3));
console.log(calculator(4, 2, 'multiply'));
```

### **คำถามให้คิด:**
*"ทำไมต้องแบ่งโค้ดเป็น modules? ใส่ไฟล์เดียวไม่ได้หรอ?"*

---

## สไลด์ 14: Built-in Modules ที่สำคัญ 🛠️

### **File System (fs) - จัดการไฟล์:**
```javascript
const fs = require('fs');

// อ่านไฟล์
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('เกิดข้อผิดพลาด:', err);
        return;
    }
    console.log('เนื้อหาไฟล์:', data);
});

// เขียนไฟล์
fs.writeFile('output.txt', 'สวัสดี Node.js!', (err) => {
    if (err) {
        console.error('เขียนไฟล์ไม่ได้:', err);
        return;
    }
    console.log('เขียนไฟล์สำเร็จ!');
});

// แบบ synchronous (blocking)
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
```

### **Path - จัดการ path ไฟล์:**
```javascript
const path = require('path');

console.log(__dirname);           // โฟลเดอร์ปัจจุบัน
console.log(__filename);          // ไฟล์ปัจจุบัน

const filePath = path.join(__dirname, 'data', 'users.json');
console.log(filePath);            // /project/data/users.json

const extname = path.extname('photo.jpg');
console.log(extname);             // .jpg
```

### **OS - ข้อมูลระบบปฏิบัติการ:**
```javascript
const os = require('os');

console.log('Platform:', os.platform());    // win32, darwin, linux
console.log('CPU Cores:', os.cpus().length); // จำนวน CPU cores
console.log('Free Memory:', os.freemem());   // RAM ว่าง
console.log('Home Directory:', os.homedir()); // โฟลเดอร์ home
```

### **URL - จัดการ URL:**
```javascript
const url = require('url');

const myUrl = new URL('https://example.com/users?page=1&limit=10');
console.log(myUrl.hostname);      // example.com
console.log(myUrl.pathname);      // /users
console.log(myUrl.searchParams.get('page')); // 1
```

**เหล่านี้คือพลังของ Node.js! 💪**

---

## สไลด์ 15: HTTP Module - เซิร์ฟเวอร์แรก! 🌐

### **สร้างเว็บเซิร์ฟเวอร์ง่ายๆ:**
```javascript
// ไฟล์: server.js
const http = require('http');

// สร้างเซิร์ฟเวอร์
const server = http.createServer((req, res) => {
    // ตั้งค่า response header
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    // ส่งข้อมูลกลับ
    res.end('<h1>สวัสดี! นี่คือเซิร์ฟเวอร์แรกของเรา! 🎉</h1>');
});

// เริ่มต้นเซิร์ฟเวอร์
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server กำลังทำงานที่ http://localhost:${PORT}`);
});
```

### **เซิร์ฟเวอร์ที่ตอบสนองต่าง URL:**
```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    if (pathname === '/') {
        res.end('<h1>หน้าแรก</h1><a href="/about">เกี่ยวกับเรา</a>');
    } else if (pathname === '/about') {
        res.end('<h1>เกี่ยวกับเรา</h1><a href="/">กลับหน้าแรก</a>');
    } else {
        res.writeHead(404);
        res.end('<h1>ไม่พบหน้าที่ค้นหา 😢</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

### **วิธีทดสอบ:**
```bash
# รันเซิร์ฟเวอร์
node server.js

# เปิดเบราว์เซอร์ไปที่:
# http://localhost:3000
```

### **คำถามท้าทาย:**
*"เซิร์ฟเวอร์นี้ต่างจาก React development server อย่างไร?"*

**ลองคิดดูสิ... 🤔**

---

## สไลด์ 16: NPM Scripts ที่ใช้ประจำ ⚡

### **การตั้งค่า Scripts ใน package.json:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "build": "webpack --mode production",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

### **การใช้งาน Scripts:**
```bash
# คำสั่งพิเศษ (ไม่ต้องใส่ run)
npm start    # รันโปรเจค production
npm test     # รัน unit tests

# คำสั่งทั่วไป (ต้องใส่ run)
npm run dev      # รันโหมด development
npm run build    # build โปรเจค
npm run lint     # ตรวจสอบโค้ด
```

### **Scripts ขั้นสูง:**
```json
{
  "scripts": {
    "prestart": "echo 'เตรียมเริ่มเซิร์ฟเวอร์...'",
    "start": "node server.js",
    "poststart": "echo 'เซิร์ฟเวอร์เริ่มทำงานแล้ว!'",
    
    "dev:server": "nodemon server.js",
    "dev:client": "npm start --prefix client",
    "dev": "npm-run-all --parallel dev:server dev:client"
  }
}
```

### **ทำไมต้องใช้ Scripts:**
✅ **สะดวก** - จำคำสั่งง่ายๆ แทนคำสั่งยาว  
✅ **มาตรฐาน** - ทีมงานใช้คำสั่งเดียวกัน  
✅ **เร็ว** - พิมพ์สั้น ทำงานเร็ว  
✅ **อัตโนมัติ** - รัน pre/post scripts ได้  

### **Pro Tips:**
```bash
# ดู scripts ทั้งหมด
npm run

# รัน script ด้วยพารามิเตอร์
npm start -- --port 8080

# รัน script จากโฟลเดอร์อื่น
npm run start --prefix ./api
```

**Scripts คือเวทมนตร์ที่ทำให้ชีวิต developer ง่ายขึ้น! ✨**

---

## สไลด์ 17: Nodemon - Development Tool 🔄

### **ปัญหาที่เจอบ่อย:**
```bash
# แก้โค้ด → บันทึก → หยุดเซิร์ฟเวอร์ → รันใหม่
node server.js
# แก้โค้ด...
# Ctrl+C (หยุดเซิร์ฟเวอร์)
node server.js  # รันใหม่อีก!
# วนซ้ำไปเรื่อยๆ... 😫
```

### **Nodemon แก้ปัญหา:**
```bash
# ติดตั้ง nodemon
npm install --save-dev nodemon

# ใช้งาน
npx nodemon server.js

# หรือเพิ่มใน package.json
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}

# รันด้วย
npm run dev
```

### **Nodemon จะ Auto-restart เมื่อ:**
```
📝 บันทึกไฟล์ .js
📝 บันทึกไฟล์ .json  
📝 เพิ่มไฟล์ใหม่
📝 ลบไฟล์

🚫 ไม่ restart เมื่อแก้ไฟล์ใน node_modules/
```

### **การตั้งค่า nodemon.json:**
```json
{
  "watch": ["src"],
  "ext": "js,json,ts",
  "ignore": ["*.test.js", "public/"],
  "delay": 2500,
  "env": {
    "NODE_ENV": "development"
  }
}
```

### **ข้อดีของ Nodemon:**
✅ **ประหยัดเวลา** - ไม่ต้อง restart เอง  
✅ **ไม่ลืม** - ไม่มีลืม restart แล้วงงว่าทำไมโค้ดไม่เปลี่ยน  
✅ **Focus** - เน้นเขียนโค้ด ไม่เสียสมาธิ  

### **คำถามสนุก:**
*"ถ้าไม่มี nodemon การพัฒนา Node.js จะเป็นอย่างไร?"*

**เหมือนการล้างจานโดยไม่มีน้ำไหล! 🚰**

---

## สไลด์ 18: สรุปและเตรียมตัว Express.js 🎯

### **สิ่งที่เราเรียนรู้แล้ว:**
✅ **Node.js** - JavaScript runtime นอกเบราว์เซอร์  
✅ **NPM** - Package manager ที่ทรงพลัง  
✅ **Modules** - การแบ่งโค้ดเป็นชิ้นส่วน  
✅ **Built-in APIs** - fs, http, path, os  
✅ **HTTP Server** - เซิร์ฟเวอร์พื้นฐานด้วย Node.js  

### **ความสามารถใหม่ที่ได้:**
```javascript
// จากนี้...
console.log("Hello World");

// เป็นนี้!
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World from Server!');
});
server.listen(3000);
```

### **แต่ยังมีปัญหา... 🤔**
```javascript
// HTTP Module พื้นฐาน = เขียนยาก
if (req.url === '/api/users' && req.method === 'GET') {
    // จัดการ GET users
} else if (req.url === '/api/users' && req.method === 'POST') {
    // จัดการ POST users  
} else if (req.url.startsWith('/api/users/') && req.method === 'DELETE') {
    // จัดการ DELETE user
} // และอื่นๆ อีกมากมาย... 😵
```

### **Express.js เข้ามาช่วย! 🦸‍♂️**
```javascript
// Express = ง่าย สั้น เข้าใจง่าย
app.get('/api/users', getUsersHandler);
app.post('/api/users', createUserHandler);
app.delete('/api/users/:id', deleteUserHandler);
```

### **ต่อไปเราจะเรียน:**
🚀 **Express.js Framework** - Web framework ที่นิยมที่สุด  
🛣️ **Routing** - จัดการ URL และ HTTP methods  
⚙️ **Middleware** - ประมวลผล request ระหว่างทาง  
📦 **Static Files** - เสิร์ฟไฟล์ HTML, CSS, JS  

### **เป้าหมาย 2.5 ชั่วโมงต่อไป:**
*"จาก HTTP Server พื้นฐาน → Modern Web Server"*

### **คำถามก่อนพัก:**
*"ถึงตอนนี้ คุณรู้สึกว่า Node.js ยากหรือง่ายกว่าที่คิด?"*

**พักสมองสักหน่อย แล้วกลับมาสร้าง Express Server กัน! ☕**

---

## 🎉 สรุปหัวข้อที่ 1: Node.js และ NPM

### **Journey ที่เราผ่านมา:**
```
🌐 JavaScript ใน Browser
        ↓
💻 JavaScript ใน Computer (Node.js)
        ↓  
📦 Package Management (NPM)
        ↓
🛠️ Built-in Modules & APIs
        ↓
🚀 พร้อมสำหรับ Express.js!
```

### **ความรู้ที่ได้:**
🧠 **แนวคิด** - Runtime, Package Manager, Modules  
🛠️ **เครื่องมือ** - node, npm, nodemon  
💻 **การเขียนโค้ด** - Modules, File System, HTTP Server  
🚀 **การพัฒนา** - Scripts, Development workflow  

### **ทักษะใหม่:**
- ติดตั้งและใช้งาน Node.js
- จัดการ packages ด้วย NPM  
- เขียน modules และ import/export
- สร้าง HTTP server พื้นฐาน
- ใช้ development tools

### **คำถามทบทวน:**
1. *"Node.js ต่างจาก JavaScript ใน browser อย่างไร?"*
2. *"NPM มีบทบาทอย่างไรในการพัฒนา web?"*
3. *"Module system ช่วยให้โค้ดดีขึ้นอย่างไร?"*

### **เตรียมตัวสำหรับต่อไป:**
หัวข้อที่ 2: **Express.js สำหรับสร้างเว็บเซิร์ฟเวอร์**
- Web Framework ที่ทำให้การสร้างเซิร์ฟเวอร์ง่ายขึ้น
- Routing และ HTTP Methods
- Middleware และ Error Handling

**พร้อมก้าวสู่ระดับถัดไปแล้วหรือยัง? 🚀**