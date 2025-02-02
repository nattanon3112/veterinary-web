import "./HeaderStyle.css"

const Header = () => {
  return (
    <div className="header">
        <div className="logo-image">
            <img src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg" alt="" />
        </div>
        <nav>
            <a href="#">หน้าแรก</a>
            <a href="#">คุณสมบัติ</a>
            <a href="#">ราคา</a>
            <a href="#">สั่งซื้อ</a>
            <a href="#">ติดต่อเรา</a>
        </nav>
        <div className="register-btn">    
            <button>เข้าใช้งาน</button>
        </div>
    </div>
  )
}

export default Header