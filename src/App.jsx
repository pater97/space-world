// -- REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "./store/thunk";
import logo from "./assets/logo.svg";
import Loader from "./components/loader/Loader";
// -- STYLE 
import "./App.scss";

function App() {
  // # INIT HOOK
  const dispatch = useDispatch();
  // # REDUX STATE
  const { people, loading, error } = useSelector(
    (state) => state.requestManager
  );

  const loadPeople = () => {
    dispatch(fetchPeople());
  };

  return (
    <main id="mainContainer">
      {/* LOGO */}
      <div className="logoContainer">
        <img src={logo} className="logo" />
      </div>
      {/* TABLE */}
      <div className="tableContainer">
        <Loader/>
      </div>
      {/* <button onClick={loadPeople}>Carica Persone</button>

      {loading && <p>Caricamento in corso...</p>}
      {error && <p>Errore: {error}</p>}
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul> */}
    </main>
  );
}

export default App;
