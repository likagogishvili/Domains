import { useState, useEffect } from "react";
import * as images from "../../assets/Images";
import data from "../domainsData/domainList_.json";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/index";
import { useSelector } from "react-redux";

function Content() {
  const [domainSelected, SetClickedDomain] = useState();
  const [addedItem, SetAddedItem] = useState([]);
  const searchByName = useSelector((state) => state.searchByName);
  const priceRange = useSelector((state) => state.priceRange);
  const symbolRange = useSelector((state) => state.symbolRange);
  const categories = useSelector((state) => state.categories).map((i) =>
    Number(i)
  );
  const domainZone = useSelector((state) => state.domainZone);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterActions.addInCard(addedItem));
  }, [addedItem, dispatch]);

  function ClickedItem(e) {
    SetClickedDomain(e.target.id);
  }

  function AddItemInCard(e) {
    if (e.target.id.length) {
      SetAddedItem([...addedItem, e.target.id]);
    }
  }

  function findCommonElement(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          return true;
        }
      }
    }
    return false;
  }

  const filteredData = data.domainList
    .filter((data) => {
      if (searchByName === "") {
        return data;
      }
      if (data.domainName.toLowerCase().includes(searchByName.toLowerCase())) {
        return data;
      }
      return 0;
    })

    .filter((data) => {
      if (priceRange.priceFrom === "") {
        return data;
      }
      if (priceRange.priceFrom <= data.price) {
        return data;
      }
      return 0;
    })
    .filter((data) => {
      if (priceRange.priceTo === "") {
        return data;
      }
      if (priceRange.priceTo >= data.price) {
        return data;
      }
      return 0;
    })

    .filter((data) => {
      if (symbolRange.minSimbol === "") {
        return data;
      }
      if (
        symbolRange.minSimbol <=
        data.domainName.length + data.domainExtension.length
      ) {
        return data;
      }
      return 0;
    })

    .filter((data) => {
      if (symbolRange.maxSymbol === "") {
        return data;
      }
      if (
        symbolRange.maxSymbol >=
        data.domainName.length + data.domainExtension.length
      ) {
        return data;
      }
      return 0;
    })

    .filter((data) => {
      if (categories.length === 0) {
        return data;
      }
      if (findCommonElement(categories, data.categories)) {
        return data;
      }
      return 0;
    })

    .filter((data) => {
      if (domainZone.length === 0) {
        return data;
      }
      if (domainZone.includes(data.domainExtension)) {
        return data;
      }
      return 0;
    });

  const domains = filteredData.map((domain, index) => {
    return (
      <div
        className="d-flex justify-content-between p-3 border-bottom"
        key={index}
        id={domain.domainName}
        style={{
          backgroundColor:
            domainSelected === domain.domainName ? "#F5F5F8" : "",
          height: "69px",
        }}
        onMouseOver={ClickedItem}
      >
        <div className="d-flex align-items-center">
          <img
            src={
              domainSelected === domain.domainName
                ? images.btn_send_green
                : images.arrowDown
            }
            width={"50px"}
            alt=""
          />
          <p className="mt-auto mb-auto mx-2">
            {domain.domainName + domain.domainExtension}
          </p>
        </div>
        <div className="d-flex align-items-center" style={{ width: "25%" }}>
          <div className="row">
            <p className="mt-auto mb-auto mx-2 lariP">{domain.price} ₾</p>
            <p className="mt-auto mb-auto mx-2 dolariP">{domain.price}$</p>
          </div>

          {addedItem.includes(domain.domainName) ? (
            <button
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#F5F5F8",
                borderRadius: "10px",
                height: "36px",
              }}
            >
              <img src={images.accept} alt="" className="m-2" />

              <p className="pt-2 mt-1" style={{ color: "#696974" }}>
                კალათაშია
              </p>
            </button>
          ) : (
            <button
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#99CC66",
                borderRadius: "10px",
                height: "36px",
              }}
              id={domain.domainName}
              onClick={AddItemInCard}
            >
              {domainSelected === domain.domainName && (
                <p
                  className="pt-1 text-white mx-1 mt-1"
                  id={domain.domainName}
                  onMouseOver={ClickedItem}
                >
                  დამატება
                </p>
              )}
              <img
                src={images.cardWhite}
                alt=""
                className="m-2"
                id={domain.domainName}
                onMouseOver={ClickedItem}
              />
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="contentConteiner pb-4 pt-2">
      {domains}
      {!filteredData.length && (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <img src={images.notFound} alt="" />
          <p className="notFound">დომენი ვერ მოიძებნა</p>
          <p className="notFoundDescription ">
            მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა,
            შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
          </p>
        </div>
      )}
    </div>
  );
}
export default Content;
