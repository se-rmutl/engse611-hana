## หัวข้อที่ 2: การสร้าง Components และ Props
### สำหรับนักศึกษาวิศวกรรมซอฟต์แวร์

---

## สไลด์ 1: ยินดีต้อนรับสู่ Components World! 🧩

### เมื่อกี้เราได้เรียนรู้:
✅ **React คืออะไร** และทำไมถึงนิยม  
✅ **JSX Syntax** - HTML ใน JavaScript  
✅ **Component พื้นฐาน** - การสร้างชิ้นส่วน UI  

### ตอนนี้เราจะ Deep Dive:
🔥 **Components Architecture** - ออกแบบโครงสร้างแอป  
⚡ **Props Mastery** - การส่งข้อมูลอย่างมืออาชีพ  
🎯 **Reusable Components** - เขียนครั้งเดียว ใช้ได้หลายที่  
🛡️ **Props Validation** - ป้องกันข้อผิดพลาด  

### เป้าหมายวันนี้:
*"จาก Basic Components → Professional Component Architecture"*

**Time to Build Like a Pro! 💪**

---

## สไลด์ 2: Component คิดอย่างไร? 🤔

### เปรียบเทียบกับชีวิตจริง:

#### 🏠 **บ้าน = App Component**
```jsx
function House() {
    return (
        <div>
            <Kitchen />      {/* ครัว */}
            <LivingRoom />   {/* ห้องนั่งเล่น */}
            <Bedroom />      {/* ห้องนอน */}
        </div>
    );
}
```

#### 🍳 **ครัว = Kitchen Component**
```jsx
function Kitchen() {
    return (
        <div>
            <Refrigerator />    {/* ตู้เย็น */}
            <Stove />          {/* เตา */}
            <Sink />           {/* อ่างล้างจาน */}
        </div>
    );
}
```

### หลักการคิด:
1. **แบ่งแยกหน้าที่** - แต่ละ component ทำงานเฉพาะ
2. **นำกลับมาใช้ได้** - Refrigerator ใช้ได้หลายครัว  
3. **ง่ายต่อการแก้ไข** - เปลี่ยน Stove ไม่กระทบ Sink
4. **ง่ายต่อการทดสอบ** - ทดสอบแต่ละชิ้นแยกกัน

### คำถามสำคัญ: 
*"ถ้าเว็บไซต์คือบ้าน Components คือห้องต่างๆ แล้ว Props คืออะไร?"*

---

## สไลด์ 3: Props = การสื่อสาร 📞

### Props เปรียบเสมือน:

#### 📞 **การโทรศัพท์**
```jsx
// พ่อแม่โทรไปหาลูก พร้อมส่งข้อความ
<Son message="อย่าลืมกินข้าว" money={500} />

// ลูกรับข้อความและเงิน
function Son({ message, money }) {
    return (
        <div>
            <p>พ่อแม่บอกว่า: {message}</p>
            <p>ได้เงินมา: {money} บาท</p>
        </div>
    );
}
```

#### 🎁 **การส่งของขวัญ**
```jsx
// ส่งของขวัญวันเกิด
<BirthdayCard 
    name="สมชาย" 
    age={20}
    gift="โน้ตบุ๊ค"
    from="ป้าสุดา"
/>

function BirthdayCard({ name, age, gift, from }) {
    return (
        <div className="birthday-card">
            <h2>🎉 สุขสันต์วันเกิด {name}!</h2>
            <p>อายุครบ {age} ปีแล้ว</p>
            <p>🎁 ของขวัญ: {gift}</p>
            <p>💝 จาก: {from}</p>
        </div>
    );
}
```

### จุดสำคัญ:
- **Props ไหลในทิศทางเดียว** - จาก parent ไป child เท่านั้น
- **Read-only** - child ไม่สามารถแก้ไข props ได้
- **เหมือนพารามิเตอร์ในฟังก์ชัน** - ส่งค่าเข้าไปเพื่อประมวลผล

---

## สไลด์ 4: ประเภทข้อมูลที่ส่งได้ใน Props 📦

### Props รับได้ทุกประเภทข้อมูล JavaScript:

#### **1. Primitives**
```jsx
<UserCard 
    name="สมชาย"           // String
    age={25}              // Number  
    isActive={true}       // Boolean
    score={null}          // Null
/>
```

#### **2. Objects & Arrays**
```jsx
<ProductCard 
    product={{
        id: 1,
        name: "iPhone",
        price: 35000,
        colors: ["สีดำ", "สีขาว", "สีแดง"]
    }}
    categories={["Electronics", "Mobile", "Apple"]}
/>
```

#### **3. Functions**
```jsx
<Button 
    onClick={() => alert('คลิกแล้ว!')}
    onHover={(event) => console.log('Hover', event)}
/>

function Button({ onClick, onHover, children }) {
    return (
        <button 
            onClick={onClick} 
            onMouseEnter={onHover}
        >
            {children}
        </button>
    );
}
```

#### **4. JSX Elements**
```jsx
<Modal 
    title={<h2>🔔 การแจ้งเตือน</h2>}
    content={
        <div>
            <p>คุณมีข้อความใหม่</p>
            <Button>อ่านเลย</Button>
        </div>
    }
/>
```

---

## สไลด์ 5: Destructuring Props - เทคนิคมืออาชีพ ⚡

### วิธีเก่า vs วิธีใหม่:

#### ❌ **แบบเก่า - ยาวและซ้ำ**
```jsx
function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.product.image} alt={props.product.name} />
            <h3>{props.product.name}</h3>
            <p>ราคา: {props.product.price} บาท</p>
            <p>หมวดหมู่: {props.category}</p>
            <p>คะแนน: {props.rating} ⭐</p>
            <button disabled={props.isOutOfStock}>
                {props.isOutOfStock ? 'หมด' : 'ซื้อเลย'}
            </button>
        </div>
    );
}
```

#### ✅ **แบบใหม่ - สั้นและชัดเจน**
```jsx
function ProductCard({ product, category, rating, isOutOfStock }) {
    // Destructuring ในตัวแปร
    const { image, name, price } = product;
    
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>ราคา: {price} บาท</p>
            <p>หมวดหมู่: {category}</p>
            <p>คะแนน: {rating} ⭐</p>
            <button disabled={isOutOfStock}>
                {isOutOfStock ? 'หมด' : 'ซื้อเลย'}
            </button>
        </div>
    );
}
```

#### 🚀 **แบบ Pro - Nested Destructuring**
```jsx
function UserProfile({ 
    user: { name, email, avatar },     // Nested destructuring
    settings: { theme, language },
    isOnline = false                   // Default value
}) {
    return (
        <div className={`profile ${theme}`}>
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
            <span className={`status ${isOnline ? 'online' : 'offline'}`}>
                {isOnline ? '🟢 Online' : '🔴 Offline'}
            </span>
            <p>ภาษา: {language}</p>
        </div>
    );
}
```

---

## สไลด์ 6: Default Props - ค่าเริ่มต้นที่ฉลาด 🎯

### ทำไมต้องมี Default Props?

#### **ปัญหาที่เจอ:**
```jsx
function WelcomeMessage({ name, age, city }) {
    return (
        <div>
            <h1>สวัสดี {name}!</h1>           {/* undefined ถ้าไม่ส่ง name */}
            <p>อายุ {age} ปี</p>               {/* undefined ถ้าไม่ส่ง age */}
            <p>อยู่ที่ {city}</p>              {/* undefined ถ้าไม่ส่ง city */}
        </div>
    );
}

// การใช้งานที่อาจมีปัญหา
<WelcomeMessage name="สมชาย" />  // age และ city จะเป็น undefined
```

#### **แก้ไขด้วย Default Parameters:**
```jsx
function WelcomeMessage({ 
    name = "ผู้เยี่ยมชม", 
    age = 18, 
    city = "ไม่ระบุ",
    avatar = "https://placehold.co/100",
    isVIP = false 
}) {
    return (
        <div className={`welcome ${isVIP ? 'vip' : 'regular'}`}>
            <img src={avatar} alt={name} />
            <h1>สวัสดี {name}! 👋</h1>
            <p>อายุ {age} ปี</p>
            <p>อยู่ที่ {city}</p>
            {isVIP && <span className="vip-badge">⭐ VIP Member</span>}
        </div>
    );
}
```

#### **ตัวอย่างการใช้งาน:**
```jsx
// ใช้ค่า default ทั้งหมด
<WelcomeMessage />

// ใช้บางส่วน
<WelcomeMessage name="สมศรี" city="เชียงใหม่" />

// ใช้ครบทุกค่า
<WelcomeMessage 
    name="สมชาย" 
    age={25} 
    city="กรุงเทพ"
    avatar="./my-photo.jpg"
    isVIP={true}
/>
```

### ประโยชน์:
✅ **Robust** - ป้องกัน undefined errors  
✅ **User-friendly** - ยังทำงานได้แม้ข้อมูลไม่ครบ  
✅ **Flexible** - ใช้งานได้หลายแบบ  
✅ **Self-documented** - อ่านแล้วรู้ว่าต้องการข้อมูลอะไร

---

## สไลด์ 7: Props Validation ด้วย PropTypes 🛡️

### ทำไมต้อง Validate Props?

#### **ปัญหาที่เจอบ่อย:**
```jsx
function PriceDisplay({ price, currency }) {
    // ถ้า price เป็น string จะเกิดอะไรขึ้น?
    const total = price * 1.07; // VAT 7%
    
    return (
        <div>
            <p>ราคา: {price} {currency}</p>
            <p>รวม VAT: {total} {currency}</p>  {/* NaN! */}
        </div>
    );
}

// การใช้งานผิด
<PriceDisplay price="1000" currency="บาท" />  // price เป็น string!
<PriceDisplay price={1000} />                  // currency เป็น undefined!
```

#### **แก้ไขด้วย PropTypes:**

**ติดตั้ง PropTypes:**
```bash
npm install prop-types
```

**ใช้งาน PropTypes:**
```jsx
import React from 'react';
import PropTypes from 'prop-types';

function PriceDisplay({ price, currency, discount = 0, isVIP = false }) {
    const discountAmount = price * (discount / 100);
    const priceAfterDiscount = price - discountAmount;
    const total = priceAfterDiscount * 1.07; // VAT 7%
    
    return (
        <div className={`price-display ${isVIP ? 'vip-pricing' : ''}`}>
            {discount > 0 && (
                <p className="original-price">
                    ราคาเดิม: ฿{price.toLocaleString()}
                </p>
            )}
            <p className="current-price">
                ราคา: ฿{priceAfterDiscount.toLocaleString()} {currency}
            </p>
            <p className="total-price">
                รวม VAT: ฿{total.toLocaleString()} {currency}
            </p>
            {discount > 0 && (
                <p className="savings">
                    ประหยัด: ฿{discountAmount.toLocaleString()} 
                    ({discount}% OFF)
                </p>
            )}
        </div>
    );
}

// PropTypes validation
PriceDisplay.propTypes = {
    price: PropTypes.number.isRequired,        // ตัวเลข จำเป็น
    currency: PropTypes.string.isRequired,     // ข้อความ จำเป็น
    discount: PropTypes.number,                // ตัวเลข ไม่จำเป็น
    isVIP: PropTypes.bool                      // boolean ไม่จำเป็น
};

// Default props
PriceDisplay.defaultProps = {
    discount: 0,
    isVIP: false
};

export default PriceDisplay;
```

#### **PropTypes ประเภทต่างๆ:**
```jsx
Component.propTypes = {
    // ประเภทพื้นฐาน
    name: PropTypes.string,
    age: PropTypes.number,
    isActive: PropTypes.bool,
    
    // Array และ Object
    hobbies: PropTypes.array,
    user: PropTypes.object,
    
    // Array ของข้อมูลประเภทเฉพาะ
    scores: PropTypes.arrayOf(PropTypes.number),
    users: PropTypes.arrayOf(PropTypes.object),
    
    // Object รูปแบบเฉพาะ
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number
    }),
    
    // เลือกได้จากตัวเลือก
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    status: PropTypes.oneOf(['active', 'inactive', 'pending']),
    
    // หลายประเภท
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    
    // Function
    onClick: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    
    // JSX
    children: PropTypes.node,
    header: PropTypes.element
};
```

### ประโยชน์:
✅ **ป้องกันข้อผิดพลาด** - จับ bugs ตั้งแต่ development  
✅ **เอกสารในโค้ด** - รู้ทันทีว่าต้องส่งข้อมูลอะไร  
✅ **ทีมเวิร์คดีขึ้น** - คนอื่นใช้ component เราได้ง่าย  
✅ **Debugging ง่าย** - error message ชัดเจน

---

## สไลด์ 8: Children Props - Component ที่ยืดหยุ่น 👶

### Children Props คืออะไร?

#### **การทำงานปกติ:**
```jsx
<Button text="คลิกฉัน" icon="🚀" />
```

#### **การทำงานด้วย Children:**
```jsx
<Button>
    🚀 คลิกฉัน
</Button>
```

### ตัวอย่างจริง:

#### **Card Component ที่ยืดหยุ่น:**
```jsx
function Card({ title, children, className = '', onClose }) {
    return (
        <div className={`card ${className}`}>
            <div className="card-header">
                <h3>{title}</h3>
                {onClose && (
                    <button className="close-btn" onClick={onClose}>
                        ✕
                    </button>
                )}
            </div>
            <div className="card-body">
                {children}  {/* เนื้อหาที่ส่งมา */}
            </div>
        </div>
    );
}
```

#### **การใช้งานที่หลากหลาย:**
```jsx
function Dashboard() {
    return (
        <div className="dashboard">
            {/* Card ที่มีข้อความ */}
            <Card title="ข้อมูลส่วนตัว">
                <p>ชื่อ: สมชาย ใจดี</p>
                <p>อีเมล: somchai@email.com</p>
                <p>โทรศัพท์: 081-234-5678</p>
            </Card>

            {/* Card ที่มีฟอร์ม */}
            <Card title="แก้ไขข้อมูล" onClose={() => alert('ปิด')}>
                <form>
                    <input type="text" placeholder="ชื่อใหม่" />
                    <input type="email" placeholder="อีเมลใหม่" />
                    <button type="submit">บันทึก</button>
                </form>
            </Card>

            {/* Card ที่มีรูปภาพ */}
            <Card title="รูปภาพ" className="image-card">
                <img src="photo.jpg" alt="ภาพประจำตัว" />
                <div className="image-actions">
                    <button>เปลี่ยนรูป</button>
                    <button>ลบรูป</button>
                </div>
            </Card>

            {/* Card ที่มี Components อื่น */}
            <Card title="สถิติ">
                <div className="stats-grid">
                    <StatItem label="โพสต์" value={150} />
                    <StatItem label="ผู้ติดตาม" value={1250} />
                    <StatItem label="กำลังติดตาม" value={95} />
                </div>
            </Card>
        </div>
    );
}
```

### ตัวอย่างขั้นสูง - Modal Component:

```jsx
function Modal({ isOpen, onClose, size = 'medium', children }) {
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className={`modal modal-${size}`}
                onClick={(e) => e.stopPropagation()} // ไม่ให้ปิด modal เมื่อคลิกข้างใน
            >
                <div className="modal-header">
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

// การใช้งาน
function App() {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div>
            <button onClick={() => setShowModal(true)}>
                เปิด Modal
            </button>
            
            <Modal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)}
                size="large"
            >
                <h2>🎉 แจ้งเตือน</h2>
                <p>คุณได้รับรางวัลพิเศษ!</p>
                <div className="modal-actions">
                    <button className="btn-primary">รับรางวัล</button>
                    <button onClick={() => setShowModal(false)}>
                        ปิด
                    </button>
                </div>
            </Modal>
        </div>
    );
}
```

### ประโยชน์ของ Children Props:
✅ **ความยืดหยุ่น** - ใส่เนื้อหาอะไรก็ได้  
✅ **นำกลับมาใช้ได้** - Layout เดียวกัน เนื้อหาต่างกัน  
✅ **Composition Pattern** - ประกอบ components ซับซ้อน  
✅ **Clean API** - ง่ายต่อการใช้งาน

---

## สไลด์ 9: Component Composition Patterns 🏗️

### Pattern 1: Compound Components

#### **ปัญหา: Component ที่มี API ซับซ้อน**
```jsx
// ❌ API ที่ซับซ้อนและยากใช้
<ComplexCard 
    title="การ์ดข่าว"
    headerActions={[
        { label: 'แก้ไข', onClick: editHandler },
        { label: 'ลบ', onClick: deleteHandler }
    ]}
    body="เนื้อหาข่าวสาร..."
    footer="เผยแพร่เมื่อ 2023-12-01"
    showFooter={true}
    cardType="news"
/>
```

#### **✅ แก้ไขด้วย Compound Components:**
```jsx
function Card({ children, className = '' }) {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    );
}

function CardHeader({ children }) {
    return <div className="card-header">{children}</div>;
}

function CardTitle({ children }) {
    return <h3 className="card-title">{children}</h3>;
}

function CardActions({ children }) {
    return <div className="card-actions">{children}</div>;
}

function CardBody({ children }) {
    return <div className="card-body">{children}</div>;
}

function CardFooter({ children }) {
    return <div className="card-footer">{children}</div>;
}

// ให้ sub-components เป็น properties ของ Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Actions = CardActions;
Card.Body = CardBody;
Card.Footer = CardFooter;
```

#### **การใช้งานที่สวยงามและชัดเจน:**
```jsx
function NewsPage() {
    return (
        <div className="news-container">
            <Card className="news-card">
                <Card.Header>
                    <Card.Title>📰 ข่าวเทคโนโลยี</Card.Title>
                    <Card.Actions>
                        <button onClick={editHandler}>✏️ แก้ไข</button>
                        <button onClick={deleteHandler}>🗑️ ลบ</button>
                    </Card.Actions>
                </Card.Header>
                
                <Card.Body>
                    <img src="news-image.jpg" alt="ข่าวเทคโนโลยี" />
                    <p>React 18 ได้เปิดตัวฟีเจอร์ใหม่ที่น่าตื่นเต้น...</p>
                </Card.Body>
                
                <Card.Footer>
                    <small>เผยแพร่เมื่อ 1 ธันวาคม 2023</small>
                    <div className="social-share">
                        <button>👍 ถูกใจ</button>
                        <button>💬 แสดงความคิดเห็น</button>
                        <button>📤 แชร์</button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}
```

### Pattern 2: Render Props

```jsx
// Component ที่ให้ข้อมูลและ logic
function DataProvider({ render }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchData()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);
    
    // ส่ง data, loading, error ให้กับ render function
    return render({ data, loading, error });
}

// การใช้งาน
function ProductList() {
    return (
        <DataProvider 
            render={({ data, loading, error }) => (
                <div>
                    {loading && <div>กำลังโหลด...</div>}
                    {error && <div>เกิดข้อผิดพลาด: {error.message}</div>}
                    {data && (
                        <div className="product-grid">
                            {data.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        />
    );
}
```

### Pattern 3: Higher-Order Components (HOC)

```jsx
// HOC สำหรับเพิ่ม loading state
function withLoading(WrappedComponent) {
    return function WithLoadingComponent(props) {
        const [loading, setLoading] = useState(false);
        
        return (
            <>
                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner">⏳ กำลังโหลด...</div>
                    </div>
                )}
                <WrappedComponent 
                    {...props} 
                    setLoading={setLoading}
                />
            </>
        );
    };
}

// การใช้งาน
const ProductListWithLoading = withLoading(ProductList);
const UserProfileWithLoading = withLoading(UserProfile);
```

---

## สไลด์ 10: Component Lifecycle - วงจรชีวิตของ Components 🔄

### Component มี 3 Phase หลัก:

#### **1. Mounting - เกิด** 🐣
```jsx
function ComponentBirth() {
    // เกิดขึ้นเมื่อ component ถูกสร้างครั้งแรก
    
    console.log('🐣 Component เกิดแล้ว!');
    
    return <div>สวัสดีโลก!</div>;
}
```

#### **2. Updating - เปลี่ยนแปลง** 🔄
```jsx
function ComponentGrowth({ name, age }) {
    // เกิดขึ้นเมื่อ props หรือ state เปลี่ยน
    
    console.log('🔄 Component เปลี่ยนแปลง!', { name, age });
    
    return (
        <div>
            <p>ชื่อ: {name}</p>
            <p>อายุ: {age}</p>
        </div>
    );
}

// การใช้งาน
function App() {
    const [user, setUser] = useState({ name: 'สมชาย', age: 20 });
    
    return (
        <div>
            <ComponentGrowth name={user.name} age={user.age} />
            <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
                วันเกิด! 🎂
            </button>
        </div>
    );
}
```

#### **3. Unmounting - ตาย** ⚰️
```jsx
function ComponentEnd() {
    // เกิดขึ้นเมื่อ component ถูกลบออกจาก DOM
    
    console.log('⚰️ Component ตายแล้ว...');
    
    return <div>ลาก่อน...</div>;
}

// ตัวอย่างการ mount/unmount
function App() {
    const [showComponent, setShowComponent] = useState(true);
    
    return (
        <div>
            <button onClick={() => setShowComponent(!showComponent)}>
                {showComponent ? 'ซ่อน Component' : 'แสดง Component'}
            </button>
            
            {showComponent && <ComponentEnd />}
        </div>
    );
}
```

### การใช้ useEffect เพื่อจัดการ Lifecycle:

```jsx
import React, { useState, useEffect } from 'react';

function LifecycleDemo({ userName }) {
    const [count, setCount] = useState(0);
    
    // 🐣 Mounting - ทำงานครั้งแรกเมื่อ component เกิด
    useEffect(() => {
        console.log('🐣 Component ถูกสร้างแล้ว!');
        
        // ตั้งค่าเริ่มต้น
        document.title = `สวัสดี ${userName}`;
        
        // ⚰️ Cleanup - ทำงานเมื่อ component ตาย
        return () => {
            console.log('⚰️ Component กำลังถูกลบ...');
            document.title = 'เว็บไซต์ของเรา'; // รีเซ็ต title
        };
    }, []); // [] หมายถึงทำงานครั้งเดียวตอนเกิด
    
    // 🔄 Updating - ทำงานเมื่อ userName เปลี่ยน
    useEffect(() => {
        console.log('🔄 userName เปลี่ยนเป็น:', userName);
        document.title = `สวัสดี ${userName}`;
    }, [userName]); // ทำงานเมื่อ userName เปลี่ยน
    
    // 🔄 Updating - ทำงานเมื่อ count เปลี่ยน
    useEffect(() => {
        console.log('🔄 Count เปลี่ยนเป็น:', count);
    }, [count]); // ทำงานเมื่อ count เปลี่ยน
    
    return (
        <div className="lifecycle-demo">
            <h2>สวัสดี {userName}!</h2>
            <p>คุณคลิกไปแล้ว {count} ครั้ง</p>
            <button onClick={() => setCount(count + 1)}>
                คลิก! (+1)
            </button>
        </div>
    );
}
```

### จุดสำคัญของ Lifecycle:
✅ **Mounting** - ใช้สำหรับ setup, fetch data  
✅ **Updating** - ใช้สำหรับ sync กับการเปลี่ยนแปลง  
✅ **Unmounting** - ใช้สำหรับ cleanup, cancel requests  
✅ **Dependency Array** - ควบคุมว่าเมื่อไหร่จึงทำงาน

---

## สไลด์ 11: Conditional Rendering Patterns 🎭

### Pattern 1: If-Else ใน JSX

#### **ปัญหา: Logic ซับซ้อนใน JSX**
```jsx
// ❌ ยากอ่าน ซับซ้อน
function UserStatus({ user }) {
    return (
        <div>
            {user ? (
                user.isOnline ? (
                    user.isPremium ? (
                        <span className="status premium">🌟 Premium Online</span>
                    ) : (
                        <span className="status online">🟢 Online</span>
                    )
                ) : (
                    user.lastSeen ? (
                        <span className="status offline">
                            🔴 Offline - เห็นครั้งสุดท้าย {user.lastSeen}
                        </span>
                    ) : (
                        <span className="status unknown">❓ ไม่ทราบสถานะ</span>
                    )
                )
            ) : (
                <span className="status guest">👤 ผู้เยี่ยมชม</span>
            )}
        </div>
    );
}
```

#### **✅ แก้ไขด้วยการแยก Logic:**
```jsx
function UserStatus({ user }) {
    // แยก logic ออกมาเป็น function
    const getStatusDisplay = () => {
        if (!user) {
            return <span className="status guest">👤 ผู้เยี่ยมชม</span>;
        }
        
        if (!user.isOnline) {
            if (user.lastSeen) {
                return (
                    <span className="status offline">
                        🔴 Offline - เห็นครั้งสุดท้าย {user.lastSeen}
                    </span>
                );
            }
            return <span className="status unknown">❓ ไม่ทราบสถานะ</span>;
        }
        
        if (user.isPremium) {
            return <span className="status premium">🌟 Premium Online</span>;
        }
        
        return <span className="status online">🟢 Online</span>;
    };
    
    return <div>{getStatusDisplay()}</div>;
}

// หรือแยกเป็น Component เล็กๆ
function StatusBadge({ type, children }) {
    return <span className={`status ${type}`}>{children}</span>;
}

function UserStatus({ user }) {
    if (!user) return <StatusBadge type="guest">👤 ผู้เยี่ยมชม</StatusBadge>;
    
    if (!user.isOnline) {
        if (user.lastSeen) {
            return (
                <StatusBadge type="offline">
                    🔴 Offline - เห็นครั้งสุดท้าย {user.lastSeen}
                </StatusBadge>
            );
        }
        return <StatusBadge type="unknown">❓ ไม่ทราบสถานะ</StatusBadge>;
    }
    
    if (user.isPremium) {
        return <StatusBadge type="premium">🌟 Premium Online</StatusBadge>;
    }
    
    return <StatusBadge type="online">🟢 Online</StatusBadge>;
}
```

### Pattern 2: Switch-Case Pattern

```jsx
function NotificationBadge({ type, count }) {
    const getNotificationContent = () => {
        switch (type) {
            case 'message':
                return {
                    icon: '💬',
                    text: `${count} ข้อความใหม่`,
                    className: 'notification-message'
                };
            case 'friend':
                return {
                    icon: '👥',
                    text: `${count} คำขอเป็นเพื่อน`,
                    className: 'notification-friend'
                };
            case 'like':
                return {
                    icon: '❤️',
                    text: `${count} คนถูกใจโพสต์`,
                    className: 'notification-like'
                };
            case 'comment':
                return {
                    icon: '💭',
                    text: `${count} ความคิดเห็นใหม่`,
                    className: 'notification-comment'
                };
            default:
                return {
                    icon: '🔔',
                    text: `${count} การแจ้งเตือน`,
                    className: 'notification-default'
                };
        }
    };
    
    const { icon, text, className } = getNotificationContent();
    
    return (
        <div className={`notification-badge ${className}`}>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
            <span className="count">{count}</span>
        </div>
    );
}
```

### Pattern 3: Object Mapping Pattern

```jsx
function ProductCard({ product }) {
    // แมปสถานะสินค้า
    const statusConfig = {
        'in-stock': {
            badge: '✅ มีสินค้า',
            className: 'status-available',
            canOrder: true
        },
        'low-stock': {
            badge: '⚠️ สินค้าใกล้หมด',
            className: 'status-warning',
            canOrder: true
        },
        'out-of-stock': {
            badge: '❌ สินค้าหมด',
            className: 'status-unavailable',
            canOrder: false
        },
        'pre-order': {
            badge: '📅 รับสั่งจอง',
            className: 'status-preorder',
            canOrder: true
        }
    };
    
    const currentStatus = statusConfig[product.status] || statusConfig['out-of-stock'];
    
    return (
        <div className={`product-card ${currentStatus.className}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">฿{product.price.toLocaleString()}</p>
            
            <div className="status-badge">
                {currentStatus.badge}
            </div>
            
            <button 
                disabled={!currentStatus.canOrder}
                className="order-btn"
            >
                {currentStatus.canOrder ? 'สั่งซื้อ' : 'ไม่สามารถสั่งได้'}
            </button>
        </div>
    );
}
```

---

## สไลด์ 12: List Rendering และ Keys 🔑

### ทำไม Keys สำคัญ?

#### **ปัญหาที่เกิดขึ้นเมื่อไม่มี Key:**
```jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                // ❌ ไม่มี key - React งง!
                <li>
                    <input type="checkbox" defaultChecked={todo.completed} />
                    <span>{todo.text}</span>
                    <button>ลบ</button>
                </li>
            ))}
        </ul>
    );
}

// เมื่อ todos เปลี่ยน React จะ re-render ทั้งหมดใหม่
// checkbox state หาย!
```

#### **✅ แก้ไขด้วย Key ที่ถูกต้อง:**
```jsx
function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                    />
                    <span className="todo-text">{todo.text}</span>
                    <div className="todo-actions">
                        <button 
                            onClick={() => onDelete(todo.id)}
                            className="delete-btn"
                        >
                            🗑️ ลบ
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
```

### Keys ที่ดีและไม่ดี:

#### **❌ Keys ที่ไม่ดี:**
```jsx
// 1. ใช้ array index (ไม่เสถียร)
{items.map((item, index) => (
    <div key={index}>{item.name}</div>
))}

// 2. ใช้ค่าที่ซ้ำได้
{items.map(item => (
    <div key={item.name}>{item.name}</div>  // ถ้าชื่อซ้ำจะมีปัญหา
))}

// 3. ใช้ค่าที่เปลี่ยนแปลงได้
{items.map(item => (
    <div key={Math.random()}>{item.name}</div>  // สร้างใหม่ทุกครั้ง!
))}
```

#### **✅ Keys ที่ดี:**
```jsx
// 1. ใช้ unique ID
{items.map(item => (
    <div key={item.id}>{item.name}</div>
))}

// 2. ใช้ค่าที่ stable และ unique
{items.map(item => (
    <div key={`${item.category}-${item.id}`}>
        {item.name}
    </div>
))}

// 3. สำหรับข้อมูลที่ไม่มี ID
{items.map((item, index) => (
    <div key={`${item.name}-${item.price}-${index}`}>
        {item.name} - ฿{item.price}
    </div>
))}
```

### ตัวอย่างจริง - Product Grid:

```jsx
function ProductGrid({ products, onAddToCart }) {
    // จัดกลุ่มสินค้าตามหมวดหมู่
    const groupedProducts = products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});
    
    return (
        <div className="product-grid">
            {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                <div key={category} className="category-section">
                    <h2 className="category-title">{category}</h2>
                    <div className="products-row">
                        {categoryProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    loading="lazy"
                                />
                                <h3>{product.name}</h3>
                                <p className="price">฿{product.price.toLocaleString()}</p>
                                <div className="product-actions">
                                    <button 
                                        onClick={() => onAddToCart(product)}
                                        className="add-to-cart-btn"
                                    >
                                        🛒 ใส่ตะกร้า
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
```

### Performance Tips สำหรับ Lists:

```jsx
import React, { memo } from 'react';

// ใช้ React.memo เพื่อป้องกัน re-render ที่ไม่จำเป็น
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
    console.log(`Rendering product: ${product.name}`); // จะ log เมื่อ render จริงๆ เท่านั้น
    
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>฿{product.price.toLocaleString()}</p>
            <button onClick={() => onAddToCart(product)}>
                ใส่ตะกร้า
            </button>
        </div>
    );
});

// การใช้ useCallback เพื่อป้องกัน function ใหม่ทุกครั้ง
function ProductList({ products }) {
    const [cart, setCart] = useState([]);
    
    // useCallback ป้องกัน onAddToCart ถูกสร้างใหม่ทุกครั้ง
    const handleAddToCart = useCallback((product) => {
        setCart(prevCart => [...prevCart, product]);
    }, []);
    
    return (
        <div>
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
}
```

---

## สไลด์ 13: Error Boundaries - จัดการข้อผิดพลาด 🛡️

### ปัญหา: Component ข้อใดข้อหนึ่งพัง ทั้งแอปพัง

```jsx
function ProblematicComponent({ data }) {
    // ถ้า data เป็น null จะ crash!
    return (
        <div>
            <h1>{data.user.name}</h1>  {/* Cannot read property 'name' of undefined */}
            <p>{data.user.email}</p>
        </div>
    );
}

function App() {
    const [data, setData] = useState(null); // เริ่มต้นเป็น null
    
    return (
        <div>
            <h1>แอปของเรา</h1>
            <ProblematicComponent data={data} />  {/* จะพังทั้งแอป! */}
        </div>
    );
}
```

### แก้ไขด้วย Error Boundary:

```jsx
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    
    static getDerivedStateFromError(error) {
        // อัพเดท state เพื่อแสดง fallback UI
        return { hasError: true, error };
    }
    
    componentDidCatch(error, errorInfo) {
        // Log error ไปยัง error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
        
        // ส่งไป error monitoring service (เช่น Sentry)
        // logErrorToService(error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            // Fallback UI
            return (
                <div className="error-boundary">
                    <h2>🚨 เกิดข้อผิดพลาด</h2>
                    <details>
                        <summary>รายละเอียดข้อผิดพลาด</summary>
                        <pre>{this.state.error?.toString()}</pre>
                    </details>
                    <button 
                        onClick={() => this.setState({ hasError: false, error: null })}
                    >
                        ลองใหม่
                    </button>
                </div>
            );
        }
        
        return this.props.children;
    }
}
```

### การใช้งาน Error Boundary:

```jsx
function App() {
    const [data, setData] = useState(null);
    
    return (
        <div>
            <h1>แอปของเรา</h1>
            
            {/* ห่อ component ที่อาจมีปัญหา */}
            <ErrorBoundary>
                <ProblematicComponent data={data} />
            </ErrorBoundary>
            
            {/* ส่วนอื่นของแอปยังทำงานได้ปกติ */}
            <footer>
                <p>© 2023 แอปของเรา</p>
            </footer>
        </div>
    );
}
```

### Error Boundary แบบ Hook (React 18+):

```jsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="error-fallback">
            <h2>🚨 อุ๊ปส์! เกิดข้อผิดพลาด</h2>
            <p>เราขออภัยในความไม่สะดวก</p>
            <details>
                <summary>ข้อมูลเทคนิค</summary>
                <pre className="error-details">{error.message}</pre>
            </details>
            <div className="error-actions">
                <button onClick={resetErrorBoundary}>
                    🔄 ลองใหม่
                </button>
                <button onClick={() => window.location.reload()}>
                    🏠 รีโหลดหน้า
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={(error, errorInfo) => {
                console.error('Error logged:', error, errorInfo);
            }}
            onReset={() => {
                // ล้างข้อมูลที่อาจเป็นสาเหตุของ error
                window.location.reload();
            }}
        >
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}
```

### Safe Component Pattern:

```jsx
function SafeComponent({ data, fallback = "ไม่มีข้อมูล" }) {
    // ป้องกันตัวเองก่อน component พัง
    if (!data) {
        return <div className="fallback">{fallback}</div>;
    }
    
    // Validate data structure
    if (typeof data !== 'object' || !data.user) {
        return <div className="error">ข้อมูลไม่ถูกต้อง</div>;
    }
    
    // Safe destructuring with defaults
    const { 
        user: { 
            name = 'ไม่ระบุชื่อ', 
            email = 'ไม่ระบุอีเมล' 
        } = {}
    } = data;
    
    return (
        <div className="user-info">
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}
```

---

## สไลด์ 14: Component Performance Optimization 🚀

### ปัญหา: Component Render ใหม่เรื่อยๆ

```jsx
function App() {
    const [count, setCount] = useState(0);
    
    // ❌ object ใหม่ทุกครั้งที่ render
    const user = { name: 'สมชาย', age: 25 };
    
    // ❌ function ใหม่ทุกครั้งที่ render
    const handleClick = () => {
        console.log('Clicked!');
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            
            {/* Component นี้จะ render ใหม่ทุกครั้งแม้ user ไม่เปลี่ยน! */}
            <ExpensiveUserProfile user={user} onClick={handleClick} />
        </div>
    );
}

function ExpensiveUserProfile({ user, onClick }) {
    console.log('🐌 ExpensiveUserProfile rendered!'); // จะ log ทุกครั้ง
    
    // การคำนวณที่หนัก
    const expensiveCalculation = () => {
        console.log('💸 Expensive calculation running...');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result;
    };
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>อายุ: {user.age}</p>
            <p>ผลลัพธ์: {expensiveCalculation()}</p>
            <button onClick={onClick}>คลิก</button>
        </div>
    );
}
```

### แก้ไขด้วย React.memo:

```jsx
import React, { memo, useState, useCallback, useMemo } from 'react';

function App() {
    const [count, setCount] = useState(0);
    
    // ✅ ใช้ useMemo เพื่อป้องกัน object ใหม่
    const user = useMemo(() => ({
        name: 'สมชาย',
        age: 25
    }), []); // dependency array ว่าง = สร้างครั้งเดียว
    
    // ✅ ใช้ useCallback เพื่อป้องกัน function ใหม่
    const handleClick = useCallback(() => {
        console.log('Clicked!');
    }, []); // dependency array ว่าง = สร้างครั้งเดียว
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            
            {/* ตอนนี้จะ render ใหม่เฉพาะเมื่อ user หรือ handleClick เปลี่ยน */}
            <OptimizedUserProfile user={user} onClick={handleClick} />
        </div>
    );
}

// ✅ ใช้ React.memo เพื่อป้องกัน re-render ที่ไม่จำเป็น
const OptimizedUserProfile = memo(function ExpensiveUserProfile({ user, onClick }) {
    console.log('✨ OptimizedUserProfile rendered!'); // จะ log เมื่อ props เปลี่ยนจริงๆ เท่านั้น
    
    // ✅ ใช้ useMemo เพื่อ cache การคำนวณที่หนัก
    const expensiveResult = useMemo(() => {
        console.log('💎 Expensive calculation running...');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result;
    }, [user.age]); // คำนวณใหม่เมื่อ age เปลี่ยน
    
    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <p>อายุ: {user.age}</p>
            <p>ผลลัพธ์: {expensiveResult}</p>
            <button onClick={onClick}>คลิก</button>
        </div>
    );
});

// Custom comparison function สำหรับ memo
const OptimizedUserProfileAdvanced = memo(function ExpensiveUserProfile({ user, onClick }) {
    // ... component logic
}, (prevProps, nextProps) => {
    // return true ถ้า props เหมือนเดิม (ไม่ต้อง re-render)
    // return false ถ้า props เปลี่ยน (ต้อง re-render)
    
    return (
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age &&
        prevProps.onClick === nextProps.onClick
    );
});
```

### Performance Monitoring:

```jsx
import { Profiler } from 'react';

function App() {
    const onRenderCallback = (id, phase, actualDuration) => {
        console.log('🔍 Performance:', {
            component: id,
            phase, // "mount" หรือ "update"
            duration: actualDuration + 'ms'
        });
    };
    
    return (
        <Profiler id="UserProfile" onRender={onRenderCallback}>
            <div className="app">
                <UserProfile />
            </div>
        </Profiler>
    );
}
```

### เมื่อไหร่ใช้ Optimization:

#### ✅ **ควรใช้เมื่อ:**
- Component มีการคำนวณที่หนัก
- Component render บ่อยโดยไม่จำเป็น
- Props เป็น object/array ที่ซับซ้อน
- Parent component มี state เปลี่ยนบ่อย

#### ❌ **ไม่ควรใช้เมื่อ:**
- Component เล็กและเรียบง่าย
- Props เปลี่ยนแปลงบ่อย
- การ optimize มีต้นทุนมากกว่าผลที่ได้

---

## สไลด์ 15: Component Communication Patterns 📞

### Pattern 1: Parent-Child Communication

#### **Parent → Child (Props)**
```jsx
function Parent() {
    const [userInfo, setUserInfo] = useState({
        name: 'สมชาย',
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    });
    
    return (
        <div>
            <h1>Admin Panel</h1>
            <UserCard user={userInfo} />
            <PermissionManager permissions={userInfo.permissions} />
        </div>
    );
}
```

#### **Child → Parent (Callback Functions)**
```jsx
function Parent() {
    const [userInfo, setUserInfo] = useState({
        name: 'สมชาย',
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    });
    
    // Function ที่ child จะเรียก
    const handleUserUpdate = (updatedUser) => {
        setUserInfo(updatedUser);
        console.log('User updated:', updatedUser);
    };
    
    const handlePermissionChange = (newPermissions) => {
        setUserInfo(prev => ({
            ...prev,
            permissions: newPermissions
        }));
    };
    
    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <UserCard 
                user={userInfo} 
                onUserUpdate={handleUserUpdate}
            />
            <PermissionManager 
                permissions={userInfo.permissions}
                onPermissionChange={handlePermissionChange}
            />
        </div>
    );
}

function UserCard({ user, onUserUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    
    const handleSave = () => {
        // ส่งข้อมูลกลับไป parent
        onUserUpdate({
            ...user,
            name: editedName
        });
        setIsEditing(false);
    };
    
    return (
        <div className="user-card">
            {isEditing ? (
                <div className="edit-mode">
                    <input 
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="ชื่อผู้ใช้"
                    />
                    <button onClick={handleSave}>💾 บันทึก</button>
                    <button onClick={() => setIsEditing(false)}>❌ ยกเลิก</button>
                </div>
            ) : (
                <div className="display-mode">
                    <h3>{user.name}</h3>
                    <p>บทบาท: {user.role}</p>
                    <button onClick={() => setIsEditing(true)}>✏️ แก้ไข</button>
                </div>
            )}
        </div>
    );
}
```

### Pattern 2: Sibling Communication

```jsx
function App() {
    const [sharedData, setSharedData] = useState({
        selectedProduct: null,
        cartItems: [],
        totalPrice: 0
    });
    
    // Functions สำหรับ sibling communication
    const handleProductSelect = (product) => {
        setSharedData(prev => ({
            ...prev,
            selectedProduct: product
        }));
    };
    
    const handleAddToCart = (product) => {
        setSharedData(prev => {
            const newCartItems = [...prev.cartItems, product];
            const newTotalPrice = newCartItems.reduce((sum, item) => sum + item.price, 0);
            
            return {
                ...prev,
                cartItems: newCartItems,
                totalPrice: newTotalPrice
            };
        });
    };
    
    return (
        <div className="shopping-app">
            {/* Sibling 1: Product List */}
            <ProductList 
                selectedProduct={sharedData.selectedProduct}
                onProductSelect={handleProductSelect}
                onAddToCart={handleAddToCart}
            />
            
            {/* Sibling 2: Shopping Cart */}
            <ShoppingCart 
                items={sharedData.cartItems}
                totalPrice={sharedData.totalPrice}
                selectedProduct={sharedData.selectedProduct}
            />
            
            {/* Sibling 3: Product Details */}
            <ProductDetails 
                product={sharedData.selectedProduct}
                onAddToCart={handleAddToCart}
            />
        </div>
    );
}
```

### Pattern 3: Deep Props Drilling Problem และการแก้ไข

#### **ปัญหา: Props Drilling**
```jsx
// ❌ ต้องส่ง props ผ่านหลายชั้น
function App() {
    const [user, setUser] = useState({ name: 'สมชาย', theme: 'dark' });
    
    return <Layout user={user} onThemeChange={setUser} />;
}

function Layout({ user, onThemeChange }) {
    // Layout ไม่ได้ใช้ user แต่ต้องส่งต่อ
    return (
        <div>
            <Header user={user} onThemeChange={onThemeChange} />
            <Sidebar user={user} />
            <MainContent user={user} />
        </div>
    );
}

function Header({ user, onThemeChange }) {
    // Header ไม่ได้ใช้ onThemeChange แต่ต้องส่งต่อ
    return (
        <header>
            <Navigation user={user} />
            <UserMenu user={user} onThemeChange={onThemeChange} />
        </header>
    );
}

function UserMenu({ user, onThemeChange }) {
    // สุดท้ายถึงจะใช้จริงๆ!
    return (
        <div>
            <span>สวัสดี {user.name}</span>
            <button onClick={() => onThemeChange({...user, theme: user.theme === 'dark' ? 'light' : 'dark'})}>
                {user.theme === 'dark' ? '☀️' : '🌙'}
            </button>
        </div>
    );
}
```

#### **✅ แก้ไขด้วย Context API:**
```jsx
import React, { createContext, useContext, useState } from 'react';

// สร้าง Context
const UserContext = createContext();

// Provider Component
function UserProvider({ children }) {
    const [user, setUser] = useState({ name: 'สมชาย', theme: 'dark' });
    
    const toggleTheme = () => {
        setUser(prev => ({
            ...prev,
            theme: prev.theme === 'dark' ? 'light' : 'dark'
        }));
    };
    
    const value = {
        user,
        setUser,
        toggleTheme
    };
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

// Custom Hook สำหรับใช้ Context
function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
}

// ใช้งาน - ไม่ต้องส่ง props ผ่านหลายชั้น
function App() {
    return (
        <UserProvider>
            <Layout />
        </UserProvider>
    );
}

function Layout() {
    // ไม่ต้องรับ props!
    return (
        <div>
            <Header />
            <Sidebar />
            <MainContent />
        </div>
    );
}

function Header() {
    return (
        <header>
            <Navigation />
            <UserMenu />
        </header>
    );
}

function UserMenu() {
    // ใช้ hook ดึงข้อมูลโดยตรง
    const { user, toggleTheme } = useUser();
    
    return (
        <div className="user-menu">
            <span>สวัสดี {user.name}</span>
            <button onClick={toggleTheme}>
                {user.theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    );
}

function Sidebar() {
    const { user } = useUser();
    
    return (
        <aside className={`sidebar ${user.theme}`}>
            <p>Sidebar สำหรับ {user.name}</p>
        </aside>
    );
}
```

---

## สไลด์ 16: Lab 3.2 Preview - Product List Component 🛍️

### เตรียมตัวสำหรับ Lab ถัดไป!

#### **สิ่งที่จะทำใน Lab 3.2:**
```jsx
// ตัวอย่างของ Product List ที่จะสร้าง
function ProductList({ products, onAddToCart, onProductView }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    
    // Filter และ sort products
    const filteredProducts = products
        .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
        .sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            return 0;
        });
    
    return (
        <div className="product-list">
            <div className="filters">
                <CategoryFilter 
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
                <SortSelector 
                    selected={sortBy}
                    onSelect={setSortBy}
                />
            </div>
            
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onView={onProductView}
                    />
                ))}
            </div>
        </div>
    );
}

// Product Card component ที่นำกลับมาใช้ได้
function ProductCard({ product, onAddToCart, onView }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount > 0 && (
                    <div className="discount-badge">
                        -{product.discount}%
                    </div>
                )}
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                
                <div className="product-price">
                    {product.discount > 0 ? (
                        <>
                            <span className="original-price">
                                ฿{product.price.toLocaleString()}
                            </span>
                            <span className="discounted-price">
                                ฿{(product.price * (1 - product.discount / 100)).toLocaleString()}
                            </span>
                        </>
                    ) : (
                        <span className="price">
                            ฿{product.price.toLocaleString()}
                        </span>
                    )}
                </div>
                
                <div className="product-actions">
                    <button 
                        className="btn-view"
                        onClick={() => onView(product)}
                    >
                        👁️ ดูรายละเอียด
                    </button>
                    <button 
                        className="btn-add-cart"
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        🛒 {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}
```

### เทคนิคที่จะได้เรียนรู้:

#### **1. Props Validation ขั้นสูง:**
```jsx
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        inStock: PropTypes.bool,
        discount: PropTypes.number
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onView: PropTypes.func.isRequired
};
```

#### **2. Component Composition:**
```jsx
function ProductPage() {
    return (
        <div className="product-page">
            <SearchAndFilter>
                <SearchBar />
                <CategoryFilter />
                <PriceRangeFilter />
            </SearchAndFilter>
            
            <ProductDisplay>
                <ProductList />
                <ProductPagination />
            </ProductDisplay>
        </div>
    );
}
```

#### **3. Event Handling Patterns:**
```jsx
// Event delegation pattern
const handleProductAction = (action, product) => {
    switch (action) {
        case 'view':
            onProductView(product);
            break;
        case 'add-to-cart':
            onAddToCart(product);
            break;
        case 'add-to-wishlist':
            onAddToWishlist(product);
            break;
        default:
            console.warn('Unknown action:', action);
    }
};
```

### ความท้าทายที่รออยู่:
🎯 **การจัดการข้อมูลสินค้าจำนวนมาก**  
🎯 **Filtering และ Sorting แบบ real-time**  
🎯 **Component ที่ reusable และ maintainable**  
🎯 **Performance optimization สำหรับ large lists**

---

## สไลด์ 17: Best Practices สำหรับ Components & Props 💎

### 1. Component Naming และ Organization

#### **✅ การตั้งชื่อที่ดี:**
```jsx
// Component names - PascalCase, คำนาม
function UserProfile() { }        // ดี: บอกว่าเป็นอะไร
function ProductCard() { }        // ดี: ชัดเจน
function NavigationMenu() { }     // ดี: อธิบายฟังก์ชัน

// Props names - camelCase, อธิบายชัดเจน
function Button({ 
    onClick,           // function
    isDisabled,        // boolean (is/has/can prefix)
    buttonText,        // string
    variant = 'primary' // string with default
}) {
    return (
        <button 
            onClick={onClick}
            disabled={isDisabled}
            className={`btn btn-${variant}`}
        >
            {buttonText}
        </button>
    );
}
```

#### **❌ การตั้งชื่อที่ไม่ดี:**
```jsx
function comp1() { }              // ไม่รู้ว่าทำอะไร
function thing() { }              // คลุมเครือ
function userStuff() { }          // ไม่เฉพาะเจาะจง
function MyComponent() { }        // generic เกินไป

// Props ที่สับสน
function Button({ click, disabled, text, type }) { } // สั้นเกินไป
function Button({ onClickHandler, isButtonDisabled, buttonTextContent }) { } // ยาวเกินไป
```

### 2. Props Design Patterns

#### **Pattern 1: Props Interface Design**
```jsx
// ✅ Interface ที่ชัดเจนและยืดหยุ่น
function Modal({ 
    // เนื้อหา
    title,
    children,
    
    // การแสดงผล
    isOpen = false,
    size = 'medium',
    showCloseButton = true,
    
    // Event handlers
    onClose,
    onOpen,
    
    // Styling
    className = '',
    overlayClassName = '',
    
    // การทำงาน
    closeOnOverlayClick = true,
    closeOnEscape = true
}) {
    // ...
}

// การใช้งานที่หลากหลาย
<Modal title="ยืนยันการลบ" isOpen={showDeleteModal} onClose={closeModal}>
    <p>คุณแน่ใจหรือไม่ที่จะลบรายการนี้?</p>
</Modal>
```

#### **Pattern 2: Props Spreading**
```jsx
function CustomInput({ label, error, ...inputProps }) {
    return (
        <div className="input-group">
            {label && <label>{label}</label>}
            <input 
                className={`input ${error ? 'input-error' : ''}`}
                {...inputProps} // ส่ง props อื่นๆ ทั้งหมดไป input
            />
            {error && <span className="error-text">{error}</span>}
        </div>
    );
}

// ใช้งาน - ส่ง HTML input props ได้ทุกตัว
<CustomInput 
    label="อีเมล"
    type="email"
    placeholder="กรอกอีเมลของคุณ"
    required
    autoComplete="email"
    onFocus={() => console.log('focused')}
/>
```

#### **Pattern 3: Compound Props**
```jsx
function Card({ variant = 'default', size = 'medium', children, ...props }) {
    const cardClasses = `card card-${variant} card-${size}`;
    
    return (
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
}

// Sub-components
Card.Header = ({ children, ...props }) => (
    <div className="card-header" {...props}>{children}</div>
);

Card.Body = ({ children, ...props }) => (
    <div className="card-body" {...props}>{children}</div>
);

Card.Footer = ({ children, ...props }) => (
    <div className="card-footer" {...props}>{children}</div>
);

// Usage
<Card variant="elevated" size="large">
    <Card.Header>
        <h3>การ์ดพิเศษ</h3>
    </Card.Header>
    <Card.Body>
        <p>เนื้อหาในการ์ด</p>
    </Card.Body>
    <Card.Footer>
        <button>ปิด</button>
    </Card.Footer>
</Card>
```

### 3. Performance Best Practices

#### **รู้จักกับ React DevTools:**
```jsx
// ใส่ displayName เพื่อ debugging ง่าย
const OptimizedComponent = memo(function OptimizedComponent(props) {
    return <div>...</div>;
});

// หรือ
OptimizedComponent.displayName = 'OptimizedComponent';
```

#### **Lazy Loading Components:**
```jsx
import { lazy, Suspense } from 'react';

// Lazy load components ที่ใหญ่
const HeavyChart = lazy(() => import('./HeavyChart'));
const DataTable = lazy(() => import('./DataTable'));

function Dashboard() {
    return (
        <div>
            <h1>แดชบอร์ด</h1>
            
            <Suspense fallback={<div>กำลังโหลดชาร์ต...</div>}>
                <HeavyChart />
            </Suspense>
            
            <Suspense fallback={<div>กำลังโหลดตาราง...</div>}>
                <DataTable />
            </Suspense>
        </div>
    );
}
```

### 4. Error Prevention

#### **Props Validation เชิงป้องกัน:**
```jsx
function SafeImage({ src, alt, fallbackSrc = '/placeholder.jpg', ...props }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);
    
    const handleError = () => {
        if (!hasError) {
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };
    
    return (
        <img 
            src={imgSrc}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
}

// การใช้งาน
<SafeImage 
    src="https://example.com/might-not-exist.jpg"
    alt="รูปภาพ"
    fallbackSrc="/no-image.png"
/>
```

#### **Defensive Programming:**
```jsx
function UserList({ users = [], loading = false, error = null }) {
    // ป้องกันกรณีข้อมูลผิดปกติ
    if (loading) {
        return <div className="loading">กำลังโหลด...</div>;
    }
    
    if (error) {
        return <div className="error">เกิดข้อผิดพลาด: {error.message}</div>;
    }
    
    if (!Array.isArray(users)) {
        console.warn('UserList: users prop ต้องเป็น array');
        return <div className="error">ข้อมูลไม่ถูกต้อง</div>;
    }
    
    if (users.length === 0) {
        return <div className="empty">ไม่มีผู้ใช้</div>;
    }
    
    return (
        <ul className="user-list">
            {users.map(user => (
                <UserItem key={user.id || user.email} user={user} />
            ))}
        </ul>
    );
}
```

---

## สไลด์ 18: Component Testing Basics 🧪

### ทำไมต้อง Test Components?

#### **ประโยชน์ของการ Test:**
✅ **มั่นใจว่า Component ทำงานถูกต้อง**  
✅ **จับ bugs ก่อนผู้ใช้เจอ**  
✅ **ปลอดภัยในการ refactor**  
✅ **เอกสารการใช้งานใน code**

### ตัวอย่าง Component Testing:

```jsx
// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    test('renders button with text', () => {
        render(<Button>คลิกฉัน</Button>);
        
        // หา button ที่มีข้อความ "คลิกฉัน"
        const button = screen.getByText('คลิกฉัน');
        expect(button).toBeInTheDocument();
    });
    
    test('calls onClick when clicked', () => {
        const handleClick = jest.fn(); // mock function
        
        render(
            <Button onClick={handleClick}>
                คลิก
            </Button>
        );
        
        const button = screen.getByText('คลิก');
        fireEvent.click(button);
        
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    test('shows disabled state correctly', () => {
        render(
            <Button disabled>
                ปิดใช้งาน
            </Button>
        );
        
        const button = screen.getByText('ปิดใช้งาน');
        expect(button).toBeDisabled();
    });
});
```

### Test Props Validation:

```jsx
// ProductCard.test.js
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
    id: 1,
    name: 'iPhone 15',
    price: 35000,
    category: 'Electronics',
    image: 'iphone.jpg',
    inStock: true
};

describe('ProductCard Component', () => {
    test('renders product information correctly', () => {
        render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
        
        expect(screen.getByText('iPhone 15')).toBeInTheDocument();
        expect(screen.getByText('Electronics')).toBeInTheDocument();
        expect(screen.getByText('฿35,000')).toBeInTheDocument();
    });
    
    test('shows out of stock when product not available', () => {
        const outOfStockProduct = { ...mockProduct, inStock: false };
        
        render(
            <ProductCard 
                product={outOfStockProduct} 
                onAddToCart={() => {}} 
            />
        );
        
        const addButton = screen.getByText('หมดสินค้า');
        expect(addButton).toBeDisabled();
    });
});
```

### Integration Testing:

```jsx
// ProductList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

const mockProducts = [
    { id: 1, name: 'Product 1', price: 1000, category: 'A', inStock: true },
    { id: 2, name: 'Product 2', price: 2000, category: 'B', inStock: false }
];

test('filters products by category', () => {
    render(
        <ProductList 
            products={mockProducts}
            onAddToCart={() => {}}
        />
    );
    
    // กรองหมวดหมู่ A
    const categoryFilter = screen.getByTestId('category-filter');
    fireEvent.change(categoryFilter, { target: { value: 'A' } });
    
    // ควรเห็นแค่ Product 1
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
});
```

---

## สไลด์ 19: คำถามสำคัญและการแก้ปัญหา ❓

### Q1: "Props ส่งไม่ถึง Child Component ทำไง?"

#### **ปัญหาที่พบบ่อย:**
```jsx
function Parent() {
    const userData = { name: 'สมชาย', age: 25 };
    
    return (
        <div>
            <Child user={userData} />  {/* ส่งไปแล้ว */}
        </div>
    );
}

function Child(props) {
    console.log(props); // { user: { name: 'สมชาย', age: 25 } }
    
    return (
        <div>
            <h1>{name}</h1>  {/* ❌ ReferenceError: name is not defined */}
        </div>
    );
}
```

#### **✅ แก้ไข:**
```jsx
function Child(props) {
    // วิธีที่ 1: ใช้ props.user
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>อายุ: {props.user.age}</p>
        </div>
    );
}

// หรือวิธีที่ 2: destructure props
function Child({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>อายุ: {user.age}</p>
        </div>
    );
}

// หรือวิธีที่ 3: destructure nested
function Child({ user: { name, age } }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>อายุ: {age}</p>
        </div>
    );
}
```

### Q2: "Component Render หลายรอบ ทำยังไง?"

#### **ปัญหา: Infinite Re-render**
```jsx
function ProblematicComponent({ data }) {
    const [processedData, setProcessedData] = useState([]);
    
    // ❌ ทำให้ infinite loop!
    setProcessedData(data.map(item => ({ ...item, processed: true })));
    
    return <div>{processedData.length}</div>;
}
```

#### **✅ แก้ไข:**
```jsx
function FixedComponent({ data }) {
    const [processedData, setProcessedData] = useState([]);
    
    // ✅ ใช้ useEffect กับ dependency array
    useEffect(() => {
        setProcessedData(data.map(item => ({ ...item, processed: true })));
    }, [data]); // จะ run เมื่อ data เปลี่ยนเท่านั้น
    
    return <div>{processedData.length}</div>;
}

// หรือใช้ useMemo สำหรับการคำนวณ
function OptimizedComponent({ data }) {
    const processedData = useMemo(() => {
        return data.map(item => ({ ...item, processed: true }));
    }, [data]);
    
    return <div>{processedData.length}</div>;
}
```

### Q3: "Event Handler ไม่ทำงาน?"

#### **ปัญหา: this binding และ event handling**
```jsx
function ButtonComponent({ onClick }) {
    return (
        <div>
            {/* ❌ เรียกทันที */}
            <button onClick={onClick()}>Wrong</button>
            
            {/* ✅ ส่ง function reference */}
            <button onClick={onClick}>Correct</button>
            
            {/* ✅ ส่งพารามิเตอร์ */}
            <button onClick={(e) => onClick(e, 'extra-data')}>
                With Parameters
            </button>
        </div>
    );
}
```

### Q4: "Props Validation ทำงานได้ยังไง?"

#### **การใช้งานจริง:**
```jsx
import PropTypes from 'prop-types';

function ComplexComponent({ 
    user,
    permissions,
    onSave,
    isLoading,
    maxItems
}) {
    // Component logic...
}

ComplexComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired,
    
    permissions: PropTypes.arrayOf(
        PropTypes.oneOf(['read', 'write', 'delete'])
    ),
    
    onSave: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    maxItems: PropTypes.number
};

ComplexComponent.defaultProps = {
    permissions: ['read'],
    isLoading: false,
    maxItems: 10
};

// การใช้งาน
<ComplexComponent 
    user={{ id: 1, name: 'สมชาย', email: 'somchai@email.com' }}
    onSave={handleSave}
    isLoading={true}
/>
```

---

## สไลด์ 20: สรุปและเตรียมตัวต่อ 🎯

### สิ่งที่เราได้เรียนรู้ในหัวข้อนี้:

#### **Components Mastery:**
✅ **Component Architecture** - ออกแบบโครงสร้างแอป  
✅ **Props Patterns** - Destructuring, Default Props, PropTypes  
✅ **Children Props** - Component ที่ยืดหยุ่น  
✅ **Component Composition** - Compound Components, HOC  
✅ **Lifecycle Understanding** - Mount, Update, Unmount  

#### **Advanced Patterns:**
✅ **Conditional Rendering** - แสดงเนื้อหาตามเงื่อนไข  
✅ **List Rendering & Keys** - จัดการรายการข้อมูล  
✅ **Error Boundaries** - จัดการข้อผิดพลาด  
✅ **Performance Optimization** - memo, useMemo, useCallback  
✅ **Component Communication** - Parent-Child, Context API  

#### **Best Practices:**
✅ **Naming Conventions** - การตั้งชื่อที่ดี  
✅ **Props Design** - Interface ที่ใช้งานง่าย  
✅ **Error Prevention** - Defensive Programming  
✅ **Testing Basics** - Component Testing  

### การเปลี่ยนแปลงที่เกิดขึ้น:
**เมื่อเช้า:** รู้จัก Component พื้นฐาน  
**ตอนนี้:** สร้าง Component Architecture ได้!  

### ทักษะที่พัฒนาขึ้น:
🧩 **คิดแบบ Component-based** - แบ่งแยกหน้าที่ชัดเจน  
🔄 **Props Flow** - เข้าใจการไหลของข้อมูล  
🛡️ **Error Handling** - จัดการข้อผิดพลาดอย่างมืออาชีพ  
⚡ **Performance Mindset** - เขียนโค้ดที่มีประสิทธิภาพ  

### ตัวอย่างโปรเจคที่ทำได้แล้ว:
- 🏪 **E-commerce Product List**
- 👤 **User Management System**
- 📊 **Dashboard with Multiple Components**
- 🎮 **Interactive Game Components**
- 📝 **Form Builder System**

### เตรียมตัวสำหรับหัวข้อถัดไป:
📚 **State Management เบื้องต้น** - จัดการข้อมูลที่เปลี่ยนแปลง  
🎮 **Interactive Components** - ทำให้ Components ตอบสนอง  
🔄 **useState Hook** - เก็บและเปลี่ยนแปลง state  
⬆️ **Lifting State Up** - ส่งข้อมูลระหว่าง components  

### คำถามสำคัญก่อนไปต่อ:
*"คุณสามารถสร้าง Component ที่นำกลับมาใช้ได้แล้วหรือยัง?"*  
*"คุณเข้าใจการไหลของ Props แล้วหรือยัง?"*  
*"คุณพร้อมที่จะเรียนรู้ State Management แล้วหรือยัง?"*

**ถ้าคำตอบคือใช่ ยินดีด้วย! คุณพร้อมเป็น React Developer แล้ว! 🚀**

### Lab 3.2 กำลังรอ:
🛍️ **Product List Component** - ใช้ทุกเทคนิคที่เรียนมา  
🔍 **Search & Filter** - Props และ Event Handling  
🎯 **Performance Optimization** - memo และ best practices  
✨ **Professional UI** - Component composition patterns  

---

## พักเบรก 15 นาที ☕

### เตรียมพร้อมสำหรับ:
1. **Lab 3.2** - Product List ที่ใช้ Props อย่างเต็มรูปแบบ
2. **State Management** - ข้อมูลที่เปลี่ยนแปลงได้  
3. **Interactive React Apps** - แอปที่ตอบสนองผู้ใช้

### เป้าหมายสุดท้าย:
**สร้างแอป E-commerce แบบเต็มรูปแบบ!** 🎉

**ขณะพักให้คิดว่า:** *"Component ไหนที่คุณอยากสร้าง?"* 💭# วันที่ 3: เริ่มต้นกับ React.js