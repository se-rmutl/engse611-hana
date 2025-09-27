# วันที่ 3: เริ่มต้นกับ React.js
## หัวข้อที่ 1: ทำความรู้จักกับ React.js และ JSX
### สำหรับนักศึกษาวิศวกรรมซอฟต์แวร์

---

## สไลด์ 1: ยินดีต้อนรับสู่ยุค Modern Web! 🚀

### เมื่อวาน เราเรียน:
✅ **HTML5 + CSS3** - โครงสร้างและการออกแบบ  
✅ **JavaScript** - การเขียนโปรแกรมและ DOM  
✅ **Interactive Events** - การตอบสนองผู้ใช้  

### วันนี้ เราจะ:
🔥 **React.js** - สร้าง UI ที่ทันสมัย  
⚡ **JSX** - เขียน HTML ใน JavaScript  
🎯 **Component** - สร้างชิ้นส่วน UI ที่นำกลับมาใช้ได้  

### เป้าหมายวันนี้:
*"จาก Web Developer พื้นฐาน → Modern Frontend Developer"*

**Time to Level Up! 💪**

---

## สไลด์ 2: แล้ว React.js คืออะไร? 🤔

### ปัญหาที่เคยเจอ:
```javascript
// วิธีเก่า: จัดการ DOM ด้วย JavaScript ธรรมดา
document.getElementById('username').innerHTML = 'สวัสดี ' + name;
document.getElementById('counter').innerHTML = count + ' ครั้ง';
document.getElementById('message').style.display = isVisible ? 'block' : 'none';

// เยอะ ซับซ้อน และผิดพลาดง่าย! 😫
```

### React.js แก้ปัญหา:
```jsx
// วิธี React: เขียนแค่ผลลัพธ์ที่ต้องการ
function WelcomeComponent({ name, count, isVisible }) {
    return (
        <div>
            <h1>สวัสดี {name}</h1>
            <p>{count} ครั้ง</p>
            {isVisible && <div>ข้อความพิเศษ</div>}
        </div>
    );
}

// เขียนน้อย เข้าใจง่าย ผิดพลาดยาก! 😊
```

---

## สไลด์ 3: ประวัติ React.js 📚

### เกิดขึ้นได้อย่างไร?
📅 **2011:** Facebook มีปัญหา - UI ซับซ้อน อัพเดทยาก  
🧠 **2013:** Jordan Walke สร้าง React - เปิดเป็น Open Source  
🚀 **ปัจจุบัน:** ใช้โดย Netflix, Uber, Airbnb, Instagram, WhatsApp  

### ทำไมถึงนิยม?
1. **Declarative** - บอกแค่ว่าต้องการอะไร  
2. **Component-Based** - แบ่งชิ้นส่วนเล็กๆ  
3. **Learn Once, Write Anywhere** - ใช้ได้หลายแพลตฟอร์ม  
4. **Virtual DOM** - เร็วและประหยัดทรัพยากร  

### คำถามสำคัญ: 
*"ถ้า Facebook ใช้ React สำหรับ 3 พันล้านผู้ใช้ แสดงว่า...?"*

**มันต้องเก่งจริงๆ! 💪**

---

## สไลด์ 4: React vs วิธีเก่า 🥊

### วิธีเก่า (Vanilla JavaScript):
```javascript
// ต้องจำเยอะ ทำเยอะ
const button = document.createElement('button');
button.textContent = 'คลิกฉัน';
button.addEventListener('click', function() {
    document.getElementById('output').innerHTML = 'ถูกคลิกแล้ว!';
});
document.body.appendChild(button);
```

### วิธี React:
```jsx
// เข้าใจง่าย ทำน้อย
function MyButton() {
    const [clicked, setClicked] = useState(false);
    
    return (
        <div>
            <button onClick={() => setClicked(true)}>
                คลิกฉัน
            </button>
            {clicked && <p>ถูกคลิกแล้ว!</p>}
        </div>
    );
}
```

### ข้อดีของ React:
✅ **เขียนน้อย ได้มาก**  
✅ **อ่านเข้าใจง่าย**  
✅ **แก้ไขปลอดภัย**  
✅ **นำกลับมาใช้ได้**

---

## สไลด์ 5: ก่อนเริ่ม React ต้องรู้จัก Node.js! 🟢

### Node.js คืออะไร?
💡 **JavaScript ที่ทำงานนอกเบราว์เซอร์**  
🔧 **เครื่องมือสำหรับ Developer**  
📦 **NPM** - ร้านแอปพลิเคชันสำหรับโปรแกรมเมอร์  

### ทำไมต้องใช้ Node.js กับ React?
```bash
# สร้างโปรเจค React ใหม่
npx create-react-app my-first-react-app

# รันโปรเจค
npm start

# ติดตั้งไลบรารี่เพิ่มเติม
npm install bootstrap
```

### เปรียบเทียบ:
- **เบราว์เซอร์:** JavaScript สำหรับผู้ใช้งาน  
- **Node.js:** JavaScript สำหรับโปรแกรมเมอร์  

### คำถามสำคัญ: 
*"Node.js เปรียบเสมือนอะไรในชีวิตจริง?"*

**เหมือนห้องแล็บสำหรับนักวิทยาศาสตร์! 🧪**

---

## สไลด์ 6: การติดตั้ง Node.js และ React 💻

### ขั้นตอนการติดตั้ง:

#### 1. ติดตั้ง Node.js
```bash
# ตรวจสอบว่าติดตั้งแล้วหรือยัง
node --version
npm --version
```

#### 2. สร้างโปรเจค React แรก
```bash
# สร้างโปรเจค (ใช้เวลา 2-3 นาที)
npx create-react-app hello-react

# เข้าไปในโฟลเดอร์
cd hello-react

# รันโปรเจค
npm start
```

#### 3. เปิดเบราว์เซอร์ที่ http://localhost:3000
```
🎉 เห็นโลโก้ React หมุนๆ = สำเร็จ!
```

### โครงสร้างไฟล์ที่ได้:
```
hello-react/
├── public/
├── src/
│   ├── App.js     ← ไฟล์หลัก
│   └── index.js   ← จุดเริ่มต้น
└── package.json   ← ข้อมูลโปรเจค
```

---

## สไลด์ 7: โครงสร้างโปรเจค React 📂

### ไฟล์สำคัญที่ต้องรู้จัก:

#### **public/index.html** - หน้าเว็บหลัก
```html
<div id="root">
    <!-- React จะใส่เนื้อหาที่นี่ -->
</div>
```

#### **src/index.js** - จุดเริ่มต้น
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

#### **src/App.js** - Component หลัก
```jsx
function App() {
  return (
    <div className="App">
      <h1>สวัสดี React!</h1>
    </div>
  );
}

export default App;
```

### การทำงาน:
`index.html` → `index.js` → `App.js` → แสดงบนเบราว์เซอร์

---

## สไลด์ 8: รู้จักกับ JSX 🎨

### JSX = JavaScript + XML

#### เขียน HTML ใน JavaScript ได้!
```jsx
// JSX - เหมือน HTML แต่อยู่ใน JavaScript
const element = <h1>สวัสดี React!</h1>;

// เทียบกับ JavaScript ธรรมดา
const element2 = React.createElement('h1', null, 'สวัสดี React!');
```

### ตัวอย่าง JSX:
```jsx
function Welcome() {
    const name = "นักศึกษา";
    const isLoggedIn = true;
    
    return (
        <div>
            <h1>สวัสดี {name}!</h1>
            {isLoggedIn ? (
                <p>ยินดีต้อนรับกลับมา</p>
            ) : (
                <p>กรุณาเข้าสู่ระบบ</p>
            )}
        </div>
    );
}
```

### JSX = HTML + JavaScript Super Power! ⚡

---

## สไลด์ 9: กฎของ JSX ที่ต้องจำ 📋

### 1. ต้องมี Element ครอบนอกสุด
```jsx
// ❌ ผิด
return (
    <h1>หัวข้อ</h1>
    <p>เนื้อหา</p>
);

// ✅ ถูก
return (
    <div>
        <h1>หัวข้อ</h1>
        <p>เนื้อหา</p>
    </div>
);

// ✅ หรือใช้ Fragment
return (
    <>
        <h1>หัวข้อ</h1>
        <p>เนื้อหา</p>
    </>
);
```

### 2. ใช้ className แทน class
```jsx
// ❌ ผิด
<div class="container">

// ✅ ถูก
<div className="container">
```

### 3. ปิด Tag ให้ครบ
```jsx
// ❌ ผิด
<img src="image.jpg">
<input type="text">

// ✅ ถูก
<img src="image.jpg" />
<input type="text" />
```

---

## สไลด์ 10: JavaScript ใน JSX 💫

### ใช้ปีกกา {} เพื่อเขียน JavaScript
```jsx
function UserProfile() {
    const user = {
        name: "สมชาย",
        age: 20,
        hobbies: ["เขียนโค้ด", "เล่นเกม", "ฟังเพลง"]
    };
    
    return (
        <div className="profile">
            <h2>ชื่อ: {user.name}</h2>
            <p>อายุ: {user.age} ปี</p>
            <p>อีก {30 - user.age} ปี จะ 30</p>
            <ul>
                {user.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <button onClick={() => alert(`สวัสดี ${user.name}!`)}>
                ทักทาย
            </button>
        </div>
    );
}
```

### สิ่งที่ทำได้ใน {}:
✅ **ตัวแปร** - {name}  
✅ **การคำนวณ** - {2 + 3}  
✅ **เงื่อนไข** - {age >= 18 ? 'ผู้ใหญ่' : 'เด็ก'}  
✅ **Function** - {items.map(...)}

---

## สไลด์ 11: เงื่อนไข Conditional Rendering 🤖

### วิธีการแสดงเนื้อหาตามเงื่อนไข:

#### 1. ใช้ && Operator
```jsx
function Notification({ hasMessage }) {
    return (
        <div>
            {hasMessage && (
                <div className="alert">
                    🔔 คุณมีข้อความใหม่!
                </div>
            )}
        </div>
    );
}
```

#### 2. ใช้ Ternary Operator
```jsx
function LoginStatus({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <button>ออกจากระบบ</button>
            ) : (
                <button>เข้าสู่ระบบ</button>
            )}
        </div>
    );
}
```

#### 3. ใช้ If Statement
```jsx
function WeatherWidget({ weather }) {
    let weatherIcon;
    if (weather === 'sunny') weatherIcon = '☀️';
    else if (weather === 'rainy') weatherIcon = '🌧️';
    else weatherIcon = '☁️';
    
    return <div>{weatherIcon} {weather}</div>;
}
```

#### **Ternary operator คือ**
ตัวดำเนินการ (Operator) ในการเขียนโปรแกรมที่รับ 3 โอเปอแรนด์ (Operand) เพื่อประเมินเงื่อนไขและส่งคืนค่าตามผลลัพธ์ของเงื่อนไขนั้น โดยมีรูปแบบคือ เงื่อนไข ? ค่าถ้าจริง : ค่าถ้าเท็จ ใช้เพื่อแทนที่คำสั่ง if-else แบบง่ายๆ ทำให้โค้ดสั้นลง  
**หลักการทำงาน**
**1. เงื่อนไข (Condition):** เป็นส่วนแรกที่ถูกประเมินค่า
**2. เครื่องหมาย ? (Question Mark):** คั่นระหว่างเงื่อนไขกับค่าที่จะส่งคืน
**3. ค่าถ้าจริง (expression1):** เป็นค่าที่ถูกส่งคืนเมื่อเงื่อนไขเป็นจริง (true)
**4. เครื่องหมาย : (Colon):** คั่นระหว่างค่าถ้าจริงกับค่าถ้าเท็จ
**5. ค่าถ้าเท็จ (expression2):** เป็นค่าที่ถูกส่งคืนเมื่อเงื่อนไขเป็นเท็จ (false)

---

## สไลด์ 12: การวนลูป Lists ใน JSX 🔄

### การแสดงรายการข้อมูล:
```jsx
function StudentList() {
    const students = [
        { id: 1, name: "สมชาย", grade: "A" },
        { id: 2, name: "สมศรี", grade: "B+" },
        { id: 3, name: "สมหมาย", grade: "A-" }
    ];
    
    return (
        <div className="student-list">
            <h2>รายชื่อนักศึกษา</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - เกรด {student.grade}
                        <span className={`grade-${student.grade.replace('+', 'plus')}`}>
                            {student.grade === 'A' ? '🏆' : '📚'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

### สิ่งสำคัญ:
✅ **key prop** - ใช้ id หรือค่าเฉพาะ  
✅ **map() method** - แปลง array เป็น JSX elements  
✅ **return** - แต่ละ item ต้อง return JSX

### คำถามสำคัญ: 
*"ทำไมต้องใส่ key?"*

**เพื่อให้ React รู้ว่าอันไหนคืออันเดิม อันไหนเป็นของใหม่! 🔑**

---

## สไลด์ 13: Event Handling ใน React 🎯

### การจัดการ Events ใน React:
```jsx
function InteractiveButton() {
    // Function สำหรับจัดการ Event
    const handleClick = () => {
        alert('ปุ่มถูกคลิก!');
    };
    
    const handleMouseOver = () => {
        console.log('เมาส์อยู่บนปุ่ม');
    };
    
    const handleDoubleClick = () => {
        alert('Double Click!');
    };
    
    return (
        <button 
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onDoubleClick={handleDoubleClick}
            className="interactive-btn"
        >
            ลองคลิก!
        </button>
    );
}
```

### Event ที่ใช้บ่อย:
✅ **onClick** - คลิก  
✅ **onChange** - เปลี่ยนค่าในฟอร์ม  
✅ **onSubmit** - ส่งฟอร์ม  
✅ **onMouseOver/Out** - เมาส์เข้า/ออก  
✅ **onFocus/Blur** - โฟกัส/เบลอ  

### ข้อดีของ React Events:
🎯 **SyntheticEvents** - ทำงานเหมือนกันทุกเบราว์เซอร์  
⚡ **Performance** - React ดูแลให้อัตโนมัติ

---

## สไลด์ 14: ทำไม React ถึงเร็ว? Virtual DOM 🚀

### ปัญหาของ DOM ธรรมดา:
```javascript
// ช้า เพราะเปลี่ยน DOM จริง
document.getElementById('counter').innerHTML = count;
document.getElementById('status').innerHTML = status;
document.getElementById('message').innerHTML = message;
// ทุก ๆ การเปลี่ยนแปลง = หน้าจอกะพริบ
```

### วิธีของ React - Virtual DOM:
```jsx
// เร็ว เพราะ React จำได้ว่าอะไรเปลี่ยน
function App({ count, status, message }) {
    return (
        <div>
            <div>{count}</div>      {/* เปลี่ยนแค่นี้ */}
            <div>{status}</div>     {/* ไม่เปลี่ยน */}
            <div>{message}</div>    {/* เปลี่ยนแค่นี้ */}
        </div>
    );
}
// React เปลี่ยนแค่ส่วนที่จำเป็น = เร็วกว่า!
```

### Virtual DOM คือ:
1. **Copy ของ DOM** ที่เก็บไว้ในหน่วยความจำ  
2. **เปรียบเทียบ** สิ่งที่เปลี่ยนแปลง  
3. **อัพเดท** เฉพาะจุดที่เปลี่ยนจริงๆ  

### ผลลัพธ์:
⚡ เร็วกว่า 10-100 เท่า  
🔋 ประหยัดแบตเตอรี่  
😊 UX ที่ลื่นไหล

---

## สไลด์ 15: การสร้าง Component แรก 👶

### Component = ชิ้นส่วน UI ที่นำกลับมาใช้ได้
```jsx
// Component ง่ายๆ - แค่ function ที่ return JSX
function WelcomeCard() {
    return (
        <div className="welcome-card">
            <h2>🎉 ยินดีต้อนรับ!</h2>
            <p>สวัสดีนักพัฒนาเว็บมือใหม่</p>
            <button>เริ่มการเดินทาง</button>
        </div>
    );
}

// การใช้งาน Component
function App() {
    return (
        <div>
            <WelcomeCard />
            <WelcomeCard />
            <WelcomeCard />
        </div>
    );
}
```

### หลักการตั้งชื่อ Component:
✅ **PascalCase** - ขึ้นต้นด้วยตัวใหญ่  
✅ **คำนาม** - อธิบายสิ่งที่เป็น  
✅ **ชัดเจน** - อ่านแล้วรู้ทันทีว่าทำอะไร  

### ตัวอย่างชื่อที่ดี:
- UserProfile, ProductCard, NavigationMenu
- LoginForm, SearchBox, ImageGallery

---

## สไลด์ 16: Component ที่มี Props 🎁

### Props = การส่งข้อมูลให้ Component
```jsx
// Component ที่รับ Props
function StudentCard({ name, age, major, gpa }) {
    const gpaColor = gpa >= 3.0 ? 'green' : gpa >= 2.0 ? 'orange' : 'red';
    
    return (
        <div className="student-card">
            <div className="student-avatar">
                {name.charAt(0).toUpperCase()}
            </div>
            <h3>{name}</h3>
            <p>อายุ: {age} ปี</p>
            <p>สาขา: {major}</p>
            <p className={gpaColor}>
                GPA: {gpa.toFixed(2)}
                {gpa >= 3.5 && ' 🌟'}
            </p>
        </div>
    );
}

// การใช้งาน
function ClassRoom() {
    return (
        <div className="classroom">
            <StudentCard name="สมชาย" age={20} major="วิศวกรรมซอฟต์แวร์" gpa={3.75} />
            <StudentCard name="สมศรี" age={21} major="วิทยาการคอมพิวเตอร์" gpa={3.25} />
            <StudentCard name="สมหมาย" age={19} major="เทคโนโลยีสารสนเทศ" gpa={2.85} />
        </div>
    );
}
```

### Props คือ:
🎁 **การส่งข้อมูล** จาก parent ไป child  
📞 **การสื่อสาร** ระหว่าง components  
🔒 **Read-only** - ไม่สามารถเปลี่ยนได้

---

## สไลด์ 17: Default Props และ PropTypes 🛡️

### การกำหนดค่า Default:
```jsx
function ProductCard({ name, price = 0, image = "default.jpg", inStock = true }) {
    return (
        <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">
                {price > 0 ? `฿${price.toLocaleString()}` : 'ฟรี!'}
            </p>
            {!inStock && <div className="badge">สินค้าหมด</div>}
        </div>
    );
}

// การใช้งาน
<ProductCard name="โน้ตบุ๊ค" price={25000} />
<ProductCard name="แอปฟรี" />  {/* ใช้ค่า default */}
```

### การตรวจสอบประเภทข้อมูล (Optional):
```jsx
import PropTypes from 'prop-types';

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string,
    inStock: PropTypes.bool
};
```

### ประโยชน์:
✅ **ป้องกันข้อผิดพลาด** - ตรวจสอบข้อมูลที่ส่งมา  
✅ **ง่ายต่อการ Debug** - แจ้งเตือนเมื่อข้อมูลผิด  
✅ **เอกสารในโค้ด** - อ่านแล้วรู้ว่าต้องส่งอะไรบ้าง

---

## สไลด์ 18: Component Composition 🧩

### การประกอบ Components เข้าด้วยกัน:
```jsx
// Component เล็กๆ ที่ทำหน้าที่เฉพาะ
function Avatar({ user }) {
    return (
        <img 
            src={user.avatar} 
            alt={user.name}
            className="avatar" 
        />
    );
}

function UserInfo({ user }) {
    return (
        <div className="user-info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
    );
}

function UserActions({ onEdit, onDelete }) {
    return (
        <div className="user-actions">
            <button onClick={onEdit}>แก้ไข</button>
            <button onClick={onDelete}>ลบ</button>
        </div>
    );
}

// Component ใหญ่ที่ประกอบจาก Components เล็กๆ
function UserCard({ user, onEdit, onDelete }) {
    return (
        <div className="user-card">
            <Avatar user={user} />
            <UserInfo user={user} />
            <UserActions onEdit={onEdit} onDelete={onDelete} />
        </div>
    );
}
```

### หลักการ Composition:
🧩 **แบ่งแยก** - แต่ละ Component ทำหน้าที่เดียว  
🔄 **นำกลับมาใช้ได้** - Avatar ใช้ได้ในหลายที่  
🔧 **แก้ไขง่าย** - เปลี่ยน Avatar ไม่กระทบ UserInfo

---

## สไลด์ 19: คำถามสำคัญ ❓

### 1. JSX ต่างจาก HTML อย่างไร?
**คำตอบ:** JSX เขียนใน JavaScript ใช้ {} ได้ และใช้ className แทน class

### 2. ทำไมต้องใช้ key ใน list?
**คำตอบ:** เพื่อให้ React รู้ว่า item ไหนเปลี่ยนแปลง เพื่อประสิทธิภาพที่ดีกว่า

### 3. Component ต่างจาก function ธรรมดาอย่างไร?
**คำตอบ:** Component return JSX, ชื่อขึ้นต้นด้วยตัวใหญ่, และใช้เป็น JSX Tag ได้

### 4. Props ส่งได้แค่ string หรือไม่?
**คำตอบ:** ส่งได้ทุกประเภท - number, boolean, object, function, array

### 5. ถ้า Component ไม่มี Props จะเป็นอย่างไร?
**คำตอบ:** ยังทำงานได้ปกติ แต่จะแสดงเนื้อหาเหมือนกันเสมอ

**ข้อสงสัยอื่นๆ ถามได้เสมอ! 🙋‍♀️🙋‍♂️**

---

## สไลด์ 20: Lab 3.1 - โปรไฟล์ส่วนตัว 💻

### เริ่มต้นการปฏิบัติ!

#### เป้าหมาย:
สร้าง Component แสดงโปรไฟล์ส่วนตัว

#### สิ่งที่จะทำ:
```jsx
function PersonalProfile() {
    const profile = {
        name: "ชื่อของคุณ",
        studentId: "รหัสนักศึกษา",
        major: "วิศวกรรมซอฟต์แวร์",
        year: 3,
        hobbies: ["เขียนโค้ด", "เล่นเกม", "ดูหนัง"],
        skills: ["JavaScript", "React", "HTML/CSS"],
        avatar: "https://placehold.co/150"
    };
    
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src={profile.avatar} alt={profile.name} />
                <h2>{profile.name}</h2>
                <p className="student-id">{profile.studentId}</p>
            </div>
            
            <div className="profile-info">
                <div className="info-item">
                    <strong>สาขา:</strong> {profile.major}
                </div>
                <div className="info-item">
                    <strong>ชั้นปี:</strong> {profile.year}
                </div>
            </div>
            
            <div className="profile-section">
                <h3>งานอิดเลอ</h3>
                <ul>
                    {profile.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
            
            <div className="profile-section">
                <h3>ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
```

#### ความท้าทาย:
1. เพิ่ม CSS ให้สวยงาม
2. เพิ่ม social media links
3. เพิ่ม progress bar สำหรับทักษะ
4. ทำให้ responsive

---

## สไลด์ 21: Component ขั้นสูง - Children Props 👨‍👩‍👧‍👦

### การใช้ children เพื่อส่ง content:
```jsx
// Component ที่รับ children
function Card({ title, children }) {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                {children}  {/* เนื้อหาที่ส่งมา */}
            </div>
        </div>
    );
}

// การใช้งาน
function Dashboard() {
    return (
        <div className="dashboard">
            <Card title="ข้อมูลส่วนตัว">
                <p>ชื่อ: สมชาย ใจดี</p>
                <p>อายุ: 20 ปี</p>
                <button>แก้ไข</button>
            </Card>
            
            <Card title="สถิติการเรียน">
                <div className="stats">
                    <div>เกรด: 3.50</div>
                    <div>หน่วยกิต: 120</div>
                </div>
            </Card>
            
            <Card title="กิจกรรม">
                <ul>
                    <li>ชมรมเขียนโปรแกรม</li>
                    <li>ทีมพัฒนาแอป</li>
                </ul>
            </Card>
        </div>
    );
}
```

### ประโยชน์ของ children:
🎯 **ยืดหยุ่น** - ส่งเนื้อหาอะไรก็ได้  
🔄 **นำกลับมาใช้ได้** - Layout เดียวกัน เนื้อหาต่างกัน  
🧩 **Component Composition** - ประกอบ components ซับซ้อน

---

## สไลด์ 22: CSS ใน React - Styling Components 🎨

### วิธีการใส่ CSS ใน React:

#### 1. CSS ธรรมดา (External)
```jsx
// App.css
.profile-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
}

// App.js
import './App.css';
function App() {
    return <div className="profile-card">...</div>;
}
```

#### 2. Inline Styles
```jsx
function StyledButton({ primary = false, children }) {
    const buttonStyle = {
        backgroundColor: primary ? '#007bff' : '#6c757d',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    };
    
    return (
        <button style={buttonStyle}>
            {children}
        </button>
    );
}
```

#### 3. CSS Modules (Advanced)
```jsx
// Button.module.css
.primary {
    background-color: #007bff;
}

// Button.js
import styles from './Button.module.css';
function Button() {
    return <button className={styles.primary}>คลิก</button>;
}
```

### แนะนำ: เริ่มด้วย CSS ธรรมดา + className ก่อน!

---

## สไลด์ 23: การจัดการ Arrays ใน React 📊

### ตัวอย่างการทำงานกับข้อมูล:
```jsx
function StudentGrades() {
    const grades = [
        { subject: 'คณิตศาสตร์', score: 85, credit: 3 },
        { subject: 'ฟิสิกส์', score: 78, credit: 3 },
        { subject: 'เคมี', score: 92, credit: 2 },
        { subject: 'อังกฤษ', score: 88, credit: 3 }
    ];
    
    // คำนวณเกรดเฉลี่ย
    const totalPoints = grades.reduce((sum, grade) => 
        sum + (grade.score * grade.credit), 0);
    const totalCredits = grades.reduce((sum, grade) => 
        sum + grade.credit, 0);
    const gpa = (totalPoints / totalCredits / 20).toFixed(2);
    
    // แบ่งประเภทเกรด
    const excellentGrades = grades.filter(g => g.score >= 85);
    const needImprovementGrades = grades.filter(g => g.score < 80);
    
    return (
        <div className="grades-dashboard">
            <h2>ผลการเรียน</h2>
            
            <div className="gpa-card">
                <h3>เกรดเฉลี่ย: {gpa}</h3>
                <div className={`gpa-status ${gpa >= 3.0 ? 'good' : 'warning'}`}>
                    {gpa >= 3.0 ? '🎉 เยี่ยม!' : '💪 ต้องพยายาม!'}
                </div>
            </div>
            
            <div className="grades-list">
                {grades.map((grade, index) => (
                    <div key={index} className="grade-item">
                        <span className="subject">{grade.subject}</span>
                        <span className="credit">{grade.credit} หน่วยกิต</span>
                        <span className={`score ${grade.score >= 85 ? 'excellent' : grade.score >= 75 ? 'good' : 'fair'}`}>
                            {grade.score} คะแนน
                        </span>
                    </div>
                ))}
            </div>
            
            {excellentGrades.length > 0 && (
                <div className="excellent-subjects">
                    <h4>🌟 วิชาที่ได้คะแนนดี:</h4>
                    {excellentGrades.map(g => g.subject).join(', ')}
                </div>
            )}
            
            {needImprovementGrades.length > 0 && (
                <div className="improvement-needed">
                    <h4>📚 วิชาที่ต้องปรับปรุง:</h4>
                    {needImprovementGrades.map(g => g.subject).join(', ')}
                </div>
            )}
        </div>
    );
}
```

### เทคนิคที่ใช้:
✅ **map()** - แสดงรายการ  
✅ **filter()** - กรองข้อมูล  
✅ **reduce()** - คำนวณค่ารวม  
✅ **Conditional Rendering** - แสดงตามเงื่อนไข

---

## สไลด์ 24: เปรียบเทียบ React vs Vue vs Angular 🏁

### เปรียบเทียบ 3 Framework ยอดนิยม:

| ฟีเจอร์ | React | Vue | Angular |
|---------|-------|-----|---------|
| **ความยาก** | 🟡 ปานกลาง | 🟢 ง่าย | 🔴 ยาก |
| **ขนาดไฟล์** | 🟡 เล็ก-กลาง | 🟢 เล็ก | 🔴 ใหญ่ |
| **ความนิยม** | 🥇 #1 | 🥉 #3 | 🥈 #2 |
| **บริษัทใหญ่** | Facebook | Alibaba | Google |
| **เหมาะสำหรับ** | ทุกขนาด | เว็บเล็ก-กลาง | Enterprise |

### ทำไมเลือก React?
✅ **Job Opportunities** - งานเยอะที่สุด  
✅ **Community** - คนใช้เยอะ ถามง่าย  
✅ **Flexibility** - เขียนได้หลายแบบ  
✅ **React Native** - ทำแอปมือถือด้วย  
✅ **จ่ายเงินดี** - เงินเดือนสูงกว่าเฉลี่ย  

### สถิติน่าสนใจ:
📈 **GitHub Stars:** React (220k+) > Angular (93k+) > Vue (206k+)  
💼 **Job Demand:** React นำโด่ด 40%+ ของตลาด  
💰 **Salary:** React Developer เฉลี่ย 45,000-80,000 บาท/เดือน

---

## สไลด์ 25: เคล็ดลับการเขียน React ให้เก่ง 💡

### Best Practices สำหรับมือใหม่:

#### 1. ตั้งชื่อให้ดี
```jsx
// ❌ ไม่ดี
function comp1() { return <div>...</div>; }
function thing() { return <div>...</div>; }

// ✅ ดี
function UserProfile() { return <div>...</div>; }
function ProductCard() { return <div>...</div>; }
```

#### 2. แบ่ง Component ให้เหมาะสม
```jsx
// ❌ ใหญ่เกินไป
function MegaComponent() {
    return (
        <div>
            {/* 100+ บรรทัด */}
        </div>
    );
}

// ✅ แบ่งเป็นชิ้นเล็ก
function Header() { ... }
function Content() { ... }
function Footer() { ... }
function App() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
```

#### 3. ใช้ Destructuring
```jsx
// ❌ ยาวเกินไป
function UserInfo(props) {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
            <p>{props.user.age}</p>
        </div>
    );
}

// ✅ กระชับ
function UserInfo({ user }) {
    const { name, email, age } = user;
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{age}</p>
        </div>
    );
}
```

#### 4. เขียน Comments ที่มีประโยชน์
```jsx
function WeatherWidget({ city, apiKey }) {
    // แปลงอุณหภูมิจาก Kelvin เป็น Celsius
    const convertTemp = (kelvin) => Math.round(kelvin - 273.15);
    
    // สี background ตามสภาพอากาศ
    const getWeatherColor = (condition) => {
        switch(condition) {
            case 'sunny': return '#FFD700';
            case 'rainy': return '#4682B4';
            default: return '#87CEEB';
        }
    };
    
    return (
        <div>
            {/* Weather display logic */}
        </div>
    );
}
```

---

## สไลด์ 26: Debug และ Developer Tools 🔍

### เครื่องมือช่วย Debug React:

#### 1. React Developer Tools (Extension)
- ติดตั้งใน Chrome/Firefox
- ดู Component tree
- ตรวจสอบ Props และ State
- วัด Performance

#### 2. Console.log เวอร์ชัน React
```jsx
function ProductList({ products }) {
    console.log('ProductList rendered with:', products.length, 'products');
    
    return (
        <div>
            {products.map((product, index) => {
                console.log(`Rendering product ${index}:`, product.name);
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
}
```

#### 3. Error Boundaries (ขั้นสูง)
```jsx
function ErrorFallback({ error }) {
    return (
        <div className="error-message">
            <h2>โอ๊ะ! เกิดข้อผิดพลาด</h2>
            <p>{error.message}</p>
            <button onClick={() => window.location.reload()}>
                รีเฟรชหน้า
            </button>
        </div>
    );
}
```

#### 4. เคล็ดลับ Debug ที่ใช้ได้จริง:
```jsx
// ดูค่าตัวแปรแบบสั้น
function MyComponent({ data }) {
    return (
        <div>
            {JSON.stringify(data, null, 2)} {/* ดูข้อมูลทั้งหมด */}
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* แสดงแบบสวย */}
        </div>
    );
}
```

### ข้อผิดพลาดที่เจอบ่อย:
❌ **ลืมใส่ key** ใน list  
❌ **ใช้ class** แทน className  
❌ **ไม่ปิด tag** ให้ครบ  
❌ **return หลาย element** โดยไม่มี wrapper

---

## สไลด์ 27: Modern JavaScript ที่ต้องรู้ 🚀

### ES6+ Features ที่ใช้ใน React:

#### 1. Arrow Functions
```jsx
// ✅ เขียนสั้น
const handleClick = () => {
    console.log('Clicked!');
};

// ✅ เขียนสั้นมาก
const multiply = (a, b) => a * b;

// ใช้ใน JSX
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

#### 2. Destructuring
```jsx
// Object destructuring
const { name, age, email } = user;
const { title, children, ...restProps } = props;

// Array destructuring
const [first, second, ...others] = students;
const [isVisible, setIsVisible] = useState(false);
```

#### 3. Template Literals
```jsx
// ✅ อ่านง่ายกว่า
const message = `สวัสดี ${name}, อายุ ${age} ปี`;
const className = `card ${isActive ? 'active' : 'inactive'}`;

// ✅ Multi-line strings
const html = `
    <div class="user">
        <h1>${user.name}</h1>
        <p>${user.bio}</p>
    </div>
`;
```

#### 4. Spread Operator
```jsx
// Object spread
const newUser = { ...user, age: 25 };
const props = { ...defaultProps, ...customProps };

// Array spread
const newItems = [...items, newItem];
const combined = [...array1, ...array2];
```

#### 5. Default Parameters
```jsx
function Card({ title = "ไม่มีหัวข้อ", children = null, size = "medium" }) {
    return (
        <div className={`card card-${size}`}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}
```

---

## สไลด์ 28: ทำความเข้าใจ React Ecosystem 🌍

### สิ่งที่ควรรู้จักในโลก React:

#### เครื่องมือพัฒนา:
🛠️ **Create React App** - สร้างโปรเจคใหม่  
📦 **Vite** - Build tool ที่เร็วกว่า  
🎯 **Next.js** - React framework ที่ใช้งานง่าย  

#### Libraries ที่ใช้บ่อย:
🎨 **UI Libraries:**
- Material-UI (MUI) - Google Material Design
- Ant Design - Enterprise UI
- Chakra UI - Simple & Modern

📡 **สำหรับข้อมูล:**
- Axios - HTTP requests
- React Query - Data fetching
- SWR - Data synchronization

🎭 **Animation:**
- Framer Motion - Smooth animations
- React Spring - Spring physics animations

#### เมื่อเรียนจบ 3 วัน สามารถเรียนต่อ:
📊 **State Management:** Redux, Zustand, Recoil  
🛣️ **Routing:** React Router  
📱 **Mobile:** React Native  
🖥️ **Desktop:** Electron  

### ความจริง: 
**React ecosystem ใหญ่มาก แต่เริ่มจากพื้นฐานที่แข็งแรงก่อน!**

---

## สไลด์ 29: สรุปสิ่งที่เรียนมา 📝

### เนื้อหาที่เราครอบคลุม:

#### **React Fundamentals:**
✅ **React คืออะไร** - Library สำหรับสร้าง UI  
✅ **Virtual DOM** - ทำไมถึงเร็ว  
✅ **Component** - ชิ้นส่วน UI ที่นำกลับมาใช้ได้  
✅ **Props** - การส่งข้อมูลระหว่าง Components  

#### **JSX Mastery:**
✅ **JSX Syntax** - HTML ใน JavaScript  
✅ **JavaScript in JSX** - ใช้ {} เพื่อเขียน JS  
✅ **Conditional Rendering** - แสดงเนื้อหาตามเงื่อนไข  
✅ **Lists & Keys** - แสดงข้อมูลแบบ array  
✅ **Event Handling** - จัดการ click, input, etc.  

#### **Best Practices:**
✅ **Component Naming** - PascalCase และชื่อที่ชัดเจน  
✅ **Props Destructuring** - เขียนโค้ดให้สั้นและอ่านง่าย  
✅ **Modern JavaScript** - ES6+ features  
✅ **Debugging** - เครื่องมือและเทคนิค  

### การเปลี่ยนแปลงที่เกิดขึ้น:
**เมื่อเช้า:** รู้จักแค่ HTML + JavaScript  
**เมื่อกี้นี้:** สร้าง UI Component ได้แล้ว!  

### ขั้นตอนต่อไป:
🎯 **Props** - การส่งข้อมูลและ interaction  
🔄 **State** - การจัดการข้อมูลที่เปลี่ยนแปลง  
🏗️ **Complex Apps** - สร้างแอปพลิเคชันจริง

---

## สไลด์ 30: ถาม-ตอบและเตรียมตัวต่อ 🙋

### คำถามที่ได้รับบ่อย:

#### Q: "React ยากมั้ย?"
**A:** ตอนแรกอาจงง แต่เมื่อเข้าใจแล้วจะติดใจ! เหมือนขี่จักรยาน

#### Q: "จำเป็นต้องรู้ JavaScript เก่งมั้ย?"
**A:** รู้พื้นฐานก็พอ แต่ถ้าเก่งขึ้นจะเขียน React ได้ดีขึ้น

#### Q: "React ใช้ทำอะไรได้บ้าง?"
**A:** เว็บไซต์, แอปมือถือ, แอปเดสก์ท็อป, แม้แต่ VR!

#### Q: "หลังเรียนจบแล้วจะหางานได้มั้ย?"
**A:** React Developer เป็น 1 ใน 3 อาชีพที่ต้องการมากที่สุด!

### Challenge สำหรับช่วงพัก:
🎯 **นึกโครงการที่อยากทำ** - เว็บไซต์อะไรที่ใฝ่ฝัน?  
🤔 **คิดฟีเจอร์** - ถ้าทำเว็บไซต์เล็กๆ อยากมีอะไรบ้าง?  
💭 **จินตนาการ** - ถ้าเป็น Facebook คนแรก จะออกแบบยังไง?

### เตรียมพร้อมสำหรับหัวข้อต่อไป:
📝 **Components & Props** - การสร้างและการสื่อสาร  
🔧 **Event Handling** - ทำให้ Components interactive  
🎨 **Styling** - ทำให้ Components สวยงาม  
🔄 **Dynamic Content** - ข้อมูลที่เปลี่ยนแปลงได้

**พักเบรก 15 นาที แล้วมาสร้าง Components กันต่อ! ☕✨**