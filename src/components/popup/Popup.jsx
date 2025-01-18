import "./popup.scss";

const Popup = ({ planetData, closePopup }) => {
  return (
    <div className="popup-overlay" id="popup-overlay">
      <div className="popup active">
        <div className="popup-header">
          <h2>Planet {planetData?.name}</h2>
          <span className="popup-close" onClick={closePopup}>
            &times;
          </span>
        </div>
        <div className="popup-content">
          <ul>
            <li><strong>Diameter:</strong> {planetData?.diameter} </li>
            <li><strong>Climate:</strong> {planetData?.climate}</li>
            <li><strong>Population:</strong> {planetData?.population}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
