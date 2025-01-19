// -- STYLE
import "./popup.scss";
// -- COMPONENTS
import Loader from "../loader/Loader";
// -- RR
import { useNavigate } from "react-router";

const Popup = ({ planetData, closePopup, loading, error }) => {
  // # INIT HOOK
  const navigate = useNavigate();
  // # NAVIGATION
  const navigateToPlanetDetail = (planetUrl) => () => {
    const planetId = planetUrl.split("/").slice(-2, -1)[0];
    closePopup()
    navigate(`/planet/${planetId}`);
  };

  return (
    <div className="popup-overlay" id="popup-overlay">
      <div className="popup active">
        {loading && !error ? (
          <Loader />
        ) : (
          <>
            <div className="popup-header">
              <h2>{planetData?.name ? planetData?.name : "Planet"}</h2>
              <span className="popup-close" onClick={closePopup}>
                &times;
              </span>
            </div>
            <div className="popup-content">
              {!loading && error && (
                <div className="error-message">
                  <p>Si è verificato un errore.</p>
                </div>
              )}
              {!loading && !error && planetData && (
                <>
                  <ul>
                    <li>
                      <strong>Diameter:</strong> {planetData?.diameter}{" "}
                    </li>
                    <li>
                      <strong>Climate:</strong> {planetData?.climate}
                    </li>
                    <li>
                      <strong>Population:</strong> {planetData?.population}
                    </li>
                  </ul>
                  <div
                    className="moreDetailsButton"
                    onClick={navigateToPlanetDetail(planetData?.url)}
                  >
                    <span>View More</span>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
