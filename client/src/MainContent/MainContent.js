import "./mainContent.css";
import * as images from "../assets/Images";
import Filters from "./Filters";
import Content from "./Content";
import { useEffect, useState } from "react";
import FilterPopUp from "./FilterPopUp";

function MainContent() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [contentRender, SetContentRender] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className=" m-auto" style={{ width: "80%" }}>
      <div className="row hiddenElement">
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

      {windowSize.innerWidth < 794 ? (
        <div className="row d-flex justify-content-between mt-4 sortConteiners">
          <div className="col-6 col-md-6 d-flex">
            <button
              className="d-flex align-items-center justify-content-between sortButtons"
              onClick={(e) => SetContentRender(!contentRender)}
            >
              <p className="mx-2 mt-3">სორტირება</p>
              <img src={images.sortImg} alt="" width={"15%"} />
            </button>
          </div>
          <div className="col-6 col-md-6 d-flex">
            <button className="d-flex align-items-center justify-content-between sortButtons">
              <p className="mx-2 mt-3">სორტირება</p>
              <img src={images.arrowDown1} alt="" width={"12%"} />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <div className="row d-flex justify-content-between mt-4">
          <div className="col-12 col-md-4">
            {windowSize.innerWidth > 794 ? (
              <Filters />
            ) : (
              contentRender && (
                <FilterPopUp SetContentRender={SetContentRender} />
              )
            )}
          </div>
          <div className="col-sm-12 col-md-7 maxWidth">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}
export default MainContent;
