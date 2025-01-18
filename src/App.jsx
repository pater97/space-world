// -- REACT
import { useEffect,useState } from "react";
// -- REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople ,fetchPlanetDetails} from "./store/thunk";
// -- ASSETS
import logo from "./assets/logo.svg";
// -- COMPONENTS
import Loader from "./components/loader/Loader";
import Table from "./components/table/Table";
// -- STYLE
import "./App.scss";

function App() {
  // # INIT HOOK
  const dispatch = useDispatch();
  // # REDUX STATE
  const { people, loading, error } = useSelector(
    (state) => state.requestManager
  );
  // # STATE
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  
  const onPlanetClick = (planetUrl) => {
    const planetId = planetUrl.split('/').slice(-2, -1)[0]; 
    dispatch(fetchPlanetDetails(planetId));
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
            placeholder="Search by name"
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />
        )}
      </div>
      {/* TABLE */}
      <div className="tableContainer">
        {loading && !error && <Loader />}
        {!loading && !error && people && <Table data={people} search={search} onPlanetClick={onPlanetClick}/>}
        {!loading && error && (
          <div className="error-message">
            <p>
              Si è verificato un errore.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
