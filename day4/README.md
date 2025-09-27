# วันที่ 4: Node.js และ Express.js เบื้องต้น
## Modern Web Technology Development - Backend Fundamentals

**เวลา:** 8 ชั่วโมง (09:00-17:00 พักเบรก 1 ชม.)

---

## 🎯 จุดประสงค์การเรียนรู้

หลังจบวันที่ 4 นักศึกษาจะสามารถ:

- **เข้าใจ Node.js** และความแตกต่างจาก JavaScript ในเบราว์เซอร์
- **สร้างเว็บเซิร์ฟเวอร์** ง่ายๆ ด้วย Express.js
- **ส่งและรับข้อมูล JSON** ผ่าน API
- **เข้าใจหลักการพื้นฐาน** ของ Backend Development
- **สร้าง REST API** ที่สมบูรณ์พร้อม validation และ file storage

---

## 📚 หัวข้อหลัก

### 1. ทำความรู้จัก Node.js และ NPM (2.5 ชั่วโมง)
- Node.js คืออะไร และทำงานอย่างไร
- ความแตกต่างระหว่าง Client-side กับ Server-side JavaScript
- NPM และการติดตั้ง Package
- การสร้าง HTTP Server พื้นฐาน

### 2. Express.js สำหรับสร้างเว็บเซิร์ฟเวอร์ (3 ชั่วโมง)
- Express.js Framework พื้นฐาน
- Routing และ Middleware
- การจัดการ Request และ Response
- Static Files และ Template Engines

### 3. การทำงานกับข้อมูล JSON และ API ง่ายๆ (2.5 ชั่วโมง)
- JSON Data Format และการใช้งาน
- HTTP Methods: GET, POST, PUT, DELETE
- REST API Design Principles
- CRUD Operations และ File Storage

---

## 📖 เนื้อหาทฤษฎี

### หัวข้อที่ 1: Node.js และ NPM
📄 **[nodejs-npm.md](nodejs-npm.md)** - ความรู้พื้นฐานเกี่ยวกับ Node.js
- JavaScript Runtime Environment
- Event-Driven Architecture
- NPM Package Management
- Module System (CommonJS)

### หัวข้อที่ 2: Express.js Framework
📄 **[expressjs.md](expressjs.md)** - การสร้างเว็บเซิร์ฟเวอร์ด้วย Express
- Express.js Installation และ Setup
- Routing และ Route Parameters
- Middleware Functions
- Error Handling

### หัวข้อที่ 3: JSON และ API Development
📄 **[json-api.md](json-api.md)** - การทำงานกับข้อมูล JSON และ API
- JSON Data Format
- REST API Concepts
- CRUD Operations
- Data Validation และ File Storage

---

## 🧪 Lab ระหว่างเรียน

### Lab Experiment 1: Express.js พื้นฐาน
🔬 **[expressjs-experiment.md](expressjs-experiment.md)**
- ทดลองสร้าง Express Server
- ทำความเข้าใจ Routing และ Middleware
- การส่ง Response ในรูปแบบต่างๆ

### Lab Experiment 2: JSON API Development
🔬 **[json-api-experiment.md](json-api-experiment.md)**
- ทดลองสร้าง JSON API
- การรับส่งข้อมูล JSON
- Basic CRUD Operations

---

## 🏠 Lab การบ้าน (ส่งสัปดาห์ถัดไป)

### ชุดการบ้าน: Node.js และ Express.js Projects
📝 **[nodejs-express-api-lab.md](nodejs-express-api-lab.md)**

#### Lab 4.1: สร้างเซิร์ฟเวอร์แรกด้วย Node.js (1 ชม.)
- เปรียบเทียบ HTTP Server vs Express Server
- สร้าง Student API พื้นฐาน
- การจัดการ Routes และ Error Handling

#### Lab 4.2: ทำ API ส่งข้อมูลรายการอาหาร (1.5 ชม.)
- Food Menu API พร้อม Search และ Filter
- การใช้งาน Middleware
- API Documentation

#### Lab 4.3: รับข้อมูลจาก Form และบันทึกในไฟล์ (1.5 ชม.)
- Contact Form API พร้อม Validation
- File-based Data Storage
- Frontend-Backend Integration

---

## 🎯 ผลลัพธ์การเรียนรู้ (CLO)

**CLO3: นักศึกษาสามารถสร้างเว็บเซิร์ฟเวอร์ง่ายๆ ด้วย Node.js และ Express.js ได้**

### ทักษะที่ได้รับ:
- ✅ สร้าง HTTP Server ด้วย Node.js
- ✅ ใช้ Express.js Framework สร้างเว็บแอปพลิเคชัน
- ✅ ออกแบบ REST API ตามมาตรฐาน
- ✅ จัดการข้อมูล JSON และ File Storage
- ✅ เขียน Middleware สำหรับ Validation และ Logging
- ✅ สร้าง CRUD Operations ที่สมบูรณ์

---

## 🛠️ เครื่องมือที่ใช้

### Software Requirements:
- **Node.js** (v18+ แนะนำ)
- **NPM** (มาพร้อม Node.js)
- **Code Editor** (VS Code แนะนำ)
- **Terminal/Command Line**
- **Web Browser** สำหรับทดสอบ API

### NPM Packages หลักที่ใช้:
- **express** - Web Framework
- **cors** - Cross-Origin Resource Sharing
- **express-rate-limit** - Rate Limiting
- **nodemon** - Development Tool (auto-restart)

---

## 📈 เส้นทางการเรียนรู้

```
HTML/CSS/JavaScript (วันที่ 1-2)
           ↓
    Frontend React.js (วันที่ 3)
           ↓
 → Backend Node.js/Express (วันที่ 4) ← คุณอยู่ที่นี่
           ↓
   Full-stack Integration (วันที่ 5)
```

### ก่อนหน้านี้เรียนมา:
- HTML5 และ CSS3
- JavaScript และ DOM Manipulation
- React.js และ Component-based Development

### วันนี้จะเรียน:
- Server-side JavaScript กับ Node.js
- Web Framework ด้วย Express.js
- API Development และ JSON Handling

### ต่อไปจะเรียน:
- การเชื่อมต่อ Frontend กับ Backend
- Database Integration
- Authentication และ Security

---

## 🚀 เตรียมความพร้อม

### ติดตั้ง Node.js:
1. ดาวน์โหลดจาก [nodejs.org](https://nodejs.org)
2. ตรวจสอบการติดตั้ง:
   ```bash
   node --version
   npm --version
   ```

### Clone โปรเจคตัวอย่าง:
```bash
git clone [repository-url]
cd nodejs-express-day4
npm install
```

---

## 📞 การสนับสนุน

### หากมีปัญหาระหว่างเรียน:
- 🙋‍♂️ ยกมือถามผู้สอน
- 👥 ปรึกษาเพื่อนร่วมชั้น
- 💻 ใช้ console.log() เพื่อ debug
- 📖 อ่านเอกสาร Express.js อย่างเป็นทางการ

### Resource เพิ่มเติม:
- [Express.js Official Docs](https://expressjs.com/)
- [Node.js Official Docs](https://nodejs.org/docs/)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

---

## 🎉 สำเร็จแล้ว!

หลังจากเรียนวันนี้ คุณจะสามารถ:
- สร้าง Backend API ได้ด้วยตัวเอง
- เข้าใจการทำงานของ Client-Server Architecture
- เตรียมพร้อมสำหรับการพัฒนา Full-stack Application

**มาเริ่มต้นการเป็น Backend Developer กัน! 💪**