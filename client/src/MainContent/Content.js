import { useState } from "react";
import * as images from "../assets/Images";
import data from "./domainsData/domainList_.json";
function Content() {
  const [domainSelected, SetClickedDomain] = useState();

  // console.log(domain);

  function ClickedItem(e) {
    SetClickedDomain(e.target.id);
  }

  const domains = data.domainList.map((domain, index) => {
    return (
      <div
        className="d-flex justify-content-between p-3 border-bottom"
        key={index}
        id={domain.domainName}
        onClick={ClickedItem}
      >
        <div className="d-flex align-items-center">
          <img src={images.arrowDown} width={"50px"} alt="" />
          <p className="mt-auto mb-auto mx-2">
            {domain.domainName + domain.domainExtension}
          </p>
        </div>
        <div className="d-flex align-items-center" style={{ width: "25%" }}>
          <div className="row">
            <p className="mt-auto mb-auto mx-2 lariP">{domain.price} ₾</p>
            <p className="mt-auto mb-auto mx-2 dolariP">{domain.price}$</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#99CC66", borderRadius: "10px" }}
          >
            {domainSelected === domain.domainName && (
              <p className="pt-1 text-white mx-1 mt-1">დამატება</p>
            )}
            <img
              src={images.cardWhite}
              alt=""
              className="m-2"

            />
          </div>
        </div>
      </div>
    );
  });

  return <div className="contentConteiner pb-4 pt-2">{domains}</div>;
}
export default Content;
