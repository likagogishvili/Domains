import { useState } from "react";
import "./mainContent.css";
import * as images from "../assets/Images";
import data from "./domainsData/domainList_.json";

function Filters() {
  const [filterWithName, setFilterWithName] = useState("");
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  const [minSimbol, setMinSimbol] = useState();
  const [maxSymbol, setMaxSymbol] = useState();
  const [checked, setChecked] = useState([]);
  const [checkedDomains, setCheckedDomains] = useState([]);

  //categories
  function getChecked(e) {
    var array = [...checked]; // make a separate copy of the array
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
          id={item.name}
          className="form-check-input mb-2"
          onChange={getChecked}
        />
        <label htmlFor={item.id} className='mx-2'>{item.name}</label>
      </div>
    );
  });

  //Domains
  function getDomains(e) {
    var array = [...checkedDomains]; // make a separate copy of the array
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
        <label htmlFor={domain} className="mx-2">{domain}</label>
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
          className="filterConterSearch mt-4 px-3 m-auto"
          placeholder="სახელით ძებნა"
          onChange={(e) => setFilterWithName(e.target.value)}
        />
        <p className="filterNames mt-3" >ფასი</p>

        <div className="row">
          <input
            type="number"
            value={priceFrom}
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
            value={priceTo}
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

        <p className="filterNames mt-3">სიმბოლოების რაოდენობა</p>

        <div className="row ">
          <input
            type="number"
            value={minSimbol}
            id="form1"
            className="filterConterSearch m-auto col-5 px-2"
            style={{
              height: "44px",
            }}
            onChange={(e) => setMinSimbol(e.target.value)}
          />
          <input
            type="number"
            value={maxSymbol}
            id="form1"
            className="filterConterSearch m-auto col-5 px-2"
            style={{
              height: "44px",
            }}
            onChange={(e) => setMaxSymbol(e.target.value)}
          />
          <div className="mt-3 mb-3"></div>
        </div>

        <form className="multi-range-field my-5 pb-5">
  <input id="multi24" className="multi-range" type="range" />
</form>

        <p className="filterNames mt-3">კატეგორიები</p>
        {categories}

        <p className="filterNames mt-3">დომენის ზონა</p>
        {domainZone}

      </div>
    </div>
  );
}
export default Filters;
