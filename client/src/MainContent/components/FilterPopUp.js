import Filters from "./Filters";

function FilterPopUp(props) {
  return (
    <div className="popUp">
      <div className="modal-header">
        <h5 className="modal-title mx-3">ფილტრი</h5>
        <button
          type="button"
          className="btn-close m-4"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={(e) => props.SetContentRender(false)}
        ></button>
      </div>
      <Filters />
      <button
        className=" m-auto mb-2"
        onClick={(e) => props.SetContentRender(false)}
      >
        ძიება
      </button>
    </div>
  );
}
export default FilterPopUp;
