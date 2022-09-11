import * as images from "../assets/Images";

function Content() {
  return (
    <div className="filterConteiner" style={{ height: "200px" }}>
      <div className="d-flex justify-content-between p-3 border-bottom">
        <div className="d-flex align-items-center ">
          <img src={images.arrowDown} width={"50px"} alt="" />
          <p className="mt-auto mb-auto mx-2">gijashvili.org.ge</p>
        </div>
        <div className="d-flex align-items-center" style={{width:'17%'}}>
          <div className="row">
            <p className="mt-auto mb-auto mx-2 lariP">40 000 ₾ </p>
            <p className="mt-auto mb-auto mx-2 dolariP">14 285.7 $</p>
          </div>
          <img src={images.greenCard} width={"50px"} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Content;
