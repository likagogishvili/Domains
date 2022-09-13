import "./header.css";
import * as images from "../assets/Images";
import { useSelector } from "react-redux";
function Header() {
  const carItems = useSelector((state) => state.card);
  return (
    <header>
      <div className="headerFirstContainer">
        <div className="headerFChilds m-auto d-flex align-items-center justify-content-between">
          <div>
            <img alt="" src={images.logoText} />
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "24%" }}
          >
            <div className="iconBoxes d-flex align-items-center justify-content-center">
              <img src={images.bell} alt="" width={"45%"} />
            </div>
            <div className="iconBoxes d-flex align-items-center justify-content-center">
              {carItems.length ? (
                <div className="redCircle">{carItems.length}</div>
              ) : (
                ""
              )}
              <img src={images.cardGrey} alt="" width={"55%"} />
            </div>
            <div className="iconBoxes2 d-flex">
              <div
                className="iconBoxes d-flex align-items-center justify-content-center"
                style={{ border: "none" }}
              >
                <img src={images.person} alt="" width={"45%"} />
              </div>
              <p className="userName pt-3">Kancha Co.</p>
              <div
                className="iconBoxes d-flex align-items-center justify-content-center "
                style={{ border: "none" }}
              >
                <img src={images.arrowDown1} alt="" width={"20%"} className="hiddenElement" />
              </div>
            </div>

            <div className="iconBoxes d-flex align-items-center justify-content-center">
              <img src={images.flagGeo} alt="" width={"50%"} />
            </div>
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
