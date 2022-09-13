import * as React from "react";
import "../../styles/slider.css";
import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../../store/index";

function SliderPrice() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50000);
  const priceRange = useSelector((state) => state.priceRange);

  useEffect(() => {
    if (priceRange.priceFrom) {
      setMin(parseInt(priceRange.priceFrom));
    }
    if (priceRange.priceTo) {
      setMax(parseInt(priceRange.priceTo));
    }
  }, [priceRange, min, max]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      counterActions.priceRangeSetter({
        priceFrom: min,
        priceTo: max,
      })
    );
  }, [min, max, dispatch]);

  return (
    <main>
      <div className="container">
        <ReactSlider
          defaultValue={[min, max]}
          className="slider"
          trackClassName="tracker"
          min={0}
          max={50000}
          minDistance={20}
          step={20}
          withTracks={true}
          pearling={true}
          renderThumb={(props) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className="track"></div>;
          }}
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
          }}
        />
      </div>
    </main>
  );
}

export default SliderPrice;
