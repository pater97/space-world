// -- REACT
import { useEffect, useState } from "react";
// -- REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, fetchPlanetDetails } from "./store/thunk";
import { setShowPlanetDetails } from "./store/slice/requestManagerSlice";
// -- ASSETS
import logo from "./assets/logo.svg";
// -- COMPONENTS
import Loader from "./components/loader/Loader";
import Table from "./components/table/Table";
import Popup from "./components/popup/Popup";
// -- STYLE
import "./App.scss";

function App() {
  // # INIT HOOK
  const dispatch = useDispatch();
  // # REDUX STATE
  const {
    people,
    loading,
    error,
    planetDetails,
    loadingPlanetDetails,
    errorPlanetDetails,
    showPlanetDetails,
    nextPage,
    prevPage,
  } = useSelector((state) => state.requestManager);
  const {} = useSelector((state) => state.requestManager);
  // # STATE
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onPlanetClick = (planetUrl) => {
    const planetId = planetUrl.split("/").slice(-2, -1)[0];
    dispatch(fetchPlanetDetails(planetId));
    dispatch(setShowPlanetDetails());
  };

  const closePopup = () => {
    dispatch(setShowPlanetDetails());
  };

  const tableNavigation = (tablePage) => () => {
    dispatch(fetchPeople(tablePage));
  };

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  return (
    <main id="mainContainer">
      {/* LOGO */}
      <div className="logoContainer">
        <img src={logo} className="logo" />
      </div>
      <div className="head">
        <h1>Space world</h1>
      </div>
      <div className="inputContainer">
        {!loading && !error && people && (
          <input
            type="text"
            placeholder="Search by person name"
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />
        )}
      </div>
      {/* TABLE */}
      <div className="tableContainer">
        {loading && !error && <Loader />}
        {!loading && !error && people && (
          <>
            <Table
              data={people}
              search={search}
              onPlanetClick={onPlanetClick}
            />
            {/* // NAVIGATION  */}
            <div className="navigation">
              <span onClick={tableNavigation(prevPage)}>{prevPage}</span>
              <div className="separator"></div>
              <span onClick={tableNavigation(nextPage)}>{nextPage}</span>
            </div>
          </>
        )}
        {!loading && error && (
          <div className="error-message">
            <p>Si è verificato un errore.</p>
          </div>
        )}
      </div>
      {/* POPUP */}
      {showPlanetDetails && (
        <Popup
          planetData={planetDetails}
          closePopup={closePopup}
          loading={loadingPlanetDetails}
          error={errorPlanetDetails}
        />
      )}
    </main>
  );
}

export default App;
