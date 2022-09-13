import "./header.css";
import * as images from "../assets/Images";
import { useSelector } from "react-redux";
function Header() {
  const carItems = useSelector((state) => state.card);
  return (
    <header>
      <div className="headerFirstContainer">
        <div className="headerFChilds m-auto d-flex align-items-center">
          <i className="burger-icon"></i>
          <img className="logo" alt="" src={images.logoText} />
          <div className="icons-cnt d-flex justify-content-between ml-auto">
            <i className="nav-icon bell-icon"></i>
            <div className="cart-icon-cnt">
              {carItems.length ? (
                <span className="redCircle">{carItems.length}</span>
              ) : (
                ""
              )}
              <i className="nav-icon cart-icon"> </i>
            </div>
            <div className="iconBoxes2 d-flex ">
              <i className="person-icon"></i>
              <p className="userName">Kancha Co.</p>
              <i className="dropdown-icon"></i>
            </div>
            <i className="nav-icon flag-icon"></i>
          </div>
        </div>
      </div>
      <div className="headerSecondContaner hiddenElement">
        <div className="headerFChilds m-auto d-flex  justify-content-between">
          <div
            className="headerFChilds d-flex gap-4 align-items-center"
            style={{ width: "70%" }}
          >
            <a href="/#">დომენი</a>
            <a href="/#">ტრანსფერი</a>
            <a href="/#">ჰოსტინგი</a>
            <a href="/#">Gmail</a>
            <a href="/#">ვებგვერდი</a>
            <a href="/#">დომენის მარკეტი</a>
          </div>
          <div
            className="headerFChilds d-flex gap-3 justify-content-between align-items-center"
            style={{ width: "30%" }}
          >
            <a href="/#">ჩვენს შესახებ</a>
            <a href="/#">ფასები</a>
            <a href="/#">ბლოგი</a>
            <a href="/#">დახმარება</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
