import { useState, useEffect } from "react";
import "../styles/mainContent.css";

import * as images from "../../assets/Images";
import data from "../domainsData/domainList_.json";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store/index";
import SliderPrice from "./sliders/SliderPrice";
import SliderSymbol from "./sliders/SliderSymbol";

function Filters() {
  const [filterWithName, setFilterWithName] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [minSimbol, setMinSimbol] = useState("");
  const [maxSymbol, setMaxSymbol] = useState("");
  const [checked, setChecked] = useState([]);
  const [checkedDomains, setCheckedDomains] = useState([]);

  const priceRange = useSelector((state) => state.priceRange);
  const symbolRange = useSelector((state) => state.symbolRange);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterActions.addSearchByName(filterWithName));
  }, [filterWithName, dispatch]);

  useEffect(() => {
    dispatch(
      counterActions.priceRangeSetter({
        priceFrom: priceFrom,
        priceTo: priceTo,
      })
    );
  }, [priceFrom, priceTo, dispatch]);

  useEffect(() => {
    dispatch(
      counterActions.symbolRangeSetter({
        minSimbol: minSimbol,
        maxSymbol: maxSymbol,
      })
    );
  }, [minSimbol, maxSymbol, dispatch]);

  useEffect(() => {
    dispatch(counterActions.categoriesSetter(checked));
  }, [checked, dispatch]);

  useEffect(() => {
    dispatch(counterActions.domainZoneSetter(checkedDomains));
  }, [checkedDomains, dispatch]);

  //categories
  function getChecked(e) {
    var array = [...checked];
    if (!checked.includes(e.target.id)) {
      setChecked((current) => [...current, e.target.id]);
    } else {
      var filteredArray = array.filter(function (item) {
        return item !== e.target.id;
      });
      setChecked(filteredArray);
    }
  }
  const categories = data.categories.map((item) => {
    return (
      <div key={item.id}>
        <input
          type="checkbox"
          id={item.id}
          className="form-check-input mb-2"
          onChange={getChecked}
        />
        <label htmlFor={item.id} className="mx-2">
          {item.name}
        </label>
      </div>
    );
  });

  //Domains
  function getDomains(e) {
    var array = [...checkedDomains];
    if (!checkedDomains.includes(e.target.id)) {
      setCheckedDomains((current) => [...current, e.target.id]);
    } else {
      var filteredArray = array.filter(function (item) {
        return item !== e.target.id;
      });
      setCheckedDomains(filteredArray);
    }
  }
  const uniqueDomains = [
    ...new Set(data.domainList.map((domain) => domain.domainExtension)),
  ];
  const domainZone = uniqueDomains.map((domain) => {
    return (
      <div key={domain}>
        <input
          type="checkbox"
          id={domain}
          className="form-check-input mb-2"
          onChange={getDomains}
        />
        <label htmlFor={domain} className="mx-2">
          {domain}
        </label>
      </div>
    );
  });

  return (
    <div className="filterConteiner  mb-4">
      <div style={{ width: "80%" }} className="m-auto">
        <input
          type="search"
          value={filterWithName}
          id="form1"
          className="filterConterSearch mt-4 px-4 m-auto"
          placeholder="სახელით ძებნა"
          onChange={(e) => setFilterWithName(e.target.value)}
        />
        <p className="filterNames mt-3">ფასი</p>
        <div className="row">
          <input
            type="number"
            value={priceRange.priceFrom}
            id="form1"
            className="filterConterSearch m-auto col-5 px-2"
            style={{
              height: "44px",
              backgroundImage: `url(${images.lariIcon})`,
            }}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <input
            type="number"
            value={priceRange.priceTo}
            id="form1"
            className="filterConterSearch m-auto col-5 px-2"
            style={{
              height: "44px",
              backgroundImage: `url(${images.lariIcon})`,
            }}
            onChange={(e) => setPriceTo(e.target.value)}
          />
          <div className="mt-3 mb-3"></div>
        </div>

        <SliderPrice />

        <p className="filterNames mt-3">სიმბოლოების რაოდენობა</p>

        <div className="row ">
          <input
            type="number"
            value={symbolRange.minSimbol}
            id="form1"
            className="filterConterSearch m-auto col-5 px-2"
            style={{
              height: "44px",
            }}
            onChange={(e) => setMinSimbol(e.target.value)}
          />
          <input
            type="number"
            value={symbolRange.maxSymbol}
            id="form1"
            className="filterConterSearch m-auto col-5 px-2"
            style={{
              height: "44px",
            }}
            onChange={(e) => setMaxSymbol(e.target.value)}
          />
          <div className="mt-3 mb-3"></div>
        </div>

        <SliderSymbol />

        <p className="filterNames mt-3">კატეგორიები</p>
        {categories}

        <p className="filterNames mt-3">დომენის ზონა</p>
        {domainZone}
      </div>
    </div>
  );
}
export default Filters;
