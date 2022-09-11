import "./mainContent.css";
import * as images from "../assets/Images";
import Filters from "./Filters";
import Content from "./Content";

function MainContent() {
  return (
    <div className=" m-auto" style={{ width: "80%" }}>
      <div className="row">
        <div className="col-md-2 d-flex greyHeadingsFirst">
          დომენები მარკეტზე: <p className="mx-2 boldHeading">703</p>
        </div>

        <div className="col-md-10 col-12">
          <div className="row d-flex justify-content-between ">

            <div className="col-md-9 d-flex justify-content-evenly">
              <p className="boldHeading col-md-2 col-12 ">სორტირება:</p>
              <div className="greenText col-md-3 col-12">
                დამატების თარიღით 
                <img src={images.sort} alt="" className="mx-1" />
              </div>
              <p className="greyHeadings col-md-3 col-12 ">ვადის ამოწურვით</p>
              <p className="greyHeadings col-md-2 col-12 ">ფასით</p>
              <p className="greyHeadings col-md-2 col-12 ">ანბანით</p>
            </div>
            <div className="col-md-3 col-12 lastHeading d-flex justify-content-end">
              როგორ გავყიდო დომენი?
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row d-flex justify-content-between mt-4">
          <div className="col-6 col-md-4">
            <Filters/>
          </div>
          <div className="col-md-7">
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
