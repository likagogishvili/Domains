import "./coverPicture.css";
import * as images from "../assets/Images";

function CoverPicture() {
  return (
    <div
      className="d-flex align-items-center justify-content-center my-5 bg-black coverContainer"
      style={{ backgroundImage: `url(${images.coverPicture})` }}
    >
      <p>გაყიდე და იყიდე დომენი მარტივად</p>
    </div>
  );
}
export default CoverPicture;
