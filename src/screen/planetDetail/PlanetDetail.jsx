// -- REACT
import React, { useEffect } from "react";
// -- RR
import { useParams } from "react-router";
// -- REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetDetails } from "../../store/thunk";
// -- COMPONENTS
import Loader from "../../components/loader/Loader";
// -- STYLE
import "./PlanetDetail.scss";

const PlanetDetail = () => {
  // # TAKE PARAM
  const { planetId } = useParams();
  // # REDUX STATE
  const dispatch = useDispatch();
  const { planetDetails, loadingPlanetDetails, errorPlanetDetails } =
    useSelector((state) => state.requestManager);

  useEffect(() => {
    dispatch(fetchPlanetDetails(planetId));
  }, [dispatch, planetId]);

  if (loadingPlanetDetails) return <Loader />;
  if (errorPlanetDetails)
    return <p className="error-message">Error during fetch data</p>;

  return (
    <div className="planet-detail-container">
      <div className="planet-detail">
        {planetDetails ? (
          <>
            <h1>{planetDetails.name}</h1>
            <div className="details-grid">
              <p>
                <strong>Rotation Period:</strong>{" "}
                {planetDetails?.rotation_period}
              </p>
              <p>
                <strong>Orbital Period:</strong> {planetDetails?.orbital_period}
              </p>
              <p>
                <strong>Diameter:</strong> {planetDetails?.diameter}
              </p>
              <p>
                <strong>Climate:</strong> {planetDetails?.climate}
              </p>
              <p>
                <strong>Gravity:</strong> {planetDetails?.gravity}
              </p>
              <p>
                <strong>Terrain:</strong> {planetDetails?.terrain}
              </p>
              <p>
                <strong>Surface Water:</strong> {planetDetails?.surface_water}%
              </p>
              <p>
                <strong>Population:</strong> {planetDetails?.population}
              </p>
            </div>
          </>
        ) : (
          <p>No details available for this planet.</p>
        )}
      </div>
    </div>
  );
};

export default PlanetDetail;
