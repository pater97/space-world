// -- REDUX
import { useDispatch,useSelector } from "react-redux";
import { fetchPeople } from "./store/thunk";

function App() {
  // # INIT HOOK
  const dispatch = useDispatch();
  // # REDUX STATE
  const { people, loading, error } = useSelector((state) => state.requestManager);

  const loadPeople = () => {
    dispatch(fetchPeople()); 
  };

  return (
    <div>
      <button onClick={loadPeople}>Carica Persone</button>

      {loading && <p>Caricamento in corso...</p>}
      {error && <p>Errore: {error}</p>}
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
