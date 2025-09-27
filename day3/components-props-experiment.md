# React Project Demo: Components และ Props
## สำหรับอาจารย์ผู้สอน - หัวข้อที่ 2

### การติดตั้งและรันโปรเจค

```bash
# สร้างโปรเจค
npm create vite@latest components-props-demo -- --template react
cd components-props-demo

# ติดตั้ง dependencies
npm install prop-types

# รันโปรเจค
npm run dev
```

---

## 📁 โครงสร้างไฟล์

```
components-props-demo/
├── src/
│   ├── components/
│   │   ├── BasicComponents/
│   │   │   ├── WelcomeCard.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── UserStatus.jsx
│   │   ├── AdvancedComponents/
│   │   │   ├── Card.jsx
│   │   │   ├── StudentList.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   └── HOC/
│   │       └── withLoading.jsx
│   ├── styles/
│   │   ├── components.css
│   │   └── demo.css
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## 📄 ไฟล์ package.json

```json
{
  "name": "components-props-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "prop-types": "^15.8.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

---

## 📄 src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/demo.css'
import './styles/components.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 📄 src/data/mockData.js

```javascript
// Mock data สำหรับ demo
export const sampleProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 45900,
    originalPrice: 49900,
    image: 'https://placehold.co/250x200/007bff/ffffff?text=iPhone+15',
    description: 'สมาร์ทโฟนล่าสุดจาก Apple พร้อมชิป A17 Pro',
    inStock: true,
    category: 'electronics'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 39900,
    originalPrice: 42900,
    image: 'https://placehold.co/250x200/28a745/ffffff?text=MacBook+Air',
    description: 'โน้ตบุ๊คที่บางเบาและทรงพลัง',
    inStock: true,
    category: 'electronics'
  },
  {
    id: 3,
    name: 'เสื้อยืดผ้าฝ้าย',
    price: 299,
    originalPrice: 399,
    image: 'https://placehold.co/250x200/ffc107/000000?text=T-Shirt',
    description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
    inStock: false,
    category: 'clothing'
  },
  {
    id: 4,
    name: 'หนังสือ React.js',
    price: 650,
    originalPrice: 750,
    image: 'https://placehold.co/250x200/17a2b8/ffffff?text=React+Book',
    description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
    inStock: true,
    category: 'books'
  }
];

export const sampleStudents = [
  { id: 1, name: 'สมชาย ใจดี', score: 95, grade: 'A', year: 3 },
  { id: 2, name: 'สมศรี สวยงาม', score: 87, grade: 'B+', year: 3 },
  { id: 3, name: 'สมหมาย เก่งมาก', score: 78, grade: 'B', year: 2 },
  { id: 4, name: 'สมหญิง ขยันเรียน', score: 92, grade: 'A-', year: 3 },
  { id: 5, name: 'สมศักดิ์ มานะ', score: 65, grade: 'C+', year: 2 },
  { id: 6, name: 'สมใจ ดีงาม', score: 88, grade: 'B+', year: 4 }
];

export const sampleUsers = [
  { id: 1, isOnline: true, isPremium: true, name: 'Admin' },
  { id: 2, isOnline: true, isPremium: false, name: 'User1' },
  { id: 3, isOnline: false, lastSeen: '5 นาทีที่แล้ว', name: 'User2' },
  { id: 4, isOnline: false, lastSeen: '2 ชั่วโมงที่แล้ว', name: 'User3' },
  null // ผู้ใช้ที่ไม่ได้เข้าสู่ระบบ
];

export const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
  { id: 'clothing', name: 'เสื้อผ้า' },
  { id: 'books', name: 'หนังสือ' }
];
```

---

## 📄 src/components/BasicComponents/WelcomeCard.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function WelcomeCard({ name, age, role, isVIP = false, avatar = null }) {
    return (
        <div className={`welcome-card ${isVIP ? 'vip' : ''}`}>
            <div className="welcome-header">
                {avatar ? (
                    <img src={avatar} alt={name} className="avatar" />
                ) : (
                    <div className="avatar-placeholder">
                        {name.charAt(0).toUpperCase()}
                    </div>
                )}
                <h3>🎉 ยินดีต้อนรับ {name}!</h3>
            </div>
            
            <div className="welcome-info">
                <p><strong>อายุ:</strong> {age} ปี</p>
                <p><strong>บทบาท:</strong> {role}</p>
            </div>
            
            {isVIP && (
                <div className="vip-section">
                    <span className="vip-badge">⭐ VIP Member</span>
                    <p className="vip-benefits">พิเศษ! ได้รับส่วนลด 20%</p>
                </div>
            )}
            
            <div className="welcome-actions">
                <button className="btn-primary">เข้าสู่ระบบ</button>
                {!isVIP && <button className="btn-secondary">สมัคร VIP</button>}
            </div>
        </div>
    );
}

WelcomeCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    isVIP: PropTypes.bool,
    avatar: PropTypes.string
};

export default WelcomeCard;
```

---

## 📄 src/components/BasicComponents/ProductCard.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ 
    product, 
    onAddToCart, 
    onViewDetails, 
    showDiscount = true,
    showStock = true 
}) {
    const { name, price, originalPrice, image, description, inStock } = product;
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
    const savings = originalPrice - price;
    
    return (
        <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
            <div className="product-image-container">
                <img 
                    src={image} 
                    alt={name} 
                    className="product-image"
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/250x200/cccccc/666666?text=No+Image';
                    }}
                />
                {showDiscount && discount > 0 && (
                    <div className="discount-badge">-{discount}%</div>
                )}
                {!inStock && <div className="stock-overlay">หมดสินค้า</div>}
            </div>
            
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p className="product-description">{description}</p>
                
                <div className="price-section">
                    <span className="current-price">฿{price.toLocaleString()}</span>
                    {discount > 0 && (
                        <>
                            <span className="original-price">
                                ฿{originalPrice.toLocaleString()}
                            </span>
                            <div className="savings">
                                ประหยัด ฿{savings.toLocaleString()}
                            </div>
                        </>
                    )}
                </div>
                
                {showStock && (
                    <div className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {inStock ? '✅ มีสินค้า' : '❌ หมดสินค้า'}
                    </div>
                )}
                
                <div className="product-actions">
                    <button 
                        onClick={() => onViewDetails(product)} 
                        className="btn-secondary"
                    >
                        👁️ ดูรายละเอียด
                    </button>
                    <button 
                        onClick={() => onAddToCart(product)} 
                        disabled={!inStock}
                        className="btn-primary"
                    >
                        🛒 {inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        originalPrice: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired,
    showDiscount: PropTypes.bool,
    showStock: PropTypes.bool
};

export default ProductCard;
```

---

## 📄 src/components/BasicComponents/UserStatus.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function UserStatus({ user, showDetails = false }) {
    // กรณีไม่ได้เข้าสู่ระบบ
    if (!user) {
        return (
            <div className="status-container">
                <span className="status guest">👤 ผู้เยี่ยมชม</span>
                {showDetails && <p className="status-details">ยังไม่ได้เข้าสู่ระบบ</p>}
            </div>
        );
    }
    
    // กรณี Offline
    if (!user.isOnline) {
        if (user.lastSeen) {
            return (
                <div className="status-container">
                    <span className="status offline">
                        🔴 Offline
                    </span>
                    {showDetails && (
                        <p className="status-details">
                            เห็นครั้งสุดท้าย: {user.lastSeen}
                        </p>
                    )}
                </div>
            );
        }
        return (
            <div className="status-container">
                <span className="status unknown">❓ ไม่ทราบสถานะ</span>
                {showDetails && <p className="status-details">ไม่มีข้อมูลการเชื่อมต่อ</p>}
            </div>
        );
    }
    
    // กรณี Online + Premium
    if (user.isPremium) {
        return (
            <div className="status-container">
                <span className="status premium">🌟 Premium Online</span>
                {showDetails && (
                    <div className="status-details">
                        <p>สมาชิก Premium</p>
                        <p>เชื่อมต่ออยู่ในขณะนี้</p>
                    </div>
                )}
            </div>
        );
    }
    
    // กรณี Online ธรรมดา
    return (
        <div className="status-container">
            <span className="status online">🟢 Online</span>
            {showDetails && (
                <div className="status-details">
                    <p>สมาชิกทั่วไป</p>
                    <p>เชื่อมต่ออยู่ในขณะนี้</p>
                </div>
            )}
        </div>
    );
}

UserStatus.propTypes = {
    user: PropTypes.shape({
        isOnline: PropTypes.bool,
        isPremium: PropTypes.bool,
        lastSeen: PropTypes.string,
        name: PropTypes.string
    }),
    showDetails: PropTypes.bool
};

export default UserStatus;
```

---

## 📄 src/components/AdvancedComponents/Card.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function Card({ 
    title, 
    children, 
    className = '', 
    variant = 'default',
    showHeader = true,
    actions = null
}) {
    return (
        <div className={`card card-${variant} ${className}`}>
            {(showHeader && title) && (
                <div className="card-header">
                    <h3>{title}</h3>
                    {actions && <div className="card-actions">{actions}</div>}
                </div>
            )}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger']),
    showHeader: PropTypes.bool,
    actions: PropTypes.node
};

// Sub-components สำหรับ Compound Component Pattern
Card.Header = ({ children, className = '' }) => (
    <div className={`card-header ${className}`}>{children}</div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`card-body ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
    <div className={`card-footer ${className}`}>{children}</div>
);

Card.Title = ({ children, level = 3 }) => {
    const HeadingTag = `h${level}`;
    return <HeadingTag className="card-title">{children}</HeadingTag>;
};

// PropTypes สำหรับ sub-components
Card.Header.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.Body.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.Footer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.Title.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default Card;
```

---

## 📄 src/components/AdvancedComponents/StudentList.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function StudentList({ students, onStudentClick, groupBy = 'grade', showStats = true }) {
    if (students.length === 0) {
        return (
            <div className="empty-state">
                <p>📚 ไม่มีข้อมูลนักศึกษา</p>
                <small>ลองเพิ่มข้อมูลนักศึกษาใหม่</small>
            </div>
        );
    }
    
    // จัดกลุ่มข้อมูล
    const groupedStudents = students.reduce((groups, student) => {
        const key = student[groupBy];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(student);
        return groups;
    }, {});
    
    // คำนวณสถิติ
    const totalStudents = students.length;
    const averageScore = students.reduce((sum, student) => sum + student.score, 0) / totalStudents;
    const gradeDistribution = students.reduce((dist, student) => {
        dist[student.grade] = (dist[student.grade] || 0) + 1;
        return dist;
    }, {});
    
    return (
        <div className="student-list-container">
            {showStats && (
                <div className="student-stats">
                    <div className="stat-item">
                        <span className="stat-label">จำนวนนักศึกษา:</span>
                        <span className="stat-value">{totalStudents} คน</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">คะแนนเฉลี่ย:</span>
                        <span className="stat-value">{averageScore.toFixed(2)}</span>
                    </div>
                    <div className="grade-distribution">
                        <span className="stat-label">การกระจายเกรด:</span>
                        {Object.entries(gradeDistribution).map(([grade, count]) => (
                            <span key={grade} className="grade-stat">
                                {grade}: {count}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="student-groups">
                {Object.entries(groupedStudents).map(([groupKey, groupStudents]) => (
                    <div key={groupKey} className="student-group">
                        <h4 className="group-title">
                            {groupBy === 'grade' ? `เกรด ${groupKey}` : 
                             groupBy === 'year' ? `ชั้นปีที่ ${groupKey}` : groupKey}
                            <span className="group-count">({groupStudents.length} คน)</span>
                        </h4>
                        
                        <div className="student-cards">
                            {groupStudents.map(student => (
                                <div 
                                    key={student.id} 
                                    className="student-card"
                                    onClick={() => onStudentClick(student)}
                                >
                                    <div className="student-info">
                                        <span className="student-name">{student.name}</span>
                                        <span className="student-score">
                                            คะแนน: {student.score}
                                        </span>
                                    </div>
                                    <div className="student-badges">
                                        <span className={`grade-badge grade-${student.grade.replace('+', 'plus').replace('-', 'minus')}`}>
                                            {student.grade}
                                        </span>
                                        <span className="year-badge">
                                            ปี {student.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

StudentList.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            grade: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired
        })
    ).isRequired,
    onStudentClick: PropTypes.func.isRequired,
    groupBy: PropTypes.oneOf(['grade', 'year']),
    showStats: PropTypes.bool
};

export default StudentList;
```

---

## 📄 src/components/AdvancedComponents/ErrorBoundary.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null, 
            errorInfo: null 
        };
    }
    
    static getDerivedStateFromError(error) {
        // อัพเดท state เพื่อแสดง fallback UI
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        // บันทึกข้อมูล error
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        
        // ส่ง error ไป logging service (ในการใช้งานจริง)
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            // Custom error UI
            if (this.props.fallback) {
                return this.props.fallback(this.state.error, this.state.errorInfo);
            }
            
            // Default error UI
            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <h3>🚨 เกิดข้อผิดพลาด</h3>
                        <p>Component นี้พบปัญหาและไม่สามารถแสดงผลได้</p>
                        
                        {this.props.showDetails && (
                            <details className="error-details">
                                <summary>รายละเอียดข้อผิดพลาด</summary>
                                <pre className="error-stack">
                                    {this.state.error && this.state.error.toString()}
                                </pre>
                                <pre className="error-info">
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                        
                        <div className="error-actions">
                            <button 
                                onClick={() => this.setState({ 
                                    hasError: false, 
                                    error: null, 
                                    errorInfo: null 
                                })}
                                className="btn-primary"
                            >
                                🔄 ลองใหม่
                            </button>
                            <button 
                                onClick={() => window.location.reload()}
                                className="btn-secondary"
                            >
                                🏠 รีโหลดหน้า
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallback: PropTypes.func,
    showDetails: PropTypes.bool
};

ErrorBoundary.defaultProps = {
    showDetails: false
};

export default ErrorBoundary;
```

---

## 📄 src/components/HOC/withLoading.jsx

```jsx
import React from 'react';
import PropTypes from 'prop-types';

// Higher-Order Component สำหรับเพิ่ม loading state
function withLoading(WrappedComponent) {
    const WithLoadingComponent = ({ 
        isLoading, 
        loadingText = 'กำลังโหลด...', 
        loadingComponent = null,
        ...props 
    }) => {
        if (isLoading) {
            if (loadingComponent) {
                return loadingComponent;
            }
            
            return (
                <div className="loading-container">
                    <div className="loading-spinner">⏳</div>
                    <p className="loading-text">{loadingText}</p>
                </div>
            );
        }
        
        return <WrappedComponent {...props} />;
    };
    
    WithLoadingComponent.propTypes = {
        isLoading: PropTypes.bool,
        loadingText: PropTypes.string,
        loadingComponent: PropTypes.node
    };
    
    WithLoadingComponent.defaultProps = {
        isLoading: false
    };
    
    // ตั้งชื่อ component สำหรับ debugging
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithLoadingComponent.displayName = `withLoading(${componentName})`;
    
    return WithLoadingComponent;
}

export default withLoading;

// HOC อื่นๆ ที่เป็นตัวอย่าง

// HOC สำหรับเพิ่ม error handling
export function withErrorHandling(WrappedComponent) {
    const WithErrorHandlingComponent = ({ onError, ...props }) => {
        const handleError = (error) => {
            console.error('Component error:', error);
            if (onError) {
                onError(error);
            }
        };
        
        return (
            <WrappedComponent 
                {...props} 
                onError={handleError}
            />
        );
    };
    
    WithErrorHandlingComponent.propTypes = {
        onError: PropTypes.func
    };
    
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithErrorHandlingComponent.displayName = `withErrorHandling(${componentName})`;
    
    return WithErrorHandlingComponent;
}

// HOC สำหรับเพิ่ม analytics tracking
export function withAnalytics(WrappedComponent) {
    const WithAnalyticsComponent = ({ trackingId, ...props }) => {
        const trackEvent = (eventName, data = {}) => {
            console.log(`Analytics: ${eventName}`, { trackingId, ...data });
            // ส่งข้อมูลไป analytics service
        };
        
        return (
            <WrappedComponent 
                {...props} 
                trackEvent={trackEvent}
            />
        );
    };
    
    WithAnalyticsComponent.propTypes = {
        trackingId: PropTypes.string
    };
    
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithAnalyticsComponent.displayName = `withAnalytics(${componentName})`;
    
    return WithAnalyticsComponent;
}
```

---

## 📄 src/styles/components.css

```css
/* ===========================================
   Component Styles
   ========================================= */

/* Welcome Card */
.welcome-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 15px;
    margin: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.welcome-card:hover {
    transform: translateY(-5px);
}

.welcome-card.vip {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border: 2px solid #ffd700;
}

.welcome-header {
    text-align: center;
    margin-bottom: 15px;
}

.avatar-placeholder {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto 10px;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto 10px;
}

.vip-badge {
    background: #ffd700;
    color: #333;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
}

.welcome-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 15px;
}

/* Product Card */
.product-card {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card.out-of-stock {
    opacity: 0.7;
}

.product-image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.discount-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #dc3545;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.stock-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
}

.product-info {
    padding: 15px;
}

.product-name {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
}

.product-description {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 1.4;
}

.price-section {
    margin-bottom: 10px;
}

.current-price {
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
}

.original-price {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
    margin-left: 8px;
}

.savings {
    font-size: 14px;
    color: #28a745;
    font-weight: 600;
    margin-top: 5px;
}

.stock-status {
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 15px;
}

.stock-status.in-stock {
    background: #d4edda;
    color: #155724;
}

.stock-status.out-of-stock {
    background: #f8d7da;
    color: #721c24;
}

.product-actions {
    display: flex;
    gap: 10px;
}

/* Status Components */
.status-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.status {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
}

.status.guest {
    background: #f8f9fa;
    color: #495057;
}

.status.online {
    background: #d4edda;
    color: #155724;
}

.status.offline {
    background: #f8d7da;
    color: #721c24;
}

.status.premium {
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    color: #333;
}

.status.unknown {
    background: #e2e3e5;
    color: #495057;
}

.status-details {
    font-size: 12px;
    color: #666;
    margin: 0;
}

/* Card Component */
.card {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    margin: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-default {
    border-color: #e9ecef;
}

.card-primary {
    border-color: #007bff;
    border-width: 2px;
}

.card-secondary {
    border-color: #6c757d;
}

.card-success {
    border-color: #28a745;
    border-left: 4px solid #28a745;
}

.card-warning {
    border-color: #ffc107;
    background: #fff8e1;
}

.card-danger {
    border-color: #dc3545;
    border-left: 4px solid #dc3545;
}

.card-header {
    background: #f8f9fa;
    padding: 15px 20px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
}

.card-body {
    padding: 20px;
}

.card-footer {
    background: #f8f9fa;
    padding: 15px 20px;
    border-top: 1px solid #e9ecef;
    font-size: 14px;
    color: #666;
}

.card-title {
    color: #333;
    margin-bottom: 15px;
}

/* Student List */
.student-list-container {
    background: white;
    border-radius: 8px;
    overflow: hidden;
}

.student-stats {
    background: #f8f9fa;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.stat-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.stat-label {
    font-size: 12px;
    color: #666;
    font-weight: 600;
}

.stat-value {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.grade-distribution {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}

.grade-stat {
    background: #e9ecef;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
}

.student-groups {
    padding: 20px;
}

.student-group {
    margin-bottom: 25px;
}

.group-title {
    color: #333;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.group-count {
    font-size: 14px;
    color: #666;
    font-weight: normal;
}

.student-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 15px;
}

.student-card {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.student-card:hover {
    background: #e9ecef;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.student-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.student-name {
    font-weight: 600;
    color: #333;
}

.student-score {
    font-size: 14px;
    color: #666;
}

.student-badges {
    display: flex;
    gap: 8px;
}

.grade-badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    color: white;
}

.grade-A { background: #28a745; }
.grade-Aplus { background: #20c997; }
.grade-Aminus { background: #17a2b8; }
.grade-Bplus { background: #007bff; }
.grade-B { background: #6610f2; }
.grade-Bminus { background: #6f42c1; }
.grade-Cplus { background: #fd7e14; }
.grade-C { background: #dc3545; }

.year-badge {
    background: #6c757d;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

/* Error Boundary */
.error-boundary {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    color: #721c24;
}

.error-content {
    text-align: center;
}

.error-content h3 {
    margin-bottom: 15px;
    color: #721c24;
}

.error-details {
    margin: 15px 0;
    text-align: left;
}

.error-details summary {
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 10px;
}

.error-stack, .error-info {
    background: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;
    font-size: 12px;
    overflow-x: auto;
}

.error-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

/* Loading Component */
.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: #666;
}

.loading-spinner {
    font-size: 24px;
    margin-bottom: 10px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-text {
    font-size: 16px;
    margin: 0;
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 40px;
    color: #666;
}

.empty-state p {
    font-size: 18px;
    margin-bottom: 10px;
}

.empty-state small {
    font-size: 14px;
    color: #999;
}

/* Buttons */
.btn-primary {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 14px;
}

.btn-primary:hover {
    background: #0056b3;
    transform: translateY(-1px);
}

.btn-primary:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
}

.btn-secondary {
    background: #6c757d;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 14px;
}

.btn-secondary:hover {
    background: #545b62;
    transform: translateY(-1px);
}

.btn-danger {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 14px;
}

.btn-danger:hover {
    background: #c82333;
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .product-actions {
        flex-direction: column;
    }
    
    .student-cards {
        grid-template-columns: 1fr;
    }
    
    .student-stats {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .welcome-actions {
        flex-direction: column;
    }
}
```

---

## 📄 src/styles/demo.css

```css
/* ===========================================
   Demo Application Styles
   ========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #f5f7fa;
    color: #333;
}

.demo-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.demo-container > h1 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
    font-size: 2.5rem;
    background: linear-gradient(45deg, #007bff, #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.demo-description {
    text-align: center;
    color: #666;
    margin-bottom: 40px;
    font-size: 1.1rem;
}

.demo-section {
    background: white;
    margin-bottom: 30px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #e9ecef;
}

.demo-section > h2 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    margin: 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.demo-section > h2::before {
    content: "📍";
    font-size: 1.2em;
}

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    padding: 20px;
}

.demo-grid.single-column {
    grid-template-columns: 1fr;
}

.demo-grid.two-columns {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.code-block {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 15px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 13px;
    overflow-x: auto;
    margin: 15px 0;
    line-height: 1.4;
}

.highlight-box {
    background: #e3f2fd;
    border: 1px solid #2196f3;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
}

.highlight-box h4 {
    color: #1976d2;
    margin-bottom: 10px;
}

.info-box {
    background: #f0f8f0;
    border-left: 4px solid #28a745;
    padding: 15px;
    margin: 15px 0;
    border-radius: 0 8px 8px 0;
}

.warning-box {
    background: #fff8e1;
    border-left: 4px solid #ffc107;
    padding: 15px;
    margin: 15px 0;
    border-radius: 0 8px 8px 0;
}

.demo-controls {
    background: #f8f9fa;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
}

.demo-controls label {
    font-weight: 600;
    color: #495057;
}

.demo-controls select,
.demo-controls input {
    padding: 6px 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
}

.demo-controls button {
    padding: 6px 12px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.demo-controls button:hover {
    background: #0056b3;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    padding: 8px 0;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    align-items: center;
    gap: 10px;
}

.feature-list li::before {
    content: "✅";
    font-size: 16px;
}

.feature-list li:last-child {
    border-bottom: none;
}

/* Navigation */
.demo-nav {
    background: white;
    padding: 15px 0;
    margin-bottom: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.demo-nav h3 {
    color: #333;
    margin-bottom: 15px;
}

.nav-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.nav-link {
    padding: 8px 16px;
    background: #e9ecef;
    color: #495057;
    text-decoration: none;
    border-radius: 20px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.nav-link:hover {
    background: #007bff;
    color: white;
    transform: translateY(-1px);
}

/* Footer */
.demo-footer {
    text-align: center;
    padding: 30px;
    margin-top: 40px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.demo-footer h3 {
    color: #333;
    margin-bottom: 15px;
}

.demo-footer p {
    color: #666;
    margin-bottom: 10px;
}

.tech-badges {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.tech-badge {
    background: #e9ecef;
    color: #495057;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
    .demo-container {
        padding: 15px;
    }
    
    .demo-container > h1 {
        font-size: 2rem;
    }
    
    .demo-grid {
        grid-template-columns: 1fr;
        padding: 15px;
    }
    
    .demo-section > h2 {
        font-size: 1.3rem;
        padding: 15px;
    }
    
    .nav-links {
        gap: 10px;
    }
    
    .nav-link {
        padding: 6px 12px;
        font-size: 14px;
    }
    
    .demo-controls {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}

@media (max-width: 480px) {
    .demo-container > h1 {
        font-size: 1.8rem;
    }
    
    .demo-section > h2 {
        font-size: 1.2rem;
    }
    
    .tech-badges {
        gap: 6px;
    }
    
    .tech-badge {
        font-size: 12px;
        padding: 4px 8px;
    }
}
```

---

## 📄 src/App.jsx

```jsx
import React, { useState } from 'react';
import ErrorBoundary from './components/AdvancedComponents/ErrorBoundary';
import WelcomeCard from './components/BasicComponents/WelcomeCard';
import ProductCard from './components/BasicComponents/ProductCard';
import UserStatus from './components/BasicComponents/UserStatus';
import Card from './components/AdvancedComponents/Card';
import StudentList from './components/AdvancedComponents/StudentList';
import withLoading from './components/HOC/withLoading';
import { sampleProducts, sampleStudents, sampleUsers } from './data/mockData';

function App() {
    // Demo Controls State
    const [showLoadingDemo, setShowLoadingDemo] = useState(false);
    const [studentGroupBy, setStudentGroupBy] = useState('grade');
    const [showStudentStats, setShowStudentStats] = useState(true);
    const [showErrorDemo, setShowErrorDemo] = useState(false);
    
    // Event Handlers สำหรับ demo
    const handleAddToCart = (product) => {
        alert(`✅ เพิ่ม "${product.name}" ในตะกร้าแล้ว!\n💰 ราคา: ฿${product.price.toLocaleString()}`);
    };
    
    const handleViewDetails = (product) => {
        const details = `
🛍️ รายละเอียดสินค้า

📝 ชื่อ: ${product.name}
💰 ราคา: ฿${product.price.toLocaleString()}
📦 สถานะ: ${product.inStock ? 'มีสินค้า' : 'หมดสินค้า'}
📖 รายละเอียด: ${product.description}
        `.trim();
        alert(details);
    };
    
    const handleStudentClick = (student) => {
        alert(`👨‍🎓 ${student.name}\n📊 คะแนน: ${student.score}\n🎓 เกรด: ${student.grade}\n📚 ชั้นปีที่: ${student.year}`);
    };
    
    // Enhanced Components with HOC
    const ProductCardWithLoading = withLoading(ProductCard);
    const StudentListWithLoading = withLoading(StudentList);
    
    // Error Throwing Component สำหรับทดสอบ Error Boundary
    const ErrorThrowingComponent = () => {
        if (showErrorDemo) {
            throw new Error('ทดสอบ Error Boundary - Component นี้มีปัญหา!');
        }
        return <p>✅ Component ทำงานปกติ</p>;
    };
    
    return (
        <div className="demo-container">
            {/* Header */}
            <h1>📚 Demo: Components และ Props</h1>
            <p className="demo-description">
                ตัวอย่างการใช้งาน React Components และ Props ต่างๆ สำหรับการสอนหัวข้อที่ 2
            </p>
            
            {/* Navigation */}
            <div className="demo-nav">
                <h3>🧭 หัวข้อในการสาธิต</h3>
                <div className="nav-links">
                    <a href="#basic-props" className="nav-link">Basic Props</a>
                    <a href="#complex-props" className="nav-link">Complex Props</a>
                    <a href="#children" className="nav-link">Children Props</a>
                    <a href="#conditional" className="nav-link">Conditional Rendering</a>
                    <a href="#lists" className="nav-link">List Rendering</a>
                    <a href="#error-boundary" className="nav-link">Error Boundary</a>
                    <a href="#hoc" className="nav-link">HOC</a>
                </div>
            </div>
            
            {/* Section 1: Basic Props และ Default Props */}
            <section id="basic-props" className="demo-section">
                <h2>1. Basic Props และ Default Props</h2>
                <div className="demo-grid">
                    <WelcomeCard 
                        name="สมชาย ใจดี" 
                        age={25} 
                        role="Senior Developer" 
                        isVIP={true}
                    />
                    <WelcomeCard 
                        name="สมศรี สวยงาม" 
                        age={23} 
                        role="UI/UX Designer"
                        // isVIP ไม่ได้ส่งมา จะใช้ default value = false
                    />
                    <WelcomeCard 
                        name="สมหมาย เก่งมาก" 
                        age={28} 
                        role="Project Manager" 
                        isVIP={false}
                        avatar="https://placehold.co/60x60/28a745/ffffff?text=SM"
                    />
                </div>
                
                <Card title="💡 จุดสำคัญของ Basic Props" variant="primary">
                    <ul className="feature-list">
                        <li>Props เป็น parameters ของ Component</li>
                        <li>ใช้ Default Parameters สำหรับค่าเริ่มต้น</li>
                        <li>Destructuring ทำให้อ่านโค้ดง่ายขึ้น</li>
                        <li>PropTypes ช่วยตรวจสอบประเภทข้อมูล</li>
                    </ul>
                </Card>
            </section>
            
            {/* Section 2: Complex Props และ PropTypes */}
            <section id="complex-props" className="demo-section">
                <h2>2. Complex Props และ PropTypes Validation</h2>
                <div className="demo-grid">
                    {sampleProducts.slice(0, 2).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                            onViewDetails={handleViewDetails}
                            showDiscount={true}
                            showStock={true}
                        />
                    ))}
                </div>
                
                <Card title="🔍 PropTypes Validation" variant="warning">
                    <p>เปิด Console (F12) เพื่อดู PropTypes warnings หากมีการส่ง props ผิดประเภท</p>
                    <div className="code-block">
{`ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // ...
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  showDiscount: PropTypes.bool
};`}
                    </div>
                </Card>
            </section>
            
            {/* Section 3: Children Props และ Composition */}
            <section id="children" className="demo-section">
                <h2>3. Children Props และ Component Composition</h2>
                <div className="demo-grid">
                    <Card title="📊 ข้อมูลส่วนตัว" variant="success">
                        <p><strong>ชื่อ:</strong> สมชาย ใจดี</p>
                        <p><strong>อีเมล:</strong> somchai@email.com</p>
                        <p><strong>เบอร์:</strong> 081-234-5678</p>
                        <button className="btn-primary">แก้ไขข้อมูล</button>
                    </Card>
                    
                    <Card variant="warning">
                        <Card.Header>
                            <Card.Title level={4}>⚠️ คำเตือนสำคัญ</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนส่ง</p>
                            <ul>
                                <li>ชื่อ-นามสกุล</li>
                                <li>หมายเลขโทรศัพท์</li>
                                <li>ที่อยู่อีเมล</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <small>อัพเดทล่าสุด: วันนี้</small>
                        </Card.Footer>
                    </Card>
                </div>
                
                <Card title="🧩 Compound Components Pattern" variant="primary">
                    <p>Pattern นี้ช่วยให้สร้าง flexible API สำหรับ complex components</p>
                    <div className="code-block">
{`<Card variant="warning">
  <Card.Header>
    <Card.Title level={4}>หัวข้อ</Card.Title>
  </Card.Header>
  <Card.Body>
    <p>เนื้อหา...</p>
  </Card.Body>
  <Card.Footer>
    <small>ท้ายการ์ด</small>
  </Card.Footer>
</Card>`}
                    </div>
                </Card>
            </section>
            
            {/* Section 4: Conditional Rendering */}
            <section id="conditional" className="demo-section">
                <h2>4. Conditional Rendering</h2>
                <div className="demo-grid">
                    {sampleUsers.map((user, index) => (
                        <Card key={index} title={`ผู้ใช้ ${index + 1}`}>
                            <UserStatus user={user} showDetails={true} />
                            {user && (
                                <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                                    <p>ชื่อ: {user.name || 'ไม่ระบุ'}</p>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
                
                <Card title="🎭 Conditional Rendering Patterns" variant="secondary">
                    <div className="demo-grid single-column">
                        <div>
                            <h4>1. && Operator (Short Circuit)</h4>
                            <div className="code-block">
{`{user && <UserProfile user={user} />}
{isLoading && <LoadingSpinner />}`}
                            </div>
                        </div>
                        
                        <div>
                            <h4>2. Ternary Operator</h4>
                            <div className="code-block">
{`{user ? (
  <WelcomeMessage user={user} />
) : (
  <LoginForm />
)}`}
                            </div>
                        </div>
                        
                        <div>
                            <h4>3. Early Return</h4>
                            <div className="code-block">
{`if (!user) {
  return <div>ไม่พบผู้ใช้</div>;
}
return <UserProfile user={user} />;`}
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
            
            {/* Section 5: List Rendering และ Keys */}
            <section id="lists" className="demo-section">
                <h2>5. List Rendering และ Keys</h2>
                
                <div className="demo-controls">
                    <label>จัดกลุ่มตาม:</label>
                    <select 
                        value={studentGroupBy}
                        onChange={(e) => setStudentGroupBy(e.target.value)}
                    >
                        <option value="grade">เกรด</option>
                        <option value="year">ชั้นปี</option>
                    </select>
                    
                    <label>
                        <input 
                            type="checkbox"
                            checked={showStudentStats}
                            onChange={(e) => setShowStudentStats(e.target.checked)}
                        />
                        แสดงสถิติ
                    </label>
                </div>
                
                <StudentList 
                    students={sampleStudents}
                    onStudentClick={handleStudentClick}
                    groupBy={studentGroupBy}
                    showStats={showStudentStats}
                />
                
                <Card title="🔑 ความสำคัญของ Keys" variant="danger">
                    <div className="warning-box">
                        <h4>⚠️ อย่าใช้ Array Index เป็น Key!</h4>
                        <p>หากลำดับของรายการเปลี่ยนแปลง จะทำให้ React render ผิดพลาด</p>
                    </div>
                    <div className="code-block">
{`// ❌ ไม่ดี
{items.map((item, index) => 
  <Item key={index} data={item} />
)}

// ✅ ดี  
{items.map(item => 
  <Item key={item.id} data={item} />
)}`}
                    </div>
                </Card>
            </section>
            
            {/* Section 6: Error Boundary */}
            <section id="error-boundary" className="demo-section">
                <h2>6. Error Boundaries</h2>
                
                <div className="demo-controls">
                    <button 
                        onClick={() => setShowErrorDemo(!showErrorDemo)}
                        className={showErrorDemo ? "btn-danger" : "btn-primary"}
                    >
                        {showErrorDemo ? '🔧 แก้ไข Error' : '💥 ทำให้เกิด Error'}
                    </button>
                </div>
                
                <div className="demo-grid">
                    <Card title="Error Boundary Test" variant="danger">
                        <ErrorBoundary showDetails={true}>
                            <ErrorThrowingComponent />
                            <p>Component อื่นๆ ยังทำงานได้ปกติ</p>
                        </ErrorBoundary>
                    </Card>
                    
                    <Card title="Normal Component" variant="success">
                        <p>✅ Component นี้ไม่ได้รับผลกระทบจาก Error</p>
                        <p>Error Boundary ช่วยป้องกันไม่ให้แอปทั้งหมดพัง</p>
                    </Card>
                </div>
                
                <Card title="🛡️ Error Boundary Best Practices" variant="warning">
                    <ul className="feature-list">
                        <li>ใช้ Class Component สำหรับ Error Boundary</li>
                        <li>จัดวาง Error Boundary ในระดับที่เหมาะสม</li>
                        <li>สร้าง Fallback UI ที่เป็นมิตรกับผู้ใช้</li>
                        <li>Log errors ไปยัง monitoring service</li>
                    </ul>
                </Card>
            </section>
            
            {/* Section 7: Higher-Order Components (HOC) */}
            <section id="hoc" className="demo-section">
                <h2>7. Higher-Order Components (HOC)</h2>
                
                <div className="demo-controls">
                    <button 
                        onClick={() => setShowLoadingDemo(!showLoadingDemo)}
                        className="btn-primary"
                    >
                        {showLoadingDemo ? '✅ โหลดเสร็จแล้ว' : '⏳ แสดง Loading'}
                    </button>
                </div>
                
                <div className="demo-grid">
                    <ProductCardWithLoading
                        product={sampleProducts[0]}
                        onAddToCart={handleAddToCart}
                        onViewDetails={handleViewDetails}
                        isLoading={showLoadingDemo}
                        loadingText="กำลังโหลดสินค้า..."
                    />
                    
                    <StudentListWithLoading
                        students={sampleStudents.slice(0, 3)}
                        onStudentClick={handleStudentClick}
                        isLoading={showLoadingDemo}
                        loadingText="กำลังโหลดรายชื่อ..."
                        showStats={false}
                    />
                </div>
                
                <Card title="🔧 HOC Pattern" variant="primary">
                    <p>HOC เป็น function ที่รับ Component และ return Component ใหม่ที่มีฟีเจอร์เพิ่มเติม</p>
                    <div className="code-block">
{`function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>กำลังโหลด...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// การใช้งาน
const ProductCardWithLoading = withLoading(ProductCard);`}
                    </div>
                </Card>
            </section>
            
            {/* Section 8: Props Validation Summary */}
            <section className="demo-section">
                <h2>8. สรุป Props Validation และ Best Practices</h2>
                
                <div className="demo-grid two-columns">
                    <Card title="✅ Do's - สิ่งที่ควรทำ" variant="success">
                        <ul className="feature-list">
                            <li>ใช้ PropTypes validation เสมอ</li>
                            <li>ตั้ง Default Props สำหรับค่าเริ่มต้น</li>
                            <li>ใช้ Destructuring ใน parameters</li>
                            <li>ตั้งชื่อ Props ที่ชัดเจนและสื่อความหมาย</li>
                            <li>แยก Props เป็นหมวดหมู่ (data, callbacks, config)</li>
                        </ul>
                    </Card>
                    
                    <Card title="❌ Don'ts - สิ่งที่ไม่ควรทำ" variant="danger">
                        <ul className="feature-list">
                            <li>ส่ง Props มากเกินไป (ควรใช้ Object)</li>
                            <li>ตั้งชื่อ Props แบบ generic เช่น data, info</li>
                            <li>ลืมใส่ key ใน list rendering</li>
                            <li>ใช้ array index เป็น key</li>
                            <li>ไม่ validate Props สำหรับ public components</li>
                        </ul>
                    </Card>
                </div>
                
                <Card title="📋 PropTypes Reference" variant="secondary">
                    <div className="code-block">
{`// ประเภทข้อมูลพื้นฐาน
PropTypes.string          // ข้อความ
PropTypes.number          // ตัวเลข
PropTypes.bool            // true/false
PropTypes.array           // อาเรย์
PropTypes.object          // อ็อบเจ็กต์
PropTypes.func            // ฟังก์ชัน

// ข้อมูลที่จำเป็น
PropTypes.string.isRequired

// อาเรย์ของข้อมูลประเภทเฉพาะ
PropTypes.arrayOf(PropTypes.number)

// อ็อบเจ็กต์รูปแบบเฉพาะ  
PropTypes.shape({
  name: PropTypes.string.isRequired,
  age: PropTypes.number
})

// เลือกจากตัวเลือกที่กำหนด
PropTypes.oneOf(['small', 'medium', 'large'])

// หลายประเภทที่เป็นไปได้
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])`}
                    </div>
                </Card>
            </section>
            
            {/* Footer */}
            <div className="demo-footer">
                <h3>🎉 สรุปการสาธิต Components และ Props</h3>
                <p>ตัวอย่างทั้งหมดนี้แสดงให้เห็นการใช้งาน React Components และ Props ในสถานการณ์จริง</p>
                <p>เหมาะสำหรับการสอนและทำความเข้าใจ concept สำคัญต่างๆ</p>
                
                <div className="tech-badges">
                    <span className="tech-badge">React.js</span>
                    <span className="tech-badge">PropTypes</span>
                    <span className="tech-badge">JSX</span>
                    <span className="tech-badge">Error Boundaries</span>
                    <span className="tech-badge">HOC Pattern</span>
                    <span className="tech-badge">Compound Components</span>
                </div>
                
                <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
                    <p>📚 สำหรับการสอนหัวข้อที่ 2: การสร้าง Components และ Props</p>
                    <p>🎯 เหมาะสำหรับนักศึกษาวิศวกรรมซอฟต์แวร์ที่เริ่มต้นเรียน React.js</p>
                </div>
            </div>
        </div>
    );
}

export default App;
```

---

## 🚀 วิธีการติดตั้งและรันโปรเจค

### ขั้นตอนที่ 1: สร้างโปรเจค
```bash
npm create vite@latest components-props-demo -- --template react
cd components-props-demo
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies
```bash
npm install prop-types
```

### ขั้นตอนที่ 3: คัดลอกไฟล์
คัดลอกไฟล์ทั้งหมดตามโครงสร้างที่กำหนดไว้ข้างต้น

### ขั้นตอนที่ 4: รันโปรเจค  
```bash
npm run dev
```

เปิด browser ที่ `http://localhost:5173`

## 🎯 Features ที่สาธิตในโปรเจค

### 1. **Basic Props & PropTypes**
- การส่ง props ประเภทต่างๆ
- Default props
- PropTypes validation

### 2. **Complex Props Patterns**  
- Object props
- Function props  
- Destructuring props

### 3. **Children Props**
- Compound components
- Flexible component composition

### 4. **Conditional Rendering**
- Different rendering patterns
- Early return
- Ternary operators

### 5. **List Rendering** 
- Keys importance
- Dynamic lists
- Grouping data

### 6. **Error Boundaries**
- Error handling
- Fallback UI
- Class components

### 7. **Higher-Order Components**
- withLoading HOC
- Component enhancement
- Reusable patterns

## 🎓 การใช้งานสำหรับการสอน

### สำหรับอาจารย์:
- **Live Demo**: รันโปรเจคและสาธิตแต่ละ concept
- **Interactive**: ปรับค่าใน demo controls เพื่อแสดงผลลัพธ์
- **Code Examples**: มี code snippets พร้อมคำอธิบาย
- **Best Practices**: แสดงทั้งวิธีที่ถูกและผิด

### คุณสมบัติพิเศษ:
- **Responsive Design**: ใช้งานได้ทั้งเดสก์ท็อปและมือถือ  
- **Error Simulation**: ทดสอบ Error Boundary ได้จริง
- **Loading States**: แสดง HOC patterns ได้ชัดเจน
- **PropTypes Validation**: เปิด console เพื่อดู validation warnings

โปรเจคนี้พร้อมใช้งานเลยครับ! 🎉                            