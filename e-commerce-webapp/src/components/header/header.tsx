import "./styles.css";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <div className="logo">E-Commerce-WebApp</div>
        </div>

        <div className="menu-container">
          <div className="menu">
            <div className="menu-item">Home</div>
            <div className="menu-item">Products</div>
            <div className="menu-item">About</div>
            <div className="menu-item">Contact</div>
          </div>
        </div>

        <div className="profile-container">
          <div className="user-profile">
            <Image
              src="/images/profile.png"
              alt="profile"
              height={50}
              width={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
