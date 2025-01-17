// -- REACT
import { useEffect } from "react";
// -- REDUX
import { useDispatch } from "react-redux";
import { setPeople } from "../store/slice/peopleSlice";
// -- SERVICES
import { getPeople } from "../services";
// -- STYLE
import "./App.css";
import React from "react";

function Home() {
  // # INIT HOOK
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const allPeople = await getPeople();
      console.log("allPeople", allPeople);
    };
    fetchData();
  }, []);
  return <div>Home</div>;
}

export default Home;
